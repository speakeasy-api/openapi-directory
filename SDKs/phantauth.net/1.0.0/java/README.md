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
import org.openapis.openapi.models.operations.GetClientClientIdRequest;
import org.openapis.openapi.models.operations.GetClientClientIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetClientClientIdRequest req = new GetClientClientIdRequest("corrupti");            

            GetClientClientIdResponse res = sdk.client.getClientClientId(req);

            if (res.getClientClientId200ApplicationJSONObject != null) {
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


### [client](docs/client/README.md)

* [getClientClientId](docs/client/README.md#getclientclientid) - Get a Client
* [getClientClientIdTokenKind](docs/client/README.md#getclientclientidtokenkind) - Get a Client Token
* [postClient](docs/client/README.md#postclient) - Create a Client Selfie

### [domain](docs/domain/README.md)

* [getDomainDomainname](docs/domain/README.md#getdomaindomainname) - Get a Domain

### [fleet](docs/fleet/README.md)

* [getFleetFleetname](docs/fleet/README.md#getfleetfleetname) - Get a Fleet

### [team](docs/team/README.md)

* [getTeamTeamname](docs/team/README.md#getteamteamname) - Get a Team

### [tenant](docs/tenant/README.md)

* [getTenantTenantname](docs/tenant/README.md#gettenanttenantname) - Get a Tenant

### [user](docs/user/README.md)

* [getUserUsername](docs/user/README.md#getuserusername) - Get a User
* [getUserUsernameTokenKind](docs/user/README.md#getuserusernametokenkind) - Get a User Token
* [postUser](docs/user/README.md#postuser) - Create a User Selfie
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
