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

            FirebasehostingProjectsSitesCreateRequest req = new FirebasehostingProjectsSitesCreateRequest() {{
                security = new FirebasehostingProjectsSitesCreateSecurity() {{
                    option1 = new FirebasehostingProjectsSitesCreateSecurityOption1() {{
                        oauth2 = new SchemeOauth2() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                        oauth2c = new SchemeOauth2c() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                    }};
                }};
                pathParams = new FirebasehostingProjectsSitesCreatePathParams() {{
                    parent = "est";
                }};
                queryParams = new FirebasehostingProjectsSitesCreateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "rerum";
                    alt = "proto";
                    callback = "corrupti";
                    fields = "architecto";
                    key = "nihil";
                    oauthToken = "aut";
                    prettyPrint = true;
                    quotaUser = "natus";
                    siteId = "vero";
                    uploadType = "qui";
                    uploadProtocol = "commodi";
                }};
                request = new SiteInput() {{
                    appId = "hic";
                    labels = new java.util.HashMap<String, String>() {{
                        put("in", "enim");
                        put("voluptates", "tempore");
                        put("corporis", "labore");
                    }};
                }};
            }};

            FirebasehostingProjectsSitesCreateResponse res = sdk.projects.firebasehostingProjectsSitesCreate(req);

            if (res.site.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `firebasehostingProjectsSitesCreate` - Creates a new Hosting Site in the specified parent Firebase project. Note that Hosting sites can take several minutes to propagate through Firebase systems.
* `firebasehostingProjectsSitesList` - Lists each Hosting Site associated with the specified parent Firebase project.

### sites

* `firebasehostingSitesChannelsCreate` - Creates a new channel in the specified site.
* `firebasehostingSitesChannelsList` - Lists the channels for the specified site. All sites have a default `live` channel.
* `firebasehostingSitesDomainsCreate` - Creates a domain mapping on the specified site.
* `firebasehostingSitesDomainsGet` - Gets a domain mapping on the specified site.
* `firebasehostingSitesDomainsList` - Lists the domains for the specified site.
* `firebasehostingSitesDomainsUpdate` - Updates the specified domain mapping, creating the mapping as if it does not exist.
* `firebasehostingSitesReleasesCreate` - Creates a new release, which makes the content of the specified version actively display on the appropriate URL(s).
* `firebasehostingSitesReleasesList` - Lists the releases that have been created for the specified site or channel. When used to list releases for a site, this list includes releases for both the default `live` channel and any active preview channels for the specified site.
* `firebasehostingSitesVersionsClone` - Creates a new version on the specified target site using the content of the specified version.
* `firebasehostingSitesVersionsCreate` - Creates a new version for the specified site.
* `firebasehostingSitesVersionsDelete` - Deletes the specified version.
* `firebasehostingSitesVersionsFilesList` - Lists the remaining files to be uploaded for the specified version.
* `firebasehostingSitesVersionsList` - Lists the versions that have been created for the specified site. This list includes versions for both the default `live` channel and any active preview channels for the specified site.
* `firebasehostingSitesVersionsPatch` -  Updates the specified metadata for the specified version. This method will fail with `FAILED_PRECONDITION` in the event of an invalid state transition. The supported [state](../sites.versions#versionstatus) transitions for a version are from `CREATED` to `FINALIZED`. Use [`DeleteVersion`](delete) to set the status of a version to `DELETED`.
* `firebasehostingSitesVersionsPopulateFiles` -  Adds content files to the specified version. Each file must be under 2 GB.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
