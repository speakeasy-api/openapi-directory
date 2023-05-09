# objects

### Available Operations

* [storageObjectsCompose](#storageobjectscompose) - Concatenates a list of existing objects into a new object in the same bucket.
* [storageObjectsCopy](#storageobjectscopy) - Copies a source object to a destination object. Optionally overrides metadata.
* [storageObjectsDelete](#storageobjectsdelete) - Deletes an object and its metadata. Deletions are permanent if versioning is not enabled for the bucket, or if the generation parameter is used.
* [storageObjectsGet](#storageobjectsget) - Retrieves an object or its metadata.
* [storageObjectsGetIamPolicy](#storageobjectsgetiampolicy) - Returns an IAM policy for the specified object.
* [storageObjectsInsert](#storageobjectsinsert) - Stores a new object and metadata.
* [storageObjectsList](#storageobjectslist) - Retrieves a list of objects matching the criteria.
* [storageObjectsPatch](#storageobjectspatch) - Patches an object's metadata.
* [storageObjectsRewrite](#storageobjectsrewrite) - Rewrites a source object to a destination object. Optionally overrides metadata.
* [storageObjectsSetIamPolicy](#storageobjectssetiampolicy) - Updates an IAM policy for the specified object.
* [storageObjectsTestIamPermissions](#storageobjectstestiampermissions) - Tests a set of permissions on the given object to see which, if any, are held by the caller.
* [storageObjectsUpdate](#storageobjectsupdate) - Updates an object's metadata.
* [storageObjectsWatchAll](#storageobjectswatchall) - Watch for changes on all objects in a bucket.

## storageObjectsCompose

Concatenates a list of existing objects into a new object in the same bucket.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StorageObjectsComposeDestinationPredefinedACLEnum;
import org.openapis.openapi.models.operations.StorageObjectsComposeRequest;
import org.openapis.openapi.models.operations.StorageObjectsComposeResponse;
import org.openapis.openapi.models.operations.StorageObjectsComposeSecurity;
import org.openapis.openapi.models.operations.StorageObjectsComposeSecurityOption1;
import org.openapis.openapi.models.operations.StorageObjectsComposeSecurityOption2;
import org.openapis.openapi.models.operations.StorageObjectsComposeSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ComposeRequest;
import org.openapis.openapi.models.shared.ComposeRequestSourceObjects;
import org.openapis.openapi.models.shared.ComposeRequestSourceObjectsObjectPreconditions;
import org.openapis.openapi.models.shared.Object;
import org.openapis.openapi.models.shared.ObjectAccessControl;
import org.openapis.openapi.models.shared.ObjectAccessControlProjectTeam;
import org.openapis.openapi.models.shared.ObjectCustomerEncryption;
import org.openapis.openapi.models.shared.ObjectOwner;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StorageObjectsComposeRequest req = new StorageObjectsComposeRequest("nihil", "non") {{
                composeRequest = new ComposeRequest() {{
                    destination = new Object() {{
                        acl = new org.openapis.openapi.models.shared.ObjectAccessControl[]{{
                            add(new ObjectAccessControl() {{
                                bucket = "illo";
                                domain = "hic";
                                email = "Violette.Friesen34@yahoo.com";
                                entity = "labore";
                                entityId = "numquam";
                                etag = "repudiandae";
                                generation = "modi";
                                id = "72e80285-7a5b-4404-a3a7-d575f1400e76";
                                kind = "numquam";
                                object = "dolorum";
                                projectTeam = new ObjectAccessControlProjectTeam() {{
                                    projectNumber = "possimus";
                                    team = "voluptate";
                                }};
                                role = "consectetur";
                                selfLink = "nesciunt";
                            }}),
                        }};
                        bucket = "quaerat";
                        cacheControl = "itaque";
                        componentCount = 791228;
                        contentDisposition = "sunt";
                        contentEncoding = "distinctio";
                        contentLanguage = "iusto";
                        contentType = "quas";
                        crc32c = "et";
                        customTime = OffsetDateTime.parse("2022-07-17T15:04:57.362Z");
                        customerEncryption = new ObjectCustomerEncryption() {{
                            encryptionAlgorithm = "autem";
                            keySha256 = "fuga";
                        }};;
                        etag = "alias";
                        eventBasedHold = false;
                        generation = "rem";
                        id = "088d100e-fada-4200-af04-22eb2164cf9a";
                        kind = "libero";
                        kmsKeyName = "totam";
                        md5Hash = "sequi";
                        mediaLink = "aliquid";
                        metadata = new java.util.HashMap<String, String>() {{
                            put("impedit", "ducimus");
                            put("odit", "velit");
                        }};
                        metageneration = "reiciendis";
                        name = "Drew Osinski";
                        owner = new ObjectOwner() {{
                            entity = "doloremque";
                            entityId = "nisi";
                        }};;
                        retentionExpirationTime = OffsetDateTime.parse("2021-02-24T20:48:23.002Z");
                        selfLink = "voluptates";
                        size = "non";
                        storageClass = "rem";
                        temporaryHold = false;
                        timeCreated = OffsetDateTime.parse("2022-08-24T16:59:25.397Z");
                        timeDeleted = OffsetDateTime.parse("2022-08-22T07:06:40.070Z");
                        timeStorageClassUpdated = OffsetDateTime.parse("2020-09-26T09:11:55.543Z");
                        updated = OffsetDateTime.parse("2022-02-11T23:12:30.713Z");
                    }};;
                    kind = "architecto";
                    sourceObjects = new org.openapis.openapi.models.shared.ComposeRequestSourceObjects[]{{
                        add(new ComposeRequestSourceObjects() {{
                            generation = "enim";
                            name = "Ian Auer";
                            objectPreconditions = new ComposeRequestSourceObjectsObjectPreconditions() {{
                                ifGenerationMatch = "a";
                            }};
                        }}),
                    }};
                }};;
                alt = AltEnum.JSON;
                destinationPredefinedAcl = StorageObjectsComposeDestinationPredefinedACLEnum.PRIVATE_;
                fields = "dicta";
                ifGenerationMatch = "quos";
                ifMetagenerationMatch = "ullam";
                key = "dolore";
                kmsKeyName = "modi";
                oauthToken = "itaque";
                prettyPrint = false;
                quotaUser = "maxime";
                uploadType = "modi";
                userIp = "consequuntur";
                userProject = "assumenda";
            }};            

            StorageObjectsComposeResponse res = sdk.objects.storageObjectsCompose(req, new StorageObjectsComposeSecurity() {{
                option1 = new StorageObjectsComposeSecurityOption1("vero", "doloribus") {{
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

Copies a source object to a destination object. Optionally overrides metadata.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StorageObjectsCopyDestinationPredefinedACLEnum;
import org.openapis.openapi.models.operations.StorageObjectsCopyProjectionEnum;
import org.openapis.openapi.models.operations.StorageObjectsCopyRequest;
import org.openapis.openapi.models.operations.StorageObjectsCopyResponse;
import org.openapis.openapi.models.operations.StorageObjectsCopySecurity;
import org.openapis.openapi.models.operations.StorageObjectsCopySecurityOption1;
import org.openapis.openapi.models.operations.StorageObjectsCopySecurityOption2;
import org.openapis.openapi.models.operations.StorageObjectsCopySecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Object;
import org.openapis.openapi.models.shared.ObjectAccessControl;
import org.openapis.openapi.models.shared.ObjectAccessControlProjectTeam;
import org.openapis.openapi.models.shared.ObjectCustomerEncryption;
import org.openapis.openapi.models.shared.ObjectOwner;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StorageObjectsCopyRequest req = new StorageObjectsCopyRequest("impedit", "porro", "accusamus", "totam") {{
                object = new Object() {{
                    acl = new org.openapis.openapi.models.shared.ObjectAccessControl[]{{
                        add(new ObjectAccessControl() {{
                            bucket = "ab";
                            domain = "sint";
                            email = "Jaden.Kessler@yahoo.com";
                            entity = "debitis";
                            entityId = "vel";
                            etag = "neque";
                            generation = "corporis";
                            id = "62a7b408-f05e-43d4-8fda-f313a1f5fd94";
                            kind = "explicabo";
                            object = "ipsam";
                            projectTeam = new ObjectAccessControlProjectTeam() {{
                                projectNumber = "cupiditate";
                                team = "optio";
                            }};
                            role = "alias";
                            selfLink = "quidem";
                        }}),
                        add(new ObjectAccessControl() {{
                            bucket = "nesciunt";
                            domain = "commodi";
                            email = "Casey_Harris57@hotmail.com";
                            entity = "ut";
                            entityId = "numquam";
                            etag = "tenetur";
                            generation = "adipisci";
                            id = "b756c11f-6c37-4a51-a624-3835bbc05a23";
                            kind = "deserunt";
                            object = "modi";
                            projectTeam = new ObjectAccessControlProjectTeam() {{
                                projectNumber = "veniam";
                                team = "quod";
                            }};
                            role = "itaque";
                            selfLink = "a";
                        }}),
                        add(new ObjectAccessControl() {{
                            bucket = "quisquam";
                            domain = "enim";
                            email = "Reyna0@hotmail.com";
                            entity = "culpa";
                            entityId = "ipsa";
                            etag = "nobis";
                            generation = "necessitatibus";
                            id = "2169e510-019c-46dc-9e34-762799bfbbe6";
                            kind = "unde";
                            object = "modi";
                            projectTeam = new ObjectAccessControlProjectTeam() {{
                                projectNumber = "perspiciatis";
                                team = "hic";
                            }};
                            role = "cum";
                            selfLink = "aspernatur";
                        }}),
                        add(new ObjectAccessControl() {{
                            bucket = "libero";
                            domain = "nam";
                            email = "Tiana_Schmeler@gmail.com";
                            entity = "autem";
                            entityId = "quo";
                            etag = "nesciunt";
                            generation = "illum";
                            id = "5db3adeb-d5da-4ea4-8506-a8aa94c02644";
                            kind = "eligendi";
                            object = "hic";
                            projectTeam = new ObjectAccessControlProjectTeam() {{
                                projectNumber = "nostrum";
                                team = "officiis";
                            }};
                            role = "unde";
                            selfLink = "nulla";
                        }}),
                    }};
                    bucket = "error";
                    cacheControl = "mollitia";
                    componentCount = 298613;
                    contentDisposition = "nostrum";
                    contentEncoding = "esse";
                    contentLanguage = "corrupti";
                    contentType = "fuga";
                    crc32c = "facere";
                    customTime = OffsetDateTime.parse("2022-09-15T00:31:09.505Z");
                    customerEncryption = new ObjectCustomerEncryption() {{
                        encryptionAlgorithm = "deserunt";
                        keySha256 = "quod";
                    }};;
                    etag = "laboriosam";
                    eventBasedHold = false;
                    generation = "doloremque";
                    id = "0dec001a-c802-4e2e-809f-f8f0f816ff34";
                    kind = "esse";
                    kmsKeyName = "in";
                    md5Hash = "eligendi";
                    mediaLink = "quasi";
                    metadata = new java.util.HashMap<String, String>() {{
                        put("vero", "excepturi");
                    }};
                    metageneration = "accusantium";
                    name = "Leticia Braun Sr.";
                    owner = new ObjectOwner() {{
                        entity = "corporis";
                        entityId = "rerum";
                    }};;
                    retentionExpirationTime = OffsetDateTime.parse("2022-05-18T01:24:07.279Z");
                    selfLink = "vel";
                    size = "accusantium";
                    storageClass = "id";
                    temporaryHold = false;
                    timeCreated = OffsetDateTime.parse("2022-08-07T09:12:40.710Z");
                    timeDeleted = OffsetDateTime.parse("2022-10-30T08:52:41.857Z");
                    timeStorageClassUpdated = OffsetDateTime.parse("2022-12-09T02:50:43.097Z");
                    updated = OffsetDateTime.parse("2022-06-11T23:23:54.406Z");
                }};;
                alt = AltEnum.JSON;
                destinationKmsKeyName = "quam";
                destinationPredefinedAcl = StorageObjectsCopyDestinationPredefinedACLEnum.BUCKET_OWNER_FULL_CONTROL;
                fields = "deserunt";
                ifGenerationMatch = "delectus";
                ifGenerationNotMatch = "omnis";
                ifMetagenerationMatch = "sed";
                ifMetagenerationNotMatch = "nesciunt";
                ifSourceGenerationMatch = "maxime";
                ifSourceGenerationNotMatch = "quis";
                ifSourceMetagenerationMatch = "cupiditate";
                ifSourceMetagenerationNotMatch = "aliquam";
                key = "excepturi";
                oauthToken = "maiores";
                prettyPrint = false;
                projection = StorageObjectsCopyProjectionEnum.NO_ACL;
                quotaUser = "velit";
                sourceGeneration = "reiciendis";
                uploadType = "amet";
                userIp = "nemo";
                userProject = "ipsa";
            }};            

            StorageObjectsCopyResponse res = sdk.objects.storageObjectsCopy(req, new StorageObjectsCopySecurity() {{
                option1 = new StorageObjectsCopySecurityOption1("quisquam", "tenetur") {{
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

Deletes an object and its metadata. Deletions are permanent if versioning is not enabled for the bucket, or if the generation parameter is used.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StorageObjectsDeleteRequest;
import org.openapis.openapi.models.operations.StorageObjectsDeleteResponse;
import org.openapis.openapi.models.operations.StorageObjectsDeleteSecurity;
import org.openapis.openapi.models.operations.StorageObjectsDeleteSecurityOption1;
import org.openapis.openapi.models.operations.StorageObjectsDeleteSecurityOption2;
import org.openapis.openapi.models.operations.StorageObjectsDeleteSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StorageObjectsDeleteRequest req = new StorageObjectsDeleteRequest("quas", "molestiae") {{
                alt = AltEnum.JSON;
                fields = "aliquid";
                generation = "asperiores";
                ifGenerationMatch = "a";
                ifGenerationNotMatch = "nobis";
                ifMetagenerationMatch = "perspiciatis";
                ifMetagenerationNotMatch = "accusantium";
                key = "dicta";
                oauthToken = "minus";
                prettyPrint = false;
                quotaUser = "commodi";
                uploadType = "eveniet";
                userIp = "porro";
                userProject = "tempore";
            }};            

            StorageObjectsDeleteResponse res = sdk.objects.storageObjectsDelete(req, new StorageObjectsDeleteSecurity() {{
                option1 = new StorageObjectsDeleteSecurityOption1("quidem", "modi") {{
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

Retrieves an object or its metadata.

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
import org.openapis.openapi.models.operations.StorageObjectsGetSecurityOption4;
import org.openapis.openapi.models.operations.StorageObjectsGetSecurityOption5;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StorageObjectsGetRequest req = new StorageObjectsGetRequest("voluptates", "fugit") {{
                alt = AltEnum.JSON;
                fields = "eius";
                generation = "sequi";
                ifGenerationMatch = "eligendi";
                ifGenerationNotMatch = "asperiores";
                ifMetagenerationMatch = "esse";
                ifMetagenerationNotMatch = "blanditiis";
                key = "sint";
                oauthToken = "repellat";
                prettyPrint = false;
                projection = StorageObjectsGetProjectionEnum.NO_ACL;
                quotaUser = "animi";
                uploadType = "maiores";
                userIp = "itaque";
                userProject = "nulla";
            }};            

            StorageObjectsGetResponse res = sdk.objects.storageObjectsGet(req, new StorageObjectsGetSecurity() {{
                option1 = new StorageObjectsGetSecurityOption1("deserunt", "corporis") {{
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

## storageObjectsGetIamPolicy

Returns an IAM policy for the specified object.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StorageObjectsGetIamPolicyRequest;
import org.openapis.openapi.models.operations.StorageObjectsGetIamPolicyResponse;
import org.openapis.openapi.models.operations.StorageObjectsGetIamPolicySecurity;
import org.openapis.openapi.models.operations.StorageObjectsGetIamPolicySecurityOption1;
import org.openapis.openapi.models.operations.StorageObjectsGetIamPolicySecurityOption2;
import org.openapis.openapi.models.operations.StorageObjectsGetIamPolicySecurityOption3;
import org.openapis.openapi.models.operations.StorageObjectsGetIamPolicySecurityOption4;
import org.openapis.openapi.models.operations.StorageObjectsGetIamPolicySecurityOption5;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StorageObjectsGetIamPolicyRequest req = new StorageObjectsGetIamPolicyRequest("velit", "officiis") {{
                alt = AltEnum.JSON;
                fields = "enim";
                generation = "officia";
                key = "saepe";
                oauthToken = "eum";
                prettyPrint = false;
                quotaUser = "repudiandae";
                uploadType = "accusantium";
                userIp = "officia";
                userProject = "impedit";
            }};            

            StorageObjectsGetIamPolicyResponse res = sdk.objects.storageObjectsGetIamPolicy(req, new StorageObjectsGetIamPolicySecurity() {{
                option1 = new StorageObjectsGetIamPolicySecurityOption1("quasi", "blanditiis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.policy != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## storageObjectsInsert

Stores a new object and metadata.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StorageObjectsInsertPredefinedACLEnum;
import org.openapis.openapi.models.operations.StorageObjectsInsertProjectionEnum;
import org.openapis.openapi.models.operations.StorageObjectsInsertRequest;
import org.openapis.openapi.models.operations.StorageObjectsInsertResponse;
import org.openapis.openapi.models.operations.StorageObjectsInsertSecurity;
import org.openapis.openapi.models.operations.StorageObjectsInsertSecurityOption1;
import org.openapis.openapi.models.operations.StorageObjectsInsertSecurityOption2;
import org.openapis.openapi.models.operations.StorageObjectsInsertSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Object;
import org.openapis.openapi.models.shared.ObjectAccessControl;
import org.openapis.openapi.models.shared.ObjectAccessControlProjectTeam;
import org.openapis.openapi.models.shared.ObjectCustomerEncryption;
import org.openapis.openapi.models.shared.ObjectOwner;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StorageObjectsInsertRequest req = new StorageObjectsInsertRequest("eius") {{
                requestBody = "quisquam".getBytes();
                alt = AltEnum.JSON;
                contentEncoding = "eos";
                fields = "nobis";
                ifGenerationMatch = "natus";
                ifGenerationNotMatch = "minus";
                ifMetagenerationMatch = "quia";
                ifMetagenerationNotMatch = "magnam";
                key = "reprehenderit";
                kmsKeyName = "quod";
                name = "Byron Farrell";
                oauthToken = "laborum";
                predefinedAcl = StorageObjectsInsertPredefinedACLEnum.BUCKET_OWNER_FULL_CONTROL;
                prettyPrint = false;
                projection = StorageObjectsInsertProjectionEnum.FULL;
                quotaUser = "necessitatibus";
                uploadType = "architecto";
                userIp = "molestias";
                userProject = "dolore";
            }};            

            StorageObjectsInsertResponse res = sdk.objects.storageObjectsInsert(req, new StorageObjectsInsertSecurity() {{
                option1 = new StorageObjectsInsertSecurityOption1("sunt", "maiores") {{
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
import org.openapis.openapi.models.operations.StorageObjectsListSecurityOption4;
import org.openapis.openapi.models.operations.StorageObjectsListSecurityOption5;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StorageObjectsListRequest req = new StorageObjectsListRequest("neque") {{
                alt = AltEnum.JSON;
                delimiter = "odit";
                endOffset = "earum";
                fields = "veniam";
                includeTrailingDelimiter = false;
                key = "ipsam";
                matchGlob = "eaque";
                maxResults = 350387L;
                oauthToken = "veniam";
                pageToken = "nihil";
                prefix = "ad";
                prettyPrint = false;
                projection = StorageObjectsListProjectionEnum.FULL;
                quotaUser = "tenetur";
                startOffset = "quis";
                uploadType = "quibusdam";
                userIp = "nemo";
                userProject = "suscipit";
                versions = false;
            }};            

            StorageObjectsListResponse res = sdk.objects.storageObjectsList(req, new StorageObjectsListSecurity() {{
                option1 = new StorageObjectsListSecurityOption1("pariatur", "sit") {{
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

Patches an object's metadata.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StorageObjectsPatchPredefinedACLEnum;
import org.openapis.openapi.models.operations.StorageObjectsPatchProjectionEnum;
import org.openapis.openapi.models.operations.StorageObjectsPatchRequest;
import org.openapis.openapi.models.operations.StorageObjectsPatchResponse;
import org.openapis.openapi.models.operations.StorageObjectsPatchSecurity;
import org.openapis.openapi.models.operations.StorageObjectsPatchSecurityOption1;
import org.openapis.openapi.models.operations.StorageObjectsPatchSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Object;
import org.openapis.openapi.models.shared.ObjectAccessControl;
import org.openapis.openapi.models.shared.ObjectAccessControlProjectTeam;
import org.openapis.openapi.models.shared.ObjectCustomerEncryption;
import org.openapis.openapi.models.shared.ObjectOwner;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StorageObjectsPatchRequest req = new StorageObjectsPatchRequest("quidem", "repellendus") {{
                object1 = new Object() {{
                    acl = new org.openapis.openapi.models.shared.ObjectAccessControl[]{{
                        add(new ObjectAccessControl() {{
                            bucket = "id";
                            domain = "sapiente";
                            email = "Ressie.Zieme24@gmail.com";
                            entity = "pariatur";
                            entityId = "harum";
                            etag = "dolore";
                            generation = "voluptatibus";
                            id = "62cba3f8-941a-4ebc-8b80-a6924d3b2ecf";
                            kind = "minus";
                            object = "quo";
                            projectTeam = new ObjectAccessControlProjectTeam() {{
                                projectNumber = "quos";
                                team = "asperiores";
                            }};
                            role = "voluptatum";
                            selfLink = "iste";
                        }}),
                    }};
                    bucket = "corporis";
                    cacheControl = "accusantium";
                    componentCount = 75850;
                    contentDisposition = "aut";
                    contentEncoding = "doloribus";
                    contentLanguage = "nostrum";
                    contentType = "at";
                    crc32c = "possimus";
                    customTime = OffsetDateTime.parse("2022-02-18T20:39:35.698Z");
                    customerEncryption = new ObjectCustomerEncryption() {{
                        encryptionAlgorithm = "vel";
                        keySha256 = "sapiente";
                    }};;
                    etag = "mollitia";
                    eventBasedHold = false;
                    generation = "quae";
                    id = "804e54c8-2f16-48a3-a3c8-873e484380b1";
                    kind = "tenetur";
                    kmsKeyName = "autem";
                    md5Hash = "quidem";
                    mediaLink = "totam";
                    metadata = new java.util.HashMap<String, String>() {{
                        put("deserunt", "magni");
                        put("nihil", "voluptas");
                        put("animi", "commodi");
                        put("alias", "fuga");
                    }};
                    metageneration = "aut";
                    name = "Jody Gutmann";
                    owner = new ObjectOwner() {{
                        entity = "eligendi";
                        entityId = "placeat";
                    }};;
                    retentionExpirationTime = OffsetDateTime.parse("2022-06-04T04:18:38.456Z");
                    selfLink = "unde";
                    size = "illo";
                    storageClass = "nihil";
                    temporaryHold = false;
                    timeCreated = OffsetDateTime.parse("2022-04-11T06:13:47.031Z");
                    timeDeleted = OffsetDateTime.parse("2022-11-26T08:30:04.331Z");
                    timeStorageClassUpdated = OffsetDateTime.parse("2022-08-25T08:19:14.388Z");
                    updated = OffsetDateTime.parse("2021-05-17T08:19:24.575Z");
                }};;
                alt = AltEnum.JSON;
                fields = "facilis";
                generation = "beatae";
                ifGenerationMatch = "cumque";
                ifGenerationNotMatch = "delectus";
                ifMetagenerationMatch = "labore";
                ifMetagenerationNotMatch = "expedita";
                key = "corrupti";
                oauthToken = "rem";
                predefinedAcl = StorageObjectsPatchPredefinedACLEnum.PRIVATE_;
                prettyPrint = false;
                projection = StorageObjectsPatchProjectionEnum.NO_ACL;
                quotaUser = "cum";
                uploadType = "pariatur";
                userIp = "sapiente";
                userProject = "quo";
            }};            

            StorageObjectsPatchResponse res = sdk.objects.storageObjectsPatch(req, new StorageObjectsPatchSecurity() {{
                option1 = new StorageObjectsPatchSecurityOption1("incidunt", "quod") {{
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

## storageObjectsRewrite

Rewrites a source object to a destination object. Optionally overrides metadata.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StorageObjectsRewriteDestinationPredefinedACLEnum;
import org.openapis.openapi.models.operations.StorageObjectsRewriteProjectionEnum;
import org.openapis.openapi.models.operations.StorageObjectsRewriteRequest;
import org.openapis.openapi.models.operations.StorageObjectsRewriteResponse;
import org.openapis.openapi.models.operations.StorageObjectsRewriteSecurity;
import org.openapis.openapi.models.operations.StorageObjectsRewriteSecurityOption1;
import org.openapis.openapi.models.operations.StorageObjectsRewriteSecurityOption2;
import org.openapis.openapi.models.operations.StorageObjectsRewriteSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Object;
import org.openapis.openapi.models.shared.ObjectAccessControl;
import org.openapis.openapi.models.shared.ObjectAccessControlProjectTeam;
import org.openapis.openapi.models.shared.ObjectCustomerEncryption;
import org.openapis.openapi.models.shared.ObjectOwner;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StorageObjectsRewriteRequest req = new StorageObjectsRewriteRequest("minus", "porro", "id", "excepturi") {{
                object = new Object() {{
                    acl = new org.openapis.openapi.models.shared.ObjectAccessControl[]{{
                        add(new ObjectAccessControl() {{
                            bucket = "libero";
                            domain = "quo";
                            email = "Tyree74@yahoo.com";
                            entity = "fugit";
                            entityId = "pariatur";
                            etag = "eligendi";
                            generation = "recusandae";
                            id = "10873e42-b006-4d67-8878-ba8581a58208";
                            kind = "placeat";
                            object = "enim";
                            projectTeam = new ObjectAccessControlProjectTeam() {{
                                projectNumber = "labore";
                                team = "sapiente";
                            }};
                            role = "saepe";
                            selfLink = "delectus";
                        }}),
                        add(new ObjectAccessControl() {{
                            bucket = "officia";
                            domain = "natus";
                            email = "Lia.Hahn88@hotmail.com";
                            entity = "mollitia";
                            entityId = "cumque";
                            etag = "quis";
                            generation = "enim";
                            id = "65d307cf-ee81-4206-a281-3fa4a41c480d";
                            kind = "dolorem";
                            object = "repellat";
                            projectTeam = new ObjectAccessControlProjectTeam() {{
                                projectNumber = "aspernatur";
                                team = "inventore";
                            }};
                            role = "sequi";
                            selfLink = "fugit";
                        }}),
                        add(new ObjectAccessControl() {{
                            bucket = "fuga";
                            domain = "hic";
                            email = "Cortney13@gmail.com";
                            entity = "nulla";
                            entityId = "enim";
                            etag = "illo";
                            generation = "magnam";
                            id = "f4cc6f18-bf96-421a-aa4f-77a87ee3e4be";
                            kind = "dignissimos";
                            object = "ipsam";
                            projectTeam = new ObjectAccessControlProjectTeam() {{
                                projectNumber = "explicabo";
                                team = "impedit";
                            }};
                            role = "aliquid";
                            selfLink = "quis";
                        }}),
                    }};
                    bucket = "facilis";
                    cacheControl = "ipsum";
                    componentCount = 284885;
                    contentDisposition = "quaerat";
                    contentEncoding = "architecto";
                    contentLanguage = "praesentium";
                    contentType = "eveniet";
                    crc32c = "dolor";
                    customTime = OffsetDateTime.parse("2021-07-17T02:21:21.661Z");
                    customerEncryption = new ObjectCustomerEncryption() {{
                        encryptionAlgorithm = "iste";
                        keySha256 = "illo";
                    }};;
                    etag = "minus";
                    eventBasedHold = false;
                    generation = "quos";
                    id = "d975e0e8-419d-48f8-8f14-4f3e07edcc4a";
                    kind = "deserunt";
                    kmsKeyName = "ad";
                    md5Hash = "reiciendis";
                    mediaLink = "sequi";
                    metadata = new java.util.HashMap<String, String>() {{
                        put("laborum", "nobis");
                        put("quibusdam", "omnis");
                        put("aut", "ipsam");
                        put("officia", "cupiditate");
                    }};
                    metageneration = "reprehenderit";
                    name = "Kelley Bashirian";
                    owner = new ObjectOwner() {{
                        entity = "molestiae";
                        entityId = "quia";
                    }};;
                    retentionExpirationTime = OffsetDateTime.parse("2022-09-11T11:57:13.844Z");
                    selfLink = "odit";
                    size = "iusto";
                    storageClass = "expedita";
                    temporaryHold = false;
                    timeCreated = OffsetDateTime.parse("2022-03-03T21:01:37.637Z");
                    timeDeleted = OffsetDateTime.parse("2022-12-10T20:42:52.039Z");
                    timeStorageClassUpdated = OffsetDateTime.parse("2022-06-02T06:52:03.773Z");
                    updated = OffsetDateTime.parse("2022-12-18T02:43:42.101Z");
                }};;
                alt = AltEnum.JSON;
                destinationKmsKeyName = "distinctio";
                destinationPredefinedAcl = StorageObjectsRewriteDestinationPredefinedACLEnum.PUBLIC_READ;
                fields = "quam";
                ifGenerationMatch = "est";
                ifGenerationNotMatch = "aliquam";
                ifMetagenerationMatch = "delectus";
                ifMetagenerationNotMatch = "culpa";
                ifSourceGenerationMatch = "voluptatum";
                ifSourceGenerationNotMatch = "iusto";
                ifSourceMetagenerationMatch = "quod";
                ifSourceMetagenerationNotMatch = "voluptatibus";
                key = "voluptas";
                maxBytesRewrittenPerCall = "non";
                oauthToken = "ullam";
                prettyPrint = false;
                projection = StorageObjectsRewriteProjectionEnum.NO_ACL;
                quotaUser = "voluptas";
                rewriteToken = "doloribus";
                sourceGeneration = "animi";
                uploadType = "recusandae";
                userIp = "corporis";
                userProject = "non";
            }};            

            StorageObjectsRewriteResponse res = sdk.objects.storageObjectsRewrite(req, new StorageObjectsRewriteSecurity() {{
                option1 = new StorageObjectsRewriteSecurityOption1("necessitatibus", "distinctio") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.rewriteResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## storageObjectsSetIamPolicy

Updates an IAM policy for the specified object.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StorageObjectsSetIamPolicyRequest;
import org.openapis.openapi.models.operations.StorageObjectsSetIamPolicyResponse;
import org.openapis.openapi.models.operations.StorageObjectsSetIamPolicySecurity;
import org.openapis.openapi.models.operations.StorageObjectsSetIamPolicySecurityOption1;
import org.openapis.openapi.models.operations.StorageObjectsSetIamPolicySecurityOption2;
import org.openapis.openapi.models.operations.StorageObjectsSetIamPolicySecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Expr;
import org.openapis.openapi.models.shared.Policy;
import org.openapis.openapi.models.shared.PolicyBindings;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StorageObjectsSetIamPolicyRequest req = new StorageObjectsSetIamPolicyRequest("maiores", "laboriosam") {{
                policy = new Policy() {{
                    bindings = new org.openapis.openapi.models.shared.PolicyBindings[]{{
                        add(new PolicyBindings() {{
                            condition = new Expr() {{
                                description = "optio";
                                expression = "sequi";
                                location = "sunt";
                                title = "Mr.";
                            }};
                            members = new String[]{{
                                add("doloremque"),
                                add("sed"),
                                add("amet"),
                                add("rerum"),
                            }};
                            role = "in";
                        }}),
                    }};
                    etag = "nostrum";
                    kind = "temporibus";
                    resourceId = "ratione";
                    version = 221824;
                }};;
                alt = AltEnum.JSON;
                fields = "nisi";
                generation = "dignissimos";
                key = "reiciendis";
                oauthToken = "itaque";
                prettyPrint = false;
                quotaUser = "vitae";
                uploadType = "est";
                userIp = "accusantium";
                userProject = "quod";
            }};            

            StorageObjectsSetIamPolicyResponse res = sdk.objects.storageObjectsSetIamPolicy(req, new StorageObjectsSetIamPolicySecurity() {{
                option1 = new StorageObjectsSetIamPolicySecurityOption1("minus", "quos") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.policy != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## storageObjectsTestIamPermissions

Tests a set of permissions on the given object to see which, if any, are held by the caller.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StorageObjectsTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.StorageObjectsTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.StorageObjectsTestIamPermissionsSecurity;
import org.openapis.openapi.models.operations.StorageObjectsTestIamPermissionsSecurityOption1;
import org.openapis.openapi.models.operations.StorageObjectsTestIamPermissionsSecurityOption2;
import org.openapis.openapi.models.operations.StorageObjectsTestIamPermissionsSecurityOption3;
import org.openapis.openapi.models.operations.StorageObjectsTestIamPermissionsSecurityOption4;
import org.openapis.openapi.models.operations.StorageObjectsTestIamPermissionsSecurityOption5;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StorageObjectsTestIamPermissionsRequest req = new StorageObjectsTestIamPermissionsRequest("possimus", "maiores",                 new String[]{{
                                add("provident"),
                                add("sapiente"),
                            }}) {{
                alt = AltEnum.JSON;
                fields = "aperiam";
                generation = "similique";
                key = "nesciunt";
                oauthToken = "provident";
                prettyPrint = false;
                quotaUser = "ex";
                uploadType = "repellendus";
                userIp = "unde";
                userProject = "alias";
            }};            

            StorageObjectsTestIamPermissionsResponse res = sdk.objects.storageObjectsTestIamPermissions(req, new StorageObjectsTestIamPermissionsSecurity() {{
                option1 = new StorageObjectsTestIamPermissionsSecurityOption1("impedit", "sequi") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.testIamPermissionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## storageObjectsUpdate

Updates an object's metadata.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StorageObjectsUpdatePredefinedACLEnum;
import org.openapis.openapi.models.operations.StorageObjectsUpdateProjectionEnum;
import org.openapis.openapi.models.operations.StorageObjectsUpdateRequest;
import org.openapis.openapi.models.operations.StorageObjectsUpdateResponse;
import org.openapis.openapi.models.operations.StorageObjectsUpdateSecurity;
import org.openapis.openapi.models.operations.StorageObjectsUpdateSecurityOption1;
import org.openapis.openapi.models.operations.StorageObjectsUpdateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Object;
import org.openapis.openapi.models.shared.ObjectAccessControl;
import org.openapis.openapi.models.shared.ObjectAccessControlProjectTeam;
import org.openapis.openapi.models.shared.ObjectCustomerEncryption;
import org.openapis.openapi.models.shared.ObjectOwner;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StorageObjectsUpdateRequest req = new StorageObjectsUpdateRequest("commodi", "labore") {{
                object1 = new Object() {{
                    acl = new org.openapis.openapi.models.shared.ObjectAccessControl[]{{
                        add(new ObjectAccessControl() {{
                            bucket = "in";
                            domain = "quisquam";
                            email = "Emilia_Stokes64@gmail.com";
                            entity = "impedit";
                            entityId = "accusamus";
                            etag = "et";
                            generation = "quas";
                            id = "8b1c4ee2-c8c6-4ce6-91fe-eb1c7cbdb6ee";
                            kind = "quod";
                            object = "nihil";
                            projectTeam = new ObjectAccessControlProjectTeam() {{
                                projectNumber = "quaerat";
                                team = "ipsum";
                            }};
                            role = "ducimus";
                            selfLink = "laudantium";
                        }}),
                        add(new ObjectAccessControl() {{
                            bucket = "rerum";
                            domain = "deserunt";
                            email = "Emmalee48@gmail.com";
                            entity = "esse";
                            entityId = "magnam";
                            etag = "odio";
                            generation = "nulla";
                            id = "c915ad2c-af5d-4d67-a3dc-0f5ae2f3a6b7";
                            kind = "doloremque";
                            object = "perferendis";
                            projectTeam = new ObjectAccessControlProjectTeam() {{
                                projectNumber = "laudantium";
                                team = "iusto";
                            }};
                            role = "corrupti";
                            selfLink = "molestiae";
                        }}),
                        add(new ObjectAccessControl() {{
                            bucket = "quis";
                            domain = "iure";
                            email = "Eloy.Fay66@gmail.com";
                            entity = "iure";
                            entityId = "quisquam";
                            etag = "provident";
                            generation = "laudantium";
                            id = "b5555408-0d40-4bca-8c6c-bd6b5f3ec909";
                            kind = "adipisci";
                            object = "accusantium";
                            projectTeam = new ObjectAccessControlProjectTeam() {{
                                projectNumber = "magnam";
                                team = "repellat";
                            }};
                            role = "omnis";
                            selfLink = "explicabo";
                        }}),
                    }};
                    bucket = "vel";
                    cacheControl = "cum";
                    componentCount = 663062;
                    contentDisposition = "possimus";
                    contentEncoding = "fugit";
                    contentLanguage = "ipsam";
                    contentType = "nostrum";
                    crc32c = "sequi";
                    customTime = OffsetDateTime.parse("2022-10-20T21:43:35.445Z");
                    customerEncryption = new ObjectCustomerEncryption() {{
                        encryptionAlgorithm = "error";
                        keySha256 = "nobis";
                    }};;
                    etag = "tempora";
                    eventBasedHold = false;
                    generation = "voluptate";
                    id = "4b0ed20e-5624-48ff-b639-a910abdcab62";
                    kind = "suscipit";
                    kmsKeyName = "voluptate";
                    md5Hash = "nisi";
                    mediaLink = "aliquid";
                    metadata = new java.util.HashMap<String, String>() {{
                        put("laboriosam", "accusamus");
                        put("ab", "itaque");
                        put("quisquam", "eaque");
                    }};
                    metageneration = "alias";
                    name = "Kathryn Bruen";
                    owner = new ObjectOwner() {{
                        entity = "amet";
                        entityId = "exercitationem";
                    }};;
                    retentionExpirationTime = OffsetDateTime.parse("2021-06-25T08:20:49.928Z");
                    selfLink = "unde";
                    size = "similique";
                    storageClass = "eligendi";
                    temporaryHold = false;
                    timeCreated = OffsetDateTime.parse("2022-07-20T03:49:43.731Z");
                    timeDeleted = OffsetDateTime.parse("2020-09-30T05:42:26.055Z");
                    timeStorageClassUpdated = OffsetDateTime.parse("2020-06-29T12:31:24.653Z");
                    updated = OffsetDateTime.parse("2021-12-01T07:51:21.127Z");
                }};;
                alt = AltEnum.JSON;
                fields = "quibusdam";
                generation = "sit";
                ifGenerationMatch = "quo";
                ifGenerationNotMatch = "veniam";
                ifMetagenerationMatch = "aliquam";
                ifMetagenerationNotMatch = "provident";
                key = "vero";
                oauthToken = "earum";
                predefinedAcl = StorageObjectsUpdatePredefinedACLEnum.AUTHENTICATED_READ;
                prettyPrint = false;
                projection = StorageObjectsUpdateProjectionEnum.FULL;
                quotaUser = "alias";
                uploadType = "doloremque";
                userIp = "tempora";
                userProject = "perspiciatis";
            }};            

            StorageObjectsUpdateResponse res = sdk.objects.storageObjectsUpdate(req, new StorageObjectsUpdateSecurity() {{
                option1 = new StorageObjectsUpdateSecurityOption1("quam", "atque") {{
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
import org.openapis.openapi.models.operations.StorageObjectsWatchAllSecurityOption4;
import org.openapis.openapi.models.operations.StorageObjectsWatchAllSecurityOption5;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Channel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StorageObjectsWatchAllRequest req = new StorageObjectsWatchAllRequest("officia") {{
                channel = new Channel() {{
                    address = "1960 Wiegand Divide";
                    expiration = "accusantium";
                    id = "688f77c1-ffc7-41dc-a163-f2a3c80a97ff";
                    kind = "velit";
                    params = new java.util.HashMap<String, String>() {{
                        put("non", "optio");
                    }};
                    payload = false;
                    resourceId = "illum";
                    resourceUri = "at";
                    token = "tenetur";
                    type = "molestias";
                }};;
                alt = AltEnum.JSON;
                delimiter = "ipsam";
                endOffset = "esse";
                fields = "laborum";
                includeTrailingDelimiter = false;
                key = "perspiciatis";
                maxResults = 915647L;
                oauthToken = "eum";
                pageToken = "quasi";
                prefix = "quas";
                prettyPrint = false;
                projection = StorageObjectsWatchAllProjectionEnum.FULL;
                quotaUser = "commodi";
                startOffset = "porro";
                uploadType = "aliquid";
                userIp = "mollitia";
                userProject = "quidem";
                versions = false;
            }};            

            StorageObjectsWatchAllResponse res = sdk.objects.storageObjectsWatchAll(req, new StorageObjectsWatchAllSecurity() {{
                option1 = new StorageObjectsWatchAllSecurityOption1("explicabo", "et") {{
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
