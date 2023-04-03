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

import org.openapis.openapi.models.operations.CreateDeviceCodeSecurity;
import org.openapis.openapi.models.operations.CreateDeviceCodeCreateDeviceCodeRequest;
import org.openapis.openapi.models.operations.CreateDeviceCodeResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateDeviceCodeCreateDeviceCodeRequest req = new CreateDeviceCodeCreateDeviceCodeRequest() {{
                audiences = new String[]{{
                    add("provident"),
                    add("distinctio"),
                    add("quibusdam"),
                }};
                clientSid = "unde";
                scopes = new String[]{{
                    add("corrupti"),
                    add("illum"),
                    add("vel"),
                    add("error"),
                }};
            }}            

            CreateDeviceCodeResponse res = sdk.createDeviceCode(req, new CreateDeviceCodeSecurity() {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.oauthV1DeviceCode.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `createDeviceCode` - Issues a new Access token (optionally identity_token & refresh_token) in exchange of Oauth grant
* `createToken` - Issues a new Access token (optionally identity_token & refresh_token) in exchange of Oauth grant
* `fetchCerts` - Fetches public JWKs
* `fetchOpenidDiscovery` - Fetch configuration details about the OpenID Connect Authorization Server
* `fetchUserInfo` - Retrieves the consented UserInfo and other claims about the logged-in subject (end-user).
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
