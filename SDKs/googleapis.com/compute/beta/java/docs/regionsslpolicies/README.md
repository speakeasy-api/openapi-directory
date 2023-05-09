# regionSslPolicies

### Available Operations

* [computeRegionSslPoliciesDelete](#computeregionsslpoliciesdelete) - Deletes the specified SSL policy. The SSL policy resource can be deleted only if it is not in use by any TargetHttpsProxy or TargetSslProxy resources.
* [computeRegionSslPoliciesGet](#computeregionsslpoliciesget) - Lists all of the ordered rules present in a single specified policy.
* [computeRegionSslPoliciesInsert](#computeregionsslpoliciesinsert) - Creates a new policy in the specified project and region using the data included in the request.
* [computeRegionSslPoliciesList](#computeregionsslpolicieslist) - Lists all the SSL policies that have been configured for the specified project and region.
* [computeRegionSslPoliciesListAvailableFeatures](#computeregionsslpolicieslistavailablefeatures) - Lists all features that can be specified in the SSL policy when using custom profile.
* [computeRegionSslPoliciesPatch](#computeregionsslpoliciespatch) - Patches the specified SSL policy with the data included in the request.
* [computeRegionSslPoliciesTestIamPermissions](#computeregionsslpoliciestestiampermissions) - Returns permissions that a caller has on the specified resource.

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

            ComputeRegionSslPoliciesDeleteRequest req = new ComputeRegionSslPoliciesDeleteRequest("autem", "sed", "quidem") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "cum";
                alt = AltEnum.MEDIA;
                callback = "asperiores";
                fields = "saepe";
                key = "aspernatur";
                oauthToken = "consequatur";
                prettyPrint = false;
                quotaUser = "ex";
                requestId = "in";
                uploadType = "molestias";
                uploadProtocol = "beatae";
                userIp = "placeat";
            }};            

            ComputeRegionSslPoliciesDeleteResponse res = sdk.regionSslPolicies.computeRegionSslPoliciesDelete(req, new ComputeRegionSslPoliciesDeleteSecurity() {{
                option1 = new ComputeRegionSslPoliciesDeleteSecurityOption1("pariatur", "nostrum") {{
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

            ComputeRegionSslPoliciesGetRequest req = new ComputeRegionSslPoliciesGetRequest("voluptatibus", "saepe", "aut") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ex";
                alt = AltEnum.PROTO;
                callback = "numquam";
                fields = "explicabo";
                key = "numquam";
                oauthToken = "consequuntur";
                prettyPrint = false;
                quotaUser = "quam";
                uploadType = "enim";
                uploadProtocol = "voluptatum";
                userIp = "autem";
            }};            

            ComputeRegionSslPoliciesGetResponse res = sdk.regionSslPolicies.computeRegionSslPoliciesGet(req, new ComputeRegionSslPoliciesGetSecurity() {{
                option1 = new ComputeRegionSslPoliciesGetSecurityOption1("accusantium", "repellat") {{
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

            ComputeRegionSslPoliciesInsertRequest req = new ComputeRegionSslPoliciesInsertRequest("quos", "impedit") {{
                dollarXgafv = XgafvEnum.ONE;
                sslPolicy = new SslPolicy() {{
                    creationTimestamp = "deserunt";
                    customFeatures = new String[]{{
                        add("distinctio"),
                    }};
                    description = "quibusdam";
                    enabledFeatures = new String[]{{
                        add("odit"),
                        add("officia"),
                    }};
                    fingerprint = "magni";
                    id = "doloremque";
                    kind = "explicabo";
                    minTlsVersion = SslPolicyMinTlsVersionEnum.TLS10;
                    name = "Cary Murray";
                    profile = SslPolicyProfileEnum.RESTRICTED;
                    region = "nihil";
                    selfLink = "natus";
                    warnings = new org.openapis.openapi.models.shared.SslPolicyWarnings[]{{
                        add(new SslPolicyWarnings() {{
                            code = SslPolicyWarningsCodeEnum.REQUIRED_TOS_AGREEMENT;
                            data = new org.openapis.openapi.models.shared.SslPolicyWarningsData[]{{
                                add(new SslPolicyWarningsData() {{
                                    key = "ducimus";
                                    value = "quos";
                                }}),
                                add(new SslPolicyWarningsData() {{
                                    key = "repellat";
                                    value = "error";
                                }}),
                                add(new SslPolicyWarningsData() {{
                                    key = "recusandae";
                                    value = "in";
                                }}),
                            }};
                            message = "fugiat";
                        }}),
                        add(new SslPolicyWarnings() {{
                            code = SslPolicyWarningsCodeEnum.FIELD_VALUE_OVERRIDEN;
                            data = new org.openapis.openapi.models.shared.SslPolicyWarningsData[]{{
                                add(new SslPolicyWarningsData() {{
                                    key = "maxime";
                                    value = "aut";
                                }}),
                            }};
                            message = "sequi";
                        }}),
                    }};
                }};;
                accessToken = "nemo";
                alt = AltEnum.JSON;
                callback = "corrupti";
                fields = "voluptatem";
                key = "ad";
                oauthToken = "natus";
                prettyPrint = false;
                quotaUser = "fuga";
                requestId = "repellat";
                uploadType = "neque";
                uploadProtocol = "iste";
                userIp = "ea";
            }};            

            ComputeRegionSslPoliciesInsertResponse res = sdk.regionSslPolicies.computeRegionSslPoliciesInsert(req, new ComputeRegionSslPoliciesInsertSecurity() {{
                option1 = new ComputeRegionSslPoliciesInsertSecurityOption1("architecto", "nam") {{
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

            ComputeRegionSslPoliciesListRequest req = new ComputeRegionSslPoliciesListRequest("omnis", "nemo") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "asperiores";
                alt = AltEnum.JSON;
                callback = "laudantium";
                fields = "tenetur";
                filter = "quod";
                key = "iste";
                maxResults = 564094L;
                oauthToken = "repellendus";
                orderBy = "dolorum";
                pageToken = "aspernatur";
                prettyPrint = false;
                quotaUser = "deserunt";
                returnPartialSuccess = false;
                uploadType = "ad";
                uploadProtocol = "aperiam";
                userIp = "eligendi";
            }};            

            ComputeRegionSslPoliciesListResponse res = sdk.regionSslPolicies.computeRegionSslPoliciesList(req, new ComputeRegionSslPoliciesListSecurity() {{
                option1 = new ComputeRegionSslPoliciesListSecurityOption1("quo", "suscipit") {{
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

            ComputeRegionSslPoliciesListAvailableFeaturesRequest req = new ComputeRegionSslPoliciesListAvailableFeaturesRequest("consectetur", "aperiam") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "harum";
                alt = AltEnum.JSON;
                callback = "excepturi";
                fields = "iusto";
                filter = "exercitationem";
                key = "in";
                maxResults = 689494L;
                oauthToken = "magnam";
                orderBy = "facilis";
                pageToken = "asperiores";
                prettyPrint = false;
                quotaUser = "ab";
                returnPartialSuccess = false;
                uploadType = "voluptates";
                uploadProtocol = "explicabo";
                userIp = "beatae";
            }};            

            ComputeRegionSslPoliciesListAvailableFeaturesResponse res = sdk.regionSslPolicies.computeRegionSslPoliciesListAvailableFeatures(req, new ComputeRegionSslPoliciesListAvailableFeaturesSecurity() {{
                option1 = new ComputeRegionSslPoliciesListAvailableFeaturesSecurityOption1("laudantium", "cum") {{
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

            ComputeRegionSslPoliciesPatchRequest req = new ComputeRegionSslPoliciesPatchRequest("magni", "quis", "quos") {{
                dollarXgafv = XgafvEnum.TWO;
                sslPolicy1 = new SslPolicy() {{
                    creationTimestamp = "optio";
                    customFeatures = new String[]{{
                        add("saepe"),
                        add("libero"),
                        add("deserunt"),
                        add("perferendis"),
                    }};
                    description = "nemo";
                    enabledFeatures = new String[]{{
                        add("voluptates"),
                        add("unde"),
                        add("assumenda"),
                        add("nulla"),
                    }};
                    fingerprint = "illo";
                    id = "tenetur";
                    kind = "velit";
                    minTlsVersion = SslPolicyMinTlsVersionEnum.TLS12;
                    name = "Nelson Beer";
                    profile = SslPolicyProfileEnum.RESTRICTED;
                    region = "excepturi";
                    selfLink = "praesentium";
                    warnings = new org.openapis.openapi.models.shared.SslPolicyWarnings[]{{
                        add(new SslPolicyWarnings() {{
                            code = SslPolicyWarningsCodeEnum.SINGLE_INSTANCE_PROPERTY_TEMPLATE;
                            data = new org.openapis.openapi.models.shared.SslPolicyWarningsData[]{{
                                add(new SslPolicyWarningsData() {{
                                    key = "earum";
                                    value = "laboriosam";
                                }}),
                                add(new SslPolicyWarningsData() {{
                                    key = "et";
                                    value = "doloremque";
                                }}),
                                add(new SslPolicyWarningsData() {{
                                    key = "fuga";
                                    value = "modi";
                                }}),
                                add(new SslPolicyWarningsData() {{
                                    key = "officia";
                                    value = "voluptate";
                                }}),
                            }};
                            message = "blanditiis";
                        }}),
                    }};
                }};;
                accessToken = "sapiente";
                alt = AltEnum.JSON;
                callback = "unde";
                fields = "magnam";
                key = "eum";
                oauthToken = "omnis";
                prettyPrint = false;
                quotaUser = "iusto";
                requestId = "itaque";
                uploadType = "praesentium";
                uploadProtocol = "tenetur";
                userIp = "saepe";
            }};            

            ComputeRegionSslPoliciesPatchResponse res = sdk.regionSslPolicies.computeRegionSslPoliciesPatch(req, new ComputeRegionSslPoliciesPatchSecurity() {{
                option1 = new ComputeRegionSslPoliciesPatchSecurityOption1("quidem", "eaque") {{
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

## computeRegionSslPoliciesTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeRegionSslPoliciesTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.ComputeRegionSslPoliciesTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.ComputeRegionSslPoliciesTestIamPermissionsSecurity;
import org.openapis.openapi.models.operations.ComputeRegionSslPoliciesTestIamPermissionsSecurityOption1;
import org.openapis.openapi.models.operations.ComputeRegionSslPoliciesTestIamPermissionsSecurityOption2;
import org.openapis.openapi.models.operations.ComputeRegionSslPoliciesTestIamPermissionsSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TestPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionSslPoliciesTestIamPermissionsRequest req = new ComputeRegionSslPoliciesTestIamPermissionsRequest("alias", "quisquam", "eos") {{
                dollarXgafv = XgafvEnum.TWO;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("doloremque"),
                    }};
                }};;
                accessToken = "vitae";
                alt = AltEnum.PROTO;
                callback = "exercitationem";
                fields = "deleniti";
                key = "velit";
                oauthToken = "sunt";
                prettyPrint = false;
                quotaUser = "expedita";
                uploadType = "veniam";
                uploadProtocol = "illo";
                userIp = "sapiente";
            }};            

            ComputeRegionSslPoliciesTestIamPermissionsResponse res = sdk.regionSslPolicies.computeRegionSslPoliciesTestIamPermissions(req, new ComputeRegionSslPoliciesTestIamPermissionsSecurity() {{
                option1 = new ComputeRegionSslPoliciesTestIamPermissionsSecurityOption1("at", "quos") {{
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
