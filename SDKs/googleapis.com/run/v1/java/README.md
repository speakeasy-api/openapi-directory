# openapisdk

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'openapisdk:openapisdk:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

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
                    parent = "sit";
                }};
                queryParams = new RunNamespacesAuthorizeddomainsListQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "culpa";
                    alt = "media";
                    callback = "consequuntur";
                    fields = "dolor";
                    key = "expedita";
                    oauthToken = "voluptas";
                    pageSize = 8274930044578894929;
                    pageToken = "et";
                    prettyPrint = true;
                    quotaUser = "rerum";
                    uploadType = "dicta";
                    uploadProtocol = "debitis";
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

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
