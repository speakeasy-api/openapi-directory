# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/microcks.local/1.7.0/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.GetResource(ctx, operations.GetResourceRequest{
        Name: "Terrence Rau",
    }, operations.GetResourceSecurity{
        JwtBearer: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Resource != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [GetResource](docs/sdk/README.md#getresource) - Get Resource
* [GetResourcesByService](docs/sdk/README.md#getresourcesbyservice) - Get Resources by Service

### [Config](docs/config/README.md)

* [CreateSecret](docs/config/README.md#createsecret) - Create a new Secret
* [DeleteSecret](docs/config/README.md#deletesecret) - Delete Secret
* [GetFeaturesConfiguration](docs/config/README.md#getfeaturesconfiguration) - Get features configuration
* [GetKeycloakConfig](docs/config/README.md#getkeycloakconfig) - Get authentification configuration
* [GetSecret](docs/config/README.md#getsecret) - Get Secret
* [GetSecrets](docs/config/README.md#getsecrets) - Get Secrets
* [GetSecretsCounter](docs/config/README.md#getsecretscounter) - Get the Secrets counter
* [UpdateSecret](docs/config/README.md#updatesecret) - Update Secret

### [Job](docs/job/README.md)

* [ActivateImportJob](docs/job/README.md#activateimportjob) - Activate an ImportJob
* [CreateImportJob](docs/job/README.md#createimportjob) - Create ImportJob
* [DeleteImportJob](docs/job/README.md#deleteimportjob) - Delete ImportJob
* [GetImportJobCounter](docs/job/README.md#getimportjobcounter) - Get the ImportJobs counter
* [GetImportJobs](docs/job/README.md#getimportjobs) - Get ImportJobs
* [StartImportJob](docs/job/README.md#startimportjob) - Start an ImportJob
* [StopImportJob](docs/job/README.md#stopimportjob) - Stop an ImportJob
* [GetJobsID](docs/job/README.md#getjobsid) - Get ImportJob
* [PostJobsID](docs/job/README.md#postjobsid) - Update ImportJob
* [UploadArtifact](docs/job/README.md#uploadartifact) - Upload an artifact

### [Metrics](docs/metrics/README.md)

* [GetAggregatedInvocationsStats](docs/metrics/README.md#getaggregatedinvocationsstats) - Get aggregated invocation statistics for a day
* [GetConformanceMetricsAggregation](docs/metrics/README.md#getconformancemetricsaggregation) - Get aggregation of conformance metrics
* [GetInvocationStatsByService](docs/metrics/README.md#getinvocationstatsbyservice) - Get invocation statistics for Service
* [GetLatestAggregatedInvocationsStats](docs/metrics/README.md#getlatestaggregatedinvocationsstats) - Get aggregated invocations statistics for latest days
* [GetLatestTestResults](docs/metrics/README.md#getlatesttestresults) - Get latest tests results
* [GetServiceTestConformanceMetric](docs/metrics/README.md#getservicetestconformancemetric) - Get conformance metrics for a Service
* [GetTopIvnocationsStatsByDay](docs/metrics/README.md#gettopivnocationsstatsbyday) - Get top invocation statistics for a day

### [Mock](docs/mock/README.md)

* [DeleteService](docs/mock/README.md#deleteservice) - Delete Service
* [GetService](docs/mock/README.md#getservice) - Get Service
* [GetServices](docs/mock/README.md#getservices) - Get Services and APIs
* [GetServicesCounter](docs/mock/README.md#getservicescounter) - Get the Services counter
* [GetServicesLabels](docs/mock/README.md#getserviceslabels) - Get the already used labels for Services
* [OverrideServiceOperation](docs/mock/README.md#overrideserviceoperation) - Override Service Operation
* [SearchServices](docs/mock/README.md#searchservices) - Search for Services and APIs
* [UpdateServiceMetadata](docs/mock/README.md#updateservicemetadata) - Update Service Metadata
* [ExportSnapshot](docs/mock/README.md#exportsnapshot) - Export a snapshot
* [ImportSnapshot](docs/mock/README.md#importsnapshot) - Import a snapshot

### [Test](docs/test/README.md)

* [CreateTest](docs/test/README.md#createtest) - Create a new Test
* [GetEventsByTestCase](docs/test/README.md#geteventsbytestcase) - Get events for TestCase
* [GetMessagesByTestCase](docs/test/README.md#getmessagesbytestcase) - Get messages for TestCase
* [GetTestResult](docs/test/README.md#gettestresult) - Get TestResult
* [GetTestResultsByService](docs/test/README.md#gettestresultsbyservice) - Get TestResults by Service
* [GetTestResultsByServiceCounter](docs/test/README.md#gettestresultsbyservicecounter) - Get the TestResults for Service counter
* [ReportTestCaseResult](docs/test/README.md#reporttestcaseresult) - Report and create a new TestCaseResult
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
