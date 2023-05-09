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

            ComputeBackendBucketsAddSignedUrlKeyRequest req = new ComputeBackendBucketsAddSignedUrlKeyRequest("eum", "autem") {{
                dollarXgafv = XgafvEnum.TWO;
                signedUrlKey = new SignedUrlKey() {{
                    keyName = "quas";
                    keyValue = "assumenda";
                }};;
                accessToken = "nulla";
                alt = AltEnum.MEDIA;
                callback = "libero";
                fields = "quasi";
                key = "tempora";
                oauthToken = "numquam";
                prettyPrint = false;
                quotaUser = "explicabo";
                requestId = "provident";
                uploadType = "ipsa";
                uploadProtocol = "molestiae";
                userIp = "magnam";
            }};            

            ComputeBackendBucketsAddSignedUrlKeyResponse res = sdk.backendBuckets.computeBackendBucketsAddSignedUrlKey(req, new ComputeBackendBucketsAddSignedUrlKeySecurity() {{
                option1 = new ComputeBackendBucketsAddSignedUrlKeySecurityOption1("odio", "eius") {{
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

            ComputeBackendBucketsDeleteRequest req = new ComputeBackendBucketsDeleteRequest("esse", "esse") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "fuga";
                alt = AltEnum.MEDIA;
                callback = "quidem";
                fields = "fugiat";
                key = "ut";
                oauthToken = "eum";
                prettyPrint = false;
                quotaUser = "suscipit";
                requestId = "assumenda";
                uploadType = "eos";
                uploadProtocol = "praesentium";
                userIp = "quisquam";
            }};            

            ComputeBackendBucketsDeleteResponse res = sdk.backendBuckets.computeBackendBucketsDelete(req, new ComputeBackendBucketsDeleteSecurity() {{
                option1 = new ComputeBackendBucketsDeleteSecurityOption1("veritatis", "ipsa") {{
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

            ComputeBackendBucketsDeleteSignedUrlKeyRequest req = new ComputeBackendBucketsDeleteSignedUrlKeyRequest("id", "quidem", "neque") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "illum";
                alt = AltEnum.PROTO;
                callback = "fuga";
                fields = "eius";
                key = "eos";
                oauthToken = "voluptas";
                prettyPrint = false;
                quotaUser = "ab";
                requestId = "cupiditate";
                uploadType = "consequatur";
                uploadProtocol = "tempora";
                userIp = "debitis";
            }};            

            ComputeBackendBucketsDeleteSignedUrlKeyResponse res = sdk.backendBuckets.computeBackendBucketsDeleteSignedUrlKey(req, new ComputeBackendBucketsDeleteSignedUrlKeySecurity() {{
                option1 = new ComputeBackendBucketsDeleteSignedUrlKeySecurityOption1("ipsam", "aspernatur") {{
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

            ComputeBackendBucketsGetRequest req = new ComputeBackendBucketsGetRequest("sequi", "quo") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "recusandae";
                alt = AltEnum.JSON;
                callback = "distinctio";
                fields = "quod";
                key = "dignissimos";
                oauthToken = "inventore";
                prettyPrint = false;
                quotaUser = "nihil";
                uploadType = "totam";
                uploadProtocol = "accusamus";
                userIp = "aliquam";
            }};            

            ComputeBackendBucketsGetResponse res = sdk.backendBuckets.computeBackendBucketsGet(req, new ComputeBackendBucketsGetSecurity() {{
                option1 = new ComputeBackendBucketsGetSecurityOption1("odio", "occaecati") {{
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

            ComputeBackendBucketsGetIamPolicyRequest req = new ComputeBackendBucketsGetIamPolicyRequest("commodi", "sapiente") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "deserunt";
                alt = AltEnum.MEDIA;
                callback = "accusantium";
                fields = "porro";
                key = "eum";
                oauthToken = "quas";
                optionsRequestedPolicyVersion = 510017L;
                prettyPrint = false;
                quotaUser = "consequuntur";
                uploadType = "deleniti";
                uploadProtocol = "fugit";
                userIp = "fuga";
            }};            

            ComputeBackendBucketsGetIamPolicyResponse res = sdk.backendBuckets.computeBackendBucketsGetIamPolicy(req, new ComputeBackendBucketsGetIamPolicySecurity() {{
                option1 = new ComputeBackendBucketsGetIamPolicySecurityOption1("mollitia", "incidunt") {{
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

            ComputeBackendBucketsInsertRequest req = new ComputeBackendBucketsInsertRequest("atque") {{
                dollarXgafv = XgafvEnum.ONE;
                backendBucket = new BackendBucket() {{
                    bucketName = "minima";
                    cdnPolicy = new BackendBucketCdnPolicy() {{
                        bypassCacheOnRequestHeaders = new org.openapis.openapi.models.shared.BackendBucketCdnPolicyBypassCacheOnRequestHeader[]{{
                            add(new BackendBucketCdnPolicyBypassCacheOnRequestHeader() {{
                                headerName = "fugit";
                            }}),
                            add(new BackendBucketCdnPolicyBypassCacheOnRequestHeader() {{
                                headerName = "sapiente";
                            }}),
                        }};
                        cacheKeyPolicy = new BackendBucketCdnPolicyCacheKeyPolicy() {{
                            includeHttpHeaders = new String[]{{
                                add("ratione"),
                            }};
                            queryStringWhitelist = new String[]{{
                                add("saepe"),
                            }};
                        }};;
                        cacheMode = BackendBucketCdnPolicyCacheModeEnum.INVALID_CACHE_MODE;
                        clientTtl = 543806;
                        defaultTtl = 92260;
                        maxTtl = 456911;
                        negativeCaching = false;
                        negativeCachingPolicy = new org.openapis.openapi.models.shared.BackendBucketCdnPolicyNegativeCachingPolicy[]{{
                            add(new BackendBucketCdnPolicyNegativeCachingPolicy() {{
                                code = 882042;
                                ttl = 82971;
                            }}),
                            add(new BackendBucketCdnPolicyNegativeCachingPolicy() {{
                                code = 458604;
                                ttl = 800379;
                            }}),
                            add(new BackendBucketCdnPolicyNegativeCachingPolicy() {{
                                code = 724168;
                                ttl = 877131;
                            }}),
                            add(new BackendBucketCdnPolicyNegativeCachingPolicy() {{
                                code = 399025;
                                ttl = 93459;
                            }}),
                        }};
                        requestCoalescing = false;
                        serveWhileStale = 904045;
                        signedUrlCacheMaxAgeSec = "vel";
                        signedUrlKeyNames = new String[]{{
                            add("molestiae"),
                            add("rerum"),
                            add("occaecati"),
                        }};
                    }};;
                    compressionMode = BackendBucketCompressionModeEnum.AUTOMATIC;
                    creationTimestamp = "distinctio";
                    customResponseHeaders = new String[]{{
                        add("sit"),
                        add("culpa"),
                        add("tempore"),
                        add("adipisci"),
                    }};
                    description = "cumque";
                    edgeSecurityPolicy = "consequuntur";
                    enableCdn = false;
                    id = "consequatur";
                    kind = "minus";
                    name = "Miranda Feest";
                    selfLink = "provident";
                }};;
                accessToken = "a";
                alt = AltEnum.PROTO;
                callback = "quas";
                fields = "esse";
                key = "quasi";
                oauthToken = "a";
                prettyPrint = false;
                quotaUser = "error";
                requestId = "sint";
                uploadType = "pariatur";
                uploadProtocol = "possimus";
                userIp = "quia";
            }};            

            ComputeBackendBucketsInsertResponse res = sdk.backendBuckets.computeBackendBucketsInsert(req, new ComputeBackendBucketsInsertSecurity() {{
                option1 = new ComputeBackendBucketsInsertSecurityOption1("eveniet", "asperiores") {{
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

            ComputeBackendBucketsListRequest req = new ComputeBackendBucketsListRequest("facere") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "consequuntur";
                alt = AltEnum.JSON;
                callback = "similique";
                fields = "culpa";
                filter = "aliquid";
                key = "tenetur";
                maxResults = 62713L;
                oauthToken = "earum";
                orderBy = "vel";
                pageToken = "in";
                prettyPrint = false;
                quotaUser = "eius";
                returnPartialSuccess = false;
                uploadType = "libero";
                uploadProtocol = "illum";
                userIp = "soluta";
            }};            

            ComputeBackendBucketsListResponse res = sdk.backendBuckets.computeBackendBucketsList(req, new ComputeBackendBucketsListSecurity() {{
                option1 = new ComputeBackendBucketsListSecurityOption1("accusantium", "aliquam") {{
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

            ComputeBackendBucketsPatchRequest req = new ComputeBackendBucketsPatchRequest("sapiente", "dicta") {{
                dollarXgafv = XgafvEnum.ONE;
                backendBucket1 = new BackendBucket() {{
                    bucketName = "reprehenderit";
                    cdnPolicy = new BackendBucketCdnPolicy() {{
                        bypassCacheOnRequestHeaders = new org.openapis.openapi.models.shared.BackendBucketCdnPolicyBypassCacheOnRequestHeader[]{{
                            add(new BackendBucketCdnPolicyBypassCacheOnRequestHeader() {{
                                headerName = "nisi";
                            }}),
                            add(new BackendBucketCdnPolicyBypassCacheOnRequestHeader() {{
                                headerName = "aut";
                            }}),
                        }};
                        cacheKeyPolicy = new BackendBucketCdnPolicyCacheKeyPolicy() {{
                            includeHttpHeaders = new String[]{{
                                add("qui"),
                                add("quibusdam"),
                                add("ex"),
                            }};
                            queryStringWhitelist = new String[]{{
                                add("itaque"),
                                add("dolorum"),
                                add("architecto"),
                            }};
                        }};;
                        cacheMode = BackendBucketCdnPolicyCacheModeEnum.INVALID_CACHE_MODE;
                        clientTtl = 945302;
                        defaultTtl = 98478;
                        maxTtl = 869489;
                        negativeCaching = false;
                        negativeCachingPolicy = new org.openapis.openapi.models.shared.BackendBucketCdnPolicyNegativeCachingPolicy[]{{
                            add(new BackendBucketCdnPolicyNegativeCachingPolicy() {{
                                code = 454162;
                                ttl = 55965;
                            }}),
                        }};
                        requestCoalescing = false;
                        serveWhileStale = 326701;
                        signedUrlCacheMaxAgeSec = "veritatis";
                        signedUrlKeyNames = new String[]{{
                            add("adipisci"),
                        }};
                    }};;
                    compressionMode = BackendBucketCompressionModeEnum.DISABLED;
                    creationTimestamp = "temporibus";
                    customResponseHeaders = new String[]{{
                        add("rem"),
                    }};
                    description = "aut";
                    edgeSecurityPolicy = "laudantium";
                    enableCdn = false;
                    id = "eum";
                    kind = "mollitia";
                    name = "Mrs. Priscilla Fritsch";
                    selfLink = "numquam";
                }};;
                accessToken = "impedit";
                alt = AltEnum.JSON;
                callback = "voluptas";
                fields = "aut";
                key = "dignissimos";
                oauthToken = "dicta";
                prettyPrint = false;
                quotaUser = "maiores";
                requestId = "natus";
                uploadType = "velit";
                uploadProtocol = "voluptatibus";
                userIp = "voluptas";
            }};            

            ComputeBackendBucketsPatchResponse res = sdk.backendBuckets.computeBackendBucketsPatch(req, new ComputeBackendBucketsPatchSecurity() {{
                option1 = new ComputeBackendBucketsPatchSecurityOption1("asperiores", "aperiam") {{
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

            ComputeBackendBucketsSetEdgeSecurityPolicyRequest req = new ComputeBackendBucketsSetEdgeSecurityPolicyRequest("ea", "quaerat") {{
                dollarXgafv = XgafvEnum.ONE;
                securityPolicyReference = new SecurityPolicyReference() {{
                    securityPolicy = "repellendus";
                }};;
                accessToken = "officia";
                alt = AltEnum.PROTO;
                callback = "dignissimos";
                fields = "officia";
                key = "asperiores";
                oauthToken = "nemo";
                prettyPrint = false;
                quotaUser = "quae";
                requestId = "quaerat";
                uploadType = "porro";
                uploadProtocol = "quod";
                userIp = "labore";
            }};            

            ComputeBackendBucketsSetEdgeSecurityPolicyResponse res = sdk.backendBuckets.computeBackendBucketsSetEdgeSecurityPolicy(req, new ComputeBackendBucketsSetEdgeSecurityPolicySecurity() {{
                option1 = new ComputeBackendBucketsSetEdgeSecurityPolicySecurityOption1("ab", "adipisci") {{
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

            ComputeBackendBucketsSetIamPolicyRequest req = new ComputeBackendBucketsSetIamPolicyRequest("fuga", "id") {{
                dollarXgafv = XgafvEnum.ONE;
                globalSetPolicyRequest = new GlobalSetPolicyRequest() {{
                    bindings = new org.openapis.openapi.models.shared.Binding[]{{
                        add(new Binding() {{
                            bindingId = "culpa";
                            condition = new Expr() {{
                                description = "est";
                                expression = "recusandae";
                                location = "totam";
                                title = "Dr.";
                            }};
                            members = new String[]{{
                                add("ducimus"),
                                add("quos"),
                            }};
                            role = "vel";
                        }}),
                    }};
                    etag = "labore";
                    policy = new Policy() {{
                        auditConfigs = new org.openapis.openapi.models.shared.AuditConfig[]{{
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("commodi"),
                                            add("in"),
                                            add("corporis"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("nemo"),
                                            add("recusandae"),
                                            add("aliquid"),
                                            add("aperiam"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("in"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("facere"),
                                    add("numquam"),
                                    add("doloribus"),
                                    add("suscipit"),
                                }};
                                service = "reiciendis";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("necessitatibus"),
                                            add("dolore"),
                                            add("sunt"),
                                            add("asperiores"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("amet"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("a"),
                                            add("debitis"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("harum"),
                                    add("laboriosam"),
                                }};
                                service = "ipsa";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
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
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("minus"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("in"),
                                    add("dolore"),
                                    add("aliquam"),
                                }};
                                service = "officiis";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("adipisci"),
                                            add("cum"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("hic"),
                                            add("nesciunt"),
                                            add("culpa"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("totam"),
                                            add("hic"),
                                            add("exercitationem"),
                                            add("nobis"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("sed"),
                                            add("reiciendis"),
                                            add("explicabo"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("voluptate"),
                                    add("expedita"),
                                    add("ab"),
                                }};
                                service = "iste";
                            }}),
                        }};
                        bindings = new org.openapis.openapi.models.shared.Binding[]{{
                            add(new Binding() {{
                                bindingId = "laborum";
                                condition = new Expr() {{
                                    description = "sed";
                                    expression = "in";
                                    location = "commodi";
                                    title = "Miss";
                                }};
                                members = new String[]{{
                                    add("voluptas"),
                                }};
                                role = "unde";
                            }}),
                            add(new Binding() {{
                                bindingId = "architecto";
                                condition = new Expr() {{
                                    description = "suscipit";
                                    expression = "sapiente";
                                    location = "debitis";
                                    title = "Mr.";
                                }};
                                members = new String[]{{
                                    add("perferendis"),
                                    add("corrupti"),
                                    add("maiores"),
                                    add("incidunt"),
                                }};
                                role = "sed";
                            }}),
                        }};
                        etag = "provident";
                        rules = new org.openapis.openapi.models.shared.Rule[]{{
                            add(new Rule() {{
                                action = RuleActionEnum.NO_ACTION;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.CREDENTIALS_TYPE;
                                        op = ConditionOpEnum.NOT_EQUALS;
                                        svc = "quos";
                                        sys = ConditionSysEnum.SERVICE;
                                        values = new String[]{{
                                            add("tempora"),
                                            add("voluptate"),
                                        }};
                                    }}),
                                }};
                                description = "reiciendis";
                                ins = new String[]{{
                                    add("sit"),
                                    add("non"),
                                }};
                                logConfigs = new org.openapis.openapi.models.shared.LogConfig[]{{
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
                                                    name = "Brittany Tremblay DDS";
                                                    value = "error";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Lorraine Walsh";
                                                    value = "magni";
                                                }}),
                                            }};
                                            field = "aperiam";
                                            metric = "saepe";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_FAIL_CLOSED;
                                        }};
                                    }}),
                                    add(new LogConfig() {{
                                        cloudAudit = new LogConfigCloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.ADMIN_WRITE;
                                            }};
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.DATA_ACCESS;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Marsha Heidenreich";
                                                    value = "laboriosam";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Bob Mueller";
                                                    value = "debitis";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Sonya Heaney";
                                                    value = "corrupti";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Ricky Little";
                                                    value = "fugiat";
                                                }}),
                                            }};
                                            field = "voluptatem";
                                            metric = "culpa";
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
                                                    name = "Karen Lehner";
                                                    value = "corporis";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Mattie Jaskolski III";
                                                    value = "nostrum";
                                                }}),
                                            }};
                                            field = "saepe";
                                            metric = "error";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_FAIL_CLOSED;
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
                                                    name = "Gerald Bradtke";
                                                    value = "quidem";
                                                }}),
                                            }};
                                            field = "atque";
                                            metric = "laborum";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_MODE_UNSPECIFIED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("laboriosam"),
                                    add("alias"),
                                    add("amet"),
                                    add("deserunt"),
                                }};
                                permissions = new String[]{{
                                    add("unde"),
                                    add("reiciendis"),
                                }};
                            }}),
                            add(new Rule() {{
                                action = RuleActionEnum.DENY_WITH_LOG;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.SECURITY_REALM;
                                        op = ConditionOpEnum.NO_OP;
                                        svc = "perferendis";
                                        sys = ConditionSysEnum.REGION;
                                        values = new String[]{{
                                            add("reprehenderit"),
                                            add("facere"),
                                            add("fuga"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.CREDS_ASSERTION;
                                        op = ConditionOpEnum.NOT_EQUALS;
                                        svc = "veniam";
                                        sys = ConditionSysEnum.IP;
                                        values = new String[]{{
                                            add("repudiandae"),
                                            add("quasi"),
                                            add("atque"),
                                            add("reprehenderit"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.SECURITY_REALM;
                                        op = ConditionOpEnum.NOT_EQUALS;
                                        svc = "suscipit";
                                        sys = ConditionSysEnum.REGION;
                                        values = new String[]{{
                                            add("et"),
                                            add("esse"),
                                            add("amet"),
                                            add("assumenda"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.CREDENTIALS_TYPE;
                                        op = ConditionOpEnum.NOT_EQUALS;
                                        svc = "error";
                                        sys = ConditionSysEnum.SERVICE;
                                        values = new String[]{{
                                            add("accusamus"),
                                            add("natus"),
                                            add("minima"),
                                            add("aspernatur"),
                                        }};
                                    }}),
                                }};
                                description = "ex";
                                ins = new String[]{{
                                    add("corrupti"),
                                    add("at"),
                                    add("error"),
                                    add("blanditiis"),
                                }};
                                logConfigs = new org.openapis.openapi.models.shared.LogConfig[]{{
                                    add(new LogConfig() {{
                                        cloudAudit = new LogConfigCloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.PERMISSION_TYPE_UNSPECIFIED;
                                            }};
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.DATA_ACCESS;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Delia Parisian";
                                                    value = "reiciendis";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Mr. Elvira Buckridge";
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
                                                    name = "Tracy Cronin";
                                                    value = "quis";
                                                }}),
                                            }};
                                            field = "reprehenderit";
                                            metric = "error";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_FAIL_CLOSED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("quidem"),
                                    add("eveniet"),
                                }};
                                permissions = new String[]{{
                                    add("vero"),
                                }};
                            }}),
                        }};
                        version = 39615;
                    }};;
                }};;
                accessToken = "iure";
                alt = AltEnum.JSON;
                callback = "totam";
                fields = "quae";
                key = "molestiae";
                oauthToken = "eveniet";
                prettyPrint = false;
                quotaUser = "qui";
                uploadType = "cum";
                uploadProtocol = "iure";
                userIp = "necessitatibus";
            }};            

            ComputeBackendBucketsSetIamPolicyResponse res = sdk.backendBuckets.computeBackendBucketsSetIamPolicy(req, new ComputeBackendBucketsSetIamPolicySecurity() {{
                option1 = new ComputeBackendBucketsSetIamPolicySecurityOption1("ratione", "laborum") {{
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

            ComputeBackendBucketsTestIamPermissionsRequest req = new ComputeBackendBucketsTestIamPermissionsRequest("distinctio", "voluptatum") {{
                dollarXgafv = XgafvEnum.TWO;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("ad"),
                        add("repellat"),
                    }};
                }};;
                accessToken = "alias";
                alt = AltEnum.MEDIA;
                callback = "perspiciatis";
                fields = "nihil";
                key = "mollitia";
                oauthToken = "voluptas";
                prettyPrint = false;
                quotaUser = "alias";
                uploadType = "maiores";
                uploadProtocol = "reiciendis";
                userIp = "dolores";
            }};            

            ComputeBackendBucketsTestIamPermissionsResponse res = sdk.backendBuckets.computeBackendBucketsTestIamPermissions(req, new ComputeBackendBucketsTestIamPermissionsSecurity() {{
                option1 = new ComputeBackendBucketsTestIamPermissionsSecurityOption1("id", "minima") {{
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

            ComputeBackendBucketsUpdateRequest req = new ComputeBackendBucketsUpdateRequest("dolore", "dolorum") {{
                dollarXgafv = XgafvEnum.ONE;
                backendBucket1 = new BackendBucket() {{
                    bucketName = "quae";
                    cdnPolicy = new BackendBucketCdnPolicy() {{
                        bypassCacheOnRequestHeaders = new org.openapis.openapi.models.shared.BackendBucketCdnPolicyBypassCacheOnRequestHeader[]{{
                            add(new BackendBucketCdnPolicyBypassCacheOnRequestHeader() {{
                                headerName = "omnis";
                            }}),
                            add(new BackendBucketCdnPolicyBypassCacheOnRequestHeader() {{
                                headerName = "quaerat";
                            }}),
                            add(new BackendBucketCdnPolicyBypassCacheOnRequestHeader() {{
                                headerName = "molestiae";
                            }}),
                            add(new BackendBucketCdnPolicyBypassCacheOnRequestHeader() {{
                                headerName = "ex";
                            }}),
                        }};
                        cacheKeyPolicy = new BackendBucketCdnPolicyCacheKeyPolicy() {{
                            includeHttpHeaders = new String[]{{
                                add("culpa"),
                                add("adipisci"),
                            }};
                            queryStringWhitelist = new String[]{{
                                add("laudantium"),
                                add("eum"),
                                add("nemo"),
                                add("recusandae"),
                            }};
                        }};;
                        cacheMode = BackendBucketCdnPolicyCacheModeEnum.FORCE_CACHE_ALL;
                        clientTtl = 592081;
                        defaultTtl = 337477;
                        maxTtl = 431785;
                        negativeCaching = false;
                        negativeCachingPolicy = new org.openapis.openapi.models.shared.BackendBucketCdnPolicyNegativeCachingPolicy[]{{
                            add(new BackendBucketCdnPolicyNegativeCachingPolicy() {{
                                code = 592780;
                                ttl = 133439;
                            }}),
                            add(new BackendBucketCdnPolicyNegativeCachingPolicy() {{
                                code = 354506;
                                ttl = 96804;
                            }}),
                            add(new BackendBucketCdnPolicyNegativeCachingPolicy() {{
                                code = 657020;
                                ttl = 343392;
                            }}),
                            add(new BackendBucketCdnPolicyNegativeCachingPolicy() {{
                                code = 652309;
                                ttl = 591027;
                            }}),
                        }};
                        requestCoalescing = false;
                        serveWhileStale = 821719;
                        signedUrlCacheMaxAgeSec = "animi";
                        signedUrlKeyNames = new String[]{{
                            add("aliquid"),
                            add("accusantium"),
                        }};
                    }};;
                    compressionMode = BackendBucketCompressionModeEnum.DISABLED;
                    creationTimestamp = "doloribus";
                    customResponseHeaders = new String[]{{
                        add("in"),
                        add("nam"),
                    }};
                    description = "earum";
                    edgeSecurityPolicy = "officia";
                    enableCdn = false;
                    id = "laborum";
                    kind = "placeat";
                    name = "Tami Maggio";
                    selfLink = "cumque";
                }};;
                accessToken = "vitae";
                alt = AltEnum.PROTO;
                callback = "tempora";
                fields = "quis";
                key = "inventore";
                oauthToken = "fugit";
                prettyPrint = false;
                quotaUser = "cumque";
                requestId = "quae";
                uploadType = "perferendis";
                uploadProtocol = "velit";
                userIp = "aspernatur";
            }};            

            ComputeBackendBucketsUpdateResponse res = sdk.backendBuckets.computeBackendBucketsUpdate(req, new ComputeBackendBucketsUpdateSecurity() {{
                option1 = new ComputeBackendBucketsUpdateSecurityOption1("eum", "eius") {{
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
