# Buckets

### Available Operations

* [StorageBucketsDelete](#storagebucketsdelete) - Permanently deletes an empty bucket.
* [StorageBucketsGet](#storagebucketsget) - Returns metadata for the specified bucket.
* [StorageBucketsGetIamPolicy](#storagebucketsgetiampolicy) - Returns an IAM policy for the specified bucket.
* [StorageBucketsInsert](#storagebucketsinsert) - Creates a new bucket.
* [StorageBucketsList](#storagebucketslist) - Retrieves a list of buckets for a given project.
* [StorageBucketsLockRetentionPolicy](#storagebucketslockretentionpolicy) - Locks retention policy on a bucket.
* [StorageBucketsPatch](#storagebucketspatch) - Patches a bucket. Changes to the bucket will be readable immediately after writing, but configuration changes may take time to propagate.
* [StorageBucketsSetIamPolicy](#storagebucketssetiampolicy) - Updates an IAM policy for the specified bucket.
* [StorageBucketsTestIamPermissions](#storagebucketstestiampermissions) - Tests a set of permissions on the given bucket to see which, if any, are held by the caller.
* [StorageBucketsUpdate](#storagebucketsupdate) - Updates a bucket. Changes to the bucket will be readable immediately after writing, but configuration changes may take time to propagate.

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
        Bucket: "fugit",
        Fields: sdk.String("dolorum"),
        IfMetagenerationMatch: sdk.String("excepturi"),
        IfMetagenerationNotMatch: sdk.String("tempora"),
        Key: sdk.String("facilis"),
        OauthToken: sdk.String("tempore"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("labore"),
        UploadType: sdk.String("delectus"),
        UserIP: sdk.String("eum"),
        UserProject: sdk.String("non"),
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
        Bucket: "eligendi",
        Fields: sdk.String("sint"),
        IfMetagenerationMatch: sdk.String("aliquid"),
        IfMetagenerationNotMatch: sdk.String("provident"),
        Key: sdk.String("necessitatibus"),
        OauthToken: sdk.String("sint"),
        PrettyPrint: sdk.Bool(false),
        Projection: operations.StorageBucketsGetProjectionEnumNoACL.ToPointer(),
        QuotaUser: sdk.String("dolor"),
        UploadType: sdk.String("debitis"),
        UserIP: sdk.String("a"),
        UserProject: sdk.String("dolorum"),
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

## StorageBucketsGetIamPolicy

Returns an IAM policy for the specified bucket.

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
    res, err := s.Buckets.StorageBucketsGetIamPolicy(ctx, operations.StorageBucketsGetIamPolicyRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Bucket: "in",
        Fields: sdk.String("in"),
        Key: sdk.String("illum"),
        OauthToken: sdk.String("maiores"),
        OptionsRequestedPolicyVersion: sdk.Int64(699479),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dicta"),
        UploadType: sdk.String("magnam"),
        UserIP: sdk.String("cumque"),
        UserProject: sdk.String("facere"),
    }, operations.StorageBucketsGetIamPolicySecurity{
        Option1: &operations.StorageBucketsGetIamPolicySecurityOption1{
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
                    Bucket: sdk.String("aliquid"),
                    Domain: sdk.String("laborum"),
                    Email: sdk.String("Delphine88@hotmail.com"),
                    Entity: sdk.String("delectus"),
                    EntityID: sdk.String("quidem"),
                    Etag: sdk.String("provident"),
                    ID: sdk.String("ba88f3a6-6997-4074-ba44-69b6e2141959"),
                    Kind: sdk.String("quos"),
                    ProjectTeam: &shared.BucketAccessControlProjectTeam{
                        ProjectNumber: sdk.String("sint"),
                        Team: sdk.String("accusantium"),
                    },
                    Role: sdk.String("mollitia"),
                    SelfLink: sdk.String("reiciendis"),
                },
                shared.BucketAccessControl{
                    Bucket: sdk.String("mollitia"),
                    Domain: sdk.String("ad"),
                    Email: sdk.String("Dallas36@yahoo.com"),
                    Entity: sdk.String("quasi"),
                    EntityID: sdk.String("iure"),
                    Etag: sdk.String("doloribus"),
                    ID: sdk.String("e4c8b711-e5b7-4fd2-ad02-8921cddc6926"),
                    Kind: sdk.String("accusantium"),
                    ProjectTeam: &shared.BucketAccessControlProjectTeam{
                        ProjectNumber: sdk.String("ab"),
                        Team: sdk.String("maiores"),
                    },
                    Role: sdk.String("quidem"),
                    SelfLink: sdk.String("ipsam"),
                },
            },
            Autoclass: &shared.BucketAutoclass{
                Enabled: sdk.Bool(false),
                ToggleTime: types.MustTimeFromString("2022-07-31T16:08:22.625Z"),
            },
            Billing: &shared.BucketBilling{
                RequesterPays: sdk.Bool(false),
            },
            Cors: []shared.BucketCors{
                shared.BucketCors{
                    MaxAgeSeconds: sdk.Int(50588),
                    Method: []string{
                        "nemo",
                        "voluptatibus",
                        "perferendis",
                        "fugiat",
                    },
                    Origin: []string{
                        "aut",
                    },
                    ResponseHeader: []string{
                        "corporis",
                        "hic",
                        "libero",
                        "nobis",
                    },
                },
                shared.BucketCors{
                    MaxAgeSeconds: sdk.Int(171629),
                    Method: []string{
                        "totam",
                        "dignissimos",
                    },
                    Origin: []string{
                        "quis",
                    },
                    ResponseHeader: []string{
                        "eos",
                    },
                },
                shared.BucketCors{
                    MaxAgeSeconds: sdk.Int(18521),
                    Method: []string{
                        "minus",
                    },
                    Origin: []string{
                        "dolor",
                        "vero",
                    },
                    ResponseHeader: []string{
                        "hic",
                        "recusandae",
                    },
                },
            },
            CustomPlacementConfig: &shared.BucketCustomPlacementConfig{
                DataLocations: []string{
                    "facilis",
                    "perspiciatis",
                    "voluptatem",
                },
            },
            DefaultEventBasedHold: sdk.Bool(false),
            DefaultObjectACL: []shared.ObjectAccessControl{
                shared.ObjectAccessControl{
                    Bucket: sdk.String("consequuntur"),
                    Domain: sdk.String("blanditiis"),
                    Email: sdk.String("Amber.Mayert99@yahoo.com"),
                    Entity: sdk.String("earum"),
                    EntityID: sdk.String("modi"),
                    Etag: sdk.String("iste"),
                    Generation: sdk.String("dolorum"),
                    ID: sdk.String("8d9cbf48-6333-423f-9b77-f3a4100674eb"),
                    Kind: sdk.String("voluptatibus"),
                    Object: sdk.String("voluptas"),
                    ProjectTeam: &shared.ObjectAccessControlProjectTeam{
                        ProjectNumber: sdk.String("natus"),
                        Team: sdk.String("eos"),
                    },
                    Role: sdk.String("atque"),
                    SelfLink: sdk.String("sit"),
                },
                shared.ObjectAccessControl{
                    Bucket: sdk.String("fugiat"),
                    Domain: sdk.String("ab"),
                    Email: sdk.String("Marietta_Kris@hotmail.com"),
                    Entity: sdk.String("deleniti"),
                    EntityID: sdk.String("omnis"),
                    Etag: sdk.String("necessitatibus"),
                    Generation: sdk.String("distinctio"),
                    ID: sdk.String("f737ae42-03ce-45e6-a95d-8a0d446ce2af"),
                    Kind: sdk.String("esse"),
                    Object: sdk.String("harum"),
                    ProjectTeam: &shared.ObjectAccessControlProjectTeam{
                        ProjectNumber: sdk.String("iusto"),
                        Team: sdk.String("ipsum"),
                    },
                    Role: sdk.String("quisquam"),
                    SelfLink: sdk.String("tenetur"),
                },
                shared.ObjectAccessControl{
                    Bucket: sdk.String("amet"),
                    Domain: sdk.String("tempore"),
                    Email: sdk.String("Deontae95@hotmail.com"),
                    Entity: sdk.String("totam"),
                    EntityID: sdk.String("nihil"),
                    Etag: sdk.String("sit"),
                    Generation: sdk.String("expedita"),
                    ID: sdk.String("326b5a73-429c-4db1-a842-2bb679d23227"),
                    Kind: sdk.String("sunt"),
                    Object: sdk.String("ullam"),
                    ProjectTeam: &shared.ObjectAccessControlProjectTeam{
                        ProjectNumber: sdk.String("nam"),
                        Team: sdk.String("hic"),
                    },
                    Role: sdk.String("voluptatem"),
                    SelfLink: sdk.String("cumque"),
                },
                shared.ObjectAccessControl{
                    Bucket: sdk.String("soluta"),
                    Domain: sdk.String("nobis"),
                    Email: sdk.String("Stone74@gmail.com"),
                    Entity: sdk.String("quos"),
                    EntityID: sdk.String("tempore"),
                    Etag: sdk.String("cupiditate"),
                    Generation: sdk.String("aperiam"),
                    ID: sdk.String("f3443a11-08e0-4adc-b4b9-21879fce953f"),
                    Kind: sdk.String("voluptate"),
                    Object: sdk.String("consectetur"),
                    ProjectTeam: &shared.ObjectAccessControlProjectTeam{
                        ProjectNumber: sdk.String("vero"),
                        Team: sdk.String("tenetur"),
                    },
                    Role: sdk.String("dignissimos"),
                    SelfLink: sdk.String("hic"),
                },
            },
            Encryption: &shared.BucketEncryption{
                DefaultKmsKeyName: sdk.String("distinctio"),
            },
            Etag: sdk.String("quod"),
            IamConfiguration: &shared.BucketIamConfiguration{
                BucketPolicyOnly: &shared.BucketIamConfigurationBucketPolicyOnly{
                    Enabled: sdk.Bool(false),
                    LockedTime: types.MustTimeFromString("2022-05-15T21:16:33.535Z"),
                },
                PublicAccessPrevention: sdk.String("facilis"),
                UniformBucketLevelAccess: &shared.BucketIamConfigurationUniformBucketLevelAccess{
                    Enabled: sdk.Bool(false),
                    LockedTime: types.MustTimeFromString("2021-07-04T12:52:28.765Z"),
                },
            },
            ID: sdk.String("4dd39c0f-5d2c-4ff7-870a-45626d436813"),
            Kind: sdk.String("maiores"),
            Labels: map[string]string{
                "ex": "nulla",
            },
            Lifecycle: &shared.BucketLifecycle{
                Rule: []shared.BucketLifecycleRule{
                    shared.BucketLifecycleRule{
                        Action: &shared.BucketLifecycleRuleAction{
                            StorageClass: sdk.String("voluptatibus"),
                            Type: sdk.String("nostrum"),
                        },
                        Condition: &shared.BucketLifecycleRuleCondition{
                            Age: sdk.Int(960835),
                            CreatedBefore: types.MustDateFromString("2020-04-13"),
                            CustomTimeBefore: types.MustDateFromString("2022-03-24"),
                            DaysSinceCustomTime: sdk.Int(359271),
                            DaysSinceNoncurrentTime: sdk.Int(333145),
                            IsLive: sdk.Bool(false),
                            MatchesPattern: sdk.String("aliquid"),
                            MatchesPrefix: []string{
                                "magnam",
                            },
                            MatchesStorageClass: []string{
                                "quo",
                                "consectetur",
                            },
                            MatchesSuffix: []string{
                                "aspernatur",
                                "minima",
                                "eaque",
                                "a",
                            },
                            NoncurrentTimeBefore: types.MustDateFromString("2022-12-21"),
                            NumNewerVersions: sdk.Int(11427),
                        },
                    },
                    shared.BucketLifecycleRule{
                        Action: &shared.BucketLifecycleRuleAction{
                            StorageClass: sdk.String("deleniti"),
                            Type: sdk.String("impedit"),
                        },
                        Condition: &shared.BucketLifecycleRuleCondition{
                            Age: sdk.Int(304582),
                            CreatedBefore: types.MustDateFromString("2022-02-12"),
                            CustomTimeBefore: types.MustDateFromString("2022-10-01"),
                            DaysSinceCustomTime: sdk.Int(89603),
                            DaysSinceNoncurrentTime: sdk.Int(677412),
                            IsLive: sdk.Bool(false),
                            MatchesPattern: sdk.String("laborum"),
                            MatchesPrefix: []string{
                                "velit",
                                "eum",
                                "autem",
                                "nobis",
                            },
                            MatchesStorageClass: []string{
                                "assumenda",
                                "nulla",
                                "voluptas",
                            },
                            MatchesSuffix: []string{
                                "quasi",
                                "tempora",
                                "numquam",
                            },
                            NoncurrentTimeBefore: types.MustDateFromString("2022-05-29"),
                            NumNewerVersions: sdk.Int(55374),
                        },
                    },
                    shared.BucketLifecycleRule{
                        Action: &shared.BucketLifecycleRuleAction{
                            StorageClass: sdk.String("molestiae"),
                            Type: sdk.String("magnam"),
                        },
                        Condition: &shared.BucketLifecycleRuleCondition{
                            Age: sdk.Int(487935),
                            CreatedBefore: types.MustDateFromString("2022-07-17"),
                            CustomTimeBefore: types.MustDateFromString("2022-06-23"),
                            DaysSinceCustomTime: sdk.Int(683282),
                            DaysSinceNoncurrentTime: sdk.Int(442015),
                            IsLive: sdk.Bool(false),
                            MatchesPattern: sdk.String("quidem"),
                            MatchesPrefix: []string{
                                "ut",
                                "eum",
                                "suscipit",
                                "assumenda",
                            },
                            MatchesStorageClass: []string{
                                "praesentium",
                            },
                            MatchesSuffix: []string{
                                "veritatis",
                                "ipsa",
                                "id",
                                "quidem",
                            },
                            NoncurrentTimeBefore: types.MustDateFromString("2022-03-22"),
                            NumNewerVersions: sdk.Int(847276),
                        },
                    },
                },
            },
            Location: sdk.String("quo"),
            LocationType: sdk.String("fuga"),
            Logging: &shared.BucketLogging{
                LogBucket: sdk.String("eius"),
                LogObjectPrefix: sdk.String("eos"),
            },
            Metageneration: sdk.String("voluptas"),
            Name: sdk.String("Shelly Altenwerth"),
            Owner: &shared.BucketOwner{
                Entity: sdk.String("ipsam"),
                EntityID: sdk.String("aspernatur"),
            },
            ProjectNumber: sdk.String("sequi"),
            RetentionPolicy: &shared.BucketRetentionPolicy{
                EffectiveTime: types.MustTimeFromString("2021-08-15T10:59:14.485Z"),
                IsLocked: sdk.Bool(false),
                RetentionPeriod: sdk.String("recusandae"),
            },
            Rpo: sdk.String("aperiam"),
            SatisfiesPZS: sdk.Bool(false),
            SelfLink: sdk.String("distinctio"),
            StorageClass: sdk.String("quod"),
            TimeCreated: types.MustTimeFromString("2022-12-03T21:51:40.661Z"),
            Updated: types.MustTimeFromString("2022-06-25T15:00:14.304Z"),
            Versioning: &shared.BucketVersioning{
                Enabled: sdk.Bool(false),
            },
            Website: &shared.BucketWebsite{
                MainPageSuffix: sdk.String("accusamus"),
                NotFoundPage: sdk.String("aliquam"),
            },
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("odio"),
        Key: sdk.String("occaecati"),
        OauthToken: sdk.String("commodi"),
        PredefinedACL: operations.StorageBucketsInsertPredefinedACLEnumPublicReadWrite.ToPointer(),
        PredefinedDefaultObjectACL: operations.StorageBucketsInsertPredefinedDefaultObjectACLEnumBucketOwnerFullControl.ToPointer(),
        PrettyPrint: sdk.Bool(false),
        Project: "deserunt",
        Projection: operations.StorageBucketsInsertProjectionEnumFull.ToPointer(),
        QuotaUser: sdk.String("accusantium"),
        UploadType: sdk.String("porro"),
        UserIP: sdk.String("eum"),
        UserProject: sdk.String("quas"),
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
        Fields: sdk.String("praesentium"),
        Key: sdk.String("consequuntur"),
        MaxResults: sdk.Int64(536178),
        OauthToken: sdk.String("fugit"),
        PageToken: sdk.String("fuga"),
        Prefix: sdk.String("mollitia"),
        PrettyPrint: sdk.Bool(false),
        Project: "incidunt",
        Projection: operations.StorageBucketsListProjectionEnumNoACL.ToPointer(),
        QuotaUser: sdk.String("explicabo"),
        UploadType: sdk.String("minima"),
        UserIP: sdk.String("nisi"),
        UserProject: sdk.String("fugit"),
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

## StorageBucketsLockRetentionPolicy

Locks retention policy on a bucket.

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
    res, err := s.Buckets.StorageBucketsLockRetentionPolicy(ctx, operations.StorageBucketsLockRetentionPolicyRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Bucket: "sapiente",
        Fields: sdk.String("consequuntur"),
        IfMetagenerationMatch: "ratione",
        Key: sdk.String("explicabo"),
        OauthToken: sdk.String("saepe"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("occaecati"),
        UploadType: sdk.String("atque"),
        UserIP: sdk.String("et"),
        UserProject: sdk.String("esse"),
    }, operations.StorageBucketsLockRetentionPolicySecurity{
        Option1: &operations.StorageBucketsLockRetentionPolicySecurityOption1{
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

## StorageBucketsPatch

Patches a bucket. Changes to the bucket will be readable immediately after writing, but configuration changes may take time to propagate.

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
                    Bucket: sdk.String("accusamus"),
                    Domain: sdk.String("veritatis"),
                    Email: sdk.String("Precious.Reilly9@yahoo.com"),
                    Entity: sdk.String("saepe"),
                    EntityID: sdk.String("vel"),
                    Etag: sdk.String("harum"),
                    ID: sdk.String("7b95bc0a-b3c2-40c4-b378-9fd871f99dd2"),
                    Kind: sdk.String("eveniet"),
                    ProjectTeam: &shared.BucketAccessControlProjectTeam{
                        ProjectNumber: sdk.String("asperiores"),
                        Team: sdk.String("facere"),
                    },
                    Role: sdk.String("veritatis"),
                    SelfLink: sdk.String("consequuntur"),
                },
                shared.BucketAccessControl{
                    Bucket: sdk.String("quasi"),
                    Domain: sdk.String("similique"),
                    Email: sdk.String("Grayce93@yahoo.com"),
                    Entity: sdk.String("vel"),
                    EntityID: sdk.String("in"),
                    Etag: sdk.String("eius"),
                    ID: sdk.String("bdb04f15-7560-482d-a8ea-19f1d1705133"),
                    Kind: sdk.String("iste"),
                    ProjectTeam: &shared.BucketAccessControlProjectTeam{
                        ProjectNumber: sdk.String("temporibus"),
                        Team: sdk.String("accusantium"),
                    },
                    Role: sdk.String("rem"),
                    SelfLink: sdk.String("aut"),
                },
                shared.BucketAccessControl{
                    Bucket: sdk.String("laudantium"),
                    Domain: sdk.String("eum"),
                    Email: sdk.String("Anne3@yahoo.com"),
                    Entity: sdk.String("dolor"),
                    EntityID: sdk.String("occaecati"),
                    Etag: sdk.String("numquam"),
                    ID: sdk.String("c26071f9-3f5f-4064-adac-7af515cc413a"),
                    Kind: sdk.String("id"),
                    ProjectTeam: &shared.BucketAccessControlProjectTeam{
                        ProjectNumber: sdk.String("suscipit"),
                        Team: sdk.String("velit"),
                    },
                    Role: sdk.String("culpa"),
                    SelfLink: sdk.String("est"),
                },
                shared.BucketAccessControl{
                    Bucket: sdk.String("recusandae"),
                    Domain: sdk.String("totam"),
                    Email: sdk.String("Herbert.Kuphal@hotmail.com"),
                    Entity: sdk.String("labore"),
                    EntityID: sdk.String("possimus"),
                    Etag: sdk.String("facilis"),
                    ID: sdk.String("b675fd5e-60b3-475e-94f6-fbee41f33317"),
                    Kind: sdk.String("a"),
                    ProjectTeam: &shared.BucketAccessControlProjectTeam{
                        ProjectNumber: sdk.String("debitis"),
                        Team: sdk.String("consectetur"),
                    },
                    Role: sdk.String("corporis"),
                    SelfLink: sdk.String("harum"),
                },
            },
            Autoclass: &shared.BucketAutoclass{
                Enabled: sdk.Bool(false),
                ToggleTime: types.MustTimeFromString("2022-12-10T16:47:53.137Z"),
            },
            Billing: &shared.BucketBilling{
                RequesterPays: sdk.Bool(false),
            },
            Cors: []shared.BucketCors{
                shared.BucketCors{
                    MaxAgeSeconds: sdk.Int(730709),
                    Method: []string{
                        "accusamus",
                    },
                    Origin: []string{
                        "tempora",
                        "aspernatur",
                        "voluptas",
                    },
                    ResponseHeader: []string{
                        "voluptas",
                        "minima",
                    },
                },
                shared.BucketCors{
                    MaxAgeSeconds: sdk.Int(748789),
                    Method: []string{
                        "adipisci",
                        "minus",
                        "dolores",
                    },
                    Origin: []string{
                        "in",
                        "dolore",
                        "aliquam",
                    },
                    ResponseHeader: []string{
                        "temporibus",
                        "ullam",
                        "adipisci",
                        "cum",
                    },
                },
                shared.BucketCors{
                    MaxAgeSeconds: sdk.Int(502389),
                    Method: []string{
                        "hic",
                        "nesciunt",
                        "culpa",
                    },
                    Origin: []string{
                        "pariatur",
                        "totam",
                        "hic",
                    },
                    ResponseHeader: []string{
                        "nobis",
                        "sit",
                    },
                },
                shared.BucketCors{
                    MaxAgeSeconds: sdk.Int(699575),
                    Method: []string{
                        "reiciendis",
                    },
                    Origin: []string{
                        "asperiores",
                    },
                    ResponseHeader: []string{
                        "voluptate",
                        "expedita",
                        "ab",
                    },
                },
            },
            CustomPlacementConfig: &shared.BucketCustomPlacementConfig{
                DataLocations: []string{
                    "dolore",
                    "laborum",
                    "sed",
                },
            },
            DefaultEventBasedHold: sdk.Bool(false),
            DefaultObjectACL: []shared.ObjectAccessControl{
                shared.ObjectAccessControl{
                    Bucket: sdk.String("commodi"),
                    Domain: sdk.String("quidem"),
                    Email: sdk.String("Gene38@gmail.com"),
                    Entity: sdk.String("sapiente"),
                    EntityID: sdk.String("debitis"),
                    Etag: sdk.String("illo"),
                    Generation: sdk.String("reiciendis"),
                    ID: sdk.String("08f4294e-3698-4f44-bf60-3e8b445e80ca"),
                    Kind: sdk.String("veniam"),
                    Object: sdk.String("minima"),
                    ProjectTeam: &shared.ObjectAccessControlProjectTeam{
                        ProjectNumber: sdk.String("recusandae"),
                        Team: sdk.String("reiciendis"),
                    },
                    Role: sdk.String("nulla"),
                    SelfLink: sdk.String("magni"),
                },
                shared.ObjectAccessControl{
                    Bucket: sdk.String("aperiam"),
                    Domain: sdk.String("saepe"),
                    Email: sdk.String("Ernesto.King51@gmail.com"),
                    Entity: sdk.String("exercitationem"),
                    EntityID: sdk.String("praesentium"),
                    Etag: sdk.String("cum"),
                    Generation: sdk.String("laboriosam"),
                    ID: sdk.String("a89fbe3a-5aa8-4e48-a4d0-ab4075088e51"),
                    Kind: sdk.String("blanditiis"),
                    Object: sdk.String("ex"),
                    ProjectTeam: &shared.ObjectAccessControlProjectTeam{
                        ProjectNumber: sdk.String("sed"),
                        Team: sdk.String("sit"),
                    },
                    Role: sdk.String("vel"),
                    SelfLink: sdk.String("nostrum"),
                },
            },
            Encryption: &shared.BucketEncryption{
                DefaultKmsKeyName: sdk.String("saepe"),
            },
            Etag: sdk.String("error"),
            IamConfiguration: &shared.BucketIamConfiguration{
                BucketPolicyOnly: &shared.BucketIamConfigurationBucketPolicyOnly{
                    Enabled: sdk.Bool(false),
                    LockedTime: types.MustTimeFromString("2022-09-21T03:21:52.611Z"),
                },
                PublicAccessPrevention: sdk.String("reiciendis"),
                UniformBucketLevelAccess: &shared.BucketIamConfigurationUniformBucketLevelAccess{
                    Enabled: sdk.Bool(false),
                    LockedTime: types.MustTimeFromString("2022-04-23T19:46:15.105Z"),
                },
            },
            ID: sdk.String("1194b8ab-f603-4a79-b9df-e0ab7da8a50c"),
            Kind: sdk.String("repudiandae"),
            Labels: map[string]string{
                "atque": "reprehenderit",
            },
            Lifecycle: &shared.BucketLifecycle{
                Rule: []shared.BucketLifecycleRule{
                    shared.BucketLifecycleRule{
                        Action: &shared.BucketLifecycleRuleAction{
                            StorageClass: sdk.String("totam"),
                            Type: sdk.String("suscipit"),
                        },
                        Condition: &shared.BucketLifecycleRuleCondition{
                            Age: sdk.Int(693957),
                            CreatedBefore: types.MustDateFromString("2022-09-23"),
                            CustomTimeBefore: types.MustDateFromString("2022-10-09"),
                            DaysSinceCustomTime: sdk.Int(826825),
                            DaysSinceNoncurrentTime: sdk.Int(410301),
                            IsLive: sdk.Bool(false),
                            MatchesPattern: sdk.String("atque"),
                            MatchesPrefix: []string{
                                "officiis",
                                "officiis",
                                "accusamus",
                            },
                            MatchesStorageClass: []string{
                                "minima",
                                "aspernatur",
                                "ex",
                            },
                            MatchesSuffix: []string{
                                "corrupti",
                                "at",
                                "error",
                                "blanditiis",
                            },
                            NoncurrentTimeBefore: types.MustDateFromString("2022-01-29"),
                            NumNewerVersions: sdk.Int(542129),
                        },
                    },
                    shared.BucketLifecycleRule{
                        Action: &shared.BucketLifecycleRuleAction{
                            StorageClass: sdk.String("atque"),
                            Type: sdk.String("sunt"),
                        },
                        Condition: &shared.BucketLifecycleRuleCondition{
                            Age: sdk.Int(923306),
                            CreatedBefore: types.MustDateFromString("2021-05-05"),
                            CustomTimeBefore: types.MustDateFromString("2022-01-12"),
                            DaysSinceCustomTime: sdk.Int(42976),
                            DaysSinceNoncurrentTime: sdk.Int(919783),
                            IsLive: sdk.Bool(false),
                            MatchesPattern: sdk.String("dicta"),
                            MatchesPrefix: []string{
                                "beatae",
                            },
                            MatchesStorageClass: []string{
                                "enim",
                            },
                            MatchesSuffix: []string{
                                "velit",
                                "a",
                            },
                            NoncurrentTimeBefore: types.MustDateFromString("2022-05-26"),
                            NumNewerVersions: sdk.Int(906355),
                        },
                    },
                    shared.BucketLifecycleRule{
                        Action: &shared.BucketLifecycleRuleAction{
                            StorageClass: sdk.String("consequuntur"),
                            Type: sdk.String("occaecati"),
                        },
                        Condition: &shared.BucketLifecycleRuleCondition{
                            Age: sdk.Int(886305),
                            CreatedBefore: types.MustDateFromString("2022-02-09"),
                            CustomTimeBefore: types.MustDateFromString("2022-02-03"),
                            DaysSinceCustomTime: sdk.Int(580887),
                            DaysSinceNoncurrentTime: sdk.Int(160230),
                            IsLive: sdk.Bool(false),
                            MatchesPattern: sdk.String("fugit"),
                            MatchesPrefix: []string{
                                "quis",
                                "reprehenderit",
                                "error",
                            },
                            MatchesStorageClass: []string{
                                "corporis",
                            },
                            MatchesSuffix: []string{
                                "eveniet",
                                "non",
                                "vero",
                            },
                            NoncurrentTimeBefore: types.MustDateFromString("2022-07-26"),
                            NumNewerVersions: sdk.Int(59944),
                        },
                    },
                    shared.BucketLifecycleRule{
                        Action: &shared.BucketLifecycleRuleAction{
                            StorageClass: sdk.String("totam"),
                            Type: sdk.String("quae"),
                        },
                        Condition: &shared.BucketLifecycleRuleCondition{
                            Age: sdk.Int(474668),
                            CreatedBefore: types.MustDateFromString("2022-06-13"),
                            CustomTimeBefore: types.MustDateFromString("2022-02-17"),
                            DaysSinceCustomTime: sdk.Int(898063),
                            DaysSinceNoncurrentTime: sdk.Int(187552),
                            IsLive: sdk.Bool(false),
                            MatchesPattern: sdk.String("laborum"),
                            MatchesPrefix: []string{
                                "voluptatum",
                                "rem",
                                "aliquam",
                            },
                            MatchesStorageClass: []string{
                                "repellat",
                                "alias",
                            },
                            MatchesSuffix: []string{
                                "perspiciatis",
                                "nihil",
                            },
                            NoncurrentTimeBefore: types.MustDateFromString("2022-03-30"),
                            NumNewerVersions: sdk.Int(5189),
                        },
                    },
                },
            },
            Location: sdk.String("maiores"),
            LocationType: sdk.String("reiciendis"),
            Logging: &shared.BucketLogging{
                LogBucket: sdk.String("dolores"),
                LogObjectPrefix: sdk.String("id"),
            },
            Metageneration: sdk.String("minima"),
            Name: sdk.String("Dr. Lee Dooley"),
            Owner: &shared.BucketOwner{
                Entity: sdk.String("quaerat"),
                EntityID: sdk.String("molestiae"),
            },
            ProjectNumber: sdk.String("ex"),
            RetentionPolicy: &shared.BucketRetentionPolicy{
                EffectiveTime: types.MustTimeFromString("2022-05-14T22:22:36.102Z"),
                IsLocked: sdk.Bool(false),
                RetentionPeriod: sdk.String("adipisci"),
            },
            Rpo: sdk.String("debitis"),
            SatisfiesPZS: sdk.Bool(false),
            SelfLink: sdk.String("laudantium"),
            StorageClass: sdk.String("eum"),
            TimeCreated: types.MustTimeFromString("2022-01-27T04:48:14.748Z"),
            Updated: types.MustTimeFromString("2022-05-29T21:22:23.687Z"),
            Versioning: &shared.BucketVersioning{
                Enabled: sdk.Bool(false),
            },
            Website: &shared.BucketWebsite{
                MainPageSuffix: sdk.String("quis"),
                NotFoundPage: sdk.String("eum"),
            },
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        BucketPathParameter: "reiciendis",
        Fields: sdk.String("provident"),
        IfMetagenerationMatch: sdk.String("aspernatur"),
        IfMetagenerationNotMatch: sdk.String("ullam"),
        Key: sdk.String("quasi"),
        OauthToken: sdk.String("animi"),
        PredefinedACL: operations.StorageBucketsPatchPredefinedACLEnumPrivate.ToPointer(),
        PredefinedDefaultObjectACL: operations.StorageBucketsPatchPredefinedDefaultObjectACLEnumPrivate.ToPointer(),
        PrettyPrint: sdk.Bool(false),
        Projection: operations.StorageBucketsPatchProjectionEnumNoACL.ToPointer(),
        QuotaUser: sdk.String("possimus"),
        UploadType: sdk.String("animi"),
        UserIP: sdk.String("ex"),
        UserProject: sdk.String("aliquid"),
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

## StorageBucketsSetIamPolicy

Updates an IAM policy for the specified bucket.

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
    res, err := s.Buckets.StorageBucketsSetIamPolicy(ctx, operations.StorageBucketsSetIamPolicyRequest{
        Policy: &shared.Policy{
            Bindings: []shared.PolicyBindings{
                shared.PolicyBindings{
                    Condition: &shared.Expr{
                        Description: sdk.String("repellat"),
                        Expression: sdk.String("doloribus"),
                        Location: sdk.String("ullam"),
                        Title: sdk.String("Ms."),
                    },
                    Members: []string{
                        "earum",
                        "officia",
                        "laborum",
                    },
                    Role: sdk.String("placeat"),
                },
            },
            Etag: sdk.String("modi"),
            Kind: sdk.String("voluptatibus"),
            ResourceID: sdk.String("molestias"),
            Version: sdk.Int(889794),
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        Bucket: "sapiente",
        Fields: sdk.String("cumque"),
        Key: sdk.String("vitae"),
        OauthToken: sdk.String("rerum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("tempora"),
        UploadType: sdk.String("quis"),
        UserIP: sdk.String("inventore"),
        UserProject: sdk.String("fugit"),
    }, operations.StorageBucketsSetIamPolicySecurity{
        Option1: &operations.StorageBucketsSetIamPolicySecurityOption1{
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

## StorageBucketsTestIamPermissions

Tests a set of permissions on the given bucket to see which, if any, are held by the caller.

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
    res, err := s.Buckets.StorageBucketsTestIamPermissions(ctx, operations.StorageBucketsTestIamPermissionsRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Bucket: "cumque",
        Fields: sdk.String("quae"),
        Key: sdk.String("perferendis"),
        OauthToken: sdk.String("velit"),
        Permissions: []string{
            "eum",
        },
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("eius"),
        UploadType: sdk.String("rem"),
        UserIP: sdk.String("at"),
        UserProject: sdk.String("impedit"),
    }, operations.StorageBucketsTestIamPermissionsSecurity{
        Option1: &operations.StorageBucketsTestIamPermissionsSecurityOption1{
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

## StorageBucketsUpdate

Updates a bucket. Changes to the bucket will be readable immediately after writing, but configuration changes may take time to propagate.

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
                    Bucket: sdk.String("sapiente"),
                    Domain: sdk.String("eum"),
                    Email: sdk.String("Era_Breitenberg@gmail.com"),
                    Entity: sdk.String("earum"),
                    EntityID: sdk.String("soluta"),
                    Etag: sdk.String("hic"),
                    ID: sdk.String("d0e9fe6c-632c-4a3a-ad01-17996312fde0"),
                    Kind: sdk.String("tempora"),
                    ProjectTeam: &shared.BucketAccessControlProjectTeam{
                        ProjectNumber: sdk.String("nihil"),
                        Team: sdk.String("molestiae"),
                    },
                    Role: sdk.String("dicta"),
                    SelfLink: sdk.String("iusto"),
                },
            },
            Autoclass: &shared.BucketAutoclass{
                Enabled: sdk.Bool(false),
                ToggleTime: types.MustTimeFromString("2022-06-29T10:30:00.284Z"),
            },
            Billing: &shared.BucketBilling{
                RequesterPays: sdk.Bool(false),
            },
            Cors: []shared.BucketCors{
                shared.BucketCors{
                    MaxAgeSeconds: sdk.Int(967260),
                    Method: []string{
                        "architecto",
                        "fugiat",
                    },
                    Origin: []string{
                        "dicta",
                    },
                    ResponseHeader: []string{
                        "tempora",
                        "esse",
                    },
                },
                shared.BucketCors{
                    MaxAgeSeconds: sdk.Int(403793),
                    Method: []string{
                        "aliquid",
                    },
                    Origin: []string{
                        "laborum",
                    },
                    ResponseHeader: []string{
                        "nostrum",
                    },
                },
                shared.BucketCors{
                    MaxAgeSeconds: sdk.Int(856756),
                    Method: []string{
                        "aliquid",
                        "officia",
                        "suscipit",
                    },
                    Origin: []string{
                        "perferendis",
                        "eum",
                    },
                    ResponseHeader: []string{
                        "iste",
                        "id",
                    },
                },
                shared.BucketCors{
                    MaxAgeSeconds: sdk.Int(70042),
                    Method: []string{
                        "possimus",
                        "voluptates",
                        "mollitia",
                    },
                    Origin: []string{
                        "libero",
                        "ad",
                        "deleniti",
                    },
                    ResponseHeader: []string{
                        "vitae",
                        "repellendus",
                    },
                },
            },
            CustomPlacementConfig: &shared.BucketCustomPlacementConfig{
                DataLocations: []string{
                    "quo",
                    "ex",
                },
            },
            DefaultEventBasedHold: sdk.Bool(false),
            DefaultObjectACL: []shared.ObjectAccessControl{
                shared.ObjectAccessControl{
                    Bucket: sdk.String("ad"),
                    Domain: sdk.String("expedita"),
                    Email: sdk.String("Kellie.Rippin@gmail.com"),
                    Entity: sdk.String("voluptatum"),
                    EntityID: sdk.String("omnis"),
                    Etag: sdk.String("veritatis"),
                    Generation: sdk.String("rerum"),
                    ID: sdk.String("aa0fe1ad-e008-4e6f-8c5f-350d8cdb5a34"),
                    Kind: sdk.String("inventore"),
                    Object: sdk.String("deleniti"),
                    ProjectTeam: &shared.ObjectAccessControlProjectTeam{
                        ProjectNumber: sdk.String("veritatis"),
                        Team: sdk.String("tempora"),
                    },
                    Role: sdk.String("dolor"),
                    SelfLink: sdk.String("consequatur"),
                },
                shared.ObjectAccessControl{
                    Bucket: sdk.String("architecto"),
                    Domain: sdk.String("sit"),
                    Email: sdk.String("Buford.Bergstrom@gmail.com"),
                    Entity: sdk.String("dolor"),
                    EntityID: sdk.String("fugiat"),
                    Etag: sdk.String("ipsam"),
                    Generation: sdk.String("consequuntur"),
                    ID: sdk.String("08ece7e2-53b6-4684-91c6-c6e205e16dea"),
                    Kind: sdk.String("harum"),
                    Object: sdk.String("sequi"),
                    ProjectTeam: &shared.ObjectAccessControlProjectTeam{
                        ProjectNumber: sdk.String("doloribus"),
                        Team: sdk.String("repudiandae"),
                    },
                    Role: sdk.String("optio"),
                    SelfLink: sdk.String("occaecati"),
                },
            },
            Encryption: &shared.BucketEncryption{
                DefaultKmsKeyName: sdk.String("nemo"),
            },
            Etag: sdk.String("voluptate"),
            IamConfiguration: &shared.BucketIamConfiguration{
                BucketPolicyOnly: &shared.BucketIamConfigurationBucketPolicyOnly{
                    Enabled: sdk.Bool(false),
                    LockedTime: types.MustTimeFromString("2021-09-19T01:59:50.048Z"),
                },
                PublicAccessPrevention: sdk.String("voluptas"),
                UniformBucketLevelAccess: &shared.BucketIamConfigurationUniformBucketLevelAccess{
                    Enabled: sdk.Bool(false),
                    LockedTime: types.MustTimeFromString("2022-08-20T19:22:19.746Z"),
                },
            },
            ID: sdk.String("84273a84-18d1-4623-89fb-0929921aefb9"),
            Kind: sdk.String("delectus"),
            Labels: map[string]string{
                "praesentium": "maxime",
                "magnam": "temporibus",
            },
            Lifecycle: &shared.BucketLifecycle{
                Rule: []shared.BucketLifecycleRule{
                    shared.BucketLifecycleRule{
                        Action: &shared.BucketLifecycleRuleAction{
                            StorageClass: sdk.String("commodi"),
                            Type: sdk.String("itaque"),
                        },
                        Condition: &shared.BucketLifecycleRuleCondition{
                            Age: sdk.Int(415608),
                            CreatedBefore: types.MustDateFromString("2021-02-16"),
                            CustomTimeBefore: types.MustDateFromString("2022-04-12"),
                            DaysSinceCustomTime: sdk.Int(877399),
                            DaysSinceNoncurrentTime: sdk.Int(32901),
                            IsLive: sdk.Bool(false),
                            MatchesPattern: sdk.String("ipsam"),
                            MatchesPrefix: []string{
                                "alias",
                                "quasi",
                            },
                            MatchesStorageClass: []string{
                                "maiores",
                            },
                            MatchesSuffix: []string{
                                "sint",
                                "nulla",
                            },
                            NoncurrentTimeBefore: types.MustDateFromString("2022-01-31"),
                            NumNewerVersions: sdk.Int(364463),
                        },
                    },
                    shared.BucketLifecycleRule{
                        Action: &shared.BucketLifecycleRuleAction{
                            StorageClass: sdk.String("reprehenderit"),
                            Type: sdk.String("est"),
                        },
                        Condition: &shared.BucketLifecycleRuleCondition{
                            Age: sdk.Int(336102),
                            CreatedBefore: types.MustDateFromString("2021-03-29"),
                            CustomTimeBefore: types.MustDateFromString("2020-03-02"),
                            DaysSinceCustomTime: sdk.Int(900103),
                            DaysSinceNoncurrentTime: sdk.Int(991891),
                            IsLive: sdk.Bool(false),
                            MatchesPattern: sdk.String("ex"),
                            MatchesPrefix: []string{
                                "debitis",
                                "delectus",
                            },
                            MatchesStorageClass: []string{
                                "minus",
                            },
                            MatchesSuffix: []string{
                                "laborum",
                                "consectetur",
                                "velit",
                            },
                            NoncurrentTimeBefore: types.MustDateFromString("2022-07-26"),
                            NumNewerVersions: sdk.Int(773035),
                        },
                    },
                    shared.BucketLifecycleRule{
                        Action: &shared.BucketLifecycleRuleAction{
                            StorageClass: sdk.String("magni"),
                            Type: sdk.String("soluta"),
                        },
                        Condition: &shared.BucketLifecycleRuleCondition{
                            Age: sdk.Int(922757),
                            CreatedBefore: types.MustDateFromString("2022-05-31"),
                            CustomTimeBefore: types.MustDateFromString("2022-07-19"),
                            DaysSinceCustomTime: sdk.Int(194023),
                            DaysSinceNoncurrentTime: sdk.Int(493958),
                            IsLive: sdk.Bool(false),
                            MatchesPattern: sdk.String("neque"),
                            MatchesPrefix: []string{
                                "deleniti",
                                "quibusdam",
                                "iure",
                                "odit",
                            },
                            MatchesStorageClass: []string{
                                "vel",
                                "magnam",
                                "quibusdam",
                                "inventore",
                            },
                            MatchesSuffix: []string{
                                "libero",
                                "architecto",
                                "voluptatibus",
                                "quia",
                            },
                            NoncurrentTimeBefore: types.MustDateFromString("2022-02-01"),
                            NumNewerVersions: sdk.Int(247045),
                        },
                    },
                },
            },
            Location: sdk.String("illo"),
            LocationType: sdk.String("accusantium"),
            Logging: &shared.BucketLogging{
                LogBucket: sdk.String("vel"),
                LogObjectPrefix: sdk.String("ea"),
            },
            Metageneration: sdk.String("beatae"),
            Name: sdk.String("Marshall Kemmer"),
            Owner: &shared.BucketOwner{
                Entity: sdk.String("perspiciatis"),
                EntityID: sdk.String("earum"),
            },
            ProjectNumber: sdk.String("dicta"),
            RetentionPolicy: &shared.BucketRetentionPolicy{
                EffectiveTime: types.MustTimeFromString("2020-01-28T09:46:18.788Z"),
                IsLocked: sdk.Bool(false),
                RetentionPeriod: sdk.String("iste"),
            },
            Rpo: sdk.String("itaque"),
            SatisfiesPZS: sdk.Bool(false),
            SelfLink: sdk.String("alias"),
            StorageClass: sdk.String("nisi"),
            TimeCreated: types.MustTimeFromString("2022-04-10T19:32:47.130Z"),
            Updated: types.MustTimeFromString("2022-07-02T05:01:22.981Z"),
            Versioning: &shared.BucketVersioning{
                Enabled: sdk.Bool(false),
            },
            Website: &shared.BucketWebsite{
                MainPageSuffix: sdk.String("dolor"),
                NotFoundPage: sdk.String("iusto"),
            },
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        BucketPathParameter: "sit",
        Fields: sdk.String("doloremque"),
        IfMetagenerationMatch: sdk.String("consequatur"),
        IfMetagenerationNotMatch: sdk.String("officia"),
        Key: sdk.String("recusandae"),
        OauthToken: sdk.String("ea"),
        PredefinedACL: operations.StorageBucketsUpdatePredefinedACLEnumPublicRead.ToPointer(),
        PredefinedDefaultObjectACL: operations.StorageBucketsUpdatePredefinedDefaultObjectACLEnumBucketOwnerRead.ToPointer(),
        PrettyPrint: sdk.Bool(false),
        Projection: operations.StorageBucketsUpdateProjectionEnumNoACL.ToPointer(),
        QuotaUser: sdk.String("placeat"),
        UploadType: sdk.String("perspiciatis"),
        UserIP: sdk.String("expedita"),
        UserProject: sdk.String("deleniti"),
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
