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

            ComputeSslPoliciesAggregatedListRequest req = new ComputeSslPoliciesAggregatedListRequest("iure") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "commodi";
                alt = AltEnum.JSON;
                callback = "enim";
                fields = "quam";
                filter = "eum";
                includeAllScopes = false;
                key = "pariatur";
                maxResults = 510798L;
                oauthToken = "ratione";
                orderBy = "velit";
                pageToken = "officiis";
                prettyPrint = false;
                quotaUser = "sint";
                returnPartialSuccess = false;
                uploadType = "facilis";
                uploadProtocol = "ratione";
                userIp = "nam";
            }};            

            ComputeSslPoliciesAggregatedListResponse res = sdk.sslPolicies.computeSslPoliciesAggregatedList(req, new ComputeSslPoliciesAggregatedListSecurity() {{
                option1 = new ComputeSslPoliciesAggregatedListSecurityOption1("odio", "repudiandae") {{
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

            ComputeSslPoliciesDeleteRequest req = new ComputeSslPoliciesDeleteRequest("illum", "cumque") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "nisi";
                alt = AltEnum.MEDIA;
                callback = "autem";
                fields = "deserunt";
                key = "tenetur";
                oauthToken = "possimus";
                prettyPrint = false;
                quotaUser = "voluptate";
                requestId = "cumque";
                uploadType = "ducimus";
                uploadProtocol = "sint";
                userIp = "adipisci";
            }};            

            ComputeSslPoliciesDeleteResponse res = sdk.sslPolicies.computeSslPoliciesDelete(req, new ComputeSslPoliciesDeleteSecurity() {{
                option1 = new ComputeSslPoliciesDeleteSecurityOption1("impedit", "molestiae") {{
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

            ComputeSslPoliciesGetRequest req = new ComputeSslPoliciesGetRequest("quia", "nostrum") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quas";
                alt = AltEnum.JSON;
                callback = "iure";
                fields = "facilis";
                key = "vero";
                oauthToken = "explicabo";
                prettyPrint = false;
                quotaUser = "quam";
                uploadType = "nisi";
                uploadProtocol = "deserunt";
                userIp = "fuga";
            }};            

            ComputeSslPoliciesGetResponse res = sdk.sslPolicies.computeSslPoliciesGet(req, new ComputeSslPoliciesGetSecurity() {{
                option1 = new ComputeSslPoliciesGetSecurityOption1("quaerat", "architecto") {{
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

            ComputeSslPoliciesInsertRequest req = new ComputeSslPoliciesInsertRequest("numquam") {{
                dollarXgafv = XgafvEnum.ONE;
                sslPolicy = new SslPolicy() {{
                    creationTimestamp = "quo";
                    customFeatures = new String[]{{
                        add("sapiente"),
                        add("laborum"),
                        add("occaecati"),
                        add("praesentium"),
                    }};
                    description = "eveniet";
                    enabledFeatures = new String[]{{
                        add("magnam"),
                        add("sint"),
                    }};
                    fingerprint = "est";
                    id = "autem";
                    kind = "ullam";
                    minTlsVersion = SslPolicyMinTlsVersionEnum.TLS10;
                    name = "Stephanie Morissette";
                    profile = SslPolicyProfileEnum.RESTRICTED;
                    region = "hic";
                    selfLink = "illo";
                    selfLinkWithId = "magni";
                    tlsSettings = new ServerTlsSettings() {{
                        proxyTlsContext = new TlsContext() {{
                            certificateContext = new TlsCertificateContext() {{
                                certificatePaths = new TlsCertificatePaths() {{
                                    certificatePath = "aliquam";
                                    privateKeyPath = "debitis";
                                }};;
                                certificateSource = TlsCertificateContextCertificateSourceEnum.INVALID;
                                sdsConfig = new SdsConfig() {{
                                    grpcServiceConfig = new GrpcServiceConfig() {{
                                        callCredentials = new CallCredentials() {{
                                            callCredentialType = CallCredentialsCallCredentialTypeEnum.FROM_PLUGIN;
                                            fromPlugin = new MetadataCredentialsFromPlugin() {{
                                                name = "Anthony Padberg";
                                                structConfig = "eum";
                                            }};;
                                        }};;
                                        channelCredentials = new ChannelCredentials() {{
                                            certificates = new TlsCertificatePaths() {{
                                                certificatePath = "fuga";
                                                privateKeyPath = "vero";
                                            }};;
                                            channelCredentialType = ChannelCredentialsChannelCredentialTypeEnum.GCE_VM;
                                        }};;
                                        targetUri = "blanditiis";
                                    }};;
                                }};;
                            }};;
                            validationContext = new TlsValidationContext() {{
                                certificatePath = "tenetur";
                                sdsConfig = new SdsConfig() {{
                                    grpcServiceConfig = new GrpcServiceConfig() {{
                                        callCredentials = new CallCredentials() {{
                                            callCredentialType = CallCredentialsCallCredentialTypeEnum.INVALID;
                                            fromPlugin = new MetadataCredentialsFromPlugin() {{
                                                name = "Marcos Lakin II";
                                                structConfig = "tempore";
                                            }};;
                                        }};;
                                        channelCredentials = new ChannelCredentials() {{
                                            certificates = new TlsCertificatePaths() {{
                                                certificatePath = "aut";
                                                privateKeyPath = "sequi";
                                            }};;
                                            channelCredentialType = ChannelCredentialsChannelCredentialTypeEnum.CERTIFICATES;
                                        }};;
                                        targetUri = "excepturi";
                                    }};;
                                }};;
                                validationSource = TlsValidationContextValidationSourceEnum.USE_SDS;
                            }};;
                        }};;
                        subjectAltNames = new String[]{{
                            add("impedit"),
                            add("officia"),
                            add("fugit"),
                        }};
                        tlsMode = ServerTlsSettingsTlsModeEnum.INVALID;
                    }};;
                    warnings = new org.openapis.openapi.models.shared.SslPolicyWarnings[]{{
                        add(new SslPolicyWarnings() {{
                            code = SslPolicyWarningsCodeEnum.NO_RESULTS_ON_PAGE;
                            data = new org.openapis.openapi.models.shared.SslPolicyWarningsData[]{{
                                add(new SslPolicyWarningsData() {{
                                    key = "hic";
                                    value = "aspernatur";
                                }}),
                                add(new SslPolicyWarningsData() {{
                                    key = "voluptate";
                                    value = "quaerat";
                                }}),
                            }};
                            message = "quae";
                        }}),
                        add(new SslPolicyWarnings() {{
                            code = SslPolicyWarningsCodeEnum.NEXT_HOP_ADDRESS_NOT_ASSIGNED;
                            data = new org.openapis.openapi.models.shared.SslPolicyWarningsData[]{{
                                add(new SslPolicyWarningsData() {{
                                    key = "maxime";
                                    value = "eum";
                                }}),
                                add(new SslPolicyWarningsData() {{
                                    key = "accusantium";
                                    value = "eaque";
                                }}),
                                add(new SslPolicyWarningsData() {{
                                    key = "dolore";
                                    value = "voluptates";
                                }}),
                                add(new SslPolicyWarningsData() {{
                                    key = "exercitationem";
                                    value = "aut";
                                }}),
                            }};
                            message = "fugit";
                        }}),
                        add(new SslPolicyWarnings() {{
                            code = SslPolicyWarningsCodeEnum.NEXT_HOP_CANNOT_IP_FORWARD;
                            data = new org.openapis.openapi.models.shared.SslPolicyWarningsData[]{{
                                add(new SslPolicyWarningsData() {{
                                    key = "ad";
                                    value = "alias";
                                }}),
                                add(new SslPolicyWarningsData() {{
                                    key = "amet";
                                    value = "nemo";
                                }}),
                                add(new SslPolicyWarningsData() {{
                                    key = "neque";
                                    value = "id";
                                }}),
                                add(new SslPolicyWarningsData() {{
                                    key = "neque";
                                    value = "quasi";
                                }}),
                            }};
                            message = "neque";
                        }}),
                    }};
                }};;
                accessToken = "est";
                alt = AltEnum.PROTO;
                callback = "cupiditate";
                fields = "fugiat";
                key = "atque";
                oauthToken = "iure";
                prettyPrint = false;
                quotaUser = "delectus";
                requestId = "quas";
                uploadType = "eaque";
                uploadProtocol = "omnis";
                userIp = "minus";
            }};            

            ComputeSslPoliciesInsertResponse res = sdk.sslPolicies.computeSslPoliciesInsert(req, new ComputeSslPoliciesInsertSecurity() {{
                option1 = new ComputeSslPoliciesInsertSecurityOption1("architecto", "nulla") {{
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

            ComputeSslPoliciesListRequest req = new ComputeSslPoliciesListRequest("aliquid") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "hic";
                alt = AltEnum.JSON;
                callback = "ab";
                fields = "assumenda";
                filter = "est";
                key = "commodi";
                maxResults = 104886L;
                oauthToken = "hic";
                orderBy = "reiciendis";
                pageToken = "quas";
                prettyPrint = false;
                quotaUser = "excepturi";
                returnPartialSuccess = false;
                uploadType = "maiores";
                uploadProtocol = "vitae";
                userIp = "magni";
            }};            

            ComputeSslPoliciesListResponse res = sdk.sslPolicies.computeSslPoliciesList(req, new ComputeSslPoliciesListSecurity() {{
                option1 = new ComputeSslPoliciesListSecurityOption1("consectetur", "rem") {{
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

            ComputeSslPoliciesListAvailableFeaturesRequest req = new ComputeSslPoliciesListAvailableFeaturesRequest("nobis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "rerum";
                alt = AltEnum.PROTO;
                callback = "eos";
                fields = "magni";
                filter = "nesciunt";
                key = "laboriosam";
                maxResults = 34942L;
                oauthToken = "fuga";
                orderBy = "nesciunt";
                pageToken = "praesentium";
                prettyPrint = false;
                quotaUser = "blanditiis";
                returnPartialSuccess = false;
                uploadType = "qui";
                uploadProtocol = "provident";
                userIp = "temporibus";
            }};            

            ComputeSslPoliciesListAvailableFeaturesResponse res = sdk.sslPolicies.computeSslPoliciesListAvailableFeatures(req, new ComputeSslPoliciesListAvailableFeaturesSecurity() {{
                option1 = new ComputeSslPoliciesListAvailableFeaturesSecurityOption1("perferendis", "fuga") {{
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

            ComputeSslPoliciesPatchRequest req = new ComputeSslPoliciesPatchRequest("perspiciatis", "assumenda") {{
                dollarXgafv = XgafvEnum.TWO;
                sslPolicy1 = new SslPolicy() {{
                    creationTimestamp = "molestiae";
                    customFeatures = new String[]{{
                        add("itaque"),
                    }};
                    description = "nesciunt";
                    enabledFeatures = new String[]{{
                        add("quisquam"),
                        add("unde"),
                    }};
                    fingerprint = "nesciunt";
                    id = "atque";
                    kind = "excepturi";
                    minTlsVersion = SslPolicyMinTlsVersionEnum.TLS11;
                    name = "Shane Hayes";
                    profile = SslPolicyProfileEnum.MODERN;
                    region = "dolorum";
                    selfLink = "sint";
                    selfLinkWithId = "ipsa";
                    tlsSettings = new ServerTlsSettings() {{
                        proxyTlsContext = new TlsContext() {{
                            certificateContext = new TlsCertificateContext() {{
                                certificatePaths = new TlsCertificatePaths() {{
                                    certificatePath = "ducimus";
                                    privateKeyPath = "aliquam";
                                }};;
                                certificateSource = TlsCertificateContextCertificateSourceEnum.USE_PATH;
                                sdsConfig = new SdsConfig() {{
                                    grpcServiceConfig = new GrpcServiceConfig() {{
                                        callCredentials = new CallCredentials() {{
                                            callCredentialType = CallCredentialsCallCredentialTypeEnum.INVALID;
                                            fromPlugin = new MetadataCredentialsFromPlugin() {{
                                                name = "Dale Davis";
                                                structConfig = "suscipit";
                                            }};;
                                        }};;
                                        channelCredentials = new ChannelCredentials() {{
                                            certificates = new TlsCertificatePaths() {{
                                                certificatePath = "aspernatur";
                                                privateKeyPath = "nobis";
                                            }};;
                                            channelCredentialType = ChannelCredentialsChannelCredentialTypeEnum.CERTIFICATES;
                                        }};;
                                        targetUri = "esse";
                                    }};;
                                }};;
                            }};;
                            validationContext = new TlsValidationContext() {{
                                certificatePath = "et";
                                sdsConfig = new SdsConfig() {{
                                    grpcServiceConfig = new GrpcServiceConfig() {{
                                        callCredentials = new CallCredentials() {{
                                            callCredentialType = CallCredentialsCallCredentialTypeEnum.INVALID;
                                            fromPlugin = new MetadataCredentialsFromPlugin() {{
                                                name = "Vincent Dibbert";
                                                structConfig = "eius";
                                            }};;
                                        }};;
                                        channelCredentials = new ChannelCredentials() {{
                                            certificates = new TlsCertificatePaths() {{
                                                certificatePath = "voluptates";
                                                privateKeyPath = "expedita";
                                            }};;
                                            channelCredentialType = ChannelCredentialsChannelCredentialTypeEnum.INVALID;
                                        }};;
                                        targetUri = "eaque";
                                    }};;
                                }};;
                                validationSource = TlsValidationContextValidationSourceEnum.USE_PATH;
                            }};;
                        }};;
                        subjectAltNames = new String[]{{
                            add("adipisci"),
                            add("porro"),
                        }};
                        tlsMode = ServerTlsSettingsTlsModeEnum.INVALID;
                    }};;
                    warnings = new org.openapis.openapi.models.shared.SslPolicyWarnings[]{{
                        add(new SslPolicyWarnings() {{
                            code = SslPolicyWarningsCodeEnum.NEXT_HOP_NOT_RUNNING;
                            data = new org.openapis.openapi.models.shared.SslPolicyWarningsData[]{{
                                add(new SslPolicyWarningsData() {{
                                    key = "autem";
                                    value = "nesciunt";
                                }}),
                            }};
                            message = "eligendi";
                        }}),
                        add(new SslPolicyWarnings() {{
                            code = SslPolicyWarningsCodeEnum.DEPRECATED_RESOURCE_USED;
                            data = new org.openapis.openapi.models.shared.SslPolicyWarningsData[]{{
                                add(new SslPolicyWarningsData() {{
                                    key = "itaque";
                                    value = "nihil";
                                }}),
                                add(new SslPolicyWarningsData() {{
                                    key = "cumque";
                                    value = "voluptate";
                                }}),
                                add(new SslPolicyWarningsData() {{
                                    key = "sequi";
                                    value = "fugiat";
                                }}),
                                add(new SslPolicyWarningsData() {{
                                    key = "nisi";
                                    value = "odit";
                                }}),
                            }};
                            message = "dolore";
                        }}),
                        add(new SslPolicyWarnings() {{
                            code = SslPolicyWarningsCodeEnum.UNDECLARED_PROPERTIES;
                            data = new org.openapis.openapi.models.shared.SslPolicyWarningsData[]{{
                                add(new SslPolicyWarningsData() {{
                                    key = "porro";
                                    value = "odit";
                                }}),
                                add(new SslPolicyWarningsData() {{
                                    key = "optio";
                                    value = "pariatur";
                                }}),
                                add(new SslPolicyWarningsData() {{
                                    key = "tempora";
                                    value = "cumque";
                                }}),
                            }};
                            message = "sit";
                        }}),
                    }};
                }};;
                accessToken = "aperiam";
                alt = AltEnum.PROTO;
                callback = "voluptatibus";
                fields = "debitis";
                key = "accusamus";
                oauthToken = "laboriosam";
                prettyPrint = false;
                quotaUser = "consequatur";
                requestId = "ullam";
                uploadType = "at";
                uploadProtocol = "fugit";
                userIp = "pariatur";
            }};            

            ComputeSslPoliciesPatchResponse res = sdk.sslPolicies.computeSslPoliciesPatch(req, new ComputeSslPoliciesPatchSecurity() {{
                option1 = new ComputeSslPoliciesPatchSecurityOption1("quae", "ut") {{
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

            ComputeSslPoliciesTestIamPermissionsRequest req = new ComputeSslPoliciesTestIamPermissionsRequest("commodi", "iure") {{
                dollarXgafv = XgafvEnum.ONE;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("iusto"),
                        add("veniam"),
                        add("quibusdam"),
                        add("facere"),
                    }};
                }};;
                accessToken = "sint";
                alt = AltEnum.PROTO;
                callback = "neque";
                fields = "in";
                key = "voluptate";
                oauthToken = "velit";
                prettyPrint = false;
                quotaUser = "eum";
                uploadType = "corporis";
                uploadProtocol = "tempore";
                userIp = "aliquam";
            }};            

            ComputeSslPoliciesTestIamPermissionsResponse res = sdk.sslPolicies.computeSslPoliciesTestIamPermissions(req, new ComputeSslPoliciesTestIamPermissionsSecurity() {{
                option1 = new ComputeSslPoliciesTestIamPermissionsSecurityOption1("cumque", "hic") {{
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
