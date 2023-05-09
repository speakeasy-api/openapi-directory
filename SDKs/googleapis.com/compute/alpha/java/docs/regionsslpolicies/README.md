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

            ComputeRegionSslPoliciesDeleteRequest req = new ComputeRegionSslPoliciesDeleteRequest("fuga", "accusantium", "velit") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "inventore";
                alt = AltEnum.JSON;
                callback = "nemo";
                fields = "voluptatem";
                key = "facere";
                oauthToken = "perspiciatis";
                prettyPrint = false;
                quotaUser = "hic";
                requestId = "rerum";
                uploadType = "dolorem";
                uploadProtocol = "culpa";
                userIp = "magnam";
            }};            

            ComputeRegionSslPoliciesDeleteResponse res = sdk.regionSslPolicies.computeRegionSslPoliciesDelete(req, new ComputeRegionSslPoliciesDeleteSecurity() {{
                option1 = new ComputeRegionSslPoliciesDeleteSecurityOption1("voluptatum", "ipsam") {{
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

            ComputeRegionSslPoliciesGetRequest req = new ComputeRegionSslPoliciesGetRequest("recusandae", "recusandae", "occaecati") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "eaque";
                alt = AltEnum.JSON;
                callback = "sint";
                fields = "delectus";
                key = "consequuntur";
                oauthToken = "ut";
                prettyPrint = false;
                quotaUser = "fugit";
                uploadType = "in";
                uploadProtocol = "vel";
                userIp = "doloribus";
            }};            

            ComputeRegionSslPoliciesGetResponse res = sdk.regionSslPolicies.computeRegionSslPoliciesGet(req, new ComputeRegionSslPoliciesGetSecurity() {{
                option1 = new ComputeRegionSslPoliciesGetSecurityOption1("voluptatibus", "vel") {{
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
import org.openapis.openapi.models.shared.CallCredentials;
import org.openapis.openapi.models.shared.CallCredentialsCallCredentialTypeEnum;
import org.openapis.openapi.models.shared.ChannelCredentials;
import org.openapis.openapi.models.shared.ChannelCredentialsChannelCredentialTypeEnum;
import org.openapis.openapi.models.shared.GrpcServiceConfig;
import org.openapis.openapi.models.shared.MetadataCredentialsFromPlugin;
import org.openapis.openapi.models.shared.SdsConfig;
import org.openapis.openapi.models.shared.ServerTlsSettings;
import org.openapis.openapi.models.shared.ServerTlsSettingsTlsModeEnum;
import org.openapis.openapi.models.shared.SslPolicy;
import org.openapis.openapi.models.shared.SslPolicyMinTlsVersionEnum;
import org.openapis.openapi.models.shared.SslPolicyProfileEnum;
import org.openapis.openapi.models.shared.SslPolicyWarnings;
import org.openapis.openapi.models.shared.SslPolicyWarningsCodeEnum;
import org.openapis.openapi.models.shared.SslPolicyWarningsData;
import org.openapis.openapi.models.shared.TlsCertificateContext;
import org.openapis.openapi.models.shared.TlsCertificateContextCertificateSourceEnum;
import org.openapis.openapi.models.shared.TlsCertificatePaths;
import org.openapis.openapi.models.shared.TlsContext;
import org.openapis.openapi.models.shared.TlsValidationContext;
import org.openapis.openapi.models.shared.TlsValidationContextValidationSourceEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionSslPoliciesInsertRequest req = new ComputeRegionSslPoliciesInsertRequest("facere", "est") {{
                dollarXgafv = XgafvEnum.TWO;
                sslPolicy = new SslPolicy() {{
                    creationTimestamp = "soluta";
                    customFeatures = new String[]{{
                        add("at"),
                    }};
                    description = "et";
                    enabledFeatures = new String[]{{
                        add("repudiandae"),
                        add("quasi"),
                    }};
                    fingerprint = "ipsum";
                    id = "corporis";
                    kind = "et";
                    minTlsVersion = SslPolicyMinTlsVersionEnum.TLS11;
                    name = "Celia Legros";
                    profile = SslPolicyProfileEnum.MODERN;
                    region = "natus";
                    selfLink = "minima";
                    selfLinkWithId = "nulla";
                    tlsSettings = new ServerTlsSettings() {{
                        proxyTlsContext = new TlsContext() {{
                            certificateContext = new TlsCertificateContext() {{
                                certificatePaths = new TlsCertificatePaths() {{
                                    certificatePath = "nostrum";
                                    privateKeyPath = "id";
                                }};;
                                certificateSource = TlsCertificateContextCertificateSourceEnum.USE_SDS;
                                sdsConfig = new SdsConfig() {{
                                    grpcServiceConfig = new GrpcServiceConfig() {{
                                        callCredentials = new CallCredentials() {{
                                            callCredentialType = CallCredentialsCallCredentialTypeEnum.INVALID;
                                            fromPlugin = new MetadataCredentialsFromPlugin() {{
                                                name = "Sammy Marvin";
                                                structConfig = "velit";
                                            }};;
                                        }};;
                                        channelCredentials = new ChannelCredentials() {{
                                            certificates = new TlsCertificatePaths() {{
                                                certificatePath = "optio";
                                                privateKeyPath = "quia";
                                            }};;
                                            channelCredentialType = ChannelCredentialsChannelCredentialTypeEnum.INVALID;
                                        }};;
                                        targetUri = "delectus";
                                    }};;
                                }};;
                            }};;
                            validationContext = new TlsValidationContext() {{
                                certificatePath = "aliquam";
                                sdsConfig = new SdsConfig() {{
                                    grpcServiceConfig = new GrpcServiceConfig() {{
                                        callCredentials = new CallCredentials() {{
                                            callCredentialType = CallCredentialsCallCredentialTypeEnum.GCE_VM;
                                            fromPlugin = new MetadataCredentialsFromPlugin() {{
                                                name = "Leroy Johns";
                                                structConfig = "incidunt";
                                            }};;
                                        }};;
                                        channelCredentials = new ChannelCredentials() {{
                                            certificates = new TlsCertificatePaths() {{
                                                certificatePath = "magni";
                                                privateKeyPath = "quo";
                                            }};;
                                            channelCredentialType = ChannelCredentialsChannelCredentialTypeEnum.INVALID;
                                        }};;
                                        targetUri = "ipsa";
                                    }};;
                                }};;
                                validationSource = TlsValidationContextValidationSourceEnum.INVALID;
                            }};;
                        }};;
                        subjectAltNames = new String[]{{
                            add("distinctio"),
                            add("exercitationem"),
                            add("assumenda"),
                            add("quia"),
                        }};
                        tlsMode = ServerTlsSettingsTlsModeEnum.INVALID;
                    }};;
                    warnings = new org.openapis.openapi.models.shared.SslPolicyWarnings[]{{
                        add(new SslPolicyWarnings() {{
                            code = SslPolicyWarningsCodeEnum.DISK_SIZE_LARGER_THAN_IMAGE_SIZE;
                            data = new org.openapis.openapi.models.shared.SslPolicyWarningsData[]{{
                                add(new SslPolicyWarningsData() {{
                                    key = "neque";
                                    value = "eum";
                                }}),
                                add(new SslPolicyWarningsData() {{
                                    key = "expedita";
                                    value = "molestias";
                                }}),
                            }};
                            message = "voluptatibus";
                        }}),
                        add(new SslPolicyWarnings() {{
                            code = SslPolicyWarningsCodeEnum.NEXT_HOP_INSTANCE_NOT_ON_NETWORK;
                            data = new org.openapis.openapi.models.shared.SslPolicyWarningsData[]{{
                                add(new SslPolicyWarningsData() {{
                                    key = "debitis";
                                    value = "quasi";
                                }}),
                                add(new SslPolicyWarningsData() {{
                                    key = "laboriosam";
                                    value = "dignissimos";
                                }}),
                            }};
                            message = "sint";
                        }}),
                        add(new SslPolicyWarnings() {{
                            code = SslPolicyWarningsCodeEnum.DISK_SIZE_LARGER_THAN_IMAGE_SIZE;
                            data = new org.openapis.openapi.models.shared.SslPolicyWarningsData[]{{
                                add(new SslPolicyWarningsData() {{
                                    key = "sequi";
                                    value = "ab";
                                }}),
                            }};
                            message = "suscipit";
                        }}),
                        add(new SslPolicyWarnings() {{
                            code = SslPolicyWarningsCodeEnum.SCHEMA_VALIDATION_IGNORED;
                            data = new org.openapis.openapi.models.shared.SslPolicyWarningsData[]{{
                                add(new SslPolicyWarningsData() {{
                                    key = "fuga";
                                    value = "assumenda";
                                }}),
                                add(new SslPolicyWarningsData() {{
                                    key = "quod";
                                    value = "necessitatibus";
                                }}),
                            }};
                            message = "maxime";
                        }}),
                    }};
                }};;
                accessToken = "accusamus";
                alt = AltEnum.PROTO;
                callback = "repudiandae";
                fields = "repellat";
                key = "dolorem";
                oauthToken = "facilis";
                prettyPrint = false;
                quotaUser = "exercitationem";
                requestId = "assumenda";
                uploadType = "rerum";
                uploadProtocol = "assumenda";
                userIp = "modi";
            }};            

            ComputeRegionSslPoliciesInsertResponse res = sdk.regionSslPolicies.computeRegionSslPoliciesInsert(req, new ComputeRegionSslPoliciesInsertSecurity() {{
                option1 = new ComputeRegionSslPoliciesInsertSecurityOption1("ducimus", "numquam") {{
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

            ComputeRegionSslPoliciesListRequest req = new ComputeRegionSslPoliciesListRequest("corrupti", "eius") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "natus";
                alt = AltEnum.MEDIA;
                callback = "esse";
                fields = "nemo";
                filter = "facere";
                key = "tempore";
                maxResults = 738252L;
                oauthToken = "molestiae";
                orderBy = "labore";
                pageToken = "doloribus";
                prettyPrint = false;
                quotaUser = "corporis";
                returnPartialSuccess = false;
                uploadType = "harum";
                uploadProtocol = "laborum";
                userIp = "nulla";
            }};            

            ComputeRegionSslPoliciesListResponse res = sdk.regionSslPolicies.computeRegionSslPoliciesList(req, new ComputeRegionSslPoliciesListSecurity() {{
                option1 = new ComputeRegionSslPoliciesListSecurityOption1("nostrum", "accusamus") {{
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

            ComputeRegionSslPoliciesListAvailableFeaturesRequest req = new ComputeRegionSslPoliciesListAvailableFeaturesRequest("animi", "ut") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "accusamus";
                alt = AltEnum.MEDIA;
                callback = "facere";
                fields = "cum";
                filter = "tenetur";
                key = "totam";
                maxResults = 29058L;
                oauthToken = "laborum";
                orderBy = "sapiente";
                pageToken = "maxime";
                prettyPrint = false;
                quotaUser = "odio";
                returnPartialSuccess = false;
                uploadType = "quo";
                uploadProtocol = "provident";
                userIp = "explicabo";
            }};            

            ComputeRegionSslPoliciesListAvailableFeaturesResponse res = sdk.regionSslPolicies.computeRegionSslPoliciesListAvailableFeatures(req, new ComputeRegionSslPoliciesListAvailableFeaturesSecurity() {{
                option1 = new ComputeRegionSslPoliciesListAvailableFeaturesSecurityOption1("saepe", "consequatur") {{
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
import org.openapis.openapi.models.shared.CallCredentials;
import org.openapis.openapi.models.shared.CallCredentialsCallCredentialTypeEnum;
import org.openapis.openapi.models.shared.ChannelCredentials;
import org.openapis.openapi.models.shared.ChannelCredentialsChannelCredentialTypeEnum;
import org.openapis.openapi.models.shared.GrpcServiceConfig;
import org.openapis.openapi.models.shared.MetadataCredentialsFromPlugin;
import org.openapis.openapi.models.shared.SdsConfig;
import org.openapis.openapi.models.shared.ServerTlsSettings;
import org.openapis.openapi.models.shared.ServerTlsSettingsTlsModeEnum;
import org.openapis.openapi.models.shared.SslPolicy;
import org.openapis.openapi.models.shared.SslPolicyMinTlsVersionEnum;
import org.openapis.openapi.models.shared.SslPolicyProfileEnum;
import org.openapis.openapi.models.shared.SslPolicyWarnings;
import org.openapis.openapi.models.shared.SslPolicyWarningsCodeEnum;
import org.openapis.openapi.models.shared.SslPolicyWarningsData;
import org.openapis.openapi.models.shared.TlsCertificateContext;
import org.openapis.openapi.models.shared.TlsCertificateContextCertificateSourceEnum;
import org.openapis.openapi.models.shared.TlsCertificatePaths;
import org.openapis.openapi.models.shared.TlsContext;
import org.openapis.openapi.models.shared.TlsValidationContext;
import org.openapis.openapi.models.shared.TlsValidationContextValidationSourceEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeRegionSslPoliciesPatchRequest req = new ComputeRegionSslPoliciesPatchRequest("veniam", "id", "excepturi") {{
                dollarXgafv = XgafvEnum.TWO;
                sslPolicy1 = new SslPolicy() {{
                    creationTimestamp = "odio";
                    customFeatures = new String[]{{
                        add("minima"),
                    }};
                    description = "delectus";
                    enabledFeatures = new String[]{{
                        add("optio"),
                        add("voluptatem"),
                        add("laudantium"),
                    }};
                    fingerprint = "perferendis";
                    id = "quasi";
                    kind = "accusamus";
                    minTlsVersion = SslPolicyMinTlsVersionEnum.TLS11;
                    name = "Katherine Graham III";
                    profile = SslPolicyProfileEnum.CUSTOM;
                    region = "natus";
                    selfLink = "laboriosam";
                    selfLinkWithId = "asperiores";
                    tlsSettings = new ServerTlsSettings() {{
                        proxyTlsContext = new TlsContext() {{
                            certificateContext = new TlsCertificateContext() {{
                                certificatePaths = new TlsCertificatePaths() {{
                                    certificatePath = "voluptatibus";
                                    privateKeyPath = "quaerat";
                                }};;
                                certificateSource = TlsCertificateContextCertificateSourceEnum.INVALID;
                                sdsConfig = new SdsConfig() {{
                                    grpcServiceConfig = new GrpcServiceConfig() {{
                                        callCredentials = new CallCredentials() {{
                                            callCredentialType = CallCredentialsCallCredentialTypeEnum.INVALID;
                                            fromPlugin = new MetadataCredentialsFromPlugin() {{
                                                name = "Luther Simonis";
                                                structConfig = "asperiores";
                                            }};;
                                        }};;
                                        channelCredentials = new ChannelCredentials() {{
                                            certificates = new TlsCertificatePaths() {{
                                                certificatePath = "reprehenderit";
                                                privateKeyPath = "saepe";
                                            }};;
                                            channelCredentialType = ChannelCredentialsChannelCredentialTypeEnum.GCE_VM;
                                        }};;
                                        targetUri = "veritatis";
                                    }};;
                                }};;
                            }};;
                            validationContext = new TlsValidationContext() {{
                                certificatePath = "illo";
                                sdsConfig = new SdsConfig() {{
                                    grpcServiceConfig = new GrpcServiceConfig() {{
                                        callCredentials = new CallCredentials() {{
                                            callCredentialType = CallCredentialsCallCredentialTypeEnum.GCE_VM;
                                            fromPlugin = new MetadataCredentialsFromPlugin() {{
                                                name = "Michele Goldner";
                                                structConfig = "nemo";
                                            }};;
                                        }};;
                                        channelCredentials = new ChannelCredentials() {{
                                            certificates = new TlsCertificatePaths() {{
                                                certificatePath = "laboriosam";
                                                privateKeyPath = "harum";
                                            }};;
                                            channelCredentialType = ChannelCredentialsChannelCredentialTypeEnum.INVALID;
                                        }};;
                                        targetUri = "magnam";
                                    }};;
                                }};;
                                validationSource = TlsValidationContextValidationSourceEnum.USE_SDS;
                            }};;
                        }};;
                        subjectAltNames = new String[]{{
                            add("officia"),
                            add("tempore"),
                        }};
                        tlsMode = ServerTlsSettingsTlsModeEnum.SIMPLE;
                    }};;
                    warnings = new org.openapis.openapi.models.shared.SslPolicyWarnings[]{{
                        add(new SslPolicyWarnings() {{
                            code = SslPolicyWarningsCodeEnum.DEPRECATED_RESOURCE_USED;
                            data = new org.openapis.openapi.models.shared.SslPolicyWarningsData[]{{
                                add(new SslPolicyWarningsData() {{
                                    key = "laborum";
                                    value = "harum";
                                }}),
                                add(new SslPolicyWarningsData() {{
                                    key = "consequatur";
                                    value = "eaque";
                                }}),
                                add(new SslPolicyWarningsData() {{
                                    key = "maxime";
                                    value = "vitae";
                                }}),
                                add(new SslPolicyWarningsData() {{
                                    key = "officiis";
                                    value = "recusandae";
                                }}),
                            }};
                            message = "expedita";
                        }}),
                        add(new SslPolicyWarnings() {{
                            code = SslPolicyWarningsCodeEnum.NEXT_HOP_ADDRESS_NOT_ASSIGNED;
                            data = new org.openapis.openapi.models.shared.SslPolicyWarningsData[]{{
                                add(new SslPolicyWarningsData() {{
                                    key = "omnis";
                                    value = "dicta";
                                }}),
                                add(new SslPolicyWarningsData() {{
                                    key = "nulla";
                                    value = "labore";
                                }}),
                            }};
                            message = "at";
                        }}),
                        add(new SslPolicyWarnings() {{
                            code = SslPolicyWarningsCodeEnum.EXPERIMENTAL_TYPE_USED;
                            data = new org.openapis.openapi.models.shared.SslPolicyWarningsData[]{{
                                add(new SslPolicyWarningsData() {{
                                    key = "veniam";
                                    value = "cupiditate";
                                }}),
                                add(new SslPolicyWarningsData() {{
                                    key = "aut";
                                    value = "harum";
                                }}),
                            }};
                            message = "vero";
                        }}),
                        add(new SslPolicyWarnings() {{
                            code = SslPolicyWarningsCodeEnum.NEXT_HOP_ADDRESS_NOT_ASSIGNED;
                            data = new org.openapis.openapi.models.shared.SslPolicyWarningsData[]{{
                                add(new SslPolicyWarningsData() {{
                                    key = "molestias";
                                    value = "ex";
                                }}),
                                add(new SslPolicyWarningsData() {{
                                    key = "atque";
                                    value = "reprehenderit";
                                }}),
                                add(new SslPolicyWarningsData() {{
                                    key = "quisquam";
                                    value = "quidem";
                                }}),
                                add(new SslPolicyWarningsData() {{
                                    key = "maxime";
                                    value = "dignissimos";
                                }}),
                            }};
                            message = "itaque";
                        }}),
                    }};
                }};;
                accessToken = "voluptates";
                alt = AltEnum.PROTO;
                callback = "ratione";
                fields = "hic";
                key = "fuga";
                oauthToken = "aut";
                prettyPrint = false;
                quotaUser = "saepe";
                requestId = "nesciunt";
                uploadType = "quis";
                uploadProtocol = "blanditiis";
                userIp = "dignissimos";
            }};            

            ComputeRegionSslPoliciesPatchResponse res = sdk.regionSslPolicies.computeRegionSslPoliciesPatch(req, new ComputeRegionSslPoliciesPatchSecurity() {{
                option1 = new ComputeRegionSslPoliciesPatchSecurityOption1("illo", "eius") {{
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

            ComputeRegionSslPoliciesTestIamPermissionsRequest req = new ComputeRegionSslPoliciesTestIamPermissionsRequest("repellat", "deserunt", "pariatur") {{
                dollarXgafv = XgafvEnum.ONE;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("esse"),
                    }};
                }};;
                accessToken = "officiis";
                alt = AltEnum.PROTO;
                callback = "ad";
                fields = "fugit";
                key = "delectus";
                oauthToken = "doloribus";
                prettyPrint = false;
                quotaUser = "veniam";
                uploadType = "eaque";
                uploadProtocol = "amet";
                userIp = "quis";
            }};            

            ComputeRegionSslPoliciesTestIamPermissionsResponse res = sdk.regionSslPolicies.computeRegionSslPoliciesTestIamPermissions(req, new ComputeRegionSslPoliciesTestIamPermissionsSecurity() {{
                option1 = new ComputeRegionSslPoliciesTestIamPermissionsSecurityOption1("labore", "animi") {{
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
