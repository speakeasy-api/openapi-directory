# customers

### Available Operations

* [sasportalCustomersList](#sasportalcustomerslist) - Returns a list of requested customers.
* [sasportalCustomersProvisionDeployment](#sasportalcustomersprovisiondeployment) - Creates a new SAS deployment through the GCP workflow. Creates a SAS organization if an organization match is not found.

## sasportalCustomersList

Returns a list of requested customers.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SasportalCustomersListRequest;
import org.openapis.openapi.models.operations.SasportalCustomersListResponse;
import org.openapis.openapi.models.operations.SasportalCustomersListSecurity;
import org.openapis.openapi.models.operations.SasportalCustomersListSecurityOption1;
import org.openapis.openapi.models.operations.SasportalCustomersListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SasportalCustomersListRequest req = new SasportalCustomersListRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ipsa";
                alt = AltEnum.PROTO;
                callback = "tempora";
                fields = "suscipit";
                key = "molestiae";
                oauthToken = "minus";
                pageSize = 812169L;
                pageToken = "voluptatum";
                prettyPrint = false;
                quotaUser = "iusto";
                uploadType = "excepturi";
                uploadProtocol = "nisi";
            }};            

            SasportalCustomersListResponse res = sdk.customers.sasportalCustomersList(req, new SasportalCustomersListSecurity() {{
                option1 = new SasportalCustomersListSecurityOption1("recusandae", "temporibus") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.sasPortalListCustomersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## sasportalCustomersProvisionDeployment

Creates a new SAS deployment through the GCP workflow. Creates a SAS organization if an organization match is not found.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SasportalCustomersProvisionDeploymentRequest;
import org.openapis.openapi.models.operations.SasportalCustomersProvisionDeploymentResponse;
import org.openapis.openapi.models.operations.SasportalCustomersProvisionDeploymentSecurity;
import org.openapis.openapi.models.operations.SasportalCustomersProvisionDeploymentSecurityOption1;
import org.openapis.openapi.models.operations.SasportalCustomersProvisionDeploymentSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.SasPortalProvisionDeploymentRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SasportalCustomersProvisionDeploymentRequest req = new SasportalCustomersProvisionDeploymentRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                sasPortalProvisionDeploymentRequest = new SasPortalProvisionDeploymentRequest() {{
                    newDeploymentDisplayName = "quis";
                    newOrganizationDisplayName = "veritatis";
                }};;
                accessToken = "deserunt";
                alt = AltEnum.JSON;
                callback = "ipsam";
                fields = "repellendus";
                key = "sapiente";
                oauthToken = "quo";
                prettyPrint = false;
                quotaUser = "odit";
                uploadType = "at";
                uploadProtocol = "at";
            }};            

            SasportalCustomersProvisionDeploymentResponse res = sdk.customers.sasportalCustomersProvisionDeployment(req, new SasportalCustomersProvisionDeploymentSecurity() {{
                option1 = new SasportalCustomersProvisionDeploymentSecurityOption1("maiores", "molestiae") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.sasPortalProvisionDeploymentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
