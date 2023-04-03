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

import org.openapis.openapi.models.operations.FirebasehostingProjectsSitesCreateSecurityOption1;
import org.openapis.openapi.models.operations.FirebasehostingProjectsSitesCreateSecurityOption2;
import org.openapis.openapi.models.operations.FirebasehostingProjectsSitesCreateSecurity;
import org.openapis.openapi.models.operations.FirebasehostingProjectsSitesCreateRequest;
import org.openapis.openapi.models.operations.FirebasehostingProjectsSitesCreateResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.SiteInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebasehostingProjectsSitesCreateRequest req = new FirebasehostingProjectsSitesCreateRequest() {{
                dollarXgafv = "2";
                siteInput = new SiteInput() {{
                    appId = "provident";
                    labels = new java.util.HashMap<String, String>() {{
                        put("quibusdam", "unde");
                        put("nulla", "corrupti");
                        put("illum", "vel");
                    }};
                }};
                accessToken = "error";
                alt = "media";
                callback = "suscipit";
                fields = "iure";
                key = "magnam";
                oauthToken = "debitis";
                parent = "ipsa";
                prettyPrint = false;
                quotaUser = "delectus";
                siteId = "tempora";
                uploadType = "suscipit";
                uploadProtocol = "molestiae";
            }}            

            FirebasehostingProjectsSitesCreateResponse res = sdk.projects.firebasehostingProjectsSitesCreate(req, new FirebasehostingProjectsSitesCreateSecurity() {{
                option1 = new FirebasehostingProjectsSitesCreateSecurityOption1() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.site.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### projects

* `firebasehostingProjectsSitesCreate` - Creates a new Hosting Site in the specified parent Firebase project. Note that Hosting sites can take several minutes to propagate through Firebase systems.
* `firebasehostingProjectsSitesList` - Lists each Hosting Site associated with the specified parent Firebase project.

### sites

* `firebasehostingSitesChannelsCreate` - Creates a new channel in the specified site.
* `firebasehostingSitesChannelsList` - Lists the channels for the specified site. All sites have a default `live` channel.
* `firebasehostingSitesDomainsCreate` - Creates a domain mapping on the specified site.
* `firebasehostingSitesDomainsList` - Lists the domains for the specified site.
* `firebasehostingSitesDomainsUpdate` - Updates the specified domain mapping, creating the mapping as if it does not exist.
* `firebasehostingSitesReleasesCreate` - Creates a new release, which makes the content of the specified version actively display on the appropriate URL(s).
* `firebasehostingSitesReleasesList` - Lists the releases that have been created for the specified site or channel. When used to list releases for a site, this list includes releases for both the default `live` channel and any active preview channels for the specified site.
* `firebasehostingSitesVersionsClone` - Creates a new version on the specified target site using the content of the specified version.
* `firebasehostingSitesVersionsCreate` - Creates a new version for the specified site.
* `firebasehostingSitesVersionsDelete` - Deletes the specified version.
* `firebasehostingSitesVersionsFilesList` - Lists the remaining files to be uploaded for the specified version.
* `firebasehostingSitesVersionsGet` - Get the specified version that has been created for the specified site. This can include versions that were created for the default `live` channel or for any active preview channels for the specified site.
* `firebasehostingSitesVersionsList` - Lists the versions that have been created for the specified site. This list includes versions for both the default `live` channel and any active preview channels for the specified site.
* `firebasehostingSitesVersionsPatch` -  Updates the specified metadata for the specified version. This method will fail with `FAILED_PRECONDITION` in the event of an invalid state transition. The supported [state](../sites.versions#versionstatus) transitions for a version are from `CREATED` to `FINALIZED`. Use [`DeleteVersion`](delete) to set the status of a version to `DELETED`.
* `firebasehostingSitesVersionsPopulateFiles` -  Adds content files to the specified version. Each file must be under 2 GB.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
