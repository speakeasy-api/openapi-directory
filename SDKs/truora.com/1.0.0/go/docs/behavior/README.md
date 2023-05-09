# Behavior

## Overview

Allows to anonymously report a person behavior. This information is fed to our machine learning platform to determine the reputational score of a person and produces a dataset; thus helping identify easily whether a candidate is reliable or not, based on all of their reputation against feedback reporters, visible via check API or user interface.

### Available Operations

* [ReportBehavior](#reportbehavior) - Report Behavior

## ReportBehavior

Creates a behavior item to report employee conducts that do not or might not be included in their background check. This report includes both possitive and negative behaviors and sorts them by severity.

### Reasons to report a person

<table>
  <tr>
    <td style="width: 100px"><center><b>Very High</b><br>(Score: 1)</td>
    <td>Rape, Drug Dealing, Sexual Harassment</td>
  </tr>
  <tr>
    <td><center><b>High</b><br>(Score: 0.8)</td>
    <td>Theft, Fights, Aggressive Behaviour, Identity Fraud, Drunk, Drug Possession</td>
  </tr>
  <tr>
    <td><center><b>Medium</b><br>(Score: 0.6)</td>
    <td>Absences</td>
  </tr>
  <tr>
    <td><center><b>Low</b><br>(Score: 0.4)</td>
    <td>Tardiness, Confidentiality Breach</td>
  </tr>
  <tr>
    <td><center><b>None</b><br>(Score: 0)</td>
    <td>Good Reputation</td>
  </tr>
  <tr>
    <td><center><b>Unknown</b></td>
    <td>No information</td>
  </tr>
</table>

**NOTE:** If the reason of your report is not here, please contact Truora support team.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Behavior.ReportBehavior(ctx, shared.CreateBehaviorInput{
        BirthDate: types.MustTimeFromString("2022-03-08T10:35:32.561Z"),
        Country: shared.CreateBehaviorInputCountryEnumPe,
        DocumentID: "molestiae",
        DocumentType: shared.CreateBehaviorInputDocumentTypeEnumIndividualRegistration,
        Email: "Junior.Kshlerin@hotmail.com",
        FeedbackDate: types.MustTimeFromString("2020-06-29T11:50:59.674Z"),
        FirstName: "Antonetta",
        LastName: "Hauck",
        PhoneNumber: sdk.String("veritatis"),
        Reason: shared.CreateBehaviorInputReasonEnumDrugPossession,
    }, operations.ReportBehaviorSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BehaviourOutput != nil {
        // handle response
    }
}
```
