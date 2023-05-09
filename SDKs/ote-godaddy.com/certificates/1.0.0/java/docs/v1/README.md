# v1

### Available Operations

* [certificateActionRetrieve](#certificateactionretrieve) - Retrieve all certificate actions
* [certificateAlternateEmailAddress](#certificatealternateemailaddress) - Add alternate email address
* [certificateCallbackDelete](#certificatecallbackdelete) - Unregister system callback
* [certificateCallbackGet](#certificatecallbackget) - Retrieve system stateful action callback url
* [certificateCallbackReplace](#certificatecallbackreplace) - Register of certificate action callback
* [certificateCancel](#certificatecancel) - Cancel a pending certificate
* [certificateCreate](#certificatecreate) - Create a pending order for certificate
* [certificateDownload](#certificatedownload) - Download certificate
* [certificateDownloadEntitlement](#certificatedownloadentitlement) - Download certificate by entitlement
* [certificateEmailHistory](#certificateemailhistory) - Retrieve email history
* [certificateGet](#certificateget) - Retrieve certificate details
* [certificateGetEntitlement](#certificategetentitlement) - Search for certificate details by entitlement
* [certificateReissue](#certificatereissue) - Reissue active certificate
* [certificateRenew](#certificaterenew) - Renew active certificate
* [certificateResendEmail](#certificateresendemail) - Resend an email
* [certificateResendEmailAddress](#certificateresendemailaddress) - Resend email to email address
* [certificateRevoke](#certificaterevoke) - Revoke active certificate
* [certificateSitesealGet](#certificatesitesealget) - Get Site seal
* [certificateValidate](#certificatevalidate) - Validate a pending order for certificate
* [certificateVerifydomaincontrol](#certificateverifydomaincontrol) - Check Domain Control

## certificateActionRetrieve

This method is used to retrieve all stateful actions relating to a certificate lifecycle.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CertificateActionRetrieveRequest;
import org.openapis.openapi.models.operations.CertificateActionRetrieveResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CertificateActionRetrieveRequest req = new CertificateActionRetrieveRequest("provident");            

            CertificateActionRetrieveResponse res = sdk.v1.certificateActionRetrieve(req);

            if (res.arrayOfCertificateAction != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## certificateAlternateEmailAddress

This method adds an alternate email address to a certificate order and re-sends all existing request emails to that address.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CertificateAlternateEmailAddressRequest;
import org.openapis.openapi.models.operations.CertificateAlternateEmailAddressResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CertificateAlternateEmailAddressRequest req = new CertificateAlternateEmailAddressRequest("distinctio", "quibusdam");            

            CertificateAlternateEmailAddressResponse res = sdk.v1.certificateAlternateEmailAddress(req);

            if (res.certificateEmailHistory != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## certificateCallbackDelete

Unregister the callback for a particular certificate.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CertificateCallbackDeleteRequest;
import org.openapis.openapi.models.operations.CertificateCallbackDeleteResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CertificateCallbackDeleteRequest req = new CertificateCallbackDeleteRequest("unde");            

            CertificateCallbackDeleteResponse res = sdk.v1.certificateCallbackDelete(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## certificateCallbackGet

This method is used to retrieve the registered callback url for a certificate.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CertificateCallbackGetRequest;
import org.openapis.openapi.models.operations.CertificateCallbackGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CertificateCallbackGetRequest req = new CertificateCallbackGetRequest("nulla");            

            CertificateCallbackGetResponse res = sdk.v1.certificateCallbackGet(req);

            if (res.certificateCallback != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## certificateCallbackReplace

This method is used to register/replace url for callbacks for stateful actions relating to a certificate lifecycle. The callback url is a Webhook style pattern and will receive POST http requests with json body defined in the CertificateAction model definition for each certificate action.  Only one callback URL is allowed to be registered for each certificateId, so it will replace a previous registration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CertificateCallbackReplaceRequest;
import org.openapis.openapi.models.operations.CertificateCallbackReplaceResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CertificateCallbackReplaceRequest req = new CertificateCallbackReplaceRequest("corrupti", "illum");            

            CertificateCallbackReplaceResponse res = sdk.v1.certificateCallbackReplace(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## certificateCancel

Use the cancel call to cancel a pending certificate order.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CertificateCancelRequest;
import org.openapis.openapi.models.operations.CertificateCancelResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CertificateCancelRequest req = new CertificateCancelRequest("vel");            

            CertificateCancelResponse res = sdk.v1.certificateCancel(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## certificateCreate

<p>Creating a certificate order can be a long running asynchronous operation in the PKI workflow. The PKI API supports 2 options for getting the completion stateful actions for this asynchronous operations: 1) by polling operations -- see /v1/certificates/{certificateId}/actions 2) via WebHook style callback -- see '/v1/certificates/{certificateId}/callback'.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CertificateCreateRequest;
import org.openapis.openapi.models.operations.CertificateCreateResponse;
import org.openapis.openapi.models.shared.CertificateAddress;
import org.openapis.openapi.models.shared.CertificateAddressCountryEnum;
import org.openapis.openapi.models.shared.CertificateContact;
import org.openapis.openapi.models.shared.CertificateCreate;
import org.openapis.openapi.models.shared.CertificateCreateProductTypeEnum;
import org.openapis.openapi.models.shared.CertificateCreateRootTypeEnum;
import org.openapis.openapi.models.shared.CertificateCreateSlotSizeEnum;
import org.openapis.openapi.models.shared.CertificateOrganizationCreate;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CertificateCreateRequest req = new CertificateCreateRequest(                new CertificateCreate(                new CertificateContact("error", "deserunt", "suscipit", "iure") {{
                                                jobTitle = "Product Accountability Associate";
                                                nameMiddle = "delectus";
                                                suffix = "tempora";
                                            }};, "suscipit", 477665L, CertificateCreateProductTypeEnum.UCC_DV_SSL) {{
                                callbackUrl = "placeat";
                                commonName = "voluptatum";
                                intelVPro = false;
                                organization = new CertificateOrganizationCreate("iusto", "excepturi") {{
                                    address = new CertificateAddress("nisi", CertificateAddressCountryEnum.US) {{
                                        address2 = "temporibus";
                                        city = "West Ashleefurt";
                                        postalCode = "38971";
                                        state = "at";
                                    }};;
                                    assumedName = "at";
                                    registrationAgent = "maiores";
                                    registrationNumber = "molestiae";
                                }};;
                                rootType = CertificateCreateRootTypeEnum.STARFIELD_SHA2;
                                slotSize = CertificateCreateSlotSizeEnum.FIFTY;
                                subjectAlternativeNames = new String[]{{
                                    add("totam"),
                                    add("porro"),
                                }};
                            }};) {{
                xMarketId = "dolorum";
            }};            

            CertificateCreateResponse res = sdk.v1.certificateCreate(req);

            if (res.certificateIdentifier != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## certificateDownload

Download certificate

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CertificateDownloadRequest;
import org.openapis.openapi.models.operations.CertificateDownloadResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CertificateDownloadRequest req = new CertificateDownloadRequest("dicta");            

            CertificateDownloadResponse res = sdk.v1.certificateDownload(req);

            if (res.certificateBundle != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## certificateDownloadEntitlement

Download certificate by entitlement

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CertificateDownloadEntitlementRequest;
import org.openapis.openapi.models.operations.CertificateDownloadEntitlementResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CertificateDownloadEntitlementRequest req = new CertificateDownloadEntitlementRequest("nam");            

            CertificateDownloadEntitlementResponse res = sdk.v1.certificateDownloadEntitlement(req);

            if (res.certificateBundle != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## certificateEmailHistory

This method can be used to retrieve all emails sent for a certificate.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CertificateEmailHistoryRequest;
import org.openapis.openapi.models.operations.CertificateEmailHistoryResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CertificateEmailHistoryRequest req = new CertificateEmailHistoryRequest("officia");            

            CertificateEmailHistoryResponse res = sdk.v1.certificateEmailHistory(req);

            if (res.certificateEmailHistory != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## certificateGet

Once the certificate order has been created, this method can be used to check the status of the certificate. This method can also be used to retrieve details of the certificate.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CertificateGetRequest;
import org.openapis.openapi.models.operations.CertificateGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CertificateGetRequest req = new CertificateGetRequest("occaecati");            

            CertificateGetResponse res = sdk.v1.certificateGet(req);

            if (res.certificate != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## certificateGetEntitlement

Once the certificate order has been created, this method can be used to check the status of the certificate. This method can also be used to retrieve details of the certificates associated to an entitlement.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CertificateGetEntitlementRequest;
import org.openapis.openapi.models.operations.CertificateGetEntitlementResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CertificateGetEntitlementRequest req = new CertificateGetEntitlementRequest("fugit") {{
                latest = false;
            }};            

            CertificateGetEntitlementResponse res = sdk.v1.certificateGetEntitlement(req);

            if (res.certificates != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## certificateReissue

<p>Rekeying is the process by which the private and public key is changed for a certificate. It is a simplified reissue,where only the CSR is changed. Reissuing is the process by which domain names are added or removed from a certificate.Once a request is validated and approved, the certificate will be reissued with the new common name and sans specified. Unlimited reissues are available during the lifetime of the certificate.New names added to a certificate that do not share the base domain of the common name may take additional time to validate. If this API call is made before a previous pending reissue has been validated and issued, the previous reissue request is automatically rejected and replaced with the current request.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CertificateReissueRequest;
import org.openapis.openapi.models.operations.CertificateReissueResponse;
import org.openapis.openapi.models.shared.CertificateReissue;
import org.openapis.openapi.models.shared.CertificateReissueRootTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CertificateReissueRequest req = new CertificateReissueRequest(                new CertificateReissue() {{
                                callbackUrl = "deleniti";
                                commonName = "hic";
                                csr = "optio";
                                delayExistingRevoke = 521848L;
                                forceDomainRevetting = new String[]{{
                                    add("commodi"),
                                }};
                                rootType = CertificateReissueRootTypeEnum.GODADDY_SHA2;
                                subjectAlternativeNames = new String[]{{
                                    add("qui"),
                                    add("impedit"),
                                }};
                            }};, "cum");            

            CertificateReissueResponse res = sdk.v1.certificateReissue(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## certificateRenew

Renewal is the process by which the validity of a certificate is extended. Renewal is only available 60 days prior to expiration of the previous certificate and 30 days after the expiration of the previous certificate. The renewal supports modifying a set of the original certificate order information. Once a request is validated and approved, the certificate will be issued with extended validity. Since subject alternative names can be removed during a renewal, we require that you provide the subject alternative names you expect in the renewed certificate. New names added to a certificate that do not share the base domain of the common name may take additional time to validate. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CertificateRenewRequest;
import org.openapis.openapi.models.operations.CertificateRenewResponse;
import org.openapis.openapi.models.shared.CertificateRenew;
import org.openapis.openapi.models.shared.CertificateRenewRootTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CertificateRenewRequest req = new CertificateRenewRequest(                new CertificateRenew() {{
                                callbackUrl = "esse";
                                commonName = "ipsum";
                                csr = "excepturi";
                                period = 135218L;
                                rootType = CertificateRenewRootTypeEnum.GODADDY_SHA1;
                                subjectAlternativeNames = new String[]{{
                                    add("natus"),
                                    add("sed"),
                                }};
                            }};, "iste");            

            CertificateRenewResponse res = sdk.v1.certificateRenew(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## certificateResendEmail

This method can be used to resend emails by providing the certificate id and the email id

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CertificateResendEmailRequest;
import org.openapis.openapi.models.operations.CertificateResendEmailResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CertificateResendEmailRequest req = new CertificateResendEmailRequest("dolor", "natus");            

            CertificateResendEmailResponse res = sdk.v1.certificateResendEmail(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## certificateResendEmailAddress

This method can be used to resend emails by providing the certificate id, the email id, and the recipient email address

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CertificateResendEmailAddressRequest;
import org.openapis.openapi.models.operations.CertificateResendEmailAddressResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CertificateResendEmailAddressRequest req = new CertificateResendEmailAddressRequest("laboriosam", "hic", "saepe");            

            CertificateResendEmailAddressResponse res = sdk.v1.certificateResendEmailAddress(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## certificateRevoke

Use revoke call to revoke an active certificate, if the certificate has not been issued a 404 response will be returned.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CertificateRevokeRequest;
import org.openapis.openapi.models.operations.CertificateRevokeResponse;
import org.openapis.openapi.models.shared.CertificateRevoke;
import org.openapis.openapi.models.shared.CertificateRevokeReasonEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CertificateRevokeRequest req = new CertificateRevokeRequest(                new CertificateRevoke(CertificateRevokeReasonEnum.PRIVILEGE_WITHDRAWN);, "in");            

            CertificateRevokeResponse res = sdk.v1.certificateRevoke(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## certificateSitesealGet

<p>This method is used to obtain the site seal information for an issued certificate. A site seal is a graphic that the certificate purchaser can embed on their web site to show their visitors information about their SSL certificate. If a web site visitor clicks on the site seal image, a pop-up page is displayed that contains detailed information about the SSL certificate. The site seal token is used to link the site seal graphic image to the appropriate certificate details pop-up page display when a user clicks on the site seal. The site seal images are expected to be static images and hosted on the reseller's website, to minimize delays for customer page load times.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CertificateSitesealGetRequest;
import org.openapis.openapi.models.operations.CertificateSitesealGetResponse;
import org.openapis.openapi.models.operations.CertificateSitesealGetThemeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CertificateSitesealGetRequest req = new CertificateSitesealGetRequest("corporis") {{
                locale = "iste";
                theme = CertificateSitesealGetThemeEnum.DARK;
            }};            

            CertificateSitesealGetResponse res = sdk.v1.certificateSitesealGet(req);

            if (res.certificateSiteSeal != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## certificateValidate

Validate a pending order for certificate

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CertificateValidateRequest;
import org.openapis.openapi.models.operations.CertificateValidateResponse;
import org.openapis.openapi.models.shared.CertificateAddress;
import org.openapis.openapi.models.shared.CertificateAddressCountryEnum;
import org.openapis.openapi.models.shared.CertificateContact;
import org.openapis.openapi.models.shared.CertificateCreate;
import org.openapis.openapi.models.shared.CertificateCreateProductTypeEnum;
import org.openapis.openapi.models.shared.CertificateCreateRootTypeEnum;
import org.openapis.openapi.models.shared.CertificateCreateSlotSizeEnum;
import org.openapis.openapi.models.shared.CertificateOrganizationCreate;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CertificateValidateRequest req = new CertificateValidateRequest(                new CertificateCreate(                new CertificateContact("saepe", "quidem", "architecto", "ipsa") {{
                                                jobTitle = "Principal Branding Technician";
                                                nameMiddle = "laborum";
                                                suffix = "dolores";
                                            }};, "dolorem", 358152L, CertificateCreateProductTypeEnum.DV_WILDCARD_SSL) {{
                                callbackUrl = "nobis";
                                commonName = "enim";
                                intelVPro = false;
                                organization = new CertificateOrganizationCreate("omnis", "nemo") {{
                                    address = new CertificateAddress("minima", CertificateAddressCountryEnum.MH) {{
                                        address2 = "accusantium";
                                        city = "Lorenzaworth";
                                        postalCode = "16261-9652";
                                        state = "commodi";
                                    }};;
                                    assumedName = "quam";
                                    registrationAgent = "molestiae";
                                    registrationNumber = "velit";
                                }};;
                                rootType = CertificateCreateRootTypeEnum.STARFIELD_SHA1;
                                slotSize = CertificateCreateSlotSizeEnum.TEN;
                                subjectAlternativeNames = new String[]{{
                                    add("vitae"),
                                    add("laborum"),
                                }};
                            }};) {{
                xMarketId = "animi";
            }};            

            CertificateValidateResponse res = sdk.v1.certificateValidate(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## certificateVerifydomaincontrol

Domain control is a means for verifying the domain included in the certificate order. This resource is useful for resellers that control the domains for their customers, and can expedite the verification process. See https://www.godaddy.com/help/verifying-your-domain-ownership-for-ssl-certificate-requests-html-or-dns-7452

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CertificateVerifydomaincontrolRequest;
import org.openapis.openapi.models.operations.CertificateVerifydomaincontrolResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CertificateVerifydomaincontrolRequest req = new CertificateVerifydomaincontrolRequest("enim");            

            CertificateVerifydomaincontrolResponse res = sdk.v1.certificateVerifydomaincontrol(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
