# buckets

### Available Operations

* [storageBucketsDelete](#storagebucketsdelete) - Permanently deletes an empty bucket.
* [storageBucketsGet](#storagebucketsget) - Returns metadata for the specified bucket.
* [storageBucketsGetIamPolicy](#storagebucketsgetiampolicy) - Returns an IAM policy for the specified bucket.
* [storageBucketsInsert](#storagebucketsinsert) - Creates a new bucket.
* [storageBucketsList](#storagebucketslist) - Retrieves a list of buckets for a given project.
* [storageBucketsLockRetentionPolicy](#storagebucketslockretentionpolicy) - Locks retention policy on a bucket.
* [storageBucketsPatch](#storagebucketspatch) - Patches a bucket. Changes to the bucket will be readable immediately after writing, but configuration changes may take time to propagate.
* [storageBucketsSetIamPolicy](#storagebucketssetiampolicy) - Updates an IAM policy for the specified bucket.
* [storageBucketsTestIamPermissions](#storagebucketstestiampermissions) - Tests a set of permissions on the given bucket to see which, if any, are held by the caller.
* [storageBucketsUpdate](#storagebucketsupdate) - Updates a bucket. Changes to the bucket will be readable immediately after writing, but configuration changes may take time to propagate.

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
import org.openapis.openapi.models.operations.StorageBucketsDeleteSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StorageBucketsDeleteRequest req = new StorageBucketsDeleteRequest("sint") {{
                alt = AltEnum.JSON;
                fields = "officia";
                ifMetagenerationMatch = "dolor";
                ifMetagenerationNotMatch = "debitis";
                key = "a";
                oauthToken = "dolorum";
                prettyPrint = false;
                quotaUser = "in";
                uploadType = "in";
                userIp = "illum";
                userProject = "maiores";
            }};            

            StorageBucketsDeleteResponse res = sdk.buckets.storageBucketsDelete(req, new StorageBucketsDeleteSecurity() {{
                option1 = new StorageBucketsDeleteSecurityOption1("rerum", "dicta") {{
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
import org.openapis.openapi.models.operations.StorageBucketsGetSecurityOption4;
import org.openapis.openapi.models.operations.StorageBucketsGetSecurityOption5;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StorageBucketsGetRequest req = new StorageBucketsGetRequest("magnam") {{
                alt = AltEnum.JSON;
                fields = "cumque";
                ifMetagenerationMatch = "facere";
                ifMetagenerationNotMatch = "ea";
                key = "aliquid";
                oauthToken = "laborum";
                prettyPrint = false;
                projection = StorageBucketsGetProjectionEnum.NO_ACL;
                quotaUser = "non";
                uploadType = "occaecati";
                userIp = "enim";
                userProject = "accusamus";
            }};            

            StorageBucketsGetResponse res = sdk.buckets.storageBucketsGet(req, new StorageBucketsGetSecurity() {{
                option1 = new StorageBucketsGetSecurityOption1("delectus", "quidem") {{
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

## storageBucketsGetIamPolicy

Returns an IAM policy for the specified bucket.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StorageBucketsGetIamPolicyRequest;
import org.openapis.openapi.models.operations.StorageBucketsGetIamPolicyResponse;
import org.openapis.openapi.models.operations.StorageBucketsGetIamPolicySecurity;
import org.openapis.openapi.models.operations.StorageBucketsGetIamPolicySecurityOption1;
import org.openapis.openapi.models.operations.StorageBucketsGetIamPolicySecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StorageBucketsGetIamPolicyRequest req = new StorageBucketsGetIamPolicyRequest("provident") {{
                alt = AltEnum.JSON;
                fields = "nam";
                key = "id";
                oauthToken = "blanditiis";
                optionsRequestedPolicyVersion = 533206L;
                prettyPrint = false;
                quotaUser = "sapiente";
                uploadType = "amet";
                userIp = "deserunt";
                userProject = "nisi";
            }};            

            StorageBucketsGetIamPolicyResponse res = sdk.buckets.storageBucketsGetIamPolicy(req, new StorageBucketsGetIamPolicySecurity() {{
                option1 = new StorageBucketsGetIamPolicySecurityOption1("vel", "natus") {{
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

## storageBucketsInsert

Creates a new bucket.

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StorageBucketsInsertPredefinedACLEnum;
import org.openapis.openapi.models.operations.StorageBucketsInsertPredefinedDefaultObjectACLEnum;
import org.openapis.openapi.models.operations.StorageBucketsInsertProjectionEnum;
import org.openapis.openapi.models.operations.StorageBucketsInsertRequest;
import org.openapis.openapi.models.operations.StorageBucketsInsertResponse;
import org.openapis.openapi.models.operations.StorageBucketsInsertSecurity;
import org.openapis.openapi.models.operations.StorageBucketsInsertSecurityOption1;
import org.openapis.openapi.models.operations.StorageBucketsInsertSecurityOption2;
import org.openapis.openapi.models.operations.StorageBucketsInsertSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Bucket;
import org.openapis.openapi.models.shared.BucketAccessControl;
import org.openapis.openapi.models.shared.BucketAccessControlProjectTeam;
import org.openapis.openapi.models.shared.BucketAutoclass;
import org.openapis.openapi.models.shared.BucketBilling;
import org.openapis.openapi.models.shared.BucketCors;
import org.openapis.openapi.models.shared.BucketCustomPlacementConfig;
import org.openapis.openapi.models.shared.BucketEncryption;
import org.openapis.openapi.models.shared.BucketIamConfiguration;
import org.openapis.openapi.models.shared.BucketIamConfigurationBucketPolicyOnly;
import org.openapis.openapi.models.shared.BucketIamConfigurationUniformBucketLevelAccess;
import org.openapis.openapi.models.shared.BucketLifecycle;
import org.openapis.openapi.models.shared.BucketLifecycleRule;
import org.openapis.openapi.models.shared.BucketLifecycleRuleAction;
import org.openapis.openapi.models.shared.BucketLifecycleRuleCondition;
import org.openapis.openapi.models.shared.BucketLogging;
import org.openapis.openapi.models.shared.BucketOwner;
import org.openapis.openapi.models.shared.BucketRetentionPolicy;
import org.openapis.openapi.models.shared.BucketVersioning;
import org.openapis.openapi.models.shared.BucketWebsite;
import org.openapis.openapi.models.shared.ObjectAccessControl;
import org.openapis.openapi.models.shared.ObjectAccessControlProjectTeam;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StorageBucketsInsertRequest req = new StorageBucketsInsertRequest("omnis") {{
                bucket = new Bucket() {{
                    acl = new org.openapis.openapi.models.shared.BucketAccessControl[]{{
                        add(new BucketAccessControl() {{
                            bucket = "perferendis";
                            domain = "nihil";
                            email = "Michele29@gmail.com";
                            entity = "suscipit";
                            entityId = "natus";
                            etag = "nobis";
                            id = "6e214195-9890-4afa-963e-2516fe4c8b71";
                            kind = "architecto";
                            projectTeam = new BucketAccessControlProjectTeam() {{
                                projectNumber = "repudiandae";
                                team = "ullam";
                            }};
                            role = "expedita";
                            selfLink = "nihil";
                        }}),
                        add(new BucketAccessControl() {{
                            bucket = "repellat";
                            domain = "quibusdam";
                            email = "Sunny16@gmail.com";
                            entity = "praesentium";
                            entityId = "natus";
                            etag = "magni";
                            id = "1cddc692-601f-4b57-ab0d-5f0d30c5fbb2";
                            kind = "quis";
                            projectTeam = new BucketAccessControlProjectTeam() {{
                                projectNumber = "totam";
                                team = "dignissimos";
                            }};
                            role = "eaque";
                            selfLink = "quis";
                        }}),
                    }};
                    autoclass = new BucketAutoclass() {{
                        enabled = false;
                        toggleTime = OffsetDateTime.parse("2022-10-27T11:39:54.088Z");
                    }};;
                    billing = new BucketBilling() {{
                        requesterPays = false;
                    }};;
                    cors = new org.openapis.openapi.models.shared.BucketCors[]{{
                        add(new BucketCors() {{
                            maxAgeSeconds = 170986;
                            method = new String[]{{
                                add("quam"),
                                add("dolor"),
                                add("vero"),
                                add("nostrum"),
                            }};
                            origin = new String[]{{
                                add("recusandae"),
                                add("omnis"),
                                add("facilis"),
                                add("perspiciatis"),
                            }};
                            responseHeader = new String[]{{
                                add("porro"),
                            }};
                        }}),
                    }};
                    customPlacementConfig = new BucketCustomPlacementConfig() {{
                        dataLocations = new String[]{{
                            add("blanditiis"),
                        }};
                    }};;
                    defaultEventBasedHold = false;
                    defaultObjectAcl = new org.openapis.openapi.models.shared.ObjectAccessControl[]{{
                        add(new ObjectAccessControl() {{
                            bucket = "eaque";
                            domain = "occaecati";
                            email = "David.Zemlak61@hotmail.com";
                            entity = "dolorum";
                            entityId = "deleniti";
                            etag = "pariatur";
                            generation = "provident";
                            id = "cbf48633-323f-49b7-bf3a-4100674ebf69";
                            kind = "eos";
                            object = "atque";
                            projectTeam = new ObjectAccessControlProjectTeam() {{
                                projectNumber = "sit";
                                team = "fugiat";
                            }};
                            role = "ab";
                            selfLink = "soluta";
                        }}),
                        add(new ObjectAccessControl() {{
                            bucket = "dolorum";
                            domain = "iusto";
                            email = "Marianna_Leuschke@yahoo.com";
                            entity = "distinctio";
                            entityId = "asperiores";
                            etag = "nihil";
                            generation = "ipsum";
                            id = "7ae4203c-e5e6-4a95-98a0-d446ce2af7a7";
                            kind = "ipsum";
                            object = "quisquam";
                            projectTeam = new ObjectAccessControlProjectTeam() {{
                                projectNumber = "tenetur";
                                team = "amet";
                            }};
                            role = "tempore";
                            selfLink = "accusamus";
                        }}),
                        add(new ObjectAccessControl() {{
                            bucket = "numquam";
                            domain = "enim";
                            email = "Vernice.Leannon@gmail.com";
                            entity = "expedita";
                            entityId = "neque";
                            etag = "sed";
                            generation = "vel";
                            id = "b5a73429-cdb1-4a84-a2bb-679d2322715b";
                            kind = "hic";
                            object = "voluptatem";
                            projectTeam = new ObjectAccessControlProjectTeam() {{
                                projectNumber = "cumque";
                                team = "soluta";
                            }};
                            role = "nobis";
                            selfLink = "et";
                        }}),
                    }};
                    encryption = new BucketEncryption() {{
                        defaultKmsKeyName = "saepe";
                    }};;
                    etag = "ipsum";
                    iamConfiguration = new BucketIamConfiguration() {{
                        bucketPolicyOnly = new BucketIamConfigurationBucketPolicyOnly() {{
                            enabled = false;
                            lockedTime = OffsetDateTime.parse("2022-04-02T12:31:52.465Z");
                        }};;
                        publicAccessPrevention = "quos";
                        uniformBucketLevelAccess = new BucketIamConfigurationUniformBucketLevelAccess() {{
                            enabled = false;
                            lockedTime = OffsetDateTime.parse("2021-10-31T07:58:44.750Z");
                        }};;
                    }};;
                    id = "0f3443a1-108e-40ad-8f4b-921879fce953";
                    kind = "delectus";
                    labels = new java.util.HashMap<String, String>() {{
                        put("consectetur", "vero");
                        put("tenetur", "dignissimos");
                    }};
                    lifecycle = new BucketLifecycle() {{
                        rule = new org.openapis.openapi.models.shared.BucketLifecycleRule[]{{
                            add(new BucketLifecycleRule() {{
                                action = new BucketLifecycleRuleAction() {{
                                    storageClass = "distinctio";
                                    type = "quod";
                                }};
                                condition = new BucketLifecycleRuleCondition() {{
                                    age = 486160;
                                    createdBefore = LocalDate.parse("2021-08-01");
                                    customTimeBefore = LocalDate.parse("2021-07-04");
                                    daysSinceCustomTime = 293020;
                                    daysSinceNoncurrentTime = 844550;
                                    isLive = false;
                                    matchesPattern = "illum";
                                    matchesPrefix = new String[]{{
                                        add("natus"),
                                    }};
                                    matchesStorageClass = new String[]{{
                                        add("aut"),
                                        add("voluptatibus"),
                                        add("exercitationem"),
                                        add("nulla"),
                                    }};
                                    matchesSuffix = new String[]{{
                                        add("porro"),
                                    }};
                                    noncurrentTimeBefore = LocalDate.parse("2020-01-18");
                                    numNewerVersions = 478370;
                                }};
                            }}),
                            add(new BucketLifecycleRule() {{
                                action = new BucketLifecycleRuleAction() {{
                                    storageClass = "eligendi";
                                    type = "ducimus";
                                }};
                                condition = new BucketLifecycleRuleCondition() {{
                                    age = 4048;
                                    createdBefore = LocalDate.parse("2022-06-18");
                                    customTimeBefore = LocalDate.parse("2022-08-04");
                                    daysSinceCustomTime = 136900;
                                    daysSinceNoncurrentTime = 428224;
                                    isLive = false;
                                    matchesPattern = "possimus";
                                    matchesPrefix = new String[]{{
                                        add("ratione"),
                                        add("ex"),
                                    }};
                                    matchesStorageClass = new String[]{{
                                        add("dicta"),
                                        add("dolor"),
                                        add("maiores"),
                                    }};
                                    matchesSuffix = new String[]{{
                                        add("ex"),
                                    }};
                                    noncurrentTimeBefore = LocalDate.parse("2021-04-17");
                                    numNewerVersions = 972920;
                                }};
                            }}),
                            add(new BucketLifecycleRule() {{
                                action = new BucketLifecycleRuleAction() {{
                                    storageClass = "nostrum";
                                    type = "sapiente";
                                }};
                                condition = new BucketLifecycleRuleCondition() {{
                                    age = 788873;
                                    createdBefore = LocalDate.parse("2021-10-07");
                                    customTimeBefore = LocalDate.parse("2021-12-03");
                                    daysSinceCustomTime = 333145;
                                    daysSinceNoncurrentTime = 399499;
                                    isLive = false;
                                    matchesPattern = "inventore";
                                    matchesPrefix = new String[]{{
                                        add("ea"),
                                        add("quo"),
                                    }};
                                    matchesStorageClass = new String[]{{
                                        add("recusandae"),
                                    }};
                                    matchesSuffix = new String[]{{
                                        add("minima"),
                                    }};
                                    noncurrentTimeBefore = LocalDate.parse("2022-01-18");
                                    numNewerVersions = 725595;
                                }};
                            }}),
                            add(new BucketLifecycleRule() {{
                                action = new BucketLifecycleRuleAction() {{
                                    storageClass = "aut";
                                    type = "aut";
                                }};
                                condition = new BucketLifecycleRuleCondition() {{
                                    age = 533466;
                                    createdBefore = LocalDate.parse("2022-02-01");
                                    customTimeBefore = LocalDate.parse("2022-02-12");
                                    daysSinceCustomTime = 79522;
                                    daysSinceNoncurrentTime = 250622;
                                    isLive = false;
                                    matchesPattern = "et";
                                    matchesPrefix = new String[]{{
                                        add("laborum"),
                                        add("placeat"),
                                        add("velit"),
                                    }};
                                    matchesStorageClass = new String[]{{
                                        add("autem"),
                                        add("nobis"),
                                    }};
                                    matchesSuffix = new String[]{{
                                        add("assumenda"),
                                        add("nulla"),
                                        add("voluptas"),
                                    }};
                                    noncurrentTimeBefore = LocalDate.parse("2022-10-22");
                                    numNewerVersions = 270328;
                                }};
                            }}),
                        }};
                    }};;
                    location = "numquam";
                    locationType = "explicabo";
                    logging = new BucketLogging() {{
                        logBucket = "provident";
                        logObjectPrefix = "ipsa";
                    }};;
                    metageneration = "molestiae";
                    name = "Viola Gibson";
                    owner = new BucketOwner() {{
                        entity = "rem";
                        entityId = "fuga";
                    }};;
                    projectNumber = "reprehenderit";
                    retentionPolicy = new BucketRetentionPolicy() {{
                        effectiveTime = OffsetDateTime.parse("2021-04-18T13:50:09.955Z");
                        isLocked = false;
                        retentionPeriod = "ut";
                    }};;
                    rpo = "eum";
                    satisfiesPZS = false;
                    selfLink = "suscipit";
                    storageClass = "assumenda";
                    timeCreated = OffsetDateTime.parse("2022-06-29T02:09:48.123Z");
                    updated = OffsetDateTime.parse("2022-09-28T10:00:45.702Z");
                    versioning = new BucketVersioning() {{
                        enabled = false;
                    }};;
                    website = new BucketWebsite() {{
                        mainPageSuffix = "ipsa";
                        notFoundPage = "id";
                    }};;
                }};;
                alt = AltEnum.JSON;
                fields = "quidem";
                key = "neque";
                oauthToken = "quo";
                predefinedAcl = StorageBucketsInsertPredefinedACLEnum.PUBLIC_READ_WRITE;
                predefinedDefaultObjectAcl = StorageBucketsInsertPredefinedDefaultObjectACLEnum.PROJECT_PRIVATE;
                prettyPrint = false;
                projection = StorageBucketsInsertProjectionEnum.NO_ACL;
                quotaUser = "eius";
                uploadType = "eos";
                userIp = "voluptas";
                userProject = "ab";
            }};            

            StorageBucketsInsertResponse res = sdk.buckets.storageBucketsInsert(req, new StorageBucketsInsertSecurity() {{
                option1 = new StorageBucketsInsertSecurityOption1("cupiditate", "consequatur") {{
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
import org.openapis.openapi.models.operations.StorageBucketsListSecurityOption4;
import org.openapis.openapi.models.operations.StorageBucketsListSecurityOption5;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StorageBucketsListRequest req = new StorageBucketsListRequest("tempora") {{
                alt = AltEnum.JSON;
                fields = "debitis";
                key = "ipsam";
                maxResults = 133465L;
                oauthToken = "sequi";
                pageToken = "quo";
                prefix = "esse";
                prettyPrint = false;
                projection = StorageBucketsListProjectionEnum.NO_ACL;
                quotaUser = "aperiam";
                uploadType = "distinctio";
                userIp = "quod";
                userProject = "dignissimos";
            }};            

            StorageBucketsListResponse res = sdk.buckets.storageBucketsList(req, new StorageBucketsListSecurity() {{
                option1 = new StorageBucketsListSecurityOption1("inventore", "nihil") {{
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

## storageBucketsLockRetentionPolicy

Locks retention policy on a bucket.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StorageBucketsLockRetentionPolicyRequest;
import org.openapis.openapi.models.operations.StorageBucketsLockRetentionPolicyResponse;
import org.openapis.openapi.models.operations.StorageBucketsLockRetentionPolicySecurity;
import org.openapis.openapi.models.operations.StorageBucketsLockRetentionPolicySecurityOption1;
import org.openapis.openapi.models.operations.StorageBucketsLockRetentionPolicySecurityOption2;
import org.openapis.openapi.models.operations.StorageBucketsLockRetentionPolicySecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StorageBucketsLockRetentionPolicyRequest req = new StorageBucketsLockRetentionPolicyRequest("totam", "accusamus") {{
                alt = AltEnum.JSON;
                fields = "aliquam";
                key = "odio";
                oauthToken = "occaecati";
                prettyPrint = false;
                quotaUser = "commodi";
                uploadType = "sapiente";
                userIp = "dolores";
                userProject = "deserunt";
            }};            

            StorageBucketsLockRetentionPolicyResponse res = sdk.buckets.storageBucketsLockRetentionPolicy(req, new StorageBucketsLockRetentionPolicySecurity() {{
                option1 = new StorageBucketsLockRetentionPolicySecurityOption1("molestiae", "accusantium") {{
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

## storageBucketsPatch

Patches a bucket. Changes to the bucket will be readable immediately after writing, but configuration changes may take time to propagate.

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StorageBucketsPatchPredefinedACLEnum;
import org.openapis.openapi.models.operations.StorageBucketsPatchPredefinedDefaultObjectACLEnum;
import org.openapis.openapi.models.operations.StorageBucketsPatchProjectionEnum;
import org.openapis.openapi.models.operations.StorageBucketsPatchRequest;
import org.openapis.openapi.models.operations.StorageBucketsPatchResponse;
import org.openapis.openapi.models.operations.StorageBucketsPatchSecurity;
import org.openapis.openapi.models.operations.StorageBucketsPatchSecurityOption1;
import org.openapis.openapi.models.operations.StorageBucketsPatchSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Bucket;
import org.openapis.openapi.models.shared.BucketAccessControl;
import org.openapis.openapi.models.shared.BucketAccessControlProjectTeam;
import org.openapis.openapi.models.shared.BucketAutoclass;
import org.openapis.openapi.models.shared.BucketBilling;
import org.openapis.openapi.models.shared.BucketCors;
import org.openapis.openapi.models.shared.BucketCustomPlacementConfig;
import org.openapis.openapi.models.shared.BucketEncryption;
import org.openapis.openapi.models.shared.BucketIamConfiguration;
import org.openapis.openapi.models.shared.BucketIamConfigurationBucketPolicyOnly;
import org.openapis.openapi.models.shared.BucketIamConfigurationUniformBucketLevelAccess;
import org.openapis.openapi.models.shared.BucketLifecycle;
import org.openapis.openapi.models.shared.BucketLifecycleRule;
import org.openapis.openapi.models.shared.BucketLifecycleRuleAction;
import org.openapis.openapi.models.shared.BucketLifecycleRuleCondition;
import org.openapis.openapi.models.shared.BucketLogging;
import org.openapis.openapi.models.shared.BucketOwner;
import org.openapis.openapi.models.shared.BucketRetentionPolicy;
import org.openapis.openapi.models.shared.BucketVersioning;
import org.openapis.openapi.models.shared.BucketWebsite;
import org.openapis.openapi.models.shared.ObjectAccessControl;
import org.openapis.openapi.models.shared.ObjectAccessControlProjectTeam;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StorageBucketsPatchRequest req = new StorageBucketsPatchRequest("porro") {{
                bucket1 = new Bucket() {{
                    acl = new org.openapis.openapi.models.shared.BucketAccessControl[]{{
                        add(new BucketAccessControl() {{
                            bucket = "quas";
                            domain = "praesentium";
                            email = "Kailyn_Considine27@gmail.com";
                            entity = "atque";
                            entityId = "explicabo";
                            etag = "minima";
                            id = "62f222e9-817e-4e17-8be6-1e6b7b95bc0a";
                            kind = "tempore";
                            projectTeam = new BucketAccessControlProjectTeam() {{
                                projectNumber = "adipisci";
                                team = "cumque";
                            }};
                            role = "consequuntur";
                            selfLink = "consequatur";
                        }}),
                        add(new BucketAccessControl() {{
                            bucket = "minus";
                            domain = "quaerat";
                            email = "Darlene_Koch@hotmail.com";
                            entity = "a";
                            entityId = "nulla";
                            etag = "quas";
                            id = "71f99dd2-efd1-421a-a6f1-e674bdb04f15";
                            kind = "reprehenderit";
                            projectTeam = new BucketAccessControlProjectTeam() {{
                                projectNumber = "ullam";
                                team = "nisi";
                            }};
                            role = "aut";
                            selfLink = "voluptatum";
                        }}),
                    }};
                    autoclass = new BucketAutoclass() {{
                        enabled = false;
                        toggleTime = OffsetDateTime.parse("2022-02-26T10:39:59.909Z");
                    }};;
                    billing = new BucketBilling() {{
                        requesterPays = false;
                    }};;
                    cors = new org.openapis.openapi.models.shared.BucketCors[]{{
                        add(new BucketCors() {{
                            maxAgeSeconds = 536275;
                            method = new String[]{{
                                add("dolorum"),
                                add("architecto"),
                                add("omnis"),
                                add("tenetur"),
                            }};
                            origin = new String[]{{
                                add("at"),
                            }};
                            responseHeader = new String[]{{
                                add("voluptate"),
                            }};
                        }}),
                        add(new BucketCors() {{
                            maxAgeSeconds = 55965;
                            method = new String[]{{
                                add("veritatis"),
                                add("consectetur"),
                            }};
                            origin = new String[]{{
                                add("iste"),
                            }};
                            responseHeader = new String[]{{
                                add("accusantium"),
                                add("rem"),
                                add("aut"),
                                add("laudantium"),
                            }};
                        }}),
                    }};
                    customPlacementConfig = new BucketCustomPlacementConfig() {{
                        dataLocations = new String[]{{
                            add("mollitia"),
                            add("ab"),
                        }};
                    }};;
                    defaultEventBasedHold = false;
                    defaultObjectAcl = new org.openapis.openapi.models.shared.ObjectAccessControl[]{{
                        add(new ObjectAccessControl() {{
                            bucket = "non";
                            domain = "voluptatem";
                            email = "Kraig.Fritsch37@gmail.com";
                            entity = "aut";
                            entityId = "dignissimos";
                            etag = "dicta";
                            generation = "maiores";
                            id = "93f5f064-2dac-47af-915c-c413aa63aae8";
                            kind = "fugiat";
                            object = "vel";
                            projectTeam = new ObjectAccessControlProjectTeam() {{
                                projectNumber = "ducimus";
                                team = "quos";
                            }};
                            role = "vel";
                            selfLink = "labore";
                        }}),
                        add(new ObjectAccessControl() {{
                            bucket = "possimus";
                            domain = "facilis";
                            email = "Haskell_King@hotmail.com";
                            entity = "assumenda";
                            entityId = "nemo";
                            etag = "recusandae";
                            generation = "aliquid";
                            id = "0b375ed4-f6fb-4ee4-9f33-317fe35b60eb";
                            kind = "vitae";
                            object = "accusamus";
                            projectTeam = new ObjectAccessControlProjectTeam() {{
                                projectNumber = "similique";
                                team = "tempora";
                            }};
                            role = "aspernatur";
                            selfLink = "voluptas";
                        }}),
                        add(new ObjectAccessControl() {{
                            bucket = "voluptas";
                            domain = "voluptas";
                            email = "Nelle79@gmail.com";
                            entity = "dolores";
                            entityId = "blanditiis";
                            etag = "in";
                            generation = "dolore";
                            id = "4ed53b88-f3a8-4d8f-9c0b-2f2fb7b194a2";
                            kind = "in";
                            object = "commodi";
                            projectTeam = new ObjectAccessControlProjectTeam() {{
                                projectNumber = "quidem";
                                team = "explicabo";
                            }};
                            role = "voluptas";
                            selfLink = "unde";
                        }}),
                    }};
                    encryption = new BucketEncryption() {{
                        defaultKmsKeyName = "architecto";
                    }};;
                    etag = "suscipit";
                    iamConfiguration = new BucketIamConfiguration() {{
                        bucketPolicyOnly = new BucketIamConfigurationBucketPolicyOnly() {{
                            enabled = false;
                            lockedTime = OffsetDateTime.parse("2020-04-25T13:15:32.117Z");
                        }};;
                        publicAccessPrevention = "illo";
                        uniformBucketLevelAccess = new BucketIamConfigurationUniformBucketLevelAccess() {{
                            enabled = false;
                            lockedTime = OffsetDateTime.parse("2022-12-10T20:46:47.432Z");
                        }};;
                    }};;
                    id = "8f4294e3-698f-4447-b603-e8b445e80ca5";
                    kind = "minima";
                    labels = new java.util.HashMap<String, String>() {{
                        put("reiciendis", "nulla");
                        put("magni", "aperiam");
                        put("saepe", "numquam");
                        put("veniam", "in");
                    }};
                    lifecycle = new BucketLifecycle() {{
                        rule = new org.openapis.openapi.models.shared.BucketLifecycleRule[]{{
                            add(new BucketLifecycleRule() {{
                                action = new BucketLifecycleRuleAction() {{
                                    storageClass = "beatae";
                                    type = "laudantium";
                                }};
                                condition = new BucketLifecycleRuleCondition() {{
                                    age = 348476;
                                    createdBefore = LocalDate.parse("2021-07-09");
                                    customTimeBefore = LocalDate.parse("2022-04-27");
                                    daysSinceCustomTime = 530089;
                                    daysSinceNoncurrentTime = 622385;
                                    isLive = false;
                                    matchesPattern = "hic";
                                    matchesPrefix = new String[]{{
                                        add("debitis"),
                                        add("neque"),
                                        add("dolorum"),
                                    }};
                                    matchesStorageClass = new String[]{{
                                        add("officia"),
                                        add("dolorum"),
                                    }};
                                    matchesSuffix = new String[]{{
                                        add("accusamus"),
                                        add("tempora"),
                                        add("atque"),
                                    }};
                                    noncurrentTimeBefore = LocalDate.parse("2022-09-19");
                                    numNewerVersions = 856303;
                                }};
                            }}),
                            add(new BucketLifecycleRule() {{
                                action = new BucketLifecycleRuleAction() {{
                                    storageClass = "voluptatem";
                                    type = "culpa";
                                }};
                                condition = new BucketLifecycleRuleCondition() {{
                                    age = 710337;
                                    createdBefore = LocalDate.parse("2022-12-29");
                                    customTimeBefore = LocalDate.parse("2022-08-17");
                                    daysSinceCustomTime = 24527;
                                    daysSinceNoncurrentTime = 530537;
                                    isLive = false;
                                    matchesPattern = "quas";
                                    matchesPrefix = new String[]{{
                                        add("corporis"),
                                        add("et"),
                                        add("blanditiis"),
                                        add("ex"),
                                    }};
                                    matchesStorageClass = new String[]{{
                                        add("sit"),
                                    }};
                                    matchesSuffix = new String[]{{
                                        add("nostrum"),
                                        add("saepe"),
                                    }};
                                    noncurrentTimeBefore = LocalDate.parse("2022-12-25");
                                    numNewerVersions = 279068;
                                }};
                            }}),
                            add(new BucketLifecycleRule() {{
                                action = new BucketLifecycleRuleAction() {{
                                    storageClass = "reiciendis";
                                    type = "dolorem";
                                }};
                                condition = new BucketLifecycleRuleCondition() {{
                                    age = 690894;
                                    createdBefore = LocalDate.parse("2022-11-25");
                                    customTimeBefore = LocalDate.parse("2022-06-03");
                                    daysSinceCustomTime = 695270;
                                    daysSinceNoncurrentTime = 539074;
                                    isLive = false;
                                    matchesPattern = "laborum";
                                    matchesPrefix = new String[]{{
                                        add("tenetur"),
                                        add("laboriosam"),
                                        add("alias"),
                                    }};
                                    matchesStorageClass = new String[]{{
                                        add("deserunt"),
                                    }};
                                    matchesSuffix = new String[]{{
                                        add("unde"),
                                        add("reiciendis"),
                                    }};
                                    noncurrentTimeBefore = LocalDate.parse("2021-05-02");
                                    numNewerVersions = 962771;
                                }};
                            }}),
                            add(new BucketLifecycleRule() {{
                                action = new BucketLifecycleRuleAction() {{
                                    storageClass = "voluptates";
                                    type = "perferendis";
                                }};
                                condition = new BucketLifecycleRuleCondition() {{
                                    age = 667285;
                                    createdBefore = LocalDate.parse("2022-02-13");
                                    customTimeBefore = LocalDate.parse("2020-12-11");
                                    daysSinceCustomTime = 509807;
                                    daysSinceNoncurrentTime = 648598;
                                    isLive = false;
                                    matchesPattern = "veniam";
                                    matchesPrefix = new String[]{{
                                        add("quisquam"),
                                    }};
                                    matchesStorageClass = new String[]{{
                                        add("quasi"),
                                        add("atque"),
                                        add("reprehenderit"),
                                        add("asperiores"),
                                    }};
                                    matchesSuffix = new String[]{{
                                        add("suscipit"),
                                        add("quidem"),
                                        add("maxime"),
                                    }};
                                    noncurrentTimeBefore = LocalDate.parse("2022-07-16");
                                    numNewerVersions = 227759;
                                }};
                            }}),
                        }};
                    }};;
                    location = "assumenda";
                    locationType = "ea";
                    logging = new BucketLogging() {{
                        logBucket = "atque";
                        logObjectPrefix = "error";
                    }};;
                    metageneration = "officiis";
                    name = "Tomas Mosciski";
                    owner = new BucketOwner() {{
                        entity = "ex";
                        entityId = "maiores";
                    }};;
                    projectNumber = "corrupti";
                    retentionPolicy = new BucketRetentionPolicy() {{
                        effectiveTime = OffsetDateTime.parse("2021-02-19T05:54:38.127Z");
                        isLocked = false;
                        retentionPeriod = "blanditiis";
                    }};;
                    rpo = "suscipit";
                    satisfiesPZS = false;
                    selfLink = "repudiandae";
                    storageClass = "atque";
                    timeCreated = OffsetDateTime.parse("2022-10-04T17:29:33.184Z");
                    updated = OffsetDateTime.parse("2020-12-16T15:16:35.557Z");
                    versioning = new BucketVersioning() {{
                        enabled = false;
                    }};;
                    website = new BucketWebsite() {{
                        mainPageSuffix = "repellendus";
                        notFoundPage = "labore";
                    }};;
                }};;
                alt = AltEnum.JSON;
                fields = "reiciendis";
                ifMetagenerationMatch = "doloremque";
                ifMetagenerationNotMatch = "repudiandae";
                key = "dicta";
                oauthToken = "accusantium";
                predefinedAcl = StorageBucketsPatchPredefinedACLEnum.AUTHENTICATED_READ;
                predefinedDefaultObjectAcl = StorageBucketsPatchPredefinedDefaultObjectACLEnum.BUCKET_OWNER_FULL_CONTROL;
                prettyPrint = false;
                projection = StorageBucketsPatchProjectionEnum.FULL;
                quotaUser = "laboriosam";
                uploadType = "velit";
                userIp = "a";
                userProject = "molestias";
            }};            

            StorageBucketsPatchResponse res = sdk.buckets.storageBucketsPatch(req, new StorageBucketsPatchSecurity() {{
                option1 = new StorageBucketsPatchSecurityOption1("magnam", "saepe") {{
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

## storageBucketsSetIamPolicy

Updates an IAM policy for the specified bucket.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StorageBucketsSetIamPolicyRequest;
import org.openapis.openapi.models.operations.StorageBucketsSetIamPolicyResponse;
import org.openapis.openapi.models.operations.StorageBucketsSetIamPolicySecurity;
import org.openapis.openapi.models.operations.StorageBucketsSetIamPolicySecurityOption1;
import org.openapis.openapi.models.operations.StorageBucketsSetIamPolicySecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Expr;
import org.openapis.openapi.models.shared.Policy;
import org.openapis.openapi.models.shared.PolicyBindings;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StorageBucketsSetIamPolicyRequest req = new StorageBucketsSetIamPolicyRequest("consequuntur") {{
                policy = new Policy() {{
                    bindings = new org.openapis.openapi.models.shared.PolicyBindings[]{{
                        add(new PolicyBindings() {{
                            condition = new Expr() {{
                                description = "officiis";
                                expression = "perspiciatis";
                                location = "in";
                                title = "Mrs.";
                            }};
                            members = new String[]{{
                                add("occaecati"),
                                add("consequuntur"),
                                add("fugit"),
                                add("id"),
                            }};
                            role = "quis";
                        }}),
                        add(new PolicyBindings() {{
                            condition = new Expr() {{
                                description = "reprehenderit";
                                expression = "error";
                                location = "illo";
                                title = "Mrs.";
                            }};
                            members = new String[]{{
                                add("eveniet"),
                                add("non"),
                                add("vero"),
                            }};
                            role = "doloremque";
                        }}),
                        add(new PolicyBindings() {{
                            condition = new Expr() {{
                                description = "iure";
                                expression = "ipsa";
                                location = "totam";
                                title = "Mr.";
                            }};
                            members = new String[]{{
                                add("eveniet"),
                                add("qui"),
                            }};
                            role = "cum";
                        }}),
                    }};
                    etag = "iure";
                    kind = "necessitatibus";
                    resourceId = "ratione";
                    version = 672582;
                }};;
                alt = AltEnum.JSON;
                fields = "distinctio";
                key = "voluptatum";
                oauthToken = "rem";
                prettyPrint = false;
                quotaUser = "aliquam";
                uploadType = "ad";
                userIp = "repellat";
                userProject = "alias";
            }};            

            StorageBucketsSetIamPolicyResponse res = sdk.buckets.storageBucketsSetIamPolicy(req, new StorageBucketsSetIamPolicySecurity() {{
                option1 = new StorageBucketsSetIamPolicySecurityOption1("corporis", "perspiciatis") {{
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

## storageBucketsTestIamPermissions

Tests a set of permissions on the given bucket to see which, if any, are held by the caller.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StorageBucketsTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.StorageBucketsTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.StorageBucketsTestIamPermissionsSecurity;
import org.openapis.openapi.models.operations.StorageBucketsTestIamPermissionsSecurityOption1;
import org.openapis.openapi.models.operations.StorageBucketsTestIamPermissionsSecurityOption2;
import org.openapis.openapi.models.operations.StorageBucketsTestIamPermissionsSecurityOption3;
import org.openapis.openapi.models.operations.StorageBucketsTestIamPermissionsSecurityOption4;
import org.openapis.openapi.models.operations.StorageBucketsTestIamPermissionsSecurityOption5;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StorageBucketsTestIamPermissionsRequest req = new StorageBucketsTestIamPermissionsRequest("nihil",                 new String[]{{
                                add("voluptas"),
                                add("alias"),
                                add("maiores"),
                            }}) {{
                alt = AltEnum.JSON;
                fields = "reiciendis";
                key = "dolores";
                oauthToken = "id";
                prettyPrint = false;
                quotaUser = "minima";
                uploadType = "dolore";
                userIp = "dolorum";
                userProject = "nesciunt";
            }};            

            StorageBucketsTestIamPermissionsResponse res = sdk.buckets.storageBucketsTestIamPermissions(req, new StorageBucketsTestIamPermissionsSecurity() {{
                option1 = new StorageBucketsTestIamPermissionsSecurityOption1("quae", "recusandae") {{
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

## storageBucketsUpdate

Updates a bucket. Changes to the bucket will be readable immediately after writing, but configuration changes may take time to propagate.

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StorageBucketsUpdatePredefinedACLEnum;
import org.openapis.openapi.models.operations.StorageBucketsUpdatePredefinedDefaultObjectACLEnum;
import org.openapis.openapi.models.operations.StorageBucketsUpdateProjectionEnum;
import org.openapis.openapi.models.operations.StorageBucketsUpdateRequest;
import org.openapis.openapi.models.operations.StorageBucketsUpdateResponse;
import org.openapis.openapi.models.operations.StorageBucketsUpdateSecurity;
import org.openapis.openapi.models.operations.StorageBucketsUpdateSecurityOption1;
import org.openapis.openapi.models.operations.StorageBucketsUpdateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Bucket;
import org.openapis.openapi.models.shared.BucketAccessControl;
import org.openapis.openapi.models.shared.BucketAccessControlProjectTeam;
import org.openapis.openapi.models.shared.BucketAutoclass;
import org.openapis.openapi.models.shared.BucketBilling;
import org.openapis.openapi.models.shared.BucketCors;
import org.openapis.openapi.models.shared.BucketCustomPlacementConfig;
import org.openapis.openapi.models.shared.BucketEncryption;
import org.openapis.openapi.models.shared.BucketIamConfiguration;
import org.openapis.openapi.models.shared.BucketIamConfigurationBucketPolicyOnly;
import org.openapis.openapi.models.shared.BucketIamConfigurationUniformBucketLevelAccess;
import org.openapis.openapi.models.shared.BucketLifecycle;
import org.openapis.openapi.models.shared.BucketLifecycleRule;
import org.openapis.openapi.models.shared.BucketLifecycleRuleAction;
import org.openapis.openapi.models.shared.BucketLifecycleRuleCondition;
import org.openapis.openapi.models.shared.BucketLogging;
import org.openapis.openapi.models.shared.BucketOwner;
import org.openapis.openapi.models.shared.BucketRetentionPolicy;
import org.openapis.openapi.models.shared.BucketVersioning;
import org.openapis.openapi.models.shared.BucketWebsite;
import org.openapis.openapi.models.shared.ObjectAccessControl;
import org.openapis.openapi.models.shared.ObjectAccessControlProjectTeam;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StorageBucketsUpdateRequest req = new StorageBucketsUpdateRequest("omnis") {{
                bucket1 = new Bucket() {{
                    acl = new org.openapis.openapi.models.shared.BucketAccessControl[]{{
                        add(new BucketAccessControl() {{
                            bucket = "molestiae";
                            domain = "ex";
                            email = "Loren_Ferry43@gmail.com";
                            entity = "nemo";
                            entityId = "recusandae";
                            etag = "esse";
                            id = "956f9251-a5a9-4da6-a0ff-57bfaad4f9ef";
                            kind = "cumque";
                            projectTeam = new BucketAccessControlProjectTeam() {{
                                projectNumber = "vitae";
                                team = "rerum";
                            }};
                            role = "tempora";
                            selfLink = "quis";
                        }}),
                        add(new BucketAccessControl() {{
                            bucket = "inventore";
                            domain = "fugit";
                            email = "Angie13@hotmail.com";
                            entity = "eum";
                            entityId = "eius";
                            etag = "rem";
                            id = "dc2f6151-99eb-4fd0-a9fe-6c632ca3aed0";
                            kind = "quasi";
                            projectTeam = new BucketAccessControlProjectTeam() {{
                                projectNumber = "et";
                                team = "ducimus";
                            }};
                            role = "natus";
                            selfLink = "occaecati";
                        }}),
                    }};
                    autoclass = new BucketAutoclass() {{
                        enabled = false;
                        toggleTime = OffsetDateTime.parse("2022-10-04T19:57:36.428Z");
                    }};;
                    billing = new BucketBilling() {{
                        requesterPays = false;
                    }};;
                    cors = new org.openapis.openapi.models.shared.BucketCors[]{{
                        add(new BucketCors() {{
                            maxAgeSeconds = 169025;
                            method = new String[]{{
                                add("nulla"),
                                add("necessitatibus"),
                                add("ipsa"),
                                add("tempora"),
                            }};
                            origin = new String[]{{
                                add("molestiae"),
                                add("dicta"),
                            }};
                            responseHeader = new String[]{{
                                add("esse"),
                                add("praesentium"),
                            }};
                        }}),
                    }};
                    customPlacementConfig = new BucketCustomPlacementConfig() {{
                        dataLocations = new String[]{{
                            add("reiciendis"),
                            add("vel"),
                            add("architecto"),
                            add("fugiat"),
                        }};
                    }};;
                    defaultEventBasedHold = false;
                    defaultObjectAcl = new org.openapis.openapi.models.shared.ObjectAccessControl[]{{
                        add(new ObjectAccessControl() {{
                            bucket = "dicta";
                            domain = "odio";
                            email = "Jaden39@gmail.com";
                            entity = "ipsa";
                            entityId = "laborum";
                            etag = "sunt";
                            generation = "nostrum";
                            id = "db6a6606-59a1-4ade-aab5-851d6c645b08";
                            kind = "cum";
                            object = "aliquid";
                            projectTeam = new ObjectAccessControlProjectTeam() {{
                                projectNumber = "beatae";
                                team = "voluptatum";
                            }};
                            role = "omnis";
                            selfLink = "veritatis";
                        }}),
                    }};
                    encryption = new BucketEncryption() {{
                        defaultKmsKeyName = "rerum";
                    }};;
                    etag = "est";
                    iamConfiguration = new BucketIamConfiguration() {{
                        bucketPolicyOnly = new BucketIamConfigurationBucketPolicyOnly() {{
                            enabled = false;
                            lockedTime = OffsetDateTime.parse("2022-12-10T08:47:52.188Z");
                        }};;
                        publicAccessPrevention = "sapiente";
                        uniformBucketLevelAccess = new BucketIamConfigurationUniformBucketLevelAccess() {{
                            enabled = false;
                            lockedTime = OffsetDateTime.parse("2022-09-09T21:19:27.244Z");
                        }};;
                    }};;
                    id = "ade008e6-f8c5-4f35-8d8c-db5a34181430";
                    kind = "architecto";
                    labels = new java.util.HashMap<String, String>() {{
                        put("modi", "fugit");
                    }};
                    lifecycle = new BucketLifecycle() {{
                        rule = new org.openapis.openapi.models.shared.BucketLifecycleRule[]{{
                            add(new BucketLifecycleRule() {{
                                action = new BucketLifecycleRuleAction() {{
                                    storageClass = "laudantium";
                                    type = "quae";
                                }};
                                condition = new BucketLifecycleRuleCondition() {{
                                    age = 222658;
                                    createdBefore = LocalDate.parse("2021-11-22");
                                    customTimeBefore = LocalDate.parse("2022-12-11");
                                    daysSinceCustomTime = 559682;
                                    daysSinceNoncurrentTime = 911198;
                                    isLive = false;
                                    matchesPattern = "impedit";
                                    matchesPrefix = new String[]{{
                                        add("esse"),
                                        add("necessitatibus"),
                                        add("sed"),
                                        add("veniam"),
                                    }};
                                    matchesStorageClass = new String[]{{
                                        add("expedita"),
                                    }};
                                    matchesSuffix = new String[]{{
                                        add("vel"),
                                        add("voluptatum"),
                                    }};
                                    noncurrentTimeBefore = LocalDate.parse("2022-08-26");
                                    numNewerVersions = 70410;
                                }};
                            }}),
                        }};
                    }};;
                    location = "porro";
                    locationType = "autem";
                    logging = new BucketLogging() {{
                        logBucket = "nobis";
                        logObjectPrefix = "laboriosam";
                    }};;
                    metageneration = "recusandae";
                    name = "Helen Heller III";
                    owner = new BucketOwner() {{
                        entity = "at";
                        entityId = "vero";
                    }};;
                    projectNumber = "est";
                    retentionPolicy = new BucketRetentionPolicy() {{
                        effectiveTime = OffsetDateTime.parse("2022-08-13T07:34:51.264Z");
                        isLocked = false;
                        retentionPeriod = "doloribus";
                    }};;
                    rpo = "repudiandae";
                    satisfiesPZS = false;
                    selfLink = "optio";
                    storageClass = "occaecati";
                    timeCreated = OffsetDateTime.parse("2022-07-18T14:19:46.326Z");
                    updated = OffsetDateTime.parse("2021-09-19T01:59:50.048Z");
                    versioning = new BucketVersioning() {{
                        enabled = false;
                    }};;
                    website = new BucketWebsite() {{
                        mainPageSuffix = "voluptas";
                        notFoundPage = "numquam";
                    }};;
                }};;
                alt = AltEnum.JSON;
                fields = "nemo";
                ifMetagenerationMatch = "quos";
                ifMetagenerationNotMatch = "eius";
                key = "aspernatur";
                oauthToken = "ducimus";
                predefinedAcl = StorageBucketsUpdatePredefinedACLEnum.PRIVATE_;
                predefinedDefaultObjectAcl = StorageBucketsUpdatePredefinedDefaultObjectACLEnum.PROJECT_PRIVATE;
                prettyPrint = false;
                projection = StorageBucketsUpdateProjectionEnum.NO_ACL;
                quotaUser = "incidunt";
                uploadType = "quasi";
                userIp = "rem";
                userProject = "fugiat";
            }};            

            StorageBucketsUpdateResponse res = sdk.buckets.storageBucketsUpdate(req, new StorageBucketsUpdateSecurity() {{
                option1 = new StorageBucketsUpdateSecurityOption1("dicta", "nisi") {{
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
