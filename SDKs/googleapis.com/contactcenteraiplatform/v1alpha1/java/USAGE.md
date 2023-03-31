<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.ContactcenteraiplatformProjectsLocationsContactCentersCreateSecurity;
import org.openapis.openapi.models.operations.ContactcenteraiplatformProjectsLocationsContactCentersCreatePathParams;
import org.openapis.openapi.models.operations.ContactcenteraiplatformProjectsLocationsContactCentersCreateQueryParams;
import org.openapis.openapi.models.operations.ContactcenteraiplatformProjectsLocationsContactCentersCreateRequest;
import org.openapis.openapi.models.operations.ContactcenteraiplatformProjectsLocationsContactCentersCreateResponse;
import org.openapis.openapi.models.shared.ContactCenterInput;
import org.openapis.openapi.models.shared.URIs;
import org.openapis.openapi.models.shared.SAMLParams;
import org.openapis.openapi.models.shared.InstanceConfigInstanceSizeEnum;
import org.openapis.openapi.models.shared.InstanceConfig;
import org.openapis.openapi.models.shared.AdminUser;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContactcenteraiplatformProjectsLocationsContactCentersCreateRequest req = new ContactcenteraiplatformProjectsLocationsContactCentersCreateRequest() {{
                security = new ContactcenteraiplatformProjectsLocationsContactCentersCreateSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new ContactcenteraiplatformProjectsLocationsContactCentersCreatePathParams() {{
                    parent = "corrupti";
                }};
                queryParams = new ContactcenteraiplatformProjectsLocationsContactCentersCreateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    contactCenterId = "nulla";
                    fields = "corrupti";
                    key = "illum";
                    oauthToken = "vel";
                    prettyPrint = false;
                    quotaUser = "error";
                    requestId = "deserunt";
                    uploadType = "suscipit";
                    uploadProtocol = "iure";
                }};
                request = new ContactCenterInput() {{
                    adminUser = new AdminUser() {{
                        familyName = "magnam";
                        givenName = "debitis";
                    }};
                    ccaipManagedUsers = false;
                    customerDomainPrefix = "ipsa";
                    displayName = "delectus";
                    instanceConfig = new InstanceConfig() {{
                        instanceSize = "STANDARD_SMALL";
                    }};
                    labels = new java.util.HashMap<String, String>() {{
                        put("molestiae", "minus");
                        put("placeat", "voluptatum");
                    }};
                    name = "iusto";
                    samlParams = new SAMLParams() {{
                        certificate = "excepturi";
                        entityId = "nisi";
                        ssoUri = "recusandae";
                        userEmail = "temporibus";
                    }};
                    uris = new URIs() {{
                        chatBotUri = "ab";
                        mediaUri = "quis";
                        rootUri = "veritatis";
                        virtualAgentStreamingServiceUri = "deserunt";
                    }};
                    userEmail = "perferendis";
                }};
            }};            

            ContactcenteraiplatformProjectsLocationsContactCentersCreateResponse res = sdk.projects.contactcenteraiplatformProjectsLocationsContactCentersCreate(req);

            if (res.operation.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->