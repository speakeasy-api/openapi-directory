# certificates

## Overview

Everything about Otoroshi SSL/TLS certificates

### Available Operations

* [allCerts](#allcerts) - Get all certificates
* [createCert](#createcert) - Create one certificate
* [deleteCert](#deletecert) - Delete one certificate by id
* [oneCert](#onecert) - Get one certificate by id
* [patchCert](#patchcert) - Update one certificate by id
* [putCert](#putcert) - Update one certificate by id

## allCerts

Get all certificates

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AllCertsResponse;
import org.openapis.openapi.models.operations.AllCertsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AllCertsResponse res = sdk.certificates.allCerts(new AllCertsSecurity("cupiditate", "quos") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.certificates != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createCert

Create one certificate

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateCertResponse;
import org.openapis.openapi.models.operations.CreateCertSecurity;
import org.openapis.openapi.models.shared.Certificate;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.Certificate req = new Certificate("a string value", "a string value", "a string value", "a string value", "a string value", "a string value", "a string value", "a string value", "a string value", "a string value", "a string value", "a string value");            

            CreateCertResponse res = sdk.certificates.createCert(req, new CreateCertSecurity("perferendis", "magni") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
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

## deleteCert

Delete one certificate by id

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteCertRequest;
import org.openapis.openapi.models.operations.DeleteCertResponse;
import org.openapis.openapi.models.operations.DeleteCertSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteCertRequest req = new DeleteCertRequest("assumenda");            

            DeleteCertResponse res = sdk.certificates.deleteCert(req, new DeleteCertSecurity("ipsam", "alias") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.deleted != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## oneCert

Get one certificate by id

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OneCertRequest;
import org.openapis.openapi.models.operations.OneCertResponse;
import org.openapis.openapi.models.operations.OneCertSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OneCertRequest req = new OneCertRequest("fugit");            

            OneCertResponse res = sdk.certificates.oneCert(req, new OneCertSecurity("dolorum", "excepturi") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
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

## patchCert

Update one certificate by id

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatchCertRequest;
import org.openapis.openapi.models.operations.PatchCertResponse;
import org.openapis.openapi.models.operations.PatchCertSecurity;
import org.openapis.openapi.models.shared.Patch;
import org.openapis.openapi.models.shared.PatchOpEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatchCertRequest req = new PatchCertRequest("tempora") {{
                requestBody = new org.openapis.openapi.models.shared.Patch[]{{
                    add(new Patch(PatchOpEnum.TEST, "a string value") {{
                        op = PatchOpEnum.COPY;
                        path = "a string value";
                        value = "labore";
                    }}),
                    add(new Patch(PatchOpEnum.COPY, "a string value") {{
                        op = PatchOpEnum.REMOVE;
                        path = "a string value";
                        value = "non";
                    }}),
                    add(new Patch(PatchOpEnum.REMOVE, "a string value") {{
                        op = PatchOpEnum.REMOVE;
                        path = "a string value";
                        value = "aliquid";
                    }}),
                }};
            }};            

            PatchCertResponse res = sdk.certificates.patchCert(req, new PatchCertSecurity("necessitatibus", "sint") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
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

## putCert

Update one certificate by id

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutCertRequest;
import org.openapis.openapi.models.operations.PutCertResponse;
import org.openapis.openapi.models.operations.PutCertSecurity;
import org.openapis.openapi.models.shared.Certificate;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutCertRequest req = new PutCertRequest("officia") {{
                certificate = new Certificate("a string value", "a string value", "a string value", "a string value", "a string value", "a string value", "a string value", "a string value", "a string value", "a string value", "a string value", "a string value");;
            }};            

            PutCertResponse res = sdk.certificates.putCert(req, new PutCertSecurity("dolor", "debitis") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
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
