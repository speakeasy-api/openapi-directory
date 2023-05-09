# certificates

## Overview

TLS/SSL Certificates prove the identity of a Server and are used to encrypt client traffic.

### Available Operations

* [deleteCertificatesId](#deletecertificatesid) - Delete a Certificate
* [getCertificates](#getcertificates) - Get all Certificates
* [getCertificatesId](#getcertificatesid) - Get a Certificate
* [postCertificates](#postcertificates) - Create a Certificate
* [putCertificatesId](#putcertificatesid) - Update a Certificate

## deleteCertificatesId

Deletes a Certificate.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteCertificatesIdRequest;
import org.openapis.openapi.models.operations.DeleteCertificatesIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteCertificatesIdRequest req = new DeleteCertificatesIdRequest(297534L);            

            DeleteCertificatesIdResponse res = sdk.certificates.deleteCertificatesId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCertificates

Returns all Certificate objects.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCertificatesRequest;
import org.openapis.openapi.models.operations.GetCertificatesResponse;
import org.openapis.openapi.models.operations.GetCertificatesSortEnum;
import org.openapis.openapi.models.operations.GetCertificatesTypeParameterTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCertificatesRequest req = new GetCertificatesRequest() {{
                labelSelector = "debitis";
                name = "Lucia Goldner";
                sort = GetCertificatesSortEnum.CREATED_ASC;
                type = GetCertificatesTypeParameterTypeEnum.MANAGED;
            }};            

            GetCertificatesResponse res = sdk.certificates.getCertificates(req);

            if (res.certificatesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCertificatesId

Gets a specific Certificate object.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCertificatesIdRequest;
import org.openapis.openapi.models.operations.GetCertificatesIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCertificatesIdRequest req = new GetCertificatesIdRequest(528895L);            

            GetCertificatesIdResponse res = sdk.certificates.getCertificatesId(req);

            if (res.certificateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCertificates

Creates a new Certificate.

The default type **uploaded** allows for uploading your existing `certificate` and `private_key` in PEM format. You have to monitor its expiration date and handle renewal yourself.

In contrast, type **managed** requests a new Certificate from *Let's Encrypt* for the specified `domain_names`. Only domains managed by *Hetzner DNS* are supported. We handle renewal and timely alert the project owner via email if problems occur.

For type `managed` Certificates the `action` key of the response contains the Action that allows for tracking the issuance process. For type `uploaded` Certificates the `action` is always null.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostCertificatesCreateCertificateRequest;
import org.openapis.openapi.models.operations.PostCertificatesCreateCertificateRequestTypeEnum;
import org.openapis.openapi.models.operations.PostCertificatesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostCertificatesCreateCertificateRequest req = new PostCertificatesCreateCertificateRequest("my website cert") {{
                certificate = "-----BEGIN CERTIFICATE-----
            ...";
                domainNames = new String[]{{
                    add("excepturi"),
                    add("nisi"),
                }};
                labels = new java.util.HashMap<String, Object>() {{
                    put("temporibus", "ab");
                    put("quis", "veritatis");
                    put("deserunt", "perferendis");
                    put("ipsam", "repellendus");
                }};
                privateKey = "-----BEGIN PRIVATE KEY-----
            ...";
                type = PostCertificatesCreateCertificateRequestTypeEnum.UPLOADED;
            }};            

            PostCertificatesResponse res = sdk.certificates.postCertificates(req);

            if (res.createCertificateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putCertificatesId

Updates the Certificate properties.

Note that when updating labels, the Certificate’s current set of labels will be replaced with the labels provided in the request body. So, for example, if you want to add a new label, you have to provide all existing labels plus the new label in the request body.

Note: if the Certificate object changes during the request, the response will be a “conflict” error.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutCertificatesIdRequest;
import org.openapis.openapi.models.operations.PutCertificatesIdResponse;
import org.openapis.openapi.models.operations.PutCertificatesIdUpdateCertificateRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutCertificatesIdRequest req = new PutCertificatesIdRequest(957156L) {{
                requestBody = new PutCertificatesIdUpdateCertificateRequest() {{
                    labels = new java.util.HashMap<String, Object>() {{
                        put("odit", "at");
                        put("at", "maiores");
                        put("molestiae", "quod");
                        put("quod", "esse");
                    }};
                    name = "my website cert";
                }};;
            }};            

            PutCertificatesIdResponse res = sdk.certificates.putCertificatesId(req);

            if (res.certificateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
