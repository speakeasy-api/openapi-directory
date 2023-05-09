# objects

### Available Operations

* [storageObjectsCompose](#storageobjectscompose) - Concatenates a list of existing objects into a new object in the same bucket.
* [storageObjectsCopy](#storageobjectscopy) - Copies an object to a destination in the same location. Optionally overrides metadata.
* [storageObjectsDelete](#storageobjectsdelete) - Deletes data blobs and associated metadata. Deletions are permanent if versioning is not enabled for the bucket, or if the generation parameter is used.
* [storageObjectsGet](#storageobjectsget) - Retrieves objects or their associated metadata.
* [storageObjectsInsert](#storageobjectsinsert) - Stores new data blobs and associated metadata.
* [storageObjectsList](#storageobjectslist) - Retrieves a list of objects matching the criteria.
* [storageObjectsPatch](#storageobjectspatch) - Updates a data blob's associated metadata. This method supports patch semantics.
* [storageObjectsUpdate](#storageobjectsupdate) - Updates a data blob's associated metadata.
* [storageObjectsWatchAll](#storageobjectswatchall) - Watch for changes on all objects in a bucket.

## storageObjectsCompose

Concatenates a list of existing objects into a new object in the same bucket.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StorageObjectsComposeRequest;
import org.openapis.openapi.models.operations.StorageObjectsComposeResponse;
import org.openapis.openapi.models.operations.StorageObjectsComposeSecurity;
import org.openapis.openapi.models.operations.StorageObjectsComposeSecurityOption1;
import org.openapis.openapi.models.operations.StorageObjectsComposeSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ComposeRequest;
import org.openapis.openapi.models.shared.ComposeRequestSourceObjects;
import org.openapis.openapi.models.shared.ComposeRequestSourceObjectsObjectPreconditions;
import org.openapis.openapi.models.shared.Object;
import org.openapis.openapi.models.shared.ObjectAccessControl;
import org.openapis.openapi.models.shared.ObjectOwner;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StorageObjectsComposeRequest req = new StorageObjectsComposeRequest("placeat", "sit") {{
                composeRequest = new ComposeRequest() {{
                    destination = new Object() {{
                        acl = new org.openapis.openapi.models.shared.ObjectAccessControl[]{{
                            add(new ObjectAccessControl() {{
                                bucket = "ipsa";
                                domain = "voluptates";
                                email = "Amara75@gmail.com";
                                entity = "distinctio";
                                entityId = "voluptatem";
                                etag = "autem";
                                generation = "esse";
                                id = "2d1ad879-eeb9-4665-b85e-fbd02bae0be2";
                                kind = "quibusdam";
                                object = "odio";
                                role = "praesentium";
                                selfLink = "odit";
                            }}),
                            add(new ObjectAccessControl() {{
                                bucket = "explicabo";
                                domain = "corporis";
                                email = "Tressa_Fisher28@yahoo.com";
                                entity = "quidem";
                                entityId = "quis";
                                etag = "beatae";
                                generation = "unde";
                                id = "7f92443d-a7ce-452b-895c-537c6454efb0";
                                kind = "libero";
                                object = "ratione";
                                role = "labore";
                                selfLink = "totam";
                            }}),
                        }};
                        bucket = "occaecati";
                        cacheControl = "voluptas";
                        componentCount = 779180;
                        contentDisposition = "velit";
                        contentEncoding = "minus";
                        contentLanguage = "fuga";
                        contentType = "nostrum";
                        crc32c = "est";
                        etag = "impedit";
                        generation = "delectus";
                        id = "be2fd570-7577-4929-977d-eac646ecb573";
                        kind = "modi";
                        md5Hash = "ipsa";
                        mediaLink = "sint";
                        metadata = new java.util.HashMap<String, String>() {{
                            put("sequi", "repudiandae");
                            put("cum", "dicta");
                            put("earum", "veniam");
                            put("animi", "dolores");
                        }};
                        metageneration = "nam";
                        name = "Louise Tromp IV";
                        owner = new ObjectOwner() {{
                            entity = "maiores";
                            entityId = "veritatis";
                        }};;
                        selfLink = "quasi";
                        size = "laboriosam";
                        storageClass = "pariatur";
                        timeDeleted = OffsetDateTime.parse("2021-11-13T10:48:46.467Z");
                        updated = OffsetDateTime.parse("2022-04-07T10:05:07.368Z");
                    }};;
                    kind = "aliquam";
                    sourceObjects = new org.openapis.openapi.models.shared.ComposeRequestSourceObjects[]{{
                        add(new ComposeRequestSourceObjects() {{
                            generation = "doloribus";
                            name = "Kirk Haley";
                            objectPreconditions = new ComposeRequestSourceObjectsObjectPreconditions() {{
                                ifGenerationMatch = "quas";
                            }};
                        }}),
                        add(new ComposeRequestSourceObjects() {{
                            generation = "totam";
                            name = "Darren Bechtelar V";
                            objectPreconditions = new ComposeRequestSourceObjectsObjectPreconditions() {{
                                ifGenerationMatch = "iste";
                            }};
                        }}),
                    }};
                }};;
                alt = AltEnum.JSON;
                fields = "assumenda";
                ifGenerationMatch = "tempore";
                ifMetagenerationMatch = "libero";
                key = "velit";
                oauthToken = "doloremque";
                prettyPrint = false;
                quotaUser = "delectus";
                userIp = "impedit";
            }};            

            StorageObjectsComposeResponse res = sdk.objects.storageObjectsCompose(req, new StorageObjectsComposeSecurity() {{
                option1 = new StorageObjectsComposeSecurityOption1("cum", "ipsum") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.object != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## storageObjectsCopy

Copies an object to a destination in the same location. Optionally overrides metadata.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StorageObjectsCopyProjectionEnum;
import org.openapis.openapi.models.operations.StorageObjectsCopyRequest;
import org.openapis.openapi.models.operations.StorageObjectsCopyResponse;
import org.openapis.openapi.models.operations.StorageObjectsCopySecurity;
import org.openapis.openapi.models.operations.StorageObjectsCopySecurityOption1;
import org.openapis.openapi.models.operations.StorageObjectsCopySecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Object;
import org.openapis.openapi.models.shared.ObjectAccessControl;
import org.openapis.openapi.models.shared.ObjectOwner;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StorageObjectsCopyRequest req = new StorageObjectsCopyRequest("adipisci", "saepe", "deserunt", "doloremque") {{
                object = new Object() {{
                    acl = new org.openapis.openapi.models.shared.ObjectAccessControl[]{{
                        add(new ObjectAccessControl() {{
                            bucket = "veniam";
                            domain = "libero";
                            email = "Kurt_Krajcik25@gmail.com";
                            entity = "magnam";
                            entityId = "itaque";
                            etag = "sed";
                            generation = "asperiores";
                            id = "52d82d35-13bb-46f4-8b65-6bcdb35ff2e4";
                            kind = "rerum";
                            object = "eos";
                            role = "reprehenderit";
                            selfLink = "nostrum";
                        }}),
                        add(new ObjectAccessControl() {{
                            bucket = "neque";
                            domain = "iusto";
                            email = "Joyce_Romaguera88@yahoo.com";
                            entity = "ducimus";
                            entityId = "dolor";
                            etag = "dicta";
                            generation = "error";
                            id = "c177d525-f77b-4114-aeb5-2ff785fc3781";
                            kind = "labore";
                            object = "assumenda";
                            role = "aliquam";
                            selfLink = "quisquam";
                        }}),
                    }};
                    bucket = "provident";
                    cacheControl = "laudantium";
                    componentCount = 921719;
                    contentDisposition = "consequatur";
                    contentEncoding = "maxime";
                    contentLanguage = "aspernatur";
                    contentType = "nam";
                    crc32c = "expedita";
                    etag = "quas";
                    generation = "provident";
                    id = "eb75dad6-36c6-4005-83d8-bb31180f739a";
                    kind = "necessitatibus";
                    md5Hash = "provident";
                    mediaLink = "repudiandae";
                    metadata = new java.util.HashMap<String, String>() {{
                        put("nemo", "molestiae");
                    }};
                    metageneration = "itaque";
                    name = "Johnnie Baumbach";
                    owner = new ObjectOwner() {{
                        entity = "eos";
                        entityId = "totam";
                    }};;
                    selfLink = "dicta";
                    size = "voluptatem";
                    storageClass = "velit";
                    timeDeleted = OffsetDateTime.parse("2022-11-16T15:13:44.571Z");
                    updated = OffsetDateTime.parse("2022-05-01T11:53:41.043Z");
                }};;
                alt = AltEnum.JSON;
                fields = "occaecati";
                ifGenerationMatch = "atque";
                ifGenerationNotMatch = "beatae";
                ifMetagenerationMatch = "at";
                ifMetagenerationNotMatch = "labore";
                ifSourceGenerationMatch = "minus";
                ifSourceGenerationNotMatch = "esse";
                ifSourceMetagenerationMatch = "voluptatem";
                ifSourceMetagenerationNotMatch = "perferendis";
                key = "rerum";
                oauthToken = "ea";
                prettyPrint = false;
                projection = StorageObjectsCopyProjectionEnum.FULL;
                quotaUser = "dignissimos";
                sourceGeneration = "repellat";
                userIp = "velit";
            }};            

            StorageObjectsCopyResponse res = sdk.objects.storageObjectsCopy(req, new StorageObjectsCopySecurity() {{
                option1 = new StorageObjectsCopySecurityOption1("porro", "provident") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.object != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## storageObjectsDelete

Deletes data blobs and associated metadata. Deletions are permanent if versioning is not enabled for the bucket, or if the generation parameter is used.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StorageObjectsDeleteRequest;
import org.openapis.openapi.models.operations.StorageObjectsDeleteResponse;
import org.openapis.openapi.models.operations.StorageObjectsDeleteSecurity;
import org.openapis.openapi.models.operations.StorageObjectsDeleteSecurityOption1;
import org.openapis.openapi.models.operations.StorageObjectsDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StorageObjectsDeleteRequest req = new StorageObjectsDeleteRequest("consectetur", "eligendi") {{
                alt = AltEnum.JSON;
                fields = "dignissimos";
                generation = "consectetur";
                ifGenerationMatch = "soluta";
                ifGenerationNotMatch = "natus";
                ifMetagenerationMatch = "temporibus";
                ifMetagenerationNotMatch = "officia";
                key = "amet";
                oauthToken = "tenetur";
                prettyPrint = false;
                quotaUser = "aspernatur";
                userIp = "quo";
            }};            

            StorageObjectsDeleteResponse res = sdk.objects.storageObjectsDelete(req, new StorageObjectsDeleteSecurity() {{
                option1 = new StorageObjectsDeleteSecurityOption1("itaque", "illum") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
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

## storageObjectsGet

Retrieves objects or their associated metadata.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StorageObjectsGetProjectionEnum;
import org.openapis.openapi.models.operations.StorageObjectsGetRequest;
import org.openapis.openapi.models.operations.StorageObjectsGetResponse;
import org.openapis.openapi.models.operations.StorageObjectsGetSecurity;
import org.openapis.openapi.models.operations.StorageObjectsGetSecurityOption1;
import org.openapis.openapi.models.operations.StorageObjectsGetSecurityOption2;
import org.openapis.openapi.models.operations.StorageObjectsGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StorageObjectsGetRequest req = new StorageObjectsGetRequest("laborum", "dignissimos") {{
                alt = AltEnum.JSON;
                fields = "vero";
                generation = "qui";
                ifGenerationMatch = "consectetur";
                ifGenerationNotMatch = "repellat";
                ifMetagenerationMatch = "explicabo";
                ifMetagenerationNotMatch = "explicabo";
                key = "exercitationem";
                oauthToken = "nihil";
                prettyPrint = false;
                projection = StorageObjectsGetProjectionEnum.FULL;
                quotaUser = "ab";
                userIp = "illo";
            }};            

            StorageObjectsGetResponse res = sdk.objects.storageObjectsGet(req, new StorageObjectsGetSecurity() {{
                option1 = new StorageObjectsGetSecurityOption1("hic", "deserunt") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.object != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## storageObjectsInsert

Stores new data blobs and associated metadata.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StorageObjectsInsertProjectionEnum;
import org.openapis.openapi.models.operations.StorageObjectsInsertRequest;
import org.openapis.openapi.models.operations.StorageObjectsInsertResponse;
import org.openapis.openapi.models.operations.StorageObjectsInsertSecurity;
import org.openapis.openapi.models.operations.StorageObjectsInsertSecurityOption1;
import org.openapis.openapi.models.operations.StorageObjectsInsertSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Object;
import org.openapis.openapi.models.shared.ObjectAccessControl;
import org.openapis.openapi.models.shared.ObjectOwner;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StorageObjectsInsertRequest req = new StorageObjectsInsertRequest("delectus") {{
                requestBody = "non".getBytes();
                alt = AltEnum.JSON;
                fields = "distinctio";
                ifGenerationMatch = "in";
                ifGenerationNotMatch = "exercitationem";
                ifMetagenerationMatch = "labore";
                ifMetagenerationNotMatch = "numquam";
                key = "repudiandae";
                name = "Maureen Champlin";
                oauthToken = "aperiam";
                prettyPrint = false;
                projection = StorageObjectsInsertProjectionEnum.FULL;
                quotaUser = "deleniti";
                userIp = "enim";
            }};            

            StorageObjectsInsertResponse res = sdk.objects.storageObjectsInsert(req, new StorageObjectsInsertSecurity() {{
                option1 = new StorageObjectsInsertSecurityOption1("voluptate", "similique") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.object != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## storageObjectsList

Retrieves a list of objects matching the criteria.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StorageObjectsListProjectionEnum;
import org.openapis.openapi.models.operations.StorageObjectsListRequest;
import org.openapis.openapi.models.operations.StorageObjectsListResponse;
import org.openapis.openapi.models.operations.StorageObjectsListSecurity;
import org.openapis.openapi.models.operations.StorageObjectsListSecurityOption1;
import org.openapis.openapi.models.operations.StorageObjectsListSecurityOption2;
import org.openapis.openapi.models.operations.StorageObjectsListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StorageObjectsListRequest req = new StorageObjectsListRequest("minima") {{
                alt = AltEnum.JSON;
                delimiter = "libero";
                fields = "magnam";
                key = "sit";
                maxResults = 266788L;
                oauthToken = "eum";
                pageToken = "nesciunt";
                prefix = "mollitia";
                prettyPrint = false;
                projection = StorageObjectsListProjectionEnum.FULL;
                quotaUser = "fugiat";
                userIp = "nostrum";
                versions = false;
            }};            

            StorageObjectsListResponse res = sdk.objects.storageObjectsList(req, new StorageObjectsListSecurity() {{
                option1 = new StorageObjectsListSecurityOption1("molestiae", "veniam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.objects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## storageObjectsPatch

Updates a data blob's associated metadata. This method supports patch semantics.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StorageObjectsPatchProjectionEnum;
import org.openapis.openapi.models.operations.StorageObjectsPatchRequest;
import org.openapis.openapi.models.operations.StorageObjectsPatchResponse;
import org.openapis.openapi.models.operations.StorageObjectsPatchSecurity;
import org.openapis.openapi.models.operations.StorageObjectsPatchSecurityOption1;
import org.openapis.openapi.models.operations.StorageObjectsPatchSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Object;
import org.openapis.openapi.models.shared.ObjectAccessControl;
import org.openapis.openapi.models.shared.ObjectOwner;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StorageObjectsPatchRequest req = new StorageObjectsPatchRequest("reiciendis", "ab") {{
                object1 = new Object() {{
                    acl = new org.openapis.openapi.models.shared.ObjectAccessControl[]{{
                        add(new ObjectAccessControl() {{
                            bucket = "aut";
                            domain = "aut";
                            email = "Jayson67@hotmail.com";
                            entity = "possimus";
                            entityId = "voluptate";
                            etag = "consectetur";
                            generation = "nesciunt";
                            id = "4ec1b781-b36a-4080-88d1-00efada200ef";
                            kind = "voluptatem";
                            object = "incidunt";
                            role = "qui";
                            selfLink = "qui";
                        }}),
                        add(new ObjectAccessControl() {{
                            bucket = "necessitatibus";
                            domain = "harum";
                            email = "Bernardo76@gmail.com";
                            entity = "voluptatibus";
                            entityId = "molestias";
                            etag = "officia";
                            generation = "libero";
                            id = "8366c723-ffda-49e0-abee-4825c1fc0e11";
                            kind = "enim";
                            object = "optio";
                            role = "rem";
                            selfLink = "perferendis";
                        }}),
                    }};
                    bucket = "facilis";
                    cacheControl = "reiciendis";
                    componentCount = 955551;
                    contentDisposition = "iste";
                    contentEncoding = "dicta";
                    contentLanguage = "quos";
                    contentType = "ullam";
                    crc32c = "dolore";
                    etag = "modi";
                    generation = "itaque";
                    id = "c42defcc-e8f1-4977-b73e-63562a7b408f";
                    kind = "accusantium";
                    md5Hash = "veniam";
                    mediaLink = "saepe";
                    metadata = new java.util.HashMap<String, String>() {{
                        put("facere", "aliquam");
                    }};
                    metageneration = "quos";
                    name = "Clint Ortiz";
                    owner = new ObjectOwner() {{
                        entity = "vitae";
                        entityId = "nesciunt";
                    }};;
                    selfLink = "similique";
                    size = "illo";
                    storageClass = "repellat";
                    timeDeleted = OffsetDateTime.parse("2022-01-05T10:05:27.153Z");
                    updated = OffsetDateTime.parse("2021-03-11T08:40:17.658Z");
                }};;
                alt = AltEnum.JSON;
                fields = "incidunt";
                generation = "explicabo";
                ifGenerationMatch = "ipsam";
                ifGenerationNotMatch = "cupiditate";
                ifMetagenerationMatch = "optio";
                ifMetagenerationNotMatch = "alias";
                key = "quidem";
                oauthToken = "nesciunt";
                prettyPrint = false;
                projection = StorageObjectsPatchProjectionEnum.FULL;
                quotaUser = "sapiente";
                userIp = "consequuntur";
            }};            

            StorageObjectsPatchResponse res = sdk.objects.storageObjectsPatch(req, new StorageObjectsPatchSecurity() {{
                option1 = new StorageObjectsPatchSecurityOption1("veniam", "debitis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.object != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## storageObjectsUpdate

Updates a data blob's associated metadata.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StorageObjectsUpdateProjectionEnum;
import org.openapis.openapi.models.operations.StorageObjectsUpdateRequest;
import org.openapis.openapi.models.operations.StorageObjectsUpdateResponse;
import org.openapis.openapi.models.operations.StorageObjectsUpdateSecurity;
import org.openapis.openapi.models.operations.StorageObjectsUpdateSecurityOption1;
import org.openapis.openapi.models.operations.StorageObjectsUpdateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Object;
import org.openapis.openapi.models.shared.ObjectAccessControl;
import org.openapis.openapi.models.shared.ObjectOwner;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StorageObjectsUpdateRequest req = new StorageObjectsUpdateRequest("officia", "sint") {{
                object1 = new Object() {{
                    acl = new org.openapis.openapi.models.shared.ObjectAccessControl[]{{
                        add(new ObjectAccessControl() {{
                            bucket = "numquam";
                            domain = "tenetur";
                            email = "Monserrate40@gmail.com";
                            entity = "minus";
                            entityId = "ab";
                            etag = "beatae";
                            generation = "hic";
                            id = "6c37a512-6243-4835-bbc0-5a23a45cefc5";
                            kind = "doloribus";
                            object = "assumenda";
                            role = "officiis";
                            selfLink = "architecto";
                        }}),
                        add(new ObjectAccessControl() {{
                            bucket = "alias";
                            domain = "culpa";
                            email = "Nettie11@gmail.com";
                            entity = "vel";
                            entityId = "perspiciatis";
                            etag = "debitis";
                            generation = "ullam";
                            id = "10019c6d-c5e3-4476-a799-bfbbe6949fb2";
                            kind = "libero";
                            object = "nam";
                            role = "incidunt";
                            selfLink = "recusandae";
                        }}),
                    }};
                    bucket = "quod";
                    cacheControl = "id";
                    componentCount = 904440;
                    contentDisposition = "autem";
                    contentEncoding = "quo";
                    contentLanguage = "nesciunt";
                    contentType = "illum";
                    crc32c = "nemo";
                    etag = "illum";
                    generation = "facilis";
                    id = "3adebd5d-aea4-4c50-aa8a-a94c02644cf5";
                    kind = "officiis";
                    md5Hash = "unde";
                    mediaLink = "nulla";
                    metadata = new java.util.HashMap<String, String>() {{
                        put("mollitia", "magnam");
                        put("nostrum", "esse");
                        put("corrupti", "fuga");
                    }};
                    metageneration = "facere";
                    name = "Roger O'Connell";
                    owner = new ObjectOwner() {{
                        entity = "doloremque";
                        entityId = "voluptatem";
                    }};;
                    selfLink = "facere";
                    size = "necessitatibus";
                    storageClass = "maxime";
                    timeDeleted = OffsetDateTime.parse("2022-12-13T09:10:32.408Z");
                    updated = OffsetDateTime.parse("2022-05-17T02:04:19.482Z");
                }};;
                alt = AltEnum.JSON;
                fields = "porro";
                generation = "blanditiis";
                ifGenerationMatch = "quae";
                ifGenerationNotMatch = "magni";
                ifMetagenerationMatch = "officiis";
                ifMetagenerationNotMatch = "sed";
                key = "necessitatibus";
                oauthToken = "impedit";
                prettyPrint = false;
                projection = StorageObjectsUpdateProjectionEnum.FULL;
                quotaUser = "excepturi";
                userIp = "a";
            }};            

            StorageObjectsUpdateResponse res = sdk.objects.storageObjectsUpdate(req, new StorageObjectsUpdateSecurity() {{
                option1 = new StorageObjectsUpdateSecurityOption1("maiores", "laudantium") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.object != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## storageObjectsWatchAll

Watch for changes on all objects in a bucket.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StorageObjectsWatchAllProjectionEnum;
import org.openapis.openapi.models.operations.StorageObjectsWatchAllRequest;
import org.openapis.openapi.models.operations.StorageObjectsWatchAllResponse;
import org.openapis.openapi.models.operations.StorageObjectsWatchAllSecurity;
import org.openapis.openapi.models.operations.StorageObjectsWatchAllSecurityOption1;
import org.openapis.openapi.models.operations.StorageObjectsWatchAllSecurityOption2;
import org.openapis.openapi.models.operations.StorageObjectsWatchAllSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Channel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StorageObjectsWatchAllRequest req = new StorageObjectsWatchAllRequest("maiores") {{
                channel = new Channel() {{
                    address = "95139 Frami Flats";
                    expiration = "esse";
                    id = "7c13e902-c141-425b-8960-a668151a472a";
                    kind = "delectus";
                    params = new java.util.HashMap<String, String>() {{
                        put("sed", "nesciunt");
                        put("maxime", "quis");
                        put("cupiditate", "aliquam");
                    }};
                    payload = false;
                    resourceId = "excepturi";
                    resourceUri = "maiores";
                    token = "laudantium";
                    type = "velit";
                }};;
                alt = AltEnum.JSON;
                delimiter = "reiciendis";
                fields = "amet";
                key = "nemo";
                maxResults = 57470L;
                oauthToken = "quisquam";
                pageToken = "tenetur";
                prefix = "quas";
                prettyPrint = false;
                projection = StorageObjectsWatchAllProjectionEnum.FULL;
                quotaUser = "aliquid";
                userIp = "asperiores";
                versions = false;
            }};            

            StorageObjectsWatchAllResponse res = sdk.objects.storageObjectsWatchAll(req, new StorageObjectsWatchAllSecurity() {{
                option1 = new StorageObjectsWatchAllSecurityOption1("a", "nobis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.channel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
