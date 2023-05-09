# Projects

### Available Operations

* [ApikeysProjectsLocationsKeysCreate](#apikeysprojectslocationskeyscreate) - Creates a new API key. NOTE: Key is a global resource; hence the only supported value for location is `global`.
* [ApikeysProjectsLocationsKeysDelete](#apikeysprojectslocationskeysdelete) - Deletes an API key. Deleted key can be retrieved within 30 days of deletion. Afterward, key will be purged from the project. NOTE: Key is a global resource; hence the only supported value for location is `global`.
* [ApikeysProjectsLocationsKeysGet](#apikeysprojectslocationskeysget) - Gets the metadata for an API key. The key string of the API key isn't included in the response. NOTE: Key is a global resource; hence the only supported value for location is `global`.
* [ApikeysProjectsLocationsKeysGetKeyString](#apikeysprojectslocationskeysgetkeystring) - Get the key string for an API key. NOTE: Key is a global resource; hence the only supported value for location is `global`.
* [ApikeysProjectsLocationsKeysList](#apikeysprojectslocationskeyslist) - Lists the API keys owned by a project. The key string of the API key isn't included in the response. NOTE: Key is a global resource; hence the only supported value for location is `global`.
* [ApikeysProjectsLocationsKeysPatch](#apikeysprojectslocationskeyspatch) - Patches the modifiable fields of an API key. The key string of the API key isn't included in the response. NOTE: Key is a global resource; hence the only supported value for location is `global`.
* [ApikeysProjectsLocationsKeysUndelete](#apikeysprojectslocationskeysundelete) - Undeletes an API key which was deleted within 30 days. NOTE: Key is a global resource; hence the only supported value for location is `global`.

## ApikeysProjectsLocationsKeysCreate

Creates a new API key. NOTE: Key is a global resource; hence the only supported value for location is `global`.

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
    res, err := s.Projects.ApikeysProjectsLocationsKeysCreate(ctx, operations.ApikeysProjectsLocationsKeysCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        V2KeyInput: &shared.V2KeyInput{
            Annotations: map[string]string{
                "excepturi": "nisi",
                "recusandae": "temporibus",
            },
            DisplayName: sdk.String("ab"),
            Restrictions: &shared.V2Restrictions{
                AndroidKeyRestrictions: &shared.V2AndroidKeyRestrictions{
                    AllowedApplications: []shared.V2AndroidApplication{
                        shared.V2AndroidApplication{
                            PackageName: sdk.String("veritatis"),
                            Sha1Fingerprint: sdk.String("deserunt"),
                        },
                        shared.V2AndroidApplication{
                            PackageName: sdk.String("perferendis"),
                            Sha1Fingerprint: sdk.String("ipsam"),
                        },
                    },
                },
                APITargets: []shared.V2APITarget{
                    shared.V2APITarget{
                        Methods: []string{
                            "quo",
                            "odit",
                            "at",
                            "at",
                        },
                        Service: sdk.String("maiores"),
                    },
                    shared.V2APITarget{
                        Methods: []string{
                            "quod",
                            "quod",
                        },
                        Service: sdk.String("esse"),
                    },
                    shared.V2APITarget{
                        Methods: []string{
                            "porro",
                            "dolorum",
                            "dicta",
                        },
                        Service: sdk.String("nam"),
                    },
                    shared.V2APITarget{
                        Methods: []string{
                            "occaecati",
                            "fugit",
                            "deleniti",
                        },
                        Service: sdk.String("hic"),
                    },
                },
                BrowserKeyRestrictions: &shared.V2BrowserKeyRestrictions{
                    AllowedReferrers: []string{
                        "totam",
                        "beatae",
                        "commodi",
                        "molestiae",
                    },
                },
                IosKeyRestrictions: &shared.V2IosKeyRestrictions{
                    AllowedBundleIds: []string{
                        "qui",
                        "impedit",
                    },
                },
                ServerKeyRestrictions: &shared.V2ServerKeyRestrictions{
                    AllowedIps: []string{
                        "esse",
                        "ipsum",
                        "excepturi",
                    },
                },
            },
        },
        AccessToken: sdk.String("aspernatur"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("ad"),
        Fields: sdk.String("natus"),
        Key: sdk.String("sed"),
        KeyID: sdk.String("iste"),
        OauthToken: sdk.String("dolor"),
        Parent: "natus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("laboriosam"),
        UploadType: sdk.String("hic"),
        UploadProtocol: sdk.String("saepe"),
    }, operations.ApikeysProjectsLocationsKeysCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## ApikeysProjectsLocationsKeysDelete

Deletes an API key. Deleted key can be retrieved within 30 days of deletion. Afterward, key will be purged from the project. NOTE: Key is a global resource; hence the only supported value for location is `global`.

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
    res, err := s.Projects.ApikeysProjectsLocationsKeysDelete(ctx, operations.ApikeysProjectsLocationsKeysDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("in"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("iste"),
        Etag: sdk.String("iure"),
        Fields: sdk.String("saepe"),
        Key: sdk.String("quidem"),
        Name: "Brenda Wisozk",
        OauthToken: sdk.String("laborum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolores"),
        UploadType: sdk.String("dolorem"),
        UploadProtocol: sdk.String("corporis"),
    }, operations.ApikeysProjectsLocationsKeysDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## ApikeysProjectsLocationsKeysGet

Gets the metadata for an API key. The key string of the API key isn't included in the response. NOTE: Key is a global resource; hence the only supported value for location is `global`.

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
    res, err := s.Projects.ApikeysProjectsLocationsKeysGet(ctx, operations.ApikeysProjectsLocationsKeysGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("nobis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("omnis"),
        Fields: sdk.String("nemo"),
        Key: sdk.String("minima"),
        Name: "Brian Kessler",
        OauthToken: sdk.String("sapiente"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("architecto"),
        UploadType: sdk.String("mollitia"),
        UploadProtocol: sdk.String("dolorem"),
    }, operations.ApikeysProjectsLocationsKeysGetSecurity{
        Option1: &operations.ApikeysProjectsLocationsKeysGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.V2Key != nil {
        // handle response
    }
}
```

## ApikeysProjectsLocationsKeysGetKeyString

Get the key string for an API key. NOTE: Key is a global resource; hence the only supported value for location is `global`.

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
    res, err := s.Projects.ApikeysProjectsLocationsKeysGetKeyString(ctx, operations.ApikeysProjectsLocationsKeysGetKeyStringRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("consequuntur"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("mollitia"),
        Fields: sdk.String("occaecati"),
        Key: sdk.String("numquam"),
        Name: "Claudia Krajcik",
        OauthToken: sdk.String("quia"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quis"),
        UploadType: sdk.String("vitae"),
        UploadProtocol: sdk.String("laborum"),
    }, operations.ApikeysProjectsLocationsKeysGetKeyStringSecurity{
        Option1: &operations.ApikeysProjectsLocationsKeysGetKeyStringSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.V2GetKeyStringResponse != nil {
        // handle response
    }
}
```

## ApikeysProjectsLocationsKeysList

Lists the API keys owned by a project. The key string of the API key isn't included in the response. NOTE: Key is a global resource; hence the only supported value for location is `global`.

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
    res, err := s.Projects.ApikeysProjectsLocationsKeysList(ctx, operations.ApikeysProjectsLocationsKeysListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("enim"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quo"),
        Fields: sdk.String("sequi"),
        Key: sdk.String("tenetur"),
        OauthToken: sdk.String("ipsam"),
        PageSize: sdk.Int64(662527),
        PageToken: sdk.String("possimus"),
        Parent: "aut",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quasi"),
        ShowDeleted: sdk.Bool(false),
        UploadType: sdk.String("error"),
        UploadProtocol: sdk.String("temporibus"),
    }, operations.ApikeysProjectsLocationsKeysListSecurity{
        Option1: &operations.ApikeysProjectsLocationsKeysListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.V2ListKeysResponse != nil {
        // handle response
    }
}
```

## ApikeysProjectsLocationsKeysPatch

Patches the modifiable fields of an API key. The key string of the API key isn't included in the response. NOTE: Key is a global resource; hence the only supported value for location is `global`.

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
    res, err := s.Projects.ApikeysProjectsLocationsKeysPatch(ctx, operations.ApikeysProjectsLocationsKeysPatchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        V2KeyInput: &shared.V2KeyInput{
            Annotations: map[string]string{
                "reiciendis": "voluptatibus",
            },
            DisplayName: sdk.String("vero"),
            Restrictions: &shared.V2Restrictions{
                AndroidKeyRestrictions: &shared.V2AndroidKeyRestrictions{
                    AllowedApplications: []shared.V2AndroidApplication{
                        shared.V2AndroidApplication{
                            PackageName: sdk.String("praesentium"),
                            Sha1Fingerprint: sdk.String("voluptatibus"),
                        },
                        shared.V2AndroidApplication{
                            PackageName: sdk.String("ipsa"),
                            Sha1Fingerprint: sdk.String("omnis"),
                        },
                    },
                },
                APITargets: []shared.V2APITarget{
                    shared.V2APITarget{
                        Methods: []string{
                            "perferendis",
                            "doloremque",
                            "reprehenderit",
                        },
                        Service: sdk.String("ut"),
                    },
                    shared.V2APITarget{
                        Methods: []string{
                            "dicta",
                            "corporis",
                            "dolore",
                            "iusto",
                        },
                        Service: sdk.String("dicta"),
                    },
                },
                BrowserKeyRestrictions: &shared.V2BrowserKeyRestrictions{
                    AllowedReferrers: []string{
                        "enim",
                        "accusamus",
                        "commodi",
                    },
                },
                IosKeyRestrictions: &shared.V2IosKeyRestrictions{
                    AllowedBundleIds: []string{
                        "quae",
                        "ipsum",
                        "quidem",
                        "molestias",
                    },
                },
                ServerKeyRestrictions: &shared.V2ServerKeyRestrictions{
                    AllowedIps: []string{
                        "pariatur",
                        "modi",
                        "praesentium",
                    },
                },
            },
        },
        AccessToken: sdk.String("rem"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quasi"),
        Fields: sdk.String("repudiandae"),
        Key: sdk.String("sint"),
        Name: "Patti Gottlieb MD",
        OauthToken: sdk.String("quibusdam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("explicabo"),
        UpdateMask: sdk.String("deserunt"),
        UploadType: sdk.String("distinctio"),
        UploadProtocol: sdk.String("quibusdam"),
    }, operations.ApikeysProjectsLocationsKeysPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## ApikeysProjectsLocationsKeysUndelete

Undeletes an API key which was deleted within 30 days. NOTE: Key is a global resource; hence the only supported value for location is `global`.

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
    res, err := s.Projects.ApikeysProjectsLocationsKeysUndelete(ctx, operations.ApikeysProjectsLocationsKeysUndeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RequestBody: map[string]interface{}{
            "qui": "aliquid",
            "cupiditate": "quos",
        },
        AccessToken: sdk.String("perferendis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("assumenda"),
        Fields: sdk.String("ipsam"),
        Key: sdk.String("alias"),
        Name: "Sonya Marks",
        OauthToken: sdk.String("tempore"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("labore"),
        UploadType: sdk.String("delectus"),
        UploadProtocol: sdk.String("eum"),
    }, operations.ApikeysProjectsLocationsKeysUndeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```
