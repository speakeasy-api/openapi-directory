# edits

### Available Operations

* [androidpublisherEditsApklistingsDelete](#androidpublishereditsapklistingsdelete) - Deletes the APK-specific localized listing for a specified APK and language code.
* [androidpublisherEditsApklistingsDeleteall](#androidpublishereditsapklistingsdeleteall) - Deletes all the APK-specific localized listings for a specified APK.
* [androidpublisherEditsApklistingsGet](#androidpublishereditsapklistingsget) - Fetches the APK-specific localized listing for a specified APK and language code.
* [androidpublisherEditsApklistingsList](#androidpublishereditsapklistingslist) - Lists all the APK-specific localized listings for a specified APK.
* [androidpublisherEditsApklistingsPatch](#androidpublishereditsapklistingspatch) - Updates or creates the APK-specific localized listing for a specified APK and language code. This method supports patch semantics.
* [androidpublisherEditsApklistingsUpdate](#androidpublishereditsapklistingsupdate) - Updates or creates the APK-specific localized listing for a specified APK and language code.
* [androidpublisherEditsApksAddexternallyhosted](#androidpublishereditsapksaddexternallyhosted) - Creates a new APK without uploading the APK itself to Google Play, instead hosting the APK at a specified URL. This function is only available to enterprises using Google Play for Work whose application is configured to restrict distribution to the enterprise domain.
* [androidpublisherEditsApksList](#androidpublishereditsapkslist)
* [androidpublisherEditsApksUpload](#androidpublishereditsapksupload)
* [androidpublisherEditsBundlesList](#androidpublishereditsbundleslist)
* [androidpublisherEditsBundlesUpload](#androidpublishereditsbundlesupload) - Uploads a new Android App Bundle to this edit. If you are using the Google API client libraries, please increase the timeout of the http request before calling this endpoint (a timeout of 2 minutes is recommended). See: https://developers.google.com/api-client-library/java/google-api-java-client/errors for an example in java.
* [androidpublisherEditsCommit](#androidpublishereditscommit) - Commits/applies the changes made in this edit back to the app.
* [androidpublisherEditsDelete](#androidpublishereditsdelete) - Deletes an edit for an app. Creating a new edit will automatically delete any of your previous edits so this method need only be called if you want to preemptively abandon an edit.
* [androidpublisherEditsDeobfuscationfilesUpload](#androidpublishereditsdeobfuscationfilesupload) - Uploads the deobfuscation file of the specified APK. If a deobfuscation or symbolication file already exists, it will be replaced. See https://developer.android.com/studio/build/shrink-code to learn more about deobfuscation files.
* [androidpublisherEditsDetailsGet](#androidpublishereditsdetailsget) - Fetches app details for this edit. This includes the default language and developer support contact information.
* [androidpublisherEditsDetailsPatch](#androidpublishereditsdetailspatch) - Updates app details for this edit. This method supports patch semantics.
* [androidpublisherEditsDetailsUpdate](#androidpublishereditsdetailsupdate) - Updates app details for this edit.
* [androidpublisherEditsExpansionfilesGet](#androidpublishereditsexpansionfilesget) - Fetches the Expansion File configuration for the APK specified.
* [androidpublisherEditsExpansionfilesPatch](#androidpublishereditsexpansionfilespatch) - Updates the APK's Expansion File configuration to reference another APK's Expansion Files. To add a new Expansion File use the Upload method. This method supports patch semantics.
* [androidpublisherEditsExpansionfilesUpdate](#androidpublishereditsexpansionfilesupdate) - Updates the APK's Expansion File configuration to reference another APK's Expansion Files. To add a new Expansion File use the Upload method.
* [androidpublisherEditsExpansionfilesUpload](#androidpublishereditsexpansionfilesupload) - Uploads and attaches a new Expansion File to the APK specified.
* [androidpublisherEditsGet](#androidpublishereditsget) - Returns information about the edit specified. Calls will fail if the edit is no long active (e.g. has been deleted, superseded or expired).
* [androidpublisherEditsImagesDelete](#androidpublishereditsimagesdelete) - Deletes the image (specified by id) from the edit.
* [androidpublisherEditsImagesDeleteall](#androidpublishereditsimagesdeleteall) - Deletes all images for the specified language and image type.
* [androidpublisherEditsImagesList](#androidpublishereditsimageslist) - Lists all images for the specified language and image type.
* [androidpublisherEditsImagesUpload](#androidpublishereditsimagesupload) - Uploads a new image and adds it to the list of images for the specified language and image type.
* [androidpublisherEditsInsert](#androidpublishereditsinsert) - Creates a new edit for an app, populated with the app's current state.
* [androidpublisherEditsListingsDelete](#androidpublishereditslistingsdelete) - Deletes the specified localized store listing from an edit.
* [androidpublisherEditsListingsDeleteall](#androidpublishereditslistingsdeleteall) - Deletes all localized listings from an edit.
* [androidpublisherEditsListingsGet](#androidpublishereditslistingsget) - Fetches information about a localized store listing.
* [androidpublisherEditsListingsList](#androidpublishereditslistingslist) - Returns all of the localized store listings attached to this edit.
* [androidpublisherEditsListingsPatch](#androidpublishereditslistingspatch) - Creates or updates a localized store listing. This method supports patch semantics.
* [androidpublisherEditsListingsUpdate](#androidpublishereditslistingsupdate) - Creates or updates a localized store listing.
* [androidpublisherEditsTestersGet](#androidpublishereditstestersget)
* [androidpublisherEditsTestersPatch](#androidpublishereditstesterspatch)
* [androidpublisherEditsTestersUpdate](#androidpublishereditstestersupdate)
* [androidpublisherEditsTracksGet](#androidpublishereditstracksget) - Fetches the track configuration for the specified track type. Includes the APK version codes that are in this track.
* [androidpublisherEditsTracksList](#androidpublishereditstrackslist) - Lists all the track configurations for this edit.
* [androidpublisherEditsTracksPatch](#androidpublishereditstrackspatch) - Updates the track configuration for the specified track type. This method supports patch semantics.
* [androidpublisherEditsTracksUpdate](#androidpublishereditstracksupdate) - Updates the track configuration for the specified track type.
* [androidpublisherEditsValidate](#androidpublishereditsvalidate) - Checks that the edit can be successfully committed. The edit's changes are not applied to the live app.

## androidpublisherEditsApklistingsDelete

Deletes the APK-specific localized listing for a specified APK and language code.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherEditsApklistingsDeleteRequest;
import org.openapis.openapi.models.operations.AndroidpublisherEditsApklistingsDeleteResponse;
import org.openapis.openapi.models.operations.AndroidpublisherEditsApklistingsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherEditsApklistingsDeleteRequest req = new AndroidpublisherEditsApklistingsDeleteRequest(384382L, "iure", "magnam", "debitis") {{
                alt = AltEnum.JSON;
                fields = "ipsa";
                key = "delectus";
                oauthToken = "tempora";
                prettyPrint = false;
                quotaUser = "suscipit";
                userIp = "molestiae";
            }};            

            AndroidpublisherEditsApklistingsDeleteResponse res = sdk.edits.androidpublisherEditsApklistingsDelete(req, new AndroidpublisherEditsApklistingsDeleteSecurity("minus", "placeat") {{
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

## androidpublisherEditsApklistingsDeleteall

Deletes all the APK-specific localized listings for a specified APK.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherEditsApklistingsDeleteallRequest;
import org.openapis.openapi.models.operations.AndroidpublisherEditsApklistingsDeleteallResponse;
import org.openapis.openapi.models.operations.AndroidpublisherEditsApklistingsDeleteallSecurity;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherEditsApklistingsDeleteallRequest req = new AndroidpublisherEditsApklistingsDeleteallRequest(528895L, "iusto", "excepturi") {{
                alt = AltEnum.JSON;
                fields = "nisi";
                key = "recusandae";
                oauthToken = "temporibus";
                prettyPrint = false;
                quotaUser = "ab";
                userIp = "quis";
            }};            

            AndroidpublisherEditsApklistingsDeleteallResponse res = sdk.edits.androidpublisherEditsApklistingsDeleteall(req, new AndroidpublisherEditsApklistingsDeleteallSecurity("veritatis", "deserunt") {{
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

## androidpublisherEditsApklistingsGet

Fetches the APK-specific localized listing for a specified APK and language code.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherEditsApklistingsGetRequest;
import org.openapis.openapi.models.operations.AndroidpublisherEditsApklistingsGetResponse;
import org.openapis.openapi.models.operations.AndroidpublisherEditsApklistingsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherEditsApklistingsGetRequest req = new AndroidpublisherEditsApklistingsGetRequest(20218L, "ipsam", "repellendus", "sapiente") {{
                alt = AltEnum.JSON;
                fields = "quo";
                key = "odit";
                oauthToken = "at";
                prettyPrint = false;
                quotaUser = "at";
                userIp = "maiores";
            }};            

            AndroidpublisherEditsApklistingsGetResponse res = sdk.edits.androidpublisherEditsApklistingsGet(req, new AndroidpublisherEditsApklistingsGetSecurity("molestiae", "quod") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidpublisherEditsApklistingsList

Lists all the APK-specific localized listings for a specified APK.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherEditsApklistingsListRequest;
import org.openapis.openapi.models.operations.AndroidpublisherEditsApklistingsListResponse;
import org.openapis.openapi.models.operations.AndroidpublisherEditsApklistingsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherEditsApklistingsListRequest req = new AndroidpublisherEditsApklistingsListRequest(800911L, "esse", "totam") {{
                alt = AltEnum.JSON;
                fields = "porro";
                key = "dolorum";
                oauthToken = "dicta";
                prettyPrint = false;
                quotaUser = "nam";
                userIp = "officia";
            }};            

            AndroidpublisherEditsApklistingsListResponse res = sdk.edits.androidpublisherEditsApklistingsList(req, new AndroidpublisherEditsApklistingsListSecurity("occaecati", "fugit") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidpublisherEditsApklistingsPatch

Updates or creates the APK-specific localized listing for a specified APK and language code. This method supports patch semantics.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherEditsApklistingsPatchRequest;
import org.openapis.openapi.models.operations.AndroidpublisherEditsApklistingsPatchResponse;
import org.openapis.openapi.models.operations.AndroidpublisherEditsApklistingsPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ApkListing;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherEditsApklistingsPatchRequest req = new AndroidpublisherEditsApklistingsPatchRequest(537373L, "hic", "optio", "totam") {{
                apkListing = new ApkListing() {{
                    language = "beatae";
                    recentChanges = "commodi";
                }};;
                alt = AltEnum.JSON;
                fields = "molestiae";
                key = "modi";
                oauthToken = "qui";
                prettyPrint = false;
                quotaUser = "impedit";
                userIp = "cum";
            }};            

            AndroidpublisherEditsApklistingsPatchResponse res = sdk.edits.androidpublisherEditsApklistingsPatch(req, new AndroidpublisherEditsApklistingsPatchSecurity("esse", "ipsum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidpublisherEditsApklistingsUpdate

Updates or creates the APK-specific localized listing for a specified APK and language code.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherEditsApklistingsUpdateRequest;
import org.openapis.openapi.models.operations.AndroidpublisherEditsApklistingsUpdateResponse;
import org.openapis.openapi.models.operations.AndroidpublisherEditsApklistingsUpdateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ApkListing;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherEditsApklistingsUpdateRequest req = new AndroidpublisherEditsApklistingsUpdateRequest(568434L, "aspernatur", "perferendis", "ad") {{
                apkListing = new ApkListing() {{
                    language = "natus";
                    recentChanges = "sed";
                }};;
                alt = AltEnum.JSON;
                fields = "iste";
                key = "dolor";
                oauthToken = "natus";
                prettyPrint = false;
                quotaUser = "laboriosam";
                userIp = "hic";
            }};            

            AndroidpublisherEditsApklistingsUpdateResponse res = sdk.edits.androidpublisherEditsApklistingsUpdate(req, new AndroidpublisherEditsApklistingsUpdateSecurity("saepe", "fuga") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidpublisherEditsApksAddexternallyhosted

Creates a new APK without uploading the APK itself to Google Play, instead hosting the APK at a specified URL. This function is only available to enterprises using Google Play for Work whose application is configured to restrict distribution to the enterprise domain.

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
import org.openapis.openapi.models.shared.ExternallyHostedApkUsesPermission;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherEditsApksAddexternallyhostedRequest req = new AndroidpublisherEditsApksAddexternallyhostedRequest("in", "corporis") {{
                apksAddExternallyHostedRequest = new ApksAddExternallyHostedRequest() {{
                    externallyHostedApk = new ExternallyHostedApk() {{
                        applicationLabel = "iste";
                        certificateBase64s = new String[]{{
                            add("saepe"),
                            add("quidem"),
                        }};
                        externallyHostedUrl = "architecto";
                        fileSha1Base64 = "ipsa";
                        fileSha256Base64 = "reiciendis";
                        fileSize = "est";
                        iconBase64 = "mollitia";
                        maximumSDK = 670638;
                        minimumSDK = 170909;
                        nativeCodes = new String[]{{
                            add("corporis"),
                        }};
                        packageName = "explicabo";
                        usesFeatures = new String[]{{
                            add("enim"),
                            add("omnis"),
                            add("nemo"),
                            add("minima"),
                        }};
                        usesPermissions = new org.openapis.openapi.models.shared.ExternallyHostedApkUsesPermission[]{{
                            add(new ExternallyHostedApkUsesPermission() {{
                                maxSDKVersion = 38425;
                                name = "Cecilia Yundt MD";
                            }}),
                            add(new ExternallyHostedApkUsesPermission() {{
                                maxSDKVersion = 208876;
                                name = "Carlos Ziemann";
                            }}),
                            add(new ExternallyHostedApkUsesPermission() {{
                                maxSDKVersion = 253291;
                                name = "Claudia Krajcik";
                            }}),
                        }};
                        versionCode = 158969;
                        versionName = "quis";
                    }};;
                }};;
                alt = AltEnum.JSON;
                fields = "vitae";
                key = "laborum";
                oauthToken = "animi";
                prettyPrint = false;
                quotaUser = "enim";
                userIp = "odit";
            }};            

            AndroidpublisherEditsApksAddexternallyhostedResponse res = sdk.edits.androidpublisherEditsApksAddexternallyhosted(req, new AndroidpublisherEditsApksAddexternallyhostedSecurity("quo", "sequi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidpublisherEditsApksList

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherEditsApksListRequest;
import org.openapis.openapi.models.operations.AndroidpublisherEditsApksListResponse;
import org.openapis.openapi.models.operations.AndroidpublisherEditsApksListSecurity;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherEditsApksListRequest req = new AndroidpublisherEditsApksListRequest("tenetur", "ipsam") {{
                alt = AltEnum.JSON;
                fields = "id";
                key = "possimus";
                oauthToken = "aut";
                prettyPrint = false;
                quotaUser = "quasi";
                userIp = "error";
            }};            

            AndroidpublisherEditsApksListResponse res = sdk.edits.androidpublisherEditsApksList(req, new AndroidpublisherEditsApksListSecurity("temporibus", "laborum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidpublisherEditsApksUpload

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherEditsApksUploadRequest;
import org.openapis.openapi.models.operations.AndroidpublisherEditsApksUploadResponse;
import org.openapis.openapi.models.operations.AndroidpublisherEditsApksUploadSecurity;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherEditsApksUploadRequest req = new AndroidpublisherEditsApksUploadRequest("quasi", "reiciendis") {{
                alt = AltEnum.JSON;
                fields = "voluptatibus";
                key = "vero";
                oauthToken = "nihil";
                prettyPrint = false;
                quotaUser = "praesentium";
                userIp = "voluptatibus";
            }};            

            AndroidpublisherEditsApksUploadResponse res = sdk.edits.androidpublisherEditsApksUpload(req, new AndroidpublisherEditsApksUploadSecurity("ipsa", "omnis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidpublisherEditsBundlesList

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherEditsBundlesListRequest;
import org.openapis.openapi.models.operations.AndroidpublisherEditsBundlesListResponse;
import org.openapis.openapi.models.operations.AndroidpublisherEditsBundlesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherEditsBundlesListRequest req = new AndroidpublisherEditsBundlesListRequest("voluptate", "cum") {{
                alt = AltEnum.JSON;
                fields = "perferendis";
                key = "doloremque";
                oauthToken = "reprehenderit";
                prettyPrint = false;
                quotaUser = "ut";
                userIp = "maiores";
            }};            

            AndroidpublisherEditsBundlesListResponse res = sdk.edits.androidpublisherEditsBundlesList(req, new AndroidpublisherEditsBundlesListSecurity("dicta", "corporis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidpublisherEditsBundlesUpload

Uploads a new Android App Bundle to this edit. If you are using the Google API client libraries, please increase the timeout of the http request before calling this endpoint (a timeout of 2 minutes is recommended). See: https://developers.google.com/api-client-library/java/google-api-java-client/errors for an example in java.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherEditsBundlesUploadRequest;
import org.openapis.openapi.models.operations.AndroidpublisherEditsBundlesUploadResponse;
import org.openapis.openapi.models.operations.AndroidpublisherEditsBundlesUploadSecurity;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherEditsBundlesUploadRequest req = new AndroidpublisherEditsBundlesUploadRequest("dolore", "iusto") {{
                ackBundleInstallationWarning = false;
                alt = AltEnum.JSON;
                fields = "dicta";
                key = "harum";
                oauthToken = "enim";
                prettyPrint = false;
                quotaUser = "accusamus";
                userIp = "commodi";
            }};            

            AndroidpublisherEditsBundlesUploadResponse res = sdk.edits.androidpublisherEditsBundlesUpload(req, new AndroidpublisherEditsBundlesUploadSecurity("repudiandae", "quae") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidpublisherEditsCommit

Commits/applies the changes made in this edit back to the app.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherEditsCommitRequest;
import org.openapis.openapi.models.operations.AndroidpublisherEditsCommitResponse;
import org.openapis.openapi.models.operations.AndroidpublisherEditsCommitSecurity;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherEditsCommitRequest req = new AndroidpublisherEditsCommitRequest("ipsum", "quidem") {{
                alt = AltEnum.JSON;
                fields = "molestias";
                key = "excepturi";
                oauthToken = "pariatur";
                prettyPrint = false;
                quotaUser = "modi";
                userIp = "praesentium";
            }};            

            AndroidpublisherEditsCommitResponse res = sdk.edits.androidpublisherEditsCommit(req, new AndroidpublisherEditsCommitSecurity("rem", "voluptates") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidpublisherEditsDelete

Deletes an edit for an app. Creating a new edit will automatically delete any of your previous edits so this method need only be called if you want to preemptively abandon an edit.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherEditsDeleteRequest;
import org.openapis.openapi.models.operations.AndroidpublisherEditsDeleteResponse;
import org.openapis.openapi.models.operations.AndroidpublisherEditsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherEditsDeleteRequest req = new AndroidpublisherEditsDeleteRequest("quasi", "repudiandae") {{
                alt = AltEnum.JSON;
                fields = "sint";
                key = "veritatis";
                oauthToken = "itaque";
                prettyPrint = false;
                quotaUser = "incidunt";
                userIp = "enim";
            }};            

            AndroidpublisherEditsDeleteResponse res = sdk.edits.androidpublisherEditsDelete(req, new AndroidpublisherEditsDeleteSecurity("consequatur", "est") {{
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

Uploads the deobfuscation file of the specified APK. If a deobfuscation or symbolication file already exists, it will be replaced. See https://developer.android.com/studio/build/shrink-code to learn more about deobfuscation files.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherEditsDeobfuscationfilesUploadDeobfuscationFileTypeEnum;
import org.openapis.openapi.models.operations.AndroidpublisherEditsDeobfuscationfilesUploadRequest;
import org.openapis.openapi.models.operations.AndroidpublisherEditsDeobfuscationfilesUploadResponse;
import org.openapis.openapi.models.operations.AndroidpublisherEditsDeobfuscationfilesUploadSecurity;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherEditsDeobfuscationfilesUploadRequest req = new AndroidpublisherEditsDeobfuscationfilesUploadRequest(842342L, AndroidpublisherEditsDeobfuscationfilesUploadDeobfuscationFileTypeEnum.NATIVE_CODE, "deserunt", "distinctio") {{
                alt = AltEnum.JSON;
                fields = "quibusdam";
                key = "labore";
                oauthToken = "modi";
                prettyPrint = false;
                quotaUser = "qui";
                userIp = "aliquid";
            }};            

            AndroidpublisherEditsDeobfuscationfilesUploadResponse res = sdk.edits.androidpublisherEditsDeobfuscationfilesUpload(req, new AndroidpublisherEditsDeobfuscationfilesUploadSecurity("cupiditate", "quos") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidpublisherEditsDetailsGet

Fetches app details for this edit. This includes the default language and developer support contact information.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherEditsDetailsGetRequest;
import org.openapis.openapi.models.operations.AndroidpublisherEditsDetailsGetResponse;
import org.openapis.openapi.models.operations.AndroidpublisherEditsDetailsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherEditsDetailsGetRequest req = new AndroidpublisherEditsDetailsGetRequest("perferendis", "magni") {{
                alt = AltEnum.JSON;
                fields = "assumenda";
                key = "ipsam";
                oauthToken = "alias";
                prettyPrint = false;
                quotaUser = "fugit";
                userIp = "dolorum";
            }};            

            AndroidpublisherEditsDetailsGetResponse res = sdk.edits.androidpublisherEditsDetailsGet(req, new AndroidpublisherEditsDetailsGetSecurity("excepturi", "tempora") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidpublisherEditsDetailsPatch

Updates app details for this edit. This method supports patch semantics.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherEditsDetailsPatchRequest;
import org.openapis.openapi.models.operations.AndroidpublisherEditsDetailsPatchResponse;
import org.openapis.openapi.models.operations.AndroidpublisherEditsDetailsPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AppDetails;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherEditsDetailsPatchRequest req = new AndroidpublisherEditsDetailsPatchRequest("facilis", "tempore") {{
                appDetails = new AppDetails() {{
                    contactEmail = "labore";
                    contactPhone = "delectus";
                    contactWebsite = "eum";
                    defaultLanguage = "non";
                }};;
                alt = AltEnum.JSON;
                fields = "eligendi";
                key = "sint";
                oauthToken = "aliquid";
                prettyPrint = false;
                quotaUser = "provident";
                userIp = "necessitatibus";
            }};            

            AndroidpublisherEditsDetailsPatchResponse res = sdk.edits.androidpublisherEditsDetailsPatch(req, new AndroidpublisherEditsDetailsPatchSecurity("sint", "officia") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidpublisherEditsDetailsUpdate

Updates app details for this edit.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherEditsDetailsUpdateRequest;
import org.openapis.openapi.models.operations.AndroidpublisherEditsDetailsUpdateResponse;
import org.openapis.openapi.models.operations.AndroidpublisherEditsDetailsUpdateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AppDetails;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherEditsDetailsUpdateRequest req = new AndroidpublisherEditsDetailsUpdateRequest("dolor", "debitis") {{
                appDetails = new AppDetails() {{
                    contactEmail = "a";
                    contactPhone = "dolorum";
                    contactWebsite = "in";
                    defaultLanguage = "in";
                }};;
                alt = AltEnum.JSON;
                fields = "illum";
                key = "maiores";
                oauthToken = "rerum";
                prettyPrint = false;
                quotaUser = "dicta";
                userIp = "magnam";
            }};            

            AndroidpublisherEditsDetailsUpdateResponse res = sdk.edits.androidpublisherEditsDetailsUpdate(req, new AndroidpublisherEditsDetailsUpdateSecurity("cumque", "facere") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidpublisherEditsExpansionfilesGet

Fetches the Expansion File configuration for the APK specified.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherEditsExpansionfilesGetExpansionFileTypeEnum;
import org.openapis.openapi.models.operations.AndroidpublisherEditsExpansionfilesGetRequest;
import org.openapis.openapi.models.operations.AndroidpublisherEditsExpansionfilesGetResponse;
import org.openapis.openapi.models.operations.AndroidpublisherEditsExpansionfilesGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherEditsExpansionfilesGetRequest req = new AndroidpublisherEditsExpansionfilesGetRequest(411820L, "aliquid", AndroidpublisherEditsExpansionfilesGetExpansionFileTypeEnum.PATCH, "accusamus") {{
                alt = AltEnum.JSON;
                fields = "non";
                key = "occaecati";
                oauthToken = "enim";
                prettyPrint = false;
                quotaUser = "accusamus";
                userIp = "delectus";
            }};            

            AndroidpublisherEditsExpansionfilesGetResponse res = sdk.edits.androidpublisherEditsExpansionfilesGet(req, new AndroidpublisherEditsExpansionfilesGetSecurity("quidem", "provident") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidpublisherEditsExpansionfilesPatch

Updates the APK's Expansion File configuration to reference another APK's Expansion Files. To add a new Expansion File use the Upload method. This method supports patch semantics.

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

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherEditsExpansionfilesPatchRequest req = new AndroidpublisherEditsExpansionfilesPatchRequest(725255L, "id", AndroidpublisherEditsExpansionfilesPatchExpansionFileTypeEnum.PATCH, "deleniti") {{
                expansionFile = new ExpansionFile() {{
                    fileSize = "sapiente";
                    referencesVersion = 230533;
                }};;
                alt = AltEnum.JSON;
                fields = "deserunt";
                key = "nisi";
                oauthToken = "vel";
                prettyPrint = false;
                quotaUser = "natus";
                userIp = "omnis";
            }};            

            AndroidpublisherEditsExpansionfilesPatchResponse res = sdk.edits.androidpublisherEditsExpansionfilesPatch(req, new AndroidpublisherEditsExpansionfilesPatchSecurity("molestiae", "perferendis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidpublisherEditsExpansionfilesUpdate

Updates the APK's Expansion File configuration to reference another APK's Expansion Files. To add a new Expansion File use the Upload method.

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

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherEditsExpansionfilesUpdateRequest req = new AndroidpublisherEditsExpansionfilesUpdateRequest(470132L, "magnam", AndroidpublisherEditsExpansionfilesUpdateExpansionFileTypeEnum.PATCH, "id") {{
                expansionFile = new ExpansionFile() {{
                    fileSize = "labore";
                    referencesVersion = 290077;
                }};;
                alt = AltEnum.JSON;
                fields = "suscipit";
                key = "natus";
                oauthToken = "nobis";
                prettyPrint = false;
                quotaUser = "eum";
                userIp = "vero";
            }};            

            AndroidpublisherEditsExpansionfilesUpdateResponse res = sdk.edits.androidpublisherEditsExpansionfilesUpdate(req, new AndroidpublisherEditsExpansionfilesUpdateSecurity("aspernatur", "architecto") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidpublisherEditsExpansionfilesUpload

Uploads and attaches a new Expansion File to the APK specified.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherEditsExpansionfilesUploadExpansionFileTypeEnum;
import org.openapis.openapi.models.operations.AndroidpublisherEditsExpansionfilesUploadRequest;
import org.openapis.openapi.models.operations.AndroidpublisherEditsExpansionfilesUploadResponse;
import org.openapis.openapi.models.operations.AndroidpublisherEditsExpansionfilesUploadSecurity;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherEditsExpansionfilesUploadRequest req = new AndroidpublisherEditsExpansionfilesUploadRequest(298282L, "et", AndroidpublisherEditsExpansionfilesUploadExpansionFileTypeEnum.PATCH, "ullam") {{
                alt = AltEnum.JSON;
                fields = "provident";
                key = "quos";
                oauthToken = "sint";
                prettyPrint = false;
                quotaUser = "accusantium";
                userIp = "mollitia";
            }};            

            AndroidpublisherEditsExpansionfilesUploadResponse res = sdk.edits.androidpublisherEditsExpansionfilesUpload(req, new AndroidpublisherEditsExpansionfilesUploadSecurity("reiciendis", "mollitia") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidpublisherEditsGet

Returns information about the edit specified. Calls will fail if the edit is no long active (e.g. has been deleted, superseded or expired).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherEditsGetRequest;
import org.openapis.openapi.models.operations.AndroidpublisherEditsGetResponse;
import org.openapis.openapi.models.operations.AndroidpublisherEditsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherEditsGetRequest req = new AndroidpublisherEditsGetRequest("ad", "eum") {{
                alt = AltEnum.JSON;
                fields = "dolor";
                key = "necessitatibus";
                oauthToken = "odit";
                prettyPrint = false;
                quotaUser = "nemo";
                userIp = "quasi";
            }};            

            AndroidpublisherEditsGetResponse res = sdk.edits.androidpublisherEditsGet(req, new AndroidpublisherEditsGetSecurity("iure", "doloribus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
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

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherEditsImagesDeleteRequest req = new AndroidpublisherEditsImagesDeleteRequest("debitis", "eius", AndroidpublisherEditsImagesDeleteImageTypeEnum.TV_SCREENSHOTS, "deleniti", "facilis") {{
                alt = AltEnum.JSON;
                fields = "in";
                key = "architecto";
                oauthToken = "architecto";
                prettyPrint = false;
                quotaUser = "repudiandae";
                userIp = "ullam";
            }};            

            AndroidpublisherEditsImagesDeleteResponse res = sdk.edits.androidpublisherEditsImagesDelete(req, new AndroidpublisherEditsImagesDeleteSecurity("expedita", "nihil") {{
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

Deletes all images for the specified language and image type.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherEditsImagesDeleteallImageTypeEnum;
import org.openapis.openapi.models.operations.AndroidpublisherEditsImagesDeleteallRequest;
import org.openapis.openapi.models.operations.AndroidpublisherEditsImagesDeleteallResponse;
import org.openapis.openapi.models.operations.AndroidpublisherEditsImagesDeleteallSecurity;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherEditsImagesDeleteallRequest req = new AndroidpublisherEditsImagesDeleteallRequest("repellat", AndroidpublisherEditsImagesDeleteallImageTypeEnum.TV_SCREENSHOTS, "sed", "saepe") {{
                alt = AltEnum.JSON;
                fields = "pariatur";
                key = "accusantium";
                oauthToken = "consequuntur";
                prettyPrint = false;
                quotaUser = "praesentium";
                userIp = "natus";
            }};            

            AndroidpublisherEditsImagesDeleteallResponse res = sdk.edits.androidpublisherEditsImagesDeleteall(req, new AndroidpublisherEditsImagesDeleteallSecurity("magni", "sunt") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidpublisherEditsImagesList

Lists all images for the specified language and image type.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherEditsImagesListImageTypeEnum;
import org.openapis.openapi.models.operations.AndroidpublisherEditsImagesListRequest;
import org.openapis.openapi.models.operations.AndroidpublisherEditsImagesListResponse;
import org.openapis.openapi.models.operations.AndroidpublisherEditsImagesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherEditsImagesListRequest req = new AndroidpublisherEditsImagesListRequest("quo", AndroidpublisherEditsImagesListImageTypeEnum.TV_SCREENSHOTS, "pariatur", "maxime") {{
                alt = AltEnum.JSON;
                fields = "ea";
                key = "excepturi";
                oauthToken = "odit";
                prettyPrint = false;
                quotaUser = "ea";
                userIp = "accusantium";
            }};            

            AndroidpublisherEditsImagesListResponse res = sdk.edits.androidpublisherEditsImagesList(req, new AndroidpublisherEditsImagesListSecurity("ab", "maiores") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidpublisherEditsImagesUpload

Uploads a new image and adds it to the list of images for the specified language and image type.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherEditsImagesUploadImageTypeEnum;
import org.openapis.openapi.models.operations.AndroidpublisherEditsImagesUploadRequest;
import org.openapis.openapi.models.operations.AndroidpublisherEditsImagesUploadResponse;
import org.openapis.openapi.models.operations.AndroidpublisherEditsImagesUploadSecurity;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherEditsImagesUploadRequest req = new AndroidpublisherEditsImagesUploadRequest("quidem", AndroidpublisherEditsImagesUploadImageTypeEnum.PROMO_GRAPHIC, "voluptate", "autem") {{
                alt = AltEnum.JSON;
                fields = "nam";
                key = "eaque";
                oauthToken = "pariatur";
                prettyPrint = false;
                quotaUser = "nemo";
                userIp = "voluptatibus";
            }};            

            AndroidpublisherEditsImagesUploadResponse res = sdk.edits.androidpublisherEditsImagesUpload(req, new AndroidpublisherEditsImagesUploadSecurity("perferendis", "fugiat") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidpublisherEditsInsert

Creates a new edit for an app, populated with the app's current state.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherEditsInsertRequest;
import org.openapis.openapi.models.operations.AndroidpublisherEditsInsertResponse;
import org.openapis.openapi.models.operations.AndroidpublisherEditsInsertSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AppEdit;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherEditsInsertRequest req = new AndroidpublisherEditsInsertRequest("amet") {{
                appEdit = new AppEdit() {{
                    expiryTimeSeconds = "aut";
                    id = "c5fbb258-7053-4202-873d-5fe9b90c2890";
                }};;
                alt = AltEnum.JSON;
                fields = "occaecati";
                key = "rerum";
                oauthToken = "adipisci";
                prettyPrint = false;
                quotaUser = "asperiores";
                userIp = "earum";
            }};            

            AndroidpublisherEditsInsertResponse res = sdk.edits.androidpublisherEditsInsert(req, new AndroidpublisherEditsInsertSecurity("modi", "iste") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidpublisherEditsListingsDelete

Deletes the specified localized store listing from an edit.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherEditsListingsDeleteRequest;
import org.openapis.openapi.models.operations.AndroidpublisherEditsListingsDeleteResponse;
import org.openapis.openapi.models.operations.AndroidpublisherEditsListingsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherEditsListingsDeleteRequest req = new AndroidpublisherEditsListingsDeleteRequest("dolorum", "deleniti", "pariatur") {{
                alt = AltEnum.JSON;
                fields = "provident";
                key = "nobis";
                oauthToken = "libero";
                prettyPrint = false;
                quotaUser = "delectus";
                userIp = "quaerat";
            }};            

            AndroidpublisherEditsListingsDeleteResponse res = sdk.edits.androidpublisherEditsListingsDelete(req, new AndroidpublisherEditsListingsDeleteSecurity("quos", "aliquid") {{
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

Deletes all localized listings from an edit.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherEditsListingsDeleteallRequest;
import org.openapis.openapi.models.operations.AndroidpublisherEditsListingsDeleteallResponse;
import org.openapis.openapi.models.operations.AndroidpublisherEditsListingsDeleteallSecurity;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherEditsListingsDeleteallRequest req = new AndroidpublisherEditsListingsDeleteallRequest("dolorem", "dolorem") {{
                alt = AltEnum.JSON;
                fields = "dolor";
                key = "qui";
                oauthToken = "ipsum";
                prettyPrint = false;
                quotaUser = "hic";
                userIp = "excepturi";
            }};            

            AndroidpublisherEditsListingsDeleteallResponse res = sdk.edits.androidpublisherEditsListingsDeleteall(req, new AndroidpublisherEditsListingsDeleteallSecurity("cum", "voluptate") {{
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

Fetches information about a localized store listing.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherEditsListingsGetRequest;
import org.openapis.openapi.models.operations.AndroidpublisherEditsListingsGetResponse;
import org.openapis.openapi.models.operations.AndroidpublisherEditsListingsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherEditsListingsGetRequest req = new AndroidpublisherEditsListingsGetRequest("dignissimos", "reiciendis", "amet") {{
                alt = AltEnum.JSON;
                fields = "dolorum";
                key = "numquam";
                oauthToken = "veritatis";
                prettyPrint = false;
                quotaUser = "ipsa";
                userIp = "ipsa";
            }};            

            AndroidpublisherEditsListingsGetResponse res = sdk.edits.androidpublisherEditsListingsGet(req, new AndroidpublisherEditsListingsGetSecurity("iure", "odio") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidpublisherEditsListingsList

Returns all of the localized store listings attached to this edit.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherEditsListingsListRequest;
import org.openapis.openapi.models.operations.AndroidpublisherEditsListingsListResponse;
import org.openapis.openapi.models.operations.AndroidpublisherEditsListingsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherEditsListingsListRequest req = new AndroidpublisherEditsListingsListRequest("quaerat", "accusamus") {{
                alt = AltEnum.JSON;
                fields = "quidem";
                key = "voluptatibus";
                oauthToken = "voluptas";
                prettyPrint = false;
                quotaUser = "natus";
                userIp = "eos";
            }};            

            AndroidpublisherEditsListingsListResponse res = sdk.edits.androidpublisherEditsListingsList(req, new AndroidpublisherEditsListingsListSecurity("atque", "sit") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidpublisherEditsListingsPatch

Creates or updates a localized store listing. This method supports patch semantics.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherEditsListingsPatchRequest;
import org.openapis.openapi.models.operations.AndroidpublisherEditsListingsPatchResponse;
import org.openapis.openapi.models.operations.AndroidpublisherEditsListingsPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Listing;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherEditsListingsPatchRequest req = new AndroidpublisherEditsListingsPatchRequest("fugiat", "ab", "soluta") {{
                listing = new Listing() {{
                    fullDescription = "dolorum";
                    language = "iusto";
                    shortDescription = "voluptate";
                    title = "Miss";
                    video = "deleniti";
                }};;
                alt = AltEnum.JSON;
                fields = "omnis";
                key = "necessitatibus";
                oauthToken = "distinctio";
                prettyPrint = false;
                quotaUser = "asperiores";
                userIp = "nihil";
            }};            

            AndroidpublisherEditsListingsPatchResponse res = sdk.edits.androidpublisherEditsListingsPatch(req, new AndroidpublisherEditsListingsPatchSecurity("ipsum", "voluptate") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
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

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherEditsListingsUpdateRequest req = new AndroidpublisherEditsListingsUpdateRequest("id", "saepe", "eius") {{
                listing = new Listing() {{
                    fullDescription = "aspernatur";
                    language = "perferendis";
                    shortDescription = "amet";
                    title = "Miss";
                    video = "accusamus";
                }};;
                alt = AltEnum.JSON;
                fields = "ad";
                key = "saepe";
                oauthToken = "suscipit";
                prettyPrint = false;
                quotaUser = "deserunt";
                userIp = "provident";
            }};            

            AndroidpublisherEditsListingsUpdateResponse res = sdk.edits.androidpublisherEditsListingsUpdate(req, new AndroidpublisherEditsListingsUpdateSecurity("minima", "repellendus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidpublisherEditsTestersGet

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherEditsTestersGetRequest;
import org.openapis.openapi.models.operations.AndroidpublisherEditsTestersGetResponse;
import org.openapis.openapi.models.operations.AndroidpublisherEditsTestersGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherEditsTestersGetRequest req = new AndroidpublisherEditsTestersGetRequest("totam", "similique", "alias") {{
                alt = AltEnum.JSON;
                fields = "at";
                key = "quaerat";
                oauthToken = "tempora";
                prettyPrint = false;
                quotaUser = "vel";
                userIp = "quod";
            }};            

            AndroidpublisherEditsTestersGetResponse res = sdk.edits.androidpublisherEditsTestersGet(req, new AndroidpublisherEditsTestersGetSecurity("officiis", "qui") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidpublisherEditsTestersPatch

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherEditsTestersPatchRequest;
import org.openapis.openapi.models.operations.AndroidpublisherEditsTestersPatchResponse;
import org.openapis.openapi.models.operations.AndroidpublisherEditsTestersPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Testers;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherEditsTestersPatchRequest req = new AndroidpublisherEditsTestersPatchRequest("dolorum", "a", "esse") {{
                testers = new Testers() {{
                    googleGroups = new String[]{{
                        add("iusto"),
                        add("ipsum"),
                        add("quisquam"),
                    }};
                }};;
                alt = AltEnum.JSON;
                fields = "tenetur";
                key = "amet";
                oauthToken = "tempore";
                prettyPrint = false;
                quotaUser = "accusamus";
                userIp = "numquam";
            }};            

            AndroidpublisherEditsTestersPatchResponse res = sdk.edits.androidpublisherEditsTestersPatch(req, new AndroidpublisherEditsTestersPatchSecurity("enim", "dolorem") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidpublisherEditsTestersUpdate

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherEditsTestersUpdateRequest;
import org.openapis.openapi.models.operations.AndroidpublisherEditsTestersUpdateResponse;
import org.openapis.openapi.models.operations.AndroidpublisherEditsTestersUpdateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Testers;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherEditsTestersUpdateRequest req = new AndroidpublisherEditsTestersUpdateRequest("sapiente", "totam", "nihil") {{
                testers = new Testers() {{
                    googleGroups = new String[]{{
                        add("expedita"),
                    }};
                }};;
                alt = AltEnum.JSON;
                fields = "neque";
                key = "sed";
                oauthToken = "vel";
                prettyPrint = false;
                quotaUser = "libero";
                userIp = "voluptas";
            }};            

            AndroidpublisherEditsTestersUpdateResponse res = sdk.edits.androidpublisherEditsTestersUpdate(req, new AndroidpublisherEditsTestersUpdateSecurity("deserunt", "quam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidpublisherEditsTracksGet

Fetches the track configuration for the specified track type. Includes the APK version codes that are in this track.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherEditsTracksGetRequest;
import org.openapis.openapi.models.operations.AndroidpublisherEditsTracksGetResponse;
import org.openapis.openapi.models.operations.AndroidpublisherEditsTracksGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherEditsTracksGetRequest req = new AndroidpublisherEditsTracksGetRequest("ipsum", "incidunt", "qui") {{
                alt = AltEnum.JSON;
                fields = "cupiditate";
                key = "maxime";
                oauthToken = "pariatur";
                prettyPrint = false;
                quotaUser = "soluta";
                userIp = "dicta";
            }};            

            AndroidpublisherEditsTracksGetResponse res = sdk.edits.androidpublisherEditsTracksGet(req, new AndroidpublisherEditsTracksGetSecurity("laborum", "totam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidpublisherEditsTracksList

Lists all the track configurations for this edit.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherEditsTracksListRequest;
import org.openapis.openapi.models.operations.AndroidpublisherEditsTracksListResponse;
import org.openapis.openapi.models.operations.AndroidpublisherEditsTracksListSecurity;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherEditsTracksListRequest req = new AndroidpublisherEditsTracksListRequest("incidunt", "aspernatur") {{
                alt = AltEnum.JSON;
                fields = "dolores";
                key = "distinctio";
                oauthToken = "facilis";
                prettyPrint = false;
                quotaUser = "aliquid";
                userIp = "quam";
            }};            

            AndroidpublisherEditsTracksListResponse res = sdk.edits.androidpublisherEditsTracksList(req, new AndroidpublisherEditsTracksListSecurity("molestias", "temporibus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidpublisherEditsTracksPatch

Updates the track configuration for the specified track type. This method supports patch semantics.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherEditsTracksPatchRequest;
import org.openapis.openapi.models.operations.AndroidpublisherEditsTracksPatchResponse;
import org.openapis.openapi.models.operations.AndroidpublisherEditsTracksPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Track;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherEditsTracksPatchRequest req = new AndroidpublisherEditsTracksPatchRequest("qui", "neque", "fugit") {{
                track1 = new Track() {{
                    track = "magni";
                    userFraction = 4880.56;
                    versionCodes = new Integer[]{{
                        add(355613),
                    }};
                }};;
                alt = AltEnum.JSON;
                fields = "nam";
                key = "hic";
                oauthToken = "voluptatem";
                prettyPrint = false;
                quotaUser = "cumque";
                userIp = "soluta";
            }};            

            AndroidpublisherEditsTracksPatchResponse res = sdk.edits.androidpublisherEditsTracksPatch(req, new AndroidpublisherEditsTracksPatchSecurity("nobis", "et") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidpublisherEditsTracksUpdate

Updates the track configuration for the specified track type.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherEditsTracksUpdateRequest;
import org.openapis.openapi.models.operations.AndroidpublisherEditsTracksUpdateResponse;
import org.openapis.openapi.models.operations.AndroidpublisherEditsTracksUpdateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Track;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherEditsTracksUpdateRequest req = new AndroidpublisherEditsTracksUpdateRequest("saepe", "ipsum", "veritatis") {{
                track1 = new Track() {{
                    track = "nobis";
                    userFraction = 5521.93;
                    versionCodes = new Integer[]{{
                        add(584476),
                        add(45614),
                        add(961937),
                    }};
                }};;
                alt = AltEnum.JSON;
                fields = "dolorem";
                key = "dolore";
                oauthToken = "labore";
                prettyPrint = false;
                quotaUser = "adipisci";
                userIp = "dolorum";
            }};            

            AndroidpublisherEditsTracksUpdateResponse res = sdk.edits.androidpublisherEditsTracksUpdate(req, new AndroidpublisherEditsTracksUpdateSecurity("architecto", "quae") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## androidpublisherEditsValidate

Checks that the edit can be successfully committed. The edit's changes are not applied to the live app.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AndroidpublisherEditsValidateRequest;
import org.openapis.openapi.models.operations.AndroidpublisherEditsValidateResponse;
import org.openapis.openapi.models.operations.AndroidpublisherEditsValidateSecurity;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AndroidpublisherEditsValidateRequest req = new AndroidpublisherEditsValidateRequest("aut", "quas") {{
                alt = AltEnum.JSON;
                fields = "itaque";
                key = "consequatur";
                oauthToken = "est";
                prettyPrint = false;
                quotaUser = "repellendus";
                userIp = "porro";
            }};            

            AndroidpublisherEditsValidateResponse res = sdk.edits.androidpublisherEditsValidate(req, new AndroidpublisherEditsValidateSecurity("doloribus", "ut") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
