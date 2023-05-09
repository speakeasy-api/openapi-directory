# Disputes

### Available Operations

* [AcceptDispute](#acceptdispute) - AcceptDispute
* [CreateDisputeEvidenceText](#createdisputeevidencetext) - CreateDisputeEvidenceText
* [DeleteDisputeEvidence](#deletedisputeevidence) - DeleteDisputeEvidence
* [ListDisputeEvidence](#listdisputeevidence) - ListDisputeEvidence
* [ListDisputes](#listdisputes) - ListDisputes
* [RetrieveDispute](#retrievedispute) - RetrieveDispute
* [RetrieveDisputeEvidence](#retrievedisputeevidence) - RetrieveDisputeEvidence
* [SubmitEvidence](#submitevidence) - SubmitEvidence

## AcceptDispute

Accepts the loss on a dispute. Square returns the disputed amount to the cardholder and
updates the dispute state to ACCEPTED.

Square debits the disputed amount from the seller’s Square account. If the Square account
does not have sufficient funds, Square debits the associated bank account.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Disputes.AcceptDispute(ctx, operations.AcceptDisputeRequest{
        DisputeID: "aperiam",
    }, operations.AcceptDisputeSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AcceptDisputeResponse != nil {
        // handle response
    }
}
```

## CreateDisputeEvidenceText

Uploads text to use as evidence for a dispute challenge.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Disputes.CreateDisputeEvidenceText(ctx, operations.CreateDisputeEvidenceTextRequest{
        CreateDisputeEvidenceTextRequest: shared.CreateDisputeEvidenceTextRequest{
            EvidenceText: "itaque",
            EvidenceType: sdk.String("quaerat"),
            IdempotencyKey: "repellat",
        },
        DisputeID: "necessitatibus",
    }, operations.CreateDisputeEvidenceTextSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateDisputeEvidenceTextResponse != nil {
        // handle response
    }
}
```

## DeleteDisputeEvidence

Removes specified evidence from a dispute.

Square does not send the bank any evidence that is removed. Also, you cannot remove evidence after
submitting it to the bank using [SubmitEvidence](https://developer.squareup.com/reference/square_2021-08-18/disputes-api/submit-evidence).

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Disputes.DeleteDisputeEvidence(ctx, operations.DeleteDisputeEvidenceRequest{
        DisputeID: "tempora",
        EvidenceID: "quaerat",
    }, operations.DeleteDisputeEvidenceSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteDisputeEvidenceResponse != nil {
        // handle response
    }
}
```

## ListDisputeEvidence

Returns a list of evidence associated with a dispute.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Disputes.ListDisputeEvidence(ctx, operations.ListDisputeEvidenceRequest{
        Cursor: sdk.String("magnam"),
        DisputeID: "voluptate",
    }, operations.ListDisputeEvidenceSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListDisputeEvidenceResponse != nil {
        // handle response
    }
}
```

## ListDisputes

Returns a list of disputes associated with a particular account.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Disputes.ListDisputes(ctx, operations.ListDisputesRequest{
        Cursor: sdk.String("magni"),
        LocationID: sdk.String("excepturi"),
        States: sdk.String("esse"),
    }, operations.ListDisputesSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListDisputesResponse != nil {
        // handle response
    }
}
```

## RetrieveDispute

Returns details about a specific dispute.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Disputes.RetrieveDispute(ctx, operations.RetrieveDisputeRequest{
        DisputeID: "cumque",
    }, operations.RetrieveDisputeSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RetrieveDisputeResponse != nil {
        // handle response
    }
}
```

## RetrieveDisputeEvidence

Returns the evidence metadata specified by the evidence ID in the request URL path

You must maintain a copy of the evidence you upload if you want to reference it later. You cannot
download the evidence after you upload it.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Disputes.RetrieveDisputeEvidence(ctx, operations.RetrieveDisputeEvidenceRequest{
        DisputeID: "pariatur",
        EvidenceID: "non",
    }, operations.RetrieveDisputeEvidenceSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RetrieveDisputeEvidenceResponse != nil {
        // handle response
    }
}
```

## SubmitEvidence

Submits evidence to the cardholder's bank.

Before submitting evidence, Square compiles all available evidence. This includes evidence uploaded
using the [CreateDisputeEvidenceFile](https://developer.squareup.com/reference/square_2021-08-18/disputes-api/create-dispute-evidence-file) and
[CreateDisputeEvidenceText](https://developer.squareup.com/reference/square_2021-08-18/disputes-api/create-dispute-evidence-text) endpoints and
evidence automatically provided by Square, when available.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Disputes.SubmitEvidence(ctx, operations.SubmitEvidenceRequest{
        DisputeID: "rerum",
    }, operations.SubmitEvidenceSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SubmitEvidenceResponse != nil {
        // handle response
    }
}
```
