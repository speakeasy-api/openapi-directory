# Projects

### Available Operations

* [CloudprofilerProjectsProfilesCreate](#cloudprofilerprojectsprofilescreate) - CreateProfile creates a new profile resource in the online mode. The server ensures that the new profiles are created at a constant rate per deployment, so the creation request may hang for some time until the next profile session is available. The request may fail with ABORTED error if the creation is not available within ~1m, the response will indicate the duration of the backoff the client should take before attempting creating a profile again. The backoff duration is returned in google.rpc.RetryInfo extension on the response status. To a gRPC client, the extension will be return as a binary-serialized proto in the trailing metadata item named "google.rpc.retryinfo-bin". 
* [CloudprofilerProjectsProfilesCreateOffline](#cloudprofilerprojectsprofilescreateoffline) - CreateOfflineProfile creates a new profile resource in the offline mode. The client provides the profile to create along with the profile bytes, the server records it.
* [CloudprofilerProjectsProfilesPatch](#cloudprofilerprojectsprofilespatch) - UpdateProfile updates the profile bytes and labels on the profile resource created in the online mode. Updating the bytes for profiles created in the offline mode is currently not supported: the profile content must be provided at the time of the profile creation.

## CloudprofilerProjectsProfilesCreate

CreateProfile creates a new profile resource in the online mode. The server ensures that the new profiles are created at a constant rate per deployment, so the creation request may hang for some time until the next profile session is available. The request may fail with ABORTED error if the creation is not available within ~1m, the response will indicate the duration of the backoff the client should take before attempting creating a profile again. The backoff duration is returned in google.rpc.RetryInfo extension on the response status. To a gRPC client, the extension will be return as a binary-serialized proto in the trailing metadata item named "google.rpc.retryinfo-bin". 

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
    res, err := s.Projects.CloudprofilerProjectsProfilesCreate(ctx, operations.CloudprofilerProjectsProfilesCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        CreateProfileRequest: &shared.CreateProfileRequest{
            Deployment: &shared.Deployment{
                Labels: map[string]string{
                    "recusandae": "temporibus",
                    "ab": "quis",
                },
                ProjectID: sdk.String("veritatis"),
                Target: sdk.String("deserunt"),
            },
            ProfileType: []shared.CreateProfileRequestProfileTypeEnum{
                shared.CreateProfileRequestProfileTypeEnumWall,
            },
        },
        AccessToken: sdk.String("repellendus"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quo"),
        Fields: sdk.String("odit"),
        Key: sdk.String("at"),
        OauthToken: sdk.String("at"),
        Parent: "maiores",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("molestiae"),
        UploadType: sdk.String("quod"),
        UploadProtocol: sdk.String("quod"),
    }, operations.CloudprofilerProjectsProfilesCreateSecurity{
        Option1: &operations.CloudprofilerProjectsProfilesCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Profile != nil {
        // handle response
    }
}
```

## CloudprofilerProjectsProfilesCreateOffline

CreateOfflineProfile creates a new profile resource in the offline mode. The client provides the profile to create along with the profile bytes, the server records it.

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
    res, err := s.Projects.CloudprofilerProjectsProfilesCreateOffline(ctx, operations.CloudprofilerProjectsProfilesCreateOfflineRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        ProfileInput: &shared.ProfileInput{
            Deployment: &shared.Deployment{
                Labels: map[string]string{
                    "porro": "dolorum",
                    "dicta": "nam",
                    "officia": "occaecati",
                },
                ProjectID: sdk.String("fugit"),
                Target: sdk.String("deleniti"),
            },
            Duration: sdk.String("hic"),
            Labels: map[string]string{
                "totam": "beatae",
                "commodi": "molestiae",
                "modi": "qui",
                "impedit": "cum",
            },
            ProfileBytes: sdk.String("esse"),
            ProfileType: shared.ProfileProfileTypeEnumCPU.ToPointer(),
        },
        AccessToken: sdk.String("excepturi"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("perferendis"),
        Fields: sdk.String("ad"),
        Key: sdk.String("natus"),
        OauthToken: sdk.String("sed"),
        Parent: "iste",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolor"),
        UploadType: sdk.String("natus"),
        UploadProtocol: sdk.String("laboriosam"),
    }, operations.CloudprofilerProjectsProfilesCreateOfflineSecurity{
        Option1: &operations.CloudprofilerProjectsProfilesCreateOfflineSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Profile != nil {
        // handle response
    }
}
```

## CloudprofilerProjectsProfilesPatch

UpdateProfile updates the profile bytes and labels on the profile resource created in the online mode. Updating the bytes for profiles created in the offline mode is currently not supported: the profile content must be provided at the time of the profile creation.

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
    res, err := s.Projects.CloudprofilerProjectsProfilesPatch(ctx, operations.CloudprofilerProjectsProfilesPatchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ProfileInput: &shared.ProfileInput{
            Deployment: &shared.Deployment{
                Labels: map[string]string{
                    "fuga": "in",
                    "corporis": "iste",
                    "iure": "saepe",
                    "quidem": "architecto",
                },
                ProjectID: sdk.String("ipsa"),
                Target: sdk.String("reiciendis"),
            },
            Duration: sdk.String("est"),
            Labels: map[string]string{
                "laborum": "dolores",
                "dolorem": "corporis",
                "explicabo": "nobis",
            },
            ProfileBytes: sdk.String("enim"),
            ProfileType: shared.ProfileProfileTypeEnumThreads.ToPointer(),
        },
        AccessToken: sdk.String("nemo"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("excepturi"),
        Fields: sdk.String("accusantium"),
        Key: sdk.String("iure"),
        Name: "Miss Aubrey Williamson",
        OauthToken: sdk.String("culpa"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("consequuntur"),
        UpdateMask: sdk.String("repellat"),
        UploadType: sdk.String("mollitia"),
        UploadProtocol: sdk.String("occaecati"),
    }, operations.CloudprofilerProjectsProfilesPatchSecurity{
        Option1: &operations.CloudprofilerProjectsProfilesPatchSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Profile != nil {
        // handle response
    }
}
```
