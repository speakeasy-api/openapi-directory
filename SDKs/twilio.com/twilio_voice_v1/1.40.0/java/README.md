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

import org.openapis.openapi.models.operations.CreateByocTrunkSecurity;
import org.openapis.openapi.models.operations.CreateByocTrunkCreateByocTrunkRequestStatusCallbackMethodEnum;
import org.openapis.openapi.models.operations.CreateByocTrunkCreateByocTrunkRequestVoiceFallbackMethodEnum;
import org.openapis.openapi.models.operations.CreateByocTrunkCreateByocTrunkRequestVoiceMethodEnum;
import org.openapis.openapi.models.operations.CreateByocTrunkCreateByocTrunkRequest;
import org.openapis.openapi.models.operations.CreateByocTrunkRequest;
import org.openapis.openapi.models.operations.CreateByocTrunkResponse;
import org.openapis.openapi.models.shared.SchemeAccountSidAuthToken;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateByocTrunkRequest req = new CreateByocTrunkRequest() {{
                security = new CreateByocTrunkSecurity() {{
                    accountSidAuthToken = new SchemeAccountSidAuthToken() {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }};
                request = new CreateByocTrunkCreateByocTrunkRequest() {{
                    cnamLookupEnabled = false;
                    connectionPolicySid = "corrupti";
                    friendlyName = "provident";
                    fromDomainSid = "distinctio";
                    statusCallbackMethod = "DELETE";
                    statusCallbackUrl = "https://tidy-mascara.org";
                    voiceFallbackMethod = "POST";
                    voiceFallbackUrl = "https://present-giggle.info";
                    voiceMethod = "GET";
                    voiceUrl = "https://awesome-voter.biz";
                }};
            }};            

            CreateByocTrunkResponse res = sdk.createByocTrunk(req);

            if (res.voiceV1ByocTrunk.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `createByocTrunk`
* `createConnectionPolicy`
* `createConnectionPolicyTarget`
* `createDialingPermissionsCountryBulkUpdate` - Create a bulk update request to change voice dialing country permissions of one or more countries identified by the corresponding [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)
* `createIpRecord`
* `createSourceIpMapping`
* `deleteArchivedCall` - Delete an archived call record from Bulk Export. Note: this does not also delete the record from the Voice API.
* `deleteByocTrunk`
* `deleteConnectionPolicy`
* `deleteConnectionPolicyTarget`
* `deleteIpRecord`
* `deleteSourceIpMapping`
* `fetchByocTrunk`
* `fetchConnectionPolicy`
* `fetchConnectionPolicyTarget`
* `fetchDialingPermissionsCountry` - Retrieve voice dialing country permissions identified by the given ISO country code
* `fetchDialingPermissionsSettings` - Retrieve voice dialing permissions inheritance for the sub-account
* `fetchIpRecord`
* `fetchSourceIpMapping`
* `listByocTrunk`
* `listConnectionPolicy`
* `listConnectionPolicyTarget`
* `listDialingPermissionsCountry` - Retrieve all voice dialing country permissions for this account
* `listDialingPermissionsHrsPrefixes` - Fetch the high-risk special services prefixes from the country resource corresponding to the [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)
* `listIpRecord`
* `listSourceIpMapping`
* `updateByocTrunk`
* `updateConnectionPolicy`
* `updateConnectionPolicyTarget`
* `updateDialingPermissionsSettings` - Update voice dialing permissions inheritance for the sub-account
* `updateIpRecord`
* `updateSourceIpMapping`
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
