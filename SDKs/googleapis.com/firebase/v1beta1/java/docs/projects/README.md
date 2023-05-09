# projects

### Available Operations

* [firebaseProjectsAddFirebase](#firebaseprojectsaddfirebase) - Adds Firebase resources to the specified existing [Google Cloud Platform (GCP) `Project`] (https://cloud.google.com/resource-manager/reference/rest/v1/projects). Since a FirebaseProject is actually also a GCP `Project`, a `FirebaseProject` has the same underlying GCP identifiers (`projectNumber` and `projectId`). This allows for easy interop with Google APIs. The result of this call is an [`Operation`](../../v1beta1/operations). Poll the `Operation` to track the provisioning process by calling GetOperation until [`done`](../../v1beta1/operations#Operation.FIELDS.done) is `true`. When `done` is `true`, the `Operation` has either succeeded or failed. If the `Operation` succeeded, its [`response`](../../v1beta1/operations#Operation.FIELDS.response) is set to a FirebaseProject; if the `Operation` failed, its [`error`](../../v1beta1/operations#Operation.FIELDS.error) is set to a google.rpc.Status. The `Operation` is automatically deleted after completion, so there is no need to call DeleteOperation. This method does not modify any billing account information on the underlying GCP `Project`. To call `AddFirebase`, a project member or service account must have the following permissions (the IAM roles of Editor and Owner contain these permissions): `firebase.projects.update`, `resourcemanager.projects.get`, `serviceusage.services.enable`, and `serviceusage.services.get`.
* [firebaseProjectsAddGoogleAnalytics](#firebaseprojectsaddgoogleanalytics) - Links the specified FirebaseProject with an existing [Google Analytics account](http://www.google.com/analytics/). Using this call, you can either: - Specify an `analyticsAccountId` to provision a new Google Analytics property within the specified account and associate the new property with the `FirebaseProject`. - Specify an existing `analyticsPropertyId` to associate the property with the `FirebaseProject`. Note that when you call `AddGoogleAnalytics`: 1. The first check determines if any existing data streams in the Google Analytics property correspond to any existing Firebase Apps in the `FirebaseProject` (based on the `packageName` or `bundleId` associated with the data stream). Then, as applicable, the data streams and apps are linked. Note that this auto-linking only applies to `AndroidApps` and `IosApps`. 2. If no corresponding data streams are found for the Firebase Apps, new data streams are provisioned in the Google Analytics property for each of the Firebase Apps. Note that a new data stream is always provisioned for a Web App even if it was previously associated with a data stream in the Analytics property. Learn more about the hierarchy and structure of Google Analytics accounts in the [Analytics documentation](https://support.google.com/analytics/answer/9303323). The result of this call is an [`Operation`](../../v1beta1/operations). Poll the `Operation` to track the provisioning process by calling GetOperation until [`done`](../../v1beta1/operations#Operation.FIELDS.done) is `true`. When `done` is `true`, the `Operation` has either succeeded or failed. If the `Operation` succeeded, its [`response`](../../v1beta1/operations#Operation.FIELDS.response) is set to an AnalyticsDetails; if the `Operation` failed, its [`error`](../../v1beta1/operations#Operation.FIELDS.error) is set to a google.rpc.Status. To call `AddGoogleAnalytics`, a project member must be an Owner for the existing `FirebaseProject` and have the [`Edit` permission](https://support.google.com/analytics/answer/2884495) for the Google Analytics account. If the `FirebaseProject` already has Google Analytics enabled, and you call `AddGoogleAnalytics` using an `analyticsPropertyId` that's different from the currently associated property, then the call will fail. Analytics may have already been enabled in the Firebase console or by specifying `timeZone` and `regionCode` in the call to [`AddFirebase`](../../v1beta1/projects/addFirebase).
* [firebaseProjectsAndroidAppsCreate](#firebaseprojectsandroidappscreate) - Requests the creation of a new AndroidApp in the specified FirebaseProject. The result of this call is an `Operation` which can be used to track the provisioning process. The `Operation` is automatically deleted after completion, so there is no need to call `DeleteOperation`.
* [firebaseProjectsAndroidAppsList](#firebaseprojectsandroidappslist) - Lists each AndroidApp associated with the specified FirebaseProject. The elements are returned in no particular order, but will be a consistent view of the Apps when additional requests are made with a `pageToken`.
* [firebaseProjectsAndroidAppsShaCreate](#firebaseprojectsandroidappsshacreate) - Adds a ShaCertificate to the specified AndroidApp.
* [firebaseProjectsAndroidAppsShaDelete](#firebaseprojectsandroidappsshadelete) - Removes a ShaCertificate from the specified AndroidApp.
* [firebaseProjectsAndroidAppsShaList](#firebaseprojectsandroidappsshalist) - Lists the SHA-1 and SHA-256 certificates for the specified AndroidApp.
* [firebaseProjectsAvailableLocationsList](#firebaseprojectsavailablelocationslist) - Lists the valid Google Cloud Platform (GCP) resource locations for the specified Project (including a FirebaseProject). One of these locations can be selected as the Project's [_default_ GCP resource location](https://firebase.google.com/docs/projects/locations), which is the geographical location where the Project's resources, such as Cloud Firestore, will be provisioned by default. However, if the default GCP resource location has already been set for the Project, then this setting cannot be changed. This call checks for any possible [location restrictions](https://cloud.google.com/resource-manager/docs/organization-policy/defining-locations) for the specified Project and, thus, might return a subset of all possible GCP resource locations. To list all GCP resource locations (regardless of any restrictions), call the endpoint without specifying a unique project identifier (that is, `/v1beta1/{parent=projects/-}/listAvailableLocations`). To call `ListAvailableLocations` with a specified project, a member must be at minimum a Viewer of the Project. Calls without a specified project do not require any specific project permissions.
* [firebaseProjectsDefaultLocationFinalize](#firebaseprojectsdefaultlocationfinalize) - Sets the default Google Cloud Platform (GCP) resource location for the specified FirebaseProject. This method creates an App Engine application with a [default Cloud Storage bucket](https://cloud.google.com/appengine/docs/standard/python/googlecloudstorageclient/setting-up-cloud-storage#activating_a_cloud_storage_bucket), located in the specified [`locationId`](#body.request_body.FIELDS.location_id). This location must be one of the available [GCP resource locations](https://firebase.google.com/docs/projects/locations). After the default GCP resource location is finalized, or if it was already set, it cannot be changed. The default GCP resource location for the specified `FirebaseProject` might already be set because either the underlying GCP `Project` already has an App Engine application or `FinalizeDefaultLocation` was previously called with a specified `locationId`. Any new calls to `FinalizeDefaultLocation` with a *different* specified `locationId` will return a 409 error. The result of this call is an [`Operation`](../../v1beta1/operations), which can be used to track the provisioning process. The [`response`](../../v1beta1/operations#Operation.FIELDS.response) type of the `Operation` is google.protobuf.Empty. The `Operation` can be polled by its `name` using GetOperation until `done` is true. When `done` is true, the `Operation` has either succeeded or failed. If the `Operation` has succeeded, its [`response`](../../v1beta1/operations#Operation.FIELDS.response) will be set to a google.protobuf.Empty; if the `Operation` has failed, its `error` will be set to a google.rpc.Status. The `Operation` is automatically deleted after completion, so there is no need to call DeleteOperation. All fields listed in the [request body](#request-body) are required. To call `FinalizeDefaultLocation`, a member must be an Owner of the Project.
* [firebaseProjectsIosAppsCreate](#firebaseprojectsiosappscreate) - Requests the creation of a new IosApp in the specified FirebaseProject. The result of this call is an `Operation` which can be used to track the provisioning process. The `Operation` is automatically deleted after completion, so there is no need to call `DeleteOperation`.
* [firebaseProjectsIosAppsList](#firebaseprojectsiosappslist) - Lists each IosApp associated with the specified FirebaseProject. The elements are returned in no particular order, but will be a consistent view of the Apps when additional requests are made with a `pageToken`.
* [firebaseProjectsList](#firebaseprojectslist) - Lists each FirebaseProject accessible to the caller. The elements are returned in no particular order, but they will be a consistent view of the Projects when additional requests are made with a `pageToken`. This method is eventually consistent with Project mutations, which means newly provisioned Projects and recent modifications to existing Projects might not be reflected in the set of Projects. The list will include only ACTIVE Projects. Use GetFirebaseProject for consistent reads as well as for additional Project details.
* [firebaseProjectsRemoveAnalytics](#firebaseprojectsremoveanalytics) - Unlinks the specified FirebaseProject from its Google Analytics account. This call removes the association of the specified `FirebaseProject` with its current Google Analytics property. However, this call does not delete the Google Analytics resources, such as the Google Analytics property or any data streams. These resources may be re-associated later to the `FirebaseProject` by calling [`AddGoogleAnalytics`](../../v1beta1/projects/addGoogleAnalytics) and specifying the same `analyticsPropertyId`. For Android Apps and iOS Apps, this call re-links data streams with their corresponding apps. However, for Web Apps, this call provisions a *new* data stream for each Web App. To call `RemoveAnalytics`, a project member must be an Owner for the `FirebaseProject`.
* [firebaseProjectsSearchApps](#firebaseprojectssearchapps) - Lists all available Apps for the specified FirebaseProject. This is a convenience method. Typically, interaction with an App should be done using the platform-specific service, but some tool use-cases require a summary of all known Apps (such as for App selector interfaces).
* [firebaseProjectsWebAppsCreate](#firebaseprojectswebappscreate) - Requests the creation of a new WebApp in the specified FirebaseProject. The result of this call is an `Operation` which can be used to track the provisioning process. The `Operation` is automatically deleted after completion, so there is no need to call `DeleteOperation`.
* [firebaseProjectsWebAppsGetConfig](#firebaseprojectswebappsgetconfig) - Gets the configuration artifact associated with the specified WebApp.
* [firebaseProjectsWebAppsList](#firebaseprojectswebappslist) - Lists each WebApp associated with the specified FirebaseProject. The elements are returned in no particular order, but will be a consistent view of the Apps when additional requests are made with a `pageToken`.
* [firebaseProjectsWebAppsPatch](#firebaseprojectswebappspatch) - Updates the attributes of the specified WebApp.
* [firebaseProjectsWebAppsRemove](#firebaseprojectswebappsremove) - Removes the specified WebApp from the FirebaseProject.
* [firebaseProjectsWebAppsUndelete](#firebaseprojectswebappsundelete) - Restores the specified WebApp to the FirebaseProject.

## firebaseProjectsAddFirebase

Adds Firebase resources to the specified existing [Google Cloud Platform (GCP) `Project`] (https://cloud.google.com/resource-manager/reference/rest/v1/projects). Since a FirebaseProject is actually also a GCP `Project`, a `FirebaseProject` has the same underlying GCP identifiers (`projectNumber` and `projectId`). This allows for easy interop with Google APIs. The result of this call is an [`Operation`](../../v1beta1/operations). Poll the `Operation` to track the provisioning process by calling GetOperation until [`done`](../../v1beta1/operations#Operation.FIELDS.done) is `true`. When `done` is `true`, the `Operation` has either succeeded or failed. If the `Operation` succeeded, its [`response`](../../v1beta1/operations#Operation.FIELDS.response) is set to a FirebaseProject; if the `Operation` failed, its [`error`](../../v1beta1/operations#Operation.FIELDS.error) is set to a google.rpc.Status. The `Operation` is automatically deleted after completion, so there is no need to call DeleteOperation. This method does not modify any billing account information on the underlying GCP `Project`. To call `AddFirebase`, a project member or service account must have the following permissions (the IAM roles of Editor and Owner contain these permissions): `firebase.projects.update`, `resourcemanager.projects.get`, `serviceusage.services.enable`, and `serviceusage.services.get`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FirebaseProjectsAddFirebaseRequest;
import org.openapis.openapi.models.operations.FirebaseProjectsAddFirebaseResponse;
import org.openapis.openapi.models.operations.FirebaseProjectsAddFirebaseSecurity;
import org.openapis.openapi.models.operations.FirebaseProjectsAddFirebaseSecurityOption1;
import org.openapis.openapi.models.operations.FirebaseProjectsAddFirebaseSecurityOption2;
import org.openapis.openapi.models.shared.AddFirebaseRequest;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebaseProjectsAddFirebaseRequest req = new FirebaseProjectsAddFirebaseRequest("ab") {{
                dollarXgafv = XgafvEnum.ONE;
                addFirebaseRequest = new AddFirebaseRequest() {{
                    locationId = "veritatis";
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

            FirebaseProjectsAddFirebaseResponse res = sdk.projects.firebaseProjectsAddFirebase(req, new FirebaseProjectsAddFirebaseSecurity() {{
                option1 = new FirebaseProjectsAddFirebaseSecurityOption1("maiores", "molestiae") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## firebaseProjectsAddGoogleAnalytics

Links the specified FirebaseProject with an existing [Google Analytics account](http://www.google.com/analytics/). Using this call, you can either: - Specify an `analyticsAccountId` to provision a new Google Analytics property within the specified account and associate the new property with the `FirebaseProject`. - Specify an existing `analyticsPropertyId` to associate the property with the `FirebaseProject`. Note that when you call `AddGoogleAnalytics`: 1. The first check determines if any existing data streams in the Google Analytics property correspond to any existing Firebase Apps in the `FirebaseProject` (based on the `packageName` or `bundleId` associated with the data stream). Then, as applicable, the data streams and apps are linked. Note that this auto-linking only applies to `AndroidApps` and `IosApps`. 2. If no corresponding data streams are found for the Firebase Apps, new data streams are provisioned in the Google Analytics property for each of the Firebase Apps. Note that a new data stream is always provisioned for a Web App even if it was previously associated with a data stream in the Analytics property. Learn more about the hierarchy and structure of Google Analytics accounts in the [Analytics documentation](https://support.google.com/analytics/answer/9303323). The result of this call is an [`Operation`](../../v1beta1/operations). Poll the `Operation` to track the provisioning process by calling GetOperation until [`done`](../../v1beta1/operations#Operation.FIELDS.done) is `true`. When `done` is `true`, the `Operation` has either succeeded or failed. If the `Operation` succeeded, its [`response`](../../v1beta1/operations#Operation.FIELDS.response) is set to an AnalyticsDetails; if the `Operation` failed, its [`error`](../../v1beta1/operations#Operation.FIELDS.error) is set to a google.rpc.Status. To call `AddGoogleAnalytics`, a project member must be an Owner for the existing `FirebaseProject` and have the [`Edit` permission](https://support.google.com/analytics/answer/2884495) for the Google Analytics account. If the `FirebaseProject` already has Google Analytics enabled, and you call `AddGoogleAnalytics` using an `analyticsPropertyId` that's different from the currently associated property, then the call will fail. Analytics may have already been enabled in the Firebase console or by specifying `timeZone` and `regionCode` in the call to [`AddFirebase`](../../v1beta1/projects/addFirebase).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FirebaseProjectsAddGoogleAnalyticsRequest;
import org.openapis.openapi.models.operations.FirebaseProjectsAddGoogleAnalyticsResponse;
import org.openapis.openapi.models.operations.FirebaseProjectsAddGoogleAnalyticsSecurity;
import org.openapis.openapi.models.operations.FirebaseProjectsAddGoogleAnalyticsSecurityOption1;
import org.openapis.openapi.models.operations.FirebaseProjectsAddGoogleAnalyticsSecurityOption2;
import org.openapis.openapi.models.shared.AddGoogleAnalyticsRequest;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebaseProjectsAddGoogleAnalyticsRequest req = new FirebaseProjectsAddGoogleAnalyticsRequest("quod") {{
                dollarXgafv = XgafvEnum.TWO;
                addGoogleAnalyticsRequest = new AddGoogleAnalyticsRequest() {{
                    analyticsAccountId = "esse";
                    analyticsPropertyId = "totam";
                }};;
                accessToken = "porro";
                alt = AltEnum.PROTO;
                callback = "dicta";
                fields = "nam";
                key = "officia";
                oauthToken = "occaecati";
                prettyPrint = false;
                quotaUser = "fugit";
                uploadType = "deleniti";
                uploadProtocol = "hic";
            }};            

            FirebaseProjectsAddGoogleAnalyticsResponse res = sdk.projects.firebaseProjectsAddGoogleAnalytics(req, new FirebaseProjectsAddGoogleAnalyticsSecurity() {{
                option1 = new FirebaseProjectsAddGoogleAnalyticsSecurityOption1("optio", "totam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## firebaseProjectsAndroidAppsCreate

Requests the creation of a new AndroidApp in the specified FirebaseProject. The result of this call is an `Operation` which can be used to track the provisioning process. The `Operation` is automatically deleted after completion, so there is no need to call `DeleteOperation`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FirebaseProjectsAndroidAppsCreateRequest;
import org.openapis.openapi.models.operations.FirebaseProjectsAndroidAppsCreateResponse;
import org.openapis.openapi.models.operations.FirebaseProjectsAndroidAppsCreateSecurity;
import org.openapis.openapi.models.operations.FirebaseProjectsAndroidAppsCreateSecurityOption1;
import org.openapis.openapi.models.operations.FirebaseProjectsAndroidAppsCreateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AndroidAppInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebaseProjectsAndroidAppsCreateRequest req = new FirebaseProjectsAndroidAppsCreateRequest("beatae") {{
                dollarXgafv = XgafvEnum.ONE;
                androidAppInput = new AndroidAppInput() {{
                    apiKeyId = "molestiae";
                    displayName = "modi";
                    etag = "qui";
                    name = "Jonathon Klocko";
                    packageName = "aspernatur";
                    sha1Hashes = new String[]{{
                        add("ad"),
                    }};
                    sha256Hashes = new String[]{{
                        add("sed"),
                        add("iste"),
                        add("dolor"),
                    }};
                }};;
                accessToken = "natus";
                alt = AltEnum.MEDIA;
                callback = "hic";
                fields = "saepe";
                key = "fuga";
                oauthToken = "in";
                prettyPrint = false;
                quotaUser = "corporis";
                uploadType = "iste";
                uploadProtocol = "iure";
            }};            

            FirebaseProjectsAndroidAppsCreateResponse res = sdk.projects.firebaseProjectsAndroidAppsCreate(req, new FirebaseProjectsAndroidAppsCreateSecurity() {{
                option1 = new FirebaseProjectsAndroidAppsCreateSecurityOption1("saepe", "quidem") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## firebaseProjectsAndroidAppsList

Lists each AndroidApp associated with the specified FirebaseProject. The elements are returned in no particular order, but will be a consistent view of the Apps when additional requests are made with a `pageToken`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FirebaseProjectsAndroidAppsListRequest;
import org.openapis.openapi.models.operations.FirebaseProjectsAndroidAppsListResponse;
import org.openapis.openapi.models.operations.FirebaseProjectsAndroidAppsListSecurity;
import org.openapis.openapi.models.operations.FirebaseProjectsAndroidAppsListSecurityOption1;
import org.openapis.openapi.models.operations.FirebaseProjectsAndroidAppsListSecurityOption2;
import org.openapis.openapi.models.operations.FirebaseProjectsAndroidAppsListSecurityOption3;
import org.openapis.openapi.models.operations.FirebaseProjectsAndroidAppsListSecurityOption4;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebaseProjectsAndroidAppsListRequest req = new FirebaseProjectsAndroidAppsListRequest("architecto") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "reiciendis";
                alt = AltEnum.PROTO;
                callback = "mollitia";
                fields = "laborum";
                key = "dolores";
                oauthToken = "dolorem";
                pageSize = 358152L;
                pageToken = "explicabo";
                prettyPrint = false;
                quotaUser = "nobis";
                showDeleted = false;
                uploadType = "enim";
                uploadProtocol = "omnis";
            }};            

            FirebaseProjectsAndroidAppsListResponse res = sdk.projects.firebaseProjectsAndroidAppsList(req, new FirebaseProjectsAndroidAppsListSecurity() {{
                option1 = new FirebaseProjectsAndroidAppsListSecurityOption1("nemo", "minima") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listAndroidAppsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## firebaseProjectsAndroidAppsShaCreate

Adds a ShaCertificate to the specified AndroidApp.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FirebaseProjectsAndroidAppsShaCreateRequest;
import org.openapis.openapi.models.operations.FirebaseProjectsAndroidAppsShaCreateResponse;
import org.openapis.openapi.models.operations.FirebaseProjectsAndroidAppsShaCreateSecurity;
import org.openapis.openapi.models.operations.FirebaseProjectsAndroidAppsShaCreateSecurityOption1;
import org.openapis.openapi.models.operations.FirebaseProjectsAndroidAppsShaCreateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ShaCertificate;
import org.openapis.openapi.models.shared.ShaCertificateCertTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebaseProjectsAndroidAppsShaCreateRequest req = new FirebaseProjectsAndroidAppsShaCreateRequest("excepturi") {{
                dollarXgafv = XgafvEnum.ONE;
                shaCertificate = new ShaCertificate() {{
                    certType = ShaCertificateCertTypeEnum.SHA1;
                    name = "Miss Aubrey Williamson";
                    shaHash = "culpa";
                }};;
                accessToken = "consequuntur";
                alt = AltEnum.PROTO;
                callback = "mollitia";
                fields = "occaecati";
                key = "numquam";
                oauthToken = "commodi";
                prettyPrint = false;
                quotaUser = "quam";
                uploadType = "molestiae";
                uploadProtocol = "velit";
            }};            

            FirebaseProjectsAndroidAppsShaCreateResponse res = sdk.projects.firebaseProjectsAndroidAppsShaCreate(req, new FirebaseProjectsAndroidAppsShaCreateSecurity() {{
                option1 = new FirebaseProjectsAndroidAppsShaCreateSecurityOption1("error", "quia") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.shaCertificate != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## firebaseProjectsAndroidAppsShaDelete

Removes a ShaCertificate from the specified AndroidApp.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FirebaseProjectsAndroidAppsShaDeleteRequest;
import org.openapis.openapi.models.operations.FirebaseProjectsAndroidAppsShaDeleteResponse;
import org.openapis.openapi.models.operations.FirebaseProjectsAndroidAppsShaDeleteSecurity;
import org.openapis.openapi.models.operations.FirebaseProjectsAndroidAppsShaDeleteSecurityOption1;
import org.openapis.openapi.models.operations.FirebaseProjectsAndroidAppsShaDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebaseProjectsAndroidAppsShaDeleteRequest req = new FirebaseProjectsAndroidAppsShaDeleteRequest("quis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "laborum";
                alt = AltEnum.MEDIA;
                callback = "enim";
                fields = "odit";
                key = "quo";
                oauthToken = "sequi";
                prettyPrint = false;
                quotaUser = "tenetur";
                uploadType = "ipsam";
                uploadProtocol = "id";
            }};            

            FirebaseProjectsAndroidAppsShaDeleteResponse res = sdk.projects.firebaseProjectsAndroidAppsShaDelete(req, new FirebaseProjectsAndroidAppsShaDeleteSecurity() {{
                option1 = new FirebaseProjectsAndroidAppsShaDeleteSecurityOption1("possimus", "aut") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## firebaseProjectsAndroidAppsShaList

Lists the SHA-1 and SHA-256 certificates for the specified AndroidApp.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FirebaseProjectsAndroidAppsShaListRequest;
import org.openapis.openapi.models.operations.FirebaseProjectsAndroidAppsShaListResponse;
import org.openapis.openapi.models.operations.FirebaseProjectsAndroidAppsShaListSecurity;
import org.openapis.openapi.models.operations.FirebaseProjectsAndroidAppsShaListSecurityOption1;
import org.openapis.openapi.models.operations.FirebaseProjectsAndroidAppsShaListSecurityOption2;
import org.openapis.openapi.models.operations.FirebaseProjectsAndroidAppsShaListSecurityOption3;
import org.openapis.openapi.models.operations.FirebaseProjectsAndroidAppsShaListSecurityOption4;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebaseProjectsAndroidAppsShaListRequest req = new FirebaseProjectsAndroidAppsShaListRequest("quasi") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "temporibus";
                alt = AltEnum.PROTO;
                callback = "quasi";
                fields = "reiciendis";
                key = "voluptatibus";
                oauthToken = "vero";
                prettyPrint = false;
                quotaUser = "nihil";
                uploadType = "praesentium";
                uploadProtocol = "voluptatibus";
            }};            

            FirebaseProjectsAndroidAppsShaListResponse res = sdk.projects.firebaseProjectsAndroidAppsShaList(req, new FirebaseProjectsAndroidAppsShaListSecurity() {{
                option1 = new FirebaseProjectsAndroidAppsShaListSecurityOption1("ipsa", "omnis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listShaCertificatesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## firebaseProjectsAvailableLocationsList

Lists the valid Google Cloud Platform (GCP) resource locations for the specified Project (including a FirebaseProject). One of these locations can be selected as the Project's [_default_ GCP resource location](https://firebase.google.com/docs/projects/locations), which is the geographical location where the Project's resources, such as Cloud Firestore, will be provisioned by default. However, if the default GCP resource location has already been set for the Project, then this setting cannot be changed. This call checks for any possible [location restrictions](https://cloud.google.com/resource-manager/docs/organization-policy/defining-locations) for the specified Project and, thus, might return a subset of all possible GCP resource locations. To list all GCP resource locations (regardless of any restrictions), call the endpoint without specifying a unique project identifier (that is, `/v1beta1/{parent=projects/-}/listAvailableLocations`). To call `ListAvailableLocations` with a specified project, a member must be at minimum a Viewer of the Project. Calls without a specified project do not require any specific project permissions.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FirebaseProjectsAvailableLocationsListRequest;
import org.openapis.openapi.models.operations.FirebaseProjectsAvailableLocationsListResponse;
import org.openapis.openapi.models.operations.FirebaseProjectsAvailableLocationsListSecurity;
import org.openapis.openapi.models.operations.FirebaseProjectsAvailableLocationsListSecurityOption1;
import org.openapis.openapi.models.operations.FirebaseProjectsAvailableLocationsListSecurityOption2;
import org.openapis.openapi.models.operations.FirebaseProjectsAvailableLocationsListSecurityOption3;
import org.openapis.openapi.models.operations.FirebaseProjectsAvailableLocationsListSecurityOption4;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebaseProjectsAvailableLocationsListRequest req = new FirebaseProjectsAvailableLocationsListRequest("voluptate") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "perferendis";
                alt = AltEnum.JSON;
                callback = "reprehenderit";
                fields = "ut";
                key = "maiores";
                oauthToken = "dicta";
                pageSize = 359444L;
                pageToken = "dolore";
                prettyPrint = false;
                quotaUser = "iusto";
                uploadType = "dicta";
                uploadProtocol = "harum";
            }};            

            FirebaseProjectsAvailableLocationsListResponse res = sdk.projects.firebaseProjectsAvailableLocationsList(req, new FirebaseProjectsAvailableLocationsListSecurity() {{
                option1 = new FirebaseProjectsAvailableLocationsListSecurityOption1("enim", "accusamus") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listAvailableLocationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## firebaseProjectsDefaultLocationFinalize

Sets the default Google Cloud Platform (GCP) resource location for the specified FirebaseProject. This method creates an App Engine application with a [default Cloud Storage bucket](https://cloud.google.com/appengine/docs/standard/python/googlecloudstorageclient/setting-up-cloud-storage#activating_a_cloud_storage_bucket), located in the specified [`locationId`](#body.request_body.FIELDS.location_id). This location must be one of the available [GCP resource locations](https://firebase.google.com/docs/projects/locations). After the default GCP resource location is finalized, or if it was already set, it cannot be changed. The default GCP resource location for the specified `FirebaseProject` might already be set because either the underlying GCP `Project` already has an App Engine application or `FinalizeDefaultLocation` was previously called with a specified `locationId`. Any new calls to `FinalizeDefaultLocation` with a *different* specified `locationId` will return a 409 error. The result of this call is an [`Operation`](../../v1beta1/operations), which can be used to track the provisioning process. The [`response`](../../v1beta1/operations#Operation.FIELDS.response) type of the `Operation` is google.protobuf.Empty. The `Operation` can be polled by its `name` using GetOperation until `done` is true. When `done` is true, the `Operation` has either succeeded or failed. If the `Operation` has succeeded, its [`response`](../../v1beta1/operations#Operation.FIELDS.response) will be set to a google.protobuf.Empty; if the `Operation` has failed, its `error` will be set to a google.rpc.Status. The `Operation` is automatically deleted after completion, so there is no need to call DeleteOperation. All fields listed in the [request body](#request-body) are required. To call `FinalizeDefaultLocation`, a member must be an Owner of the Project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FirebaseProjectsDefaultLocationFinalizeRequest;
import org.openapis.openapi.models.operations.FirebaseProjectsDefaultLocationFinalizeResponse;
import org.openapis.openapi.models.operations.FirebaseProjectsDefaultLocationFinalizeSecurity;
import org.openapis.openapi.models.operations.FirebaseProjectsDefaultLocationFinalizeSecurityOption1;
import org.openapis.openapi.models.operations.FirebaseProjectsDefaultLocationFinalizeSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.FinalizeDefaultLocationRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebaseProjectsDefaultLocationFinalizeRequest req = new FirebaseProjectsDefaultLocationFinalizeRequest("commodi") {{
                dollarXgafv = XgafvEnum.TWO;
                finalizeDefaultLocationRequest = new FinalizeDefaultLocationRequest() {{
                    locationId = "quae";
                }};;
                accessToken = "ipsum";
                alt = AltEnum.PROTO;
                callback = "molestias";
                fields = "excepturi";
                key = "pariatur";
                oauthToken = "modi";
                prettyPrint = false;
                quotaUser = "praesentium";
                uploadType = "rem";
                uploadProtocol = "voluptates";
            }};            

            FirebaseProjectsDefaultLocationFinalizeResponse res = sdk.projects.firebaseProjectsDefaultLocationFinalize(req, new FirebaseProjectsDefaultLocationFinalizeSecurity() {{
                option1 = new FirebaseProjectsDefaultLocationFinalizeSecurityOption1("quasi", "repudiandae") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## firebaseProjectsIosAppsCreate

Requests the creation of a new IosApp in the specified FirebaseProject. The result of this call is an `Operation` which can be used to track the provisioning process. The `Operation` is automatically deleted after completion, so there is no need to call `DeleteOperation`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FirebaseProjectsIosAppsCreateRequest;
import org.openapis.openapi.models.operations.FirebaseProjectsIosAppsCreateResponse;
import org.openapis.openapi.models.operations.FirebaseProjectsIosAppsCreateSecurity;
import org.openapis.openapi.models.operations.FirebaseProjectsIosAppsCreateSecurityOption1;
import org.openapis.openapi.models.operations.FirebaseProjectsIosAppsCreateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.IosAppInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebaseProjectsIosAppsCreateRequest req = new FirebaseProjectsIosAppsCreateRequest("sint") {{
                dollarXgafv = XgafvEnum.ONE;
                iosAppInput = new IosAppInput() {{
                    apiKeyId = "itaque";
                    appStoreId = "incidunt";
                    bundleId = "enim";
                    displayName = "consequatur";
                    etag = "est";
                    name = "Benjamin O'Connell";
                    teamId = "labore";
                }};;
                accessToken = "modi";
                alt = AltEnum.JSON;
                callback = "aliquid";
                fields = "cupiditate";
                key = "quos";
                oauthToken = "perferendis";
                prettyPrint = false;
                quotaUser = "magni";
                uploadType = "assumenda";
                uploadProtocol = "ipsam";
            }};            

            FirebaseProjectsIosAppsCreateResponse res = sdk.projects.firebaseProjectsIosAppsCreate(req, new FirebaseProjectsIosAppsCreateSecurity() {{
                option1 = new FirebaseProjectsIosAppsCreateSecurityOption1("alias", "fugit") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## firebaseProjectsIosAppsList

Lists each IosApp associated with the specified FirebaseProject. The elements are returned in no particular order, but will be a consistent view of the Apps when additional requests are made with a `pageToken`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FirebaseProjectsIosAppsListRequest;
import org.openapis.openapi.models.operations.FirebaseProjectsIosAppsListResponse;
import org.openapis.openapi.models.operations.FirebaseProjectsIosAppsListSecurity;
import org.openapis.openapi.models.operations.FirebaseProjectsIosAppsListSecurityOption1;
import org.openapis.openapi.models.operations.FirebaseProjectsIosAppsListSecurityOption2;
import org.openapis.openapi.models.operations.FirebaseProjectsIosAppsListSecurityOption3;
import org.openapis.openapi.models.operations.FirebaseProjectsIosAppsListSecurityOption4;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebaseProjectsIosAppsListRequest req = new FirebaseProjectsIosAppsListRequest("dolorum") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "tempora";
                alt = AltEnum.PROTO;
                callback = "tempore";
                fields = "labore";
                key = "delectus";
                oauthToken = "eum";
                pageSize = 248753L;
                pageToken = "eligendi";
                prettyPrint = false;
                quotaUser = "sint";
                showDeleted = false;
                uploadType = "aliquid";
                uploadProtocol = "provident";
            }};            

            FirebaseProjectsIosAppsListResponse res = sdk.projects.firebaseProjectsIosAppsList(req, new FirebaseProjectsIosAppsListSecurity() {{
                option1 = new FirebaseProjectsIosAppsListSecurityOption1("necessitatibus", "sint") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listIosAppsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## firebaseProjectsList

Lists each FirebaseProject accessible to the caller. The elements are returned in no particular order, but they will be a consistent view of the Projects when additional requests are made with a `pageToken`. This method is eventually consistent with Project mutations, which means newly provisioned Projects and recent modifications to existing Projects might not be reflected in the set of Projects. The list will include only ACTIVE Projects. Use GetFirebaseProject for consistent reads as well as for additional Project details.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FirebaseProjectsListRequest;
import org.openapis.openapi.models.operations.FirebaseProjectsListResponse;
import org.openapis.openapi.models.operations.FirebaseProjectsListSecurity;
import org.openapis.openapi.models.operations.FirebaseProjectsListSecurityOption1;
import org.openapis.openapi.models.operations.FirebaseProjectsListSecurityOption2;
import org.openapis.openapi.models.operations.FirebaseProjectsListSecurityOption3;
import org.openapis.openapi.models.operations.FirebaseProjectsListSecurityOption4;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebaseProjectsListRequest req = new FirebaseProjectsListRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "dolor";
                alt = AltEnum.PROTO;
                callback = "a";
                fields = "dolorum";
                key = "in";
                oauthToken = "in";
                pageSize = 846409L;
                pageToken = "maiores";
                prettyPrint = false;
                quotaUser = "rerum";
                showDeleted = false;
                uploadType = "dicta";
                uploadProtocol = "magnam";
            }};            

            FirebaseProjectsListResponse res = sdk.projects.firebaseProjectsList(req, new FirebaseProjectsListSecurity() {{
                option1 = new FirebaseProjectsListSecurityOption1("cumque", "facere") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listFirebaseProjectsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## firebaseProjectsRemoveAnalytics

Unlinks the specified FirebaseProject from its Google Analytics account. This call removes the association of the specified `FirebaseProject` with its current Google Analytics property. However, this call does not delete the Google Analytics resources, such as the Google Analytics property or any data streams. These resources may be re-associated later to the `FirebaseProject` by calling [`AddGoogleAnalytics`](../../v1beta1/projects/addGoogleAnalytics) and specifying the same `analyticsPropertyId`. For Android Apps and iOS Apps, this call re-links data streams with their corresponding apps. However, for Web Apps, this call provisions a *new* data stream for each Web App. To call `RemoveAnalytics`, a project member must be an Owner for the `FirebaseProject`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FirebaseProjectsRemoveAnalyticsRequest;
import org.openapis.openapi.models.operations.FirebaseProjectsRemoveAnalyticsResponse;
import org.openapis.openapi.models.operations.FirebaseProjectsRemoveAnalyticsSecurity;
import org.openapis.openapi.models.operations.FirebaseProjectsRemoveAnalyticsSecurityOption1;
import org.openapis.openapi.models.operations.FirebaseProjectsRemoveAnalyticsSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.RemoveAnalyticsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebaseProjectsRemoveAnalyticsRequest req = new FirebaseProjectsRemoveAnalyticsRequest("ea") {{
                dollarXgafv = XgafvEnum.ONE;
                removeAnalyticsRequest = new RemoveAnalyticsRequest() {{
                    analyticsPropertyId = "laborum";
                }};;
                accessToken = "accusamus";
                alt = AltEnum.JSON;
                callback = "occaecati";
                fields = "enim";
                key = "accusamus";
                oauthToken = "delectus";
                prettyPrint = false;
                quotaUser = "quidem";
                uploadType = "provident";
                uploadProtocol = "nam";
            }};            

            FirebaseProjectsRemoveAnalyticsResponse res = sdk.projects.firebaseProjectsRemoveAnalytics(req, new FirebaseProjectsRemoveAnalyticsSecurity() {{
                option1 = new FirebaseProjectsRemoveAnalyticsSecurityOption1("id", "blanditiis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## firebaseProjectsSearchApps

Lists all available Apps for the specified FirebaseProject. This is a convenience method. Typically, interaction with an App should be done using the platform-specific service, but some tool use-cases require a summary of all known Apps (such as for App selector interfaces).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FirebaseProjectsSearchAppsRequest;
import org.openapis.openapi.models.operations.FirebaseProjectsSearchAppsResponse;
import org.openapis.openapi.models.operations.FirebaseProjectsSearchAppsSecurity;
import org.openapis.openapi.models.operations.FirebaseProjectsSearchAppsSecurityOption1;
import org.openapis.openapi.models.operations.FirebaseProjectsSearchAppsSecurityOption2;
import org.openapis.openapi.models.operations.FirebaseProjectsSearchAppsSecurityOption3;
import org.openapis.openapi.models.operations.FirebaseProjectsSearchAppsSecurityOption4;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebaseProjectsSearchAppsRequest req = new FirebaseProjectsSearchAppsRequest("deleniti") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "amet";
                alt = AltEnum.MEDIA;
                callback = "nisi";
                fields = "vel";
                filter = "natus";
                key = "omnis";
                oauthToken = "molestiae";
                pageSize = 19193L;
                pageToken = "nihil";
                prettyPrint = false;
                quotaUser = "magnam";
                showDeleted = false;
                uploadType = "distinctio";
                uploadProtocol = "id";
            }};            

            FirebaseProjectsSearchAppsResponse res = sdk.projects.firebaseProjectsSearchApps(req, new FirebaseProjectsSearchAppsSecurity() {{
                option1 = new FirebaseProjectsSearchAppsSecurityOption1("labore", "labore") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.searchFirebaseAppsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## firebaseProjectsWebAppsCreate

Requests the creation of a new WebApp in the specified FirebaseProject. The result of this call is an `Operation` which can be used to track the provisioning process. The `Operation` is automatically deleted after completion, so there is no need to call `DeleteOperation`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FirebaseProjectsWebAppsCreateRequest;
import org.openapis.openapi.models.operations.FirebaseProjectsWebAppsCreateResponse;
import org.openapis.openapi.models.operations.FirebaseProjectsWebAppsCreateSecurity;
import org.openapis.openapi.models.operations.FirebaseProjectsWebAppsCreateSecurityOption1;
import org.openapis.openapi.models.operations.FirebaseProjectsWebAppsCreateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.WebAppInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebaseProjectsWebAppsCreateRequest req = new FirebaseProjectsWebAppsCreateRequest("suscipit") {{
                dollarXgafv = XgafvEnum.TWO;
                webAppInput = new WebAppInput() {{
                    apiKeyId = "nobis";
                    appUrls = new String[]{{
                        add("vero"),
                        add("aspernatur"),
                    }};
                    displayName = "architecto";
                    etag = "magnam";
                    name = "Miriam Hermann";
                }};;
                accessToken = "sint";
                alt = AltEnum.JSON;
                callback = "mollitia";
                fields = "reiciendis";
                key = "mollitia";
                oauthToken = "ad";
                prettyPrint = false;
                quotaUser = "eum";
                uploadType = "dolor";
                uploadProtocol = "necessitatibus";
            }};            

            FirebaseProjectsWebAppsCreateResponse res = sdk.projects.firebaseProjectsWebAppsCreate(req, new FirebaseProjectsWebAppsCreateSecurity() {{
                option1 = new FirebaseProjectsWebAppsCreateSecurityOption1("odit", "nemo") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## firebaseProjectsWebAppsGetConfig

Gets the configuration artifact associated with the specified WebApp.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FirebaseProjectsWebAppsGetConfigRequest;
import org.openapis.openapi.models.operations.FirebaseProjectsWebAppsGetConfigResponse;
import org.openapis.openapi.models.operations.FirebaseProjectsWebAppsGetConfigSecurity;
import org.openapis.openapi.models.operations.FirebaseProjectsWebAppsGetConfigSecurityOption1;
import org.openapis.openapi.models.operations.FirebaseProjectsWebAppsGetConfigSecurityOption2;
import org.openapis.openapi.models.operations.FirebaseProjectsWebAppsGetConfigSecurityOption3;
import org.openapis.openapi.models.operations.FirebaseProjectsWebAppsGetConfigSecurityOption4;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebaseProjectsWebAppsGetConfigRequest req = new FirebaseProjectsWebAppsGetConfigRequest("quasi") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "doloribus";
                alt = AltEnum.PROTO;
                callback = "eius";
                fields = "maxime";
                key = "deleniti";
                oauthToken = "facilis";
                prettyPrint = false;
                quotaUser = "in";
                uploadType = "architecto";
                uploadProtocol = "architecto";
            }};            

            FirebaseProjectsWebAppsGetConfigResponse res = sdk.projects.firebaseProjectsWebAppsGetConfig(req, new FirebaseProjectsWebAppsGetConfigSecurity() {{
                option1 = new FirebaseProjectsWebAppsGetConfigSecurityOption1("repudiandae", "ullam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.webAppConfig != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## firebaseProjectsWebAppsList

Lists each WebApp associated with the specified FirebaseProject. The elements are returned in no particular order, but will be a consistent view of the Apps when additional requests are made with a `pageToken`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FirebaseProjectsWebAppsListRequest;
import org.openapis.openapi.models.operations.FirebaseProjectsWebAppsListResponse;
import org.openapis.openapi.models.operations.FirebaseProjectsWebAppsListSecurity;
import org.openapis.openapi.models.operations.FirebaseProjectsWebAppsListSecurityOption1;
import org.openapis.openapi.models.operations.FirebaseProjectsWebAppsListSecurityOption2;
import org.openapis.openapi.models.operations.FirebaseProjectsWebAppsListSecurityOption3;
import org.openapis.openapi.models.operations.FirebaseProjectsWebAppsListSecurityOption4;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebaseProjectsWebAppsListRequest req = new FirebaseProjectsWebAppsListRequest("expedita") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "repellat";
                alt = AltEnum.PROTO;
                callback = "sed";
                fields = "saepe";
                key = "pariatur";
                oauthToken = "accusantium";
                pageSize = 162493L;
                pageToken = "praesentium";
                prettyPrint = false;
                quotaUser = "natus";
                showDeleted = false;
                uploadType = "magni";
                uploadProtocol = "sunt";
            }};            

            FirebaseProjectsWebAppsListResponse res = sdk.projects.firebaseProjectsWebAppsList(req, new FirebaseProjectsWebAppsListSecurity() {{
                option1 = new FirebaseProjectsWebAppsListSecurityOption1("quo", "illum") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listWebAppsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## firebaseProjectsWebAppsPatch

Updates the attributes of the specified WebApp.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FirebaseProjectsWebAppsPatchRequest;
import org.openapis.openapi.models.operations.FirebaseProjectsWebAppsPatchResponse;
import org.openapis.openapi.models.operations.FirebaseProjectsWebAppsPatchSecurity;
import org.openapis.openapi.models.operations.FirebaseProjectsWebAppsPatchSecurityOption1;
import org.openapis.openapi.models.operations.FirebaseProjectsWebAppsPatchSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.WebAppInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebaseProjectsWebAppsPatchRequest req = new FirebaseProjectsWebAppsPatchRequest("pariatur") {{
                dollarXgafv = XgafvEnum.TWO;
                webAppInput = new WebAppInput() {{
                    apiKeyId = "ea";
                    appUrls = new String[]{{
                        add("odit"),
                        add("ea"),
                        add("accusantium"),
                    }};
                    displayName = "ab";
                    etag = "maiores";
                    name = "Clyde Kling";
                }};;
                accessToken = "eaque";
                alt = AltEnum.PROTO;
                callback = "nemo";
                fields = "voluptatibus";
                key = "perferendis";
                oauthToken = "fugiat";
                prettyPrint = false;
                quotaUser = "amet";
                updateMask = "aut";
                uploadType = "cumque";
                uploadProtocol = "corporis";
            }};            

            FirebaseProjectsWebAppsPatchResponse res = sdk.projects.firebaseProjectsWebAppsPatch(req, new FirebaseProjectsWebAppsPatchSecurity() {{
                option1 = new FirebaseProjectsWebAppsPatchSecurityOption1("hic", "libero") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.webApp != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## firebaseProjectsWebAppsRemove

Removes the specified WebApp from the FirebaseProject.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FirebaseProjectsWebAppsRemoveRequest;
import org.openapis.openapi.models.operations.FirebaseProjectsWebAppsRemoveResponse;
import org.openapis.openapi.models.operations.FirebaseProjectsWebAppsRemoveSecurity;
import org.openapis.openapi.models.operations.FirebaseProjectsWebAppsRemoveSecurityOption1;
import org.openapis.openapi.models.operations.FirebaseProjectsWebAppsRemoveSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.RemoveWebAppRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebaseProjectsWebAppsRemoveRequest req = new FirebaseProjectsWebAppsRemoveRequest("nobis") {{
                dollarXgafv = XgafvEnum.ONE;
                removeWebAppRequest = new RemoveWebAppRequest() {{
                    allowMissing = false;
                    etag = "quis";
                    immediate = false;
                    validateOnly = false;
                }};;
                accessToken = "totam";
                alt = AltEnum.MEDIA;
                callback = "eaque";
                fields = "quis";
                key = "nesciunt";
                oauthToken = "eos";
                prettyPrint = false;
                quotaUser = "perferendis";
                uploadType = "dolores";
                uploadProtocol = "minus";
            }};            

            FirebaseProjectsWebAppsRemoveResponse res = sdk.projects.firebaseProjectsWebAppsRemove(req, new FirebaseProjectsWebAppsRemoveSecurity() {{
                option1 = new FirebaseProjectsWebAppsRemoveSecurityOption1("quam", "dolor") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## firebaseProjectsWebAppsUndelete

Restores the specified WebApp to the FirebaseProject.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FirebaseProjectsWebAppsUndeleteRequest;
import org.openapis.openapi.models.operations.FirebaseProjectsWebAppsUndeleteResponse;
import org.openapis.openapi.models.operations.FirebaseProjectsWebAppsUndeleteSecurity;
import org.openapis.openapi.models.operations.FirebaseProjectsWebAppsUndeleteSecurityOption1;
import org.openapis.openapi.models.operations.FirebaseProjectsWebAppsUndeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.UndeleteWebAppRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebaseProjectsWebAppsUndeleteRequest req = new FirebaseProjectsWebAppsUndeleteRequest("vero") {{
                dollarXgafv = XgafvEnum.ONE;
                undeleteWebAppRequest = new UndeleteWebAppRequest() {{
                    etag = "hic";
                    validateOnly = false;
                }};;
                accessToken = "recusandae";
                alt = AltEnum.MEDIA;
                callback = "facilis";
                fields = "perspiciatis";
                key = "voluptatem";
                oauthToken = "porro";
                prettyPrint = false;
                quotaUser = "consequuntur";
                uploadType = "blanditiis";
                uploadProtocol = "error";
            }};            

            FirebaseProjectsWebAppsUndeleteResponse res = sdk.projects.firebaseProjectsWebAppsUndelete(req, new FirebaseProjectsWebAppsUndeleteSecurity() {{
                option1 = new FirebaseProjectsWebAppsUndeleteSecurityOption1("eaque", "occaecati") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
