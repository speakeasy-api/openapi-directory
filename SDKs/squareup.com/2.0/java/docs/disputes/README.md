# disputes

### Available Operations

* [acceptDispute](#acceptdispute) - AcceptDispute
* [createDisputeEvidenceText](#createdisputeevidencetext) - CreateDisputeEvidenceText
* [deleteDisputeEvidence](#deletedisputeevidence) - DeleteDisputeEvidence
* [listDisputeEvidence](#listdisputeevidence) - ListDisputeEvidence
* [listDisputes](#listdisputes) - ListDisputes
* [retrieveDispute](#retrievedispute) - RetrieveDispute
* [retrieveDisputeEvidence](#retrievedisputeevidence) - RetrieveDisputeEvidence
* [submitEvidence](#submitevidence) - SubmitEvidence

## acceptDispute

Accepts the loss on a dispute. Square returns the disputed amount to the cardholder and
updates the dispute state to ACCEPTED.

Square debits the disputed amount from the seller’s Square account. If the Square account
does not have sufficient funds, Square debits the associated bank account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AcceptDisputeRequest;
import org.openapis.openapi.models.operations.AcceptDisputeResponse;
import org.openapis.openapi.models.operations.AcceptDisputeSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AcceptDisputeRequest req = new AcceptDisputeRequest("sunt");            

            AcceptDisputeResponse res = sdk.disputes.acceptDispute(req, new AcceptDisputeSecurity("quidem") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.acceptDisputeResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createDisputeEvidenceText

Uploads text to use as evidence for a dispute challenge.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateDisputeEvidenceTextRequest;
import org.openapis.openapi.models.operations.CreateDisputeEvidenceTextResponse;
import org.openapis.openapi.models.operations.CreateDisputeEvidenceTextSecurity;
import org.openapis.openapi.models.shared.CreateDisputeEvidenceTextRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateDisputeEvidenceTextRequest req = new CreateDisputeEvidenceTextRequest(                new CreateDisputeEvidenceTextRequest("perspiciatis", "asperiores") {{
                                evidenceType = "eos";
                            }};, "saepe");            

            CreateDisputeEvidenceTextResponse res = sdk.disputes.createDisputeEvidenceText(req, new CreateDisputeEvidenceTextSecurity("ipsa") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.createDisputeEvidenceTextResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteDisputeEvidence

Removes specified evidence from a dispute.

Square does not send the bank any evidence that is removed. Also, you cannot remove evidence after
submitting it to the bank using [SubmitEvidence](https://developer.squareup.com/reference/square_2021-08-18/disputes-api/submit-evidence).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteDisputeEvidenceRequest;
import org.openapis.openapi.models.operations.DeleteDisputeEvidenceResponse;
import org.openapis.openapi.models.operations.DeleteDisputeEvidenceSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteDisputeEvidenceRequest req = new DeleteDisputeEvidenceRequest("esse", "consequuntur");            

            DeleteDisputeEvidenceResponse res = sdk.disputes.deleteDisputeEvidence(req, new DeleteDisputeEvidenceSecurity("aliquam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.deleteDisputeEvidenceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listDisputeEvidence

Returns a list of evidence associated with a dispute.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListDisputeEvidenceRequest;
import org.openapis.openapi.models.operations.ListDisputeEvidenceResponse;
import org.openapis.openapi.models.operations.ListDisputeEvidenceSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListDisputeEvidenceRequest req = new ListDisputeEvidenceRequest("autem") {{
                cursor = "reprehenderit";
            }};            

            ListDisputeEvidenceResponse res = sdk.disputes.listDisputeEvidence(req, new ListDisputeEvidenceSecurity("quidem") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listDisputeEvidenceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listDisputes

Returns a list of disputes associated with a particular account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListDisputesRequest;
import org.openapis.openapi.models.operations.ListDisputesResponse;
import org.openapis.openapi.models.operations.ListDisputesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListDisputesRequest req = new ListDisputesRequest() {{
                cursor = "quas";
                locationId = "officia";
                states = "modi";
            }};            

            ListDisputesResponse res = sdk.disputes.listDisputes(req, new ListDisputesSecurity("alias") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listDisputesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## retrieveDispute

Returns details about a specific dispute.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetrieveDisputeRequest;
import org.openapis.openapi.models.operations.RetrieveDisputeResponse;
import org.openapis.openapi.models.operations.RetrieveDisputeSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetrieveDisputeRequest req = new RetrieveDisputeRequest("nam");            

            RetrieveDisputeResponse res = sdk.disputes.retrieveDispute(req, new RetrieveDisputeSecurity("minus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.retrieveDisputeResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## retrieveDisputeEvidence

Returns the evidence metadata specified by the evidence ID in the request URL path

You must maintain a copy of the evidence you upload if you want to reference it later. You cannot
download the evidence after you upload it.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetrieveDisputeEvidenceRequest;
import org.openapis.openapi.models.operations.RetrieveDisputeEvidenceResponse;
import org.openapis.openapi.models.operations.RetrieveDisputeEvidenceSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetrieveDisputeEvidenceRequest req = new RetrieveDisputeEvidenceRequest("sit", "quis");            

            RetrieveDisputeEvidenceResponse res = sdk.disputes.retrieveDisputeEvidence(req, new RetrieveDisputeEvidenceSecurity("hic") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.retrieveDisputeEvidenceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## submitEvidence

Submits evidence to the cardholder's bank.

Before submitting evidence, Square compiles all available evidence. This includes evidence uploaded
using the [CreateDisputeEvidenceFile](https://developer.squareup.com/reference/square_2021-08-18/disputes-api/create-dispute-evidence-file) and
[CreateDisputeEvidenceText](https://developer.squareup.com/reference/square_2021-08-18/disputes-api/create-dispute-evidence-text) endpoints and
evidence automatically provided by Square, when available.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SubmitEvidenceRequest;
import org.openapis.openapi.models.operations.SubmitEvidenceResponse;
import org.openapis.openapi.models.operations.SubmitEvidenceSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SubmitEvidenceRequest req = new SubmitEvidenceRequest("dolorum");            

            SubmitEvidenceResponse res = sdk.disputes.submitEvidence(req, new SubmitEvidenceSecurity("libero") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.submitEvidenceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
