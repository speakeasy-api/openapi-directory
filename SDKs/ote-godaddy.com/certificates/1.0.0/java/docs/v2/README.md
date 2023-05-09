# v2

### Available Operations

* [getAcmeExternalAccountBinding](#getacmeexternalaccountbinding) - Retrieves the external account binding for the specified customer
* [getCertificateDetailByCertIdentifier](#getcertificatedetailbycertidentifier) - Retrieve individual certificate details
* [getCustomerCertificatesByCustomerId](#getcustomercertificatesbycustomerid) - Retrieve customer's certificates
* [getDomainDetailsByDomain](#getdomaindetailsbydomain) - Retrieve detailed information for supplied domain
* [getDomainInformationByCertificateId](#getdomaininformationbycertificateid) - Retrieve domain verification status

## getAcmeExternalAccountBinding

Use this endpoint to retrieve a key identifier and Hash-based Message Authentication Code (HMAC) key for Automated Certificate Management Environment (ACME) External Account Binding (EAB). These credentials can be used with an ACME client that supports EAB (ex. CertBot) to automate the issuance request and deployment of DV SSL certificates

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAcmeExternalAccountBindingRequest;
import org.openapis.openapi.models.operations.GetAcmeExternalAccountBindingResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAcmeExternalAccountBindingRequest req = new GetAcmeExternalAccountBindingRequest("odit");            

            GetAcmeExternalAccountBindingResponse res = sdk.v2.getAcmeExternalAccountBinding(req);

            if (res.externalAccountBinding != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCertificateDetailByCertIdentifier

Once the certificate order has been created, this method can be used to check the status of the certificate. This method can also be used to retrieve details of the certificate. <ul><li>**shopperId** is **not the same** as **customerId**. **shopperId** is a number of max length 10 digits (*ex:* 1234567890) whereas **customerId** is a UUIDv4 (*ex:* 295e3bc3-b3b9-4d95-aae5-ede41a994d13)</li></ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCertificateDetailByCertIdentifierRequest;
import org.openapis.openapi.models.operations.GetCertificateDetailByCertIdentifierResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCertificateDetailByCertIdentifierRequest req = new GetCertificateDetailByCertIdentifierRequest("quo", "sequi");            

            GetCertificateDetailByCertIdentifierResponse res = sdk.v2.getCertificateDetailByCertIdentifier(req);

            if (res.certificateDetailV2 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCustomerCertificatesByCustomerId

This method can be used to retrieve a list of certificates for a specified customer. <ul><li>**shopperId** is **not the same** as **customerId**.  **shopperId** is a number of max length 10 digits (*ex:* 1234567890) whereas **customerId** is a UUIDv4 (*ex:* 295e3bc3-b3b9-4d95-aae5-ede41a994d13)</li></ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCustomerCertificatesByCustomerIdRequest;
import org.openapis.openapi.models.operations.GetCustomerCertificatesByCustomerIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCustomerCertificatesByCustomerIdRequest req = new GetCustomerCertificatesByCustomerIdRequest("tenetur") {{
                limit = 368725L;
                offset = 662527L;
            }};            

            GetCustomerCertificatesByCustomerIdResponse res = sdk.v2.getCustomerCertificatesByCustomerId(req);

            if (res.certificateSummariesV2 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDomainDetailsByDomain

Retrieve detailed information for supplied domain, including domain verification details and Certificate Authority Authorization (CAA) verification details. <ul><li>**shopperId** is **not the same** as **customerId**.  **shopperId** is a number of max length 10 digits (*ex:* 1234567890) whereas **customerId** is a UUIDv4 (*ex:* 295e3bc3-b3b9-4d95-aae5-ede41a994d13)</li></ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDomainDetailsByDomainRequest;
import org.openapis.openapi.models.operations.GetDomainDetailsByDomainResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetDomainDetailsByDomainRequest req = new GetDomainDetailsByDomainRequest("possimus", "aut", "quasi");            

            GetDomainDetailsByDomainResponse res = sdk.v2.getDomainDetailsByDomain(req);

            if (res.domainVerificationDetail != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDomainInformationByCertificateId

This method can be used to retrieve the domain verification status for a certificate request.<ul><li>**shopperId** is **not the same** as **customerId**.  **shopperId** is a number of max length 10 digits (*ex:* 1234567890) whereas **customerId** is a UUIDv4 (*ex:* 295e3bc3-b3b9-4d95-aae5-ede41a994d13)</li></ul>"

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDomainInformationByCertificateIdRequest;
import org.openapis.openapi.models.operations.GetDomainInformationByCertificateIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetDomainInformationByCertificateIdRequest req = new GetDomainInformationByCertificateIdRequest("error", "temporibus");            

            GetDomainInformationByCertificateIdResponse res = sdk.v2.getDomainInformationByCertificateId(req);

            if (res.domainVerificationSummaries != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
