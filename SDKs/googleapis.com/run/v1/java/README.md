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

import org.openapis.openapi.models.operations.RunNamespacesAuthorizeddomainsListSecurity;
import org.openapis.openapi.models.operations.RunNamespacesAuthorizeddomainsListPathParams;
import org.openapis.openapi.models.operations.RunNamespacesAuthorizeddomainsListQueryParams;
import org.openapis.openapi.models.operations.RunNamespacesAuthorizeddomainsListRequest;
import org.openapis.openapi.models.operations.RunNamespacesAuthorizeddomainsListResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RunNamespacesAuthorizeddomainsListRequest req = new RunNamespacesAuthorizeddomainsListRequest() {{
                security = new RunNamespacesAuthorizeddomainsListSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new RunNamespacesAuthorizeddomainsListPathParams() {{
                    parent = "corrupti";
                }};
                queryParams = new RunNamespacesAuthorizeddomainsListQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    fields = "nulla";
                    key = "corrupti";
                    oauthToken = "illum";
                    pageSize = 423655;
                    pageToken = "error";
                    prettyPrint = false;
                    quotaUser = "deserunt";
                    uploadType = "suscipit";
                    uploadProtocol = "iure";
                }};
            }};            

            RunNamespacesAuthorizeddomainsListResponse res = sdk.namespaces.runNamespacesAuthorizeddomainsList(req);

            if (res.listAuthorizedDomainsResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### namespaces

* `runNamespacesAuthorizeddomainsList` - List authorized domains.
* `runNamespacesConfigurationsList` - List configurations.
* `runNamespacesDomainmappingsCreate` - Create a new domain mapping.
* `runNamespacesDomainmappingsDelete` - Delete a domain mapping.
* `runNamespacesDomainmappingsGet` - Get information about a domain mapping.
* `runNamespacesDomainmappingsList` - List all domain mappings.
* `runNamespacesExecutionsCancel` - Cancel an execution.
* `runNamespacesExecutionsList` - List executions.
* `runNamespacesJobsCreate` - Create a job.
* `runNamespacesJobsDelete` - Delete a job.
* `runNamespacesJobsList` - List jobs.
* `runNamespacesJobsReplaceJob` - Replace a job. Only the spec and metadata labels and annotations are modifiable. After the Replace request, Cloud Run will work to make the 'status' match the requested 'spec'. May provide metadata.resourceVersion to enforce update from last read for optimistic concurrency control.
* `runNamespacesJobsRun` - Trigger creation of a new execution of this job.
* `runNamespacesRevisionsList` - List revisions.
* `runNamespacesRoutesList` - List routes.
* `runNamespacesServicesCreate` - Creates a new Service. Service creation will trigger a new deployment. Use GetService, and check service.status to determine if the Service is ready.
* `runNamespacesServicesDelete` - Deletes the provided service. This will cause the Service to stop serving traffic and will delete all associated Revisions.
* `runNamespacesServicesGet` - Gets information about a service.
* `runNamespacesServicesList` - Lists services for the given project and region.
* `runNamespacesServicesReplaceService` - Replaces a service. Only the spec and metadata labels and annotations are modifiable. After the Update request, Cloud Run will work to make the 'status' match the requested 'spec'. May provide metadata.resourceVersion to enforce update from last read for optimistic concurrency control.
* `runNamespacesTasksGet` - Get information about a task.
* `runNamespacesTasksList` - List tasks.

### projects

* `runProjectsLocationsAuthorizeddomainsList` - List authorized domains.
* `runProjectsLocationsConfigurationsList` - List configurations.
* `runProjectsLocationsDomainmappingsCreate` - Create a new domain mapping.
* `runProjectsLocationsDomainmappingsList` - List all domain mappings.
* `runProjectsLocationsList` - Lists information about the supported locations for this service.
* `runProjectsLocationsRevisionsList` - List revisions.
* `runProjectsLocationsRoutesList` - List routes.
* `runProjectsLocationsServicesCreate` - Creates a new Service. Service creation will trigger a new deployment. Use GetService, and check service.status to determine if the Service is ready.
* `runProjectsLocationsServicesDelete` - Deletes the provided service. This will cause the Service to stop serving traffic and will delete all associated Revisions.
* `runProjectsLocationsServicesGet` - Gets information about a service.
* `runProjectsLocationsServicesGetIamPolicy` - Gets the IAM Access Control policy currently in effect for the given Cloud Run service. This result does not include any inherited policies.
* `runProjectsLocationsServicesList` - Lists services for the given project and region.
* `runProjectsLocationsServicesReplaceService` - Replaces a service. Only the spec and metadata labels and annotations are modifiable. After the Update request, Cloud Run will work to make the 'status' match the requested 'spec'. May provide metadata.resourceVersion to enforce update from last read for optimistic concurrency control.
* `runProjectsLocationsServicesSetIamPolicy` - Sets the IAM Access control policy for the specified Service. Overwrites any existing policy.
* `runProjectsLocationsServicesTestIamPermissions` - Returns permissions that a caller has on the specified Project. There are no permissions required for making this API call.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
