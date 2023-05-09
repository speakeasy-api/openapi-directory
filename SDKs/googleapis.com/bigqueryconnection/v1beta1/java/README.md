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
import org.openapis.openapi.models.operations.BigqueryconnectionProjectsLocationsConnectionsCreateRequest;
import org.openapis.openapi.models.operations.BigqueryconnectionProjectsLocationsConnectionsCreateResponse;
import org.openapis.openapi.models.operations.BigqueryconnectionProjectsLocationsConnectionsCreateSecurity;
import org.openapis.openapi.models.operations.BigqueryconnectionProjectsLocationsConnectionsCreateSecurityOption1;
import org.openapis.openapi.models.operations.BigqueryconnectionProjectsLocationsConnectionsCreateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CloudSqlCredential;
import org.openapis.openapi.models.shared.CloudSqlPropertiesInput;
import org.openapis.openapi.models.shared.CloudSqlPropertiesTypeEnum;
import org.openapis.openapi.models.shared.ConnectionInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BigqueryconnectionProjectsLocationsConnectionsCreateRequest req = new BigqueryconnectionProjectsLocationsConnectionsCreateRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                connectionInput = new ConnectionInput() {{
                    cloudSql = new CloudSqlPropertiesInput() {{
                        credential = new CloudSqlCredential() {{
                            password = "distinctio";
                            username = "Rosalinda_Mitchell84";
                        }};;
                        database = "vel";
                        instanceId = "error";
                        type = CloudSqlPropertiesTypeEnum.POSTGRES;
                    }};;
                    description = "suscipit";
                    friendlyName = "iure";
                    name = "Raquel Bednar";
                }};;
                accessToken = "suscipit";
                alt = AltEnum.MEDIA;
                callback = "minus";
                connectionId = "placeat";
                fields = "voluptatum";
                key = "iusto";
                oauthToken = "excepturi";
                prettyPrint = false;
                quotaUser = "nisi";
                uploadType = "recusandae";
                uploadProtocol = "temporibus";
            }};            

            BigqueryconnectionProjectsLocationsConnectionsCreateResponse res = sdk.projects.bigqueryconnectionProjectsLocationsConnectionsCreate(req, new BigqueryconnectionProjectsLocationsConnectionsCreateSecurity() {{
                option1 = new BigqueryconnectionProjectsLocationsConnectionsCreateSecurityOption1("ab", "quis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.connection != null) {
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


### [projects](docs/projects/README.md)

* [bigqueryconnectionProjectsLocationsConnectionsCreate](docs/projects/README.md#bigqueryconnectionprojectslocationsconnectionscreate) - Creates a new connection.
* [bigqueryconnectionProjectsLocationsConnectionsDelete](docs/projects/README.md#bigqueryconnectionprojectslocationsconnectionsdelete) - Deletes connection and associated credential.
* [bigqueryconnectionProjectsLocationsConnectionsGet](docs/projects/README.md#bigqueryconnectionprojectslocationsconnectionsget) - Returns specified connection.
* [bigqueryconnectionProjectsLocationsConnectionsGetIamPolicy](docs/projects/README.md#bigqueryconnectionprojectslocationsconnectionsgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [bigqueryconnectionProjectsLocationsConnectionsList](docs/projects/README.md#bigqueryconnectionprojectslocationsconnectionslist) - Returns a list of connections in the given project.
* [bigqueryconnectionProjectsLocationsConnectionsSetIamPolicy](docs/projects/README.md#bigqueryconnectionprojectslocationsconnectionssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [bigqueryconnectionProjectsLocationsConnectionsTestIamPermissions](docs/projects/README.md#bigqueryconnectionprojectslocationsconnectionstestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [bigqueryconnectionProjectsLocationsConnectionsUpdateCredential](docs/projects/README.md#bigqueryconnectionprojectslocationsconnectionsupdatecredential) - Sets the credential for the specified connection.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
