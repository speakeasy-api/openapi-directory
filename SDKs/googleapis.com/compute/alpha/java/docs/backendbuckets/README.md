# backendBuckets

### Available Operations

* [computeBackendBucketsAddSignedUrlKey](#computebackendbucketsaddsignedurlkey) - Adds a key for validating requests with signed URLs for this backend bucket.
* [computeBackendBucketsDelete](#computebackendbucketsdelete) - Deletes the specified BackendBucket resource.
* [computeBackendBucketsDeleteSignedUrlKey](#computebackendbucketsdeletesignedurlkey) - Deletes a key for validating requests with signed URLs for this backend bucket.
* [computeBackendBucketsGet](#computebackendbucketsget) - Returns the specified BackendBucket resource.
* [computeBackendBucketsGetIamPolicy](#computebackendbucketsgetiampolicy) - Gets the access control policy for a resource. May be empty if no such policy or resource exists.
* [computeBackendBucketsInsert](#computebackendbucketsinsert) - Creates a BackendBucket resource in the specified project using the data included in the request.
* [computeBackendBucketsList](#computebackendbucketslist) - Retrieves the list of BackendBucket resources available to the specified project.
* [computeBackendBucketsPatch](#computebackendbucketspatch) - Updates the specified BackendBucket resource with the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
* [computeBackendBucketsSetEdgeSecurityPolicy](#computebackendbucketssetedgesecuritypolicy) - Sets the edge security policy for the specified backend bucket.
* [computeBackendBucketsSetIamPolicy](#computebackendbucketssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy.
* [computeBackendBucketsTestIamPermissions](#computebackendbucketstestiampermissions) - Returns permissions that a caller has on the specified resource.
* [computeBackendBucketsUpdate](#computebackendbucketsupdate) - Updates the specified BackendBucket resource with the data included in the request.

## computeBackendBucketsAddSignedUrlKey

Adds a key for validating requests with signed URLs for this backend bucket.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeBackendBucketsAddSignedUrlKeyRequest;
import org.openapis.openapi.models.operations.ComputeBackendBucketsAddSignedUrlKeyResponse;
import org.openapis.openapi.models.operations.ComputeBackendBucketsAddSignedUrlKeySecurity;
import org.openapis.openapi.models.operations.ComputeBackendBucketsAddSignedUrlKeySecurityOption1;
import org.openapis.openapi.models.operations.ComputeBackendBucketsAddSignedUrlKeySecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.SignedUrlKey;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeBackendBucketsAddSignedUrlKeyRequest req = new ComputeBackendBucketsAddSignedUrlKeyRequest("quo", "consectetur") {{
                dollarXgafv = XgafvEnum.TWO;
                signedUrlKey = new SignedUrlKey() {{
                    keyName = "aspernatur";
                    keyValue = "minima";
                }};;
                accessToken = "eaque";
                alt = AltEnum.PROTO;
                callback = "libero";
                fields = "aut";
                key = "aut";
                oauthToken = "deleniti";
                prettyPrint = false;
                quotaUser = "impedit";
                requestId = "aliquam";
                uploadType = "fugit";
                uploadProtocol = "accusamus";
                userIp = "inventore";
            }};            

            ComputeBackendBucketsAddSignedUrlKeyResponse res = sdk.backendBuckets.computeBackendBucketsAddSignedUrlKey(req, new ComputeBackendBucketsAddSignedUrlKeySecurity() {{
                option1 = new ComputeBackendBucketsAddSignedUrlKeySecurityOption1("non", "et") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeBackendBucketsDelete

Deletes the specified BackendBucket resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeBackendBucketsDeleteRequest;
import org.openapis.openapi.models.operations.ComputeBackendBucketsDeleteResponse;
import org.openapis.openapi.models.operations.ComputeBackendBucketsDeleteSecurity;
import org.openapis.openapi.models.operations.ComputeBackendBucketsDeleteSecurityOption1;
import org.openapis.openapi.models.operations.ComputeBackendBucketsDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeBackendBucketsDeleteRequest req = new ComputeBackendBucketsDeleteRequest("dolorum", "laborum") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "velit";
                alt = AltEnum.MEDIA;
                callback = "autem";
                fields = "nobis";
                key = "quas";
                oauthToken = "assumenda";
                prettyPrint = false;
                quotaUser = "nulla";
                requestId = "voluptas";
                uploadType = "libero";
                uploadProtocol = "quasi";
                userIp = "tempora";
            }};            

            ComputeBackendBucketsDeleteResponse res = sdk.backendBuckets.computeBackendBucketsDelete(req, new ComputeBackendBucketsDeleteSecurity() {{
                option1 = new ComputeBackendBucketsDeleteSecurityOption1("numquam", "explicabo") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeBackendBucketsDeleteSignedUrlKey

Deletes a key for validating requests with signed URLs for this backend bucket.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeBackendBucketsDeleteSignedUrlKeyRequest;
import org.openapis.openapi.models.operations.ComputeBackendBucketsDeleteSignedUrlKeyResponse;
import org.openapis.openapi.models.operations.ComputeBackendBucketsDeleteSignedUrlKeySecurity;
import org.openapis.openapi.models.operations.ComputeBackendBucketsDeleteSignedUrlKeySecurityOption1;
import org.openapis.openapi.models.operations.ComputeBackendBucketsDeleteSignedUrlKeySecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeBackendBucketsDeleteSignedUrlKeyRequest req = new ComputeBackendBucketsDeleteSignedUrlKeyRequest("provident", "ipsa", "molestiae") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "odio";
                alt = AltEnum.JSON;
                callback = "esse";
                fields = "esse";
                key = "rem";
                oauthToken = "fuga";
                prettyPrint = false;
                quotaUser = "reprehenderit";
                requestId = "quidem";
                uploadType = "fugiat";
                uploadProtocol = "ut";
                userIp = "eum";
            }};            

            ComputeBackendBucketsDeleteSignedUrlKeyResponse res = sdk.backendBuckets.computeBackendBucketsDeleteSignedUrlKey(req, new ComputeBackendBucketsDeleteSignedUrlKeySecurity() {{
                option1 = new ComputeBackendBucketsDeleteSignedUrlKeySecurityOption1("suscipit", "assumenda") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeBackendBucketsGet

Returns the specified BackendBucket resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeBackendBucketsGetRequest;
import org.openapis.openapi.models.operations.ComputeBackendBucketsGetResponse;
import org.openapis.openapi.models.operations.ComputeBackendBucketsGetSecurity;
import org.openapis.openapi.models.operations.ComputeBackendBucketsGetSecurityOption1;
import org.openapis.openapi.models.operations.ComputeBackendBucketsGetSecurityOption2;
import org.openapis.openapi.models.operations.ComputeBackendBucketsGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeBackendBucketsGetRequest req = new ComputeBackendBucketsGetRequest("eos", "praesentium") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "veritatis";
                alt = AltEnum.JSON;
                callback = "id";
                fields = "quidem";
                key = "neque";
                oauthToken = "quo";
                prettyPrint = false;
                quotaUser = "illum";
                uploadType = "quo";
                uploadProtocol = "fuga";
                userIp = "eius";
            }};            

            ComputeBackendBucketsGetResponse res = sdk.backendBuckets.computeBackendBucketsGet(req, new ComputeBackendBucketsGetSecurity() {{
                option1 = new ComputeBackendBucketsGetSecurityOption1("eos", "voluptas") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.backendBucket != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeBackendBucketsGetIamPolicy

Gets the access control policy for a resource. May be empty if no such policy or resource exists.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeBackendBucketsGetIamPolicyRequest;
import org.openapis.openapi.models.operations.ComputeBackendBucketsGetIamPolicyResponse;
import org.openapis.openapi.models.operations.ComputeBackendBucketsGetIamPolicySecurity;
import org.openapis.openapi.models.operations.ComputeBackendBucketsGetIamPolicySecurityOption1;
import org.openapis.openapi.models.operations.ComputeBackendBucketsGetIamPolicySecurityOption2;
import org.openapis.openapi.models.operations.ComputeBackendBucketsGetIamPolicySecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeBackendBucketsGetIamPolicyRequest req = new ComputeBackendBucketsGetIamPolicyRequest("ab", "cupiditate") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "tempora";
                alt = AltEnum.PROTO;
                callback = "ipsam";
                fields = "aspernatur";
                key = "sequi";
                oauthToken = "quo";
                optionsRequestedPolicyVersion = 459856L;
                prettyPrint = false;
                quotaUser = "recusandae";
                uploadType = "aperiam";
                uploadProtocol = "distinctio";
                userIp = "quod";
            }};            

            ComputeBackendBucketsGetIamPolicyResponse res = sdk.backendBuckets.computeBackendBucketsGetIamPolicy(req, new ComputeBackendBucketsGetIamPolicySecurity() {{
                option1 = new ComputeBackendBucketsGetIamPolicySecurityOption1("dignissimos", "inventore") {{
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

## computeBackendBucketsInsert

Creates a BackendBucket resource in the specified project using the data included in the request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeBackendBucketsInsertRequest;
import org.openapis.openapi.models.operations.ComputeBackendBucketsInsertResponse;
import org.openapis.openapi.models.operations.ComputeBackendBucketsInsertSecurity;
import org.openapis.openapi.models.operations.ComputeBackendBucketsInsertSecurityOption1;
import org.openapis.openapi.models.operations.ComputeBackendBucketsInsertSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.BackendBucket;
import org.openapis.openapi.models.shared.BackendBucketCdnPolicy;
import org.openapis.openapi.models.shared.BackendBucketCdnPolicyBypassCacheOnRequestHeader;
import org.openapis.openapi.models.shared.BackendBucketCdnPolicyCacheKeyPolicy;
import org.openapis.openapi.models.shared.BackendBucketCdnPolicyCacheModeEnum;
import org.openapis.openapi.models.shared.BackendBucketCdnPolicyNegativeCachingPolicy;
import org.openapis.openapi.models.shared.BackendBucketCompressionModeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeBackendBucketsInsertRequest req = new ComputeBackendBucketsInsertRequest("nihil") {{
                dollarXgafv = XgafvEnum.TWO;
                backendBucket = new BackendBucket() {{
                    bucketName = "accusamus";
                    cdnPolicy = new BackendBucketCdnPolicy() {{
                        bypassCacheOnRequestHeaders = new org.openapis.openapi.models.shared.BackendBucketCdnPolicyBypassCacheOnRequestHeader[]{{
                            add(new BackendBucketCdnPolicyBypassCacheOnRequestHeader() {{
                                headerName = "odio";
                            }}),
                            add(new BackendBucketCdnPolicyBypassCacheOnRequestHeader() {{
                                headerName = "occaecati";
                            }}),
                        }};
                        cacheKeyPolicy = new BackendBucketCdnPolicyCacheKeyPolicy() {{
                            includeHttpHeaders = new String[]{{
                                add("sapiente"),
                                add("dolores"),
                            }};
                            queryStringWhitelist = new String[]{{
                                add("molestiae"),
                                add("accusantium"),
                                add("porro"),
                            }};
                        }};;
                        cacheMode = BackendBucketCdnPolicyCacheModeEnum.FORCE_CACHE_ALL;
                        clientTtl = 556429;
                        defaultTtl = 510017;
                        maxTtl = 159867;
                        negativeCaching = false;
                        negativeCachingPolicy = new org.openapis.openapi.models.shared.BackendBucketCdnPolicyNegativeCachingPolicy[]{{
                            add(new BackendBucketCdnPolicyNegativeCachingPolicy() {{
                                code = 143829;
                                ttl = 681393;
                            }}),
                            add(new BackendBucketCdnPolicyNegativeCachingPolicy() {{
                                code = 649463;
                                ttl = 277596;
                            }}),
                            add(new BackendBucketCdnPolicyNegativeCachingPolicy() {{
                                code = 539224;
                                ttl = 128860;
                            }}),
                        }};
                        requestCoalescing = false;
                        serveWhileStale = 325685;
                        signedUrlCacheMaxAgeSec = "nisi";
                        signedUrlKeyNames = new String[]{{
                            add("sapiente"),
                        }};
                    }};;
                    compressionMode = BackendBucketCompressionModeEnum.AUTOMATIC;
                    creationTimestamp = "ratione";
                    customResponseHeaders = new String[]{{
                        add("saepe"),
                    }};
                    description = "occaecati";
                    edgeSecurityPolicy = "atque";
                    enableCdn = false;
                    id = "et";
                    kind = "esse";
                    name = "Sheldon Boehm";
                    selfLink = "nam";
                    selfLinkWithId = "vero";
                }};;
                accessToken = "aliquid";
                alt = AltEnum.JSON;
                callback = "saepe";
                fields = "vel";
                key = "harum";
                oauthToken = "molestiae";
                prettyPrint = false;
                quotaUser = "rerum";
                requestId = "occaecati";
                uploadType = "minima";
                uploadProtocol = "distinctio";
                userIp = "eligendi";
            }};            

            ComputeBackendBucketsInsertResponse res = sdk.backendBuckets.computeBackendBucketsInsert(req, new ComputeBackendBucketsInsertSecurity() {{
                option1 = new ComputeBackendBucketsInsertSecurityOption1("sit", "culpa") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeBackendBucketsList

Retrieves the list of BackendBucket resources available to the specified project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeBackendBucketsListRequest;
import org.openapis.openapi.models.operations.ComputeBackendBucketsListResponse;
import org.openapis.openapi.models.operations.ComputeBackendBucketsListSecurity;
import org.openapis.openapi.models.operations.ComputeBackendBucketsListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeBackendBucketsListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeBackendBucketsListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeBackendBucketsListRequest req = new ComputeBackendBucketsListRequest("tempore") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "cumque";
                alt = AltEnum.JSON;
                callback = "consequatur";
                fields = "minus";
                filter = "quaerat";
                key = "sapiente";
                maxResults = 232865L;
                oauthToken = "esse";
                orderBy = "blanditiis";
                pageToken = "provident";
                prettyPrint = false;
                quotaUser = "a";
                returnPartialSuccess = false;
                uploadType = "nulla";
                uploadProtocol = "quas";
                userIp = "esse";
            }};            

            ComputeBackendBucketsListResponse res = sdk.backendBuckets.computeBackendBucketsList(req, new ComputeBackendBucketsListSecurity() {{
                option1 = new ComputeBackendBucketsListSecurityOption1("quasi", "a") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.backendBucketList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeBackendBucketsPatch

Updates the specified BackendBucket resource with the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeBackendBucketsPatchRequest;
import org.openapis.openapi.models.operations.ComputeBackendBucketsPatchResponse;
import org.openapis.openapi.models.operations.ComputeBackendBucketsPatchSecurity;
import org.openapis.openapi.models.operations.ComputeBackendBucketsPatchSecurityOption1;
import org.openapis.openapi.models.operations.ComputeBackendBucketsPatchSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.BackendBucket;
import org.openapis.openapi.models.shared.BackendBucketCdnPolicy;
import org.openapis.openapi.models.shared.BackendBucketCdnPolicyBypassCacheOnRequestHeader;
import org.openapis.openapi.models.shared.BackendBucketCdnPolicyCacheKeyPolicy;
import org.openapis.openapi.models.shared.BackendBucketCdnPolicyCacheModeEnum;
import org.openapis.openapi.models.shared.BackendBucketCdnPolicyNegativeCachingPolicy;
import org.openapis.openapi.models.shared.BackendBucketCompressionModeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeBackendBucketsPatchRequest req = new ComputeBackendBucketsPatchRequest("error", "sint") {{
                dollarXgafv = XgafvEnum.TWO;
                backendBucket1 = new BackendBucket() {{
                    bucketName = "possimus";
                    cdnPolicy = new BackendBucketCdnPolicy() {{
                        bypassCacheOnRequestHeaders = new org.openapis.openapi.models.shared.BackendBucketCdnPolicyBypassCacheOnRequestHeader[]{{
                            add(new BackendBucketCdnPolicyBypassCacheOnRequestHeader() {{
                                headerName = "eveniet";
                            }}),
                        }};
                        cacheKeyPolicy = new BackendBucketCdnPolicyCacheKeyPolicy() {{
                            includeHttpHeaders = new String[]{{
                                add("facere"),
                                add("veritatis"),
                                add("consequuntur"),
                                add("quasi"),
                            }};
                            queryStringWhitelist = new String[]{{
                                add("culpa"),
                                add("aliquid"),
                                add("tenetur"),
                            }};
                        }};;
                        cacheMode = BackendBucketCdnPolicyCacheModeEnum.CACHE_ALL_STATIC;
                        clientTtl = 936747;
                        defaultTtl = 424032;
                        maxTtl = 447378;
                        negativeCaching = false;
                        negativeCachingPolicy = new org.openapis.openapi.models.shared.BackendBucketCdnPolicyNegativeCachingPolicy[]{{
                            add(new BackendBucketCdnPolicyNegativeCachingPolicy() {{
                                code = 727697;
                                ttl = 849039;
                            }}),
                            add(new BackendBucketCdnPolicyNegativeCachingPolicy() {{
                                code = 742238;
                                ttl = 33304;
                            }}),
                        }};
                        requestCoalescing = false;
                        serveWhileStale = 306986;
                        signedUrlCacheMaxAgeSec = "sapiente";
                        signedUrlKeyNames = new String[]{{
                            add("ullam"),
                        }};
                    }};;
                    compressionMode = BackendBucketCompressionModeEnum.AUTOMATIC;
                    creationTimestamp = "ullam";
                    customResponseHeaders = new String[]{{
                        add("aut"),
                        add("voluptatum"),
                    }};
                    description = "qui";
                    edgeSecurityPolicy = "quibusdam";
                    enableCdn = false;
                    id = "ex";
                    kind = "deleniti";
                    name = "Wilbur Bradtke";
                    selfLink = "quasi";
                    selfLinkWithId = "at";
                }};;
                accessToken = "et";
                alt = AltEnum.MEDIA;
                callback = "ipsa";
                fields = "minima";
                key = "veritatis";
                oauthToken = "consectetur";
                prettyPrint = false;
                quotaUser = "adipisci";
                requestId = "iste";
                uploadType = "temporibus";
                uploadProtocol = "accusantium";
                userIp = "rem";
            }};            

            ComputeBackendBucketsPatchResponse res = sdk.backendBuckets.computeBackendBucketsPatch(req, new ComputeBackendBucketsPatchSecurity() {{
                option1 = new ComputeBackendBucketsPatchSecurityOption1("aut", "laudantium") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeBackendBucketsSetEdgeSecurityPolicy

Sets the edge security policy for the specified backend bucket.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeBackendBucketsSetEdgeSecurityPolicyRequest;
import org.openapis.openapi.models.operations.ComputeBackendBucketsSetEdgeSecurityPolicyResponse;
import org.openapis.openapi.models.operations.ComputeBackendBucketsSetEdgeSecurityPolicySecurity;
import org.openapis.openapi.models.operations.ComputeBackendBucketsSetEdgeSecurityPolicySecurityOption1;
import org.openapis.openapi.models.operations.ComputeBackendBucketsSetEdgeSecurityPolicySecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.SecurityPolicyReference;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeBackendBucketsSetEdgeSecurityPolicyRequest req = new ComputeBackendBucketsSetEdgeSecurityPolicyRequest("eum", "mollitia") {{
                dollarXgafv = XgafvEnum.ONE;
                securityPolicyReference = new SecurityPolicyReference() {{
                    securityPolicy = "corrupti";
                }};;
                accessToken = "non";
                alt = AltEnum.JSON;
                callback = "dolor";
                fields = "occaecati";
                key = "numquam";
                oauthToken = "impedit";
                prettyPrint = false;
                quotaUser = "explicabo";
                requestId = "voluptas";
                uploadType = "aut";
                uploadProtocol = "dignissimos";
                userIp = "dicta";
            }};            

            ComputeBackendBucketsSetEdgeSecurityPolicyResponse res = sdk.backendBuckets.computeBackendBucketsSetEdgeSecurityPolicy(req, new ComputeBackendBucketsSetEdgeSecurityPolicySecurity() {{
                option1 = new ComputeBackendBucketsSetEdgeSecurityPolicySecurityOption1("maiores", "natus") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeBackendBucketsSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeBackendBucketsSetIamPolicyRequest;
import org.openapis.openapi.models.operations.ComputeBackendBucketsSetIamPolicyResponse;
import org.openapis.openapi.models.operations.ComputeBackendBucketsSetIamPolicySecurity;
import org.openapis.openapi.models.operations.ComputeBackendBucketsSetIamPolicySecurityOption1;
import org.openapis.openapi.models.operations.ComputeBackendBucketsSetIamPolicySecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AuditConfig;
import org.openapis.openapi.models.shared.AuditLogConfig;
import org.openapis.openapi.models.shared.AuditLogConfigLogTypeEnum;
import org.openapis.openapi.models.shared.AuthorizationLoggingOptions;
import org.openapis.openapi.models.shared.AuthorizationLoggingOptionsPermissionTypeEnum;
import org.openapis.openapi.models.shared.Binding;
import org.openapis.openapi.models.shared.Condition;
import org.openapis.openapi.models.shared.ConditionIamEnum;
import org.openapis.openapi.models.shared.ConditionOpEnum;
import org.openapis.openapi.models.shared.ConditionSysEnum;
import org.openapis.openapi.models.shared.Expr;
import org.openapis.openapi.models.shared.GlobalSetPolicyRequest;
import org.openapis.openapi.models.shared.LogConfig;
import org.openapis.openapi.models.shared.LogConfigCloudAuditOptions;
import org.openapis.openapi.models.shared.LogConfigCloudAuditOptionsLogNameEnum;
import org.openapis.openapi.models.shared.LogConfigCounterOptions;
import org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField;
import org.openapis.openapi.models.shared.LogConfigDataAccessOptions;
import org.openapis.openapi.models.shared.LogConfigDataAccessOptionsLogModeEnum;
import org.openapis.openapi.models.shared.Policy;
import org.openapis.openapi.models.shared.Rule;
import org.openapis.openapi.models.shared.RuleActionEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeBackendBucketsSetIamPolicyRequest req = new ComputeBackendBucketsSetIamPolicyRequest("velit", "voluptatibus") {{
                dollarXgafv = XgafvEnum.ONE;
                globalSetPolicyRequest = new GlobalSetPolicyRequest() {{
                    bindings = new org.openapis.openapi.models.shared.Binding[]{{
                        add(new Binding() {{
                            bindingId = "aperiam";
                            condition = new Expr() {{
                                description = "ea";
                                expression = "quaerat";
                                location = "consequuntur";
                                title = "Dr.";
                            }};
                            members = new String[]{{
                                add("maxime"),
                                add("dignissimos"),
                                add("officia"),
                            }};
                            role = "asperiores";
                        }}),
                        add(new Binding() {{
                            bindingId = "nemo";
                            condition = new Expr() {{
                                description = "quae";
                                expression = "quaerat";
                                location = "porro";
                                title = "Dr.";
                            }};
                            members = new String[]{{
                                add("ab"),
                                add("adipisci"),
                            }};
                            role = "fuga";
                        }}),
                        add(new Binding() {{
                            bindingId = "id";
                            condition = new Expr() {{
                                description = "suscipit";
                                expression = "velit";
                                location = "culpa";
                                title = "Miss";
                            }};
                            members = new String[]{{
                                add("totam"),
                                add("fugiat"),
                                add("vel"),
                                add("ducimus"),
                            }};
                            role = "quos";
                        }}),
                        add(new Binding() {{
                            bindingId = "vel";
                            condition = new Expr() {{
                                description = "labore";
                                expression = "possimus";
                                location = "facilis";
                                title = "Miss";
                            }};
                            members = new String[]{{
                                add("in"),
                                add("corporis"),
                            }};
                            role = "reiciendis";
                        }}),
                    }};
                    etag = "assumenda";
                    policy = new Policy() {{
                        auditConfigs = new org.openapis.openapi.models.shared.AuditConfig[]{{
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("aperiam"),
                                            add("cum"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("exercitationem"),
                                            add("earum"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("doloribus"),
                                            add("suscipit"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("saepe"),
                                            add("necessitatibus"),
                                            add("dolore"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("adipisci"),
                                    add("non"),
                                    add("amet"),
                                    add("beatae"),
                                }};
                                service = "dignissimos";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("consectetur"),
                                            add("corporis"),
                                            add("harum"),
                                            add("laboriosam"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("libero"),
                                            add("vitae"),
                                            add("accusamus"),
                                            add("similique"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("voluptas"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("minima"),
                                            add("nobis"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("minus"),
                                }};
                                service = "dolores";
                            }}),
                        }};
                        bindings = new org.openapis.openapi.models.shared.Binding[]{{
                            add(new Binding() {{
                                bindingId = "in";
                                condition = new Expr() {{
                                    description = "dolore";
                                    expression = "aliquam";
                                    location = "officiis";
                                    title = "Dr.";
                                }};
                                members = new String[]{{
                                    add("adipisci"),
                                    add("cum"),
                                }};
                                role = "blanditiis";
                            }}),
                            add(new Binding() {{
                                bindingId = "quas";
                                condition = new Expr() {{
                                    description = "hic";
                                    expression = "nesciunt";
                                    location = "culpa";
                                    title = "Ms.";
                                }};
                                members = new String[]{{
                                    add("totam"),
                                    add("hic"),
                                    add("exercitationem"),
                                    add("nobis"),
                                }};
                                role = "sit";
                            }}),
                            add(new Binding() {{
                                bindingId = "rerum";
                                condition = new Expr() {{
                                    description = "sed";
                                    expression = "reiciendis";
                                    location = "explicabo";
                                    title = "Dr.";
                                }};
                                members = new String[]{{
                                    add("voluptate"),
                                    add("expedita"),
                                    add("ab"),
                                }};
                                role = "iste";
                            }}),
                        }};
                        etag = "dolore";
                        rules = new org.openapis.openapi.models.shared.Rule[]{{
                            add(new Rule() {{
                                action = RuleActionEnum.ALLOW;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.CREDENTIALS_TYPE;
                                        op = ConditionOpEnum.NOT_IN;
                                        svc = "explicabo";
                                        sys = ConditionSysEnum.NAME;
                                        values = new String[]{{
                                            add("architecto"),
                                            add("suscipit"),
                                            add("sapiente"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.SECURITY_REALM;
                                        op = ConditionOpEnum.DISCHARGED;
                                        svc = "reiciendis";
                                        sys = ConditionSysEnum.IP;
                                        values = new String[]{{
                                            add("maiores"),
                                            add("incidunt"),
                                            add("sed"),
                                        }};
                                    }}),
                                }};
                                description = "provident";
                                ins = new String[]{{
                                    add("necessitatibus"),
                                    add("ipsum"),
                                }};
                                logConfigs = new org.openapis.openapi.models.shared.LogConfig[]{{
                                    add(new LogConfig() {{
                                        cloudAudit = new LogConfigCloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.DATA_READ;
                                            }};
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.DATA_ACCESS;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Rhonda Klocko";
                                                    value = "sit";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Cecelia Lakin";
                                                    value = "incidunt";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Miss Alyssa Leffler";
                                                    value = "veniam";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Sophie Wisoky";
                                                    value = "aperiam";
                                                }}),
                                            }};
                                            field = "saepe";
                                            metric = "numquam";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_FAIL_CLOSED;
                                        }};
                                    }}),
                                    add(new LogConfig() {{
                                        cloudAudit = new LogConfigCloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.DATA_READ;
                                            }};
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.UNSPECIFIED_LOG_NAME;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Jorge Langosh";
                                                    value = "dolorum";
                                                }}),
                                            }};
                                            field = "voluptatum";
                                            metric = "error";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_MODE_UNSPECIFIED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("debitis"),
                                    add("neque"),
                                    add("dolorum"),
                                }};
                                permissions = new String[]{{
                                    add("officia"),
                                    add("dolorum"),
                                }};
                            }}),
                            add(new Rule() {{
                                action = RuleActionEnum.DENY_WITH_LOG;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.AUTHORITY;
                                        op = ConditionOpEnum.NOT_EQUALS;
                                        svc = "fugit";
                                        sys = ConditionSysEnum.NAME;
                                        values = new String[]{{
                                            add("voluptatem"),
                                            add("culpa"),
                                            add("expedita"),
                                            add("magnam"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.APPROVER;
                                        op = ConditionOpEnum.IN;
                                        svc = "ipsam";
                                        sys = ConditionSysEnum.IP;
                                        values = new String[]{{
                                            add("quas"),
                                            add("repudiandae"),
                                            add("corporis"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.APPROVER;
                                        op = ConditionOpEnum.NOT_EQUALS;
                                        svc = "ex";
                                        sys = ConditionSysEnum.IP;
                                        values = new String[]{{
                                            add("vel"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.AUTHORITY;
                                        op = ConditionOpEnum.NO_OP;
                                        svc = "error";
                                        sys = ConditionSysEnum.IP;
                                        values = new String[]{{
                                            add("reiciendis"),
                                            add("dolorem"),
                                        }};
                                    }}),
                                }};
                                description = "harum";
                                ins = new String[]{{
                                    add("architecto"),
                                }};
                                logConfigs = new org.openapis.openapi.models.shared.LogConfig[]{{
                                    add(new LogConfig() {{
                                        cloudAudit = new LogConfigCloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.ADMIN_WRITE;
                                            }};
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.UNSPECIFIED_LOG_NAME;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Marco White I";
                                                    value = "deserunt";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Lindsey Witting";
                                                    value = "delectus";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Joseph Orn";
                                                    value = "facere";
                                                }}),
                                            }};
                                            field = "fuga";
                                            metric = "praesentium";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_MODE_UNSPECIFIED;
                                        }};
                                    }}),
                                    add(new LogConfig() {{
                                        cloudAudit = new LogConfigCloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.ADMIN_WRITE;
                                            }};
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.ADMIN_ACTIVITY;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Ryan Littel";
                                                    value = "totam";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Ms. Alison Schoen";
                                                    value = "assumenda";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Leah Mueller";
                                                    value = "accusamus";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Darrell Collier";
                                                    value = "corrupti";
                                                }}),
                                            }};
                                            field = "at";
                                            metric = "error";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_MODE_UNSPECIFIED;
                                        }};
                                    }}),
                                    add(new LogConfig() {{
                                        cloudAudit = new LogConfigCloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.ADMIN_WRITE;
                                            }};
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.UNSPECIFIED_LOG_NAME;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Willie Walker";
                                                    value = "labore";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Mr. Anthony Waelchi Sr.";
                                                    value = "enim";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Sheila Wilderman";
                                                    value = "saepe";
                                                }}),
                                            }};
                                            field = "consequuntur";
                                            metric = "occaecati";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_MODE_UNSPECIFIED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("in"),
                                    add("adipisci"),
                                    add("eveniet"),
                                }};
                                permissions = new String[]{{
                                    add("consequuntur"),
                                    add("fugit"),
                                    add("id"),
                                }};
                            }}),
                            add(new Rule() {{
                                action = RuleActionEnum.DENY;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.JUSTIFICATION_TYPE;
                                        op = ConditionOpEnum.DISCHARGED;
                                        svc = "corporis";
                                        sys = ConditionSysEnum.REGION;
                                        values = new String[]{{
                                            add("non"),
                                            add("vero"),
                                            add("doloremque"),
                                            add("iure"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.APPROVER;
                                        op = ConditionOpEnum.NOT_EQUALS;
                                        svc = "quae";
                                        sys = ConditionSysEnum.NO_ATTR;
                                        values = new String[]{{
                                            add("qui"),
                                            add("cum"),
                                            add("iure"),
                                            add("necessitatibus"),
                                        }};
                                    }}),
                                }};
                                description = "ratione";
                                ins = new String[]{{
                                    add("distinctio"),
                                    add("voluptatum"),
                                    add("rem"),
                                }};
                                logConfigs = new org.openapis.openapi.models.shared.LogConfig[]{{
                                    add(new LogConfig() {{
                                        cloudAudit = new LogConfigCloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.ADMIN_WRITE;
                                            }};
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.UNSPECIFIED_LOG_NAME;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Katrina Kovacek";
                                                    value = "alias";
                                                }}),
                                            }};
                                            field = "maiores";
                                            metric = "reiciendis";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_FAIL_CLOSED;
                                        }};
                                    }}),
                                    add(new LogConfig() {{
                                        cloudAudit = new LogConfigCloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.DATA_WRITE;
                                            }};
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.ADMIN_ACTIVITY;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Danny Berge";
                                                    value = "quaerat";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Carla Graham";
                                                    value = "debitis";
                                                }}),
                                            }};
                                            field = "laudantium";
                                            metric = "eum";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_FAIL_CLOSED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("esse"),
                                    add("provident"),
                                    add("quis"),
                                    add("eum"),
                                }};
                                permissions = new String[]{{
                                    add("provident"),
                                    add("aspernatur"),
                                    add("ullam"),
                                    add("quasi"),
                                }};
                            }}),
                        }};
                        version = 657020;
                    }};;
                }};;
                accessToken = "nostrum";
                alt = AltEnum.MEDIA;
                callback = "provident";
                fields = "possimus";
                key = "animi";
                oauthToken = "ex";
                prettyPrint = false;
                quotaUser = "aliquid";
                uploadType = "accusantium";
                uploadProtocol = "repellat";
                userIp = "doloribus";
            }};            

            ComputeBackendBucketsSetIamPolicyResponse res = sdk.backendBuckets.computeBackendBucketsSetIamPolicy(req, new ComputeBackendBucketsSetIamPolicySecurity() {{
                option1 = new ComputeBackendBucketsSetIamPolicySecurityOption1("ullam", "in") {{
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

## computeBackendBucketsTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeBackendBucketsTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.ComputeBackendBucketsTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.ComputeBackendBucketsTestIamPermissionsSecurity;
import org.openapis.openapi.models.operations.ComputeBackendBucketsTestIamPermissionsSecurityOption1;
import org.openapis.openapi.models.operations.ComputeBackendBucketsTestIamPermissionsSecurityOption2;
import org.openapis.openapi.models.operations.ComputeBackendBucketsTestIamPermissionsSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TestPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeBackendBucketsTestIamPermissionsRequest req = new ComputeBackendBucketsTestIamPermissionsRequest("nam", "earum") {{
                dollarXgafv = XgafvEnum.TWO;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("placeat"),
                        add("modi"),
                        add("voluptatibus"),
                    }};
                }};;
                accessToken = "molestias";
                alt = AltEnum.PROTO;
                callback = "sapiente";
                fields = "cumque";
                key = "vitae";
                oauthToken = "rerum";
                prettyPrint = false;
                quotaUser = "tempora";
                uploadType = "quis";
                uploadProtocol = "inventore";
                userIp = "fugit";
            }};            

            ComputeBackendBucketsTestIamPermissionsResponse res = sdk.backendBuckets.computeBackendBucketsTestIamPermissions(req, new ComputeBackendBucketsTestIamPermissionsSecurity() {{
                option1 = new ComputeBackendBucketsTestIamPermissionsSecurityOption1("cumque", "quae") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.testPermissionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeBackendBucketsUpdate

Updates the specified BackendBucket resource with the data included in the request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeBackendBucketsUpdateRequest;
import org.openapis.openapi.models.operations.ComputeBackendBucketsUpdateResponse;
import org.openapis.openapi.models.operations.ComputeBackendBucketsUpdateSecurity;
import org.openapis.openapi.models.operations.ComputeBackendBucketsUpdateSecurityOption1;
import org.openapis.openapi.models.operations.ComputeBackendBucketsUpdateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.BackendBucket;
import org.openapis.openapi.models.shared.BackendBucketCdnPolicy;
import org.openapis.openapi.models.shared.BackendBucketCdnPolicyBypassCacheOnRequestHeader;
import org.openapis.openapi.models.shared.BackendBucketCdnPolicyCacheKeyPolicy;
import org.openapis.openapi.models.shared.BackendBucketCdnPolicyCacheModeEnum;
import org.openapis.openapi.models.shared.BackendBucketCdnPolicyNegativeCachingPolicy;
import org.openapis.openapi.models.shared.BackendBucketCompressionModeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeBackendBucketsUpdateRequest req = new ComputeBackendBucketsUpdateRequest("perferendis", "velit") {{
                dollarXgafv = XgafvEnum.ONE;
                backendBucket1 = new BackendBucket() {{
                    bucketName = "eum";
                    cdnPolicy = new BackendBucketCdnPolicy() {{
                        bypassCacheOnRequestHeaders = new org.openapis.openapi.models.shared.BackendBucketCdnPolicyBypassCacheOnRequestHeader[]{{
                            add(new BackendBucketCdnPolicyBypassCacheOnRequestHeader() {{
                                headerName = "rem";
                            }}),
                            add(new BackendBucketCdnPolicyBypassCacheOnRequestHeader() {{
                                headerName = "at";
                            }}),
                        }};
                        cacheKeyPolicy = new BackendBucketCdnPolicyCacheKeyPolicy() {{
                            includeHttpHeaders = new String[]{{
                                add("eos"),
                                add("sapiente"),
                                add("eum"),
                                add("dicta"),
                            }};
                            queryStringWhitelist = new String[]{{
                                add("beatae"),
                                add("cupiditate"),
                            }};
                        }};;
                        cacheMode = BackendBucketCdnPolicyCacheModeEnum.INVALID_CACHE_MODE;
                        clientTtl = 936469;
                        defaultTtl = 745398;
                        maxTtl = 940782;
                        negativeCaching = false;
                        negativeCachingPolicy = new org.openapis.openapi.models.shared.BackendBucketCdnPolicyNegativeCachingPolicy[]{{
                            add(new BackendBucketCdnPolicyNegativeCachingPolicy() {{
                                code = 52508;
                                ttl = 935833;
                            }}),
                            add(new BackendBucketCdnPolicyNegativeCachingPolicy() {{
                                code = 596211;
                                ttl = 983427;
                            }}),
                            add(new BackendBucketCdnPolicyNegativeCachingPolicy() {{
                                code = 891801;
                                ttl = 399802;
                            }}),
                            add(new BackendBucketCdnPolicyNegativeCachingPolicy() {{
                                code = 780931;
                                ttl = 380335;
                            }}),
                        }};
                        requestCoalescing = false;
                        serveWhileStale = 211534;
                        signedUrlCacheMaxAgeSec = "fugit";
                        signedUrlKeyNames = new String[]{{
                            add("fuga"),
                            add("ratione"),
                            add("animi"),
                            add("necessitatibus"),
                        }};
                    }};;
                    compressionMode = BackendBucketCompressionModeEnum.DISABLED;
                    creationTimestamp = "consequatur";
                    customResponseHeaders = new String[]{{
                        add("et"),
                    }};
                    description = "ducimus";
                    edgeSecurityPolicy = "natus";
                    enableCdn = false;
                    id = "occaecati";
                    kind = "suscipit";
                    name = "Joyce Cummings";
                    selfLink = "necessitatibus";
                    selfLinkWithId = "ipsa";
                }};;
                accessToken = "tempora";
                alt = AltEnum.MEDIA;
                callback = "molestiae";
                fields = "dicta";
                key = "iusto";
                oauthToken = "esse";
                prettyPrint = false;
                quotaUser = "praesentium";
                requestId = "maiores";
                uploadType = "reiciendis";
                uploadProtocol = "vel";
                userIp = "architecto";
            }};            

            ComputeBackendBucketsUpdateResponse res = sdk.backendBuckets.computeBackendBucketsUpdate(req, new ComputeBackendBucketsUpdateSecurity() {{
                option1 = new ComputeBackendBucketsUpdateSecurityOption1("fugiat", "doloremque") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
