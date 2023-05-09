# sslPolicies

### Available Operations

* [computeSslPoliciesAggregatedList](#computesslpoliciesaggregatedlist) - Retrieves the list of all SslPolicy resources, regional and global, available to the specified project.
* [computeSslPoliciesDelete](#computesslpoliciesdelete) - Deletes the specified SSL policy. The SSL policy resource can be deleted only if it is not in use by any TargetHttpsProxy or TargetSslProxy resources.
* [computeSslPoliciesGet](#computesslpoliciesget) - Lists all of the ordered rules present in a single specified policy.
* [computeSslPoliciesInsert](#computesslpoliciesinsert) - Returns the specified SSL policy resource.
* [computeSslPoliciesList](#computesslpolicieslist) - Lists all the SSL policies that have been configured for the specified project.
* [computeSslPoliciesListAvailableFeatures](#computesslpolicieslistavailablefeatures) - Lists all features that can be specified in the SSL policy when using custom profile.
* [computeSslPoliciesPatch](#computesslpoliciespatch) - Patches the specified SSL policy with the data included in the request.
* [computeSslPoliciesTestIamPermissions](#computesslpoliciestestiampermissions) - Returns permissions that a caller has on the specified resource.

## computeSslPoliciesAggregatedList

Retrieves the list of all SslPolicy resources, regional and global, available to the specified project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeSslPoliciesAggregatedListRequest;
import org.openapis.openapi.models.operations.ComputeSslPoliciesAggregatedListResponse;
import org.openapis.openapi.models.operations.ComputeSslPoliciesAggregatedListSecurity;
import org.openapis.openapi.models.operations.ComputeSslPoliciesAggregatedListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeSslPoliciesAggregatedListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeSslPoliciesAggregatedListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeSslPoliciesAggregatedListRequest req = new ComputeSslPoliciesAggregatedListRequest("harum") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "commodi";
                alt = AltEnum.PROTO;
                callback = "mollitia";
                fields = "recusandae";
                filter = "adipisci";
                includeAllScopes = false;
                key = "quasi";
                maxResults = 284381L;
                oauthToken = "ex";
                orderBy = "illo";
                pageToken = "earum";
                prettyPrint = false;
                quotaUser = "possimus";
                returnPartialSuccess = false;
                uploadType = "explicabo";
                uploadProtocol = "ducimus";
                userIp = "rem";
            }};            

            ComputeSslPoliciesAggregatedListResponse res = sdk.sslPolicies.computeSslPoliciesAggregatedList(req, new ComputeSslPoliciesAggregatedListSecurity() {{
                option1 = new ComputeSslPoliciesAggregatedListSecurityOption1("impedit", "aliquam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.sslPoliciesAggregatedList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeSslPoliciesDelete

Deletes the specified SSL policy. The SSL policy resource can be deleted only if it is not in use by any TargetHttpsProxy or TargetSslProxy resources.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeSslPoliciesDeleteRequest;
import org.openapis.openapi.models.operations.ComputeSslPoliciesDeleteResponse;
import org.openapis.openapi.models.operations.ComputeSslPoliciesDeleteSecurity;
import org.openapis.openapi.models.operations.ComputeSslPoliciesDeleteSecurityOption1;
import org.openapis.openapi.models.operations.ComputeSslPoliciesDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeSslPoliciesDeleteRequest req = new ComputeSslPoliciesDeleteRequest("necessitatibus", "repellat") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "aut";
                alt = AltEnum.MEDIA;
                callback = "repudiandae";
                fields = "optio";
                key = "eum";
                oauthToken = "iste";
                prettyPrint = false;
                quotaUser = "natus";
                requestId = "placeat";
                uploadType = "officiis";
                uploadProtocol = "earum";
                userIp = "ea";
            }};            

            ComputeSslPoliciesDeleteResponse res = sdk.sslPolicies.computeSslPoliciesDelete(req, new ComputeSslPoliciesDeleteSecurity() {{
                option1 = new ComputeSslPoliciesDeleteSecurityOption1("totam", "officiis") {{
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

## computeSslPoliciesGet

Lists all of the ordered rules present in a single specified policy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeSslPoliciesGetRequest;
import org.openapis.openapi.models.operations.ComputeSslPoliciesGetResponse;
import org.openapis.openapi.models.operations.ComputeSslPoliciesGetSecurity;
import org.openapis.openapi.models.operations.ComputeSslPoliciesGetSecurityOption1;
import org.openapis.openapi.models.operations.ComputeSslPoliciesGetSecurityOption2;
import org.openapis.openapi.models.operations.ComputeSslPoliciesGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeSslPoliciesGetRequest req = new ComputeSslPoliciesGetRequest("corporis", "id") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "dolor";
                alt = AltEnum.PROTO;
                callback = "sunt";
                fields = "ea";
                key = "omnis";
                oauthToken = "voluptate";
                prettyPrint = false;
                quotaUser = "eligendi";
                uploadType = "porro";
                uploadProtocol = "architecto";
                userIp = "recusandae";
            }};            

            ComputeSslPoliciesGetResponse res = sdk.sslPolicies.computeSslPoliciesGet(req, new ComputeSslPoliciesGetSecurity() {{
                option1 = new ComputeSslPoliciesGetSecurityOption1("nisi", "impedit") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.sslPolicy != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeSslPoliciesInsert

Returns the specified SSL policy resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeSslPoliciesInsertRequest;
import org.openapis.openapi.models.operations.ComputeSslPoliciesInsertResponse;
import org.openapis.openapi.models.operations.ComputeSslPoliciesInsertSecurity;
import org.openapis.openapi.models.operations.ComputeSslPoliciesInsertSecurityOption1;
import org.openapis.openapi.models.operations.ComputeSslPoliciesInsertSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.SslPolicy;
import org.openapis.openapi.models.shared.SslPolicyMinTlsVersionEnum;
import org.openapis.openapi.models.shared.SslPolicyProfileEnum;
import org.openapis.openapi.models.shared.SslPolicyWarnings;
import org.openapis.openapi.models.shared.SslPolicyWarningsCodeEnum;
import org.openapis.openapi.models.shared.SslPolicyWarningsData;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeSslPoliciesInsertRequest req = new ComputeSslPoliciesInsertRequest("error") {{
                dollarXgafv = XgafvEnum.ONE;
                sslPolicy = new SslPolicy() {{
                    creationTimestamp = "sunt";
                    customFeatures = new String[]{{
                        add("earum"),
                        add("cumque"),
                        add("nihil"),
                        add("cupiditate"),
                    }};
                    description = "voluptatum";
                    enabledFeatures = new String[]{{
                        add("quia"),
                        add("vel"),
                        add("iusto"),
                    }};
                    fingerprint = "doloribus";
                    id = "ad";
                    kind = "eligendi";
                    minTlsVersion = SslPolicyMinTlsVersionEnum.TLS10;
                    name = "Salvador Schumm";
                    profile = SslPolicyProfileEnum.MODERN;
                    region = "eum";
                    selfLink = "necessitatibus";
                    warnings = new org.openapis.openapi.models.shared.SslPolicyWarnings[]{{
                        add(new SslPolicyWarnings() {{
                            code = SslPolicyWarningsCodeEnum.LARGE_DEPLOYMENT_WARNING;
                            data = new org.openapis.openapi.models.shared.SslPolicyWarningsData[]{{
                                add(new SslPolicyWarningsData() {{
                                    key = "eligendi";
                                    value = "saepe";
                                }}),
                                add(new SslPolicyWarningsData() {{
                                    key = "placeat";
                                    value = "nemo";
                                }}),
                                add(new SslPolicyWarningsData() {{
                                    key = "beatae";
                                    value = "porro";
                                }}),
                            }};
                            message = "possimus";
                        }}),
                        add(new SslPolicyWarnings() {{
                            code = SslPolicyWarningsCodeEnum.NOT_CRITICAL_ERROR;
                            data = new org.openapis.openapi.models.shared.SslPolicyWarningsData[]{{
                                add(new SslPolicyWarningsData() {{
                                    key = "perferendis";
                                    value = "fugiat";
                                }}),
                            }};
                            message = "ut";
                        }}),
                        add(new SslPolicyWarnings() {{
                            code = SslPolicyWarningsCodeEnum.NEXT_HOP_INSTANCE_NOT_ON_NETWORK;
                            data = new org.openapis.openapi.models.shared.SslPolicyWarningsData[]{{
                                add(new SslPolicyWarningsData() {{
                                    key = "veritatis";
                                    value = "mollitia";
                                }}),
                                add(new SslPolicyWarningsData() {{
                                    key = "dolorem";
                                    value = "cum";
                                }}),
                                add(new SslPolicyWarningsData() {{
                                    key = "vitae";
                                    value = "nisi";
                                }}),
                            }};
                            message = "optio";
                        }}),
                        add(new SslPolicyWarnings() {{
                            code = SslPolicyWarningsCodeEnum.NO_RESULTS_ON_PAGE;
                            data = new org.openapis.openapi.models.shared.SslPolicyWarningsData[]{{
                                add(new SslPolicyWarningsData() {{
                                    key = "at";
                                    value = "sunt";
                                }}),
                                add(new SslPolicyWarningsData() {{
                                    key = "facilis";
                                    value = "saepe";
                                }}),
                                add(new SslPolicyWarningsData() {{
                                    key = "debitis";
                                    value = "occaecati";
                                }}),
                                add(new SslPolicyWarningsData() {{
                                    key = "vitae";
                                    value = "ea";
                                }}),
                            }};
                            message = "eveniet";
                        }}),
                    }};
                }};;
                accessToken = "quisquam";
                alt = AltEnum.MEDIA;
                callback = "voluptatum";
                fields = "perferendis";
                key = "debitis";
                oauthToken = "reiciendis";
                prettyPrint = false;
                quotaUser = "est";
                requestId = "ad";
                uploadType = "maxime";
                uploadProtocol = "et";
                userIp = "ducimus";
            }};            

            ComputeSslPoliciesInsertResponse res = sdk.sslPolicies.computeSslPoliciesInsert(req, new ComputeSslPoliciesInsertSecurity() {{
                option1 = new ComputeSslPoliciesInsertSecurityOption1("ipsam", "tempore") {{
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

## computeSslPoliciesList

Lists all the SSL policies that have been configured for the specified project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeSslPoliciesListRequest;
import org.openapis.openapi.models.operations.ComputeSslPoliciesListResponse;
import org.openapis.openapi.models.operations.ComputeSslPoliciesListSecurity;
import org.openapis.openapi.models.operations.ComputeSslPoliciesListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeSslPoliciesListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeSslPoliciesListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeSslPoliciesListRequest req = new ComputeSslPoliciesListRequest("culpa") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "deleniti";
                alt = AltEnum.JSON;
                callback = "natus";
                fields = "sequi";
                filter = "molestias";
                key = "est";
                maxResults = 496854L;
                oauthToken = "vel";
                orderBy = "amet";
                pageToken = "ab";
                prettyPrint = false;
                quotaUser = "eligendi";
                returnPartialSuccess = false;
                uploadType = "ea";
                uploadProtocol = "ut";
                userIp = "expedita";
            }};            

            ComputeSslPoliciesListResponse res = sdk.sslPolicies.computeSslPoliciesList(req, new ComputeSslPoliciesListSecurity() {{
                option1 = new ComputeSslPoliciesListSecurityOption1("rerum", "est") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.sslPoliciesList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeSslPoliciesListAvailableFeatures

Lists all features that can be specified in the SSL policy when using custom profile.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeSslPoliciesListAvailableFeaturesRequest;
import org.openapis.openapi.models.operations.ComputeSslPoliciesListAvailableFeaturesResponse;
import org.openapis.openapi.models.operations.ComputeSslPoliciesListAvailableFeaturesSecurity;
import org.openapis.openapi.models.operations.ComputeSslPoliciesListAvailableFeaturesSecurityOption1;
import org.openapis.openapi.models.operations.ComputeSslPoliciesListAvailableFeaturesSecurityOption2;
import org.openapis.openapi.models.operations.ComputeSslPoliciesListAvailableFeaturesSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeSslPoliciesListAvailableFeaturesRequest req = new ComputeSslPoliciesListAvailableFeaturesRequest("ut") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "odit";
                alt = AltEnum.MEDIA;
                callback = "earum";
                fields = "praesentium";
                filter = "rem";
                key = "delectus";
                maxResults = 788730L;
                oauthToken = "tenetur";
                orderBy = "aspernatur";
                pageToken = "vitae";
                prettyPrint = false;
                quotaUser = "impedit";
                returnPartialSuccess = false;
                uploadType = "officiis";
                uploadProtocol = "fuga";
                userIp = "sunt";
            }};            

            ComputeSslPoliciesListAvailableFeaturesResponse res = sdk.sslPolicies.computeSslPoliciesListAvailableFeatures(req, new ComputeSslPoliciesListAvailableFeaturesSecurity() {{
                option1 = new ComputeSslPoliciesListAvailableFeaturesSecurityOption1("debitis", "voluptatem") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.sslPoliciesListAvailableFeaturesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeSslPoliciesPatch

Patches the specified SSL policy with the data included in the request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeSslPoliciesPatchRequest;
import org.openapis.openapi.models.operations.ComputeSslPoliciesPatchResponse;
import org.openapis.openapi.models.operations.ComputeSslPoliciesPatchSecurity;
import org.openapis.openapi.models.operations.ComputeSslPoliciesPatchSecurityOption1;
import org.openapis.openapi.models.operations.ComputeSslPoliciesPatchSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.SslPolicy;
import org.openapis.openapi.models.shared.SslPolicyMinTlsVersionEnum;
import org.openapis.openapi.models.shared.SslPolicyProfileEnum;
import org.openapis.openapi.models.shared.SslPolicyWarnings;
import org.openapis.openapi.models.shared.SslPolicyWarningsCodeEnum;
import org.openapis.openapi.models.shared.SslPolicyWarningsData;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeSslPoliciesPatchRequest req = new ComputeSslPoliciesPatchRequest("quasi", "tempora") {{
                dollarXgafv = XgafvEnum.TWO;
                sslPolicy1 = new SslPolicy() {{
                    creationTimestamp = "mollitia";
                    customFeatures = new String[]{{
                        add("dolorum"),
                        add("maiores"),
                        add("reprehenderit"),
                        add("inventore"),
                    }};
                    description = "consequuntur";
                    enabledFeatures = new String[]{{
                        add("hic"),
                        add("iure"),
                        add("reprehenderit"),
                    }};
                    fingerprint = "est";
                    id = "in";
                    kind = "optio";
                    minTlsVersion = SslPolicyMinTlsVersionEnum.TLS12;
                    name = "Johnny Rowe";
                    profile = SslPolicyProfileEnum.MODERN;
                    region = "ab";
                    selfLink = "natus";
                    warnings = new org.openapis.openapi.models.shared.SslPolicyWarnings[]{{
                        add(new SslPolicyWarnings() {{
                            code = SslPolicyWarningsCodeEnum.EXPERIMENTAL_TYPE_USED;
                            data = new org.openapis.openapi.models.shared.SslPolicyWarningsData[]{{
                                add(new SslPolicyWarningsData() {{
                                    key = "aut";
                                    value = "voluptas";
                                }}),
                                add(new SslPolicyWarningsData() {{
                                    key = "rerum";
                                    value = "expedita";
                                }}),
                            }};
                            message = "ipsa";
                        }}),
                        add(new SslPolicyWarnings() {{
                            code = SslPolicyWarningsCodeEnum.EXTERNAL_API_WARNING;
                            data = new org.openapis.openapi.models.shared.SslPolicyWarningsData[]{{
                                add(new SslPolicyWarningsData() {{
                                    key = "dicta";
                                    value = "enim";
                                }}),
                                add(new SslPolicyWarningsData() {{
                                    key = "dolorem";
                                    value = "animi";
                                }}),
                                add(new SslPolicyWarningsData() {{
                                    key = "amet";
                                    value = "libero";
                                }}),
                                add(new SslPolicyWarningsData() {{
                                    key = "iusto";
                                    value = "deleniti";
                                }}),
                            }};
                            message = "quibusdam";
                        }}),
                        add(new SslPolicyWarnings() {{
                            code = SslPolicyWarningsCodeEnum.LARGE_DEPLOYMENT_WARNING;
                            data = new org.openapis.openapi.models.shared.SslPolicyWarningsData[]{{
                                add(new SslPolicyWarningsData() {{
                                    key = "architecto";
                                    value = "eum";
                                }}),
                                add(new SslPolicyWarningsData() {{
                                    key = "tenetur";
                                    value = "nisi";
                                }}),
                            }};
                            message = "deserunt";
                        }}),
                        add(new SslPolicyWarnings() {{
                            code = SslPolicyWarningsCodeEnum.NEXT_HOP_CANNOT_IP_FORWARD;
                            data = new org.openapis.openapi.models.shared.SslPolicyWarningsData[]{{
                                add(new SslPolicyWarningsData() {{
                                    key = "at";
                                    value = "fugit";
                                }}),
                                add(new SslPolicyWarningsData() {{
                                    key = "alias";
                                    value = "a";
                                }}),
                            }};
                            message = "velit";
                        }}),
                    }};
                }};;
                accessToken = "ullam";
                alt = AltEnum.PROTO;
                callback = "perferendis";
                fields = "quam";
                key = "facere";
                oauthToken = "soluta";
                prettyPrint = false;
                quotaUser = "illum";
                requestId = "laborum";
                uploadType = "voluptate";
                uploadProtocol = "animi";
                userIp = "dolore";
            }};            

            ComputeSslPoliciesPatchResponse res = sdk.sslPolicies.computeSslPoliciesPatch(req, new ComputeSslPoliciesPatchSecurity() {{
                option1 = new ComputeSslPoliciesPatchSecurityOption1("quam", "nihil") {{
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

## computeSslPoliciesTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeSslPoliciesTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.ComputeSslPoliciesTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.ComputeSslPoliciesTestIamPermissionsSecurity;
import org.openapis.openapi.models.operations.ComputeSslPoliciesTestIamPermissionsSecurityOption1;
import org.openapis.openapi.models.operations.ComputeSslPoliciesTestIamPermissionsSecurityOption2;
import org.openapis.openapi.models.operations.ComputeSslPoliciesTestIamPermissionsSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TestPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeSslPoliciesTestIamPermissionsRequest req = new ComputeSslPoliciesTestIamPermissionsRequest("doloribus", "qui") {{
                dollarXgafv = XgafvEnum.ONE;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("mollitia"),
                        add("nulla"),
                    }};
                }};;
                accessToken = "eos";
                alt = AltEnum.PROTO;
                callback = "eos";
                fields = "quam";
                key = "vero";
                oauthToken = "corrupti";
                prettyPrint = false;
                quotaUser = "minus";
                uploadType = "nulla";
                uploadProtocol = "reiciendis";
                userIp = "quidem";
            }};            

            ComputeSslPoliciesTestIamPermissionsResponse res = sdk.sslPolicies.computeSslPoliciesTestIamPermissions(req, new ComputeSslPoliciesTestIamPermissionsSecurity() {{
                option1 = new ComputeSslPoliciesTestIamPermissionsSecurityOption1("tempora", "sit") {{
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
