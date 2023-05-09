# Internalappsharingartifacts

### Available Operations

* [AndroidpublisherInternalappsharingartifactsUploadapk](#androidpublisherinternalappsharingartifactsuploadapk) - Uploads an APK to internal app sharing. If you are using the Google API client libraries, please increase the timeout of the http request before calling this endpoint (a timeout of 2 minutes is recommended). See [Timeouts and Errors](https://developers.google.com/api-client-library/java/google-api-java-client/errors) for an example in java.
* [AndroidpublisherInternalappsharingartifactsUploadbundle](#androidpublisherinternalappsharingartifactsuploadbundle) - Uploads an app bundle to internal app sharing. If you are using the Google API client libraries, please increase the timeout of the http request before calling this endpoint (a timeout of 2 minutes is recommended). See [Timeouts and Errors](https://developers.google.com/api-client-library/java/google-api-java-client/errors) for an example in java.

## AndroidpublisherInternalappsharingartifactsUploadapk

Uploads an APK to internal app sharing. If you are using the Google API client libraries, please increase the timeout of the http request before calling this endpoint (a timeout of 2 minutes is recommended). See [Timeouts and Errors](https://developers.google.com/api-client-library/java/google-api-java-client/errors) for an example in java.

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
    res, err := s.Internalappsharingartifacts.AndroidpublisherInternalappsharingartifactsUploadapk(ctx, operations.AndroidpublisherInternalappsharingartifactsUploadapkRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("quidem"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("beatae"),
        Fields: sdk.String("unde"),
        Key: sdk.String("molestiae"),
        OauthToken: sdk.String("delectus"),
        PackageName: "cupiditate",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("fugit"),
        UploadType: sdk.String("numquam"),
        UploadProtocol: sdk.String("numquam"),
    }, operations.AndroidpublisherInternalappsharingartifactsUploadapkSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InternalAppSharingArtifact != nil {
        // handle response
    }
}
```

## AndroidpublisherInternalappsharingartifactsUploadbundle

Uploads an app bundle to internal app sharing. If you are using the Google API client libraries, please increase the timeout of the http request before calling this endpoint (a timeout of 2 minutes is recommended). See [Timeouts and Errors](https://developers.google.com/api-client-library/java/google-api-java-client/errors) for an example in java.

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
    res, err := s.Internalappsharingartifacts.AndroidpublisherInternalappsharingartifactsUploadbundle(ctx, operations.AndroidpublisherInternalappsharingartifactsUploadbundleRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("at"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("dignissimos"),
        Fields: sdk.String("optio"),
        Key: sdk.String("necessitatibus"),
        OauthToken: sdk.String("corporis"),
        PackageName: "qui",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("expedita"),
        UploadType: sdk.String("voluptatum"),
        UploadProtocol: sdk.String("cupiditate"),
    }, operations.AndroidpublisherInternalappsharingartifactsUploadbundleSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InternalAppSharingArtifact != nil {
        // handle response
    }
}
```
