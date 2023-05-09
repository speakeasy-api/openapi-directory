# Objects

### Available Operations

* [StorageObjectsCompose](#storageobjectscompose) - Concatenates a list of existing objects into a new object in the same bucket.
* [StorageObjectsCopy](#storageobjectscopy) - Copies an object to a destination in the same location. Optionally overrides metadata.
* [StorageObjectsDelete](#storageobjectsdelete) - Deletes data blobs and associated metadata. Deletions are permanent if versioning is not enabled for the bucket, or if the generation parameter is used.
* [StorageObjectsGet](#storageobjectsget) - Retrieves objects or their associated metadata.
* [StorageObjectsInsert](#storageobjectsinsert) - Stores new data blobs and associated metadata.
* [StorageObjectsList](#storageobjectslist) - Retrieves a list of objects matching the criteria.
* [StorageObjectsPatch](#storageobjectspatch) - Updates a data blob's associated metadata. This method supports patch semantics.
* [StorageObjectsUpdate](#storageobjectsupdate) - Updates a data blob's associated metadata.
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
                        Bucket: sdk.String("alias"),
                        Domain: sdk.String("quasi"),
                        Email: sdk.String("Wilford_Hamill@gmail.com"),
                        Entity: sdk.String("deserunt"),
                        EntityID: sdk.String("esse"),
                        Etag: sdk.String("nemo"),
                        Generation: sdk.String("reprehenderit"),
                        ID: sdk.String("a59ecfef-66ef-41ca-a338-3c2beb477373"),
                        Kind: sdk.String("quo"),
                        Object: sdk.String("deleniti"),
                        Role: sdk.String("quibusdam"),
                        SelfLink: sdk.String("iure"),
                    },
                    shared.ObjectAccessControl{
                        Bucket: sdk.String("odit"),
                        Domain: sdk.String("voluptatibus"),
                        Email: sdk.String("Elisabeth81@yahoo.com"),
                        Entity: sdk.String("libero"),
                        EntityID: sdk.String("architecto"),
                        Etag: sdk.String("voluptatibus"),
                        Generation: sdk.String("quia"),
                        ID: sdk.String("c4310661-e963-449e-9cf9-e06e3a437000"),
                        Kind: sdk.String("officia"),
                        Object: sdk.String("recusandae"),
                        Role: sdk.String("ea"),
                        SelfLink: sdk.String("quidem"),
                    },
                },
                Bucket: sdk.String("voluptas"),
                CacheControl: sdk.String("facilis"),
                ComponentCount: sdk.Int(809365),
                ContentDisposition: sdk.String("perspiciatis"),
                ContentEncoding: sdk.String("expedita"),
                ContentLanguage: sdk.String("deleniti"),
                ContentType: sdk.String("a"),
                Crc32c: sdk.String("voluptate"),
                Etag: sdk.String("ullam"),
                Generation: sdk.String("unde"),
                ID: sdk.String("eac55a97-41d3-4113-9296-5bb8a7202611"),
                Kind: sdk.String("modi"),
                Md5Hash: sdk.String("neque"),
                MediaLink: sdk.String("exercitationem"),
                Metadata: map[string]string{
                    "et": "ipsum",
                    "unde": "nulla",
                    "distinctio": "maxime",
                    "quia": "quia",
                },
                Metageneration: sdk.String("nostrum"),
                Name: sdk.String("Wm Buckridge"),
                Owner: &shared.ObjectOwner{
                    Entity: sdk.String("fugiat"),
                    EntityID: sdk.String("officia"),
                },
                SelfLink: sdk.String("quos"),
                Size: sdk.String("placeat"),
                StorageClass: sdk.String("sit"),
                TimeDeleted: types.MustTimeFromString("2022-12-11T01:52:16.024Z"),
                Updated: types.MustTimeFromString("2022-10-05T07:59:39.108Z"),
            },
            Kind: sdk.String("aperiam"),
            SourceObjects: []shared.ComposeRequestSourceObjects{
                shared.ComposeRequestSourceObjects{
                    Generation: sdk.String("dolore"),
                    Name: sdk.String("Kelvin Bartoletti"),
                    ObjectPreconditions: &shared.ComposeRequestSourceObjectsObjectPreconditions{
                        IfGenerationMatch: sdk.String("dolores"),
                    },
                },
                shared.ComposeRequestSourceObjects{
                    Generation: sdk.String("assumenda"),
                    Name: sdk.String("Jodi Schumm"),
                    ObjectPreconditions: &shared.ComposeRequestSourceObjectsObjectPreconditions{
                        IfGenerationMatch: sdk.String("provident"),
                    },
                },
                shared.ComposeRequestSourceObjects{
                    Generation: sdk.String("accusamus"),
                    Name: sdk.String("Garry Mayer"),
                    ObjectPreconditions: &shared.ComposeRequestSourceObjectsObjectPreconditions{
                        IfGenerationMatch: sdk.String("ipsam"),
                    },
                },
            },
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        DestinationBucket: "rerum",
        DestinationObject: "laudantium",
        Fields: sdk.String("corporis"),
        IfGenerationMatch: sdk.String("officiis"),
        IfMetagenerationMatch: sdk.String("voluptatibus"),
        Key: sdk.String("cum"),
        OauthToken: sdk.String("at"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("alias"),
        UserIP: sdk.String("quia"),
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

Copies an object to a destination in the same location. Optionally overrides metadata.

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
                    Bucket: sdk.String("fuga"),
                    Domain: sdk.String("repudiandae"),
                    Email: sdk.String("Mercedes84@gmail.com"),
                    Entity: sdk.String("odio"),
                    EntityID: sdk.String("praesentium"),
                    Etag: sdk.String("odit"),
                    Generation: sdk.String("explicabo"),
                    ID: sdk.String("59e3ea4b-5197-4f92-843d-a7ce52b895c5"),
                    Kind: sdk.String("neque"),
                    Object: sdk.String("in"),
                    Role: sdk.String("minus"),
                    SelfLink: sdk.String("eum"),
                },
                shared.ObjectAccessControl{
                    Bucket: sdk.String("modi"),
                    Domain: sdk.String("corporis"),
                    Email: sdk.String("Taya.Wolff72@gmail.com"),
                    Entity: sdk.String("ratione"),
                    EntityID: sdk.String("labore"),
                    Etag: sdk.String("totam"),
                    Generation: sdk.String("occaecati"),
                    ID: sdk.String("6c3ca5ac-fbe2-4fd5-b075-77929177deac"),
                    Kind: sdk.String("ex"),
                    Object: sdk.String("quaerat"),
                    Role: sdk.String("commodi"),
                    SelfLink: sdk.String("officiis"),
                },
                shared.ObjectAccessControl{
                    Bucket: sdk.String("placeat"),
                    Domain: sdk.String("quidem"),
                    Email: sdk.String("Jalyn5@yahoo.com"),
                    Entity: sdk.String("sint"),
                    EntityID: sdk.String("vero"),
                    Etag: sdk.String("sequi"),
                    Generation: sdk.String("repudiandae"),
                    ID: sdk.String("b1e5a2b1-2eb0-47f1-96db-99545fc95fa8"),
                    Kind: sdk.String("totam"),
                    Object: sdk.String("molestias"),
                    Role: sdk.String("odio"),
                    SelfLink: sdk.String("eaque"),
                },
            },
            Bucket: sdk.String("saepe"),
            CacheControl: sdk.String("architecto"),
            ComponentCount: sdk.Int(554645),
            ContentDisposition: sdk.String("iste"),
            ContentEncoding: sdk.String("assumenda"),
            ContentLanguage: sdk.String("tempore"),
            ContentType: sdk.String("libero"),
            Crc32c: sdk.String("velit"),
            Etag: sdk.String("doloremque"),
            Generation: sdk.String("delectus"),
            ID: sdk.String("cb33ea05-5b19-47cd-84e2-f52d82d3513b"),
            Kind: sdk.String("tempore"),
            Md5Hash: sdk.String("nisi"),
            MediaLink: sdk.String("voluptatibus"),
            Metadata: map[string]string{
                "blanditiis": "distinctio",
                "nisi": "quis",
            },
            Metageneration: sdk.String("nisi"),
            Name: sdk.String("Roosevelt Schultz"),
            Owner: &shared.ObjectOwner{
                Entity: sdk.String("ad"),
                EntityID: sdk.String("voluptatibus"),
            },
            SelfLink: sdk.String("voluptatibus"),
            Size: sdk.String("consequuntur"),
            StorageClass: sdk.String("debitis"),
            TimeDeleted: types.MustTimeFromString("2022-04-20T03:52:12.133Z"),
            Updated: types.MustTimeFromString("2022-07-24T02:47:29.895Z"),
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        DestinationBucket: "nostrum",
        DestinationObject: "neque",
        Fields: sdk.String("iusto"),
        IfGenerationMatch: sdk.String("est"),
        IfGenerationNotMatch: sdk.String("rem"),
        IfMetagenerationMatch: sdk.String("eligendi"),
        IfMetagenerationNotMatch: sdk.String("fugiat"),
        IfSourceGenerationMatch: sdk.String("unde"),
        IfSourceGenerationNotMatch: sdk.String("officiis"),
        IfSourceMetagenerationMatch: sdk.String("ducimus"),
        IfSourceMetagenerationNotMatch: sdk.String("dolor"),
        Key: sdk.String("dicta"),
        OauthToken: sdk.String("error"),
        PrettyPrint: sdk.Bool(false),
        Projection: operations.StorageObjectsCopyProjectionEnumNoACL.ToPointer(),
        QuotaUser: sdk.String("vitae"),
        SourceBucket: "dignissimos",
        SourceGeneration: sdk.String("esse"),
        SourceObject: "fugiat",
        UserIP: sdk.String("ad"),
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

Deletes data blobs and associated metadata. Deletions are permanent if versioning is not enabled for the bucket, or if the generation parameter is used.

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
        Bucket: "aspernatur",
        Fields: sdk.String("enim"),
        Generation: sdk.String("delectus"),
        IfGenerationMatch: sdk.String("iusto"),
        IfGenerationNotMatch: sdk.String("dignissimos"),
        IfMetagenerationMatch: sdk.String("libero"),
        IfMetagenerationNotMatch: sdk.String("illo"),
        Key: sdk.String("ab"),
        OauthToken: sdk.String("incidunt"),
        Object: "accusamus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("saepe"),
        UserIP: sdk.String("tempore"),
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

Retrieves objects or their associated metadata.

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
        Bucket: "veniam",
        Fields: sdk.String("eos"),
        Generation: sdk.String("reiciendis"),
        IfGenerationMatch: sdk.String("earum"),
        IfGenerationNotMatch: sdk.String("reprehenderit"),
        IfMetagenerationMatch: sdk.String("praesentium"),
        IfMetagenerationNotMatch: sdk.String("nemo"),
        Key: sdk.String("repellat"),
        OauthToken: sdk.String("quisquam"),
        Object: "sequi",
        PrettyPrint: sdk.Bool(false),
        Projection: operations.StorageObjectsGetProjectionEnumFull.ToPointer(),
        QuotaUser: sdk.String("deleniti"),
        UserIP: sdk.String("illo"),
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

## StorageObjectsInsert

Stores new data blobs and associated metadata.

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
        RequestBody: []byte("labore"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Bucket: "assumenda",
        Fields: sdk.String("aliquam"),
        IfGenerationMatch: sdk.String("quisquam"),
        IfGenerationNotMatch: sdk.String("provident"),
        IfMetagenerationMatch: sdk.String("laudantium"),
        IfMetagenerationNotMatch: sdk.String("repudiandae"),
        Key: sdk.String("consequatur"),
        Name: sdk.String("Adam Reilly"),
        OauthToken: sdk.String("provident"),
        PrettyPrint: sdk.Bool(false),
        Projection: operations.StorageObjectsInsertProjectionEnumNoACL.ToPointer(),
        QuotaUser: sdk.String("rerum"),
        UserIP: sdk.String("dignissimos"),
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
        Bucket: "corporis",
        Delimiter: sdk.String("vero"),
        Fields: sdk.String("similique"),
        Key: sdk.String("repellendus"),
        MaxResults: sdk.Int64(434827),
        OauthToken: sdk.String("dolorem"),
        PageToken: sdk.String("commodi"),
        Prefix: sdk.String("impedit"),
        PrettyPrint: sdk.Bool(false),
        Projection: operations.StorageObjectsListProjectionEnumFull.ToPointer(),
        QuotaUser: sdk.String("aut"),
        UserIP: sdk.String("voluptatem"),
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

Updates a data blob's associated metadata. This method supports patch semantics.

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
                    Bucket: sdk.String("quae"),
                    Domain: sdk.String("amet"),
                    Email: sdk.String("Joel.Powlowski9@hotmail.com"),
                    Entity: sdk.String("dicta"),
                    EntityID: sdk.String("laudantium"),
                    Etag: sdk.String("doloremque"),
                    Generation: sdk.String("earum"),
                    ID: sdk.String("739ae9e0-57eb-4809-a281-0331f3981d4c"),
                    Kind: sdk.String("esse"),
                    Object: sdk.String("voluptatem"),
                    Role: sdk.String("perferendis"),
                    SelfLink: sdk.String("rerum"),
                },
                shared.ObjectAccessControl{
                    Bucket: sdk.String("ea"),
                    Domain: sdk.String("aperiam"),
                    Email: sdk.String("Zoey_Frami23@yahoo.com"),
                    Entity: sdk.String("eligendi"),
                    EntityID: sdk.String("dignissimos"),
                    Etag: sdk.String("consectetur"),
                    Generation: sdk.String("soluta"),
                    ID: sdk.String("9da3f2ce-da7e-423f-a257-411faf4b7544"),
                    Kind: sdk.String("repudiandae"),
                    Object: sdk.String("modi"),
                    Role: sdk.String("in"),
                    SelfLink: sdk.String("explicabo"),
                },
            },
            Bucket: sdk.String("accusamus"),
            CacheControl: sdk.String("rem"),
            ComponentCount: sdk.Int(44016),
            ContentDisposition: sdk.String("odit"),
            ContentEncoding: sdk.String("deleniti"),
            ContentLanguage: sdk.String("enim"),
            ContentType: sdk.String("voluptate"),
            Crc32c: sdk.String("similique"),
            Etag: sdk.String("minima"),
            Generation: sdk.String("libero"),
            ID: sdk.String("40463a7d-575f-4140-8e76-4ad7334ec1b7"),
            Kind: sdk.String("quas"),
            Md5Hash: sdk.String("et"),
            MediaLink: sdk.String("facilis"),
            Metadata: map[string]string{
                "autem": "fuga",
            },
            Metageneration: sdk.String("alias"),
            Name: sdk.String("David Lubowitz"),
            Owner: &shared.ObjectOwner{
                Entity: sdk.String("veritatis"),
                EntityID: sdk.String("quae"),
            },
            SelfLink: sdk.String("eaque"),
            Size: sdk.String("saepe"),
            StorageClass: sdk.String("delectus"),
            TimeDeleted: types.MustTimeFromString("2021-04-13T22:16:25.275Z"),
            Updated: types.MustTimeFromString("2022-09-12T00:28:57.628Z"),
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        Bucket: "voluptatem",
        Fields: sdk.String("alias"),
        Generation: sdk.String("eveniet"),
        IfGenerationMatch: sdk.String("hic"),
        IfGenerationNotMatch: sdk.String("voluptatem"),
        IfMetagenerationMatch: sdk.String("incidunt"),
        IfMetagenerationNotMatch: sdk.String("qui"),
        Key: sdk.String("qui"),
        OauthToken: sdk.String("necessitatibus"),
        ObjectPathParameter: "harum",
        PrettyPrint: sdk.Bool(false),
        Projection: operations.StorageObjectsPatchProjectionEnumFull.ToPointer(),
        QuotaUser: sdk.String("beatae"),
        UserIP: sdk.String("aliquid"),
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

## StorageObjectsUpdate

Updates a data blob's associated metadata.

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
                    Bucket: sdk.String("optio"),
                    Domain: sdk.String("voluptatibus"),
                    Email: sdk.String("Luciano.Renner@yahoo.com"),
                    Entity: sdk.String("aliquid"),
                    EntityID: sdk.String("ea"),
                    Etag: sdk.String("impedit"),
                    Generation: sdk.String("ducimus"),
                    ID: sdk.String("23ffda9e-06be-4e48-a5c1-fc0e115c80bf"),
                    Kind: sdk.String("a"),
                    Object: sdk.String("iste"),
                    Role: sdk.String("dicta"),
                    SelfLink: sdk.String("quos"),
                },
                shared.ObjectAccessControl{
                    Bucket: sdk.String("ullam"),
                    Domain: sdk.String("dolore"),
                    Email: sdk.String("Tobin16@gmail.com"),
                    Entity: sdk.String("assumenda"),
                    EntityID: sdk.String("vero"),
                    Etag: sdk.String("doloribus"),
                    Generation: sdk.String("impedit"),
                    ID: sdk.String("ce8f1977-773e-4635-a2a7-b408f05e3d48"),
                    Kind: sdk.String("doloribus"),
                    Object: sdk.String("fugiat"),
                    Role: sdk.String("est"),
                    SelfLink: sdk.String("delectus"),
                },
            },
            Bucket: sdk.String("velit"),
            CacheControl: sdk.String("vitae"),
            ComponentCount: sdk.Int(201096),
            ContentDisposition: sdk.String("similique"),
            ContentEncoding: sdk.String("illo"),
            ContentLanguage: sdk.String("repellat"),
            ContentType: sdk.String("nemo"),
            Crc32c: sdk.String("doloribus"),
            Etag: sdk.String("possimus"),
            Generation: sdk.String("unde"),
            ID: sdk.String("4259c0b3-6f25-4ea9-84f3-b756c11f6c37"),
            Kind: sdk.String("fuga"),
            Md5Hash: sdk.String("minima"),
            MediaLink: sdk.String("architecto"),
            Metadata: map[string]string{
                "aliquid": "magni",
            },
            Metageneration: sdk.String("incidunt"),
            Name: sdk.String("Maxine Ernser"),
            Owner: &shared.ObjectOwner{
                Entity: sdk.String("facilis"),
                EntityID: sdk.String("impedit"),
            },
            SelfLink: sdk.String("sit"),
            Size: sdk.String("nemo"),
            StorageClass: sdk.String("culpa"),
            TimeDeleted: types.MustTimeFromString("2022-10-08T20:11:43.176Z"),
            Updated: types.MustTimeFromString("2022-06-18T20:13:03.373Z"),
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        Bucket: "veniam",
        Fields: sdk.String("quod"),
        Generation: sdk.String("itaque"),
        IfGenerationMatch: sdk.String("a"),
        IfGenerationNotMatch: sdk.String("quisquam"),
        IfMetagenerationMatch: sdk.String("enim"),
        IfMetagenerationNotMatch: sdk.String("doloribus"),
        Key: sdk.String("assumenda"),
        OauthToken: sdk.String("officiis"),
        ObjectPathParameter: "architecto",
        PrettyPrint: sdk.Bool(false),
        Projection: operations.StorageObjectsUpdateProjectionEnumFull.ToPointer(),
        QuotaUser: sdk.String("culpa"),
        UserIP: sdk.String("ipsa"),
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
            Address: sdk.String("811 Laurie Turnpike"),
            Expiration: sdk.String("ullam"),
            ID: sdk.String("10019c6d-c5e3-4476-a799-bfbbe6949fb2"),
            Kind: sdk.String("libero"),
            Params: map[string]string{
                "incidunt": "recusandae",
                "quod": "id",
                "saepe": "autem",
            },
            Payload: sdk.Bool(false),
            ResourceID: sdk.String("quo"),
            ResourceURI: sdk.String("nesciunt"),
            Token: sdk.String("illum"),
            Type: sdk.String("nemo"),
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        Bucket: "illum",
        Delimiter: sdk.String("facilis"),
        Fields: sdk.String("non"),
        Key: sdk.String("mollitia"),
        MaxResults: sdk.Int64(827051),
        OauthToken: sdk.String("recusandae"),
        PageToken: sdk.String("distinctio"),
        Prefix: sdk.String("pariatur"),
        PrettyPrint: sdk.Bool(false),
        Projection: operations.StorageObjectsWatchAllProjectionEnumFull.ToPointer(),
        QuotaUser: sdk.String("facere"),
        UserIP: sdk.String("laborum"),
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
