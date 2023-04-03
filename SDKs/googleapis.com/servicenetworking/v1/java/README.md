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

import org.openapis.openapi.models.operations.ServicenetworkingOperationsCancelSecurityOption1;
import org.openapis.openapi.models.operations.ServicenetworkingOperationsCancelSecurityOption2;
import org.openapis.openapi.models.operations.ServicenetworkingOperationsCancelSecurity;
import org.openapis.openapi.models.operations.ServicenetworkingOperationsCancelRequest;
import org.openapis.openapi.models.operations.ServicenetworkingOperationsCancelResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ServicenetworkingOperationsCancelRequest req = new ServicenetworkingOperationsCancelRequest() {{
                dollarXgafv = "2";
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("distinctio", "quibusdam");
                    put("unde", "nulla");
                    put("corrupti", "illum");
                }};
                accessToken = "vel";
                alt = "media";
                callback = "deserunt";
                fields = "suscipit";
                key = "iure";
                name = "magnam";
                oauthToken = "debitis";
                prettyPrint = false;
                quotaUser = "ipsa";
                uploadType = "delectus";
                uploadProtocol = "tempora";
            }}            

            ServicenetworkingOperationsCancelResponse res = sdk.operations.servicenetworkingOperationsCancel(req, new ServicenetworkingOperationsCancelSecurity() {{
                option1 = new ServicenetworkingOperationsCancelSecurityOption1() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.empty.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### operations

* `servicenetworkingOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

### services

* `servicenetworkingServicesAddSubnetwork` - For service producers, provisions a new subnet in a peered service's shared VPC network in the requested region and with the requested size that's expressed as a CIDR range (number of leading bits of ipV4 network mask). The method checks against the assigned allocated ranges to find a non-conflicting IP address range. The method will reuse a subnet if subsequent calls contain the same subnet name, region, and prefix length. This method will make producer's tenant project to be a shared VPC service project as needed.
* `servicenetworkingServicesConnectionsCreate` - Creates a private connection that establishes a VPC Network Peering connection to a VPC network in the service producer's organization. The administrator of the service consumer's VPC network invokes this method. The administrator must assign one or more allocated IP ranges for provisioning subnetworks in the service producer's VPC network. This connection is used for all supported services in the service producer's organization, so it only needs to be invoked once.
* `servicenetworkingServicesConnectionsDeleteConnection` - Deletes a private service access connection.
* `servicenetworkingServicesConnectionsList` - List the private connections that are configured in a service consumer's VPC network.
* `servicenetworkingServicesConnectionsPatch` - Updates the allocated ranges that are assigned to a connection.
* `servicenetworkingServicesDisableVpcServiceControls` - Disables VPC service controls for a connection.
* `servicenetworkingServicesDnsRecordSetsAdd` - Service producers can use this method to add DNS record sets to private DNS zones in the shared producer host project.
* `servicenetworkingServicesDnsRecordSetsRemove` - Service producers can use this method to remove DNS record sets from private DNS zones in the shared producer host project.
* `servicenetworkingServicesDnsRecordSetsUpdate` - Service producers can use this method to update DNS record sets from private DNS zones in the shared producer host project.
* `servicenetworkingServicesDnsZonesAdd` - Service producers can use this method to add private DNS zones in the shared producer host project and matching peering zones in the consumer project.
* `servicenetworkingServicesDnsZonesRemove` - Service producers can use this method to remove private DNS zones in the shared producer host project and matching peering zones in the consumer project.
* `servicenetworkingServicesEnableVpcServiceControls` - Enables VPC service controls for a connection.
* `servicenetworkingServicesProjectsGlobalNetworksGet` - Service producers use this method to get the configuration of their connection including the import/export of custom routes and subnetwork routes with public IP.
* `servicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsCreate` - Creates a peered DNS domain which sends requests for records in given namespace originating in the service producer VPC network to the consumer VPC network to be resolved.
* `servicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsDelete` - Deletes a peered DNS domain.
* `servicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsList` - Lists peered DNS domains for a connection.
* `servicenetworkingServicesProjectsGlobalNetworksUpdateConsumerConfig` - Service producers use this method to update the configuration of their connection including the import/export of custom routes and subnetwork routes with public IP.
* `servicenetworkingServicesRolesAdd` - Service producers can use this method to add roles in the shared VPC host project. Each role is bound to the provided member. Each role must be selected from within an allowlisted set of roles. Each role is applied at only the granularity specified in the allowlist.
* `servicenetworkingServicesSearchRange` - Service producers can use this method to find a currently unused range within consumer allocated ranges. This returned range is not reserved, and not guaranteed to remain unused. It will validate previously provided allocated ranges, find non-conflicting sub-range of requested size (expressed in number of leading bits of ipv4 network mask, as in CIDR range notation).
* `servicenetworkingServicesValidate` - Service producers use this method to validate if the consumer provided network, project and requested range are valid. This allows them to use a fail-fast mechanism for consumer requests, and not have to wait for AddSubnetwork operation completion to determine if user request is invalid.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
