# edits

### Available Operations

* [androidpublisherEditsApksAddexternallyhosted](#androidpublishereditsapksaddexternallyhosted) - Creates a new APK without uploading the APK itself to Google Play, instead hosting the APK at a specified URL. This function is only available to organizations using Managed Play whose application is configured to restrict distribution to the organizations.
* [androidpublisherEditsApksList](#androidpublishereditsapkslist) - Lists all current APKs of the app and edit.
* [androidpublisherEditsApksUpload](#androidpublishereditsapksupload) - Uploads an APK and adds to the current edit.
* [androidpublisherEditsBundlesList](#androidpublishereditsbundleslist) - Lists all current Android App Bundles of the app and edit.
* [androidpublisherEditsBundlesUpload](#androidpublishereditsbundlesupload) - Uploads a new Android App Bundle to this edit. If you are using the Google API client libraries, please increase the timeout of the http request before calling this endpoint (a timeout of 2 minutes is recommended). See [Timeouts and Errors](https://developers.google.com/api-client-library/java/google-api-java-client/errors) for an example in java.
* [androidpublisherEditsCommit](#androidpublishereditscommit) - Commits an app edit.
* [androidpublisherEditsCountryavailabilityGet](#androidpublishereditscountryavailabilityget) - Gets country availability.
* [androidpublisherEditsDelete](#androidpublishereditsdelete) - Deletes an app edit.
* [androidpublisherEditsDeobfuscationfilesUpload](#androidpublishereditsdeobfuscationfilesupload) - Uploads a new deobfuscation file and attaches to the specified APK.
* [androidpublisherEditsDetailsGet](#androidpublishereditsdetailsget) - Gets details of an app.
* [androidpublisherEditsDetailsPatch](#androidpublishereditsdetailspatch) - Patches details of an app.
* [androidpublisherEditsDetailsUpdate](#androidpublishereditsdetailsupdate) - Updates details of an app.
* [androidpublisherEditsExpansionfilesGet](#androidpublishereditsexpansionfilesget) - Fetches the expansion file configuration for the specified APK.
* [androidpublisherEditsExpansionfilesPatch](#androidpublishereditsexpansionfilespatch) - Patches the APK's expansion file configuration to reference another APK's expansion file. To add a new expansion file use the Upload method.
* [androidpublisherEditsExpansionfilesUpdate](#androidpublishereditsexpansionfilesupdate) - Updates the APK's expansion file configuration to reference another APK's expansion file. To add a new expansion file use the Upload method.
* [androidpublisherEditsExpansionfilesUpload](#androidpublishereditsexpansionfilesupload) - Uploads a new expansion file and attaches to the specified APK.
* [androidpublisherEditsGet](#androidpublishereditsget) - Gets an app edit.
* [androidpublisherEditsImagesDelete](#androidpublishereditsimagesdelete) - Deletes the image (specified by id) from the edit.
* [androidpublisherEditsImagesDeleteall](#androidpublishereditsimagesdeleteall) - Deletes all images for the specified language and image type. Returns an empty response if no images are found.
* [androidpublisherEditsImagesList](#androidpublishereditsimageslist) - Lists all images. The response may be empty.
* [androidpublisherEditsImagesUpload](#androidpublishereditsimagesupload) - Uploads an image of the specified language and image type, and adds to the edit.
* [androidpublisherEditsInsert](#androidpublishereditsinsert) - Creates a new edit for an app.
* [androidpublisherEditsListingsDelete](#androidpublishereditslistingsdelete) - Deletes a localized store listing.
* [androidpublisherEditsListingsDeleteall](#androidpublishereditslistingsdeleteall) - Deletes all store listings.
* [androidpublisherEditsListingsGet](#androidpublishereditslistingsget) - Gets a localized store listing.
* [androidpublisherEditsListingsList](#androidpublishereditslistingslist) - Lists all localized store listings.
* [androidpublisherEditsListingsPatch](#androidpublishereditslistingspatch) - Patches a localized store listing.
* [androidpublisherEditsListingsUpdate](#androidpublishereditslistingsupdate) - Creates or updates a localized store listing.
* [androidpublisherEditsTestersGet](#androidpublishereditstestersget) - Gets testers. Note: Testers resource does not support email lists.
* [androidpublisherEditsTestersPatch](#androidpublishereditstesterspatch) - Patches testers. Note: Testers resource does not support email lists.
* [androidpublisherEditsTestersUpdate](#androidpublishereditstestersupdate) - Updates testers. Note: Testers resource does not support email lists.
* [androidpublisherEditsTracksGet](#androidpublishereditstracksget) - Gets a track.
* [androidpublisherEditsTracksList](#androidpublishereditstrackslist) - Lists all tracks.
* [androidpublisherEditsTracksPatch](#androidpublishereditstrackspatch) - Patches a track.
* [androidpublisherEditsTracksUpdate](#androidpublishereditstracksupdate) - Updates a track.
* [androidpublisherEditsValidate](#androidpublishereditsvalidate) - Validates an app edit.

## androidpublisherEditsApksAddexternallyhosted

Creates a new APK without uploading the APK itself to Google Play, instead hosting the APK at a specified URL. This function is only available to organizations using Managed Play whose application is configured to restrict distribution to the organizations.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherEditsApksAddexternallyhostedRequest;
import org.openapis.openapi.models.operations.AndroidpublisherEditsApksAddexternallyhostedResponse;
import org.openapis.openapi.models.operations.AndroidpublisherEditsApksAddexternallyhostedSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ApksAddExternallyHostedRequest;
import org.openapis.openapi.models.shared.ExternallyHostedApk;
import org.openapis.openapi.models.shared.UsesPermission;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherEditsApksAddexternallyhostedRequest req = new AndroidpublisherEditsApksAddexternallyhostedRequest("praesentium", "quisquam") {{
                dollarXgafv = XgafvEnum.ONE;
                apksAddExternallyHostedRequest = new ApksAddExternallyHostedRequest() {{
                    externallyHostedApk = new ExternallyHostedApk() {{
                        applicationLabel = "ipsa";
                        certificateBase64s = new String[]{{
                            add("quidem"),
                            add("neque"),
                            add("quo"),
                        }};
                        externallyHostedUrl = "illum";
                        fileSha1Base64 = "quo";
                        fileSha256Base64 = "fuga";
                        fileSize = "eius";
                        iconBase64 = "eos";
                        maximumSDK = 373813;
                        minimumSDK = 69859;
                        nativeCodes = new String[]{{
                            add("consequatur"),
                            add("tempora"),
                            add("debitis"),
                        }};
                        packageName = "ipsam";
                        usesFeatures = new String[]{{
                            add("sequi"),
                        }};
                        usesPermissions = new org.openapis.openapi.models.shared.UsesPermission[]{{
                            add(new UsesPermission() {{
                                maxSDKVersion = 459856;
                                name = "Kevin Rau";
                            }}),
                            add(new UsesPermission() {{
                                maxSDKVersion = 76956;
                                name = "Christy Tillman";
                            }}),
                            add(new UsesPermission() {{
                                maxSDKVersion = 577543;
                                name = "Miranda Daniel";
                            }}),
                            add(new UsesPermission() {{
                                maxSDKVersion = 35362;
                                name = "Franklin Lynch";
                            }}),
                        }};
                        versionCode = 536178;
                        versionName = "fugit";
                    }};;
                }};;
                accessToken = "fuga";
                alt = AltEnum.MEDIA;
                callback = "incidunt";
                fields = "atque";
                key = "explicabo";
                oauthToken = "minima";
                prettyPrint = false;
                quotaUser = "nisi";
                uploadType = "fugit";
                uploadProtocol = "sapiente";
            }};            

            AndroidpublisherEditsApksAddexternallyhostedResponse res = sdk.edits.androidpublisherEditsApksAddexternallyhosted(req, new AndroidpublisherEditsApksAddexternallyhostedSecurity("consequuntur", "ratione") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.apksAddExternallyHostedResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidpublisherEditsApksList

Lists all current APKs of the app and edit.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherEditsApksListRequest;
import org.openapis.openapi.models.operations.AndroidpublisherEditsApksListResponse;
import org.openapis.openapi.models.operations.AndroidpublisherEditsApksListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherEditsApksListRequest req = new AndroidpublisherEditsApksListRequest("explicabo", "saepe") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "atque";
                alt = AltEnum.JSON;
                callback = "esse";
                fields = "eveniet";
                key = "accusamus";
                oauthToken = "veritatis";
                prettyPrint = false;
                quotaUser = "esse";
                uploadType = "quod";
                uploadProtocol = "nam";
            }};            

            AndroidpublisherEditsApksListResponse res = sdk.edits.androidpublisherEditsApksList(req, new AndroidpublisherEditsApksListSecurity("vero", "aliquid") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.apksListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidpublisherEditsApksUpload

Uploads an APK and adds to the current edit.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherEditsApksUploadRequest;
import org.openapis.openapi.models.operations.AndroidpublisherEditsApksUploadResponse;
import org.openapis.openapi.models.operations.AndroidpublisherEditsApksUploadSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherEditsApksUploadRequest req = new AndroidpublisherEditsApksUploadRequest("quasi", "saepe") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "harum";
                alt = AltEnum.MEDIA;
                callback = "rerum";
                fields = "occaecati";
                key = "minima";
                oauthToken = "distinctio";
                prettyPrint = false;
                quotaUser = "eligendi";
                uploadType = "sit";
                uploadProtocol = "culpa";
            }};            

            AndroidpublisherEditsApksUploadResponse res = sdk.edits.androidpublisherEditsApksUpload(req, new AndroidpublisherEditsApksUploadSecurity("tempore", "adipisci") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.apk != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidpublisherEditsBundlesList

Lists all current Android App Bundles of the app and edit.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherEditsBundlesListRequest;
import org.openapis.openapi.models.operations.AndroidpublisherEditsBundlesListResponse;
import org.openapis.openapi.models.operations.AndroidpublisherEditsBundlesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherEditsBundlesListRequest req = new AndroidpublisherEditsBundlesListRequest("cumque", "consequuntur") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "minus";
                alt = AltEnum.JSON;
                callback = "sapiente";
                fields = "consectetur";
                key = "esse";
                oauthToken = "blanditiis";
                prettyPrint = false;
                quotaUser = "provident";
                uploadType = "a";
                uploadProtocol = "nulla";
            }};            

            AndroidpublisherEditsBundlesListResponse res = sdk.edits.androidpublisherEditsBundlesList(req, new AndroidpublisherEditsBundlesListSecurity("quas", "esse") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.bundlesListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidpublisherEditsBundlesUpload

Uploads a new Android App Bundle to this edit. If you are using the Google API client libraries, please increase the timeout of the http request before calling this endpoint (a timeout of 2 minutes is recommended). See [Timeouts and Errors](https://developers.google.com/api-client-library/java/google-api-java-client/errors) for an example in java.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherEditsBundlesUploadRequest;
import org.openapis.openapi.models.operations.AndroidpublisherEditsBundlesUploadResponse;
import org.openapis.openapi.models.operations.AndroidpublisherEditsBundlesUploadSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherEditsBundlesUploadRequest req = new AndroidpublisherEditsBundlesUploadRequest("quasi", "a") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "sint";
                ackBundleInstallationWarning = false;
                alt = AltEnum.PROTO;
                callback = "possimus";
                deviceTierConfigId = "quia";
                fields = "eveniet";
                key = "asperiores";
                oauthToken = "facere";
                prettyPrint = false;
                quotaUser = "veritatis";
                uploadType = "consequuntur";
                uploadProtocol = "quasi";
            }};            

            AndroidpublisherEditsBundlesUploadResponse res = sdk.edits.androidpublisherEditsBundlesUpload(req, new AndroidpublisherEditsBundlesUploadSecurity("similique", "culpa") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.bundle != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidpublisherEditsCommit

Commits an app edit.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherEditsCommitRequest;
import org.openapis.openapi.models.operations.AndroidpublisherEditsCommitResponse;
import org.openapis.openapi.models.operations.AndroidpublisherEditsCommitSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherEditsCommitRequest req = new AndroidpublisherEditsCommitRequest("aliquid", "tenetur") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "earum";
                alt = AltEnum.MEDIA;
                callback = "in";
                changesNotSentForReview = false;
                fields = "eius";
                key = "libero";
                oauthToken = "illum";
                prettyPrint = false;
                quotaUser = "soluta";
                uploadType = "accusantium";
                uploadProtocol = "aliquam";
            }};            

            AndroidpublisherEditsCommitResponse res = sdk.edits.androidpublisherEditsCommit(req, new AndroidpublisherEditsCommitSecurity("sapiente", "dicta") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.appEdit != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidpublisherEditsCountryavailabilityGet

Gets country availability.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherEditsCountryavailabilityGetRequest;
import org.openapis.openapi.models.operations.AndroidpublisherEditsCountryavailabilityGetResponse;
import org.openapis.openapi.models.operations.AndroidpublisherEditsCountryavailabilityGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherEditsCountryavailabilityGetRequest req = new AndroidpublisherEditsCountryavailabilityGetRequest("ullam", "reprehenderit", "ullam") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "aut";
                alt = AltEnum.MEDIA;
                callback = "qui";
                fields = "quibusdam";
                key = "ex";
                oauthToken = "deleniti";
                prettyPrint = false;
                quotaUser = "itaque";
                uploadType = "dolorum";
                uploadProtocol = "architecto";
            }};            

            AndroidpublisherEditsCountryavailabilityGetResponse res = sdk.edits.androidpublisherEditsCountryavailabilityGet(req, new AndroidpublisherEditsCountryavailabilityGetSecurity("omnis", "tenetur") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.trackCountryAvailability != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidpublisherEditsDelete

Deletes an app edit.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherEditsDeleteRequest;
import org.openapis.openapi.models.operations.AndroidpublisherEditsDeleteResponse;
import org.openapis.openapi.models.operations.AndroidpublisherEditsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherEditsDeleteRequest req = new AndroidpublisherEditsDeleteRequest("quasi", "at") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "voluptate";
                alt = AltEnum.JSON;
                callback = "minima";
                fields = "veritatis";
                key = "consectetur";
                oauthToken = "adipisci";
                prettyPrint = false;
                quotaUser = "iste";
                uploadType = "temporibus";
                uploadProtocol = "accusantium";
            }};            

            AndroidpublisherEditsDeleteResponse res = sdk.edits.androidpublisherEditsDelete(req, new AndroidpublisherEditsDeleteSecurity("rem", "aut") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidpublisherEditsDeobfuscationfilesUpload

Uploads a new deobfuscation file and attaches to the specified APK.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherEditsDeobfuscationfilesUploadDeobfuscationFileTypeEnum;
import org.openapis.openapi.models.operations.AndroidpublisherEditsDeobfuscationfilesUploadRequest;
import org.openapis.openapi.models.operations.AndroidpublisherEditsDeobfuscationfilesUploadResponse;
import org.openapis.openapi.models.operations.AndroidpublisherEditsDeobfuscationfilesUploadSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherEditsDeobfuscationfilesUploadRequest req = new AndroidpublisherEditsDeobfuscationfilesUploadRequest(513075L, AndroidpublisherEditsDeobfuscationfilesUploadDeobfuscationFileTypeEnum.PROGUARD, "mollitia", "ab") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "non";
                alt = AltEnum.JSON;
                callback = "dolor";
                fields = "occaecati";
                key = "numquam";
                oauthToken = "impedit";
                prettyPrint = false;
                quotaUser = "explicabo";
                uploadType = "voluptas";
                uploadProtocol = "aut";
            }};            

            AndroidpublisherEditsDeobfuscationfilesUploadResponse res = sdk.edits.androidpublisherEditsDeobfuscationfilesUpload(req, new AndroidpublisherEditsDeobfuscationfilesUploadSecurity("dignissimos", "dicta") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.deobfuscationFilesUploadResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidpublisherEditsDetailsGet

Gets details of an app.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherEditsDetailsGetRequest;
import org.openapis.openapi.models.operations.AndroidpublisherEditsDetailsGetResponse;
import org.openapis.openapi.models.operations.AndroidpublisherEditsDetailsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherEditsDetailsGetRequest req = new AndroidpublisherEditsDetailsGetRequest("maiores", "natus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "voluptatibus";
                alt = AltEnum.MEDIA;
                callback = "asperiores";
                fields = "aperiam";
                key = "ea";
                oauthToken = "quaerat";
                prettyPrint = false;
                quotaUser = "consequuntur";
                uploadType = "repellendus";
                uploadProtocol = "officia";
            }};            

            AndroidpublisherEditsDetailsGetResponse res = sdk.edits.androidpublisherEditsDetailsGet(req, new AndroidpublisherEditsDetailsGetSecurity("maxime", "dignissimos") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.appDetails != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidpublisherEditsDetailsPatch

Patches details of an app.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherEditsDetailsPatchRequest;
import org.openapis.openapi.models.operations.AndroidpublisherEditsDetailsPatchResponse;
import org.openapis.openapi.models.operations.AndroidpublisherEditsDetailsPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AppDetails;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherEditsDetailsPatchRequest req = new AndroidpublisherEditsDetailsPatchRequest("officia", "asperiores") {{
                dollarXgafv = XgafvEnum.ONE;
                appDetails = new AppDetails() {{
                    contactEmail = "quae";
                    contactPhone = "quaerat";
                    contactWebsite = "porro";
                    defaultLanguage = "quod";
                }};;
                accessToken = "labore";
                alt = AltEnum.JSON;
                callback = "adipisci";
                fields = "fuga";
                key = "id";
                oauthToken = "suscipit";
                prettyPrint = false;
                quotaUser = "velit";
                uploadType = "culpa";
                uploadProtocol = "est";
            }};            

            AndroidpublisherEditsDetailsPatchResponse res = sdk.edits.androidpublisherEditsDetailsPatch(req, new AndroidpublisherEditsDetailsPatchSecurity("recusandae", "totam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.appDetails != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidpublisherEditsDetailsUpdate

Updates details of an app.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherEditsDetailsUpdateRequest;
import org.openapis.openapi.models.operations.AndroidpublisherEditsDetailsUpdateResponse;
import org.openapis.openapi.models.operations.AndroidpublisherEditsDetailsUpdateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AppDetails;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherEditsDetailsUpdateRequest req = new AndroidpublisherEditsDetailsUpdateRequest("fugiat", "vel") {{
                dollarXgafv = XgafvEnum.ONE;
                appDetails = new AppDetails() {{
                    contactEmail = "quos";
                    contactPhone = "vel";
                    contactWebsite = "labore";
                    defaultLanguage = "possimus";
                }};;
                accessToken = "facilis";
                alt = AltEnum.PROTO;
                callback = "commodi";
                fields = "in";
                key = "corporis";
                oauthToken = "reiciendis";
                prettyPrint = false;
                quotaUser = "assumenda";
                uploadType = "nemo";
                uploadProtocol = "recusandae";
            }};            

            AndroidpublisherEditsDetailsUpdateResponse res = sdk.edits.androidpublisherEditsDetailsUpdate(req, new AndroidpublisherEditsDetailsUpdateSecurity("aliquid", "aperiam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.appDetails != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidpublisherEditsExpansionfilesGet

Fetches the expansion file configuration for the specified APK.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherEditsExpansionfilesGetExpansionFileTypeEnum;
import org.openapis.openapi.models.operations.AndroidpublisherEditsExpansionfilesGetRequest;
import org.openapis.openapi.models.operations.AndroidpublisherEditsExpansionfilesGetResponse;
import org.openapis.openapi.models.operations.AndroidpublisherEditsExpansionfilesGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherEditsExpansionfilesGetRequest req = new AndroidpublisherEditsExpansionfilesGetRequest(738683L, "consectetur", AndroidpublisherEditsExpansionfilesGetExpansionFileTypeEnum.MAIN, "exercitationem") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "facere";
                alt = AltEnum.JSON;
                callback = "doloribus";
                fields = "suscipit";
                key = "reiciendis";
                oauthToken = "quidem";
                prettyPrint = false;
                quotaUser = "saepe";
                uploadType = "necessitatibus";
                uploadProtocol = "dolore";
            }};            

            AndroidpublisherEditsExpansionfilesGetResponse res = sdk.edits.androidpublisherEditsExpansionfilesGet(req, new AndroidpublisherEditsExpansionfilesGetSecurity("sunt", "asperiores") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.expansionFile != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidpublisherEditsExpansionfilesPatch

Patches the APK's expansion file configuration to reference another APK's expansion file. To add a new expansion file use the Upload method.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherEditsExpansionfilesPatchExpansionFileTypeEnum;
import org.openapis.openapi.models.operations.AndroidpublisherEditsExpansionfilesPatchRequest;
import org.openapis.openapi.models.operations.AndroidpublisherEditsExpansionfilesPatchResponse;
import org.openapis.openapi.models.operations.AndroidpublisherEditsExpansionfilesPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ExpansionFile;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherEditsExpansionfilesPatchRequest req = new AndroidpublisherEditsExpansionfilesPatchRequest(241545L, "non", AndroidpublisherEditsExpansionfilesPatchExpansionFileTypeEnum.EXPANSION_FILE_TYPE_UNSPECIFIED, "beatae") {{
                dollarXgafv = XgafvEnum.ONE;
                expansionFile = new ExpansionFile() {{
                    fileSize = "a";
                    referencesVersion = 891523;
                }};;
                accessToken = "consectetur";
                alt = AltEnum.MEDIA;
                callback = "harum";
                fields = "laboriosam";
                key = "ipsa";
                oauthToken = "voluptates";
                prettyPrint = false;
                quotaUser = "libero";
                uploadType = "vitae";
                uploadProtocol = "accusamus";
            }};            

            AndroidpublisherEditsExpansionfilesPatchResponse res = sdk.edits.androidpublisherEditsExpansionfilesPatch(req, new AndroidpublisherEditsExpansionfilesPatchSecurity("similique", "tempora") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.expansionFile != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidpublisherEditsExpansionfilesUpdate

Updates the APK's expansion file configuration to reference another APK's expansion file. To add a new expansion file use the Upload method.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherEditsExpansionfilesUpdateExpansionFileTypeEnum;
import org.openapis.openapi.models.operations.AndroidpublisherEditsExpansionfilesUpdateRequest;
import org.openapis.openapi.models.operations.AndroidpublisherEditsExpansionfilesUpdateResponse;
import org.openapis.openapi.models.operations.AndroidpublisherEditsExpansionfilesUpdateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ExpansionFile;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherEditsExpansionfilesUpdateRequest req = new AndroidpublisherEditsExpansionfilesUpdateRequest(132815L, "voluptas", AndroidpublisherEditsExpansionfilesUpdateExpansionFileTypeEnum.MAIN, "voluptas") {{
                dollarXgafv = XgafvEnum.ONE;
                expansionFile = new ExpansionFile() {{
                    fileSize = "nobis";
                    referencesVersion = 680116;
                }};;
                accessToken = "adipisci";
                alt = AltEnum.PROTO;
                callback = "dolores";
                fields = "blanditiis";
                key = "in";
                oauthToken = "dolore";
                prettyPrint = false;
                quotaUser = "aliquam";
                uploadType = "officiis";
                uploadProtocol = "temporibus";
            }};            

            AndroidpublisherEditsExpansionfilesUpdateResponse res = sdk.edits.androidpublisherEditsExpansionfilesUpdate(req, new AndroidpublisherEditsExpansionfilesUpdateSecurity("ullam", "adipisci") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.expansionFile != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidpublisherEditsExpansionfilesUpload

Uploads a new expansion file and attaches to the specified APK.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherEditsExpansionfilesUploadExpansionFileTypeEnum;
import org.openapis.openapi.models.operations.AndroidpublisherEditsExpansionfilesUploadRequest;
import org.openapis.openapi.models.operations.AndroidpublisherEditsExpansionfilesUploadResponse;
import org.openapis.openapi.models.operations.AndroidpublisherEditsExpansionfilesUploadSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherEditsExpansionfilesUploadRequest req = new AndroidpublisherEditsExpansionfilesUploadRequest(738391L, "blanditiis", AndroidpublisherEditsExpansionfilesUploadExpansionFileTypeEnum.MAIN, "hic") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "culpa";
                alt = AltEnum.MEDIA;
                callback = "pariatur";
                fields = "totam";
                key = "hic";
                oauthToken = "exercitationem";
                prettyPrint = false;
                quotaUser = "nobis";
                uploadType = "sit";
                uploadProtocol = "rerum";
            }};            

            AndroidpublisherEditsExpansionfilesUploadResponse res = sdk.edits.androidpublisherEditsExpansionfilesUpload(req, new AndroidpublisherEditsExpansionfilesUploadSecurity("sed", "reiciendis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.expansionFilesUploadResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidpublisherEditsGet

Gets an app edit.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherEditsGetRequest;
import org.openapis.openapi.models.operations.AndroidpublisherEditsGetResponse;
import org.openapis.openapi.models.operations.AndroidpublisherEditsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherEditsGetRequest req = new AndroidpublisherEditsGetRequest("explicabo", "asperiores") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "voluptate";
                alt = AltEnum.PROTO;
                callback = "ab";
                fields = "iste";
                key = "dolore";
                oauthToken = "laborum";
                prettyPrint = false;
                quotaUser = "sed";
                uploadType = "in";
                uploadProtocol = "commodi";
            }};            

            AndroidpublisherEditsGetResponse res = sdk.edits.androidpublisherEditsGet(req, new AndroidpublisherEditsGetSecurity("quidem", "explicabo") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.appEdit != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidpublisherEditsImagesDelete

Deletes the image (specified by id) from the edit.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherEditsImagesDeleteImageTypeEnum;
import org.openapis.openapi.models.operations.AndroidpublisherEditsImagesDeleteRequest;
import org.openapis.openapi.models.operations.AndroidpublisherEditsImagesDeleteResponse;
import org.openapis.openapi.models.operations.AndroidpublisherEditsImagesDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherEditsImagesDeleteRequest req = new AndroidpublisherEditsImagesDeleteRequest("voluptas", "unde", AndroidpublisherEditsImagesDeleteImageTypeEnum.APP_IMAGE_TYPE_UNSPECIFIED, "suscipit", "sapiente") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "illo";
                alt = AltEnum.PROTO;
                callback = "perferendis";
                fields = "corrupti";
                key = "maiores";
                oauthToken = "incidunt";
                prettyPrint = false;
                quotaUser = "sed";
                uploadType = "provident";
                uploadProtocol = "eius";
            }};            

            AndroidpublisherEditsImagesDeleteResponse res = sdk.edits.androidpublisherEditsImagesDelete(req, new AndroidpublisherEditsImagesDeleteSecurity("necessitatibus", "ipsum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidpublisherEditsImagesDeleteall

Deletes all images for the specified language and image type. Returns an empty response if no images are found.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherEditsImagesDeleteallImageTypeEnum;
import org.openapis.openapi.models.operations.AndroidpublisherEditsImagesDeleteallRequest;
import org.openapis.openapi.models.operations.AndroidpublisherEditsImagesDeleteallResponse;
import org.openapis.openapi.models.operations.AndroidpublisherEditsImagesDeleteallSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherEditsImagesDeleteallRequest req = new AndroidpublisherEditsImagesDeleteallRequest("ea", AndroidpublisherEditsImagesDeleteallImageTypeEnum.WEAR_SCREENSHOTS, "quos", "voluptatibus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "tempora";
                alt = AltEnum.MEDIA;
                callback = "reiciendis";
                fields = "ex";
                key = "sit";
                oauthToken = "non";
                prettyPrint = false;
                quotaUser = "officiis";
                uploadType = "praesentium";
                uploadProtocol = "facilis";
            }};            

            AndroidpublisherEditsImagesDeleteallResponse res = sdk.edits.androidpublisherEditsImagesDeleteall(req, new AndroidpublisherEditsImagesDeleteallSecurity("quaerat", "incidunt") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.imagesDeleteAllResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidpublisherEditsImagesList

Lists all images. The response may be empty.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherEditsImagesListImageTypeEnum;
import org.openapis.openapi.models.operations.AndroidpublisherEditsImagesListRequest;
import org.openapis.openapi.models.operations.AndroidpublisherEditsImagesListResponse;
import org.openapis.openapi.models.operations.AndroidpublisherEditsImagesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherEditsImagesListRequest req = new AndroidpublisherEditsImagesListRequest("ipsam", AndroidpublisherEditsImagesListImageTypeEnum.TV_BANNER, "rem", "sit") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "error";
                alt = AltEnum.MEDIA;
                callback = "minima";
                fields = "recusandae";
                key = "reiciendis";
                oauthToken = "nulla";
                prettyPrint = false;
                quotaUser = "magni";
                uploadType = "aperiam";
                uploadProtocol = "saepe";
            }};            

            AndroidpublisherEditsImagesListResponse res = sdk.edits.androidpublisherEditsImagesList(req, new AndroidpublisherEditsImagesListSecurity("numquam", "veniam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.imagesListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidpublisherEditsImagesUpload

Uploads an image of the specified language and image type, and adds to the edit.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherEditsImagesUploadImageTypeEnum;
import org.openapis.openapi.models.operations.AndroidpublisherEditsImagesUploadRequest;
import org.openapis.openapi.models.operations.AndroidpublisherEditsImagesUploadResponse;
import org.openapis.openapi.models.operations.AndroidpublisherEditsImagesUploadSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherEditsImagesUploadRequest req = new AndroidpublisherEditsImagesUploadRequest("in", AndroidpublisherEditsImagesUploadImageTypeEnum.TV_BANNER, "beatae", "laudantium") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "praesentium";
                alt = AltEnum.PROTO;
                callback = "laboriosam";
                fields = "dolorum";
                key = "voluptatum";
                oauthToken = "error";
                prettyPrint = false;
                quotaUser = "hic";
                uploadType = "expedita";
                uploadProtocol = "debitis";
            }};            

            AndroidpublisherEditsImagesUploadResponse res = sdk.edits.androidpublisherEditsImagesUpload(req, new AndroidpublisherEditsImagesUploadSecurity("neque", "dolorum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.imagesUploadResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidpublisherEditsInsert

Creates a new edit for an app.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherEditsInsertRequest;
import org.openapis.openapi.models.operations.AndroidpublisherEditsInsertResponse;
import org.openapis.openapi.models.operations.AndroidpublisherEditsInsertSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherEditsInsertRequest req = new AndroidpublisherEditsInsertRequest("nostrum") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "dolorum";
                alt = AltEnum.MEDIA;
                callback = "accusamus";
                fields = "tempora";
                key = "atque";
                oauthToken = "fugit";
                prettyPrint = false;
                quotaUser = "ut";
                uploadType = "fugiat";
                uploadProtocol = "voluptatem";
            }};            

            AndroidpublisherEditsInsertResponse res = sdk.edits.androidpublisherEditsInsert(req, new AndroidpublisherEditsInsertSecurity("culpa", "expedita") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.appEdit != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidpublisherEditsListingsDelete

Deletes a localized store listing.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherEditsListingsDeleteRequest;
import org.openapis.openapi.models.operations.AndroidpublisherEditsListingsDeleteResponse;
import org.openapis.openapi.models.operations.AndroidpublisherEditsListingsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherEditsListingsDeleteRequest req = new AndroidpublisherEditsListingsDeleteRequest("magnam", "consequatur", "esse") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "sit";
                alt = AltEnum.MEDIA;
                callback = "quas";
                fields = "repudiandae";
                key = "corporis";
                oauthToken = "et";
                prettyPrint = false;
                quotaUser = "blanditiis";
                uploadType = "ex";
                uploadProtocol = "sed";
            }};            

            AndroidpublisherEditsListingsDeleteResponse res = sdk.edits.androidpublisherEditsListingsDelete(req, new AndroidpublisherEditsListingsDeleteSecurity("sit", "vel") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidpublisherEditsListingsDeleteall

Deletes all store listings.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherEditsListingsDeleteallRequest;
import org.openapis.openapi.models.operations.AndroidpublisherEditsListingsDeleteallResponse;
import org.openapis.openapi.models.operations.AndroidpublisherEditsListingsDeleteallSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherEditsListingsDeleteallRequest req = new AndroidpublisherEditsListingsDeleteallRequest("nostrum", "saepe") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "consequatur";
                alt = AltEnum.JSON;
                callback = "reiciendis";
                fields = "dolorem";
                key = "harum";
                oauthToken = "dicta";
                prettyPrint = false;
                quotaUser = "architecto";
                uploadType = "occaecati";
                uploadProtocol = "labore";
            }};            

            AndroidpublisherEditsListingsDeleteallResponse res = sdk.edits.androidpublisherEditsListingsDeleteall(req, new AndroidpublisherEditsListingsDeleteallSecurity("quidem", "atque") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidpublisherEditsListingsGet

Gets a localized store listing.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherEditsListingsGetRequest;
import org.openapis.openapi.models.operations.AndroidpublisherEditsListingsGetResponse;
import org.openapis.openapi.models.operations.AndroidpublisherEditsListingsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherEditsListingsGetRequest req = new AndroidpublisherEditsListingsGetRequest("laborum", "nam", "tenetur") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "alias";
                alt = AltEnum.JSON;
                callback = "deserunt";
                fields = "voluptate";
                key = "unde";
                oauthToken = "reiciendis";
                prettyPrint = false;
                quotaUser = "provident";
                uploadType = "repellendus";
                uploadProtocol = "delectus";
            }};            

            AndroidpublisherEditsListingsGetResponse res = sdk.edits.androidpublisherEditsListingsGet(req, new AndroidpublisherEditsListingsGetSecurity("voluptates", "perferendis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listing != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidpublisherEditsListingsList

Lists all localized store listings.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherEditsListingsListRequest;
import org.openapis.openapi.models.operations.AndroidpublisherEditsListingsListResponse;
import org.openapis.openapi.models.operations.AndroidpublisherEditsListingsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherEditsListingsListRequest req = new AndroidpublisherEditsListingsListRequest("est", "quidem") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "facere";
                alt = AltEnum.PROTO;
                callback = "praesentium";
                fields = "mollitia";
                key = "veniam";
                oauthToken = "voluptatem";
                prettyPrint = false;
                quotaUser = "quisquam";
                uploadType = "repudiandae";
                uploadProtocol = "quasi";
            }};            

            AndroidpublisherEditsListingsListResponse res = sdk.edits.androidpublisherEditsListingsList(req, new AndroidpublisherEditsListingsListSecurity("atque", "reprehenderit") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listingsListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidpublisherEditsListingsPatch

Patches a localized store listing.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherEditsListingsPatchRequest;
import org.openapis.openapi.models.operations.AndroidpublisherEditsListingsPatchResponse;
import org.openapis.openapi.models.operations.AndroidpublisherEditsListingsPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Listing;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherEditsListingsPatchRequest req = new AndroidpublisherEditsListingsPatchRequest("asperiores", "totam", "suscipit") {{
                dollarXgafv = XgafvEnum.TWO;
                listing = new Listing() {{
                    fullDescription = "maxime";
                    language = "et";
                    shortDescription = "esse";
                    title = "Mrs.";
                    video = "assumenda";
                }};;
                accessToken = "ea";
                alt = AltEnum.MEDIA;
                callback = "error";
                fields = "officiis";
                key = "officiis";
                oauthToken = "accusamus";
                prettyPrint = false;
                quotaUser = "natus";
                uploadType = "minima";
                uploadProtocol = "aspernatur";
            }};            

            AndroidpublisherEditsListingsPatchResponse res = sdk.edits.androidpublisherEditsListingsPatch(req, new AndroidpublisherEditsListingsPatchSecurity("ex", "maiores") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listing != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidpublisherEditsListingsUpdate

Creates or updates a localized store listing.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherEditsListingsUpdateRequest;
import org.openapis.openapi.models.operations.AndroidpublisherEditsListingsUpdateResponse;
import org.openapis.openapi.models.operations.AndroidpublisherEditsListingsUpdateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Listing;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherEditsListingsUpdateRequest req = new AndroidpublisherEditsListingsUpdateRequest("corrupti", "at", "error") {{
                dollarXgafv = XgafvEnum.TWO;
                listing = new Listing() {{
                    fullDescription = "suscipit";
                    language = "repudiandae";
                    shortDescription = "atque";
                    title = "Ms.";
                    video = "sunt";
                }};;
                accessToken = "recusandae";
                alt = AltEnum.PROTO;
                callback = "repellendus";
                fields = "labore";
                key = "reiciendis";
                oauthToken = "doloremque";
                prettyPrint = false;
                quotaUser = "repudiandae";
                uploadType = "dicta";
                uploadProtocol = "accusantium";
            }};            

            AndroidpublisherEditsListingsUpdateResponse res = sdk.edits.androidpublisherEditsListingsUpdate(req, new AndroidpublisherEditsListingsUpdateSecurity("beatae", "dolores") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listing != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidpublisherEditsTestersGet

Gets testers. Note: Testers resource does not support email lists.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherEditsTestersGetRequest;
import org.openapis.openapi.models.operations.AndroidpublisherEditsTestersGetResponse;
import org.openapis.openapi.models.operations.AndroidpublisherEditsTestersGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherEditsTestersGetRequest req = new AndroidpublisherEditsTestersGetRequest("enim", "laboriosam", "velit") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "molestias";
                alt = AltEnum.JSON;
                callback = "saepe";
                fields = "consequuntur";
                key = "occaecati";
                oauthToken = "officiis";
                prettyPrint = false;
                quotaUser = "perspiciatis";
                uploadType = "in";
                uploadProtocol = "adipisci";
            }};            

            AndroidpublisherEditsTestersGetResponse res = sdk.edits.androidpublisherEditsTestersGet(req, new AndroidpublisherEditsTestersGetSecurity("eveniet", "occaecati") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.testers != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidpublisherEditsTestersPatch

Patches testers. Note: Testers resource does not support email lists.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherEditsTestersPatchRequest;
import org.openapis.openapi.models.operations.AndroidpublisherEditsTestersPatchResponse;
import org.openapis.openapi.models.operations.AndroidpublisherEditsTestersPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Testers;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherEditsTestersPatchRequest req = new AndroidpublisherEditsTestersPatchRequest("consequuntur", "fugit", "id") {{
                dollarXgafv = XgafvEnum.ONE;
                testers = new Testers() {{
                    googleGroups = new String[]{{
                        add("error"),
                        add("illo"),
                    }};
                }};;
                accessToken = "corporis";
                alt = AltEnum.PROTO;
                callback = "eveniet";
                fields = "non";
                key = "vero";
                oauthToken = "doloremque";
                prettyPrint = false;
                quotaUser = "iure";
                uploadType = "ipsa";
                uploadProtocol = "totam";
            }};            

            AndroidpublisherEditsTestersPatchResponse res = sdk.edits.androidpublisherEditsTestersPatch(req, new AndroidpublisherEditsTestersPatchSecurity("quae", "molestiae") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.testers != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidpublisherEditsTestersUpdate

Updates testers. Note: Testers resource does not support email lists.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherEditsTestersUpdateRequest;
import org.openapis.openapi.models.operations.AndroidpublisherEditsTestersUpdateResponse;
import org.openapis.openapi.models.operations.AndroidpublisherEditsTestersUpdateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Testers;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherEditsTestersUpdateRequest req = new AndroidpublisherEditsTestersUpdateRequest("eveniet", "qui", "cum") {{
                dollarXgafv = XgafvEnum.ONE;
                testers = new Testers() {{
                    googleGroups = new String[]{{
                        add("ratione"),
                        add("laborum"),
                        add("distinctio"),
                        add("voluptatum"),
                    }};
                }};;
                accessToken = "rem";
                alt = AltEnum.JSON;
                callback = "ad";
                fields = "repellat";
                key = "alias";
                oauthToken = "corporis";
                prettyPrint = false;
                quotaUser = "perspiciatis";
                uploadType = "nihil";
                uploadProtocol = "mollitia";
            }};            

            AndroidpublisherEditsTestersUpdateResponse res = sdk.edits.androidpublisherEditsTestersUpdate(req, new AndroidpublisherEditsTestersUpdateSecurity("voluptas", "alias") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.testers != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidpublisherEditsTracksGet

Gets a track.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherEditsTracksGetRequest;
import org.openapis.openapi.models.operations.AndroidpublisherEditsTracksGetResponse;
import org.openapis.openapi.models.operations.AndroidpublisherEditsTracksGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherEditsTracksGetRequest req = new AndroidpublisherEditsTracksGetRequest("maiores", "reiciendis", "dolores") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "minima";
                alt = AltEnum.JSON;
                callback = "dolorum";
                fields = "nesciunt";
                key = "quae";
                oauthToken = "recusandae";
                prettyPrint = false;
                quotaUser = "omnis";
                uploadType = "quaerat";
                uploadProtocol = "molestiae";
            }};            

            AndroidpublisherEditsTracksGetResponse res = sdk.edits.androidpublisherEditsTracksGet(req, new AndroidpublisherEditsTracksGetSecurity("ex", "ut") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.track != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidpublisherEditsTracksList

Lists all tracks.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherEditsTracksListRequest;
import org.openapis.openapi.models.operations.AndroidpublisherEditsTracksListResponse;
import org.openapis.openapi.models.operations.AndroidpublisherEditsTracksListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherEditsTracksListRequest req = new AndroidpublisherEditsTracksListRequest("culpa", "adipisci") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "laudantium";
                alt = AltEnum.MEDIA;
                callback = "nemo";
                fields = "recusandae";
                key = "esse";
                oauthToken = "provident";
                prettyPrint = false;
                quotaUser = "quis";
                uploadType = "eum";
                uploadProtocol = "reiciendis";
            }};            

            AndroidpublisherEditsTracksListResponse res = sdk.edits.androidpublisherEditsTracksList(req, new AndroidpublisherEditsTracksListSecurity("provident", "aspernatur") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.tracksListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidpublisherEditsTracksPatch

Patches a track.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherEditsTracksPatchRequest;
import org.openapis.openapi.models.operations.AndroidpublisherEditsTracksPatchResponse;
import org.openapis.openapi.models.operations.AndroidpublisherEditsTracksPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CountryTargeting;
import org.openapis.openapi.models.shared.LocalizedText;
import org.openapis.openapi.models.shared.Track;
import org.openapis.openapi.models.shared.TrackRelease;
import org.openapis.openapi.models.shared.TrackReleaseStatusEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherEditsTracksPatchRequest req = new AndroidpublisherEditsTracksPatchRequest("ullam", "quasi", "animi") {{
                dollarXgafv = XgafvEnum.ONE;
                track1 = new Track() {{
                    releases = new org.openapis.openapi.models.shared.TrackRelease[]{{
                        add(new TrackRelease() {{
                            countryTargeting = new CountryTargeting() {{
                                countries = new String[]{{
                                    add("possimus"),
                                    add("animi"),
                                    add("ex"),
                                }};
                                includeRestOfWorld = false;
                            }};
                            inAppUpdatePriority = 397257;
                            name = "Kristie Wyman";
                            releaseNotes = new org.openapis.openapi.models.shared.LocalizedText[]{{
                                add(new LocalizedText() {{
                                    language = "earum";
                                    text = "officia";
                                }}),
                                add(new LocalizedText() {{
                                    language = "laborum";
                                    text = "placeat";
                                }}),
                                add(new LocalizedText() {{
                                    language = "modi";
                                    text = "voluptatibus";
                                }}),
                            }};
                            status = TrackReleaseStatusEnum.IN_PROGRESS;
                            userFraction = 8897.94;
                            versionCodes = new String[]{{
                                add("cumque"),
                                add("vitae"),
                                add("rerum"),
                                add("tempora"),
                            }};
                        }}),
                        add(new TrackRelease() {{
                            countryTargeting = new CountryTargeting() {{
                                countries = new String[]{{
                                    add("inventore"),
                                    add("fugit"),
                                }};
                                includeRestOfWorld = false;
                            }};
                            inAppUpdatePriority = 765271;
                            name = "Lisa Flatley";
                            releaseNotes = new org.openapis.openapi.models.shared.LocalizedText[]{{
                                add(new LocalizedText() {{
                                    language = "rem";
                                    text = "at";
                                }}),
                                add(new LocalizedText() {{
                                    language = "impedit";
                                    text = "eos";
                                }}),
                            }};
                            status = TrackReleaseStatusEnum.COMPLETED;
                            userFraction = 4332.79;
                            versionCodes = new String[]{{
                                add("minima"),
                            }};
                        }}),
                        add(new TrackRelease() {{
                            countryTargeting = new CountryTargeting() {{
                                countries = new String[]{{
                                    add("cupiditate"),
                                }};
                                includeRestOfWorld = false;
                            }};
                            inAppUpdatePriority = 589695;
                            name = "Ed Weimann DVM";
                            releaseNotes = new org.openapis.openapi.models.shared.LocalizedText[]{{
                                add(new LocalizedText() {{
                                    language = "maiores";
                                    text = "debitis";
                                }}),
                                add(new LocalizedText() {{
                                    language = "aliquid";
                                    text = "porro";
                                }}),
                                add(new LocalizedText() {{
                                    language = "suscipit";
                                    text = "dolorem";
                                }}),
                            }};
                            status = TrackReleaseStatusEnum.STATUS_UNSPECIFIED;
                            userFraction = 7649.95;
                            versionCodes = new String[]{{
                                add("ratione"),
                                add("animi"),
                                add("necessitatibus"),
                            }};
                        }}),
                    }};
                    track = "nulla";
                }};;
                accessToken = "consequatur";
                alt = AltEnum.JSON;
                callback = "et";
                fields = "ducimus";
                key = "natus";
                oauthToken = "occaecati";
                prettyPrint = false;
                quotaUser = "suscipit";
                uploadType = "adipisci";
                uploadProtocol = "quasi";
            }};            

            AndroidpublisherEditsTracksPatchResponse res = sdk.edits.androidpublisherEditsTracksPatch(req, new AndroidpublisherEditsTracksPatchSecurity("magni", "doloribus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.track != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidpublisherEditsTracksUpdate

Updates a track.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherEditsTracksUpdateRequest;
import org.openapis.openapi.models.operations.AndroidpublisherEditsTracksUpdateResponse;
import org.openapis.openapi.models.operations.AndroidpublisherEditsTracksUpdateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CountryTargeting;
import org.openapis.openapi.models.shared.LocalizedText;
import org.openapis.openapi.models.shared.Track;
import org.openapis.openapi.models.shared.TrackRelease;
import org.openapis.openapi.models.shared.TrackReleaseStatusEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherEditsTracksUpdateRequest req = new AndroidpublisherEditsTracksUpdateRequest("nulla", "necessitatibus", "ipsa") {{
                dollarXgafv = XgafvEnum.ONE;
                track1 = new Track() {{
                    releases = new org.openapis.openapi.models.shared.TrackRelease[]{{
                        add(new TrackRelease() {{
                            countryTargeting = new CountryTargeting() {{
                                countries = new String[]{{
                                    add("dicta"),
                                    add("iusto"),
                                }};
                                includeRestOfWorld = false;
                            }};
                            inAppUpdatePriority = 457059;
                            name = "Emilio Wisoky PhD";
                            releaseNotes = new org.openapis.openapi.models.shared.LocalizedText[]{{
                                add(new LocalizedText() {{
                                    language = "dicta";
                                    text = "odio";
                                }}),
                            }};
                            status = TrackReleaseStatusEnum.DRAFT;
                            userFraction = 4582.59;
                            versionCodes = new String[]{{
                                add("consectetur"),
                                add("aliquid"),
                            }};
                        }}),
                        add(new TrackRelease() {{
                            countryTargeting = new CountryTargeting() {{
                                countries = new String[]{{
                                    add("laborum"),
                                }};
                                includeRestOfWorld = false;
                            }};
                            inAppUpdatePriority = 123844;
                            name = "Janis Ratke";
                            releaseNotes = new org.openapis.openapi.models.shared.LocalizedText[]{{
                                add(new LocalizedText() {{
                                    language = "aliquid";
                                    text = "perferendis";
                                }}),
                                add(new LocalizedText() {{
                                    language = "eum";
                                    text = "voluptas";
                                }}),
                            }};
                            status = TrackReleaseStatusEnum.HALTED;
                            userFraction = 6616.07;
                            versionCodes = new String[]{{
                                add("error"),
                            }};
                        }}),
                    }};
                    track = "possimus";
                }};;
                accessToken = "voluptates";
                alt = AltEnum.MEDIA;
                callback = "laborum";
                fields = "libero";
                key = "ad";
                oauthToken = "deleniti";
                prettyPrint = false;
                quotaUser = "enim";
                uploadType = "vitae";
                uploadProtocol = "repellendus";
            }};            

            AndroidpublisherEditsTracksUpdateResponse res = sdk.edits.androidpublisherEditsTracksUpdate(req, new AndroidpublisherEditsTracksUpdateSecurity("ex", "quo") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.track != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidpublisherEditsValidate

Validates an app edit.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherEditsValidateRequest;
import org.openapis.openapi.models.operations.AndroidpublisherEditsValidateResponse;
import org.openapis.openapi.models.operations.AndroidpublisherEditsValidateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherEditsValidateRequest req = new AndroidpublisherEditsValidateRequest("ex", "ut") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "expedita";
                alt = AltEnum.JSON;
                callback = "molestias";
                fields = "cum";
                key = "aliquid";
                oauthToken = "beatae";
                prettyPrint = false;
                quotaUser = "voluptatum";
                uploadType = "omnis";
                uploadProtocol = "veritatis";
            }};            

            AndroidpublisherEditsValidateResponse res = sdk.edits.androidpublisherEditsValidate(req, new AndroidpublisherEditsValidateSecurity("rerum", "est") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.appEdit != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
