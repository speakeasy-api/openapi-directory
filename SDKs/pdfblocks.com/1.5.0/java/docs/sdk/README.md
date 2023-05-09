# SDK

## Overview

PDF Blocks is a secure, reliable, and fast API to work with PDF documents. Actions include: Merge PDF documents, add or remove passwords, add watermarks, remove, extract, reverse, and rotate pages, and more.

Documentation and examples
<https://www.pdfblocks.com/docs/api/v1>
### Available Operations

* [addImageWatermarkV1](#addimagewatermarkv1) - Add an image watermark to a PDF
* [addPasswordV1](#addpasswordv1) - Add a password to a PDF
* [addRestrictionsV1](#addrestrictionsv1) - Add restrictions to a PDF
* [addTextWatermarkV1](#addtextwatermarkv1) - Add a text watermark to a PDF
* [extractPagesV1](#extractpagesv1) - Extract pages from a PDF
* [mergeDocumentsV1](#mergedocumentsv1) - Merge PDF documents
* [removePagesV1](#removepagesv1) - Remove pages from a PDF
* [removePasswordV1](#removepasswordv1) - Remove the password from a PDF
* [removeRestrictionsV1](#removerestrictionsv1) - Remove the restrictions from a PDF
* [removeSignaturesV1](#removesignaturesv1) - Remove the signatures from a PDF
* [reversePagesV1](#reversepagesv1) - Reverse the pages of a PDF
* [rotatePagesV1](#rotatepagesv1) - Rotate pages in a PDF

## addImageWatermarkV1

Add an image watermark to each page of a PDF document.

Documentation and examples
<https://www.pdfblocks.com/docs/api/v1/add-watermark-image>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddImageWatermarkV1RequestBody;
import org.openapis.openapi.models.operations.AddImageWatermarkV1RequestBodyFile;
import org.openapis.openapi.models.operations.AddImageWatermarkV1RequestBodyImage;
import org.openapis.openapi.models.operations.AddImageWatermarkV1Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nulla") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            AddImageWatermarkV1RequestBody req = new AddImageWatermarkV1RequestBody(                new AddImageWatermarkV1RequestBodyFile("corrupti".getBytes(), "illum");,                 new AddImageWatermarkV1RequestBodyImage("vel".getBytes(), "error");) {{
                margin = 1;
                transparency = 50;
            }};            

            AddImageWatermarkV1Response res = sdk.sdk.addImageWatermarkV1(req);

            if (res.addImageWatermarkV1200ApplicationPdfBinaryString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## addPasswordV1

Protect a PDF document with a password. Encrypt the PDF document to prevent unauthorized access.

Documentation and examples
<https://www.pdfblocks.com/docs/api/v1/add-password>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddPasswordV1RequestBody;
import org.openapis.openapi.models.operations.AddPasswordV1RequestBodyEncryptionAlgorithmEnum;
import org.openapis.openapi.models.operations.AddPasswordV1RequestBodyFile;
import org.openapis.openapi.models.operations.AddPasswordV1Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deserunt") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            AddPasswordV1RequestBody req = new AddPasswordV1RequestBody(                new AddPasswordV1RequestBodyFile("suscipit".getBytes(), "iure");, "pa$$word") {{
                encryptionAlgorithm = AddPasswordV1RequestBodyEncryptionAlgorithmEnum.AES128;
            }};            

            AddPasswordV1Response res = sdk.sdk.addPasswordV1(req);

            if (res.addPasswordV1200ApplicationPdfBinaryString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## addRestrictionsV1

Add restrictions to prevent copying, printing, and modifying a PDF document.

Documentation and examples
<https://www.pdfblocks.com/docs/api/v1/add-restrictions>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddRestrictionsV1RequestBody;
import org.openapis.openapi.models.operations.AddRestrictionsV1RequestBodyEncryptionAlgorithmEnum;
import org.openapis.openapi.models.operations.AddRestrictionsV1RequestBodyFile;
import org.openapis.openapi.models.operations.AddRestrictionsV1Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magnam") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            AddRestrictionsV1RequestBody req = new AddRestrictionsV1RequestBody(                new AddRestrictionsV1RequestBodyFile("debitis".getBytes(), "ipsa");, "pa$$word") {{
                allowAccessibility = false;
                allowAssembleDocument = false;
                allowChangeContent = false;
                allowCommentAndFillForm = false;
                allowCopyContent = false;
                allowFillForm = false;
                allowPrint = false;
                allowPrintHighResolution = false;
                encryptionAlgorithm = AddRestrictionsV1RequestBodyEncryptionAlgorithmEnum.AES128;
                userPassword = "pa$$word";
            }};            

            AddRestrictionsV1Response res = sdk.sdk.addRestrictionsV1(req);

            if (res.addRestrictionsV1200ApplicationPdfBinaryString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## addTextWatermarkV1

Add a text watermark to each page of a PDF document. Choose from several watermark templates.

Documentation and examples
<https://www.pdfblocks.com/docs/api/v1/add-watermark-text>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddTextWatermarkV1RequestBody;
import org.openapis.openapi.models.operations.AddTextWatermarkV1RequestBodyColorEnum;
import org.openapis.openapi.models.operations.AddTextWatermarkV1RequestBodyFile;
import org.openapis.openapi.models.operations.AddTextWatermarkV1Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("delectus") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            AddTextWatermarkV1RequestBody req = new AddTextWatermarkV1RequestBody(                new AddTextWatermarkV1RequestBodyFile("tempora".getBytes(), "suscipit");, "Jane Doe") {{
                color = AddTextWatermarkV1RequestBodyColorEnum.GRAY;
                line2 = "ACME, Inc";
                line3 = "Confidential";
                margin = 1;
                template = 1001;
                transparency = 75;
            }};            

            AddTextWatermarkV1Response res = sdk.sdk.addTextWatermarkV1(req);

            if (res.addTextWatermarkV1200ApplicationPdfBinaryString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## extractPagesV1

Extract one or more pages from a PDF document.

Documentation and examples
<https://www.pdfblocks.com/docs/api/v1/extract-pages>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ExtractPagesV1RequestBody;
import org.openapis.openapi.models.operations.ExtractPagesV1RequestBodyFile;
import org.openapis.openapi.models.operations.ExtractPagesV1Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestiae") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            ExtractPagesV1RequestBody req = new ExtractPagesV1RequestBody(                new ExtractPagesV1RequestBodyFile("minus".getBytes(), "placeat");) {{
                firstPage = 528895;
                lastPage = 479977;
            }};            

            ExtractPagesV1Response res = sdk.sdk.extractPagesV1(req);

            if (res.extractPagesV1200ApplicationPdfBinaryString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## mergeDocumentsV1

Combine multiple PDF documents into a single PDF document.

Documentation and examples
<https://www.pdfblocks.com/docs/api/v1/merge-documents>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MergeDocumentsV1RequestBody;
import org.openapis.openapi.models.operations.MergeDocumentsV1Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            MergeDocumentsV1RequestBody req = new MergeDocumentsV1RequestBody() {{
                file = new byte[][]{{
                    add("recusandae".getBytes()),
                    add("temporibus".getBytes()),
                }};
            }};            

            MergeDocumentsV1Response res = sdk.sdk.mergeDocumentsV1(req);

            if (res.mergeDocumentsV1200ApplicationPdfBinaryString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## removePagesV1

Remove one or more pages from a PDF document.

Documentation and examples
<https://www.pdfblocks.com/docs/api/v1/remove-pages>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RemovePagesV1RequestBody;
import org.openapis.openapi.models.operations.RemovePagesV1RequestBodyFile;
import org.openapis.openapi.models.operations.RemovePagesV1Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ab") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            RemovePagesV1RequestBody req = new RemovePagesV1RequestBody(                new RemovePagesV1RequestBodyFile("quis".getBytes(), "veritatis");) {{
                firstPage = 648172;
                lastPage = 20218;
            }};            

            RemovePagesV1Response res = sdk.sdk.removePagesV1(req);

            if (res.removePagesV1200ApplicationPdfBinaryString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## removePasswordV1

Remove the password from an encrypted PDF document. The PDF document will no longer require a password to open.

Documentation and examples
<https://www.pdfblocks.com/docs/api/v1/remove-password>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RemovePasswordV1RequestBody;
import org.openapis.openapi.models.operations.RemovePasswordV1RequestBodyFile;
import org.openapis.openapi.models.operations.RemovePasswordV1Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsam") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            RemovePasswordV1RequestBody req = new RemovePasswordV1RequestBody(                new RemovePasswordV1RequestBodyFile("repellendus".getBytes(), "sapiente");, "pa$$word");            

            RemovePasswordV1Response res = sdk.sdk.removePasswordV1(req);

            if (res.removePasswordV1200ApplicationPdfBinaryString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## removeRestrictionsV1

Remove all the restrictions from a PDF document.

Documentation and examples
<https://www.pdfblocks.com/docs/api/v1/remove-restrictions>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RemoveRestrictionsV1RequestBody;
import org.openapis.openapi.models.operations.RemoveRestrictionsV1RequestBodyFile;
import org.openapis.openapi.models.operations.RemoveRestrictionsV1Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quo") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            RemoveRestrictionsV1RequestBody req = new RemoveRestrictionsV1RequestBody(                new RemoveRestrictionsV1RequestBodyFile("odit".getBytes(), "at"););            

            RemoveRestrictionsV1Response res = sdk.sdk.removeRestrictionsV1(req);

            if (res.removeRestrictionsV1200ApplicationPdfBinaryString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## removeSignaturesV1

Remove the cryptographic signatures and timestamps from a PDF document.

Documentation and examples
<https://www.pdfblocks.com/docs/api/v1/remove-signatures>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RemoveSignaturesV1RequestBody;
import org.openapis.openapi.models.operations.RemoveSignaturesV1RequestBodyFile;
import org.openapis.openapi.models.operations.RemoveSignaturesV1Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("at") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            RemoveSignaturesV1RequestBody req = new RemoveSignaturesV1RequestBody(                new RemoveSignaturesV1RequestBodyFile("maiores".getBytes(), "molestiae"););            

            RemoveSignaturesV1Response res = sdk.sdk.removeSignaturesV1(req);

            if (res.removeSignaturesV1200ApplicationPdfBinaryString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reversePagesV1

Reverse the order of the pages of a PDF document.

Documentation and examples
<https://www.pdfblocks.com/docs/api/v1/reverse-pages>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReversePagesV1RequestBody;
import org.openapis.openapi.models.operations.ReversePagesV1RequestBodyFile;
import org.openapis.openapi.models.operations.ReversePagesV1Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quod") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            ReversePagesV1RequestBody req = new ReversePagesV1RequestBody(                new ReversePagesV1RequestBodyFile("quod".getBytes(), "esse"););            

            ReversePagesV1Response res = sdk.sdk.reversePagesV1(req);

            if (res.reversePagesV1200ApplicationPdfBinaryString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## rotatePagesV1

Rotate one or more pages in a PDF document.

Documentation and examples
<https://www.pdfblocks.com/docs/api/v1/rotate-pages>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RotatePagesV1RequestBody;
import org.openapis.openapi.models.operations.RotatePagesV1RequestBodyAngleEnum;
import org.openapis.openapi.models.operations.RotatePagesV1RequestBodyFile;
import org.openapis.openapi.models.operations.RotatePagesV1Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("totam") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            RotatePagesV1RequestBody req = new RotatePagesV1RequestBody(RotatePagesV1RequestBodyAngleEnum.MINUS180,                 new RotatePagesV1RequestBodyFile("dolorum".getBytes(), "dicta");) {{
                firstPage = 720633;
                lastPage = 639921;
            }};            

            RotatePagesV1Response res = sdk.sdk.rotatePagesV1(req);

            if (res.rotatePagesV1200ApplicationPdfBinaryString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
