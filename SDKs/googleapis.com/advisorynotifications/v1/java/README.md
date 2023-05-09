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
import org.openapis.openapi.models.operations.AdvisorynotificationsOrganizationsLocationsNotificationsGetRequest;
import org.openapis.openapi.models.operations.AdvisorynotificationsOrganizationsLocationsNotificationsGetResponse;
import org.openapis.openapi.models.operations.AdvisorynotificationsOrganizationsLocationsNotificationsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdvisorynotificationsOrganizationsLocationsNotificationsGetRequest req = new AdvisorynotificationsOrganizationsLocationsNotificationsGetRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "distinctio";
                alt = AltEnum.PROTO;
                callback = "unde";
                fields = "nulla";
                key = "corrupti";
                languageCode = "illum";
                oauthToken = "vel";
                prettyPrint = false;
                quotaUser = "error";
                uploadType = "deserunt";
                uploadProtocol = "suscipit";
            }};            

            AdvisorynotificationsOrganizationsLocationsNotificationsGetResponse res = sdk.organizations.advisorynotificationsOrganizationsLocationsNotificationsGet(req, new AdvisorynotificationsOrganizationsLocationsNotificationsGetSecurity("iure", "magnam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudAdvisorynotificationsV1Notification != null) {
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


### [organizations](docs/organizations/README.md)

* [advisorynotificationsOrganizationsLocationsNotificationsGet](docs/organizations/README.md#advisorynotificationsorganizationslocationsnotificationsget) - Gets a notification.
* [advisorynotificationsOrganizationsLocationsNotificationsList](docs/organizations/README.md#advisorynotificationsorganizationslocationsnotificationslist) - Lists notifications under a given parent.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
