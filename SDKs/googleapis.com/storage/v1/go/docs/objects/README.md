# Objects

### Available Operations

* [StorageObjectsCompose](#storageobjectscompose) - Concatenates a list of existing objects into a new object in the same bucket.
* [StorageObjectsCopy](#storageobjectscopy) - Copies a source object to a destination object. Optionally overrides metadata.
* [StorageObjectsDelete](#storageobjectsdelete) - Deletes an object and its metadata. Deletions are permanent if versioning is not enabled for the bucket, or if the generation parameter is used.
* [StorageObjectsGet](#storageobjectsget) - Retrieves an object or its metadata.
* [StorageObjectsGetIamPolicy](#storageobjectsgetiampolicy) - Returns an IAM policy for the specified object.
* [StorageObjectsInsert](#storageobjectsinsert) - Stores a new object and metadata.
* [StorageObjectsList](#storageobjectslist) - Retrieves a list of objects matching the criteria.
* [StorageObjectsPatch](#storageobjectspatch) - Patches an object's metadata.
* [StorageObjectsRewrite](#storageobjectsrewrite) - Rewrites a source object to a destination object. Optionally overrides metadata.
* [StorageObjectsSetIamPolicy](#storageobjectssetiampolicy) - Updates an IAM policy for the specified object.
* [StorageObjectsTestIamPermissions](#storageobjectstestiampermissions) - Tests a set of permissions on the given object to see which, if any, are held by the caller.
* [StorageObjectsUpdate](#storageobjectsupdate) - Updates an object's metadata.
* [StorageObjectsWatchAll](#storageobjectswatchall) - Watch for changes on all objects in a bucket.

## StorageObjectsCompose

Concatenates a list of existing objects into a new object in the same bucket.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Objects.StorageObjectsCompose(ctx, operations.StorageObjectsComposeRequest{
        ComposeRequest: &shared.ComposeRequest{
            Destination: &shared.Object{
                ACL: []shared.ObjectAccessControl{
                    shared.ObjectAccessControl{
                        Bucket: sdk.String("voluptatibus"),
                        Domain: sdk.String("molestias"),
                        Email: sdk.String("Morris39@yahoo.com"),
                        Entity: sdk.String("ea"),
                        EntityID: sdk.String("impedit"),
                        Etag: sdk.String("ducimus"),
                        Generation: sdk.String("odit"),
                        ID: sdk.String("3ffda9e0-6bee-4482-9c1f-c0e115c80bff"),
                        Kind: sdk.String("iste"),
                        Object: sdk.String("dicta"),
                        ProjectTeam: &shared.ObjectAccessControlProjectTeam{
                            ProjectNumber: sdk.String("quos"),
                            Team: sdk.String("ullam"),
                        },
                        Role: sdk.String("dolore"),
                        SelfLink: sdk.String("modi"),
                    },
                    shared.ObjectAccessControl{
                        Bucket: sdk.String("itaque"),
                        Domain: sdk.String("maxime"),
                        Email: sdk.String("Cary_Shields77@gmail.com"),
                        Entity: sdk.String("porro"),
                        EntityID: sdk.String("accusamus"),
                        Etag: sdk.String("totam"),
                        Generation: sdk.String("reiciendis"),
                        ID: sdk.String("1977773e-6356-42a7-b408-f05e3d48fdaf"),
                        Kind: sdk.String("velit"),
                        Object: sdk.String("vitae"),
                        ProjectTeam: &shared.ObjectAccessControlProjectTeam{
                            ProjectNumber: sdk.String("nesciunt"),
                            Team: sdk.String("similique"),
                        },
                        Role: sdk.String("illo"),
                        SelfLink: sdk.String("repellat"),
                    },
                    shared.ObjectAccessControl{
                        Bucket: sdk.String("nemo"),
                        Domain: sdk.String("doloribus"),
                        Email: sdk.String("Lee36@hotmail.com"),
                        Entity: sdk.String("cupiditate"),
                        EntityID: sdk.String("optio"),
                        Etag: sdk.String("alias"),
                        Generation: sdk.String("quidem"),
                        ID: sdk.String("36f25ea9-44f3-4b75-ac11-f6c37a512624"),
                        Kind: sdk.String("adipisci"),
                        Object: sdk.String("praesentium"),
                        ProjectTeam: &shared.ObjectAccessControlProjectTeam{
                            ProjectNumber: sdk.String("dolor"),
                            Team: sdk.String("exercitationem"),
                        },
                        Role: sdk.String("expedita"),
                        SelfLink: sdk.String("facilis"),
                    },
                    shared.ObjectAccessControl{
                        Bucket: sdk.String("impedit"),
                        Domain: sdk.String("sit"),
                        Email: sdk.String("Lorenza64@yahoo.com"),
                        Entity: sdk.String("modi"),
                        EntityID: sdk.String("veniam"),
                        Etag: sdk.String("quod"),
                        Generation: sdk.String("itaque"),
                        ID: sdk.String("fc5fde10-a0ce-4216-9e51-0019c6dc5e34"),
                        Kind: sdk.String("dignissimos"),
                        Object: sdk.String("laboriosam"),
                        ProjectTeam: &shared.ObjectAccessControlProjectTeam{
                            ProjectNumber: sdk.String("sed"),
                            Team: sdk.String("odio"),
                        },
                        Role: sdk.String("natus"),
                        SelfLink: sdk.String("provident"),
                    },
                },
                Bucket: sdk.String("cum"),
                CacheControl: sdk.String("doloribus"),
                ComponentCount: sdk.Int(703966),
                ContentDisposition: sdk.String("quidem"),
                ContentEncoding: sdk.String("itaque"),
                ContentLanguage: sdk.String("laboriosam"),
                ContentType: sdk.String("unde"),
                Crc32c: sdk.String("modi"),
                CustomTime: types.MustTimeFromString("2021-02-10T10:09:26.817Z"),
                CustomerEncryption: &shared.ObjectCustomerEncryption{
                    EncryptionAlgorithm: sdk.String("cum"),
                    KeySha256: sdk.String("aspernatur"),
                },
                Etag: sdk.String("libero"),
                EventBasedHold: sdk.Bool(false),
                Generation: sdk.String("nam"),
                ID: sdk.String("4ecae6c3-d5db-43ad-abd5-daea4c506a8a"),
                Kind: sdk.String("est"),
                KmsKeyName: sdk.String("occaecati"),
                Md5Hash: sdk.String("labore"),
                MediaLink: sdk.String("quo"),
                Metadata: map[string]string{
                    "fugit": "aliquid",
                },
                Metageneration: sdk.String("magnam"),
                Name: sdk.String("Lynne Weissnat"),
                Owner: &shared.ObjectOwner{
                    Entity: sdk.String("unde"),
                    EntityID: sdk.String("nulla"),
                },
                RetentionExpirationTime: types.MustTimeFromString("2021-09-11T07:26:38.768Z"),
                SelfLink: sdk.String("magnam"),
                Size: sdk.String("nostrum"),
                StorageClass: sdk.String("esse"),
                TemporaryHold: sdk.Bool(false),
                TimeCreated: types.MustTimeFromString("2021-08-19T02:19:07.278Z"),
                TimeDeleted: types.MustTimeFromString("2020-09-05T20:14:24.812Z"),
                TimeStorageClassUpdated: types.MustTimeFromString("2022-05-09T18:22:13.720Z"),
                Updated: types.MustTimeFromString("2021-11-04T14:46:37.615Z"),
            },
            Kind: sdk.String("doloremque"),
            SourceObjects: []shared.ComposeRequestSourceObjects{
                shared.ComposeRequestSourceObjects{
                    Generation: sdk.String("facere"),
                    Name: sdk.String("Mr. Simon Altenwerth"),
                    ObjectPreconditions: &shared.ComposeRequestSourceObjectsObjectPreconditions{
                        IfGenerationMatch: sdk.String("porro"),
                    },
                },
            },
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        DestinationBucket: "blanditiis",
        DestinationObject: "quae",
        DestinationPredefinedACL: operations.StorageObjectsComposeDestinationPredefinedACLEnumBucketOwnerFullControl.ToPointer(),
        Fields: sdk.String("officiis"),
        IfGenerationMatch: sdk.String("sed"),
        IfMetagenerationMatch: sdk.String("necessitatibus"),
        Key: sdk.String("impedit"),
        KmsKeyName: sdk.String("ipsa"),
        OauthToken: sdk.String("excepturi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("a"),
        UploadType: sdk.String("maiores"),
        UserIP: sdk.String("laudantium"),
        UserProject: sdk.String("maiores"),
    }, operations.StorageObjectsComposeSecurity{
        Option1: &operations.StorageObjectsComposeSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Object != nil {
        // handle response
    }
}
```

## StorageObjectsCopy

Copies a source object to a destination object. Optionally overrides metadata.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Objects.StorageObjectsCopy(ctx, operations.StorageObjectsCopyRequest{
        Object: &shared.Object{
            ACL: []shared.ObjectAccessControl{
                shared.ObjectAccessControl{
                    Bucket: sdk.String("asperiores"),
                    Domain: sdk.String("rem"),
                    Email: sdk.String("Geoffrey.Wehner26@gmail.com"),
                    Entity: sdk.String("esse"),
                    EntityID: sdk.String("in"),
                    Etag: sdk.String("eligendi"),
                    Generation: sdk.String("quasi"),
                    ID: sdk.String("3e902c14-125b-4096-8a66-8151a472af92"),
                    Kind: sdk.String("nesciunt"),
                    Object: sdk.String("maxime"),
                    ProjectTeam: &shared.ObjectAccessControlProjectTeam{
                        ProjectNumber: sdk.String("quis"),
                        Team: sdk.String("cupiditate"),
                    },
                    Role: sdk.String("aliquam"),
                    SelfLink: sdk.String("excepturi"),
                },
            },
            Bucket: sdk.String("maiores"),
            CacheControl: sdk.String("laudantium"),
            ComponentCount: sdk.Int(243904),
            ContentDisposition: sdk.String("reiciendis"),
            ContentEncoding: sdk.String("amet"),
            ContentLanguage: sdk.String("nemo"),
            ContentType: sdk.String("ipsa"),
            Crc32c: sdk.String("quisquam"),
            CustomTime: types.MustTimeFromString("2021-05-02T22:52:14.487Z"),
            CustomerEncryption: &shared.ObjectCustomerEncryption{
                EncryptionAlgorithm: sdk.String("molestiae"),
                KeySha256: sdk.String("aliquid"),
            },
            Etag: sdk.String("asperiores"),
            EventBasedHold: sdk.Bool(false),
            Generation: sdk.String("a"),
            ID: sdk.String("b901c6ec-bb4e-4243-8f78-9ffafeda53e5"),
            Kind: sdk.String("officia"),
            KmsKeyName: sdk.String("saepe"),
            Md5Hash: sdk.String("eum"),
            MediaLink: sdk.String("repudiandae"),
            Metadata: map[string]string{
                "officia": "impedit",
            },
            Metageneration: sdk.String("quasi"),
            Name: sdk.String("Frederick Schaden"),
            Owner: &shared.ObjectOwner{
                Entity: sdk.String("natus"),
                EntityID: sdk.String("minus"),
            },
            RetentionExpirationTime: types.MustTimeFromString("2022-09-13T06:17:44.251Z"),
            SelfLink: sdk.String("reprehenderit"),
            Size: sdk.String("quod"),
            StorageClass: sdk.String("quos"),
            TemporaryHold: sdk.Bool(false),
            TimeCreated: types.MustTimeFromString("2022-07-18T15:42:17.765Z"),
            TimeDeleted: types.MustTimeFromString("2022-10-10T02:06:29.028Z"),
            TimeStorageClassUpdated: types.MustTimeFromString("2022-06-20T03:06:33.282Z"),
            Updated: types.MustTimeFromString("2022-02-07T13:46:35.143Z"),
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        DestinationBucket: "architecto",
        DestinationKmsKeyName: sdk.String("molestias"),
        DestinationObject: "dolore",
        DestinationPredefinedACL: operations.StorageObjectsCopyDestinationPredefinedACLEnumAuthenticatedRead.ToPointer(),
        Fields: sdk.String("maiores"),
        IfGenerationMatch: sdk.String("neque"),
        IfGenerationNotMatch: sdk.String("odit"),
        IfMetagenerationMatch: sdk.String("earum"),
        IfMetagenerationNotMatch: sdk.String("veniam"),
        IfSourceGenerationMatch: sdk.String("ipsam"),
        IfSourceGenerationNotMatch: sdk.String("eaque"),
        IfSourceMetagenerationMatch: sdk.String("exercitationem"),
        IfSourceMetagenerationNotMatch: sdk.String("veniam"),
        Key: sdk.String("nihil"),
        OauthToken: sdk.String("ad"),
        PrettyPrint: sdk.Bool(false),
        Projection: operations.StorageObjectsCopyProjectionEnumFull.ToPointer(),
        QuotaUser: sdk.String("tenetur"),
        SourceBucket: "quis",
        SourceGeneration: sdk.String("quibusdam"),
        SourceObject: "nemo",
        UploadType: sdk.String("suscipit"),
        UserIP: sdk.String("pariatur"),
        UserProject: sdk.String("sit"),
    }, operations.StorageObjectsCopySecurity{
        Option1: &operations.StorageObjectsCopySecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Object != nil {
        // handle response
    }
}
```

## StorageObjectsDelete

Deletes an object and its metadata. Deletions are permanent if versioning is not enabled for the bucket, or if the generation parameter is used.

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
    res, err := s.Objects.StorageObjectsDelete(ctx, operations.StorageObjectsDeleteRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Bucket: "quidem",
        Fields: sdk.String("repellendus"),
        Generation: sdk.String("perferendis"),
        IfGenerationMatch: sdk.String("id"),
        IfGenerationNotMatch: sdk.String("sapiente"),
        IfMetagenerationMatch: sdk.String("sed"),
        IfMetagenerationNotMatch: sdk.String("possimus"),
        Key: sdk.String("repellat"),
        OauthToken: sdk.String("repudiandae"),
        Object: "architecto",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("adipisci"),
        UploadType: sdk.String("pariatur"),
        UserIP: sdk.String("harum"),
        UserProject: sdk.String("dolore"),
    }, operations.StorageObjectsDeleteSecurity{
        Option1: &operations.StorageObjectsDeleteSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## StorageObjectsGet

Retrieves an object or its metadata.

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
    res, err := s.Objects.StorageObjectsGet(ctx, operations.StorageObjectsGetRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Bucket: "voluptatibus",
        Fields: sdk.String("iure"),
        Generation: sdk.String("explicabo"),
        IfGenerationMatch: sdk.String("minus"),
        IfGenerationNotMatch: sdk.String("soluta"),
        IfMetagenerationMatch: sdk.String("dolorum"),
        IfMetagenerationNotMatch: sdk.String("velit"),
        Key: sdk.String("earum"),
        OauthToken: sdk.String("praesentium"),
        Object: "error",
        PrettyPrint: sdk.Bool(false),
        Projection: operations.StorageObjectsGetProjectionEnumFull.ToPointer(),
        QuotaUser: sdk.String("quasi"),
        UploadType: sdk.String("mollitia"),
        UserIP: sdk.String("accusamus"),
        UserProject: sdk.String("harum"),
    }, operations.StorageObjectsGetSecurity{
        Option1: &operations.StorageObjectsGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Object != nil {
        // handle response
    }
}
```

## StorageObjectsGetIamPolicy

Returns an IAM policy for the specified object.

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
    res, err := s.Objects.StorageObjectsGetIamPolicy(ctx, operations.StorageObjectsGetIamPolicyRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Bucket: "cumque",
        Fields: sdk.String("doloremque"),
        Generation: sdk.String("expedita"),
        Key: sdk.String("corrupti"),
        OauthToken: sdk.String("eaque"),
        Object: "deserunt",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("aliquid"),
        UploadType: sdk.String("excepturi"),
        UserIP: sdk.String("magni"),
        UserProject: sdk.String("tempora"),
    }, operations.StorageObjectsGetIamPolicySecurity{
        Option1: &operations.StorageObjectsGetIamPolicySecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Policy != nil {
        // handle response
    }
}
```

## StorageObjectsInsert

Stores a new object and metadata.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Objects.StorageObjectsInsert(ctx, operations.StorageObjectsInsertRequest{
        RequestBody: []byte("possimus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Bucket: "dolor",
        ContentEncoding: sdk.String("rerum"),
        Fields: sdk.String("sed"),
        IfGenerationMatch: sdk.String("accusamus"),
        IfGenerationNotMatch: sdk.String("optio"),
        IfMetagenerationMatch: sdk.String("delectus"),
        IfMetagenerationNotMatch: sdk.String("minus"),
        Key: sdk.String("quo"),
        KmsKeyName: sdk.String("quos"),
        Name: sdk.String("Jaime Morar Jr."),
        OauthToken: sdk.String("aut"),
        PredefinedACL: operations.StorageObjectsInsertPredefinedACLEnumPublicRead.ToPointer(),
        PrettyPrint: sdk.Bool(false),
        Projection: operations.StorageObjectsInsertProjectionEnumFull.ToPointer(),
        QuotaUser: sdk.String("at"),
        UploadType: sdk.String("possimus"),
        UserIP: sdk.String("neque"),
        UserProject: sdk.String("pariatur"),
    }, operations.StorageObjectsInsertSecurity{
        Option1: &operations.StorageObjectsInsertSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Object != nil {
        // handle response
    }
}
```

## StorageObjectsList

Retrieves a list of objects matching the criteria.

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
    res, err := s.Objects.StorageObjectsList(ctx, operations.StorageObjectsListRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Bucket: "vel",
        Delimiter: sdk.String("sapiente"),
        EndOffset: sdk.String("mollitia"),
        Fields: sdk.String("quae"),
        IncludeTrailingDelimiter: sdk.Bool(false),
        Key: sdk.String("quos"),
        MatchGlob: sdk.String("aperiam"),
        MaxResults: sdk.Int64(251200),
        OauthToken: sdk.String("voluptates"),
        PageToken: sdk.String("ad"),
        Prefix: sdk.String("aliquam"),
        PrettyPrint: sdk.Bool(false),
        Projection: operations.StorageObjectsListProjectionEnumNoACL.ToPointer(),
        QuotaUser: sdk.String("quas"),
        StartOffset: sdk.String("consequuntur"),
        UploadType: sdk.String("maiores"),
        UserIP: sdk.String("inventore"),
        UserProject: sdk.String("aliquid"),
        Versions: sdk.Bool(false),
    }, operations.StorageObjectsListSecurity{
        Option1: &operations.StorageObjectsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Objects != nil {
        // handle response
    }
}
```

## StorageObjectsPatch

Patches an object's metadata.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Objects.StorageObjectsPatch(ctx, operations.StorageObjectsPatchRequest{
        Object1: &shared.Object{
            ACL: []shared.ObjectAccessControl{
                shared.ObjectAccessControl{
                    Bucket: sdk.String("est"),
                    Domain: sdk.String("dolor"),
                    Email: sdk.String("Darius_Runte@yahoo.com"),
                    Entity: sdk.String("ducimus"),
                    EntityID: sdk.String("adipisci"),
                    Etag: sdk.String("recusandae"),
                    Generation: sdk.String("tempora"),
                    ID: sdk.String("84380b1f-6b8c-4a27-9a60-a04c495cc699"),
                    Kind: sdk.String("illo"),
                    Object: sdk.String("nihil"),
                    ProjectTeam: &shared.ObjectAccessControlProjectTeam{
                        ProjectNumber: sdk.String("inventore"),
                        Team: sdk.String("libero"),
                    },
                    Role: sdk.String("ipsam"),
                    SelfLink: sdk.String("quasi"),
                },
                shared.ObjectAccessControl{
                    Bucket: sdk.String("cumque"),
                    Domain: sdk.String("dicta"),
                    Email: sdk.String("Raphael76@hotmail.com"),
                    Entity: sdk.String("delectus"),
                    EntityID: sdk.String("labore"),
                    Etag: sdk.String("expedita"),
                    Generation: sdk.String("corrupti"),
                    ID: sdk.String("88ebdfc4-ccca-499b-87fc-0b2dce10873e"),
                    Kind: sdk.String("tempora"),
                    Object: sdk.String("magni"),
                    ProjectTeam: &shared.ObjectAccessControlProjectTeam{
                        ProjectNumber: sdk.String("rerum"),
                        Team: sdk.String("doloremque"),
                    },
                    Role: sdk.String("voluptatem"),
                    SelfLink: sdk.String("eum"),
                },
                shared.ObjectAccessControl{
                    Bucket: sdk.String("at"),
                    Domain: sdk.String("eum"),
                    Email: sdk.String("Justus_Kuvalis@yahoo.com"),
                    Entity: sdk.String("rerum"),
                    EntityID: sdk.String("deserunt"),
                    Etag: sdk.String("atque"),
                    Generation: sdk.String("nostrum"),
                    ID: sdk.String("81a58208-c54f-4efa-9c95-f2eac5565d30"),
                    Kind: sdk.String("odio"),
                    Object: sdk.String("minus"),
                    ProjectTeam: &shared.ObjectAccessControlProjectTeam{
                        ProjectNumber: sdk.String("asperiores"),
                        Team: sdk.String("recusandae"),
                    },
                    Role: sdk.String("voluptates"),
                    SelfLink: sdk.String("praesentium"),
                },
            },
            Bucket: sdk.String("dicta"),
            CacheControl: sdk.String("fugit"),
            ComponentCount: sdk.Int(25190),
            ContentDisposition: sdk.String("aliquid"),
            ContentEncoding: sdk.String("necessitatibus"),
            ContentLanguage: sdk.String("sed"),
            ContentType: sdk.String("deleniti"),
            Crc32c: sdk.String("sunt"),
            CustomTime: types.MustTimeFromString("2022-01-14T04:07:19.927Z"),
            CustomerEncryption: &shared.ObjectCustomerEncryption{
                EncryptionAlgorithm: sdk.String("laborum"),
                KeySha256: sdk.String("aliquam"),
            },
            Etag: sdk.String("deserunt"),
            EventBasedHold: sdk.Bool(false),
            Generation: sdk.String("modi"),
            ID: sdk.String("1c480d3f-2132-4af0-b102-d514f4cc6f18"),
            Kind: sdk.String("expedita"),
            KmsKeyName: sdk.String("hic"),
            Md5Hash: sdk.String("excepturi"),
            MediaLink: sdk.String("aliquid"),
            Metadata: map[string]string{
                "beatae": "similique",
            },
            Metageneration: sdk.String("ea"),
            Name: sdk.String("Clifford West"),
            Owner: &shared.ObjectOwner{
                Entity: sdk.String("animi"),
                EntityID: sdk.String("laudantium"),
            },
            RetentionExpirationTime: types.MustTimeFromString("2022-02-03T09:12:15.636Z"),
            SelfLink: sdk.String("earum"),
            Size: sdk.String("velit"),
            StorageClass: sdk.String("officiis"),
            TemporaryHold: sdk.Bool(false),
            TimeCreated: types.MustTimeFromString("2022-04-19T18:40:34.391Z"),
            TimeDeleted: types.MustTimeFromString("2021-07-13T19:04:49.388Z"),
            TimeStorageClassUpdated: types.MustTimeFromString("2022-11-13T22:25:09.106Z"),
            Updated: types.MustTimeFromString("2021-10-23T06:28:50.254Z"),
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        Bucket: "quis",
        Fields: sdk.String("facilis"),
        Generation: sdk.String("ipsum"),
        IfGenerationMatch: sdk.String("ut"),
        IfGenerationNotMatch: sdk.String("quaerat"),
        IfMetagenerationMatch: sdk.String("architecto"),
        IfMetagenerationNotMatch: sdk.String("praesentium"),
        Key: sdk.String("eveniet"),
        OauthToken: sdk.String("dolor"),
        ObjectPathParameter: "expedita",
        PredefinedACL: operations.StorageObjectsPatchPredefinedACLEnumProjectPrivate.ToPointer(),
        PrettyPrint: sdk.Bool(false),
        Projection: operations.StorageObjectsPatchProjectionEnumNoACL.ToPointer(),
        QuotaUser: sdk.String("illo"),
        UploadType: sdk.String("minus"),
        UserIP: sdk.String("quos"),
        UserProject: sdk.String("temporibus"),
    }, operations.StorageObjectsPatchSecurity{
        Option1: &operations.StorageObjectsPatchSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Object != nil {
        // handle response
    }
}
```

## StorageObjectsRewrite

Rewrites a source object to a destination object. Optionally overrides metadata.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Objects.StorageObjectsRewrite(ctx, operations.StorageObjectsRewriteRequest{
        Object: &shared.Object{
            ACL: []shared.ObjectAccessControl{
                shared.ObjectAccessControl{
                    Bucket: sdk.String("iusto"),
                    Domain: sdk.String("enim"),
                    Email: sdk.String("Alvah.Von@hotmail.com"),
                    Entity: sdk.String("quae"),
                    EntityID: sdk.String("omnis"),
                    Etag: sdk.String("illum"),
                    Generation: sdk.String("rem"),
                    ID: sdk.String("f84f144f-3e07-4edc-84aa-5f3cabd905a9"),
                    Kind: sdk.String("reprehenderit"),
                    Object: sdk.String("quia"),
                    ProjectTeam: &shared.ObjectAccessControlProjectTeam{
                        ProjectNumber: sdk.String("necessitatibus"),
                        Team: sdk.String("accusantium"),
                    },
                    Role: sdk.String("ad"),
                    SelfLink: sdk.String("nisi"),
                },
                shared.ObjectAccessControl{
                    Bucket: sdk.String("molestiae"),
                    Domain: sdk.String("quia"),
                    Email: sdk.String("Candace_Connelly@yahoo.com"),
                    Entity: sdk.String("eos"),
                    EntityID: sdk.String("repellendus"),
                    Etag: sdk.String("nesciunt"),
                    Generation: sdk.String("ipsa"),
                    ID: sdk.String("9470bf7a-4fa8-47cf-935a-6fae54ebf60c"),
                    Kind: sdk.String("sequi"),
                    Object: sdk.String("sunt"),
                    ProjectTeam: &shared.ObjectAccessControlProjectTeam{
                        ProjectNumber: sdk.String("vitae"),
                        Team: sdk.String("voluptatibus"),
                    },
                    Role: sdk.String("doloremque"),
                    SelfLink: sdk.String("sed"),
                },
                shared.ObjectAccessControl{
                    Bucket: sdk.String("amet"),
                    Domain: sdk.String("rerum"),
                    Email: sdk.String("Ezekiel22@yahoo.com"),
                    Entity: sdk.String("nisi"),
                    EntityID: sdk.String("dignissimos"),
                    Etag: sdk.String("reiciendis"),
                    Generation: sdk.String("itaque"),
                    ID: sdk.String("1a0cc8df-79f0-4a39-ad90-c364b7c15dfb"),
                    Kind: sdk.String("mollitia"),
                    Object: sdk.String("impedit"),
                    ProjectTeam: &shared.ObjectAccessControlProjectTeam{
                        ProjectNumber: sdk.String("accusamus"),
                        Team: sdk.String("et"),
                    },
                    Role: sdk.String("quas"),
                    SelfLink: sdk.String("blanditiis"),
                },
            },
            Bucket: sdk.String("cum"),
            CacheControl: sdk.String("dicta"),
            ComponentCount: sdk.Int(770544),
            ContentDisposition: sdk.String("tempora"),
            ContentEncoding: sdk.String("eveniet"),
            ContentLanguage: sdk.String("repudiandae"),
            ContentType: sdk.String("sed"),
            Crc32c: sdk.String("impedit"),
            CustomTime: types.MustTimeFromString("2021-06-16T09:33:52.132Z"),
            CustomerEncryption: &shared.ObjectCustomerEncryption{
                EncryptionAlgorithm: sdk.String("vel"),
                KeySha256: sdk.String("eligendi"),
            },
            Etag: sdk.String("recusandae"),
            EventBasedHold: sdk.Bool(false),
            Generation: sdk.String("ex"),
            ID: sdk.String("11feeb1c-7cbd-4b6e-ac74-378ba2531774"),
            Kind: sdk.String("odio"),
            KmsKeyName: sdk.String("nulla"),
            Md5Hash: sdk.String("impedit"),
            MediaLink: sdk.String("cupiditate"),
            Metadata: map[string]string{
                "exercitationem": "laborum",
            },
            Metageneration: sdk.String("illum"),
            Name: sdk.String("Kendra Parker"),
            Owner: &shared.ObjectOwner{
                Entity: sdk.String("illum"),
                EntityID: sdk.String("quibusdam"),
            },
            RetentionExpirationTime: types.MustTimeFromString("2022-07-18T10:11:15.515Z"),
            SelfLink: sdk.String("explicabo"),
            Size: sdk.String("consectetur"),
            StorageClass: sdk.String("temporibus"),
            TemporaryHold: sdk.Bool(false),
            TimeCreated: types.MustTimeFromString("2022-10-27T13:33:42.141Z"),
            TimeDeleted: types.MustTimeFromString("2021-12-13T10:52:20.774Z"),
            TimeStorageClassUpdated: types.MustTimeFromString("2021-02-28T14:11:25.648Z"),
            Updated: types.MustTimeFromString("2022-01-15T07:41:08.318Z"),
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        DestinationBucket: "neque",
        DestinationKmsKeyName: sdk.String("officia"),
        DestinationObject: "suscipit",
        DestinationPredefinedACL: operations.StorageObjectsRewriteDestinationPredefinedACLEnumProjectPrivate.ToPointer(),
        Fields: sdk.String("ducimus"),
        IfGenerationMatch: sdk.String("doloremque"),
        IfGenerationNotMatch: sdk.String("perferendis"),
        IfMetagenerationMatch: sdk.String("laudantium"),
        IfMetagenerationNotMatch: sdk.String("iusto"),
        IfSourceGenerationMatch: sdk.String("corrupti"),
        IfSourceGenerationNotMatch: sdk.String("molestiae"),
        IfSourceMetagenerationMatch: sdk.String("quis"),
        IfSourceMetagenerationNotMatch: sdk.String("iure"),
        Key: sdk.String("ab"),
        MaxBytesRewrittenPerCall: sdk.String("quaerat"),
        OauthToken: sdk.String("amet"),
        PrettyPrint: sdk.Bool(false),
        Projection: operations.StorageObjectsRewriteProjectionEnumNoACL.ToPointer(),
        QuotaUser: sdk.String("corporis"),
        RewriteToken: sdk.String("est"),
        SourceBucket: "iure",
        SourceGeneration: sdk.String("quisquam"),
        SourceObject: "provident",
        UploadType: sdk.String("laudantium"),
        UserIP: sdk.String("nam"),
        UserProject: sdk.String("nemo"),
    }, operations.StorageObjectsRewriteSecurity{
        Option1: &operations.StorageObjectsRewriteSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RewriteResponse != nil {
        // handle response
    }
}
```

## StorageObjectsSetIamPolicy

Updates an IAM policy for the specified object.

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
    res, err := s.Objects.StorageObjectsSetIamPolicy(ctx, operations.StorageObjectsSetIamPolicyRequest{
        Policy: &shared.Policy{
            Bindings: []shared.PolicyBindings{
                shared.PolicyBindings{
                    Condition: &shared.Expr{
                        Description: sdk.String("ipsam"),
                        Expression: sdk.String("minima"),
                        Location: sdk.String("tempora"),
                        Title: sdk.String("Mr."),
                    },
                    Members: []string{
                        "doloremque",
                        "fugiat",
                        "numquam",
                    },
                    Role: sdk.String("doloremque"),
                },
                shared.PolicyBindings{
                    Condition: &shared.Expr{
                        Description: sdk.String("cum"),
                        Expression: sdk.String("nobis"),
                        Location: sdk.String("similique"),
                        Title: sdk.String("Miss"),
                    },
                    Members: []string{
                        "nisi",
                        "cumque",
                        "soluta",
                        "fugiat",
                    },
                    Role: sdk.String("laboriosam"),
                },
            },
            Etag: sdk.String("nam"),
            Kind: sdk.String("enim"),
            ResourceID: sdk.String("maiores"),
            Version: sdk.Int(235482),
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        Bucket: "necessitatibus",
        Fields: sdk.String("maxime"),
        Generation: sdk.String("cupiditate"),
        Key: sdk.String("voluptatem"),
        OauthToken: sdk.String("provident"),
        Object: "adipisci",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("accusantium"),
        UploadType: sdk.String("magnam"),
        UserIP: sdk.String("repellat"),
        UserProject: sdk.String("omnis"),
    }, operations.StorageObjectsSetIamPolicySecurity{
        Option1: &operations.StorageObjectsSetIamPolicySecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Policy != nil {
        // handle response
    }
}
```

## StorageObjectsTestIamPermissions

Tests a set of permissions on the given object to see which, if any, are held by the caller.

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
    res, err := s.Objects.StorageObjectsTestIamPermissions(ctx, operations.StorageObjectsTestIamPermissionsRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Bucket: "explicabo",
        Fields: sdk.String("vel"),
        Generation: sdk.String("cum"),
        Key: sdk.String("id"),
        OauthToken: sdk.String("possimus"),
        Object: "fugit",
        Permissions: []string{
            "nostrum",
            "sequi",
        },
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptatum"),
        UploadType: sdk.String("quasi"),
        UserIP: sdk.String("error"),
        UserProject: sdk.String("nobis"),
    }, operations.StorageObjectsTestIamPermissionsSecurity{
        Option1: &operations.StorageObjectsTestIamPermissionsSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TestIamPermissionsResponse != nil {
        // handle response
    }
}
```

## StorageObjectsUpdate

Updates an object's metadata.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Objects.StorageObjectsUpdate(ctx, operations.StorageObjectsUpdateRequest{
        Object1: &shared.Object{
            ACL: []shared.ObjectAccessControl{
                shared.ObjectAccessControl{
                    Bucket: sdk.String("voluptate"),
                    Domain: sdk.String("eius"),
                    Email: sdk.String("Alyce.Volkman2@hotmail.com"),
                    Entity: sdk.String("repudiandae"),
                    EntityID: sdk.String("corporis"),
                    Etag: sdk.String("ea"),
                    Generation: sdk.String("eos"),
                    ID: sdk.String("48fff639-a910-4abd-8ab6-2676696e1ec0"),
                    Kind: sdk.String("alias"),
                    Object: sdk.String("qui"),
                    ProjectTeam: &shared.ObjectAccessControlProjectTeam{
                        ProjectNumber: sdk.String("consequuntur"),
                        Team: sdk.String("vitae"),
                    },
                    Role: sdk.String("quidem"),
                    SelfLink: sdk.String("sequi"),
                },
                shared.ObjectAccessControl{
                    Bucket: sdk.String("amet"),
                    Domain: sdk.String("exercitationem"),
                    Email: sdk.String("Joe_Mills@hotmail.com"),
                    Entity: sdk.String("tempore"),
                    EntityID: sdk.String("amet"),
                    Etag: sdk.String("debitis"),
                    Generation: sdk.String("nobis"),
                    ID: sdk.String("fda8d0c5-49ef-4030-8497-8a61fa1cf206"),
                    Kind: sdk.String("atque"),
                    Object: sdk.String("totam"),
                    ProjectTeam: &shared.ObjectAccessControlProjectTeam{
                        ProjectNumber: sdk.String("tenetur"),
                        Team: sdk.String("voluptate"),
                    },
                    Role: sdk.String("quam"),
                    SelfLink: sdk.String("quod"),
                },
            },
            Bucket: sdk.String("vitae"),
            CacheControl: sdk.String("sapiente"),
            ComponentCount: sdk.Int(968689),
            ContentDisposition: sdk.String("quod"),
            ContentEncoding: sdk.String("voluptate"),
            ContentLanguage: sdk.String("inventore"),
            ContentType: sdk.String("facere"),
            Crc32c: sdk.String("maxime"),
            CustomTime: types.MustTimeFromString("2022-11-13T09:13:55.156Z"),
            CustomerEncryption: &shared.ObjectCustomerEncryption{
                EncryptionAlgorithm: sdk.String("ex"),
                KeySha256: sdk.String("consectetur"),
            },
            Etag: sdk.String("maiores"),
            EventBasedHold: sdk.Bool(false),
            Generation: sdk.String("sed"),
            ID: sdk.String("a3c80a97-ff33-44cd-9f85-7a9e61876c6a"),
            Kind: sdk.String("quidem"),
            KmsKeyName: sdk.String("explicabo"),
            Md5Hash: sdk.String("et"),
            MediaLink: sdk.String("nulla"),
            Metadata: map[string]string{
                "natus": "illum",
            },
            Metageneration: sdk.String("a"),
            Name: sdk.String("Austin Grady"),
            Owner: &shared.ObjectOwner{
                Entity: sdk.String("doloribus"),
                EntityID: sdk.String("recusandae"),
            },
            RetentionExpirationTime: types.MustTimeFromString("2020-07-19T04:55:49.472Z"),
            SelfLink: sdk.String("dignissimos"),
            Size: sdk.String("iste"),
            StorageClass: sdk.String("provident"),
            TemporaryHold: sdk.Bool(false),
            TimeCreated: types.MustTimeFromString("2022-06-05T18:21:29.961Z"),
            TimeDeleted: types.MustTimeFromString("2022-12-13T22:45:33.763Z"),
            TimeStorageClassUpdated: types.MustTimeFromString("2022-08-13T08:50:44.710Z"),
            Updated: types.MustTimeFromString("2022-02-26T17:43:17.857Z"),
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        Bucket: "assumenda",
        Fields: sdk.String("explicabo"),
        Generation: sdk.String("fugiat"),
        IfGenerationMatch: sdk.String("doloremque"),
        IfGenerationNotMatch: sdk.String("voluptatem"),
        IfMetagenerationMatch: sdk.String("alias"),
        IfMetagenerationNotMatch: sdk.String("velit"),
        Key: sdk.String("ullam"),
        OauthToken: sdk.String("quis"),
        ObjectPathParameter: "velit",
        PredefinedACL: operations.StorageObjectsUpdatePredefinedACLEnumBucketOwnerFullControl.ToPointer(),
        PrettyPrint: sdk.Bool(false),
        Projection: operations.StorageObjectsUpdateProjectionEnumNoACL.ToPointer(),
        QuotaUser: sdk.String("maxime"),
        UploadType: sdk.String("recusandae"),
        UserIP: sdk.String("cumque"),
        UserProject: sdk.String("doloremque"),
    }, operations.StorageObjectsUpdateSecurity{
        Option1: &operations.StorageObjectsUpdateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Object != nil {
        // handle response
    }
}
```

## StorageObjectsWatchAll

Watch for changes on all objects in a bucket.

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
    res, err := s.Objects.StorageObjectsWatchAll(ctx, operations.StorageObjectsWatchAllRequest{
        Channel: &shared.Channel{
            Address: sdk.String("4961 Stefanie Parkways"),
            Expiration: sdk.String("dicta"),
            ID: sdk.String("52cb3119-167b-48e3-88db-03408d6d364f"),
            Kind: sdk.String("tenetur"),
            Params: map[string]string{
                "dolore": "enim",
                "ullam": "perspiciatis",
                "alias": "ex",
                "quibusdam": "dicta",
            },
            Payload: sdk.Bool(false),
            ResourceID: sdk.String("quia"),
            ResourceURI: sdk.String("commodi"),
            Token: sdk.String("neque"),
            Type: sdk.String("quibusdam"),
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        Bucket: "numquam",
        Delimiter: sdk.String("rem"),
        EndOffset: sdk.String("officiis"),
        Fields: sdk.String("omnis"),
        IncludeTrailingDelimiter: sdk.Bool(false),
        Key: sdk.String("neque"),
        MaxResults: sdk.Int64(359874),
        OauthToken: sdk.String("quod"),
        PageToken: sdk.String("dolores"),
        Prefix: sdk.String("placeat"),
        PrettyPrint: sdk.Bool(false),
        Projection: operations.StorageObjectsWatchAllProjectionEnumNoACL.ToPointer(),
        QuotaUser: sdk.String("recusandae"),
        StartOffset: sdk.String("quos"),
        UploadType: sdk.String("dicta"),
        UserIP: sdk.String("sapiente"),
        UserProject: sdk.String("ipsum"),
        Versions: sdk.Bool(false),
    }, operations.StorageObjectsWatchAllSecurity{
        Option1: &operations.StorageObjectsWatchAllSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Channel != nil {
        // handle response
    }
}
```
