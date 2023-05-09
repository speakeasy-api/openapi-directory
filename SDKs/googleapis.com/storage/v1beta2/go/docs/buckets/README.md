# Buckets

### Available Operations

* [StorageBucketsDelete](#storagebucketsdelete) - Permanently deletes an empty bucket.
* [StorageBucketsGet](#storagebucketsget) - Returns metadata for the specified bucket.
* [StorageBucketsInsert](#storagebucketsinsert) - Creates a new bucket.
* [StorageBucketsList](#storagebucketslist) - Retrieves a list of buckets for a given project.
* [StorageBucketsPatch](#storagebucketspatch) - Updates a bucket. This method supports patch semantics.
* [StorageBucketsUpdate](#storagebucketsupdate) - Updates a bucket.

## StorageBucketsDelete

Permanently deletes an empty bucket.

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
    res, err := s.Buckets.StorageBucketsDelete(ctx, operations.StorageBucketsDeleteRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Bucket: "consequatur",
        Fields: sdk.String("est"),
        IfMetagenerationMatch: sdk.String("quibusdam"),
        IfMetagenerationNotMatch: sdk.String("explicabo"),
        Key: sdk.String("deserunt"),
        OauthToken: sdk.String("distinctio"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quibusdam"),
        UserIP: sdk.String("labore"),
    }, operations.StorageBucketsDeleteSecurity{
        Option1: &operations.StorageBucketsDeleteSecurityOption1{
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

## StorageBucketsGet

Returns metadata for the specified bucket.

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
    res, err := s.Buckets.StorageBucketsGet(ctx, operations.StorageBucketsGetRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Bucket: "modi",
        Fields: sdk.String("qui"),
        IfMetagenerationMatch: sdk.String("aliquid"),
        IfMetagenerationNotMatch: sdk.String("cupiditate"),
        Key: sdk.String("quos"),
        OauthToken: sdk.String("perferendis"),
        PrettyPrint: sdk.Bool(false),
        Projection: operations.StorageBucketsGetProjectionEnumFull.ToPointer(),
        QuotaUser: sdk.String("assumenda"),
        UserIP: sdk.String("ipsam"),
    }, operations.StorageBucketsGetSecurity{
        Option1: &operations.StorageBucketsGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Bucket != nil {
        // handle response
    }
}
```

## StorageBucketsInsert

Creates a new bucket.

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
    res, err := s.Buckets.StorageBucketsInsert(ctx, operations.StorageBucketsInsertRequest{
        Bucket: &shared.Bucket{
            ACL: []shared.BucketAccessControl{
                shared.BucketAccessControl{
                    Bucket: sdk.String("fugit"),
                    Domain: sdk.String("dolorum"),
                    Email: sdk.String("Dominique.Prosacco96@yahoo.com"),
                    Entity: sdk.String("eum"),
                    EntityID: sdk.String("non"),
                    Etag: sdk.String("eligendi"),
                    ID: sdk.String("969e9a3e-fa77-4dfb-94cd-66ae395efb9b"),
                    Kind: sdk.String("id"),
                    Role: sdk.String("blanditiis"),
                    SelfLink: sdk.String("deleniti"),
                },
            },
            Cors: []shared.BucketCors{
                shared.BucketCors{
                    MaxAgeSeconds: sdk.Int(230533),
                    Method: []string{
                        "nisi",
                        "vel",
                        "natus",
                    },
                    Origin: []string{
                        "molestiae",
                        "perferendis",
                        "nihil",
                    },
                    ResponseHeader: []string{
                        "distinctio",
                        "id",
                    },
                },
                shared.BucketCors{
                    MaxAgeSeconds: sdk.Int(287991),
                    Method: []string{
                        "suscipit",
                        "natus",
                    },
                    Origin: []string{
                        "eum",
                        "vero",
                        "aspernatur",
                    },
                    ResponseHeader: []string{
                        "magnam",
                    },
                },
                shared.BucketCors{
                    MaxAgeSeconds: sdk.Int(92373),
                    Method: []string{
                        "ullam",
                        "provident",
                        "quos",
                    },
                    Origin: []string{
                        "accusantium",
                        "mollitia",
                        "reiciendis",
                    },
                    ResponseHeader: []string{
                        "ad",
                        "eum",
                        "dolor",
                    },
                },
                shared.BucketCors{
                    MaxAgeSeconds: sdk.Int(896547),
                    Method: []string{
                        "nemo",
                    },
                    Origin: []string{
                        "iure",
                    },
                    ResponseHeader: []string{
                        "debitis",
                        "eius",
                        "maxime",
                        "deleniti",
                    },
                },
            },
            DefaultObjectACL: []shared.ObjectAccessControl{
                shared.ObjectAccessControl{
                    Bucket: sdk.String("in"),
                    Domain: sdk.String("architecto"),
                    Email: sdk.String("Tevin.Herman99@gmail.com"),
                    Entity: sdk.String("quibusdam"),
                    EntityID: sdk.String("sed"),
                    Etag: sdk.String("saepe"),
                    Generation: sdk.String("pariatur"),
                    ID: sdk.String("028921cd-dc69-4260-9fb5-76b0d5f0d30c"),
                    Kind: sdk.String("corporis"),
                    Object: sdk.String("hic"),
                    Role: sdk.String("libero"),
                    SelfLink: sdk.String("nobis"),
                },
                shared.ObjectAccessControl{
                    Bucket: sdk.String("dolores"),
                    Domain: sdk.String("quis"),
                    Email: sdk.String("Jenifer.Becker@yahoo.com"),
                    Entity: sdk.String("eos"),
                    EntityID: sdk.String("perferendis"),
                    Etag: sdk.String("dolores"),
                    Generation: sdk.String("minus"),
                    ID: sdk.String("73d5fe9b-90c2-4890-9b3f-e49a8d9cbf48"),
                    Kind: sdk.String("aliquid"),
                    Object: sdk.String("dolorem"),
                    Role: sdk.String("dolorem"),
                    SelfLink: sdk.String("dolor"),
                },
                shared.ObjectAccessControl{
                    Bucket: sdk.String("qui"),
                    Domain: sdk.String("ipsum"),
                    Email: sdk.String("Kevin.Ritchie@hotmail.com"),
                    Entity: sdk.String("reiciendis"),
                    EntityID: sdk.String("amet"),
                    Etag: sdk.String("dolorum"),
                    Generation: sdk.String("numquam"),
                    ID: sdk.String("100674eb-f692-480d-9ba7-7a89ebf737ae"),
                    Kind: sdk.String("eius"),
                    Object: sdk.String("aspernatur"),
                    Role: sdk.String("perferendis"),
                    SelfLink: sdk.String("amet"),
                },
            },
            Etag: sdk.String("optio"),
            ID: sdk.String("e5e6a95d-8a0d-4446-8e2a-f7a73cf3be45"),
            Kind: sdk.String("dolorem"),
            Lifecycle: &shared.BucketLifecycle{
                Rule: []shared.BucketLifecycleRule{
                    shared.BucketLifecycleRule{
                        Action: &shared.BucketLifecycleRuleAction{
                            Type: sdk.String("totam"),
                        },
                        Condition: &shared.BucketLifecycleRuleCondition{
                            Age: sdk.Int(471752),
                            CreatedBefore: types.MustDateFromString("2022-04-16"),
                            IsLive: sdk.Bool(false),
                            NumNewerVersions: sdk.Int(207470),
                        },
                    },
                    shared.BucketLifecycleRule{
                        Action: &shared.BucketLifecycleRuleAction{
                            Type: sdk.String("sed"),
                        },
                        Condition: &shared.BucketLifecycleRuleCondition{
                            Age: sdk.Int(424685),
                            CreatedBefore: types.MustDateFromString("2022-04-02"),
                            IsLive: sdk.Bool(false),
                            NumNewerVersions: sdk.Int(646265),
                        },
                    },
                    shared.BucketLifecycleRule{
                        Action: &shared.BucketLifecycleRuleAction{
                            Type: sdk.String("quam"),
                        },
                        Condition: &shared.BucketLifecycleRuleCondition{
                            Age: sdk.Int(214880),
                            CreatedBefore: types.MustDateFromString("2022-10-24"),
                            IsLive: sdk.Bool(false),
                            NumNewerVersions: sdk.Int(586784),
                        },
                    },
                    shared.BucketLifecycleRule{
                        Action: &shared.BucketLifecycleRuleAction{
                            Type: sdk.String("maxime"),
                        },
                        Condition: &shared.BucketLifecycleRuleCondition{
                            Age: sdk.Int(863856),
                            CreatedBefore: types.MustDateFromString("2022-10-07"),
                            IsLive: sdk.Bool(false),
                            NumNewerVersions: sdk.Int(674848),
                        },
                    },
                },
            },
            Location: sdk.String("totam"),
            Logging: &shared.BucketLogging{
                LogBucket: sdk.String("incidunt"),
                LogObjectPrefix: sdk.String("aspernatur"),
            },
            Metageneration: sdk.String("dolores"),
            Name: sdk.String("Cesar Hyatt"),
            Owner: &shared.BucketOwner{
                Entity: sdk.String("temporibus"),
                EntityID: sdk.String("qui"),
            },
            SelfLink: sdk.String("neque"),
            StorageClass: sdk.String("fugit"),
            TimeCreated: types.MustTimeFromString("2022-07-06T20:37:36.497Z"),
            Versioning: &shared.BucketVersioning{
                Enabled: sdk.Bool(false),
            },
            Website: &shared.BucketWebsite{
                MainPageSuffix: sdk.String("sunt"),
                NotFoundPage: sdk.String("ullam"),
            },
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("nam"),
        Key: sdk.String("hic"),
        OauthToken: sdk.String("voluptatem"),
        PrettyPrint: sdk.Bool(false),
        Project: "cumque",
        Projection: operations.StorageBucketsInsertProjectionEnumNoACL.ToPointer(),
        QuotaUser: sdk.String("nobis"),
        UserIP: sdk.String("et"),
    }, operations.StorageBucketsInsertSecurity{
        Option1: &operations.StorageBucketsInsertSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Bucket != nil {
        // handle response
    }
}
```

## StorageBucketsList

Retrieves a list of buckets for a given project.

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
    res, err := s.Buckets.StorageBucketsList(ctx, operations.StorageBucketsListRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("saepe"),
        Key: sdk.String("ipsum"),
        MaxResults: sdk.Int64(83422),
        OauthToken: sdk.String("nobis"),
        PageToken: sdk.String("quos"),
        PrettyPrint: sdk.Bool(false),
        Project: "tempore",
        Projection: operations.StorageBucketsListProjectionEnumNoACL.ToPointer(),
        QuotaUser: sdk.String("aperiam"),
        UserIP: sdk.String("delectus"),
    }, operations.StorageBucketsListSecurity{
        Option1: &operations.StorageBucketsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Buckets != nil {
        // handle response
    }
}
```

## StorageBucketsPatch

Updates a bucket. This method supports patch semantics.

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
    res, err := s.Buckets.StorageBucketsPatch(ctx, operations.StorageBucketsPatchRequest{
        Bucket1: &shared.Bucket{
            ACL: []shared.BucketAccessControl{
                shared.BucketAccessControl{
                    Bucket: sdk.String("dolore"),
                    Domain: sdk.String("labore"),
                    Email: sdk.String("Marianne1@gmail.com"),
                    Entity: sdk.String("quas"),
                    EntityID: sdk.String("itaque"),
                    Etag: sdk.String("consequatur"),
                    ID: sdk.String("adcf4b92-1879-4fce-953f-73ef7fbc7abd"),
                    Kind: sdk.String("ducimus"),
                    Role: sdk.String("dolore"),
                    SelfLink: sdk.String("quibusdam"),
                },
            },
            Cors: []shared.BucketCors{
                shared.BucketCors{
                    MaxAgeSeconds: sdk.Int(194342),
                    Method: []string{
                        "impedit",
                        "aut",
                        "voluptatibus",
                    },
                    Origin: []string{
                        "nulla",
                        "fugit",
                    },
                    ResponseHeader: []string{
                        "maiores",
                        "doloribus",
                        "iusto",
                        "eligendi",
                    },
                },
                shared.BucketCors{
                    MaxAgeSeconds: sdk.Int(497391),
                    Method: []string{
                        "officia",
                    },
                    Origin: []string{
                        "ipsam",
                        "ea",
                    },
                    ResponseHeader: []string{
                        "vel",
                    },
                },
                shared.BucketCors{
                    MaxAgeSeconds: sdk.Int(822118),
                    Method: []string{
                        "ratione",
                        "ex",
                    },
                    Origin: []string{
                        "dicta",
                        "dolor",
                        "maiores",
                    },
                    ResponseHeader: []string{
                        "ex",
                    },
                },
                shared.BucketCors{
                    MaxAgeSeconds: sdk.Int(862192),
                    Method: []string{
                        "voluptatibus",
                        "nostrum",
                        "sapiente",
                    },
                    Origin: []string{
                        "saepe",
                        "ea",
                        "impedit",
                        "corporis",
                    },
                    ResponseHeader: []string{
                        "aliquid",
                        "inventore",
                    },
                },
            },
            DefaultObjectACL: []shared.ObjectAccessControl{
                shared.ObjectAccessControl{
                    Bucket: sdk.String("ea"),
                    Domain: sdk.String("quo"),
                    Email: sdk.String("Tierra5@gmail.com"),
                    Entity: sdk.String("a"),
                    EntityID: sdk.String("libero"),
                    Etag: sdk.String("aut"),
                    Generation: sdk.String("aut"),
                    ID: sdk.String("8c42e141-aac3-466c-8dd6-b14429074747"),
                    Kind: sdk.String("esse"),
                    Object: sdk.String("rem"),
                    Role: sdk.String("fuga"),
                    SelfLink: sdk.String("reprehenderit"),
                },
                shared.ObjectAccessControl{
                    Bucket: sdk.String("quidem"),
                    Domain: sdk.String("fugiat"),
                    Email: sdk.String("Horacio.Hoeger50@gmail.com"),
                    Entity: sdk.String("quisquam"),
                    EntityID: sdk.String("veritatis"),
                    Etag: sdk.String("ipsa"),
                    Generation: sdk.String("id"),
                    ID: sdk.String("b3cdca42-5190-44e5-a3c7-e0bc7178e479"),
                    Kind: sdk.String("commodi"),
                    Object: sdk.String("sapiente"),
                    Role: sdk.String("dolores"),
                    SelfLink: sdk.String("deserunt"),
                },
            },
            Etag: sdk.String("molestiae"),
            ID: sdk.String("0c688282-aa48-4256-af22-2e9817ee17cb"),
            Kind: sdk.String("vero"),
            Lifecycle: &shared.BucketLifecycle{
                Rule: []shared.BucketLifecycleRule{
                    shared.BucketLifecycleRule{
                        Action: &shared.BucketLifecycleRuleAction{
                            Type: sdk.String("quasi"),
                        },
                        Condition: &shared.BucketLifecycleRuleCondition{
                            Age: sdk.Int(904045),
                            CreatedBefore: types.MustDateFromString("2022-04-24"),
                            IsLive: sdk.Bool(false),
                            NumNewerVersions: sdk.Int(473221),
                        },
                    },
                    shared.BucketLifecycleRule{
                        Action: &shared.BucketLifecycleRuleAction{
                            Type: sdk.String("rerum"),
                        },
                        Condition: &shared.BucketLifecycleRuleCondition{
                            Age: sdk.Int(580197),
                            CreatedBefore: types.MustDateFromString("2022-04-14"),
                            IsLive: sdk.Bool(false),
                            NumNewerVersions: sdk.Int(756779),
                        },
                    },
                },
            },
            Location: sdk.String("sit"),
            Logging: &shared.BucketLogging{
                LogBucket: sdk.String("culpa"),
                LogObjectPrefix: sdk.String("tempore"),
            },
            Metageneration: sdk.String("adipisci"),
            Name: sdk.String("Carlos Altenwerth"),
            Owner: &shared.BucketOwner{
                Entity: sdk.String("sapiente"),
                EntityID: sdk.String("consectetur"),
            },
            SelfLink: sdk.String("esse"),
            StorageClass: sdk.String("blanditiis"),
            TimeCreated: types.MustTimeFromString("2021-02-03T18:48:04.995Z"),
            Versioning: &shared.BucketVersioning{
                Enabled: sdk.Bool(false),
            },
            Website: &shared.BucketWebsite{
                MainPageSuffix: sdk.String("nulla"),
                NotFoundPage: sdk.String("quas"),
            },
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        BucketPathParameter: "esse",
        Fields: sdk.String("quasi"),
        IfMetagenerationMatch: sdk.String("a"),
        IfMetagenerationNotMatch: sdk.String("error"),
        Key: sdk.String("sint"),
        OauthToken: sdk.String("pariatur"),
        PrettyPrint: sdk.Bool(false),
        Projection: operations.StorageBucketsPatchProjectionEnumNoACL.ToPointer(),
        QuotaUser: sdk.String("quia"),
        UserIP: sdk.String("eveniet"),
    }, operations.StorageBucketsPatchSecurity{
        Option1: &operations.StorageBucketsPatchSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Bucket != nil {
        // handle response
    }
}
```

## StorageBucketsUpdate

Updates a bucket.

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
    res, err := s.Buckets.StorageBucketsUpdate(ctx, operations.StorageBucketsUpdateRequest{
        Bucket1: &shared.Bucket{
            ACL: []shared.BucketAccessControl{
                shared.BucketAccessControl{
                    Bucket: sdk.String("facere"),
                    Domain: sdk.String("veritatis"),
                    Email: sdk.String("Aurelie.Murphy@gmail.com"),
                    Entity: sdk.String("tenetur"),
                    EntityID: sdk.String("quae"),
                    Etag: sdk.String("earum"),
                    ID: sdk.String("674bdb04-f157-4560-82d6-8ea19f1d1705"),
                    Kind: sdk.String("veritatis"),
                    Role: sdk.String("consectetur"),
                    SelfLink: sdk.String("adipisci"),
                },
                shared.BucketAccessControl{
                    Bucket: sdk.String("iste"),
                    Domain: sdk.String("temporibus"),
                    Email: sdk.String("Joyce.Armstrong@gmail.com"),
                    Entity: sdk.String("mollitia"),
                    EntityID: sdk.String("ab"),
                    Etag: sdk.String("corrupti"),
                    ID: sdk.String("40394c26-071f-493f-9f06-42dac7af515c"),
                    Kind: sdk.String("quod"),
                    Role: sdk.String("labore"),
                    SelfLink: sdk.String("ab"),
                },
                shared.BucketAccessControl{
                    Bucket: sdk.String("adipisci"),
                    Domain: sdk.String("fuga"),
                    Email: sdk.String("George_Franecki@yahoo.com"),
                    Entity: sdk.String("recusandae"),
                    EntityID: sdk.String("totam"),
                    Etag: sdk.String("fugiat"),
                    ID: sdk.String("67864dbb-675f-4d5e-a0b3-75ed4f6fbee4"),
                    Kind: sdk.String("sunt"),
                    Role: sdk.String("asperiores"),
                    SelfLink: sdk.String("adipisci"),
                },
                shared.BucketAccessControl{
                    Bucket: sdk.String("non"),
                    Domain: sdk.String("amet"),
                    Email: sdk.String("Jena.Wiegand35@gmail.com"),
                    Entity: sdk.String("harum"),
                    EntityID: sdk.String("laboriosam"),
                    Etag: sdk.String("ipsa"),
                    ID: sdk.String("eb1ea426-555b-4a3c-a874-4ed53b88f3a8"),
                    Kind: sdk.String("pariatur"),
                    Role: sdk.String("totam"),
                    SelfLink: sdk.String("hic"),
                },
            },
            Cors: []shared.BucketCors{
                shared.BucketCors{
                    MaxAgeSeconds: sdk.Int(750765),
                    Method: []string{
                        "rerum",
                    },
                    Origin: []string{
                        "reiciendis",
                    },
                    ResponseHeader: []string{
                        "asperiores",
                    },
                },
                shared.BucketCors{
                    MaxAgeSeconds: sdk.Int(707918),
                    Method: []string{
                        "expedita",
                        "ab",
                    },
                    Origin: []string{
                        "dolore",
                        "laborum",
                        "sed",
                    },
                    ResponseHeader: []string{
                        "commodi",
                        "quidem",
                    },
                },
            },
            DefaultObjectACL: []shared.ObjectAccessControl{
                shared.ObjectAccessControl{
                    Bucket: sdk.String("voluptas"),
                    Domain: sdk.String("unde"),
                    Email: sdk.String("Geovany.Willms96@gmail.com"),
                    Entity: sdk.String("perferendis"),
                    EntityID: sdk.String("corrupti"),
                    Etag: sdk.String("maiores"),
                    Generation: sdk.String("incidunt"),
                    ID: sdk.String("294e3698-f447-4f60-be8b-445e80ca55ef"),
                    Kind: sdk.String("nulla"),
                    Object: sdk.String("magni"),
                    Role: sdk.String("aperiam"),
                    SelfLink: sdk.String("saepe"),
                },
            },
            Etag: sdk.String("numquam"),
            ID: sdk.String("57e1858b-6a89-4fbe-ba5a-a8e4824d0ab4"),
            Kind: sdk.String("consequatur"),
            Lifecycle: &shared.BucketLifecycle{
                Rule: []shared.BucketLifecycleRule{
                    shared.BucketLifecycleRule{
                        Action: &shared.BucketLifecycleRuleAction{
                            Type: sdk.String("ipsam"),
                        },
                        Condition: &shared.BucketLifecycleRuleCondition{
                            Age: sdk.Int(24527),
                            CreatedBefore: types.MustDateFromString("2021-11-19"),
                            IsLive: sdk.Bool(false),
                            NumNewerVersions: sdk.Int(922112),
                        },
                    },
                    shared.BucketLifecycleRule{
                        Action: &shared.BucketLifecycleRuleAction{
                            Type: sdk.String("corporis"),
                        },
                        Condition: &shared.BucketLifecycleRuleCondition{
                            Age: sdk.Int(89494),
                            CreatedBefore: types.MustDateFromString("2022-03-10"),
                            IsLive: sdk.Bool(false),
                            NumNewerVersions: sdk.Int(153627),
                        },
                    },
                },
            },
            Location: sdk.String("sit"),
            Logging: &shared.BucketLogging{
                LogBucket: sdk.String("vel"),
                LogObjectPrefix: sdk.String("nostrum"),
            },
            Metageneration: sdk.String("saepe"),
            Name: sdk.String("William Gottlieb"),
            Owner: &shared.BucketOwner{
                Entity: sdk.String("harum"),
                EntityID: sdk.String("dicta"),
            },
            SelfLink: sdk.String("architecto"),
            StorageClass: sdk.String("occaecati"),
            TimeCreated: types.MustTimeFromString("2022-04-22T05:26:04.783Z"),
            Versioning: &shared.BucketVersioning{
                Enabled: sdk.Bool(false),
            },
            Website: &shared.BucketWebsite{
                MainPageSuffix: sdk.String("atque"),
                NotFoundPage: sdk.String("laborum"),
            },
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        BucketPathParameter: "nam",
        Fields: sdk.String("tenetur"),
        IfMetagenerationMatch: sdk.String("laboriosam"),
        IfMetagenerationNotMatch: sdk.String("alias"),
        Key: sdk.String("amet"),
        OauthToken: sdk.String("deserunt"),
        PrettyPrint: sdk.Bool(false),
        Projection: operations.StorageBucketsUpdateProjectionEnumFull.ToPointer(),
        QuotaUser: sdk.String("unde"),
        UserIP: sdk.String("reiciendis"),
    }, operations.StorageBucketsUpdateSecurity{
        Option1: &operations.StorageBucketsUpdateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Bucket != nil {
        // handle response
    }
}
```
