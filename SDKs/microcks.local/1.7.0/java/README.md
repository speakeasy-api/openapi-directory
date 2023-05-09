# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetResourceRequest;
import org.openapis.openapi.models.operations.GetResourceResponse;
import org.openapis.openapi.models.operations.GetResourceSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetResourceRequest req = new GetResourceRequest("corrupti");            

            GetResourceResponse res = sdk.getResource(req, new GetResourceSecurity("provident") {{
                jwtBearer = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.resource != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [getResource](docs/sdk/README.md#getresource) - Get Resource
* [getResourcesByService](docs/sdk/README.md#getresourcesbyservice) - Get Resources by Service

### [config](docs/config/README.md)

* [createSecret](docs/config/README.md#createsecret) - Create a new Secret
* [deleteSecret](docs/config/README.md#deletesecret) - Delete Secret
* [getFeaturesConfiguration](docs/config/README.md#getfeaturesconfiguration) - Get features configuration
* [getKeycloakConfig](docs/config/README.md#getkeycloakconfig) - Get authentification configuration
* [getSecret](docs/config/README.md#getsecret) - Get Secret
* [getSecrets](docs/config/README.md#getsecrets) - Get Secrets
* [getSecretsCounter](docs/config/README.md#getsecretscounter) - Get the Secrets counter
* [updateSecret](docs/config/README.md#updatesecret) - Update Secret

### [job](docs/job/README.md)

* [activateImportJob](docs/job/README.md#activateimportjob) - Activate an ImportJob
* [createImportJob](docs/job/README.md#createimportjob) - Create ImportJob
* [deleteImportJob](docs/job/README.md#deleteimportjob) - Delete ImportJob
* [getImportJobCounter](docs/job/README.md#getimportjobcounter) - Get the ImportJobs counter
* [getImportJobs](docs/job/README.md#getimportjobs) - Get ImportJobs
* [startImportJob](docs/job/README.md#startimportjob) - Start an ImportJob
* [stopImportJob](docs/job/README.md#stopimportjob) - Stop an ImportJob
* [getJobsId](docs/job/README.md#getjobsid) - Get ImportJob
* [postJobsId](docs/job/README.md#postjobsid) - Update ImportJob
* [uploadArtifact](docs/job/README.md#uploadartifact) - Upload an artifact

### [metrics](docs/metrics/README.md)

* [getAggregatedInvocationsStats](docs/metrics/README.md#getaggregatedinvocationsstats) - Get aggregated invocation statistics for a day
* [getConformanceMetricsAggregation](docs/metrics/README.md#getconformancemetricsaggregation) - Get aggregation of conformance metrics
* [getInvocationStatsByService](docs/metrics/README.md#getinvocationstatsbyservice) - Get invocation statistics for Service
* [getLatestAggregatedInvocationsStats](docs/metrics/README.md#getlatestaggregatedinvocationsstats) - Get aggregated invocations statistics for latest days
* [getLatestTestResults](docs/metrics/README.md#getlatesttestresults) - Get latest tests results
* [getServiceTestConformanceMetric](docs/metrics/README.md#getservicetestconformancemetric) - Get conformance metrics for a Service
* [getTopIvnocationsStatsByDay](docs/metrics/README.md#gettopivnocationsstatsbyday) - Get top invocation statistics for a day

### [mock](docs/mock/README.md)

* [deleteService](docs/mock/README.md#deleteservice) - Delete Service
* [getService](docs/mock/README.md#getservice) - Get Service
* [getServices](docs/mock/README.md#getservices) - Get Services and APIs
* [getServicesCounter](docs/mock/README.md#getservicescounter) - Get the Services counter
* [getServicesLabels](docs/mock/README.md#getserviceslabels) - Get the already used labels for Services
* [overrideServiceOperation](docs/mock/README.md#overrideserviceoperation) - Override Service Operation
* [searchServices](docs/mock/README.md#searchservices) - Search for Services and APIs
* [updateServiceMetadata](docs/mock/README.md#updateservicemetadata) - Update Service Metadata
* [exportSnapshot](docs/mock/README.md#exportsnapshot) - Export a snapshot
* [importSnapshot](docs/mock/README.md#importsnapshot) - Import a snapshot

### [test](docs/test/README.md)

* [createTest](docs/test/README.md#createtest) - Create a new Test
* [getEventsByTestCase](docs/test/README.md#geteventsbytestcase) - Get events for TestCase
* [getMessagesByTestCase](docs/test/README.md#getmessagesbytestcase) - Get messages for TestCase
* [getTestResult](docs/test/README.md#gettestresult) - Get TestResult
* [getTestResultsByService](docs/test/README.md#gettestresultsbyservice) - Get TestResults by Service
* [getTestResultsByServiceCounter](docs/test/README.md#gettestresultsbyservicecounter) - Get the TestResults for Service counter
* [reportTestCaseResult](docs/test/README.md#reporttestcaseresult) - Report and create a new TestCaseResult
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
