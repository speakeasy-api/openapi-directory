# sslPolicies

### Available Operations

* [computeSslPoliciesAggregatedList](#computesslpoliciesaggregatedlist) - Retrieves the list of all SslPolicy resources, regional and global, available to the specified project.
* [computeSslPoliciesDelete](#computesslpoliciesdelete) - Deletes the specified SSL policy. The SSL policy resource can be deleted only if it is not in use by any TargetHttpsProxy or TargetSslProxy resources.
* [computeSslPoliciesGet](#computesslpoliciesget) - Lists all of the ordered rules present in a single specified policy.
* [computeSslPoliciesInsert](#computesslpoliciesinsert) - Returns the specified SSL policy resource.
* [computeSslPoliciesList](#computesslpolicieslist) - Lists all the SSL policies that have been configured for the specified project.
* [computeSslPoliciesListAvailableFeatures](#computesslpolicieslistavailablefeatures) - Lists all features that can be specified in the SSL policy when using custom profile.
* [computeSslPoliciesPatch](#computesslpoliciespatch) - Patches the specified SSL policy with the data included in the request.

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

            ComputeSslPoliciesAggregatedListRequest req = new ComputeSslPoliciesAggregatedListRequest("tempora") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "repellendus";
                alt = AltEnum.PROTO;
                callback = "dolores";
                fields = "optio";
                filter = "quas";
                includeAllScopes = false;
                key = "provident";
                maxResults = 979864L;
                oauthToken = "nisi";
                orderBy = "deleniti";
                pageToken = "ut";
                prettyPrint = false;
                quotaUser = "recusandae";
                returnPartialSuccess = false;
                uploadType = "quod";
                uploadProtocol = "mollitia";
                userIp = "exercitationem";
            }};            

            ComputeSslPoliciesAggregatedListResponse res = sdk.sslPolicies.computeSslPoliciesAggregatedList(req, new ComputeSslPoliciesAggregatedListSecurity() {{
                option1 = new ComputeSslPoliciesAggregatedListSecurityOption1("excepturi", "magni") {{
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

            ComputeSslPoliciesDeleteRequest req = new ComputeSslPoliciesDeleteRequest("qui", "ut") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "fugit";
                alt = AltEnum.JSON;
                callback = "asperiores";
                fields = "inventore";
                key = "possimus";
                oauthToken = "unde";
                prettyPrint = false;
                quotaUser = "doloribus";
                requestId = "voluptates";
                uploadType = "praesentium";
                uploadProtocol = "ratione";
                userIp = "maxime";
            }};            

            ComputeSslPoliciesDeleteResponse res = sdk.sslPolicies.computeSslPoliciesDelete(req, new ComputeSslPoliciesDeleteSecurity() {{
                option1 = new ComputeSslPoliciesDeleteSecurityOption1("tempora", "ad") {{
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

            ComputeSslPoliciesGetRequest req = new ComputeSslPoliciesGetRequest("suscipit", "ad") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "iusto";
                alt = AltEnum.MEDIA;
                callback = "veniam";
                fields = "voluptatem";
                key = "unde";
                oauthToken = "cum";
                prettyPrint = false;
                quotaUser = "beatae";
                uploadType = "inventore";
                uploadProtocol = "numquam";
                userIp = "hic";
            }};            

            ComputeSslPoliciesGetResponse res = sdk.sslPolicies.computeSslPoliciesGet(req, new ComputeSslPoliciesGetSecurity() {{
                option1 = new ComputeSslPoliciesGetSecurityOption1("culpa", "nostrum") {{
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

            ComputeSslPoliciesInsertRequest req = new ComputeSslPoliciesInsertRequest("quas") {{
                dollarXgafv = XgafvEnum.TWO;
                sslPolicy = new SslPolicy() {{
                    creationTimestamp = "illo";
                    customFeatures = new String[]{{
                        add("ut"),
                        add("doloribus"),
                        add("voluptatibus"),
                        add("natus"),
                    }};
                    description = "a";
                    enabledFeatures = new String[]{{
                        add("amet"),
                        add("enim"),
                    }};
                    fingerprint = "voluptatum";
                    id = "omnis";
                    kind = "error";
                    minTlsVersion = SslPolicyMinTlsVersionEnum.TLS10;
                    name = "Ted Toy";
                    profile = SslPolicyProfileEnum.CUSTOM;
                    region = "voluptatibus";
                    selfLink = "ipsam";
                    warnings = new org.openapis.openapi.models.shared.SslPolicyWarnings[]{{
                        add(new SslPolicyWarnings() {{
                            code = SslPolicyWarningsCodeEnum.REQUIRED_TOS_AGREEMENT;
                            data = new org.openapis.openapi.models.shared.SslPolicyWarningsData[]{{
                                add(new SslPolicyWarningsData() {{
                                    key = "commodi";
                                    value = "sit";
                                }}),
                                add(new SslPolicyWarningsData() {{
                                    key = "aspernatur";
                                    value = "minima";
                                }}),
                            }};
                            message = "illo";
                        }}),
                    }};
                }};;
                accessToken = "laudantium";
                alt = AltEnum.PROTO;
                callback = "velit";
                fields = "adipisci";
                key = "vitae";
                oauthToken = "numquam";
                prettyPrint = false;
                quotaUser = "magni";
                requestId = "vel";
                uploadType = "repellat";
                uploadProtocol = "maiores";
                userIp = "tempore";
            }};            

            ComputeSslPoliciesInsertResponse res = sdk.sslPolicies.computeSslPoliciesInsert(req, new ComputeSslPoliciesInsertSecurity() {{
                option1 = new ComputeSslPoliciesInsertSecurityOption1("illo", "repellendus") {{
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

            ComputeSslPoliciesListRequest req = new ComputeSslPoliciesListRequest("vel") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "accusantium";
                alt = AltEnum.MEDIA;
                callback = "ratione";
                fields = "sapiente";
                filter = "omnis";
                key = "similique";
                maxResults = 813314L;
                oauthToken = "quibusdam";
                orderBy = "hic";
                pageToken = "quod";
                prettyPrint = false;
                quotaUser = "eius";
                returnPartialSuccess = false;
                uploadType = "dolorem";
                uploadProtocol = "officiis";
                userIp = "quisquam";
            }};            

            ComputeSslPoliciesListResponse res = sdk.sslPolicies.computeSslPoliciesList(req, new ComputeSslPoliciesListSecurity() {{
                option1 = new ComputeSslPoliciesListSecurityOption1("quas", "officiis") {{
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

            ComputeSslPoliciesListAvailableFeaturesRequest req = new ComputeSslPoliciesListAvailableFeaturesRequest("fugiat") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "unde";
                alt = AltEnum.PROTO;
                callback = "impedit";
                fields = "quam";
                filter = "placeat";
                key = "delectus";
                maxResults = 194437L;
                oauthToken = "eum";
                orderBy = "at";
                pageToken = "inventore";
                prettyPrint = false;
                quotaUser = "alias";
                returnPartialSuccess = false;
                uploadType = "quia";
                uploadProtocol = "laboriosam";
                userIp = "perferendis";
            }};            

            ComputeSslPoliciesListAvailableFeaturesResponse res = sdk.sslPolicies.computeSslPoliciesListAvailableFeatures(req, new ComputeSslPoliciesListAvailableFeaturesSecurity() {{
                option1 = new ComputeSslPoliciesListAvailableFeaturesSecurityOption1("rerum", "atque") {{
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

            ComputeSslPoliciesPatchRequest req = new ComputeSslPoliciesPatchRequest("quaerat", "tenetur") {{
                dollarXgafv = XgafvEnum.ONE;
                sslPolicy1 = new SslPolicy() {{
                    creationTimestamp = "qui";
                    customFeatures = new String[]{{
                        add("vero"),
                        add("saepe"),
                    }};
                    description = "neque";
                    enabledFeatures = new String[]{{
                        add("a"),
                    }};
                    fingerprint = "cum";
                    id = "aperiam";
                    kind = "accusantium";
                    minTlsVersion = SslPolicyMinTlsVersionEnum.TLS10;
                    name = "Olivia Parker";
                    profile = SslPolicyProfileEnum.MODERN;
                    region = "placeat";
                    selfLink = "assumenda";
                    warnings = new org.openapis.openapi.models.shared.SslPolicyWarnings[]{{
                        add(new SslPolicyWarnings() {{
                            code = SslPolicyWarningsCodeEnum.PARTIAL_SUCCESS;
                            data = new org.openapis.openapi.models.shared.SslPolicyWarningsData[]{{
                                add(new SslPolicyWarningsData() {{
                                    key = "dolorum";
                                    value = "voluptas";
                                }}),
                                add(new SslPolicyWarningsData() {{
                                    key = "dicta";
                                    value = "amet";
                                }}),
                                add(new SslPolicyWarningsData() {{
                                    key = "sed";
                                    value = "ipsa";
                                }}),
                            }};
                            message = "tenetur";
                        }}),
                    }};
                }};;
                accessToken = "facere";
                alt = AltEnum.PROTO;
                callback = "iure";
                fields = "optio";
                key = "consectetur";
                oauthToken = "saepe";
                prettyPrint = false;
                quotaUser = "voluptate";
                requestId = "consequuntur";
                uploadType = "dolore";
                uploadProtocol = "placeat";
                userIp = "minus";
            }};            

            ComputeSslPoliciesPatchResponse res = sdk.sslPolicies.computeSslPoliciesPatch(req, new ComputeSslPoliciesPatchSecurity() {{
                option1 = new ComputeSslPoliciesPatchSecurityOption1("sit", "voluptates") {{
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
