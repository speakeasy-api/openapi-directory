# regionSslPolicies

### Available Operations

* [computeRegionSslPoliciesDelete](#computeregionsslpoliciesdelete) - Deletes the specified SSL policy. The SSL policy resource can be deleted only if it is not in use by any TargetHttpsProxy or TargetSslProxy resources.
* [computeRegionSslPoliciesGet](#computeregionsslpoliciesget) - Lists all of the ordered rules present in a single specified policy.
* [computeRegionSslPoliciesInsert](#computeregionsslpoliciesinsert) - Creates a new policy in the specified project and region using the data included in the request.
* [computeRegionSslPoliciesList](#computeregionsslpolicieslist) - Lists all the SSL policies that have been configured for the specified project and region.
* [computeRegionSslPoliciesListAvailableFeatures](#computeregionsslpolicieslistavailablefeatures) - Lists all features that can be specified in the SSL policy when using custom profile.
* [computeRegionSslPoliciesPatch](#computeregionsslpoliciespatch) - Patches the specified SSL policy with the data included in the request.

## computeRegionSslPoliciesDelete

Deletes the specified SSL policy. The SSL policy resource can be deleted only if it is not in use by any TargetHttpsProxy or TargetSslProxy resources.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionSslPoliciesDeleteRequest;
import org.openapis.openapi.models.operations.ComputeRegionSslPoliciesDeleteResponse;
import org.openapis.openapi.models.operations.ComputeRegionSslPoliciesDeleteSecurity;
import org.openapis.openapi.models.operations.ComputeRegionSslPoliciesDeleteSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionSslPoliciesDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionSslPoliciesDeleteRequest req = new ComputeRegionSslPoliciesDeleteRequest("aliquam", "tempore", "rem") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "repudiandae";
                alt = AltEnum.PROTO;
                callback = "odit";
                fields = "minus";
                key = "totam";
                oauthToken = "ipsa";
                prettyPrint = false;
                quotaUser = "assumenda";
                requestId = "necessitatibus";
                uploadType = "accusantium";
                uploadProtocol = "corrupti";
                userIp = "porro";
            }};            

            ComputeRegionSslPoliciesDeleteResponse res = sdk.regionSslPolicies.computeRegionSslPoliciesDelete(req, new ComputeRegionSslPoliciesDeleteSecurity() {{
                option1 = new ComputeRegionSslPoliciesDeleteSecurityOption1("quidem", "assumenda") {{
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

## computeRegionSslPoliciesGet

Lists all of the ordered rules present in a single specified policy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionSslPoliciesGetRequest;
import org.openapis.openapi.models.operations.ComputeRegionSslPoliciesGetResponse;
import org.openapis.openapi.models.operations.ComputeRegionSslPoliciesGetSecurity;
import org.openapis.openapi.models.operations.ComputeRegionSslPoliciesGetSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionSslPoliciesGetSecurityOption2;
import org.openapis.openapi.models.operations.ComputeRegionSslPoliciesGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionSslPoliciesGetRequest req = new ComputeRegionSslPoliciesGetRequest("assumenda", "quas", "amet") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "nostrum";
                alt = AltEnum.PROTO;
                callback = "maxime";
                fields = "omnis";
                key = "ipsam";
                oauthToken = "atque";
                prettyPrint = false;
                quotaUser = "animi";
                uploadType = "molestiae";
                uploadProtocol = "possimus";
                userIp = "porro";
            }};            

            ComputeRegionSslPoliciesGetResponse res = sdk.regionSslPolicies.computeRegionSslPoliciesGet(req, new ComputeRegionSslPoliciesGetSecurity() {{
                option1 = new ComputeRegionSslPoliciesGetSecurityOption1("quo", "molestias") {{
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

## computeRegionSslPoliciesInsert

Creates a new policy in the specified project and region using the data included in the request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionSslPoliciesInsertRequest;
import org.openapis.openapi.models.operations.ComputeRegionSslPoliciesInsertResponse;
import org.openapis.openapi.models.operations.ComputeRegionSslPoliciesInsertSecurity;
import org.openapis.openapi.models.operations.ComputeRegionSslPoliciesInsertSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionSslPoliciesInsertSecurityOption2;
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

            ComputeRegionSslPoliciesInsertRequest req = new ComputeRegionSslPoliciesInsertRequest("omnis", "ab") {{
                dollarXgafv = XgafvEnum.TWO;
                sslPolicy = new SslPolicy() {{
                    creationTimestamp = "error";
                    customFeatures = new String[]{{
                        add("accusantium"),
                        add("eum"),
                    }};
                    description = "magnam";
                    enabledFeatures = new String[]{{
                        add("aspernatur"),
                        add("optio"),
                        add("eos"),
                        add("id"),
                    }};
                    fingerprint = "ducimus";
                    id = "sunt";
                    kind = "qui";
                    minTlsVersion = SslPolicyMinTlsVersionEnum.TLS11;
                    name = "Toby Braun";
                    profile = SslPolicyProfileEnum.COMPATIBLE;
                    region = "perspiciatis";
                    selfLink = "aut";
                    warnings = new org.openapis.openapi.models.shared.SslPolicyWarnings[]{{
                        add(new SslPolicyWarnings() {{
                            code = SslPolicyWarningsCodeEnum.NEXT_HOP_NOT_RUNNING;
                            data = new org.openapis.openapi.models.shared.SslPolicyWarningsData[]{{
                                add(new SslPolicyWarningsData() {{
                                    key = "eaque";
                                    value = "iure";
                                }}),
                                add(new SslPolicyWarningsData() {{
                                    key = "recusandae";
                                    value = "dolorum";
                                }}),
                            }};
                            message = "accusamus";
                        }}),
                        add(new SslPolicyWarnings() {{
                            code = SslPolicyWarningsCodeEnum.DEPRECATED_RESOURCE_USED;
                            data = new org.openapis.openapi.models.shared.SslPolicyWarningsData[]{{
                                add(new SslPolicyWarningsData() {{
                                    key = "ea";
                                    value = "deserunt";
                                }}),
                                add(new SslPolicyWarningsData() {{
                                    key = "ducimus";
                                    value = "voluptatem";
                                }}),
                                add(new SslPolicyWarningsData() {{
                                    key = "ipsam";
                                    value = "molestias";
                                }}),
                                add(new SslPolicyWarningsData() {{
                                    key = "nulla";
                                    value = "inventore";
                                }}),
                            }};
                            message = "voluptate";
                        }}),
                        add(new SslPolicyWarnings() {{
                            code = SslPolicyWarningsCodeEnum.DEPRECATED_TYPE_USED;
                            data = new org.openapis.openapi.models.shared.SslPolicyWarningsData[]{{
                                add(new SslPolicyWarningsData() {{
                                    key = "ipsa";
                                    value = "pariatur";
                                }}),
                                add(new SslPolicyWarningsData() {{
                                    key = "sunt";
                                    value = "cum";
                                }}),
                                add(new SslPolicyWarningsData() {{
                                    key = "voluptatum";
                                    value = "odit";
                                }}),
                                add(new SslPolicyWarningsData() {{
                                    key = "excepturi";
                                    value = "accusantium";
                                }}),
                            }};
                            message = "quo";
                        }}),
                    }};
                }};;
                accessToken = "magnam";
                alt = AltEnum.PROTO;
                callback = "blanditiis";
                fields = "magnam";
                key = "rerum";
                oauthToken = "reprehenderit";
                prettyPrint = false;
                quotaUser = "in";
                requestId = "praesentium";
                uploadType = "pariatur";
                uploadProtocol = "alias";
                userIp = "corporis";
            }};            

            ComputeRegionSslPoliciesInsertResponse res = sdk.regionSslPolicies.computeRegionSslPoliciesInsert(req, new ComputeRegionSslPoliciesInsertSecurity() {{
                option1 = new ComputeRegionSslPoliciesInsertSecurityOption1("vero", "sequi") {{
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

## computeRegionSslPoliciesList

Lists all the SSL policies that have been configured for the specified project and region.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionSslPoliciesListRequest;
import org.openapis.openapi.models.operations.ComputeRegionSslPoliciesListResponse;
import org.openapis.openapi.models.operations.ComputeRegionSslPoliciesListSecurity;
import org.openapis.openapi.models.operations.ComputeRegionSslPoliciesListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionSslPoliciesListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeRegionSslPoliciesListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionSslPoliciesListRequest req = new ComputeRegionSslPoliciesListRequest("ducimus", "accusantium") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "distinctio";
                alt = AltEnum.JSON;
                callback = "totam";
                fields = "quo";
                filter = "harum";
                key = "corporis";
                maxResults = 495847L;
                oauthToken = "fuga";
                orderBy = "amet";
                pageToken = "laudantium";
                prettyPrint = false;
                quotaUser = "expedita";
                returnPartialSuccess = false;
                uploadType = "quibusdam";
                uploadProtocol = "adipisci";
                userIp = "voluptatum";
            }};            

            ComputeRegionSslPoliciesListResponse res = sdk.regionSslPolicies.computeRegionSslPoliciesList(req, new ComputeRegionSslPoliciesListSecurity() {{
                option1 = new ComputeRegionSslPoliciesListSecurityOption1("dignissimos", "quibusdam") {{
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

## computeRegionSslPoliciesListAvailableFeatures

Lists all features that can be specified in the SSL policy when using custom profile.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionSslPoliciesListAvailableFeaturesRequest;
import org.openapis.openapi.models.operations.ComputeRegionSslPoliciesListAvailableFeaturesResponse;
import org.openapis.openapi.models.operations.ComputeRegionSslPoliciesListAvailableFeaturesSecurity;
import org.openapis.openapi.models.operations.ComputeRegionSslPoliciesListAvailableFeaturesSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionSslPoliciesListAvailableFeaturesSecurityOption2;
import org.openapis.openapi.models.operations.ComputeRegionSslPoliciesListAvailableFeaturesSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionSslPoliciesListAvailableFeaturesRequest req = new ComputeRegionSslPoliciesListAvailableFeaturesRequest("possimus", "veniam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "exercitationem";
                alt = AltEnum.MEDIA;
                callback = "facilis";
                fields = "aliquam";
                filter = "harum";
                key = "ipsa";
                maxResults = 111193L;
                oauthToken = "debitis";
                orderBy = "quaerat";
                pageToken = "cumque";
                prettyPrint = false;
                quotaUser = "explicabo";
                returnPartialSuccess = false;
                uploadType = "aliquid";
                uploadProtocol = "consectetur";
                userIp = "eum";
            }};            

            ComputeRegionSslPoliciesListAvailableFeaturesResponse res = sdk.regionSslPolicies.computeRegionSslPoliciesListAvailableFeatures(req, new ComputeRegionSslPoliciesListAvailableFeaturesSecurity() {{
                option1 = new ComputeRegionSslPoliciesListAvailableFeaturesSecurityOption1("ipsam", "illo") {{
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

## computeRegionSslPoliciesPatch

Patches the specified SSL policy with the data included in the request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionSslPoliciesPatchRequest;
import org.openapis.openapi.models.operations.ComputeRegionSslPoliciesPatchResponse;
import org.openapis.openapi.models.operations.ComputeRegionSslPoliciesPatchSecurity;
import org.openapis.openapi.models.operations.ComputeRegionSslPoliciesPatchSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionSslPoliciesPatchSecurityOption2;
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

            ComputeRegionSslPoliciesPatchRequest req = new ComputeRegionSslPoliciesPatchRequest("maiores", "placeat", "ipsam") {{
                dollarXgafv = XgafvEnum.TWO;
                sslPolicy1 = new SslPolicy() {{
                    creationTimestamp = "in";
                    customFeatures = new String[]{{
                        add("illo"),
                        add("distinctio"),
                        add("ipsam"),
                    }};
                    description = "fugiat";
                    enabledFeatures = new String[]{{
                        add("alias"),
                        add("nemo"),
                    }};
                    fingerprint = "architecto";
                    id = "dicta";
                    kind = "excepturi";
                    minTlsVersion = SslPolicyMinTlsVersionEnum.TLS11;
                    name = "Debra Dare";
                    profile = SslPolicyProfileEnum.COMPATIBLE;
                    region = "a";
                    selfLink = "quidem";
                    warnings = new org.openapis.openapi.models.shared.SslPolicyWarnings[]{{
                        add(new SslPolicyWarnings() {{
                            code = SslPolicyWarningsCodeEnum.NEXT_HOP_CANNOT_IP_FORWARD;
                            data = new org.openapis.openapi.models.shared.SslPolicyWarningsData[]{{
                                add(new SslPolicyWarningsData() {{
                                    key = "sapiente";
                                    value = "adipisci";
                                }}),
                                add(new SslPolicyWarningsData() {{
                                    key = "laboriosam";
                                    value = "delectus";
                                }}),
                                add(new SslPolicyWarningsData() {{
                                    key = "facere";
                                    value = "sapiente";
                                }}),
                                add(new SslPolicyWarningsData() {{
                                    key = "earum";
                                    value = "excepturi";
                                }}),
                            }};
                            message = "accusantium";
                        }}),
                    }};
                }};;
                accessToken = "facilis";
                alt = AltEnum.MEDIA;
                callback = "quidem";
                fields = "eius";
                key = "id";
                oauthToken = "consectetur";
                prettyPrint = false;
                quotaUser = "deserunt";
                requestId = "laudantium";
                uploadType = "numquam";
                uploadProtocol = "hic";
                userIp = "excepturi";
            }};            

            ComputeRegionSslPoliciesPatchResponse res = sdk.regionSslPolicies.computeRegionSslPoliciesPatch(req, new ComputeRegionSslPoliciesPatchSecurity() {{
                option1 = new ComputeRegionSslPoliciesPatchSecurityOption1("quae", "soluta") {{
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
