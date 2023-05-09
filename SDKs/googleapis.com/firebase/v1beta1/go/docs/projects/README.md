# Projects

### Available Operations

* [FirebaseProjectsAddFirebase](#firebaseprojectsaddfirebase) - Adds Firebase resources to the specified existing [Google Cloud Platform (GCP) `Project`] (https://cloud.google.com/resource-manager/reference/rest/v1/projects). Since a FirebaseProject is actually also a GCP `Project`, a `FirebaseProject` has the same underlying GCP identifiers (`projectNumber` and `projectId`). This allows for easy interop with Google APIs. The result of this call is an [`Operation`](../../v1beta1/operations). Poll the `Operation` to track the provisioning process by calling GetOperation until [`done`](../../v1beta1/operations#Operation.FIELDS.done) is `true`. When `done` is `true`, the `Operation` has either succeeded or failed. If the `Operation` succeeded, its [`response`](../../v1beta1/operations#Operation.FIELDS.response) is set to a FirebaseProject; if the `Operation` failed, its [`error`](../../v1beta1/operations#Operation.FIELDS.error) is set to a google.rpc.Status. The `Operation` is automatically deleted after completion, so there is no need to call DeleteOperation. This method does not modify any billing account information on the underlying GCP `Project`. To call `AddFirebase`, a project member or service account must have the following permissions (the IAM roles of Editor and Owner contain these permissions): `firebase.projects.update`, `resourcemanager.projects.get`, `serviceusage.services.enable`, and `serviceusage.services.get`.
* [FirebaseProjectsAddGoogleAnalytics](#firebaseprojectsaddgoogleanalytics) - Links the specified FirebaseProject with an existing [Google Analytics account](http://www.google.com/analytics/). Using this call, you can either: - Specify an `analyticsAccountId` to provision a new Google Analytics property within the specified account and associate the new property with the `FirebaseProject`. - Specify an existing `analyticsPropertyId` to associate the property with the `FirebaseProject`. Note that when you call `AddGoogleAnalytics`: 1. The first check determines if any existing data streams in the Google Analytics property correspond to any existing Firebase Apps in the `FirebaseProject` (based on the `packageName` or `bundleId` associated with the data stream). Then, as applicable, the data streams and apps are linked. Note that this auto-linking only applies to `AndroidApps` and `IosApps`. 2. If no corresponding data streams are found for the Firebase Apps, new data streams are provisioned in the Google Analytics property for each of the Firebase Apps. Note that a new data stream is always provisioned for a Web App even if it was previously associated with a data stream in the Analytics property. Learn more about the hierarchy and structure of Google Analytics accounts in the [Analytics documentation](https://support.google.com/analytics/answer/9303323). The result of this call is an [`Operation`](../../v1beta1/operations). Poll the `Operation` to track the provisioning process by calling GetOperation until [`done`](../../v1beta1/operations#Operation.FIELDS.done) is `true`. When `done` is `true`, the `Operation` has either succeeded or failed. If the `Operation` succeeded, its [`response`](../../v1beta1/operations#Operation.FIELDS.response) is set to an AnalyticsDetails; if the `Operation` failed, its [`error`](../../v1beta1/operations#Operation.FIELDS.error) is set to a google.rpc.Status. To call `AddGoogleAnalytics`, a project member must be an Owner for the existing `FirebaseProject` and have the [`Edit` permission](https://support.google.com/analytics/answer/2884495) for the Google Analytics account. If the `FirebaseProject` already has Google Analytics enabled, and you call `AddGoogleAnalytics` using an `analyticsPropertyId` that's different from the currently associated property, then the call will fail. Analytics may have already been enabled in the Firebase console or by specifying `timeZone` and `regionCode` in the call to [`AddFirebase`](../../v1beta1/projects/addFirebase).
* [FirebaseProjectsAndroidAppsCreate](#firebaseprojectsandroidappscreate) - Requests the creation of a new AndroidApp in the specified FirebaseProject. The result of this call is an `Operation` which can be used to track the provisioning process. The `Operation` is automatically deleted after completion, so there is no need to call `DeleteOperation`.
* [FirebaseProjectsAndroidAppsList](#firebaseprojectsandroidappslist) - Lists each AndroidApp associated with the specified FirebaseProject. The elements are returned in no particular order, but will be a consistent view of the Apps when additional requests are made with a `pageToken`.
* [FirebaseProjectsAndroidAppsShaCreate](#firebaseprojectsandroidappsshacreate) - Adds a ShaCertificate to the specified AndroidApp.
* [FirebaseProjectsAndroidAppsShaDelete](#firebaseprojectsandroidappsshadelete) - Removes a ShaCertificate from the specified AndroidApp.
* [FirebaseProjectsAndroidAppsShaList](#firebaseprojectsandroidappsshalist) - Lists the SHA-1 and SHA-256 certificates for the specified AndroidApp.
* [FirebaseProjectsAvailableLocationsList](#firebaseprojectsavailablelocationslist) - Lists the valid Google Cloud Platform (GCP) resource locations for the specified Project (including a FirebaseProject). One of these locations can be selected as the Project's [_default_ GCP resource location](https://firebase.google.com/docs/projects/locations), which is the geographical location where the Project's resources, such as Cloud Firestore, will be provisioned by default. However, if the default GCP resource location has already been set for the Project, then this setting cannot be changed. This call checks for any possible [location restrictions](https://cloud.google.com/resource-manager/docs/organization-policy/defining-locations) for the specified Project and, thus, might return a subset of all possible GCP resource locations. To list all GCP resource locations (regardless of any restrictions), call the endpoint without specifying a unique project identifier (that is, `/v1beta1/{parent=projects/-}/listAvailableLocations`). To call `ListAvailableLocations` with a specified project, a member must be at minimum a Viewer of the Project. Calls without a specified project do not require any specific project permissions.
* [FirebaseProjectsDefaultLocationFinalize](#firebaseprojectsdefaultlocationfinalize) - Sets the default Google Cloud Platform (GCP) resource location for the specified FirebaseProject. This method creates an App Engine application with a [default Cloud Storage bucket](https://cloud.google.com/appengine/docs/standard/python/googlecloudstorageclient/setting-up-cloud-storage#activating_a_cloud_storage_bucket), located in the specified [`locationId`](#body.request_body.FIELDS.location_id). This location must be one of the available [GCP resource locations](https://firebase.google.com/docs/projects/locations). After the default GCP resource location is finalized, or if it was already set, it cannot be changed. The default GCP resource location for the specified `FirebaseProject` might already be set because either the underlying GCP `Project` already has an App Engine application or `FinalizeDefaultLocation` was previously called with a specified `locationId`. Any new calls to `FinalizeDefaultLocation` with a *different* specified `locationId` will return a 409 error. The result of this call is an [`Operation`](../../v1beta1/operations), which can be used to track the provisioning process. The [`response`](../../v1beta1/operations#Operation.FIELDS.response) type of the `Operation` is google.protobuf.Empty. The `Operation` can be polled by its `name` using GetOperation until `done` is true. When `done` is true, the `Operation` has either succeeded or failed. If the `Operation` has succeeded, its [`response`](../../v1beta1/operations#Operation.FIELDS.response) will be set to a google.protobuf.Empty; if the `Operation` has failed, its `error` will be set to a google.rpc.Status. The `Operation` is automatically deleted after completion, so there is no need to call DeleteOperation. All fields listed in the [request body](#request-body) are required. To call `FinalizeDefaultLocation`, a member must be an Owner of the Project.
* [FirebaseProjectsIosAppsCreate](#firebaseprojectsiosappscreate) - Requests the creation of a new IosApp in the specified FirebaseProject. The result of this call is an `Operation` which can be used to track the provisioning process. The `Operation` is automatically deleted after completion, so there is no need to call `DeleteOperation`.
* [FirebaseProjectsIosAppsList](#firebaseprojectsiosappslist) - Lists each IosApp associated with the specified FirebaseProject. The elements are returned in no particular order, but will be a consistent view of the Apps when additional requests are made with a `pageToken`.
* [FirebaseProjectsList](#firebaseprojectslist) - Lists each FirebaseProject accessible to the caller. The elements are returned in no particular order, but they will be a consistent view of the Projects when additional requests are made with a `pageToken`. This method is eventually consistent with Project mutations, which means newly provisioned Projects and recent modifications to existing Projects might not be reflected in the set of Projects. The list will include only ACTIVE Projects. Use GetFirebaseProject for consistent reads as well as for additional Project details.
* [FirebaseProjectsRemoveAnalytics](#firebaseprojectsremoveanalytics) - Unlinks the specified FirebaseProject from its Google Analytics account. This call removes the association of the specified `FirebaseProject` with its current Google Analytics property. However, this call does not delete the Google Analytics resources, such as the Google Analytics property or any data streams. These resources may be re-associated later to the `FirebaseProject` by calling [`AddGoogleAnalytics`](../../v1beta1/projects/addGoogleAnalytics) and specifying the same `analyticsPropertyId`. For Android Apps and iOS Apps, this call re-links data streams with their corresponding apps. However, for Web Apps, this call provisions a *new* data stream for each Web App. To call `RemoveAnalytics`, a project member must be an Owner for the `FirebaseProject`.
* [FirebaseProjectsSearchApps](#firebaseprojectssearchapps) - Lists all available Apps for the specified FirebaseProject. This is a convenience method. Typically, interaction with an App should be done using the platform-specific service, but some tool use-cases require a summary of all known Apps (such as for App selector interfaces).
* [FirebaseProjectsWebAppsCreate](#firebaseprojectswebappscreate) - Requests the creation of a new WebApp in the specified FirebaseProject. The result of this call is an `Operation` which can be used to track the provisioning process. The `Operation` is automatically deleted after completion, so there is no need to call `DeleteOperation`.
* [FirebaseProjectsWebAppsGetConfig](#firebaseprojectswebappsgetconfig) - Gets the configuration artifact associated with the specified WebApp.
* [FirebaseProjectsWebAppsList](#firebaseprojectswebappslist) - Lists each WebApp associated with the specified FirebaseProject. The elements are returned in no particular order, but will be a consistent view of the Apps when additional requests are made with a `pageToken`.
* [FirebaseProjectsWebAppsPatch](#firebaseprojectswebappspatch) - Updates the attributes of the specified WebApp.
* [FirebaseProjectsWebAppsRemove](#firebaseprojectswebappsremove) - Removes the specified WebApp from the FirebaseProject.
* [FirebaseProjectsWebAppsUndelete](#firebaseprojectswebappsundelete) - Restores the specified WebApp to the FirebaseProject.

## FirebaseProjectsAddFirebase

Adds Firebase resources to the specified existing [Google Cloud Platform (GCP) `Project`] (https://cloud.google.com/resource-manager/reference/rest/v1/projects). Since a FirebaseProject is actually also a GCP `Project`, a `FirebaseProject` has the same underlying GCP identifiers (`projectNumber` and `projectId`). This allows for easy interop with Google APIs. The result of this call is an [`Operation`](../../v1beta1/operations). Poll the `Operation` to track the provisioning process by calling GetOperation until [`done`](../../v1beta1/operations#Operation.FIELDS.done) is `true`. When `done` is `true`, the `Operation` has either succeeded or failed. If the `Operation` succeeded, its [`response`](../../v1beta1/operations#Operation.FIELDS.response) is set to a FirebaseProject; if the `Operation` failed, its [`error`](../../v1beta1/operations#Operation.FIELDS.error) is set to a google.rpc.Status. The `Operation` is automatically deleted after completion, so there is no need to call DeleteOperation. This method does not modify any billing account information on the underlying GCP `Project`. To call `AddFirebase`, a project member or service account must have the following permissions (the IAM roles of Editor and Owner contain these permissions): `firebase.projects.update`, `resourcemanager.projects.get`, `serviceusage.services.enable`, and `serviceusage.services.get`.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.FirebaseProjectsAddFirebase(ctx, operations.FirebaseProjectsAddFirebaseRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AddFirebaseRequest: &shared.AddFirebaseRequest{
            LocationID: sdk.String("nisi"),
        },
        AccessToken: sdk.String("recusandae"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("ab"),
        Fields: sdk.String("quis"),
        Key: sdk.String("veritatis"),
        OauthToken: sdk.String("deserunt"),
        PrettyPrint: sdk.Bool(false),
        Project: "perferendis",
        QuotaUser: sdk.String("ipsam"),
        UploadType: sdk.String("repellendus"),
        UploadProtocol: sdk.String("sapiente"),
    }, operations.FirebaseProjectsAddFirebaseSecurity{
        Option1: &operations.FirebaseProjectsAddFirebaseSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## FirebaseProjectsAddGoogleAnalytics

Links the specified FirebaseProject with an existing [Google Analytics account](http://www.google.com/analytics/). Using this call, you can either: - Specify an `analyticsAccountId` to provision a new Google Analytics property within the specified account and associate the new property with the `FirebaseProject`. - Specify an existing `analyticsPropertyId` to associate the property with the `FirebaseProject`. Note that when you call `AddGoogleAnalytics`: 1. The first check determines if any existing data streams in the Google Analytics property correspond to any existing Firebase Apps in the `FirebaseProject` (based on the `packageName` or `bundleId` associated with the data stream). Then, as applicable, the data streams and apps are linked. Note that this auto-linking only applies to `AndroidApps` and `IosApps`. 2. If no corresponding data streams are found for the Firebase Apps, new data streams are provisioned in the Google Analytics property for each of the Firebase Apps. Note that a new data stream is always provisioned for a Web App even if it was previously associated with a data stream in the Analytics property. Learn more about the hierarchy and structure of Google Analytics accounts in the [Analytics documentation](https://support.google.com/analytics/answer/9303323). The result of this call is an [`Operation`](../../v1beta1/operations). Poll the `Operation` to track the provisioning process by calling GetOperation until [`done`](../../v1beta1/operations#Operation.FIELDS.done) is `true`. When `done` is `true`, the `Operation` has either succeeded or failed. If the `Operation` succeeded, its [`response`](../../v1beta1/operations#Operation.FIELDS.response) is set to an AnalyticsDetails; if the `Operation` failed, its [`error`](../../v1beta1/operations#Operation.FIELDS.error) is set to a google.rpc.Status. To call `AddGoogleAnalytics`, a project member must be an Owner for the existing `FirebaseProject` and have the [`Edit` permission](https://support.google.com/analytics/answer/2884495) for the Google Analytics account. If the `FirebaseProject` already has Google Analytics enabled, and you call `AddGoogleAnalytics` using an `analyticsPropertyId` that's different from the currently associated property, then the call will fail. Analytics may have already been enabled in the Firebase console or by specifying `timeZone` and `regionCode` in the call to [`AddFirebase`](../../v1beta1/projects/addFirebase).

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.FirebaseProjectsAddGoogleAnalytics(ctx, operations.FirebaseProjectsAddGoogleAnalyticsRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AddGoogleAnalyticsRequest: &shared.AddGoogleAnalyticsRequest{
            AnalyticsAccountID: sdk.String("odit"),
            AnalyticsPropertyID: sdk.String("at"),
        },
        AccessToken: sdk.String("at"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("molestiae"),
        Fields: sdk.String("quod"),
        Key: sdk.String("quod"),
        OauthToken: sdk.String("esse"),
        Parent: "totam",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("porro"),
        UploadType: sdk.String("dolorum"),
        UploadProtocol: sdk.String("dicta"),
    }, operations.FirebaseProjectsAddGoogleAnalyticsSecurity{
        Option1: &operations.FirebaseProjectsAddGoogleAnalyticsSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## FirebaseProjectsAndroidAppsCreate

Requests the creation of a new AndroidApp in the specified FirebaseProject. The result of this call is an `Operation` which can be used to track the provisioning process. The `Operation` is automatically deleted after completion, so there is no need to call `DeleteOperation`.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.FirebaseProjectsAndroidAppsCreate(ctx, operations.FirebaseProjectsAndroidAppsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AndroidAppInput: &shared.AndroidAppInput{
            APIKeyID: sdk.String("officia"),
            DisplayName: sdk.String("occaecati"),
            Etag: sdk.String("fugit"),
            Name: sdk.String("Irvin Rosenbaum III"),
            PackageName: sdk.String("molestiae"),
            Sha1Hashes: []string{
                "qui",
                "impedit",
            },
            Sha256Hashes: []string{
                "esse",
                "ipsum",
                "excepturi",
            },
        },
        AccessToken: sdk.String("aspernatur"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("ad"),
        Fields: sdk.String("natus"),
        Key: sdk.String("sed"),
        OauthToken: sdk.String("iste"),
        Parent: "dolor",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("natus"),
        UploadType: sdk.String("laboriosam"),
        UploadProtocol: sdk.String("hic"),
    }, operations.FirebaseProjectsAndroidAppsCreateSecurity{
        Option1: &operations.FirebaseProjectsAndroidAppsCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## FirebaseProjectsAndroidAppsList

Lists each AndroidApp associated with the specified FirebaseProject. The elements are returned in no particular order, but will be a consistent view of the Apps when additional requests are made with a `pageToken`.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.FirebaseProjectsAndroidAppsList(ctx, operations.FirebaseProjectsAndroidAppsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("fuga"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("corporis"),
        Fields: sdk.String("iste"),
        Key: sdk.String("iure"),
        OauthToken: sdk.String("saepe"),
        PageSize: sdk.Int64(697631),
        PageToken: sdk.String("architecto"),
        Parent: "ipsa",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("reiciendis"),
        ShowDeleted: sdk.Bool(false),
        UploadType: sdk.String("est"),
        UploadProtocol: sdk.String("mollitia"),
    }, operations.FirebaseProjectsAndroidAppsListSecurity{
        Option1: &operations.FirebaseProjectsAndroidAppsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAndroidAppsResponse != nil {
        // handle response
    }
}
```

## FirebaseProjectsAndroidAppsShaCreate

Adds a ShaCertificate to the specified AndroidApp.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.FirebaseProjectsAndroidAppsShaCreate(ctx, operations.FirebaseProjectsAndroidAppsShaCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ShaCertificate: &shared.ShaCertificate{
            CertType: shared.ShaCertificateCertTypeEnumShaCertificateTypeUnspecified.ToPointer(),
            Name: sdk.String("Stacy Champlin"),
            ShaHash: sdk.String("omnis"),
        },
        AccessToken: sdk.String("nemo"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("excepturi"),
        Fields: sdk.String("accusantium"),
        Key: sdk.String("iure"),
        OauthToken: sdk.String("culpa"),
        Parent: "doloribus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sapiente"),
        UploadType: sdk.String("architecto"),
        UploadProtocol: sdk.String("mollitia"),
    }, operations.FirebaseProjectsAndroidAppsShaCreateSecurity{
        Option1: &operations.FirebaseProjectsAndroidAppsShaCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ShaCertificate != nil {
        // handle response
    }
}
```

## FirebaseProjectsAndroidAppsShaDelete

Removes a ShaCertificate from the specified AndroidApp.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.FirebaseProjectsAndroidAppsShaDelete(ctx, operations.FirebaseProjectsAndroidAppsShaDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("culpa"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("repellat"),
        Fields: sdk.String("mollitia"),
        Key: sdk.String("occaecati"),
        Name: "Lucy Konopelski",
        OauthToken: sdk.String("error"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quia"),
        UploadType: sdk.String("quis"),
        UploadProtocol: sdk.String("vitae"),
    }, operations.FirebaseProjectsAndroidAppsShaDeleteSecurity{
        Option1: &operations.FirebaseProjectsAndroidAppsShaDeleteSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## FirebaseProjectsAndroidAppsShaList

Lists the SHA-1 and SHA-256 certificates for the specified AndroidApp.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.FirebaseProjectsAndroidAppsShaList(ctx, operations.FirebaseProjectsAndroidAppsShaListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("animi"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("odit"),
        Fields: sdk.String("quo"),
        Key: sdk.String("sequi"),
        OauthToken: sdk.String("tenetur"),
        Parent: "ipsam",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("id"),
        UploadType: sdk.String("possimus"),
        UploadProtocol: sdk.String("aut"),
    }, operations.FirebaseProjectsAndroidAppsShaListSecurity{
        Option1: &operations.FirebaseProjectsAndroidAppsShaListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListShaCertificatesResponse != nil {
        // handle response
    }
}
```

## FirebaseProjectsAvailableLocationsList

Lists the valid Google Cloud Platform (GCP) resource locations for the specified Project (including a FirebaseProject). One of these locations can be selected as the Project's [_default_ GCP resource location](https://firebase.google.com/docs/projects/locations), which is the geographical location where the Project's resources, such as Cloud Firestore, will be provisioned by default. However, if the default GCP resource location has already been set for the Project, then this setting cannot be changed. This call checks for any possible [location restrictions](https://cloud.google.com/resource-manager/docs/organization-policy/defining-locations) for the specified Project and, thus, might return a subset of all possible GCP resource locations. To list all GCP resource locations (regardless of any restrictions), call the endpoint without specifying a unique project identifier (that is, `/v1beta1/{parent=projects/-}/listAvailableLocations`). To call `ListAvailableLocations` with a specified project, a member must be at minimum a Viewer of the Project. Calls without a specified project do not require any specific project permissions.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.FirebaseProjectsAvailableLocationsList(ctx, operations.FirebaseProjectsAvailableLocationsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("error"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("laborum"),
        Fields: sdk.String("quasi"),
        Key: sdk.String("reiciendis"),
        OauthToken: sdk.String("voluptatibus"),
        PageSize: sdk.Int64(878194),
        PageToken: sdk.String("nihil"),
        Parent: "praesentium",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptatibus"),
        UploadType: sdk.String("ipsa"),
        UploadProtocol: sdk.String("omnis"),
    }, operations.FirebaseProjectsAvailableLocationsListSecurity{
        Option1: &operations.FirebaseProjectsAvailableLocationsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAvailableLocationsResponse != nil {
        // handle response
    }
}
```

## FirebaseProjectsDefaultLocationFinalize

Sets the default Google Cloud Platform (GCP) resource location for the specified FirebaseProject. This method creates an App Engine application with a [default Cloud Storage bucket](https://cloud.google.com/appengine/docs/standard/python/googlecloudstorageclient/setting-up-cloud-storage#activating_a_cloud_storage_bucket), located in the specified [`locationId`](#body.request_body.FIELDS.location_id). This location must be one of the available [GCP resource locations](https://firebase.google.com/docs/projects/locations). After the default GCP resource location is finalized, or if it was already set, it cannot be changed. The default GCP resource location for the specified `FirebaseProject` might already be set because either the underlying GCP `Project` already has an App Engine application or `FinalizeDefaultLocation` was previously called with a specified `locationId`. Any new calls to `FinalizeDefaultLocation` with a *different* specified `locationId` will return a 409 error. The result of this call is an [`Operation`](../../v1beta1/operations), which can be used to track the provisioning process. The [`response`](../../v1beta1/operations#Operation.FIELDS.response) type of the `Operation` is google.protobuf.Empty. The `Operation` can be polled by its `name` using GetOperation until `done` is true. When `done` is true, the `Operation` has either succeeded or failed. If the `Operation` has succeeded, its [`response`](../../v1beta1/operations#Operation.FIELDS.response) will be set to a google.protobuf.Empty; if the `Operation` has failed, its `error` will be set to a google.rpc.Status. The `Operation` is automatically deleted after completion, so there is no need to call DeleteOperation. All fields listed in the [request body](#request-body) are required. To call `FinalizeDefaultLocation`, a member must be an Owner of the Project.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.FirebaseProjectsDefaultLocationFinalize(ctx, operations.FirebaseProjectsDefaultLocationFinalizeRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        FinalizeDefaultLocationRequest: &shared.FinalizeDefaultLocationRequest{
            LocationID: sdk.String("cum"),
        },
        AccessToken: sdk.String("perferendis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("reprehenderit"),
        Fields: sdk.String("ut"),
        Key: sdk.String("maiores"),
        OauthToken: sdk.String("dicta"),
        Parent: "corporis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolore"),
        UploadType: sdk.String("iusto"),
        UploadProtocol: sdk.String("dicta"),
    }, operations.FirebaseProjectsDefaultLocationFinalizeSecurity{
        Option1: &operations.FirebaseProjectsDefaultLocationFinalizeSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## FirebaseProjectsIosAppsCreate

Requests the creation of a new IosApp in the specified FirebaseProject. The result of this call is an `Operation` which can be used to track the provisioning process. The `Operation` is automatically deleted after completion, so there is no need to call `DeleteOperation`.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.FirebaseProjectsIosAppsCreate(ctx, operations.FirebaseProjectsIosAppsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        IosAppInput: &shared.IosAppInput{
            APIKeyID: sdk.String("enim"),
            AppStoreID: sdk.String("accusamus"),
            BundleID: sdk.String("commodi"),
            DisplayName: sdk.String("repudiandae"),
            Etag: sdk.String("quae"),
            Name: sdk.String("Alison Mann"),
            TeamID: sdk.String("modi"),
        },
        AccessToken: sdk.String("praesentium"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("voluptates"),
        Fields: sdk.String("quasi"),
        Key: sdk.String("repudiandae"),
        OauthToken: sdk.String("sint"),
        Parent: "veritatis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("itaque"),
        UploadType: sdk.String("incidunt"),
        UploadProtocol: sdk.String("enim"),
    }, operations.FirebaseProjectsIosAppsCreateSecurity{
        Option1: &operations.FirebaseProjectsIosAppsCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## FirebaseProjectsIosAppsList

Lists each IosApp associated with the specified FirebaseProject. The elements are returned in no particular order, but will be a consistent view of the Apps when additional requests are made with a `pageToken`.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.FirebaseProjectsIosAppsList(ctx, operations.FirebaseProjectsIosAppsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("est"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("explicabo"),
        Fields: sdk.String("deserunt"),
        Key: sdk.String("distinctio"),
        OauthToken: sdk.String("quibusdam"),
        PageSize: sdk.Int64(289406),
        PageToken: sdk.String("modi"),
        Parent: "qui",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("aliquid"),
        ShowDeleted: sdk.Bool(false),
        UploadType: sdk.String("cupiditate"),
        UploadProtocol: sdk.String("quos"),
    }, operations.FirebaseProjectsIosAppsListSecurity{
        Option1: &operations.FirebaseProjectsIosAppsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListIosAppsResponse != nil {
        // handle response
    }
}
```

## FirebaseProjectsList

Lists each FirebaseProject accessible to the caller. The elements are returned in no particular order, but they will be a consistent view of the Projects when additional requests are made with a `pageToken`. This method is eventually consistent with Project mutations, which means newly provisioned Projects and recent modifications to existing Projects might not be reflected in the set of Projects. The list will include only ACTIVE Projects. Use GetFirebaseProject for consistent reads as well as for additional Project details.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.FirebaseProjectsList(ctx, operations.FirebaseProjectsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("magni"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("ipsam"),
        Fields: sdk.String("alias"),
        Key: sdk.String("fugit"),
        OauthToken: sdk.String("dolorum"),
        PageSize: sdk.Int64(569618),
        PageToken: sdk.String("tempora"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("facilis"),
        ShowDeleted: sdk.Bool(false),
        UploadType: sdk.String("tempore"),
        UploadProtocol: sdk.String("labore"),
    }, operations.FirebaseProjectsListSecurity{
        Option1: &operations.FirebaseProjectsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListFirebaseProjectsResponse != nil {
        // handle response
    }
}
```

## FirebaseProjectsRemoveAnalytics

Unlinks the specified FirebaseProject from its Google Analytics account. This call removes the association of the specified `FirebaseProject` with its current Google Analytics property. However, this call does not delete the Google Analytics resources, such as the Google Analytics property or any data streams. These resources may be re-associated later to the `FirebaseProject` by calling [`AddGoogleAnalytics`](../../v1beta1/projects/addGoogleAnalytics) and specifying the same `analyticsPropertyId`. For Android Apps and iOS Apps, this call re-links data streams with their corresponding apps. However, for Web Apps, this call provisions a *new* data stream for each Web App. To call `RemoveAnalytics`, a project member must be an Owner for the `FirebaseProject`.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.FirebaseProjectsRemoveAnalytics(ctx, operations.FirebaseProjectsRemoveAnalyticsRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RemoveAnalyticsRequest: &shared.RemoveAnalyticsRequest{
            AnalyticsPropertyID: sdk.String("eum"),
        },
        AccessToken: sdk.String("non"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("sint"),
        Fields: sdk.String("aliquid"),
        Key: sdk.String("provident"),
        OauthToken: sdk.String("necessitatibus"),
        Parent: "sint",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("officia"),
        UploadType: sdk.String("dolor"),
        UploadProtocol: sdk.String("debitis"),
    }, operations.FirebaseProjectsRemoveAnalyticsSecurity{
        Option1: &operations.FirebaseProjectsRemoveAnalyticsSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## FirebaseProjectsSearchApps

Lists all available Apps for the specified FirebaseProject. This is a convenience method. Typically, interaction with an App should be done using the platform-specific service, but some tool use-cases require a summary of all known Apps (such as for App selector interfaces).

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.FirebaseProjectsSearchApps(ctx, operations.FirebaseProjectsSearchAppsRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("dolorum"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("in"),
        Fields: sdk.String("illum"),
        Filter: sdk.String("maiores"),
        Key: sdk.String("rerum"),
        OauthToken: sdk.String("dicta"),
        PageSize: sdk.Int64(297437),
        PageToken: sdk.String("cumque"),
        Parent: "facere",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ea"),
        ShowDeleted: sdk.Bool(false),
        UploadType: sdk.String("aliquid"),
        UploadProtocol: sdk.String("laborum"),
    }, operations.FirebaseProjectsSearchAppsSecurity{
        Option1: &operations.FirebaseProjectsSearchAppsSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SearchFirebaseAppsResponse != nil {
        // handle response
    }
}
```

## FirebaseProjectsWebAppsCreate

Requests the creation of a new WebApp in the specified FirebaseProject. The result of this call is an `Operation` which can be used to track the provisioning process. The `Operation` is automatically deleted after completion, so there is no need to call `DeleteOperation`.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.FirebaseProjectsWebAppsCreate(ctx, operations.FirebaseProjectsWebAppsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        WebAppInput: &shared.WebAppInput{
            APIKeyID: sdk.String("non"),
            AppUrls: []string{
                "enim",
                "accusamus",
                "delectus",
            },
            DisplayName: sdk.String("quidem"),
            Etag: sdk.String("provident"),
            Name: sdk.String("Lynn Kuvalis"),
        },
        AccessToken: sdk.String("amet"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("nisi"),
        Fields: sdk.String("vel"),
        Key: sdk.String("natus"),
        OauthToken: sdk.String("omnis"),
        Parent: "molestiae",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("perferendis"),
        UploadType: sdk.String("nihil"),
        UploadProtocol: sdk.String("magnam"),
    }, operations.FirebaseProjectsWebAppsCreateSecurity{
        Option1: &operations.FirebaseProjectsWebAppsCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## FirebaseProjectsWebAppsGetConfig

Gets the configuration artifact associated with the specified WebApp.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.FirebaseProjectsWebAppsGetConfig(ctx, operations.FirebaseProjectsWebAppsGetConfigRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("id"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("labore"),
        Fields: sdk.String("suscipit"),
        Key: sdk.String("natus"),
        Name: "Duane Thiel II",
        OauthToken: sdk.String("et"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("excepturi"),
        UploadType: sdk.String("ullam"),
        UploadProtocol: sdk.String("provident"),
    }, operations.FirebaseProjectsWebAppsGetConfigSecurity{
        Option1: &operations.FirebaseProjectsWebAppsGetConfigSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WebAppConfig != nil {
        // handle response
    }
}
```

## FirebaseProjectsWebAppsList

Lists each WebApp associated with the specified FirebaseProject. The elements are returned in no particular order, but will be a consistent view of the Apps when additional requests are made with a `pageToken`.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.FirebaseProjectsWebAppsList(ctx, operations.FirebaseProjectsWebAppsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("sint"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("mollitia"),
        Fields: sdk.String("reiciendis"),
        Key: sdk.String("mollitia"),
        OauthToken: sdk.String("ad"),
        PageSize: sdk.Int64(431418),
        PageToken: sdk.String("dolor"),
        Parent: "necessitatibus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("odit"),
        ShowDeleted: sdk.Bool(false),
        UploadType: sdk.String("nemo"),
        UploadProtocol: sdk.String("quasi"),
    }, operations.FirebaseProjectsWebAppsListSecurity{
        Option1: &operations.FirebaseProjectsWebAppsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListWebAppsResponse != nil {
        // handle response
    }
}
```

## FirebaseProjectsWebAppsPatch

Updates the attributes of the specified WebApp.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.FirebaseProjectsWebAppsPatch(ctx, operations.FirebaseProjectsWebAppsPatchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        WebAppInput: &shared.WebAppInput{
            APIKeyID: sdk.String("doloribus"),
            AppUrls: []string{
                "eius",
                "maxime",
                "deleniti",
                "facilis",
            },
            DisplayName: sdk.String("in"),
            Etag: sdk.String("architecto"),
            Name: sdk.String("Elvira Herman"),
        },
        AccessToken: sdk.String("repellat"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("sed"),
        Fields: sdk.String("saepe"),
        Key: sdk.String("pariatur"),
        Name: "Kathryn Lang",
        OauthToken: sdk.String("sunt"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quo"),
        UpdateMask: sdk.String("illum"),
        UploadType: sdk.String("pariatur"),
        UploadProtocol: sdk.String("maxime"),
    }, operations.FirebaseProjectsWebAppsPatchSecurity{
        Option1: &operations.FirebaseProjectsWebAppsPatchSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WebApp != nil {
        // handle response
    }
}
```

## FirebaseProjectsWebAppsRemove

Removes the specified WebApp from the FirebaseProject.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.FirebaseProjectsWebAppsRemove(ctx, operations.FirebaseProjectsWebAppsRemoveRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RemoveWebAppRequest: &shared.RemoveWebAppRequest{
            AllowMissing: sdk.Bool(false),
            Etag: sdk.String("excepturi"),
            Immediate: sdk.Bool(false),
            ValidateOnly: sdk.Bool(false),
        },
        AccessToken: sdk.String("odit"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("accusantium"),
        Fields: sdk.String("ab"),
        Key: sdk.String("maiores"),
        Name: "Clyde Kling",
        OauthToken: sdk.String("eaque"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("pariatur"),
        UploadType: sdk.String("nemo"),
        UploadProtocol: sdk.String("voluptatibus"),
    }, operations.FirebaseProjectsWebAppsRemoveSecurity{
        Option1: &operations.FirebaseProjectsWebAppsRemoveSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## FirebaseProjectsWebAppsUndelete

Restores the specified WebApp to the FirebaseProject.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.FirebaseProjectsWebAppsUndelete(ctx, operations.FirebaseProjectsWebAppsUndeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        UndeleteWebAppRequest: &shared.UndeleteWebAppRequest{
            Etag: sdk.String("fugiat"),
            ValidateOnly: sdk.Bool(false),
        },
        AccessToken: sdk.String("amet"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("cumque"),
        Fields: sdk.String("corporis"),
        Key: sdk.String("hic"),
        Name: "Robin D'Amore",
        OauthToken: sdk.String("dignissimos"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("eaque"),
        UploadType: sdk.String("quis"),
        UploadProtocol: sdk.String("nesciunt"),
    }, operations.FirebaseProjectsWebAppsUndeleteSecurity{
        Option1: &operations.FirebaseProjectsWebAppsUndeleteSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```
