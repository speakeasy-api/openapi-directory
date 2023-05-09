# buckets

### Available Operations

* [storageBucketsDelete](#storagebucketsdelete) - Permanently deletes an empty bucket.
* [storageBucketsGet](#storagebucketsget) - Returns metadata for the specified bucket.
* [storageBucketsInsert](#storagebucketsinsert) - Creates a new bucket.
* [storageBucketsList](#storagebucketslist) - Retrieves a list of buckets for a given project.
* [storageBucketsPatch](#storagebucketspatch) - Updates a bucket. This method supports patch semantics.
* [storageBucketsUpdate](#storagebucketsupdate) - Updates a bucket.

## storageBucketsDelete

Permanently deletes an empty bucket.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StorageBucketsDeleteRequest;
import org.openapis.openapi.models.operations.StorageBucketsDeleteResponse;
import org.openapis.openapi.models.operations.StorageBucketsDeleteSecurity;
import org.openapis.openapi.models.operations.StorageBucketsDeleteSecurityOption1;
import org.openapis.openapi.models.operations.StorageBucketsDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StorageBucketsDeleteRequest req = new StorageBucketsDeleteRequest("quos") {{
                alt = AltEnum.JSON;
                fields = "perferendis";
                ifMetagenerationMatch = "magni";
                ifMetagenerationNotMatch = "assumenda";
                key = "ipsam";
                oauthToken = "alias";
                prettyPrint = false;
                quotaUser = "fugit";
                userIp = "dolorum";
            }};            

            StorageBucketsDeleteResponse res = sdk.buckets.storageBucketsDelete(req, new StorageBucketsDeleteSecurity() {{
                option1 = new StorageBucketsDeleteSecurityOption1("excepturi", "tempora") {{
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

## storageBucketsGet

Returns metadata for the specified bucket.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StorageBucketsGetProjectionEnum;
import org.openapis.openapi.models.operations.StorageBucketsGetRequest;
import org.openapis.openapi.models.operations.StorageBucketsGetResponse;
import org.openapis.openapi.models.operations.StorageBucketsGetSecurity;
import org.openapis.openapi.models.operations.StorageBucketsGetSecurityOption1;
import org.openapis.openapi.models.operations.StorageBucketsGetSecurityOption2;
import org.openapis.openapi.models.operations.StorageBucketsGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StorageBucketsGetRequest req = new StorageBucketsGetRequest("facilis") {{
                alt = AltEnum.JSON;
                fields = "tempore";
                ifMetagenerationMatch = "labore";
                ifMetagenerationNotMatch = "delectus";
                key = "eum";
                oauthToken = "non";
                prettyPrint = false;
                projection = StorageBucketsGetProjectionEnum.NO_ACL;
                quotaUser = "sint";
                userIp = "aliquid";
            }};            

            StorageBucketsGetResponse res = sdk.buckets.storageBucketsGet(req, new StorageBucketsGetSecurity() {{
                option1 = new StorageBucketsGetSecurityOption1("provident", "necessitatibus") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.bucket != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## storageBucketsInsert

Creates a new bucket.

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StorageBucketsInsertProjectionEnum;
import org.openapis.openapi.models.operations.StorageBucketsInsertRequest;
import org.openapis.openapi.models.operations.StorageBucketsInsertResponse;
import org.openapis.openapi.models.operations.StorageBucketsInsertSecurity;
import org.openapis.openapi.models.operations.StorageBucketsInsertSecurityOption1;
import org.openapis.openapi.models.operations.StorageBucketsInsertSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Bucket;
import org.openapis.openapi.models.shared.BucketAccessControl;
import org.openapis.openapi.models.shared.BucketCors;
import org.openapis.openapi.models.shared.BucketLifecycle;
import org.openapis.openapi.models.shared.BucketLifecycleRule;
import org.openapis.openapi.models.shared.BucketLifecycleRuleAction;
import org.openapis.openapi.models.shared.BucketLifecycleRuleCondition;
import org.openapis.openapi.models.shared.BucketLogging;
import org.openapis.openapi.models.shared.BucketOwner;
import org.openapis.openapi.models.shared.BucketVersioning;
import org.openapis.openapi.models.shared.BucketWebsite;
import org.openapis.openapi.models.shared.ObjectAccessControl;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StorageBucketsInsertRequest req = new StorageBucketsInsertRequest("sint") {{
                bucket = new Bucket() {{
                    acl = new org.openapis.openapi.models.shared.BucketAccessControl[]{{
                        add(new BucketAccessControl() {{
                            bucket = "dolor";
                            domain = "debitis";
                            email = "Marilou_King@hotmail.com";
                            entity = "maiores";
                            entityId = "rerum";
                            etag = "dicta";
                            id = "4cd66ae3-95ef-4b9b-a88f-3a66997074ba";
                            kind = "labore";
                            role = "labore";
                            selfLink = "suscipit";
                        }}),
                        add(new BucketAccessControl() {{
                            bucket = "natus";
                            domain = "nobis";
                            email = "Shaina29@yahoo.com";
                            entity = "et";
                            entityId = "excepturi";
                            etag = "ullam";
                            id = "9890afa5-63e2-4516-be4c-8b711e5b7fd2";
                            kind = "saepe";
                            role = "pariatur";
                            selfLink = "accusantium";
                        }}),
                        add(new BucketAccessControl() {{
                            bucket = "consequuntur";
                            domain = "praesentium";
                            email = "Catalina_Casper86@yahoo.com";
                            entity = "maxime";
                            entityId = "ea";
                            etag = "excepturi";
                            id = "2601fb57-6b0d-45f0-930c-5fbb25870532";
                            kind = "perferendis";
                            role = "dolores";
                            selfLink = "minus";
                        }}),
                    }};
                    cors = new org.openapis.openapi.models.shared.BucketCors[]{{
                        add(new BucketCors() {{
                            maxAgeSeconds = 223924;
                            method = new String[]{{
                                add("nostrum"),
                                add("hic"),
                                add("recusandae"),
                                add("omnis"),
                            }};
                            origin = new String[]{{
                                add("perspiciatis"),
                                add("voluptatem"),
                                add("porro"),
                            }};
                            responseHeader = new String[]{{
                                add("blanditiis"),
                            }};
                        }}),
                        add(new BucketCors() {{
                            maxAgeSeconds = 621479;
                            method = new String[]{{
                                add("occaecati"),
                            }};
                            origin = new String[]{{
                                add("adipisci"),
                                add("asperiores"),
                                add("earum"),
                            }};
                            responseHeader = new String[]{{
                                add("iste"),
                                add("dolorum"),
                            }};
                        }}),
                    }};
                    defaultObjectAcl = new org.openapis.openapi.models.shared.ObjectAccessControl[]{{
                        add(new ObjectAccessControl() {{
                            bucket = "pariatur";
                            domain = "provident";
                            email = "Moriah55@hotmail.com";
                            entity = "aliquid";
                            entityId = "dolorem";
                            etag = "dolorem";
                            generation = "dolor";
                            id = "23f9b77f-3a41-4006-b4eb-f69280d1ba77";
                            kind = "dolorum";
                            object = "deleniti";
                            role = "omnis";
                            selfLink = "necessitatibus";
                        }}),
                        add(new ObjectAccessControl() {{
                            bucket = "distinctio";
                            domain = "asperiores";
                            email = "Curt_Klocko@yahoo.com";
                            entity = "eius";
                            entityId = "aspernatur";
                            etag = "perferendis";
                            generation = "amet";
                            id = "ce5e6a95-d8a0-4d44-ace2-af7a73cf3be4";
                            kind = "enim";
                            object = "dolorem";
                            role = "sapiente";
                            selfLink = "totam";
                        }}),
                        add(new ObjectAccessControl() {{
                            bucket = "nihil";
                            domain = "sit";
                            email = "Corbin_Cremin@hotmail.com";
                            entity = "voluptas";
                            entityId = "deserunt";
                            etag = "quam";
                            generation = "ipsum";
                            id = "429cdb1a-8422-4bb6-b9d2-322715bf0cbb";
                            kind = "et";
                            object = "saepe";
                            role = "ipsum";
                            selfLink = "veritatis";
                        }}),
                    }};
                    etag = "nobis";
                    id = "8b90f344-3a11-408e-8adc-f4b921879fce";
                    kind = "omnis";
                    lifecycle = new BucketLifecycle() {{
                        rule = new org.openapis.openapi.models.shared.BucketLifecycleRule[]{{
                            add(new BucketLifecycleRule() {{
                                action = new BucketLifecycleRuleAction() {{
                                    type = "ipsum";
                                }};
                                condition = new BucketLifecycleRuleCondition() {{
                                    age = 961571;
                                    createdBefore = LocalDate.parse("2022-10-08");
                                    isLive = false;
                                    numNewerVersions = 878870;
                                }};
                            }}),
                            add(new BucketLifecycleRule() {{
                                action = new BucketLifecycleRuleAction() {{
                                    type = "tenetur";
                                }};
                                condition = new BucketLifecycleRuleCondition() {{
                                    age = 492268;
                                    createdBefore = LocalDate.parse("2020-11-08");
                                    isLive = false;
                                    numNewerVersions = 799203;
                                }};
                            }}),
                        }};
                    }};;
                    location = "odio";
                    logging = new BucketLogging() {{
                        logBucket = "similique";
                        logObjectPrefix = "facilis";
                    }};;
                    metageneration = "vero";
                    name = "Joanne Sporer";
                    owner = new BucketOwner() {{
                        entity = "natus";
                        entityId = "impedit";
                    }};;
                    selfLink = "aut";
                    storageClass = "voluptatibus";
                    timeCreated = OffsetDateTime.parse("2022-02-20T06:09:58.619Z");
                    versioning = new BucketVersioning() {{
                        enabled = false;
                    }};;
                    website = new BucketWebsite() {{
                        mainPageSuffix = "fugit";
                        notFoundPage = "porro";
                    }};;
                }};;
                alt = AltEnum.JSON;
                fields = "maiores";
                key = "doloribus";
                oauthToken = "iusto";
                prettyPrint = false;
                projection = StorageBucketsInsertProjectionEnum.NO_ACL;
                quotaUser = "ducimus";
                userIp = "alias";
            }};            

            StorageBucketsInsertResponse res = sdk.buckets.storageBucketsInsert(req, new StorageBucketsInsertSecurity() {{
                option1 = new StorageBucketsInsertSecurityOption1("officia", "tempora") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.bucket != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## storageBucketsList

Retrieves a list of buckets for a given project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StorageBucketsListProjectionEnum;
import org.openapis.openapi.models.operations.StorageBucketsListRequest;
import org.openapis.openapi.models.operations.StorageBucketsListResponse;
import org.openapis.openapi.models.operations.StorageBucketsListSecurity;
import org.openapis.openapi.models.operations.StorageBucketsListSecurityOption1;
import org.openapis.openapi.models.operations.StorageBucketsListSecurityOption2;
import org.openapis.openapi.models.operations.StorageBucketsListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StorageBucketsListRequest req = new StorageBucketsListRequest("ipsam") {{
                alt = AltEnum.JSON;
                fields = "ea";
                key = "aspernatur";
                maxResults = 428224L;
                oauthToken = "possimus";
                pageToken = "magnam";
                prettyPrint = false;
                projection = StorageBucketsListProjectionEnum.FULL;
                quotaUser = "ex";
                userIp = "laudantium";
            }};            

            StorageBucketsListResponse res = sdk.buckets.storageBucketsList(req, new StorageBucketsListSecurity() {{
                option1 = new StorageBucketsListSecurityOption1("dicta", "dolor") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.buckets != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## storageBucketsPatch

Updates a bucket. This method supports patch semantics.

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StorageBucketsPatchProjectionEnum;
import org.openapis.openapi.models.operations.StorageBucketsPatchRequest;
import org.openapis.openapi.models.operations.StorageBucketsPatchResponse;
import org.openapis.openapi.models.operations.StorageBucketsPatchSecurity;
import org.openapis.openapi.models.operations.StorageBucketsPatchSecurityOption1;
import org.openapis.openapi.models.operations.StorageBucketsPatchSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Bucket;
import org.openapis.openapi.models.shared.BucketAccessControl;
import org.openapis.openapi.models.shared.BucketCors;
import org.openapis.openapi.models.shared.BucketLifecycle;
import org.openapis.openapi.models.shared.BucketLifecycleRule;
import org.openapis.openapi.models.shared.BucketLifecycleRuleAction;
import org.openapis.openapi.models.shared.BucketLifecycleRuleCondition;
import org.openapis.openapi.models.shared.BucketLogging;
import org.openapis.openapi.models.shared.BucketOwner;
import org.openapis.openapi.models.shared.BucketVersioning;
import org.openapis.openapi.models.shared.BucketWebsite;
import org.openapis.openapi.models.shared.ObjectAccessControl;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StorageBucketsPatchRequest req = new StorageBucketsPatchRequest("maiores") {{
                bucket1 = new Bucket() {{
                    acl = new org.openapis.openapi.models.shared.BucketAccessControl[]{{
                        add(new BucketAccessControl() {{
                            bucket = "ex";
                            domain = "nulla";
                            email = "Watson_Heathcote90@yahoo.com";
                            entity = "ea";
                            entityId = "impedit";
                            etag = "corporis";
                            id = "56146c3e-250f-4b00-8c42-e141aac366c8";
                            kind = "assumenda";
                            role = "nulla";
                            selfLink = "voluptas";
                        }}),
                    }};
                    cors = new org.openapis.openapi.models.shared.BucketCors[]{{
                        add(new BucketCors() {{
                            maxAgeSeconds = 96549;
                            method = new String[]{{
                                add("numquam"),
                                add("explicabo"),
                            }};
                            origin = new String[]{{
                                add("ipsa"),
                                add("molestiae"),
                                add("magnam"),
                            }};
                            responseHeader = new String[]{{
                                add("eius"),
                                add("esse"),
                            }};
                        }}),
                        add(new BucketCors() {{
                            maxAgeSeconds = 456141;
                            method = new String[]{{
                                add("fuga"),
                                add("reprehenderit"),
                                add("quidem"),
                            }};
                            origin = new String[]{{
                                add("ut"),
                                add("eum"),
                                add("suscipit"),
                                add("assumenda"),
                            }};
                            responseHeader = new String[]{{
                                add("praesentium"),
                            }};
                        }}),
                        add(new BucketCors() {{
                            maxAgeSeconds = 788546;
                            method = new String[]{{
                                add("ipsa"),
                            }};
                            origin = new String[]{{
                                add("quidem"),
                                add("neque"),
                                add("quo"),
                            }};
                            responseHeader = new String[]{{
                                add("quo"),
                                add("fuga"),
                                add("eius"),
                                add("eos"),
                            }};
                        }}),
                    }};
                    defaultObjectAcl = new org.openapis.openapi.models.shared.ObjectAccessControl[]{{
                        add(new ObjectAccessControl() {{
                            bucket = "ab";
                            domain = "cupiditate";
                            email = "Donny.Toy@gmail.com";
                            entity = "sequi";
                            entityId = "quo";
                            etag = "esse";
                            generation = "recusandae";
                            id = "0bc7178e-4796-4f2a-b0c6-88282aa48256";
                            kind = "fugit";
                            object = "sapiente";
                            role = "consequuntur";
                            selfLink = "ratione";
                        }}),
                        add(new ObjectAccessControl() {{
                            bucket = "explicabo";
                            domain = "saepe";
                            email = "Karine_Bosco@yahoo.com";
                            entity = "accusamus";
                            entityId = "veritatis";
                            etag = "esse";
                            generation = "quod";
                            id = "be61e6b7-b95b-4c0a-b3c2-0c4f3789fd87";
                            kind = "quasi";
                            object = "a";
                            role = "error";
                            selfLink = "sint";
                        }}),
                    }};
                    etag = "pariatur";
                    id = "d2efd121-aa6f-41e6-b4bd-b04f15756082";
                    kind = "quibusdam";
                    lifecycle = new BucketLifecycle() {{
                        rule = new org.openapis.openapi.models.shared.BucketLifecycleRule[]{{
                            add(new BucketLifecycleRule() {{
                                action = new BucketLifecycleRuleAction() {{
                                    type = "deleniti";
                                }};
                                condition = new BucketLifecycleRuleCondition() {{
                                    age = 929292;
                                    createdBefore = LocalDate.parse("2022-10-20");
                                    isLive = false;
                                    numNewerVersions = 609178;
                                }};
                            }}),
                            add(new BucketLifecycleRule() {{
                                action = new BucketLifecycleRuleAction() {{
                                    type = "tenetur";
                                }};
                                condition = new BucketLifecycleRuleCondition() {{
                                    age = 98478;
                                    createdBefore = LocalDate.parse("2022-09-22");
                                    isLive = false;
                                    numNewerVersions = 454162;
                                }};
                            }}),
                        }};
                    }};;
                    location = "ipsa";
                    logging = new BucketLogging() {{
                        logBucket = "minima";
                        logObjectPrefix = "veritatis";
                    }};;
                    metageneration = "consectetur";
                    name = "Ms. Cora Spencer IV";
                    owner = new BucketOwner() {{
                        entity = "eum";
                        entityId = "mollitia";
                    }};;
                    selfLink = "ab";
                    storageClass = "corrupti";
                    timeCreated = OffsetDateTime.parse("2022-12-20T03:36:13.455Z");
                    versioning = new BucketVersioning() {{
                        enabled = false;
                    }};;
                    website = new BucketWebsite() {{
                        mainPageSuffix = "dolor";
                        notFoundPage = "occaecati";
                    }};;
                }};;
                alt = AltEnum.JSON;
                fields = "numquam";
                ifMetagenerationMatch = "impedit";
                ifMetagenerationNotMatch = "explicabo";
                key = "voluptas";
                oauthToken = "aut";
                prettyPrint = false;
                projection = StorageBucketsPatchProjectionEnum.FULL;
                quotaUser = "dicta";
                userIp = "maiores";
            }};            

            StorageBucketsPatchResponse res = sdk.buckets.storageBucketsPatch(req, new StorageBucketsPatchSecurity() {{
                option1 = new StorageBucketsPatchSecurityOption1("natus", "velit") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.bucket != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## storageBucketsUpdate

Updates a bucket.

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StorageBucketsUpdateProjectionEnum;
import org.openapis.openapi.models.operations.StorageBucketsUpdateRequest;
import org.openapis.openapi.models.operations.StorageBucketsUpdateResponse;
import org.openapis.openapi.models.operations.StorageBucketsUpdateSecurity;
import org.openapis.openapi.models.operations.StorageBucketsUpdateSecurityOption1;
import org.openapis.openapi.models.operations.StorageBucketsUpdateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Bucket;
import org.openapis.openapi.models.shared.BucketAccessControl;
import org.openapis.openapi.models.shared.BucketCors;
import org.openapis.openapi.models.shared.BucketLifecycle;
import org.openapis.openapi.models.shared.BucketLifecycleRule;
import org.openapis.openapi.models.shared.BucketLifecycleRuleAction;
import org.openapis.openapi.models.shared.BucketLifecycleRuleCondition;
import org.openapis.openapi.models.shared.BucketLogging;
import org.openapis.openapi.models.shared.BucketOwner;
import org.openapis.openapi.models.shared.BucketVersioning;
import org.openapis.openapi.models.shared.BucketWebsite;
import org.openapis.openapi.models.shared.ObjectAccessControl;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StorageBucketsUpdateRequest req = new StorageBucketsUpdateRequest("voluptatibus") {{
                bucket1 = new Bucket() {{
                    acl = new org.openapis.openapi.models.shared.BucketAccessControl[]{{
                        add(new BucketAccessControl() {{
                            bucket = "asperiores";
                            domain = "aperiam";
                            email = "Elsie_Cruickshank80@yahoo.com";
                            entity = "dignissimos";
                            entityId = "officia";
                            etag = "asperiores";
                            id = "515cc413-aa63-4aae-8d67-864dbb675fd5";
                            kind = "recusandae";
                            role = "aliquid";
                            selfLink = "aperiam";
                        }}),
                        add(new BucketAccessControl() {{
                            bucket = "cum";
                            domain = "consectetur";
                            email = "Faustino.Wehner98@yahoo.com";
                            entity = "suscipit";
                            entityId = "reiciendis";
                            etag = "quidem";
                            id = "ee41f333-17fe-435b-a0eb-1ea426555ba3";
                            kind = "minus";
                            role = "dolores";
                            selfLink = "blanditiis";
                        }}),
                    }};
                    cors = new org.openapis.openapi.models.shared.BucketCors[]{{
                        add(new BucketCors() {{
                            maxAgeSeconds = 296242;
                            method = new String[]{{
                                add("officiis"),
                                add("temporibus"),
                            }};
                            origin = new String[]{{
                                add("adipisci"),
                                add("cum"),
                            }};
                            responseHeader = new String[]{{
                                add("quas"),
                                add("hic"),
                                add("nesciunt"),
                            }};
                        }}),
                        add(new BucketCors() {{
                            maxAgeSeconds = 633998;
                            method = new String[]{{
                                add("pariatur"),
                                add("totam"),
                                add("hic"),
                            }};
                            origin = new String[]{{
                                add("nobis"),
                                add("sit"),
                            }};
                            responseHeader = new String[]{{
                                add("sed"),
                                add("reiciendis"),
                                add("explicabo"),
                            }};
                        }}),
                    }};
                    defaultObjectAcl = new org.openapis.openapi.models.shared.ObjectAccessControl[]{{
                        add(new ObjectAccessControl() {{
                            bucket = "facilis";
                            domain = "voluptate";
                            email = "Antone67@hotmail.com";
                            entity = "sed";
                            entityId = "in";
                            etag = "commodi";
                            generation = "quidem";
                            id = "26916fe1-f08f-4429-8e36-98f447f603e8";
                            kind = "facilis";
                            object = "quaerat";
                            role = "incidunt";
                            selfLink = "ipsam";
                        }}),
                        add(new ObjectAccessControl() {{
                            bucket = "debitis";
                            domain = "rem";
                            email = "Nestor.Muller@gmail.com";
                            entity = "recusandae";
                            entityId = "reiciendis";
                            etag = "nulla";
                            generation = "magni";
                            id = "0e457e18-58b6-4a89-bbe3-a5aa8e4824d0";
                            kind = "culpa";
                            object = "expedita";
                            role = "magnam";
                            selfLink = "consequatur";
                        }}),
                        add(new ObjectAccessControl() {{
                            bucket = "esse";
                            domain = "ipsam";
                            email = "Justine.Lynch8@gmail.com";
                            entity = "blanditiis";
                            entityId = "ex";
                            etag = "sed";
                            generation = "sit";
                            id = "65e904f3-b119-44b8-abf6-03a79f9dfe0a";
                            kind = "quidem";
                            object = "reprehenderit";
                            role = "facere";
                            selfLink = "fuga";
                        }}),
                        add(new ObjectAccessControl() {{
                            bucket = "praesentium";
                            domain = "mollitia";
                            email = "Alessia.Schiller54@yahoo.com";
                            entity = "reprehenderit";
                            entityId = "asperiores";
                            etag = "totam";
                            generation = "suscipit";
                            id = "bc173d68-9eee-4952-af8d-986e881ead4f";
                            kind = "doloremque";
                            object = "repudiandae";
                            role = "dicta";
                            selfLink = "accusantium";
                        }}),
                    }};
                    etag = "beatae";
                    id = "2563f94e-29e9-473e-922a-57a15be3e060";
                    kind = "totam";
                    lifecycle = new BucketLifecycle() {{
                        rule = new org.openapis.openapi.models.shared.BucketLifecycleRule[]{{
                            add(new BucketLifecycleRule() {{
                                action = new BucketLifecycleRuleAction() {{
                                    type = "molestiae";
                                }};
                                condition = new BucketLifecycleRuleCondition() {{
                                    age = 907733;
                                    createdBefore = LocalDate.parse("2022-04-05");
                                    isLive = false;
                                    numNewerVersions = 434761;
                                }};
                            }}),
                        }};
                    }};;
                    location = "necessitatibus";
                    logging = new BucketLogging() {{
                        logBucket = "ratione";
                        logObjectPrefix = "laborum";
                    }};;
                    metageneration = "distinctio";
                    name = "Jordan Haag";
                    owner = new BucketOwner() {{
                        entity = "alias";
                        entityId = "corporis";
                    }};;
                    selfLink = "perspiciatis";
                    storageClass = "nihil";
                    timeCreated = OffsetDateTime.parse("2022-03-30T21:08:39.591Z");
                    versioning = new BucketVersioning() {{
                        enabled = false;
                    }};;
                    website = new BucketWebsite() {{
                        mainPageSuffix = "alias";
                        notFoundPage = "maiores";
                    }};;
                }};;
                alt = AltEnum.JSON;
                fields = "reiciendis";
                ifMetagenerationMatch = "dolores";
                ifMetagenerationNotMatch = "id";
                key = "minima";
                oauthToken = "dolore";
                prettyPrint = false;
                projection = StorageBucketsUpdateProjectionEnum.NO_ACL;
                quotaUser = "nesciunt";
                userIp = "quae";
            }};            

            StorageBucketsUpdateResponse res = sdk.buckets.storageBucketsUpdate(req, new StorageBucketsUpdateSecurity() {{
                option1 = new StorageBucketsUpdateSecurityOption1("recusandae", "omnis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.bucket != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
