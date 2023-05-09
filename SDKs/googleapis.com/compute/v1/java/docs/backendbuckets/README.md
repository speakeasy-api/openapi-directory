# backendBuckets

### Available Operations

* [computeBackendBucketsAddSignedUrlKey](#computebackendbucketsaddsignedurlkey) - Adds a key for validating requests with signed URLs for this backend bucket.
* [computeBackendBucketsDelete](#computebackendbucketsdelete) - Deletes the specified BackendBucket resource.
* [computeBackendBucketsDeleteSignedUrlKey](#computebackendbucketsdeletesignedurlkey) - Deletes a key for validating requests with signed URLs for this backend bucket.
* [computeBackendBucketsGet](#computebackendbucketsget) - Returns the specified BackendBucket resource.
* [computeBackendBucketsInsert](#computebackendbucketsinsert) - Creates a BackendBucket resource in the specified project using the data included in the request.
* [computeBackendBucketsList](#computebackendbucketslist) - Retrieves the list of BackendBucket resources available to the specified project.
* [computeBackendBucketsPatch](#computebackendbucketspatch) - Updates the specified BackendBucket resource with the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
* [computeBackendBucketsSetEdgeSecurityPolicy](#computebackendbucketssetedgesecuritypolicy) - Sets the edge security policy for the specified backend bucket.
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

            ComputeBackendBucketsAddSignedUrlKeyRequest req = new ComputeBackendBucketsAddSignedUrlKeyRequest("accusamus", "inventore") {{
                dollarXgafv = XgafvEnum.ONE;
                signedUrlKey = new SignedUrlKey() {{
                    keyName = "et";
                    keyValue = "dolorum";
                }};;
                accessToken = "laborum";
                alt = AltEnum.PROTO;
                callback = "velit";
                fields = "eum";
                key = "autem";
                oauthToken = "nobis";
                prettyPrint = false;
                quotaUser = "quas";
                requestId = "assumenda";
                uploadType = "nulla";
                uploadProtocol = "voluptas";
                userIp = "libero";
            }};            

            ComputeBackendBucketsAddSignedUrlKeyResponse res = sdk.backendBuckets.computeBackendBucketsAddSignedUrlKey(req, new ComputeBackendBucketsAddSignedUrlKeySecurity() {{
                option1 = new ComputeBackendBucketsAddSignedUrlKeySecurityOption1("quasi", "tempora") {{
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

            ComputeBackendBucketsDeleteRequest req = new ComputeBackendBucketsDeleteRequest("numquam", "explicabo") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ipsa";
                alt = AltEnum.MEDIA;
                callback = "magnam";
                fields = "odio";
                key = "eius";
                oauthToken = "esse";
                prettyPrint = false;
                quotaUser = "esse";
                requestId = "rem";
                uploadType = "fuga";
                uploadProtocol = "reprehenderit";
                userIp = "quidem";
            }};            

            ComputeBackendBucketsDeleteResponse res = sdk.backendBuckets.computeBackendBucketsDelete(req, new ComputeBackendBucketsDeleteSecurity() {{
                option1 = new ComputeBackendBucketsDeleteSecurityOption1("fugiat", "ut") {{
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

            ComputeBackendBucketsDeleteSignedUrlKeyRequest req = new ComputeBackendBucketsDeleteSignedUrlKeyRequest("eum", "suscipit", "assumenda") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "praesentium";
                alt = AltEnum.PROTO;
                callback = "veritatis";
                fields = "ipsa";
                key = "id";
                oauthToken = "quidem";
                prettyPrint = false;
                quotaUser = "neque";
                requestId = "quo";
                uploadType = "illum";
                uploadProtocol = "quo";
                userIp = "fuga";
            }};            

            ComputeBackendBucketsDeleteSignedUrlKeyResponse res = sdk.backendBuckets.computeBackendBucketsDeleteSignedUrlKey(req, new ComputeBackendBucketsDeleteSignedUrlKeySecurity() {{
                option1 = new ComputeBackendBucketsDeleteSignedUrlKeySecurityOption1("eius", "eos") {{
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

            ComputeBackendBucketsGetRequest req = new ComputeBackendBucketsGetRequest("voluptas", "ab") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "consequatur";
                alt = AltEnum.JSON;
                callback = "debitis";
                fields = "ipsam";
                key = "aspernatur";
                oauthToken = "sequi";
                prettyPrint = false;
                quotaUser = "quo";
                uploadType = "esse";
                uploadProtocol = "recusandae";
                userIp = "aperiam";
            }};            

            ComputeBackendBucketsGetResponse res = sdk.backendBuckets.computeBackendBucketsGet(req, new ComputeBackendBucketsGetSecurity() {{
                option1 = new ComputeBackendBucketsGetSecurityOption1("distinctio", "quod") {{
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

            ComputeBackendBucketsInsertRequest req = new ComputeBackendBucketsInsertRequest("dignissimos") {{
                dollarXgafv = XgafvEnum.ONE;
                backendBucket = new BackendBucket() {{
                    bucketName = "nihil";
                    cdnPolicy = new BackendBucketCdnPolicy() {{
                        bypassCacheOnRequestHeaders = new org.openapis.openapi.models.shared.BackendBucketCdnPolicyBypassCacheOnRequestHeader[]{{
                            add(new BackendBucketCdnPolicyBypassCacheOnRequestHeader() {{
                                headerName = "accusamus";
                            }}),
                            add(new BackendBucketCdnPolicyBypassCacheOnRequestHeader() {{
                                headerName = "aliquam";
                            }}),
                            add(new BackendBucketCdnPolicyBypassCacheOnRequestHeader() {{
                                headerName = "odio";
                            }}),
                        }};
                        cacheKeyPolicy = new BackendBucketCdnPolicyCacheKeyPolicy() {{
                            includeHttpHeaders = new String[]{{
                                add("commodi"),
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
                }};;
                accessToken = "vero";
                alt = AltEnum.MEDIA;
                callback = "quasi";
                fields = "saepe";
                key = "vel";
                oauthToken = "harum";
                prettyPrint = false;
                quotaUser = "molestiae";
                requestId = "rerum";
                uploadType = "occaecati";
                uploadProtocol = "minima";
                userIp = "distinctio";
            }};            

            ComputeBackendBucketsInsertResponse res = sdk.backendBuckets.computeBackendBucketsInsert(req, new ComputeBackendBucketsInsertSecurity() {{
                option1 = new ComputeBackendBucketsInsertSecurityOption1("eligendi", "sit") {{
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

            ComputeBackendBucketsListRequest req = new ComputeBackendBucketsListRequest("culpa") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "adipisci";
                alt = AltEnum.PROTO;
                callback = "consequuntur";
                fields = "consequatur";
                filter = "minus";
                key = "quaerat";
                maxResults = 959167L;
                oauthToken = "consectetur";
                orderBy = "esse";
                pageToken = "blanditiis";
                prettyPrint = false;
                quotaUser = "provident";
                returnPartialSuccess = false;
                uploadType = "a";
                uploadProtocol = "nulla";
                userIp = "quas";
            }};            

            ComputeBackendBucketsListResponse res = sdk.backendBuckets.computeBackendBucketsList(req, new ComputeBackendBucketsListSecurity() {{
                option1 = new ComputeBackendBucketsListSecurityOption1("esse", "quasi") {{
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

            ComputeBackendBucketsPatchRequest req = new ComputeBackendBucketsPatchRequest("a", "error") {{
                dollarXgafv = XgafvEnum.TWO;
                backendBucket1 = new BackendBucket() {{
                    bucketName = "pariatur";
                    cdnPolicy = new BackendBucketCdnPolicy() {{
                        bypassCacheOnRequestHeaders = new org.openapis.openapi.models.shared.BackendBucketCdnPolicyBypassCacheOnRequestHeader[]{{
                            add(new BackendBucketCdnPolicyBypassCacheOnRequestHeader() {{
                                headerName = "quia";
                            }}),
                            add(new BackendBucketCdnPolicyBypassCacheOnRequestHeader() {{
                                headerName = "eveniet";
                            }}),
                            add(new BackendBucketCdnPolicyBypassCacheOnRequestHeader() {{
                                headerName = "asperiores";
                            }}),
                            add(new BackendBucketCdnPolicyBypassCacheOnRequestHeader() {{
                                headerName = "facere";
                            }}),
                        }};
                        cacheKeyPolicy = new BackendBucketCdnPolicyCacheKeyPolicy() {{
                            includeHttpHeaders = new String[]{{
                                add("consequuntur"),
                            }};
                            queryStringWhitelist = new String[]{{
                                add("similique"),
                            }};
                        }};;
                        cacheMode = BackendBucketCdnPolicyCacheModeEnum.INVALID_CACHE_MODE;
                        clientTtl = 398434;
                        defaultTtl = 949298;
                        maxTtl = 62713;
                        negativeCaching = false;
                        negativeCachingPolicy = new org.openapis.openapi.models.shared.BackendBucketCdnPolicyNegativeCachingPolicy[]{{
                            add(new BackendBucketCdnPolicyNegativeCachingPolicy() {{
                                code = 424032;
                                ttl = 447378;
                            }}),
                            add(new BackendBucketCdnPolicyNegativeCachingPolicy() {{
                                code = 258684;
                                ttl = 727697;
                            }}),
                            add(new BackendBucketCdnPolicyNegativeCachingPolicy() {{
                                code = 849039;
                                ttl = 742238;
                            }}),
                            add(new BackendBucketCdnPolicyNegativeCachingPolicy() {{
                                code = 33304;
                                ttl = 306986;
                            }}),
                        }};
                        requestCoalescing = false;
                        serveWhileStale = 958983;
                        signedUrlCacheMaxAgeSec = "dicta";
                        signedUrlKeyNames = new String[]{{
                            add("reprehenderit"),
                            add("ullam"),
                        }};
                    }};;
                    compressionMode = BackendBucketCompressionModeEnum.AUTOMATIC;
                    creationTimestamp = "aut";
                    customResponseHeaders = new String[]{{
                        add("qui"),
                        add("quibusdam"),
                        add("ex"),
                    }};
                    description = "deleniti";
                    edgeSecurityPolicy = "itaque";
                    enableCdn = false;
                    id = "dolorum";
                    kind = "architecto";
                    name = "Irvin Boyle III";
                    selfLink = "ipsa";
                }};;
                accessToken = "minima";
                alt = AltEnum.JSON;
                callback = "consectetur";
                fields = "adipisci";
                key = "iste";
                oauthToken = "temporibus";
                prettyPrint = false;
                quotaUser = "accusantium";
                requestId = "rem";
                uploadType = "aut";
                uploadProtocol = "laudantium";
                userIp = "eum";
            }};            

            ComputeBackendBucketsPatchResponse res = sdk.backendBuckets.computeBackendBucketsPatch(req, new ComputeBackendBucketsPatchSecurity() {{
                option1 = new ComputeBackendBucketsPatchSecurityOption1("mollitia", "ab") {{
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

            ComputeBackendBucketsSetEdgeSecurityPolicyRequest req = new ComputeBackendBucketsSetEdgeSecurityPolicyRequest("corrupti", "non") {{
                dollarXgafv = XgafvEnum.ONE;
                securityPolicyReference = new SecurityPolicyReference() {{
                    securityPolicy = "dolor";
                }};;
                accessToken = "occaecati";
                alt = AltEnum.JSON;
                callback = "impedit";
                fields = "explicabo";
                key = "voluptas";
                oauthToken = "aut";
                prettyPrint = false;
                quotaUser = "dignissimos";
                requestId = "dicta";
                uploadType = "maiores";
                uploadProtocol = "natus";
                userIp = "velit";
            }};            

            ComputeBackendBucketsSetEdgeSecurityPolicyResponse res = sdk.backendBuckets.computeBackendBucketsSetEdgeSecurityPolicy(req, new ComputeBackendBucketsSetEdgeSecurityPolicySecurity() {{
                option1 = new ComputeBackendBucketsSetEdgeSecurityPolicySecurityOption1("voluptatibus", "voluptas") {{
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

            ComputeBackendBucketsUpdateRequest req = new ComputeBackendBucketsUpdateRequest("asperiores", "aperiam") {{
                dollarXgafv = XgafvEnum.ONE;
                backendBucket1 = new BackendBucket() {{
                    bucketName = "quaerat";
                    cdnPolicy = new BackendBucketCdnPolicy() {{
                        bypassCacheOnRequestHeaders = new org.openapis.openapi.models.shared.BackendBucketCdnPolicyBypassCacheOnRequestHeader[]{{
                            add(new BackendBucketCdnPolicyBypassCacheOnRequestHeader() {{
                                headerName = "repellendus";
                            }}),
                        }};
                        cacheKeyPolicy = new BackendBucketCdnPolicyCacheKeyPolicy() {{
                            includeHttpHeaders = new String[]{{
                                add("maxime"),
                                add("dignissimos"),
                                add("officia"),
                            }};
                            queryStringWhitelist = new String[]{{
                                add("nemo"),
                                add("quae"),
                                add("quaerat"),
                                add("porro"),
                            }};
                        }};;
                        cacheMode = BackendBucketCdnPolicyCacheModeEnum.USE_ORIGIN_HEADERS;
                        clientTtl = 288398;
                        defaultTtl = 70447;
                        maxTtl = 241418;
                        negativeCaching = false;
                        negativeCachingPolicy = new org.openapis.openapi.models.shared.BackendBucketCdnPolicyNegativeCachingPolicy[]{{
                            add(new BackendBucketCdnPolicyNegativeCachingPolicy() {{
                                code = 662505;
                                ttl = 380729;
                            }}),
                            add(new BackendBucketCdnPolicyNegativeCachingPolicy() {{
                                code = 246063;
                                ttl = 633931;
                            }}),
                            add(new BackendBucketCdnPolicyNegativeCachingPolicy() {{
                                code = 665859;
                                ttl = 926880;
                            }}),
                        }};
                        requestCoalescing = false;
                        serveWhileStale = 517309;
                        signedUrlCacheMaxAgeSec = "fugiat";
                        signedUrlKeyNames = new String[]{{
                            add("ducimus"),
                            add("quos"),
                        }};
                    }};;
                    compressionMode = BackendBucketCompressionModeEnum.AUTOMATIC;
                    creationTimestamp = "labore";
                    customResponseHeaders = new String[]{{
                        add("facilis"),
                        add("cum"),
                        add("commodi"),
                        add("in"),
                    }};
                    description = "corporis";
                    edgeSecurityPolicy = "reiciendis";
                    enableCdn = false;
                    id = "assumenda";
                    kind = "nemo";
                    name = "Gilbert Bayer";
                    selfLink = "in";
                }};;
                accessToken = "exercitationem";
                alt = AltEnum.PROTO;
                callback = "facere";
                fields = "numquam";
                key = "doloribus";
                oauthToken = "suscipit";
                prettyPrint = false;
                quotaUser = "reiciendis";
                requestId = "quidem";
                uploadType = "saepe";
                uploadProtocol = "necessitatibus";
                userIp = "dolore";
            }};            

            ComputeBackendBucketsUpdateResponse res = sdk.backendBuckets.computeBackendBucketsUpdate(req, new ComputeBackendBucketsUpdateSecurity() {{
                option1 = new ComputeBackendBucketsUpdateSecurityOption1("sunt", "asperiores") {{
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
