# SDK

## Overview

This is the public Twilio REST API.

### Available Operations

* [createBundle](#createbundle) - Create a new Bundle.
* [createBundleCopy](#createbundlecopy) - Creates a new copy of a Bundle. It will internally create copies of all the bundle items (identities and documents) of the original bundle
* [createEndUser](#createenduser) - Create a new End User.
* [createEvaluation](#createevaluation) - Creates an evaluation for a bundle
* [createItemAssignment](#createitemassignment) - Create a new Assigned Item.
* [createReplaceItems](#createreplaceitems) - Replaces all bundle items in the target bundle (specified in the path) with all the bundle items of the source bundle (specified by the from_bundle_sid body param)
* [createSupportingDocument](#createsupportingdocument) - Create a new Supporting Document.
* [deleteBundle](#deletebundle) - Delete a specific Bundle.
* [deleteEndUser](#deleteenduser) - Delete a specific End User.
* [deleteItemAssignment](#deleteitemassignment) - Remove an Assignment Item Instance.
* [deleteSupportingDocument](#deletesupportingdocument) - Delete a specific Supporting Document.
* [fetchBundle](#fetchbundle) - Fetch a specific Bundle instance.
* [fetchEndUser](#fetchenduser) - Fetch specific End User Instance.
* [fetchEndUserType](#fetchendusertype) - Fetch a specific End-User Type Instance.
* [fetchEvaluation](#fetchevaluation) - Fetch specific Evaluation Instance.
* [fetchItemAssignment](#fetchitemassignment) - Fetch specific Assigned Item Instance.
* [fetchRegulation](#fetchregulation) - Fetch specific Regulation Instance.
* [fetchSupportingDocument](#fetchsupportingdocument) - Fetch specific Supporting Document Instance.
* [fetchSupportingDocumentType](#fetchsupportingdocumenttype) - Fetch a specific Supporting Document Type Instance.
* [listBundle](#listbundle) - Retrieve a list of all Bundles for an account.
* [listBundleCopy](#listbundlecopy) - Retrieve a list of all Bundles Copies for a Bundle.
* [listEndUser](#listenduser) - Retrieve a list of all End User for an account.
* [listEndUserType](#listendusertype) - Retrieve a list of all End-User Types.
* [listEvaluation](#listevaluation) - Retrieve a list of Evaluations associated to the Bundle resource.
* [listItemAssignment](#listitemassignment) - Retrieve a list of all Assigned Items for an account.
* [listRegulation](#listregulation) - Retrieve a list of all Regulations.
* [listSupportingDocument](#listsupportingdocument) - Retrieve a list of all Supporting Document for an account.
* [listSupportingDocumentType](#listsupportingdocumenttype) - Retrieve a list of all Supporting Document Types.
* [updateBundle](#updatebundle) - Updates a Bundle in an account.
* [updateEndUser](#updateenduser) - Update an existing End User.
* [updateSupportingDocument](#updatesupportingdocument) - Update an existing Supporting Document.

## createBundle

Create a new Bundle.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateBundleCreateBundleRequest;
import org.openapis.openapi.models.operations.CreateBundleResponse;
import org.openapis.openapi.models.operations.CreateBundleSecurity;
import org.openapis.openapi.models.shared.BundleEnumEndUserTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateBundleCreateBundleRequest req = new CreateBundleCreateBundleRequest("iure", "magnam") {{
                endUserType = BundleEnumEndUserTypeEnum.BUSINESS;
                isoCountry = "ipsa";
                numberType = "delectus";
                regulationSid = "tempora";
                statusCallback = "http://lasting-sex.net";
            }};            

            CreateBundleResponse res = sdk.sdk.createBundle(req, new CreateBundleSecurity("voluptatum", "iusto") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.numbersV2RegulatoryComplianceBundle != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createBundleCopy

Creates a new copy of a Bundle. It will internally create copies of all the bundle items (identities and documents) of the original bundle

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateBundleCopyCreateBundleCopyRequest;
import org.openapis.openapi.models.operations.CreateBundleCopyRequest;
import org.openapis.openapi.models.operations.CreateBundleCopyResponse;
import org.openapis.openapi.models.operations.CreateBundleCopySecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateBundleCopyRequest req = new CreateBundleCopyRequest("excepturi") {{
                requestBody = new CreateBundleCopyCreateBundleCopyRequest() {{
                    friendlyName = "nisi";
                }};;
            }};            

            CreateBundleCopyResponse res = sdk.sdk.createBundleCopy(req, new CreateBundleCopySecurity("recusandae", "temporibus") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.numbersV2RegulatoryComplianceBundleBundleCopy != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createEndUser

Create a new End User.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateEndUserCreateEndUserRequest;
import org.openapis.openapi.models.operations.CreateEndUserResponse;
import org.openapis.openapi.models.operations.CreateEndUserSecurity;
import org.openapis.openapi.models.shared.EndUserEnumTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateEndUserCreateEndUserRequest req = new CreateEndUserCreateEndUserRequest("ab", EndUserEnumTypeEnum.INDIVIDUAL) {{
                attributes = "veritatis";
            }};            

            CreateEndUserResponse res = sdk.sdk.createEndUser(req, new CreateEndUserSecurity("deserunt", "perferendis") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.numbersV2RegulatoryComplianceEndUser != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createEvaluation

Creates an evaluation for a bundle

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateEvaluationRequest;
import org.openapis.openapi.models.operations.CreateEvaluationResponse;
import org.openapis.openapi.models.operations.CreateEvaluationSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateEvaluationRequest req = new CreateEvaluationRequest("ipsam");            

            CreateEvaluationResponse res = sdk.sdk.createEvaluation(req, new CreateEvaluationSecurity("repellendus", "sapiente") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.numbersV2RegulatoryComplianceBundleEvaluation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createItemAssignment

Create a new Assigned Item.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateItemAssignmentCreateItemAssignmentRequest;
import org.openapis.openapi.models.operations.CreateItemAssignmentRequest;
import org.openapis.openapi.models.operations.CreateItemAssignmentResponse;
import org.openapis.openapi.models.operations.CreateItemAssignmentSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateItemAssignmentRequest req = new CreateItemAssignmentRequest("quo") {{
                requestBody = new CreateItemAssignmentCreateItemAssignmentRequest("odit");;
            }};            

            CreateItemAssignmentResponse res = sdk.sdk.createItemAssignment(req, new CreateItemAssignmentSecurity("at", "at") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.numbersV2RegulatoryComplianceBundleItemAssignment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createReplaceItems

Replaces all bundle items in the target bundle (specified in the path) with all the bundle items of the source bundle (specified by the from_bundle_sid body param)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateReplaceItemsCreateReplaceItemsRequest;
import org.openapis.openapi.models.operations.CreateReplaceItemsRequest;
import org.openapis.openapi.models.operations.CreateReplaceItemsResponse;
import org.openapis.openapi.models.operations.CreateReplaceItemsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateReplaceItemsRequest req = new CreateReplaceItemsRequest("maiores") {{
                requestBody = new CreateReplaceItemsCreateReplaceItemsRequest("molestiae");;
            }};            

            CreateReplaceItemsResponse res = sdk.sdk.createReplaceItems(req, new CreateReplaceItemsSecurity("quod", "quod") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.numbersV2RegulatoryComplianceBundleReplaceItems != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createSupportingDocument

Create a new Supporting Document.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateSupportingDocumentCreateSupportingDocumentRequest;
import org.openapis.openapi.models.operations.CreateSupportingDocumentResponse;
import org.openapis.openapi.models.operations.CreateSupportingDocumentSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateSupportingDocumentCreateSupportingDocumentRequest req = new CreateSupportingDocumentCreateSupportingDocumentRequest("esse", "totam") {{
                attributes = "porro";
            }};            

            CreateSupportingDocumentResponse res = sdk.sdk.createSupportingDocument(req, new CreateSupportingDocumentSecurity("dolorum", "dicta") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.numbersV2RegulatoryComplianceSupportingDocument != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteBundle

Delete a specific Bundle.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteBundleRequest;
import org.openapis.openapi.models.operations.DeleteBundleResponse;
import org.openapis.openapi.models.operations.DeleteBundleSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteBundleRequest req = new DeleteBundleRequest("nam");            

            DeleteBundleResponse res = sdk.sdk.deleteBundle(req, new DeleteBundleSecurity("officia", "occaecati") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteEndUser

Delete a specific End User.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteEndUserRequest;
import org.openapis.openapi.models.operations.DeleteEndUserResponse;
import org.openapis.openapi.models.operations.DeleteEndUserSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteEndUserRequest req = new DeleteEndUserRequest("fugit");            

            DeleteEndUserResponse res = sdk.sdk.deleteEndUser(req, new DeleteEndUserSecurity("deleniti", "hic") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteItemAssignment

Remove an Assignment Item Instance.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteItemAssignmentRequest;
import org.openapis.openapi.models.operations.DeleteItemAssignmentResponse;
import org.openapis.openapi.models.operations.DeleteItemAssignmentSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteItemAssignmentRequest req = new DeleteItemAssignmentRequest("optio", "totam");            

            DeleteItemAssignmentResponse res = sdk.sdk.deleteItemAssignment(req, new DeleteItemAssignmentSecurity("beatae", "commodi") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteSupportingDocument

Delete a specific Supporting Document.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSupportingDocumentRequest;
import org.openapis.openapi.models.operations.DeleteSupportingDocumentResponse;
import org.openapis.openapi.models.operations.DeleteSupportingDocumentSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteSupportingDocumentRequest req = new DeleteSupportingDocumentRequest("molestiae");            

            DeleteSupportingDocumentResponse res = sdk.sdk.deleteSupportingDocument(req, new DeleteSupportingDocumentSecurity("modi", "qui") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchBundle

Fetch a specific Bundle instance.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchBundleRequest;
import org.openapis.openapi.models.operations.FetchBundleResponse;
import org.openapis.openapi.models.operations.FetchBundleSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchBundleRequest req = new FetchBundleRequest("impedit");            

            FetchBundleResponse res = sdk.sdk.fetchBundle(req, new FetchBundleSecurity("cum", "esse") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.numbersV2RegulatoryComplianceBundle != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchEndUser

Fetch specific End User Instance.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchEndUserRequest;
import org.openapis.openapi.models.operations.FetchEndUserResponse;
import org.openapis.openapi.models.operations.FetchEndUserSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchEndUserRequest req = new FetchEndUserRequest("ipsum");            

            FetchEndUserResponse res = sdk.sdk.fetchEndUser(req, new FetchEndUserSecurity("excepturi", "aspernatur") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.numbersV2RegulatoryComplianceEndUser != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchEndUserType

Fetch a specific End-User Type Instance.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchEndUserTypeRequest;
import org.openapis.openapi.models.operations.FetchEndUserTypeResponse;
import org.openapis.openapi.models.operations.FetchEndUserTypeSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchEndUserTypeRequest req = new FetchEndUserTypeRequest("perferendis");            

            FetchEndUserTypeResponse res = sdk.sdk.fetchEndUserType(req, new FetchEndUserTypeSecurity("ad", "natus") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.numbersV2RegulatoryComplianceEndUserType != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchEvaluation

Fetch specific Evaluation Instance.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchEvaluationRequest;
import org.openapis.openapi.models.operations.FetchEvaluationResponse;
import org.openapis.openapi.models.operations.FetchEvaluationSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchEvaluationRequest req = new FetchEvaluationRequest("sed", "iste");            

            FetchEvaluationResponse res = sdk.sdk.fetchEvaluation(req, new FetchEvaluationSecurity("dolor", "natus") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.numbersV2RegulatoryComplianceBundleEvaluation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchItemAssignment

Fetch specific Assigned Item Instance.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchItemAssignmentRequest;
import org.openapis.openapi.models.operations.FetchItemAssignmentResponse;
import org.openapis.openapi.models.operations.FetchItemAssignmentSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchItemAssignmentRequest req = new FetchItemAssignmentRequest("laboriosam", "hic");            

            FetchItemAssignmentResponse res = sdk.sdk.fetchItemAssignment(req, new FetchItemAssignmentSecurity("saepe", "fuga") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.numbersV2RegulatoryComplianceBundleItemAssignment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchRegulation

Fetch specific Regulation Instance.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchRegulationRequest;
import org.openapis.openapi.models.operations.FetchRegulationResponse;
import org.openapis.openapi.models.operations.FetchRegulationSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchRegulationRequest req = new FetchRegulationRequest("in");            

            FetchRegulationResponse res = sdk.sdk.fetchRegulation(req, new FetchRegulationSecurity("corporis", "iste") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.numbersV2RegulatoryComplianceRegulation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchSupportingDocument

Fetch specific Supporting Document Instance.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchSupportingDocumentRequest;
import org.openapis.openapi.models.operations.FetchSupportingDocumentResponse;
import org.openapis.openapi.models.operations.FetchSupportingDocumentSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchSupportingDocumentRequest req = new FetchSupportingDocumentRequest("iure");            

            FetchSupportingDocumentResponse res = sdk.sdk.fetchSupportingDocument(req, new FetchSupportingDocumentSecurity("saepe", "quidem") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.numbersV2RegulatoryComplianceSupportingDocument != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchSupportingDocumentType

Fetch a specific Supporting Document Type Instance.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchSupportingDocumentTypeRequest;
import org.openapis.openapi.models.operations.FetchSupportingDocumentTypeResponse;
import org.openapis.openapi.models.operations.FetchSupportingDocumentTypeSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchSupportingDocumentTypeRequest req = new FetchSupportingDocumentTypeRequest("architecto");            

            FetchSupportingDocumentTypeResponse res = sdk.sdk.fetchSupportingDocumentType(req, new FetchSupportingDocumentTypeSecurity("ipsa", "reiciendis") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.numbersV2RegulatoryComplianceSupportingDocumentType != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listBundle

Retrieve a list of all Bundles for an account.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListBundleRequest;
import org.openapis.openapi.models.operations.ListBundleResponse;
import org.openapis.openapi.models.operations.ListBundleSecurity;
import org.openapis.openapi.models.shared.BundleEnumSortByEnum;
import org.openapis.openapi.models.shared.BundleEnumSortDirectionEnum;
import org.openapis.openapi.models.shared.BundleEnumStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListBundleRequest req = new ListBundleRequest() {{
                friendlyName = "est";
                hasValidUntilDate = false;
                isoCountry = "mollitia";
                numberType = "laborum";
                page = 170909L;
                pageSize = 210382L;
                pageToken = "corporis";
                regulationSid = "explicabo";
                sortBy = BundleEnumSortByEnum.DATE_UPDATED;
                sortDirection = BundleEnumSortDirectionEnum.ASC;
                status = BundleEnumStatusEnum.TWILIO_REJECTED;
                validUntilDate = OffsetDateTime.parse("2022-09-04T08:35:09.957Z");
                validUntilDateLessThan = OffsetDateTime.parse("2022-12-03T22:47:10.600Z");
                validUntilDateGreaterThan = OffsetDateTime.parse("2022-05-14T11:45:33.094Z");
            }};            

            ListBundleResponse res = sdk.sdk.listBundle(req, new ListBundleSecurity("doloribus", "sapiente") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listBundleResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listBundleCopy

Retrieve a list of all Bundles Copies for a Bundle.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListBundleCopyRequest;
import org.openapis.openapi.models.operations.ListBundleCopyResponse;
import org.openapis.openapi.models.operations.ListBundleCopySecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListBundleCopyRequest req = new ListBundleCopyRequest("architecto") {{
                page = 652790L;
                pageSize = 208876L;
                pageToken = "culpa";
            }};            

            ListBundleCopyResponse res = sdk.sdk.listBundleCopy(req, new ListBundleCopySecurity("consequuntur", "repellat") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listBundleCopyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listEndUser

Retrieve a list of all End User for an account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListEndUserRequest;
import org.openapis.openapi.models.operations.ListEndUserResponse;
import org.openapis.openapi.models.operations.ListEndUserSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListEndUserRequest req = new ListEndUserRequest() {{
                page = 653108L;
                pageSize = 581850L;
                pageToken = "numquam";
            }};            

            ListEndUserResponse res = sdk.sdk.listEndUser(req, new ListEndUserSecurity("commodi", "quam") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listEndUserResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listEndUserType

Retrieve a list of all End-User Types.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListEndUserTypeRequest;
import org.openapis.openapi.models.operations.ListEndUserTypeResponse;
import org.openapis.openapi.models.operations.ListEndUserTypeSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListEndUserTypeRequest req = new ListEndUserTypeRequest() {{
                page = 474697L;
                pageSize = 244425L;
                pageToken = "error";
            }};            

            ListEndUserTypeResponse res = sdk.sdk.listEndUserType(req, new ListEndUserTypeSecurity("quia", "quis") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listEndUserTypeResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listEvaluation

Retrieve a list of Evaluations associated to the Bundle resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListEvaluationRequest;
import org.openapis.openapi.models.operations.ListEvaluationResponse;
import org.openapis.openapi.models.operations.ListEvaluationSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListEvaluationRequest req = new ListEvaluationRequest("vitae") {{
                page = 674752L;
                pageSize = 656330L;
                pageToken = "enim";
            }};            

            ListEvaluationResponse res = sdk.sdk.listEvaluation(req, new ListEvaluationSecurity("odit", "quo") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listEvaluationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listItemAssignment

Retrieve a list of all Assigned Items for an account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListItemAssignmentRequest;
import org.openapis.openapi.models.operations.ListItemAssignmentResponse;
import org.openapis.openapi.models.operations.ListItemAssignmentSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListItemAssignmentRequest req = new ListItemAssignmentRequest("sequi") {{
                page = 949572L;
                pageSize = 368725L;
                pageToken = "id";
            }};            

            ListItemAssignmentResponse res = sdk.sdk.listItemAssignment(req, new ListItemAssignmentSecurity("possimus", "aut") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listItemAssignmentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listRegulation

Retrieve a list of all Regulations.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListRegulationRequest;
import org.openapis.openapi.models.operations.ListRegulationResponse;
import org.openapis.openapi.models.operations.ListRegulationSecurity;
import org.openapis.openapi.models.shared.RegulationEnumEndUserTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListRegulationRequest req = new ListRegulationRequest() {{
                endUserType = RegulationEnumEndUserTypeEnum.INDIVIDUAL;
                isoCountry = "error";
                numberType = "temporibus";
                page = 673660L;
                pageSize = 96098L;
                pageToken = "reiciendis";
            }};            

            ListRegulationResponse res = sdk.sdk.listRegulation(req, new ListRegulationSecurity("voluptatibus", "vero") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listRegulationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listSupportingDocument

Retrieve a list of all Supporting Document for an account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListSupportingDocumentRequest;
import org.openapis.openapi.models.operations.ListSupportingDocumentResponse;
import org.openapis.openapi.models.operations.ListSupportingDocumentSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListSupportingDocumentRequest req = new ListSupportingDocumentRequest() {{
                page = 468651L;
                pageSize = 509624L;
                pageToken = "voluptatibus";
            }};            

            ListSupportingDocumentResponse res = sdk.sdk.listSupportingDocument(req, new ListSupportingDocumentSecurity("ipsa", "omnis") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listSupportingDocumentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listSupportingDocumentType

Retrieve a list of all Supporting Document Types.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListSupportingDocumentTypeRequest;
import org.openapis.openapi.models.operations.ListSupportingDocumentTypeResponse;
import org.openapis.openapi.models.operations.ListSupportingDocumentTypeSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListSupportingDocumentTypeRequest req = new ListSupportingDocumentTypeRequest() {{
                page = 451159L;
                pageSize = 739264L;
                pageToken = "perferendis";
            }};            

            ListSupportingDocumentTypeResponse res = sdk.sdk.listSupportingDocumentType(req, new ListSupportingDocumentTypeSecurity("doloremque", "reprehenderit") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listSupportingDocumentTypeResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateBundle

Updates a Bundle in an account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateBundleRequest;
import org.openapis.openapi.models.operations.UpdateBundleResponse;
import org.openapis.openapi.models.operations.UpdateBundleSecurity;
import org.openapis.openapi.models.operations.UpdateBundleUpdateBundleRequest;
import org.openapis.openapi.models.shared.BundleEnumStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateBundleRequest req = new UpdateBundleRequest("ut") {{
                requestBody = new UpdateBundleUpdateBundleRequest() {{
                    email = "Blanche48@hotmail.com";
                    friendlyName = "dicta";
                    status = BundleEnumStatusEnum.TWILIO_APPROVED;
                    statusCallback = "http://unacceptable-hare.org";
                }};;
            }};            

            UpdateBundleResponse res = sdk.sdk.updateBundle(req, new UpdateBundleSecurity("quae", "ipsum") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.numbersV2RegulatoryComplianceBundle != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateEndUser

Update an existing End User.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateEndUserRequest;
import org.openapis.openapi.models.operations.UpdateEndUserResponse;
import org.openapis.openapi.models.operations.UpdateEndUserSecurity;
import org.openapis.openapi.models.operations.UpdateEndUserUpdateEndUserRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateEndUserRequest req = new UpdateEndUserRequest("quidem") {{
                requestBody = new UpdateEndUserUpdateEndUserRequest() {{
                    attributes = "molestias";
                    friendlyName = "excepturi";
                }};;
            }};            

            UpdateEndUserResponse res = sdk.sdk.updateEndUser(req, new UpdateEndUserSecurity("pariatur", "modi") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.numbersV2RegulatoryComplianceEndUser != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateSupportingDocument

Update an existing Supporting Document.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateSupportingDocumentRequest;
import org.openapis.openapi.models.operations.UpdateSupportingDocumentResponse;
import org.openapis.openapi.models.operations.UpdateSupportingDocumentSecurity;
import org.openapis.openapi.models.operations.UpdateSupportingDocumentUpdateSupportingDocumentRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateSupportingDocumentRequest req = new UpdateSupportingDocumentRequest("praesentium") {{
                requestBody = new UpdateSupportingDocumentUpdateSupportingDocumentRequest() {{
                    attributes = "rem";
                    friendlyName = "voluptates";
                }};;
            }};            

            UpdateSupportingDocumentResponse res = sdk.sdk.updateSupportingDocument(req, new UpdateSupportingDocumentSecurity("quasi", "repudiandae") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.numbersV2RegulatoryComplianceSupportingDocument != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
