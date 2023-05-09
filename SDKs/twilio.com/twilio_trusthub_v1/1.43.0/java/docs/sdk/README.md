# SDK

## Overview

This is the public Twilio REST API.

### Available Operations

* [createCustomerProfile](#createcustomerprofile) - Create a new Customer-Profile.
* [createCustomerProfileChannelEndpointAssignment](#createcustomerprofilechannelendpointassignment) - Create a new Assigned Item.
* [createCustomerProfileEntityAssignment](#createcustomerprofileentityassignment) - Create a new Assigned Item.
* [createCustomerProfileEvaluation](#createcustomerprofileevaluation) - Create a new Evaluation
* [createEndUser](#createenduser) - Create a new End User.
* [createSupportingDocument](#createsupportingdocument) - Create a new Supporting Document.
* [createTrustProduct](#createtrustproduct) - Create a new Customer-Profile.
* [createTrustProductChannelEndpointAssignment](#createtrustproductchannelendpointassignment) - Create a new Assigned Item.
* [createTrustProductEntityAssignment](#createtrustproductentityassignment) - Create a new Assigned Item.
* [createTrustProductEvaluation](#createtrustproductevaluation) - Create a new Evaluation
* [deleteCustomerProfile](#deletecustomerprofile) - Delete a specific Customer-Profile.
* [deleteCustomerProfileChannelEndpointAssignment](#deletecustomerprofilechannelendpointassignment) - Remove an Assignment Item Instance.
* [deleteCustomerProfileEntityAssignment](#deletecustomerprofileentityassignment) - Remove an Assignment Item Instance.
* [deleteEndUser](#deleteenduser) - Delete a specific End User.
* [deleteSupportingDocument](#deletesupportingdocument) - Delete a specific Supporting Document.
* [deleteTrustProduct](#deletetrustproduct) - Delete a specific Customer-Profile.
* [deleteTrustProductChannelEndpointAssignment](#deletetrustproductchannelendpointassignment) - Remove an Assignment Item Instance.
* [deleteTrustProductEntityAssignment](#deletetrustproductentityassignment) - Remove an Assignment Item Instance.
* [fetchCustomerProfile](#fetchcustomerprofile) - Fetch a specific Customer-Profile instance.
* [fetchCustomerProfileChannelEndpointAssignment](#fetchcustomerprofilechannelendpointassignment) - Fetch specific Assigned Item Instance.
* [fetchCustomerProfileEntityAssignment](#fetchcustomerprofileentityassignment) - Fetch specific Assigned Item Instance.
* [fetchCustomerProfileEvaluation](#fetchcustomerprofileevaluation) - Fetch specific Evaluation Instance.
* [fetchEndUser](#fetchenduser) - Fetch specific End User Instance.
* [fetchEndUserType](#fetchendusertype) - Fetch a specific End-User Type Instance.
* [fetchPolicies](#fetchpolicies) - Fetch specific Policy Instance.
* [fetchSupportingDocument](#fetchsupportingdocument) - Fetch specific Supporting Document Instance.
* [fetchSupportingDocumentType](#fetchsupportingdocumenttype) - Fetch a specific Supporting Document Type Instance.
* [fetchTrustProduct](#fetchtrustproduct) - Fetch a specific Customer-Profile instance.
* [fetchTrustProductChannelEndpointAssignment](#fetchtrustproductchannelendpointassignment) - Fetch specific Assigned Item Instance.
* [fetchTrustProductEntityAssignment](#fetchtrustproductentityassignment) - Fetch specific Assigned Item Instance.
* [fetchTrustProductEvaluation](#fetchtrustproductevaluation) - Fetch specific Evaluation Instance.
* [listCustomerProfile](#listcustomerprofile) - Retrieve a list of all Customer-Profiles for an account.
* [listCustomerProfileChannelEndpointAssignment](#listcustomerprofilechannelendpointassignment) - Retrieve a list of all Assigned Items for an account.
* [listCustomerProfileEntityAssignment](#listcustomerprofileentityassignment) - Retrieve a list of all Assigned Items for an account.
* [listCustomerProfileEvaluation](#listcustomerprofileevaluation) - Retrieve a list of Evaluations associated to the customer_profile resource.
* [listEndUser](#listenduser) - Retrieve a list of all End User for an account.
* [listEndUserType](#listendusertype) - Retrieve a list of all End-User Types.
* [listPolicies](#listpolicies) - Retrieve a list of all Policys.
* [listSupportingDocument](#listsupportingdocument) - Retrieve a list of all Supporting Document for an account.
* [listSupportingDocumentType](#listsupportingdocumenttype) - Retrieve a list of all Supporting Document Types.
* [listTrustProduct](#listtrustproduct) - Retrieve a list of all Customer-Profiles for an account.
* [listTrustProductChannelEndpointAssignment](#listtrustproductchannelendpointassignment) - Retrieve a list of all Assigned Items for an account.
* [listTrustProductEntityAssignment](#listtrustproductentityassignment) - Retrieve a list of all Assigned Items for an account.
* [listTrustProductEvaluation](#listtrustproductevaluation) - Retrieve a list of Evaluations associated to the trust_product resource.
* [updateCustomerProfile](#updatecustomerprofile) - Updates a Customer-Profile in an account.
* [updateEndUser](#updateenduser) - Update an existing End User.
* [updateSupportingDocument](#updatesupportingdocument) - Update an existing Supporting Document.
* [updateTrustProduct](#updatetrustproduct) - Updates a Customer-Profile in an account.

## createCustomerProfile

Create a new Customer-Profile.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateCustomerProfileCreateCustomerProfileRequest;
import org.openapis.openapi.models.operations.CreateCustomerProfileResponse;
import org.openapis.openapi.models.operations.CreateCustomerProfileSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateCustomerProfileCreateCustomerProfileRequest req = new CreateCustomerProfileCreateCustomerProfileRequest("error", "deserunt", "suscipit") {{
                statusCallback = "http://fond-teen.com";
            }};            

            CreateCustomerProfileResponse res = sdk.sdk.createCustomerProfile(req, new CreateCustomerProfileSecurity("delectus", "tempora") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.trusthubV1CustomerProfile != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createCustomerProfileChannelEndpointAssignment

Create a new Assigned Item.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateCustomerProfileChannelEndpointAssignmentCreateCustomerProfileChannelEndpointAssignmentRequest;
import org.openapis.openapi.models.operations.CreateCustomerProfileChannelEndpointAssignmentRequest;
import org.openapis.openapi.models.operations.CreateCustomerProfileChannelEndpointAssignmentResponse;
import org.openapis.openapi.models.operations.CreateCustomerProfileChannelEndpointAssignmentSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateCustomerProfileChannelEndpointAssignmentRequest req = new CreateCustomerProfileChannelEndpointAssignmentRequest("suscipit") {{
                requestBody = new CreateCustomerProfileChannelEndpointAssignmentCreateCustomerProfileChannelEndpointAssignmentRequest("molestiae", "minus");;
            }};            

            CreateCustomerProfileChannelEndpointAssignmentResponse res = sdk.sdk.createCustomerProfileChannelEndpointAssignment(req, new CreateCustomerProfileChannelEndpointAssignmentSecurity("placeat", "voluptatum") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.trusthubV1CustomerProfileCustomerProfileChannelEndpointAssignment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createCustomerProfileEntityAssignment

Create a new Assigned Item.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateCustomerProfileEntityAssignmentCreateCustomerProfileEntityAssignmentRequest;
import org.openapis.openapi.models.operations.CreateCustomerProfileEntityAssignmentRequest;
import org.openapis.openapi.models.operations.CreateCustomerProfileEntityAssignmentResponse;
import org.openapis.openapi.models.operations.CreateCustomerProfileEntityAssignmentSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateCustomerProfileEntityAssignmentRequest req = new CreateCustomerProfileEntityAssignmentRequest("iusto") {{
                requestBody = new CreateCustomerProfileEntityAssignmentCreateCustomerProfileEntityAssignmentRequest("excepturi");;
            }};            

            CreateCustomerProfileEntityAssignmentResponse res = sdk.sdk.createCustomerProfileEntityAssignment(req, new CreateCustomerProfileEntityAssignmentSecurity("nisi", "recusandae") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.trusthubV1CustomerProfileCustomerProfileEntityAssignment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createCustomerProfileEvaluation

Create a new Evaluation

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateCustomerProfileEvaluationCreateCustomerProfileEvaluationRequest;
import org.openapis.openapi.models.operations.CreateCustomerProfileEvaluationRequest;
import org.openapis.openapi.models.operations.CreateCustomerProfileEvaluationResponse;
import org.openapis.openapi.models.operations.CreateCustomerProfileEvaluationSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateCustomerProfileEvaluationRequest req = new CreateCustomerProfileEvaluationRequest("temporibus") {{
                requestBody = new CreateCustomerProfileEvaluationCreateCustomerProfileEvaluationRequest("ab");;
            }};            

            CreateCustomerProfileEvaluationResponse res = sdk.sdk.createCustomerProfileEvaluation(req, new CreateCustomerProfileEvaluationSecurity("quis", "veritatis") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.trusthubV1CustomerProfileCustomerProfileEvaluation != null) {
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

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateEndUserCreateEndUserRequest req = new CreateEndUserCreateEndUserRequest("deserunt", "perferendis") {{
                attributes = "ipsam";
            }};            

            CreateEndUserResponse res = sdk.sdk.createEndUser(req, new CreateEndUserSecurity("repellendus", "sapiente") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.trusthubV1EndUser != null) {
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

            CreateSupportingDocumentCreateSupportingDocumentRequest req = new CreateSupportingDocumentCreateSupportingDocumentRequest("quo", "odit") {{
                attributes = "at";
            }};            

            CreateSupportingDocumentResponse res = sdk.sdk.createSupportingDocument(req, new CreateSupportingDocumentSecurity("at", "maiores") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.trusthubV1SupportingDocument != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createTrustProduct

Create a new Customer-Profile.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateTrustProductCreateTrustProductRequest;
import org.openapis.openapi.models.operations.CreateTrustProductResponse;
import org.openapis.openapi.models.operations.CreateTrustProductSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateTrustProductCreateTrustProductRequest req = new CreateTrustProductCreateTrustProductRequest("molestiae", "quod", "quod") {{
                statusCallback = "http://meager-seabass.net";
            }};            

            CreateTrustProductResponse res = sdk.sdk.createTrustProduct(req, new CreateTrustProductSecurity("dicta", "nam") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.trusthubV1TrustProduct != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createTrustProductChannelEndpointAssignment

Create a new Assigned Item.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateTrustProductChannelEndpointAssignmentCreateTrustProductChannelEndpointAssignmentRequest;
import org.openapis.openapi.models.operations.CreateTrustProductChannelEndpointAssignmentRequest;
import org.openapis.openapi.models.operations.CreateTrustProductChannelEndpointAssignmentResponse;
import org.openapis.openapi.models.operations.CreateTrustProductChannelEndpointAssignmentSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateTrustProductChannelEndpointAssignmentRequest req = new CreateTrustProductChannelEndpointAssignmentRequest("officia") {{
                requestBody = new CreateTrustProductChannelEndpointAssignmentCreateTrustProductChannelEndpointAssignmentRequest("occaecati", "fugit");;
            }};            

            CreateTrustProductChannelEndpointAssignmentResponse res = sdk.sdk.createTrustProductChannelEndpointAssignment(req, new CreateTrustProductChannelEndpointAssignmentSecurity("deleniti", "hic") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.trusthubV1TrustProductTrustProductChannelEndpointAssignment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createTrustProductEntityAssignment

Create a new Assigned Item.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateTrustProductEntityAssignmentCreateTrustProductEntityAssignmentRequest;
import org.openapis.openapi.models.operations.CreateTrustProductEntityAssignmentRequest;
import org.openapis.openapi.models.operations.CreateTrustProductEntityAssignmentResponse;
import org.openapis.openapi.models.operations.CreateTrustProductEntityAssignmentSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateTrustProductEntityAssignmentRequest req = new CreateTrustProductEntityAssignmentRequest("optio") {{
                requestBody = new CreateTrustProductEntityAssignmentCreateTrustProductEntityAssignmentRequest("totam");;
            }};            

            CreateTrustProductEntityAssignmentResponse res = sdk.sdk.createTrustProductEntityAssignment(req, new CreateTrustProductEntityAssignmentSecurity("beatae", "commodi") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.trusthubV1TrustProductTrustProductEntityAssignment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createTrustProductEvaluation

Create a new Evaluation

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateTrustProductEvaluationCreateTrustProductEvaluationRequest;
import org.openapis.openapi.models.operations.CreateTrustProductEvaluationRequest;
import org.openapis.openapi.models.operations.CreateTrustProductEvaluationResponse;
import org.openapis.openapi.models.operations.CreateTrustProductEvaluationSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateTrustProductEvaluationRequest req = new CreateTrustProductEvaluationRequest("molestiae") {{
                requestBody = new CreateTrustProductEvaluationCreateTrustProductEvaluationRequest("modi");;
            }};            

            CreateTrustProductEvaluationResponse res = sdk.sdk.createTrustProductEvaluation(req, new CreateTrustProductEvaluationSecurity("qui", "impedit") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.trusthubV1TrustProductTrustProductEvaluation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteCustomerProfile

Delete a specific Customer-Profile.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteCustomerProfileRequest;
import org.openapis.openapi.models.operations.DeleteCustomerProfileResponse;
import org.openapis.openapi.models.operations.DeleteCustomerProfileSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteCustomerProfileRequest req = new DeleteCustomerProfileRequest("cum");            

            DeleteCustomerProfileResponse res = sdk.sdk.deleteCustomerProfile(req, new DeleteCustomerProfileSecurity("esse", "ipsum") {{
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

## deleteCustomerProfileChannelEndpointAssignment

Remove an Assignment Item Instance.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteCustomerProfileChannelEndpointAssignmentRequest;
import org.openapis.openapi.models.operations.DeleteCustomerProfileChannelEndpointAssignmentResponse;
import org.openapis.openapi.models.operations.DeleteCustomerProfileChannelEndpointAssignmentSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteCustomerProfileChannelEndpointAssignmentRequest req = new DeleteCustomerProfileChannelEndpointAssignmentRequest("excepturi", "aspernatur");            

            DeleteCustomerProfileChannelEndpointAssignmentResponse res = sdk.sdk.deleteCustomerProfileChannelEndpointAssignment(req, new DeleteCustomerProfileChannelEndpointAssignmentSecurity("perferendis", "ad") {{
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

## deleteCustomerProfileEntityAssignment

Remove an Assignment Item Instance.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteCustomerProfileEntityAssignmentRequest;
import org.openapis.openapi.models.operations.DeleteCustomerProfileEntityAssignmentResponse;
import org.openapis.openapi.models.operations.DeleteCustomerProfileEntityAssignmentSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteCustomerProfileEntityAssignmentRequest req = new DeleteCustomerProfileEntityAssignmentRequest("natus", "sed");            

            DeleteCustomerProfileEntityAssignmentResponse res = sdk.sdk.deleteCustomerProfileEntityAssignment(req, new DeleteCustomerProfileEntityAssignmentSecurity("iste", "dolor") {{
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

            DeleteEndUserRequest req = new DeleteEndUserRequest("natus");            

            DeleteEndUserResponse res = sdk.sdk.deleteEndUser(req, new DeleteEndUserSecurity("laboriosam", "hic") {{
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

            DeleteSupportingDocumentRequest req = new DeleteSupportingDocumentRequest("saepe");            

            DeleteSupportingDocumentResponse res = sdk.sdk.deleteSupportingDocument(req, new DeleteSupportingDocumentSecurity("fuga", "in") {{
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

## deleteTrustProduct

Delete a specific Customer-Profile.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteTrustProductRequest;
import org.openapis.openapi.models.operations.DeleteTrustProductResponse;
import org.openapis.openapi.models.operations.DeleteTrustProductSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteTrustProductRequest req = new DeleteTrustProductRequest("corporis");            

            DeleteTrustProductResponse res = sdk.sdk.deleteTrustProduct(req, new DeleteTrustProductSecurity("iste", "iure") {{
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

## deleteTrustProductChannelEndpointAssignment

Remove an Assignment Item Instance.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteTrustProductChannelEndpointAssignmentRequest;
import org.openapis.openapi.models.operations.DeleteTrustProductChannelEndpointAssignmentResponse;
import org.openapis.openapi.models.operations.DeleteTrustProductChannelEndpointAssignmentSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteTrustProductChannelEndpointAssignmentRequest req = new DeleteTrustProductChannelEndpointAssignmentRequest("saepe", "quidem");            

            DeleteTrustProductChannelEndpointAssignmentResponse res = sdk.sdk.deleteTrustProductChannelEndpointAssignment(req, new DeleteTrustProductChannelEndpointAssignmentSecurity("architecto", "ipsa") {{
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

## deleteTrustProductEntityAssignment

Remove an Assignment Item Instance.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteTrustProductEntityAssignmentRequest;
import org.openapis.openapi.models.operations.DeleteTrustProductEntityAssignmentResponse;
import org.openapis.openapi.models.operations.DeleteTrustProductEntityAssignmentSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteTrustProductEntityAssignmentRequest req = new DeleteTrustProductEntityAssignmentRequest("reiciendis", "est");            

            DeleteTrustProductEntityAssignmentResponse res = sdk.sdk.deleteTrustProductEntityAssignment(req, new DeleteTrustProductEntityAssignmentSecurity("mollitia", "laborum") {{
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

## fetchCustomerProfile

Fetch a specific Customer-Profile instance.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchCustomerProfileRequest;
import org.openapis.openapi.models.operations.FetchCustomerProfileResponse;
import org.openapis.openapi.models.operations.FetchCustomerProfileSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchCustomerProfileRequest req = new FetchCustomerProfileRequest("dolores");            

            FetchCustomerProfileResponse res = sdk.sdk.fetchCustomerProfile(req, new FetchCustomerProfileSecurity("dolorem", "corporis") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.trusthubV1CustomerProfile != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchCustomerProfileChannelEndpointAssignment

Fetch specific Assigned Item Instance.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchCustomerProfileChannelEndpointAssignmentRequest;
import org.openapis.openapi.models.operations.FetchCustomerProfileChannelEndpointAssignmentResponse;
import org.openapis.openapi.models.operations.FetchCustomerProfileChannelEndpointAssignmentSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchCustomerProfileChannelEndpointAssignmentRequest req = new FetchCustomerProfileChannelEndpointAssignmentRequest("explicabo", "nobis");            

            FetchCustomerProfileChannelEndpointAssignmentResponse res = sdk.sdk.fetchCustomerProfileChannelEndpointAssignment(req, new FetchCustomerProfileChannelEndpointAssignmentSecurity("enim", "omnis") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.trusthubV1CustomerProfileCustomerProfileChannelEndpointAssignment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchCustomerProfileEntityAssignment

Fetch specific Assigned Item Instance.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchCustomerProfileEntityAssignmentRequest;
import org.openapis.openapi.models.operations.FetchCustomerProfileEntityAssignmentResponse;
import org.openapis.openapi.models.operations.FetchCustomerProfileEntityAssignmentSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchCustomerProfileEntityAssignmentRequest req = new FetchCustomerProfileEntityAssignmentRequest("nemo", "minima");            

            FetchCustomerProfileEntityAssignmentResponse res = sdk.sdk.fetchCustomerProfileEntityAssignment(req, new FetchCustomerProfileEntityAssignmentSecurity("excepturi", "accusantium") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.trusthubV1CustomerProfileCustomerProfileEntityAssignment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchCustomerProfileEvaluation

Fetch specific Evaluation Instance.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchCustomerProfileEvaluationRequest;
import org.openapis.openapi.models.operations.FetchCustomerProfileEvaluationResponse;
import org.openapis.openapi.models.operations.FetchCustomerProfileEvaluationSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchCustomerProfileEvaluationRequest req = new FetchCustomerProfileEvaluationRequest("iure", "culpa");            

            FetchCustomerProfileEvaluationResponse res = sdk.sdk.fetchCustomerProfileEvaluation(req, new FetchCustomerProfileEvaluationSecurity("doloribus", "sapiente") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.trusthubV1CustomerProfileCustomerProfileEvaluation != null) {
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

            FetchEndUserRequest req = new FetchEndUserRequest("architecto");            

            FetchEndUserResponse res = sdk.sdk.fetchEndUser(req, new FetchEndUserSecurity("mollitia", "dolorem") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.trusthubV1EndUser != null) {
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

            FetchEndUserTypeRequest req = new FetchEndUserTypeRequest("culpa");            

            FetchEndUserTypeResponse res = sdk.sdk.fetchEndUserType(req, new FetchEndUserTypeSecurity("consequuntur", "repellat") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.trusthubV1EndUserType != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchPolicies

Fetch specific Policy Instance.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchPoliciesRequest;
import org.openapis.openapi.models.operations.FetchPoliciesResponse;
import org.openapis.openapi.models.operations.FetchPoliciesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchPoliciesRequest req = new FetchPoliciesRequest("mollitia");            

            FetchPoliciesResponse res = sdk.sdk.fetchPolicies(req, new FetchPoliciesSecurity("occaecati", "numquam") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.trusthubV1Policies != null) {
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

            FetchSupportingDocumentRequest req = new FetchSupportingDocumentRequest("commodi");            

            FetchSupportingDocumentResponse res = sdk.sdk.fetchSupportingDocument(req, new FetchSupportingDocumentSecurity("quam", "molestiae") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.trusthubV1SupportingDocument != null) {
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

            FetchSupportingDocumentTypeRequest req = new FetchSupportingDocumentTypeRequest("velit");            

            FetchSupportingDocumentTypeResponse res = sdk.sdk.fetchSupportingDocumentType(req, new FetchSupportingDocumentTypeSecurity("error", "quia") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.trusthubV1SupportingDocumentType != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchTrustProduct

Fetch a specific Customer-Profile instance.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchTrustProductRequest;
import org.openapis.openapi.models.operations.FetchTrustProductResponse;
import org.openapis.openapi.models.operations.FetchTrustProductSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchTrustProductRequest req = new FetchTrustProductRequest("quis");            

            FetchTrustProductResponse res = sdk.sdk.fetchTrustProduct(req, new FetchTrustProductSecurity("vitae", "laborum") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.trusthubV1TrustProduct != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchTrustProductChannelEndpointAssignment

Fetch specific Assigned Item Instance.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchTrustProductChannelEndpointAssignmentRequest;
import org.openapis.openapi.models.operations.FetchTrustProductChannelEndpointAssignmentResponse;
import org.openapis.openapi.models.operations.FetchTrustProductChannelEndpointAssignmentSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchTrustProductChannelEndpointAssignmentRequest req = new FetchTrustProductChannelEndpointAssignmentRequest("animi", "enim");            

            FetchTrustProductChannelEndpointAssignmentResponse res = sdk.sdk.fetchTrustProductChannelEndpointAssignment(req, new FetchTrustProductChannelEndpointAssignmentSecurity("odit", "quo") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.trusthubV1TrustProductTrustProductChannelEndpointAssignment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchTrustProductEntityAssignment

Fetch specific Assigned Item Instance.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchTrustProductEntityAssignmentRequest;
import org.openapis.openapi.models.operations.FetchTrustProductEntityAssignmentResponse;
import org.openapis.openapi.models.operations.FetchTrustProductEntityAssignmentSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchTrustProductEntityAssignmentRequest req = new FetchTrustProductEntityAssignmentRequest("sequi", "tenetur");            

            FetchTrustProductEntityAssignmentResponse res = sdk.sdk.fetchTrustProductEntityAssignment(req, new FetchTrustProductEntityAssignmentSecurity("ipsam", "id") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.trusthubV1TrustProductTrustProductEntityAssignment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchTrustProductEvaluation

Fetch specific Evaluation Instance.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchTrustProductEvaluationRequest;
import org.openapis.openapi.models.operations.FetchTrustProductEvaluationResponse;
import org.openapis.openapi.models.operations.FetchTrustProductEvaluationSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchTrustProductEvaluationRequest req = new FetchTrustProductEvaluationRequest("possimus", "aut");            

            FetchTrustProductEvaluationResponse res = sdk.sdk.fetchTrustProductEvaluation(req, new FetchTrustProductEvaluationSecurity("quasi", "error") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.trusthubV1TrustProductTrustProductEvaluation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listCustomerProfile

Retrieve a list of all Customer-Profiles for an account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListCustomerProfileRequest;
import org.openapis.openapi.models.operations.ListCustomerProfileResponse;
import org.openapis.openapi.models.operations.ListCustomerProfileSecurity;
import org.openapis.openapi.models.shared.CustomerProfileEnumStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListCustomerProfileRequest req = new ListCustomerProfileRequest() {{
                friendlyName = "temporibus";
                page = 673660L;
                pageSize = 96098L;
                pageToken = "reiciendis";
                policySid = "voluptatibus";
                status = CustomerProfileEnumStatusEnum.TWILIO_APPROVED;
            }};            

            ListCustomerProfileResponse res = sdk.sdk.listCustomerProfile(req, new ListCustomerProfileSecurity("nihil", "praesentium") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listCustomerProfileResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listCustomerProfileChannelEndpointAssignment

Retrieve a list of all Assigned Items for an account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListCustomerProfileChannelEndpointAssignmentRequest;
import org.openapis.openapi.models.operations.ListCustomerProfileChannelEndpointAssignmentResponse;
import org.openapis.openapi.models.operations.ListCustomerProfileChannelEndpointAssignmentSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListCustomerProfileChannelEndpointAssignmentRequest req = new ListCustomerProfileChannelEndpointAssignmentRequest("voluptatibus") {{
                channelEndpointSid = "ipsa";
                channelEndpointSids = "omnis";
                page = 451159L;
                pageSize = 739264L;
                pageToken = "perferendis";
            }};            

            ListCustomerProfileChannelEndpointAssignmentResponse res = sdk.sdk.listCustomerProfileChannelEndpointAssignment(req, new ListCustomerProfileChannelEndpointAssignmentSecurity("doloremque", "reprehenderit") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listCustomerProfileChannelEndpointAssignmentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listCustomerProfileEntityAssignment

Retrieve a list of all Assigned Items for an account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListCustomerProfileEntityAssignmentRequest;
import org.openapis.openapi.models.operations.ListCustomerProfileEntityAssignmentResponse;
import org.openapis.openapi.models.operations.ListCustomerProfileEntityAssignmentSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListCustomerProfileEntityAssignmentRequest req = new ListCustomerProfileEntityAssignmentRequest("ut") {{
                page = 979587L;
                pageSize = 120196L;
                pageToken = "corporis";
            }};            

            ListCustomerProfileEntityAssignmentResponse res = sdk.sdk.listCustomerProfileEntityAssignment(req, new ListCustomerProfileEntityAssignmentSecurity("dolore", "iusto") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listCustomerProfileEntityAssignmentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listCustomerProfileEvaluation

Retrieve a list of Evaluations associated to the customer_profile resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListCustomerProfileEvaluationRequest;
import org.openapis.openapi.models.operations.ListCustomerProfileEvaluationResponse;
import org.openapis.openapi.models.operations.ListCustomerProfileEvaluationSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListCustomerProfileEvaluationRequest req = new ListCustomerProfileEvaluationRequest("dicta") {{
                page = 688661L;
                pageSize = 317983L;
                pageToken = "accusamus";
            }};            

            ListCustomerProfileEvaluationResponse res = sdk.sdk.listCustomerProfileEvaluation(req, new ListCustomerProfileEvaluationSecurity("commodi", "repudiandae") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listCustomerProfileEvaluationResponse != null) {
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
                page = 64147L;
                pageSize = 216822L;
                pageToken = "quidem";
            }};            

            ListEndUserResponse res = sdk.sdk.listEndUser(req, new ListEndUserSecurity("molestias", "excepturi") {{
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
                page = 865103L;
                pageSize = 265389L;
                pageToken = "praesentium";
            }};            

            ListEndUserTypeResponse res = sdk.sdk.listEndUserType(req, new ListEndUserTypeSecurity("rem", "voluptates") {{
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

## listPolicies

Retrieve a list of all Policys.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListPoliciesRequest;
import org.openapis.openapi.models.operations.ListPoliciesResponse;
import org.openapis.openapi.models.operations.ListPoliciesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListPoliciesRequest req = new ListPoliciesRequest() {{
                page = 93940L;
                pageSize = 921158L;
                pageToken = "sint";
            }};            

            ListPoliciesResponse res = sdk.sdk.listPolicies(req, new ListPoliciesSecurity("veritatis", "itaque") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listPoliciesResponse != null) {
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
                page = 277718L;
                pageSize = 318569L;
                pageToken = "consequatur";
            }};            

            ListSupportingDocumentResponse res = sdk.sdk.listSupportingDocument(req, new ListSupportingDocumentSecurity("est", "quibusdam") {{
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
                page = 131797L;
                pageSize = 647174L;
                pageToken = "distinctio";
            }};            

            ListSupportingDocumentTypeResponse res = sdk.sdk.listSupportingDocumentType(req, new ListSupportingDocumentTypeSecurity("quibusdam", "labore") {{
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

## listTrustProduct

Retrieve a list of all Customer-Profiles for an account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTrustProductRequest;
import org.openapis.openapi.models.operations.ListTrustProductResponse;
import org.openapis.openapi.models.operations.ListTrustProductSecurity;
import org.openapis.openapi.models.shared.TrustProductEnumStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListTrustProductRequest req = new ListTrustProductRequest() {{
                friendlyName = "modi";
                page = 183191L;
                pageSize = 397821L;
                pageToken = "cupiditate";
                policySid = "quos";
                status = TrustProductEnumStatusEnum.DRAFT;
            }};            

            ListTrustProductResponse res = sdk.sdk.listTrustProduct(req, new ListTrustProductSecurity("magni", "assumenda") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listTrustProductResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTrustProductChannelEndpointAssignment

Retrieve a list of all Assigned Items for an account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTrustProductChannelEndpointAssignmentRequest;
import org.openapis.openapi.models.operations.ListTrustProductChannelEndpointAssignmentResponse;
import org.openapis.openapi.models.operations.ListTrustProductChannelEndpointAssignmentSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListTrustProductChannelEndpointAssignmentRequest req = new ListTrustProductChannelEndpointAssignmentRequest("ipsam") {{
                channelEndpointSid = "alias";
                channelEndpointSids = "fugit";
                page = 677817L;
                pageSize = 569618L;
                pageToken = "tempora";
            }};            

            ListTrustProductChannelEndpointAssignmentResponse res = sdk.sdk.listTrustProductChannelEndpointAssignment(req, new ListTrustProductChannelEndpointAssignmentSecurity("facilis", "tempore") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listTrustProductChannelEndpointAssignmentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTrustProductEntityAssignment

Retrieve a list of all Assigned Items for an account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTrustProductEntityAssignmentRequest;
import org.openapis.openapi.models.operations.ListTrustProductEntityAssignmentResponse;
import org.openapis.openapi.models.operations.ListTrustProductEntityAssignmentSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListTrustProductEntityAssignmentRequest req = new ListTrustProductEntityAssignmentRequest("labore") {{
                page = 962189L;
                pageSize = 433288L;
                pageToken = "non";
            }};            

            ListTrustProductEntityAssignmentResponse res = sdk.sdk.listTrustProductEntityAssignment(req, new ListTrustProductEntityAssignmentSecurity("eligendi", "sint") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listTrustProductEntityAssignmentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTrustProductEvaluation

Retrieve a list of Evaluations associated to the trust_product resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTrustProductEvaluationRequest;
import org.openapis.openapi.models.operations.ListTrustProductEvaluationResponse;
import org.openapis.openapi.models.operations.ListTrustProductEvaluationSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListTrustProductEvaluationRequest req = new ListTrustProductEvaluationRequest("aliquid") {{
                page = 592042L;
                pageSize = 896039L;
                pageToken = "sint";
            }};            

            ListTrustProductEvaluationResponse res = sdk.sdk.listTrustProductEvaluation(req, new ListTrustProductEvaluationSecurity("officia", "dolor") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listTrustProductEvaluationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateCustomerProfile

Updates a Customer-Profile in an account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateCustomerProfileRequest;
import org.openapis.openapi.models.operations.UpdateCustomerProfileResponse;
import org.openapis.openapi.models.operations.UpdateCustomerProfileSecurity;
import org.openapis.openapi.models.operations.UpdateCustomerProfileUpdateCustomerProfileRequest;
import org.openapis.openapi.models.shared.CustomerProfileEnumStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateCustomerProfileRequest req = new UpdateCustomerProfileRequest("debitis") {{
                requestBody = new UpdateCustomerProfileUpdateCustomerProfileRequest() {{
                    email = "Marilou_King@hotmail.com";
                    friendlyName = "maiores";
                    status = CustomerProfileEnumStatusEnum.TWILIO_REJECTED;
                    statusCallback = "http://fond-salute.net";
                }};;
            }};            

            UpdateCustomerProfileResponse res = sdk.sdk.updateCustomerProfile(req, new UpdateCustomerProfileSecurity("ea", "aliquid") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.trusthubV1CustomerProfile != null) {
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

            UpdateEndUserRequest req = new UpdateEndUserRequest("laborum") {{
                requestBody = new UpdateEndUserUpdateEndUserRequest() {{
                    attributes = "accusamus";
                    friendlyName = "non";
                }};;
            }};            

            UpdateEndUserResponse res = sdk.sdk.updateEndUser(req, new UpdateEndUserSecurity("occaecati", "enim") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.trusthubV1EndUser != null) {
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

            UpdateSupportingDocumentRequest req = new UpdateSupportingDocumentRequest("accusamus") {{
                requestBody = new UpdateSupportingDocumentUpdateSupportingDocumentRequest() {{
                    attributes = "delectus";
                    friendlyName = "quidem";
                }};;
            }};            

            UpdateSupportingDocumentResponse res = sdk.sdk.updateSupportingDocument(req, new UpdateSupportingDocumentSecurity("provident", "nam") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.trusthubV1SupportingDocument != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateTrustProduct

Updates a Customer-Profile in an account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateTrustProductRequest;
import org.openapis.openapi.models.operations.UpdateTrustProductResponse;
import org.openapis.openapi.models.operations.UpdateTrustProductSecurity;
import org.openapis.openapi.models.operations.UpdateTrustProductUpdateTrustProductRequest;
import org.openapis.openapi.models.shared.TrustProductEnumStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateTrustProductRequest req = new UpdateTrustProductRequest("id") {{
                requestBody = new UpdateTrustProductUpdateTrustProductRequest() {{
                    email = "Kacie64@yahoo.com";
                    friendlyName = "nisi";
                    status = TrustProductEnumStatusEnum.IN_REVIEW;
                    statusCallback = "https://overjoyed-irony.com";
                }};;
            }};            

            UpdateTrustProductResponse res = sdk.sdk.updateTrustProduct(req, new UpdateTrustProductSecurity("nihil", "magnam") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.trusthubV1TrustProduct != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
