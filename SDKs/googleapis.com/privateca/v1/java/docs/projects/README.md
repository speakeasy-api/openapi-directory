# projects

### Available Operations

* [privatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivate](#privatecaprojectslocationscapoolscertificateauthoritiesactivate) - Activate a CertificateAuthority that is in state AWAITING_USER_ACTIVATION and is of type SUBORDINATE. After the parent Certificate Authority signs a certificate signing request from FetchCertificateAuthorityCsr, this method can complete the activation process.
* [privatecaProjectsLocationsCaPoolsCertificateAuthoritiesCertificateRevocationListsList](#privatecaprojectslocationscapoolscertificateauthoritiescertificaterevocationlistslist) - Lists CertificateRevocationLists.
* [privatecaProjectsLocationsCaPoolsCertificateAuthoritiesCreate](#privatecaprojectslocationscapoolscertificateauthoritiescreate) - Create a new CertificateAuthority in a given Project and Location.
* [privatecaProjectsLocationsCaPoolsCertificateAuthoritiesDisable](#privatecaprojectslocationscapoolscertificateauthoritiesdisable) - Disable a CertificateAuthority.
* [privatecaProjectsLocationsCaPoolsCertificateAuthoritiesEnable](#privatecaprojectslocationscapoolscertificateauthoritiesenable) - Enable a CertificateAuthority.
* [privatecaProjectsLocationsCaPoolsCertificateAuthoritiesFetch](#privatecaprojectslocationscapoolscertificateauthoritiesfetch) - Fetch a certificate signing request (CSR) from a CertificateAuthority that is in state AWAITING_USER_ACTIVATION and is of type SUBORDINATE. The CSR must then be signed by the desired parent Certificate Authority, which could be another CertificateAuthority resource, or could be an on-prem certificate authority. See also ActivateCertificateAuthority.
* [privatecaProjectsLocationsCaPoolsCertificateAuthoritiesList](#privatecaprojectslocationscapoolscertificateauthoritieslist) - Lists CertificateAuthorities.
* [privatecaProjectsLocationsCaPoolsCertificateAuthoritiesUndelete](#privatecaprojectslocationscapoolscertificateauthoritiesundelete) - Undelete a CertificateAuthority that has been deleted.
* [privatecaProjectsLocationsCaPoolsCertificatesCreate](#privatecaprojectslocationscapoolscertificatescreate) - Create a new Certificate in a given Project, Location from a particular CaPool.
* [privatecaProjectsLocationsCaPoolsCertificatesList](#privatecaprojectslocationscapoolscertificateslist) - Lists Certificates.
* [privatecaProjectsLocationsCaPoolsCertificatesRevoke](#privatecaprojectslocationscapoolscertificatesrevoke) - Revoke a Certificate.
* [privatecaProjectsLocationsCaPoolsCreate](#privatecaprojectslocationscapoolscreate) - Create a CaPool.
* [privatecaProjectsLocationsCaPoolsFetchCaCerts](#privatecaprojectslocationscapoolsfetchcacerts) - FetchCaCerts returns the current trust anchor for the CaPool. This will include CA certificate chains for all ACTIVE CertificateAuthority resources in the CaPool.
* [privatecaProjectsLocationsCaPoolsList](#privatecaprojectslocationscapoolslist) - Lists CaPools.
* [privatecaProjectsLocationsCertificateTemplatesCreate](#privatecaprojectslocationscertificatetemplatescreate) - Create a new CertificateTemplate in a given Project and Location.
* [privatecaProjectsLocationsCertificateTemplatesGetIamPolicy](#privatecaprojectslocationscertificatetemplatesgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [privatecaProjectsLocationsCertificateTemplatesList](#privatecaprojectslocationscertificatetemplateslist) - Lists CertificateTemplates.
* [privatecaProjectsLocationsCertificateTemplatesPatch](#privatecaprojectslocationscertificatetemplatespatch) - Update a CertificateTemplate.
* [privatecaProjectsLocationsCertificateTemplatesSetIamPolicy](#privatecaprojectslocationscertificatetemplatessetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [privatecaProjectsLocationsCertificateTemplatesTestIamPermissions](#privatecaprojectslocationscertificatetemplatestestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [privatecaProjectsLocationsList](#privatecaprojectslocationslist) - Lists information about the supported locations for this service.
* [privatecaProjectsLocationsOperationsCancel](#privatecaprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [privatecaProjectsLocationsOperationsDelete](#privatecaprojectslocationsoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [privatecaProjectsLocationsOperationsGet](#privatecaprojectslocationsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [privatecaProjectsLocationsOperationsList](#privatecaprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

## privatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivate

Activate a CertificateAuthority that is in state AWAITING_USER_ACTIVATION and is of type SUBORDINATE. After the parent Certificate Authority signs a certificate signing request from FetchCertificateAuthorityCsr, this method can complete the activation process.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivateRequest;
import org.openapis.openapi.models.operations.PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivateResponse;
import org.openapis.openapi.models.operations.PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivateSecurity;
import org.openapis.openapi.models.shared.ActivateCertificateAuthorityRequest;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.SubordinateConfig;
import org.openapis.openapi.models.shared.SubordinateConfigChain;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivateRequest req = new PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivateRequest("placeat") {{
                dollarXgafv = XgafvEnum.TWO;
                activateCertificateAuthorityRequest = new ActivateCertificateAuthorityRequest() {{
                    pemCaCertificate = "iusto";
                    requestId = "excepturi";
                    subordinateConfig = new SubordinateConfig() {{
                        certificateAuthority = "nisi";
                        pemIssuerChain = new SubordinateConfigChain() {{
                            pemCertificates = new String[]{{
                                add("temporibus"),
                                add("ab"),
                                add("quis"),
                                add("veritatis"),
                            }};
                        }};;
                    }};;
                }};;
                accessToken = "deserunt";
                alt = AltEnum.JSON;
                callback = "ipsam";
                fields = "repellendus";
                key = "sapiente";
                oauthToken = "quo";
                prettyPrint = false;
                quotaUser = "odit";
                uploadType = "at";
                uploadProtocol = "at";
            }};            

            PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivateResponse res = sdk.projects.privatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivate(req, new PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivateSecurity("maiores", "molestiae") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## privatecaProjectsLocationsCaPoolsCertificateAuthoritiesCertificateRevocationListsList

Lists CertificateRevocationLists.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesCertificateRevocationListsListRequest;
import org.openapis.openapi.models.operations.PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesCertificateRevocationListsListResponse;
import org.openapis.openapi.models.operations.PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesCertificateRevocationListsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesCertificateRevocationListsListRequest req = new PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesCertificateRevocationListsListRequest("quod") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "esse";
                alt = AltEnum.MEDIA;
                callback = "porro";
                fields = "dolorum";
                filter = "dicta";
                key = "nam";
                oauthToken = "officia";
                orderBy = "occaecati";
                pageSize = 143353L;
                pageToken = "deleniti";
                prettyPrint = false;
                quotaUser = "hic";
                uploadType = "optio";
                uploadProtocol = "totam";
            }};            

            PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesCertificateRevocationListsListResponse res = sdk.projects.privatecaProjectsLocationsCaPoolsCertificateAuthoritiesCertificateRevocationListsList(req, new PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesCertificateRevocationListsListSecurity("beatae", "commodi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listCertificateRevocationListsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## privatecaProjectsLocationsCaPoolsCertificateAuthoritiesCreate

Create a new CertificateAuthority in a given Project and Location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesCreateRequest;
import org.openapis.openapi.models.operations.PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesCreateResponse;
import org.openapis.openapi.models.operations.PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesCreateSecurity;
import org.openapis.openapi.models.shared.AccessUrls;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CaOptions;
import org.openapis.openapi.models.shared.CertificateAuthorityInput;
import org.openapis.openapi.models.shared.CertificateAuthorityTypeEnum;
import org.openapis.openapi.models.shared.CertificateConfig;
import org.openapis.openapi.models.shared.ExtendedKeyUsageOptions;
import org.openapis.openapi.models.shared.KeyUsage;
import org.openapis.openapi.models.shared.KeyUsageOptions;
import org.openapis.openapi.models.shared.KeyVersionSpec;
import org.openapis.openapi.models.shared.KeyVersionSpecAlgorithmEnum;
import org.openapis.openapi.models.shared.NameConstraints;
import org.openapis.openapi.models.shared.ObjectId;
import org.openapis.openapi.models.shared.PublicKey;
import org.openapis.openapi.models.shared.PublicKeyFormatEnum;
import org.openapis.openapi.models.shared.Subject;
import org.openapis.openapi.models.shared.SubjectAltNames;
import org.openapis.openapi.models.shared.SubjectConfig;
import org.openapis.openapi.models.shared.SubordinateConfig;
import org.openapis.openapi.models.shared.SubordinateConfigChain;
import org.openapis.openapi.models.shared.X509Extension;
import org.openapis.openapi.models.shared.X509Parameters;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesCreateRequest req = new PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesCreateRequest("molestiae") {{
                dollarXgafv = XgafvEnum.ONE;
                certificateAuthorityInput = new CertificateAuthorityInput() {{
                    accessUrls = new AccessUrls() {{
                        caCertificateAccessUrl = "qui";
                        crlAccessUrls = new String[]{{
                            add("cum"),
                            add("esse"),
                            add("ipsum"),
                            add("excepturi"),
                        }};
                    }};;
                    config = new CertificateConfig() {{
                        publicKey = new PublicKey() {{
                            format = PublicKeyFormatEnum.KEY_FORMAT_UNSPECIFIED;
                            key = "perferendis";
                        }};;
                        subjectConfig = new SubjectConfig() {{
                            subject = new Subject() {{
                                commonName = "ad";
                                countryCode = "MU";
                                locality = "sed";
                                organization = "iste";
                                organizationalUnit = "dolor";
                                postalCode = "39964-3649";
                                province = "quidem";
                                streetAddress = "architecto";
                            }};;
                            subjectAltName = new SubjectAltNames() {{
                                customSans = new org.openapis.openapi.models.shared.X509Extension[]{{
                                    add(new X509Extension() {{
                                        critical = false;
                                        objectId = new ObjectId() {{
                                            objectIdPath = new Integer[]{{
                                                add(666767),
                                                add(653140),
                                                add(670638),
                                                add(170909),
                                            }};
                                        }};
                                        value = "dolorem";
                                    }}),
                                }};
                                dnsNames = new String[]{{
                                    add("explicabo"),
                                    add("nobis"),
                                }};
                                emailAddresses = new String[]{{
                                    add("omnis"),
                                    add("nemo"),
                                }};
                                ipAddresses = new String[]{{
                                    add("excepturi"),
                                    add("accusantium"),
                                }};
                                uris = new String[]{{
                                    add("culpa"),
                                    add("doloribus"),
                                }};
                            }};;
                        }};;
                        x509Config = new X509Parameters() {{
                            additionalExtensions = new org.openapis.openapi.models.shared.X509Extension[]{{
                                add(new X509Extension() {{
                                    critical = false;
                                    objectId = new ObjectId() {{
                                        objectIdPath = new Integer[]{{
                                            add(652790),
                                        }};
                                    }};
                                    value = "dolorem";
                                }}),
                                add(new X509Extension() {{
                                    critical = false;
                                    objectId = new ObjectId() {{
                                        objectIdPath = new Integer[]{{
                                            add(161309),
                                            add(995300),
                                            add(653108),
                                        }};
                                    }};
                                    value = "occaecati";
                                }}),
                                add(new X509Extension() {{
                                    critical = false;
                                    objectId = new ObjectId() {{
                                        objectIdPath = new Integer[]{{
                                            add(414369),
                                            add(466311),
                                        }};
                                    }};
                                    value = "molestiae";
                                }}),
                                add(new X509Extension() {{
                                    critical = false;
                                    objectId = new ObjectId() {{
                                        objectIdPath = new Integer[]{{
                                            add(623510),
                                        }};
                                    }};
                                    value = "quia";
                                }}),
                            }};
                            aiaOcspServers = new String[]{{
                                add("vitae"),
                                add("laborum"),
                            }};
                            caOptions = new CaOptions() {{
                                isCa = false;
                                maxIssuerPathLength = 656330;
                            }};;
                            keyUsage = new KeyUsage() {{
                                baseKeyUsage = new KeyUsageOptions() {{
                                    certSign = false;
                                    contentCommitment = false;
                                    crlSign = false;
                                    dataEncipherment = false;
                                    decipherOnly = false;
                                    digitalSignature = false;
                                    encipherOnly = false;
                                    keyAgreement = false;
                                    keyEncipherment = false;
                                }};;
                                extendedKeyUsage = new ExtendedKeyUsageOptions() {{
                                    clientAuth = false;
                                    codeSigning = false;
                                    emailProtection = false;
                                    ocspSigning = false;
                                    serverAuth = false;
                                    timeStamping = false;
                                }};;
                                unknownExtendedKeyUsages = new org.openapis.openapi.models.shared.ObjectId[]{{
                                    add(new ObjectId() {{
                                        objectIdPath = new Integer[]{{
                                            add(778346),
                                        }};
                                    }}),
                                    add(new ObjectId() {{
                                        objectIdPath = new Integer[]{{
                                            add(949572),
                                        }};
                                    }}),
                                }};
                            }};;
                            nameConstraints = new NameConstraints() {{
                                critical = false;
                                excludedDnsNames = new String[]{{
                                    add("id"),
                                    add("possimus"),
                                }};
                                excludedEmailAddresses = new String[]{{
                                    add("quasi"),
                                }};
                                excludedIpRanges = new String[]{{
                                    add("temporibus"),
                                    add("laborum"),
                                    add("quasi"),
                                }};
                                excludedUris = new String[]{{
                                    add("voluptatibus"),
                                    add("vero"),
                                    add("nihil"),
                                    add("praesentium"),
                                }};
                                permittedDnsNames = new String[]{{
                                    add("ipsa"),
                                    add("omnis"),
                                    add("voluptate"),
                                    add("cum"),
                                }};
                                permittedEmailAddresses = new String[]{{
                                    add("doloremque"),
                                }};
                                permittedIpRanges = new String[]{{
                                    add("ut"),
                                    add("maiores"),
                                }};
                                permittedUris = new String[]{{
                                    add("corporis"),
                                }};
                            }};;
                            policyIds = new org.openapis.openapi.models.shared.ObjectId[]{{
                                add(new ObjectId() {{
                                    objectIdPath = new Integer[]{{
                                        add(118727),
                                        add(688661),
                                    }};
                                }}),
                                add(new ObjectId() {{
                                    objectIdPath = new Integer[]{{
                                        add(880476),
                                        add(414263),
                                    }};
                                }}),
                            }};
                        }};;
                    }};;
                    gcsBucket = "repudiandae";
                    keySpec = new KeyVersionSpec() {{
                        algorithm = KeyVersionSpecAlgorithmEnum.SIGN_HASH_ALGORITHM_UNSPECIFIED;
                        cloudKmsKeyVersion = "ipsum";
                    }};;
                    labels = new java.util.HashMap<String, String>() {{
                        put("molestias", "excepturi");
                        put("pariatur", "modi");
                        put("praesentium", "rem");
                    }};
                    lifetime = "voluptates";
                    subordinateConfig = new SubordinateConfig() {{
                        certificateAuthority = "quasi";
                        pemIssuerChain = new SubordinateConfigChain() {{
                            pemCertificates = new String[]{{
                                add("sint"),
                                add("veritatis"),
                                add("itaque"),
                                add("incidunt"),
                            }};
                        }};;
                    }};;
                    type = CertificateAuthorityTypeEnum.TYPE_UNSPECIFIED;
                }};;
                accessToken = "consequatur";
                alt = AltEnum.PROTO;
                callback = "quibusdam";
                certificateAuthorityId = "explicabo";
                fields = "deserunt";
                key = "distinctio";
                oauthToken = "quibusdam";
                prettyPrint = false;
                quotaUser = "labore";
                requestId = "modi";
                uploadType = "qui";
                uploadProtocol = "aliquid";
            }};            

            PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesCreateResponse res = sdk.projects.privatecaProjectsLocationsCaPoolsCertificateAuthoritiesCreate(req, new PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesCreateSecurity("cupiditate", "quos") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## privatecaProjectsLocationsCaPoolsCertificateAuthoritiesDisable

Disable a CertificateAuthority.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesDisableRequest;
import org.openapis.openapi.models.operations.PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesDisableResponse;
import org.openapis.openapi.models.operations.PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesDisableSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.DisableCertificateAuthorityRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesDisableRequest req = new PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesDisableRequest("perferendis") {{
                dollarXgafv = XgafvEnum.ONE;
                disableCertificateAuthorityRequest = new DisableCertificateAuthorityRequest() {{
                    ignoreDependentResources = false;
                    requestId = "assumenda";
                }};;
                accessToken = "ipsam";
                alt = AltEnum.JSON;
                callback = "fugit";
                fields = "dolorum";
                key = "excepturi";
                oauthToken = "tempora";
                prettyPrint = false;
                quotaUser = "facilis";
                uploadType = "tempore";
                uploadProtocol = "labore";
            }};            

            PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesDisableResponse res = sdk.projects.privatecaProjectsLocationsCaPoolsCertificateAuthoritiesDisable(req, new PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesDisableSecurity("delectus", "eum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## privatecaProjectsLocationsCaPoolsCertificateAuthoritiesEnable

Enable a CertificateAuthority.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesEnableRequest;
import org.openapis.openapi.models.operations.PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesEnableResponse;
import org.openapis.openapi.models.operations.PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesEnableSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.EnableCertificateAuthorityRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesEnableRequest req = new PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesEnableRequest("non") {{
                dollarXgafv = XgafvEnum.TWO;
                enableCertificateAuthorityRequest = new EnableCertificateAuthorityRequest() {{
                    requestId = "sint";
                }};;
                accessToken = "aliquid";
                alt = AltEnum.MEDIA;
                callback = "necessitatibus";
                fields = "sint";
                key = "officia";
                oauthToken = "dolor";
                prettyPrint = false;
                quotaUser = "debitis";
                uploadType = "a";
                uploadProtocol = "dolorum";
            }};            

            PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesEnableResponse res = sdk.projects.privatecaProjectsLocationsCaPoolsCertificateAuthoritiesEnable(req, new PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesEnableSecurity("in", "in") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## privatecaProjectsLocationsCaPoolsCertificateAuthoritiesFetch

Fetch a certificate signing request (CSR) from a CertificateAuthority that is in state AWAITING_USER_ACTIVATION and is of type SUBORDINATE. The CSR must then be signed by the desired parent Certificate Authority, which could be another CertificateAuthority resource, or could be an on-prem certificate authority. See also ActivateCertificateAuthority.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesFetchRequest;
import org.openapis.openapi.models.operations.PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesFetchResponse;
import org.openapis.openapi.models.operations.PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesFetchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesFetchRequest req = new PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesFetchRequest("illum") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "rerum";
                alt = AltEnum.JSON;
                callback = "magnam";
                fields = "cumque";
                key = "facere";
                oauthToken = "ea";
                prettyPrint = false;
                quotaUser = "aliquid";
                uploadType = "laborum";
                uploadProtocol = "accusamus";
            }};            

            PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesFetchResponse res = sdk.projects.privatecaProjectsLocationsCaPoolsCertificateAuthoritiesFetch(req, new PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesFetchSecurity("non", "occaecati") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.fetchCertificateAuthorityCsrResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## privatecaProjectsLocationsCaPoolsCertificateAuthoritiesList

Lists CertificateAuthorities.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesListRequest;
import org.openapis.openapi.models.operations.PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesListResponse;
import org.openapis.openapi.models.operations.PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesListRequest req = new PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesListRequest("enim") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "delectus";
                alt = AltEnum.PROTO;
                callback = "provident";
                fields = "nam";
                filter = "id";
                key = "blanditiis";
                oauthToken = "deleniti";
                orderBy = "sapiente";
                pageSize = 230533L;
                pageToken = "deserunt";
                prettyPrint = false;
                quotaUser = "nisi";
                uploadType = "vel";
                uploadProtocol = "natus";
            }};            

            PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesListResponse res = sdk.projects.privatecaProjectsLocationsCaPoolsCertificateAuthoritiesList(req, new PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesListSecurity("omnis", "molestiae") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listCertificateAuthoritiesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## privatecaProjectsLocationsCaPoolsCertificateAuthoritiesUndelete

Undelete a CertificateAuthority that has been deleted.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesUndeleteRequest;
import org.openapis.openapi.models.operations.PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesUndeleteResponse;
import org.openapis.openapi.models.operations.PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesUndeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.UndeleteCertificateAuthorityRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesUndeleteRequest req = new PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesUndeleteRequest("perferendis") {{
                dollarXgafv = XgafvEnum.ONE;
                undeleteCertificateAuthorityRequest = new UndeleteCertificateAuthorityRequest() {{
                    requestId = "magnam";
                }};;
                accessToken = "distinctio";
                alt = AltEnum.MEDIA;
                callback = "labore";
                fields = "labore";
                key = "suscipit";
                oauthToken = "natus";
                prettyPrint = false;
                quotaUser = "nobis";
                uploadType = "eum";
                uploadProtocol = "vero";
            }};            

            PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesUndeleteResponse res = sdk.projects.privatecaProjectsLocationsCaPoolsCertificateAuthoritiesUndelete(req, new PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesUndeleteSecurity("aspernatur", "architecto") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## privatecaProjectsLocationsCaPoolsCertificatesCreate

Create a new Certificate in a given Project, Location from a particular CaPool.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PrivatecaProjectsLocationsCaPoolsCertificatesCreateRequest;
import org.openapis.openapi.models.operations.PrivatecaProjectsLocationsCaPoolsCertificatesCreateResponse;
import org.openapis.openapi.models.operations.PrivatecaProjectsLocationsCaPoolsCertificatesCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CaOptions;
import org.openapis.openapi.models.shared.CertificateConfig;
import org.openapis.openapi.models.shared.CertificateDescription;
import org.openapis.openapi.models.shared.CertificateFingerprint;
import org.openapis.openapi.models.shared.CertificateInput;
import org.openapis.openapi.models.shared.CertificateSubjectModeEnum;
import org.openapis.openapi.models.shared.ExtendedKeyUsageOptions;
import org.openapis.openapi.models.shared.KeyId;
import org.openapis.openapi.models.shared.KeyUsage;
import org.openapis.openapi.models.shared.KeyUsageOptions;
import org.openapis.openapi.models.shared.NameConstraints;
import org.openapis.openapi.models.shared.ObjectId;
import org.openapis.openapi.models.shared.PublicKey;
import org.openapis.openapi.models.shared.PublicKeyFormatEnum;
import org.openapis.openapi.models.shared.RevocationDetails;
import org.openapis.openapi.models.shared.RevocationDetailsRevocationStateEnum;
import org.openapis.openapi.models.shared.Subject;
import org.openapis.openapi.models.shared.SubjectAltNames;
import org.openapis.openapi.models.shared.SubjectConfig;
import org.openapis.openapi.models.shared.SubjectDescription;
import org.openapis.openapi.models.shared.X509Extension;
import org.openapis.openapi.models.shared.X509Parameters;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PrivatecaProjectsLocationsCaPoolsCertificatesCreateRequest req = new PrivatecaProjectsLocationsCaPoolsCertificatesCreateRequest("magnam") {{
                dollarXgafv = XgafvEnum.ONE;
                certificateInput = new CertificateInput() {{
                    certificateDescription = new CertificateDescription() {{
                        aiaIssuingCertificateUrls = new String[]{{
                            add("ullam"),
                            add("provident"),
                            add("quos"),
                        }};
                        authorityKeyId = new KeyId() {{
                            keyId = "sint";
                        }};;
                        certFingerprint = new CertificateFingerprint() {{
                            sha256Hash = "accusantium";
                        }};;
                        crlDistributionPoints = new String[]{{
                            add("reiciendis"),
                            add("mollitia"),
                            add("ad"),
                        }};
                        publicKey = new PublicKey() {{
                            format = PublicKeyFormatEnum.KEY_FORMAT_UNSPECIFIED;
                            key = "dolor";
                        }};;
                        subjectDescription = new SubjectDescription() {{
                            hexSerialNumber = "necessitatibus";
                            lifetime = "odit";
                            notAfterTime = "nemo";
                            notBeforeTime = "quasi";
                            subject = new Subject() {{
                                commonName = "iure";
                                countryCode = "YT";
                                locality = "debitis";
                                organization = "eius";
                                organizationalUnit = "maxime";
                                postalCode = "74109-3749";
                                province = "quibusdam";
                                streetAddress = "sed";
                            }};;
                            subjectAltName = new SubjectAltNames() {{
                                customSans = new org.openapis.openapi.models.shared.X509Extension[]{{
                                    add(new X509Extension() {{
                                        critical = false;
                                        objectId = new ObjectId() {{
                                            objectIdPath = new Integer[]{{
                                                add(37559),
                                                add(162493),
                                                add(508315),
                                                add(615560),
                                            }};
                                        }};
                                        value = "magni";
                                    }}),
                                    add(new X509Extension() {{
                                        critical = false;
                                        objectId = new ObjectId() {{
                                            objectIdPath = new Integer[]{{
                                                add(779051),
                                            }};
                                        }};
                                        value = "illum";
                                    }}),
                                    add(new X509Extension() {{
                                        critical = false;
                                        objectId = new ObjectId() {{
                                            objectIdPath = new Integer[]{{
                                                add(807319),
                                                add(411397),
                                                add(569101),
                                                add(139972),
                                            }};
                                        }};
                                        value = "ea";
                                    }}),
                                    add(new X509Extension() {{
                                        critical = false;
                                        objectId = new ObjectId() {{
                                            objectIdPath = new Integer[]{{
                                                add(69167),
                                            }};
                                        }};
                                        value = "maiores";
                                    }}),
                                }};
                                dnsNames = new String[]{{
                                    add("ipsam"),
                                    add("voluptate"),
                                    add("autem"),
                                }};
                                emailAddresses = new String[]{{
                                    add("eaque"),
                                    add("pariatur"),
                                    add("nemo"),
                                }};
                                ipAddresses = new String[]{{
                                    add("perferendis"),
                                    add("fugiat"),
                                    add("amet"),
                                    add("aut"),
                                }};
                                uris = new String[]{{
                                    add("corporis"),
                                    add("hic"),
                                    add("libero"),
                                    add("nobis"),
                                }};
                            }};;
                        }};;
                        subjectKeyId = new KeyId() {{
                            keyId = "dolores";
                        }};;
                        x509Description = new X509Parameters() {{
                            additionalExtensions = new org.openapis.openapi.models.shared.X509Extension[]{{
                                add(new X509Extension() {{
                                    critical = false;
                                    objectId = new ObjectId() {{
                                        objectIdPath = new Integer[]{{
                                            add(489549),
                                            add(54338),
                                            add(338985),
                                        }};
                                    }};
                                    value = "nesciunt";
                                }}),
                                add(new X509Extension() {{
                                    critical = false;
                                    objectId = new ObjectId() {{
                                        objectIdPath = new Integer[]{{
                                            add(18521),
                                        }};
                                    }};
                                    value = "dolores";
                                }}),
                            }};
                            aiaOcspServers = new String[]{{
                                add("quam"),
                                add("dolor"),
                                add("vero"),
                                add("nostrum"),
                            }};
                            caOptions = new CaOptions() {{
                                isCa = false;
                                maxIssuerPathLength = 944120;
                            }};;
                            keyUsage = new KeyUsage() {{
                                baseKeyUsage = new KeyUsageOptions() {{
                                    certSign = false;
                                    contentCommitment = false;
                                    crlSign = false;
                                    dataEncipherment = false;
                                    decipherOnly = false;
                                    digitalSignature = false;
                                    encipherOnly = false;
                                    keyAgreement = false;
                                    keyEncipherment = false;
                                }};;
                                extendedKeyUsage = new ExtendedKeyUsageOptions() {{
                                    clientAuth = false;
                                    codeSigning = false;
                                    emailProtection = false;
                                    ocspSigning = false;
                                    serverAuth = false;
                                    timeStamping = false;
                                }};;
                                unknownExtendedKeyUsages = new org.openapis.openapi.models.shared.ObjectId[]{{
                                    add(new ObjectId() {{
                                        objectIdPath = new Integer[]{{
                                            add(704415),
                                            add(596656),
                                            add(31838),
                                        }};
                                    }}),
                                    add(new ObjectId() {{
                                        objectIdPath = new Integer[]{{
                                            add(164694),
                                            add(500026),
                                            add(621479),
                                            add(50370),
                                        }};
                                    }}),
                                    add(new ObjectId() {{
                                        objectIdPath = new Integer[]{{
                                            add(699098),
                                            add(237893),
                                            add(992397),
                                        }};
                                    }}),
                                    add(new ObjectId() {{
                                        objectIdPath = new Integer[]{{
                                            add(267262),
                                            add(613966),
                                            add(679091),
                                            add(535633),
                                        }};
                                    }}),
                                }};
                            }};;
                            nameConstraints = new NameConstraints() {{
                                critical = false;
                                excludedDnsNames = new String[]{{
                                    add("provident"),
                                    add("nobis"),
                                    add("libero"),
                                    add("delectus"),
                                }};
                                excludedEmailAddresses = new String[]{{
                                    add("quos"),
                                    add("aliquid"),
                                }};
                                excludedIpRanges = new String[]{{
                                    add("dolorem"),
                                }};
                                excludedUris = new String[]{{
                                    add("qui"),
                                }};
                                permittedDnsNames = new String[]{{
                                    add("hic"),
                                }};
                                permittedEmailAddresses = new String[]{{
                                    add("cum"),
                                    add("voluptate"),
                                    add("dignissimos"),
                                }};
                                permittedIpRanges = new String[]{{
                                    add("amet"),
                                    add("dolorum"),
                                    add("numquam"),
                                    add("veritatis"),
                                }};
                                permittedUris = new String[]{{
                                    add("ipsa"),
                                }};
                            }};;
                            policyIds = new org.openapis.openapi.models.shared.ObjectId[]{{
                                add(new ObjectId() {{
                                    objectIdPath = new Integer[]{{
                                        add(311796),
                                        add(881005),
                                    }};
                                }}),
                                add(new ObjectId() {{
                                    objectIdPath = new Integer[]{{
                                        add(976405),
                                        add(377752),
                                        add(617658),
                                    }};
                                }}),
                            }};
                        }};;
                    }};;
                    certificateTemplate = "eos";
                    config = new CertificateConfig() {{
                        publicKey = new PublicKey() {{
                            format = PublicKeyFormatEnum.PEM;
                            key = "sit";
                        }};;
                        subjectConfig = new SubjectConfig() {{
                            subject = new Subject() {{
                                commonName = "fugiat";
                                countryCode = "BA";
                                locality = "soluta";
                                organization = "dolorum";
                                organizationalUnit = "iusto";
                                postalCode = "65687";
                                province = "asperiores";
                                streetAddress = "nihil";
                            }};;
                            subjectAltName = new SubjectAltNames() {{
                                customSans = new org.openapis.openapi.models.shared.X509Extension[]{{
                                    add(new X509Extension() {{
                                        critical = false;
                                        objectId = new ObjectId() {{
                                            objectIdPath = new Integer[]{{
                                                add(663078),
                                                add(906418),
                                            }};
                                        }};
                                        value = "eius";
                                    }}),
                                }};
                                dnsNames = new String[]{{
                                    add("perferendis"),
                                }};
                                emailAddresses = new String[]{{
                                    add("optio"),
                                }};
                                ipAddresses = new String[]{{
                                    add("ad"),
                                    add("saepe"),
                                    add("suscipit"),
                                    add("deserunt"),
                                }};
                                uris = new String[]{{
                                    add("minima"),
                                    add("repellendus"),
                                    add("totam"),
                                }};
                            }};;
                        }};;
                        x509Config = new X509Parameters() {{
                            additionalExtensions = new org.openapis.openapi.models.shared.X509Extension[]{{
                                add(new X509Extension() {{
                                    critical = false;
                                    objectId = new ObjectId() {{
                                        objectIdPath = new Integer[]{{
                                            add(872651),
                                        }};
                                    }};
                                    value = "quaerat";
                                }}),
                                add(new X509Extension() {{
                                    critical = false;
                                    objectId = new ObjectId() {{
                                        objectIdPath = new Integer[]{{
                                            add(425451),
                                            add(798047),
                                        }};
                                    }};
                                    value = "officiis";
                                }}),
                                add(new X509Extension() {{
                                    critical = false;
                                    objectId = new ObjectId() {{
                                        objectIdPath = new Integer[]{{
                                            add(679880),
                                        }};
                                    }};
                                    value = "a";
                                }}),
                            }};
                            aiaOcspServers = new String[]{{
                                add("harum"),
                                add("iusto"),
                            }};
                            caOptions = new CaOptions() {{
                                isCa = false;
                                maxIssuerPathLength = 215507;
                            }};;
                            keyUsage = new KeyUsage() {{
                                baseKeyUsage = new KeyUsageOptions() {{
                                    certSign = false;
                                    contentCommitment = false;
                                    crlSign = false;
                                    dataEncipherment = false;
                                    decipherOnly = false;
                                    digitalSignature = false;
                                    encipherOnly = false;
                                    keyAgreement = false;
                                    keyEncipherment = false;
                                }};;
                                extendedKeyUsage = new ExtendedKeyUsageOptions() {{
                                    clientAuth = false;
                                    codeSigning = false;
                                    emailProtection = false;
                                    ocspSigning = false;
                                    serverAuth = false;
                                    timeStamping = false;
                                }};;
                                unknownExtendedKeyUsages = new org.openapis.openapi.models.shared.ObjectId[]{{
                                    add(new ObjectId() {{
                                        objectIdPath = new Integer[]{{
                                            add(229442),
                                            add(730856),
                                            add(880298),
                                            add(253941),
                                        }};
                                    }}),
                                    add(new ObjectId() {{
                                        objectIdPath = new Integer[]{{
                                            add(213312),
                                            add(957451),
                                        }};
                                    }}),
                                    add(new ObjectId() {{
                                        objectIdPath = new Integer[]{{
                                            add(471752),
                                            add(25662),
                                            add(711584),
                                        }};
                                    }}),
                                    add(new ObjectId() {{
                                        objectIdPath = new Integer[]{{
                                            add(153694),
                                        }};
                                    }}),
                                }};
                            }};;
                            nameConstraints = new NameConstraints() {{
                                critical = false;
                                excludedDnsNames = new String[]{{
                                    add("libero"),
                                    add("voluptas"),
                                }};
                                excludedEmailAddresses = new String[]{{
                                    add("quam"),
                                    add("ipsum"),
                                    add("incidunt"),
                                }};
                                excludedIpRanges = new String[]{{
                                    add("cupiditate"),
                                }};
                                excludedUris = new String[]{{
                                    add("pariatur"),
                                    add("soluta"),
                                    add("dicta"),
                                    add("laborum"),
                                }};
                                permittedDnsNames = new String[]{{
                                    add("incidunt"),
                                    add("aspernatur"),
                                    add("dolores"),
                                }};
                                permittedEmailAddresses = new String[]{{
                                    add("facilis"),
                                    add("aliquid"),
                                    add("quam"),
                                }};
                                permittedIpRanges = new String[]{{
                                    add("temporibus"),
                                    add("qui"),
                                    add("neque"),
                                }};
                                permittedUris = new String[]{{
                                    add("magni"),
                                }};
                            }};;
                            policyIds = new org.openapis.openapi.models.shared.ObjectId[]{{
                                add(new ObjectId() {{
                                    objectIdPath = new Integer[]{{
                                        add(355613),
                                    }};
                                }}),
                                add(new ObjectId() {{
                                    objectIdPath = new Integer[]{{
                                        add(940432),
                                        add(30452),
                                        add(765326),
                                    }};
                                }}),
                            }};
                        }};;
                    }};;
                    labels = new java.util.HashMap<String, String>() {{
                        put("nobis", "et");
                        put("saepe", "ipsum");
                        put("veritatis", "nobis");
                    }};
                    lifetime = "quos";
                    pemCsr = "tempore";
                    revocationDetails = new RevocationDetails() {{
                        revocationState = RevocationDetailsRevocationStateEnum.CESSATION_OF_OPERATION;
                        revocationTime = "aperiam";
                    }};;
                    subjectMode = CertificateSubjectModeEnum.REFLECTED_SPIFFE;
                }};;
                accessToken = "dolorem";
                alt = AltEnum.JSON;
                callback = "labore";
                certificateId = "adipisci";
                fields = "dolorum";
                issuingCertificateAuthorityId = "architecto";
                key = "quae";
                oauthToken = "aut";
                prettyPrint = false;
                quotaUser = "quas";
                requestId = "itaque";
                uploadType = "consequatur";
                uploadProtocol = "est";
                validateOnly = false;
            }};            

            PrivatecaProjectsLocationsCaPoolsCertificatesCreateResponse res = sdk.projects.privatecaProjectsLocationsCaPoolsCertificatesCreate(req, new PrivatecaProjectsLocationsCaPoolsCertificatesCreateSecurity("repellendus", "porro") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.certificate != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## privatecaProjectsLocationsCaPoolsCertificatesList

Lists Certificates.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PrivatecaProjectsLocationsCaPoolsCertificatesListRequest;
import org.openapis.openapi.models.operations.PrivatecaProjectsLocationsCaPoolsCertificatesListResponse;
import org.openapis.openapi.models.operations.PrivatecaProjectsLocationsCaPoolsCertificatesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PrivatecaProjectsLocationsCaPoolsCertificatesListRequest req = new PrivatecaProjectsLocationsCaPoolsCertificatesListRequest("doloribus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "facilis";
                alt = AltEnum.MEDIA;
                callback = "qui";
                fields = "quae";
                filter = "laudantium";
                key = "odio";
                oauthToken = "occaecati";
                orderBy = "voluptatibus";
                pageSize = 787542L;
                pageToken = "vero";
                prettyPrint = false;
                quotaUser = "omnis";
                uploadType = "quis";
                uploadProtocol = "ipsum";
            }};            

            PrivatecaProjectsLocationsCaPoolsCertificatesListResponse res = sdk.projects.privatecaProjectsLocationsCaPoolsCertificatesList(req, new PrivatecaProjectsLocationsCaPoolsCertificatesListSecurity("delectus", "voluptate") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listCertificatesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## privatecaProjectsLocationsCaPoolsCertificatesRevoke

Revoke a Certificate.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PrivatecaProjectsLocationsCaPoolsCertificatesRevokeRequest;
import org.openapis.openapi.models.operations.PrivatecaProjectsLocationsCaPoolsCertificatesRevokeResponse;
import org.openapis.openapi.models.operations.PrivatecaProjectsLocationsCaPoolsCertificatesRevokeSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.RevokeCertificateRequest;
import org.openapis.openapi.models.shared.RevokeCertificateRequestReasonEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PrivatecaProjectsLocationsCaPoolsCertificatesRevokeRequest req = new PrivatecaProjectsLocationsCaPoolsCertificatesRevokeRequest("consectetur") {{
                dollarXgafv = XgafvEnum.TWO;
                revokeCertificateRequest = new RevokeCertificateRequest() {{
                    reason = RevokeCertificateRequestReasonEnum.ATTRIBUTE_AUTHORITY_COMPROMISE;
                    requestId = "dignissimos";
                }};;
                accessToken = "hic";
                alt = AltEnum.PROTO;
                callback = "quod";
                fields = "odio";
                key = "similique";
                oauthToken = "facilis";
                prettyPrint = false;
                quotaUser = "vero";
                uploadType = "ducimus";
                uploadProtocol = "dolore";
            }};            

            PrivatecaProjectsLocationsCaPoolsCertificatesRevokeResponse res = sdk.projects.privatecaProjectsLocationsCaPoolsCertificatesRevoke(req, new PrivatecaProjectsLocationsCaPoolsCertificatesRevokeSecurity("quibusdam", "illum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.certificate != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## privatecaProjectsLocationsCaPoolsCreate

Create a CaPool.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PrivatecaProjectsLocationsCaPoolsCreateRequest;
import org.openapis.openapi.models.operations.PrivatecaProjectsLocationsCaPoolsCreateResponse;
import org.openapis.openapi.models.operations.PrivatecaProjectsLocationsCaPoolsCreateSecurity;
import org.openapis.openapi.models.shared.AllowedKeyType;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CaOptions;
import org.openapis.openapi.models.shared.CaPoolInput;
import org.openapis.openapi.models.shared.CaPoolTierEnum;
import org.openapis.openapi.models.shared.CertificateExtensionConstraints;
import org.openapis.openapi.models.shared.CertificateExtensionConstraintsKnownExtensionsEnum;
import org.openapis.openapi.models.shared.CertificateIdentityConstraints;
import org.openapis.openapi.models.shared.EcKeyType;
import org.openapis.openapi.models.shared.EcKeyTypeSignatureAlgorithmEnum;
import org.openapis.openapi.models.shared.Expr;
import org.openapis.openapi.models.shared.ExtendedKeyUsageOptions;
import org.openapis.openapi.models.shared.IssuanceModes;
import org.openapis.openapi.models.shared.IssuancePolicy;
import org.openapis.openapi.models.shared.KeyUsage;
import org.openapis.openapi.models.shared.KeyUsageOptions;
import org.openapis.openapi.models.shared.NameConstraints;
import org.openapis.openapi.models.shared.ObjectId;
import org.openapis.openapi.models.shared.PublishingOptions;
import org.openapis.openapi.models.shared.RsaKeyType;
import org.openapis.openapi.models.shared.X509Extension;
import org.openapis.openapi.models.shared.X509Parameters;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PrivatecaProjectsLocationsCaPoolsCreateRequest req = new PrivatecaProjectsLocationsCaPoolsCreateRequest("sequi") {{
                dollarXgafv = XgafvEnum.TWO;
                caPoolInput = new CaPoolInput() {{
                    issuancePolicy = new IssuancePolicy() {{
                        allowedIssuanceModes = new IssuanceModes() {{
                            allowConfigBasedIssuance = false;
                            allowCsrBasedIssuance = false;
                        }};;
                        allowedKeyTypes = new org.openapis.openapi.models.shared.AllowedKeyType[]{{
                            add(new AllowedKeyType() {{
                                ellipticCurve = new EcKeyType() {{
                                    signatureAlgorithm = EcKeyTypeSignatureAlgorithmEnum.EC_SIGNATURE_ALGORITHM_UNSPECIFIED;
                                }};
                                rsa = new RsaKeyType() {{
                                    maxModulusSize = "voluptatibus";
                                    minModulusSize = "exercitationem";
                                }};
                            }}),
                            add(new AllowedKeyType() {{
                                ellipticCurve = new EcKeyType() {{
                                    signatureAlgorithm = EcKeyTypeSignatureAlgorithmEnum.EDDSA25519;
                                }};
                                rsa = new RsaKeyType() {{
                                    maxModulusSize = "fugit";
                                    minModulusSize = "porro";
                                }};
                            }}),
                            add(new AllowedKeyType() {{
                                ellipticCurve = new EcKeyType() {{
                                    signatureAlgorithm = EcKeyTypeSignatureAlgorithmEnum.EDDSA25519;
                                }};
                                rsa = new RsaKeyType() {{
                                    maxModulusSize = "doloribus";
                                    minModulusSize = "iusto";
                                }};
                            }}),
                            add(new AllowedKeyType() {{
                                ellipticCurve = new EcKeyType() {{
                                    signatureAlgorithm = EcKeyTypeSignatureAlgorithmEnum.EDDSA25519;
                                }};
                                rsa = new RsaKeyType() {{
                                    maxModulusSize = "ducimus";
                                    minModulusSize = "alias";
                                }};
                            }}),
                        }};
                        baselineValues = new X509Parameters() {{
                            additionalExtensions = new org.openapis.openapi.models.shared.X509Extension[]{{
                                add(new X509Extension() {{
                                    critical = false;
                                    objectId = new ObjectId() {{
                                        objectIdPath = new Integer[]{{
                                            add(368584),
                                            add(410492),
                                        }};
                                    }};
                                    value = "aspernatur";
                                }}),
                                add(new X509Extension() {{
                                    critical = false;
                                    objectId = new ObjectId() {{
                                        objectIdPath = new Integer[]{{
                                            add(822118),
                                            add(297842),
                                        }};
                                    }};
                                    value = "ratione";
                                }}),
                                add(new X509Extension() {{
                                    critical = false;
                                    objectId = new ObjectId() {{
                                        objectIdPath = new Integer[]{{
                                            add(511319),
                                            add(120657),
                                        }};
                                    }};
                                    value = "dolor";
                                }}),
                            }};
                            aiaOcspServers = new String[]{{
                                add("quasi"),
                                add("ex"),
                                add("nulla"),
                                add("excepturi"),
                            }};
                            caOptions = new CaOptions() {{
                                isCa = false;
                                maxIssuerPathLength = 972920;
                            }};;
                            keyUsage = new KeyUsage() {{
                                baseKeyUsage = new KeyUsageOptions() {{
                                    certSign = false;
                                    contentCommitment = false;
                                    crlSign = false;
                                    dataEncipherment = false;
                                    decipherOnly = false;
                                    digitalSignature = false;
                                    encipherOnly = false;
                                    keyAgreement = false;
                                    keyEncipherment = false;
                                }};;
                                extendedKeyUsage = new ExtendedKeyUsageOptions() {{
                                    clientAuth = false;
                                    codeSigning = false;
                                    emailProtection = false;
                                    ocspSigning = false;
                                    serverAuth = false;
                                    timeStamping = false;
                                }};;
                                unknownExtendedKeyUsages = new org.openapis.openapi.models.shared.ObjectId[]{{
                                    add(new ObjectId() {{
                                        objectIdPath = new Integer[]{{
                                            add(788873),
                                            add(906556),
                                            add(411372),
                                            add(774048),
                                        }};
                                    }}),
                                    add(new ObjectId() {{
                                        objectIdPath = new Integer[]{{
                                            add(333145),
                                            add(399499),
                                        }};
                                    }}),
                                }};
                            }};;
                            nameConstraints = new NameConstraints() {{
                                critical = false;
                                excludedDnsNames = new String[]{{
                                    add("magnam"),
                                }};
                                excludedEmailAddresses = new String[]{{
                                    add("quo"),
                                    add("consectetur"),
                                }};
                                excludedIpRanges = new String[]{{
                                    add("aspernatur"),
                                    add("minima"),
                                    add("eaque"),
                                    add("a"),
                                }};
                                excludedUris = new String[]{{
                                    add("aut"),
                                    add("aut"),
                                    add("deleniti"),
                                }};
                                permittedDnsNames = new String[]{{
                                    add("aliquam"),
                                    add("fugit"),
                                    add("accusamus"),
                                    add("inventore"),
                                }};
                                permittedEmailAddresses = new String[]{{
                                    add("et"),
                                    add("dolorum"),
                                }};
                                permittedIpRanges = new String[]{{
                                    add("placeat"),
                                    add("velit"),
                                    add("eum"),
                                }};
                                permittedUris = new String[]{{
                                    add("nobis"),
                                    add("quas"),
                                }};
                            }};;
                            policyIds = new org.openapis.openapi.models.shared.ObjectId[]{{
                                add(new ObjectId() {{
                                    objectIdPath = new Integer[]{{
                                        add(379034),
                                        add(727044),
                                        add(96549),
                                        add(270328),
                                    }};
                                }}),
                                add(new ObjectId() {{
                                    objectIdPath = new Integer[]{{
                                        add(131482),
                                        add(591935),
                                    }};
                                }}),
                                add(new ObjectId() {{
                                    objectIdPath = new Integer[]{{
                                        add(476477),
                                    }};
                                }}),
                                add(new ObjectId() {{
                                    objectIdPath = new Integer[]{{
                                        add(487935),
                                        add(262118),
                                    }};
                                }}),
                            }};
                        }};;
                        identityConstraints = new CertificateIdentityConstraints() {{
                            allowSubjectAltNamesPassthrough = false;
                            allowSubjectPassthrough = false;
                            celExpression = new Expr() {{
                                description = "esse";
                                expression = "esse";
                                location = "rem";
                                title = "Miss";
                            }};;
                        }};;
                        maximumLifetime = "reprehenderit";
                        passthroughExtensions = new CertificateExtensionConstraints() {{
                            additionalExtensions = new org.openapis.openapi.models.shared.ObjectId[]{{
                                add(new ObjectId() {{
                                    objectIdPath = new Integer[]{{
                                        add(283519),
                                        add(433439),
                                        add(379927),
                                        add(826871),
                                    }};
                                }}),
                                add(new ObjectId() {{
                                    objectIdPath = new Integer[]{{
                                        add(509342),
                                    }};
                                }}),
                                add(new ObjectId() {{
                                    objectIdPath = new Integer[]{{
                                        add(86377),
                                        add(56848),
                                        add(660040),
                                        add(696997),
                                    }};
                                }}),
                            }};
                            knownExtensions = new org.openapis.openapi.models.shared.CertificateExtensionConstraintsKnownExtensionsEnum[]{{
                                add(CertificateExtensionConstraintsKnownExtensionsEnum.AIA_OCSP_SERVERS),
                            }};
                        }};;
                    }};;
                    labels = new java.util.HashMap<String, String>() {{
                        put("quo", "fuga");
                        put("eius", "eos");
                        put("voluptas", "ab");
                        put("cupiditate", "consequatur");
                    }};
                    publishingOptions = new PublishingOptions() {{
                        publishCaCert = false;
                        publishCrl = false;
                    }};;
                    tier = CaPoolTierEnum.TIER_UNSPECIFIED;
                }};;
                accessToken = "debitis";
                alt = AltEnum.MEDIA;
                caPoolId = "aspernatur";
                callback = "sequi";
                fields = "quo";
                key = "esse";
                oauthToken = "recusandae";
                prettyPrint = false;
                quotaUser = "aperiam";
                requestId = "distinctio";
                uploadType = "quod";
                uploadProtocol = "dignissimos";
            }};            

            PrivatecaProjectsLocationsCaPoolsCreateResponse res = sdk.projects.privatecaProjectsLocationsCaPoolsCreate(req, new PrivatecaProjectsLocationsCaPoolsCreateSecurity("inventore", "nihil") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## privatecaProjectsLocationsCaPoolsFetchCaCerts

FetchCaCerts returns the current trust anchor for the CaPool. This will include CA certificate chains for all ACTIVE CertificateAuthority resources in the CaPool.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PrivatecaProjectsLocationsCaPoolsFetchCaCertsRequest;
import org.openapis.openapi.models.operations.PrivatecaProjectsLocationsCaPoolsFetchCaCertsResponse;
import org.openapis.openapi.models.operations.PrivatecaProjectsLocationsCaPoolsFetchCaCertsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.FetchCaCertsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PrivatecaProjectsLocationsCaPoolsFetchCaCertsRequest req = new PrivatecaProjectsLocationsCaPoolsFetchCaCertsRequest("totam") {{
                dollarXgafv = XgafvEnum.TWO;
                fetchCaCertsRequest = new FetchCaCertsRequest() {{
                    requestId = "aliquam";
                }};;
                accessToken = "odio";
                alt = AltEnum.MEDIA;
                callback = "commodi";
                fields = "sapiente";
                key = "dolores";
                oauthToken = "deserunt";
                prettyPrint = false;
                quotaUser = "molestiae";
                uploadType = "accusantium";
                uploadProtocol = "porro";
            }};            

            PrivatecaProjectsLocationsCaPoolsFetchCaCertsResponse res = sdk.projects.privatecaProjectsLocationsCaPoolsFetchCaCerts(req, new PrivatecaProjectsLocationsCaPoolsFetchCaCertsSecurity("eum", "quas") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.fetchCaCertsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## privatecaProjectsLocationsCaPoolsList

Lists CaPools.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PrivatecaProjectsLocationsCaPoolsListRequest;
import org.openapis.openapi.models.operations.PrivatecaProjectsLocationsCaPoolsListResponse;
import org.openapis.openapi.models.operations.PrivatecaProjectsLocationsCaPoolsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PrivatecaProjectsLocationsCaPoolsListRequest req = new PrivatecaProjectsLocationsCaPoolsListRequest("praesentium") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "deleniti";
                alt = AltEnum.JSON;
                callback = "fuga";
                fields = "mollitia";
                filter = "incidunt";
                key = "atque";
                oauthToken = "explicabo";
                orderBy = "minima";
                pageSize = 392676L;
                pageToken = "fugit";
                prettyPrint = false;
                quotaUser = "sapiente";
                uploadType = "consequuntur";
                uploadProtocol = "ratione";
            }};            

            PrivatecaProjectsLocationsCaPoolsListResponse res = sdk.projects.privatecaProjectsLocationsCaPoolsList(req, new PrivatecaProjectsLocationsCaPoolsListSecurity("explicabo", "saepe") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listCaPoolsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## privatecaProjectsLocationsCertificateTemplatesCreate

Create a new CertificateTemplate in a given Project and Location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PrivatecaProjectsLocationsCertificateTemplatesCreateRequest;
import org.openapis.openapi.models.operations.PrivatecaProjectsLocationsCertificateTemplatesCreateResponse;
import org.openapis.openapi.models.operations.PrivatecaProjectsLocationsCertificateTemplatesCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CaOptions;
import org.openapis.openapi.models.shared.CertificateExtensionConstraints;
import org.openapis.openapi.models.shared.CertificateExtensionConstraintsKnownExtensionsEnum;
import org.openapis.openapi.models.shared.CertificateIdentityConstraints;
import org.openapis.openapi.models.shared.CertificateTemplateInput;
import org.openapis.openapi.models.shared.Expr;
import org.openapis.openapi.models.shared.ExtendedKeyUsageOptions;
import org.openapis.openapi.models.shared.KeyUsage;
import org.openapis.openapi.models.shared.KeyUsageOptions;
import org.openapis.openapi.models.shared.NameConstraints;
import org.openapis.openapi.models.shared.ObjectId;
import org.openapis.openapi.models.shared.X509Extension;
import org.openapis.openapi.models.shared.X509Parameters;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PrivatecaProjectsLocationsCertificateTemplatesCreateRequest req = new PrivatecaProjectsLocationsCertificateTemplatesCreateRequest("occaecati") {{
                dollarXgafv = XgafvEnum.TWO;
                certificateTemplateInput = new CertificateTemplateInput() {{
                    description = "et";
                    identityConstraints = new CertificateIdentityConstraints() {{
                        allowSubjectAltNamesPassthrough = false;
                        allowSubjectPassthrough = false;
                        celExpression = new Expr() {{
                            description = "esse";
                            expression = "eveniet";
                            location = "accusamus";
                            title = "Mr.";
                        }};;
                    }};;
                    labels = new java.util.HashMap<String, String>() {{
                        put("quod", "nam");
                        put("vero", "aliquid");
                    }};
                    passthroughExtensions = new CertificateExtensionConstraints() {{
                        additionalExtensions = new org.openapis.openapi.models.shared.ObjectId[]{{
                            add(new ObjectId() {{
                                objectIdPath = new Integer[]{{
                                    add(426306),
                                    add(690025),
                                    add(473221),
                                    add(699622),
                                }};
                            }}),
                        }};
                        knownExtensions = new org.openapis.openapi.models.shared.CertificateExtensionConstraintsKnownExtensionsEnum[]{{
                            add(CertificateExtensionConstraintsKnownExtensionsEnum.EXTENDED_KEY_USAGE),
                            add(CertificateExtensionConstraintsKnownExtensionsEnum.AIA_OCSP_SERVERS),
                            add(CertificateExtensionConstraintsKnownExtensionsEnum.AIA_OCSP_SERVERS),
                        }};
                    }};;
                    predefinedValues = new X509Parameters() {{
                        additionalExtensions = new org.openapis.openapi.models.shared.X509Extension[]{{
                            add(new X509Extension() {{
                                critical = false;
                                objectId = new ObjectId() {{
                                    objectIdPath = new Integer[]{{
                                        add(731398),
                                        add(240020),
                                        add(766964),
                                    }};
                                }};
                                value = "consequuntur";
                            }}),
                        }};
                        aiaOcspServers = new String[]{{
                            add("minus"),
                        }};
                        caOptions = new CaOptions() {{
                            isCa = false;
                            maxIssuerPathLength = 308286;
                        }};;
                        keyUsage = new KeyUsage() {{
                            baseKeyUsage = new KeyUsageOptions() {{
                                certSign = false;
                                contentCommitment = false;
                                crlSign = false;
                                dataEncipherment = false;
                                decipherOnly = false;
                                digitalSignature = false;
                                encipherOnly = false;
                                keyAgreement = false;
                                keyEncipherment = false;
                            }};;
                            extendedKeyUsage = new ExtendedKeyUsageOptions() {{
                                clientAuth = false;
                                codeSigning = false;
                                emailProtection = false;
                                ocspSigning = false;
                                serverAuth = false;
                                timeStamping = false;
                            }};;
                            unknownExtendedKeyUsages = new org.openapis.openapi.models.shared.ObjectId[]{{
                                add(new ObjectId() {{
                                    objectIdPath = new Integer[]{{
                                        add(458139),
                                    }};
                                }}),
                                add(new ObjectId() {{
                                    objectIdPath = new Integer[]{{
                                        add(590984),
                                        add(953722),
                                        add(857723),
                                    }};
                                }}),
                                add(new ObjectId() {{
                                    objectIdPath = new Integer[]{{
                                        add(457223),
                                        add(97468),
                                        add(951875),
                                    }};
                                }}),
                                add(new ObjectId() {{
                                    objectIdPath = new Integer[]{{
                                        add(575751),
                                        add(863023),
                                        add(820767),
                                    }};
                                }}),
                            }};
                        }};;
                        nameConstraints = new NameConstraints() {{
                            critical = false;
                            excludedDnsNames = new String[]{{
                                add("eveniet"),
                            }};
                            excludedEmailAddresses = new String[]{{
                                add("facere"),
                                add("veritatis"),
                                add("consequuntur"),
                                add("quasi"),
                            }};
                            excludedIpRanges = new String[]{{
                                add("culpa"),
                                add("aliquid"),
                                add("tenetur"),
                            }};
                            excludedUris = new String[]{{
                                add("earum"),
                            }};
                            permittedDnsNames = new String[]{{
                                add("in"),
                                add("eius"),
                            }};
                            permittedEmailAddresses = new String[]{{
                                add("illum"),
                                add("soluta"),
                                add("accusantium"),
                            }};
                            permittedIpRanges = new String[]{{
                                add("sapiente"),
                                add("dicta"),
                            }};
                            permittedUris = new String[]{{
                                add("reprehenderit"),
                                add("ullam"),
                            }};
                        }};;
                        policyIds = new org.openapis.openapi.models.shared.ObjectId[]{{
                            add(new ObjectId() {{
                                objectIdPath = new Integer[]{{
                                    add(531849),
                                }};
                            }}),
                            add(new ObjectId() {{
                                objectIdPath = new Integer[]{{
                                    add(845358),
                                }};
                            }}),
                        }};
                    }};;
                }};;
                accessToken = "ex";
                alt = AltEnum.MEDIA;
                callback = "itaque";
                certificateTemplateId = "dolorum";
                fields = "architecto";
                key = "omnis";
                oauthToken = "tenetur";
                prettyPrint = false;
                quotaUser = "quasi";
                requestId = "at";
                uploadType = "et";
                uploadProtocol = "voluptate";
            }};            

            PrivatecaProjectsLocationsCertificateTemplatesCreateResponse res = sdk.projects.privatecaProjectsLocationsCertificateTemplatesCreate(req, new PrivatecaProjectsLocationsCertificateTemplatesCreateSecurity("ipsa", "minima") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## privatecaProjectsLocationsCertificateTemplatesGetIamPolicy

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PrivatecaProjectsLocationsCertificateTemplatesGetIamPolicyRequest;
import org.openapis.openapi.models.operations.PrivatecaProjectsLocationsCertificateTemplatesGetIamPolicyResponse;
import org.openapis.openapi.models.operations.PrivatecaProjectsLocationsCertificateTemplatesGetIamPolicySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PrivatecaProjectsLocationsCertificateTemplatesGetIamPolicyRequest req = new PrivatecaProjectsLocationsCertificateTemplatesGetIamPolicyRequest("veritatis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "adipisci";
                alt = AltEnum.MEDIA;
                callback = "temporibus";
                fields = "accusantium";
                key = "rem";
                oauthToken = "aut";
                optionsRequestedPolicyVersion = 513075L;
                prettyPrint = false;
                quotaUser = "eum";
                uploadType = "mollitia";
                uploadProtocol = "ab";
            }};            

            PrivatecaProjectsLocationsCertificateTemplatesGetIamPolicyResponse res = sdk.projects.privatecaProjectsLocationsCertificateTemplatesGetIamPolicy(req, new PrivatecaProjectsLocationsCertificateTemplatesGetIamPolicySecurity("corrupti", "non") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## privatecaProjectsLocationsCertificateTemplatesList

Lists CertificateTemplates.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PrivatecaProjectsLocationsCertificateTemplatesListRequest;
import org.openapis.openapi.models.operations.PrivatecaProjectsLocationsCertificateTemplatesListResponse;
import org.openapis.openapi.models.operations.PrivatecaProjectsLocationsCertificateTemplatesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PrivatecaProjectsLocationsCertificateTemplatesListRequest req = new PrivatecaProjectsLocationsCertificateTemplatesListRequest("voluptatem") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "occaecati";
                alt = AltEnum.JSON;
                callback = "impedit";
                fields = "explicabo";
                filter = "voluptas";
                key = "aut";
                oauthToken = "dignissimos";
                orderBy = "dicta";
                pageSize = 981640L;
                pageToken = "natus";
                prettyPrint = false;
                quotaUser = "velit";
                uploadType = "voluptatibus";
                uploadProtocol = "voluptas";
            }};            

            PrivatecaProjectsLocationsCertificateTemplatesListResponse res = sdk.projects.privatecaProjectsLocationsCertificateTemplatesList(req, new PrivatecaProjectsLocationsCertificateTemplatesListSecurity("asperiores", "aperiam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listCertificateTemplatesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## privatecaProjectsLocationsCertificateTemplatesPatch

Update a CertificateTemplate.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PrivatecaProjectsLocationsCertificateTemplatesPatchRequest;
import org.openapis.openapi.models.operations.PrivatecaProjectsLocationsCertificateTemplatesPatchResponse;
import org.openapis.openapi.models.operations.PrivatecaProjectsLocationsCertificateTemplatesPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CaOptions;
import org.openapis.openapi.models.shared.CertificateExtensionConstraints;
import org.openapis.openapi.models.shared.CertificateExtensionConstraintsKnownExtensionsEnum;
import org.openapis.openapi.models.shared.CertificateIdentityConstraints;
import org.openapis.openapi.models.shared.CertificateTemplateInput;
import org.openapis.openapi.models.shared.Expr;
import org.openapis.openapi.models.shared.ExtendedKeyUsageOptions;
import org.openapis.openapi.models.shared.KeyUsage;
import org.openapis.openapi.models.shared.KeyUsageOptions;
import org.openapis.openapi.models.shared.NameConstraints;
import org.openapis.openapi.models.shared.ObjectId;
import org.openapis.openapi.models.shared.X509Extension;
import org.openapis.openapi.models.shared.X509Parameters;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PrivatecaProjectsLocationsCertificateTemplatesPatchRequest req = new PrivatecaProjectsLocationsCertificateTemplatesPatchRequest("ea") {{
                dollarXgafv = XgafvEnum.ONE;
                certificateTemplateInput = new CertificateTemplateInput() {{
                    description = "consequuntur";
                    identityConstraints = new CertificateIdentityConstraints() {{
                        allowSubjectAltNamesPassthrough = false;
                        allowSubjectPassthrough = false;
                        celExpression = new Expr() {{
                            description = "repellendus";
                            expression = "officia";
                            location = "maxime";
                            title = "Ms.";
                        }};;
                    }};;
                    labels = new java.util.HashMap<String, String>() {{
                        put("asperiores", "nemo");
                        put("quae", "quaerat");
                        put("porro", "quod");
                    }};
                    passthroughExtensions = new CertificateExtensionConstraints() {{
                        additionalExtensions = new org.openapis.openapi.models.shared.ObjectId[]{{
                            add(new ObjectId() {{
                                objectIdPath = new Integer[]{{
                                    add(241418),
                                }};
                            }}),
                            add(new ObjectId() {{
                                objectIdPath = new Integer[]{{
                                    add(662505),
                                    add(380729),
                                    add(246063),
                                }};
                            }}),
                        }};
                        knownExtensions = new org.openapis.openapi.models.shared.CertificateExtensionConstraintsKnownExtensionsEnum[]{{
                            add(CertificateExtensionConstraintsKnownExtensionsEnum.POLICY_IDS),
                            add(CertificateExtensionConstraintsKnownExtensionsEnum.NAME_CONSTRAINTS),
                            add(CertificateExtensionConstraintsKnownExtensionsEnum.CA_OPTIONS),
                        }};
                    }};;
                    predefinedValues = new X509Parameters() {{
                        additionalExtensions = new org.openapis.openapi.models.shared.X509Extension[]{{
                            add(new X509Extension() {{
                                critical = false;
                                objectId = new ObjectId() {{
                                    objectIdPath = new Integer[]{{
                                        add(497678),
                                        add(554688),
                                    }};
                                }};
                                value = "vel";
                            }}),
                            add(new X509Extension() {{
                                critical = false;
                                objectId = new ObjectId() {{
                                    objectIdPath = new Integer[]{{
                                        add(822560),
                                        add(706575),
                                    }};
                                }};
                                value = "cum";
                            }}),
                            add(new X509Extension() {{
                                critical = false;
                                objectId = new ObjectId() {{
                                    objectIdPath = new Integer[]{{
                                        add(447144),
                                        add(360545),
                                    }};
                                }};
                                value = "reiciendis";
                            }}),
                            add(new X509Extension() {{
                                critical = false;
                                objectId = new ObjectId() {{
                                    objectIdPath = new Integer[]{{
                                        add(363161),
                                        add(924967),
                                        add(397533),
                                        add(46007),
                                    }};
                                }};
                                value = "cum";
                            }}),
                        }};
                        aiaOcspServers = new String[]{{
                            add("in"),
                        }};
                        caOptions = new CaOptions() {{
                            isCa = false;
                            maxIssuerPathLength = 348519;
                        }};;
                        keyUsage = new KeyUsage() {{
                            baseKeyUsage = new KeyUsageOptions() {{
                                certSign = false;
                                contentCommitment = false;
                                crlSign = false;
                                dataEncipherment = false;
                                decipherOnly = false;
                                digitalSignature = false;
                                encipherOnly = false;
                                keyAgreement = false;
                                keyEncipherment = false;
                            }};;
                            extendedKeyUsage = new ExtendedKeyUsageOptions() {{
                                clientAuth = false;
                                codeSigning = false;
                                emailProtection = false;
                                ocspSigning = false;
                                serverAuth = false;
                                timeStamping = false;
                            }};;
                            unknownExtendedKeyUsages = new org.openapis.openapi.models.shared.ObjectId[]{{
                                add(new ObjectId() {{
                                    objectIdPath = new Integer[]{{
                                        add(257233),
                                        add(985492),
                                        add(381760),
                                        add(968972),
                                    }};
                                }}),
                                add(new ObjectId() {{
                                    objectIdPath = new Integer[]{{
                                        add(904949),
                                        add(897071),
                                        add(296556),
                                    }};
                                }}),
                                add(new ObjectId() {{
                                    objectIdPath = new Integer[]{{
                                        add(992012),
                                    }};
                                }}),
                                add(new ObjectId() {{
                                    objectIdPath = new Integer[]{{
                                        add(249420),
                                    }};
                                }}),
                            }};
                        }};;
                        nameConstraints = new NameConstraints() {{
                            critical = false;
                            excludedDnsNames = new String[]{{
                                add("beatae"),
                            }};
                            excludedEmailAddresses = new String[]{{
                                add("a"),
                                add("debitis"),
                            }};
                            excludedIpRanges = new String[]{{
                                add("corporis"),
                            }};
                            excludedUris = new String[]{{
                                add("laboriosam"),
                                add("ipsa"),
                                add("voluptates"),
                            }};
                            permittedDnsNames = new String[]{{
                                add("vitae"),
                                add("accusamus"),
                                add("similique"),
                            }};
                            permittedEmailAddresses = new String[]{{
                                add("aspernatur"),
                                add("voluptas"),
                            }};
                            permittedIpRanges = new String[]{{
                                add("voluptas"),
                                add("minima"),
                            }};
                            permittedUris = new String[]{{
                                add("dolorum"),
                                add("adipisci"),
                                add("minus"),
                            }};
                        }};;
                        policyIds = new org.openapis.openapi.models.shared.ObjectId[]{{
                            add(new ObjectId() {{
                                objectIdPath = new Integer[]{{
                                    add(449292),
                                    add(296242),
                                    add(304468),
                                }};
                            }}),
                        }};
                    }};;
                }};;
                accessToken = "officiis";
                alt = AltEnum.PROTO;
                callback = "ullam";
                fields = "adipisci";
                key = "cum";
                oauthToken = "blanditiis";
                prettyPrint = false;
                quotaUser = "quas";
                requestId = "hic";
                updateMask = "nesciunt";
                uploadType = "culpa";
                uploadProtocol = "corrupti";
            }};            

            PrivatecaProjectsLocationsCertificateTemplatesPatchResponse res = sdk.projects.privatecaProjectsLocationsCertificateTemplatesPatch(req, new PrivatecaProjectsLocationsCertificateTemplatesPatchSecurity("pariatur", "totam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## privatecaProjectsLocationsCertificateTemplatesSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PrivatecaProjectsLocationsCertificateTemplatesSetIamPolicyRequest;
import org.openapis.openapi.models.operations.PrivatecaProjectsLocationsCertificateTemplatesSetIamPolicyResponse;
import org.openapis.openapi.models.operations.PrivatecaProjectsLocationsCertificateTemplatesSetIamPolicySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AuditConfig;
import org.openapis.openapi.models.shared.AuditLogConfig;
import org.openapis.openapi.models.shared.AuditLogConfigLogTypeEnum;
import org.openapis.openapi.models.shared.Binding;
import org.openapis.openapi.models.shared.Expr;
import org.openapis.openapi.models.shared.Policy;
import org.openapis.openapi.models.shared.SetIamPolicyRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PrivatecaProjectsLocationsCertificateTemplatesSetIamPolicyRequest req = new PrivatecaProjectsLocationsCertificateTemplatesSetIamPolicyRequest("hic") {{
                dollarXgafv = XgafvEnum.ONE;
                setIamPolicyRequest = new SetIamPolicyRequest() {{
                    policy = new Policy() {{
                        auditConfigs = new org.openapis.openapi.models.shared.AuditConfig[]{{
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("sed"),
                                            add("reiciendis"),
                                            add("explicabo"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                }};
                                service = "facilis";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("ab"),
                                            add("iste"),
                                            add("dolore"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("in"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                }};
                                service = "quidem";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("unde"),
                                            add("architecto"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                }};
                                service = "sapiente";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("reiciendis"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("maiores"),
                                            add("incidunt"),
                                            add("sed"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("necessitatibus"),
                                            add("ipsum"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("quos"),
                                            add("voluptatibus"),
                                            add("tempora"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                }};
                                service = "voluptate";
                            }}),
                        }};
                        bindings = new org.openapis.openapi.models.shared.Binding[]{{
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "ex";
                                    expression = "sit";
                                    location = "non";
                                    title = "Dr.";
                                }};
                                members = new String[]{{
                                    add("facilis"),
                                    add("quaerat"),
                                    add("incidunt"),
                                }};
                                role = "ipsam";
                            }}),
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "debitis";
                                    expression = "rem";
                                    location = "sit";
                                    title = "Miss";
                                }};
                                members = new String[]{{
                                    add("veniam"),
                                    add("minima"),
                                    add("recusandae"),
                                }};
                                role = "reiciendis";
                            }}),
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "nulla";
                                    expression = "magni";
                                    location = "aperiam";
                                    title = "Dr.";
                                }};
                                members = new String[]{{
                                    add("veniam"),
                                    add("in"),
                                }};
                                role = "officiis";
                            }}),
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "beatae";
                                    expression = "laudantium";
                                    location = "exercitationem";
                                    title = "Ms.";
                                }};
                                members = new String[]{{
                                    add("laboriosam"),
                                    add("dolorum"),
                                    add("voluptatum"),
                                }};
                                role = "error";
                            }}),
                        }};
                        etag = "hic";
                        version = 710529;
                    }};;
                    updateMask = "debitis";
                }};;
                accessToken = "neque";
                alt = AltEnum.PROTO;
                callback = "nostrum";
                fields = "officia";
                key = "dolorum";
                oauthToken = "corrupti";
                prettyPrint = false;
                quotaUser = "accusamus";
                uploadType = "tempora";
                uploadProtocol = "atque";
            }};            

            PrivatecaProjectsLocationsCertificateTemplatesSetIamPolicyResponse res = sdk.projects.privatecaProjectsLocationsCertificateTemplatesSetIamPolicy(req, new PrivatecaProjectsLocationsCertificateTemplatesSetIamPolicySecurity("fugit", "ut") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## privatecaProjectsLocationsCertificateTemplatesTestIamPermissions

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PrivatecaProjectsLocationsCertificateTemplatesTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.PrivatecaProjectsLocationsCertificateTemplatesTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.PrivatecaProjectsLocationsCertificateTemplatesTestIamPermissionsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TestIamPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PrivatecaProjectsLocationsCertificateTemplatesTestIamPermissionsRequest req = new PrivatecaProjectsLocationsCertificateTemplatesTestIamPermissionsRequest("fugiat") {{
                dollarXgafv = XgafvEnum.ONE;
                testIamPermissionsRequest = new TestIamPermissionsRequest() {{
                    permissions = new String[]{{
                        add("expedita"),
                        add("magnam"),
                        add("consequatur"),
                    }};
                }};;
                accessToken = "esse";
                alt = AltEnum.MEDIA;
                callback = "sit";
                fields = "voluptatum";
                key = "quas";
                oauthToken = "repudiandae";
                prettyPrint = false;
                quotaUser = "corporis";
                uploadType = "et";
                uploadProtocol = "blanditiis";
            }};            

            PrivatecaProjectsLocationsCertificateTemplatesTestIamPermissionsResponse res = sdk.projects.privatecaProjectsLocationsCertificateTemplatesTestIamPermissions(req, new PrivatecaProjectsLocationsCertificateTemplatesTestIamPermissionsSecurity("ex", "sed") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## privatecaProjectsLocationsList

Lists information about the supported locations for this service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PrivatecaProjectsLocationsListRequest;
import org.openapis.openapi.models.operations.PrivatecaProjectsLocationsListResponse;
import org.openapis.openapi.models.operations.PrivatecaProjectsLocationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PrivatecaProjectsLocationsListRequest req = new PrivatecaProjectsLocationsListRequest("sit") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "nostrum";
                alt = AltEnum.PROTO;
                callback = "error";
                fields = "consequatur";
                filter = "incidunt";
                key = "reiciendis";
                oauthToken = "dolorem";
                pageSize = 690894L;
                pageToken = "dicta";
                prettyPrint = false;
                quotaUser = "architecto";
                uploadType = "occaecati";
                uploadProtocol = "labore";
            }};            

            PrivatecaProjectsLocationsListResponse res = sdk.projects.privatecaProjectsLocationsList(req, new PrivatecaProjectsLocationsListSecurity("quidem", "atque") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listLocationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## privatecaProjectsLocationsOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PrivatecaProjectsLocationsOperationsCancelRequest;
import org.openapis.openapi.models.operations.PrivatecaProjectsLocationsOperationsCancelResponse;
import org.openapis.openapi.models.operations.PrivatecaProjectsLocationsOperationsCancelSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PrivatecaProjectsLocationsOperationsCancelRequest req = new PrivatecaProjectsLocationsOperationsCancelRequest("laborum") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("laboriosam", "alias");
                    put("amet", "deserunt");
                    put("voluptate", "unde");
                    put("reiciendis", "provident");
                }};
                accessToken = "repellendus";
                alt = AltEnum.PROTO;
                callback = "voluptates";
                fields = "perferendis";
                key = "est";
                oauthToken = "quidem";
                prettyPrint = false;
                quotaUser = "reprehenderit";
                uploadType = "facere";
                uploadProtocol = "fuga";
            }};            

            PrivatecaProjectsLocationsOperationsCancelResponse res = sdk.projects.privatecaProjectsLocationsOperationsCancel(req, new PrivatecaProjectsLocationsOperationsCancelSecurity("praesentium", "mollitia") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## privatecaProjectsLocationsOperationsDelete

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PrivatecaProjectsLocationsOperationsDeleteRequest;
import org.openapis.openapi.models.operations.PrivatecaProjectsLocationsOperationsDeleteResponse;
import org.openapis.openapi.models.operations.PrivatecaProjectsLocationsOperationsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PrivatecaProjectsLocationsOperationsDeleteRequest req = new PrivatecaProjectsLocationsOperationsDeleteRequest("veniam") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quisquam";
                alt = AltEnum.PROTO;
                callback = "quasi";
                fields = "atque";
                ignoreDependentResources = false;
                key = "reprehenderit";
                oauthToken = "asperiores";
                prettyPrint = false;
                quotaUser = "totam";
                requestId = "suscipit";
                skipGracePeriod = false;
                uploadType = "quidem";
                uploadProtocol = "maxime";
            }};            

            PrivatecaProjectsLocationsOperationsDeleteResponse res = sdk.projects.privatecaProjectsLocationsOperationsDelete(req, new PrivatecaProjectsLocationsOperationsDeleteSecurity("et", "esse") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## privatecaProjectsLocationsOperationsGet

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PrivatecaProjectsLocationsOperationsGetRequest;
import org.openapis.openapi.models.operations.PrivatecaProjectsLocationsOperationsGetResponse;
import org.openapis.openapi.models.operations.PrivatecaProjectsLocationsOperationsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PrivatecaProjectsLocationsOperationsGetRequest req = new PrivatecaProjectsLocationsOperationsGetRequest("amet") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ea";
                alt = AltEnum.MEDIA;
                callback = "error";
                fields = "officiis";
                key = "officiis";
                oauthToken = "accusamus";
                prettyPrint = false;
                quotaUser = "natus";
                uploadType = "minima";
                uploadProtocol = "aspernatur";
            }};            

            PrivatecaProjectsLocationsOperationsGetResponse res = sdk.projects.privatecaProjectsLocationsOperationsGet(req, new PrivatecaProjectsLocationsOperationsGetSecurity("ex", "maiores") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## privatecaProjectsLocationsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PrivatecaProjectsLocationsOperationsListRequest;
import org.openapis.openapi.models.operations.PrivatecaProjectsLocationsOperationsListResponse;
import org.openapis.openapi.models.operations.PrivatecaProjectsLocationsOperationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PrivatecaProjectsLocationsOperationsListRequest req = new PrivatecaProjectsLocationsOperationsListRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "error";
                alt = AltEnum.MEDIA;
                callback = "suscipit";
                fields = "repudiandae";
                filter = "atque";
                key = "atque";
                oauthToken = "sunt";
                pageSize = 923306L;
                pageToken = "dolorum";
                prettyPrint = false;
                quotaUser = "repellendus";
                uploadType = "labore";
                uploadProtocol = "reiciendis";
            }};            

            PrivatecaProjectsLocationsOperationsListResponse res = sdk.projects.privatecaProjectsLocationsOperationsList(req, new PrivatecaProjectsLocationsOperationsListSecurity("doloremque", "repudiandae") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listOperationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
