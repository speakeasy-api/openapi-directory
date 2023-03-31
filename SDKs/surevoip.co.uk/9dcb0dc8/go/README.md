# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/surevoip.co.uk/9dcb0dc8/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    req := operations.DeleteCustomersAccountAnnouncementsAnnouncementIDRequest{
        Account: 548814,
        AnnouncementID: "provident",
    }

    ctx := context.Background()
    res, err := s.Announcements.DeleteCustomersAccountAnnouncementsAnnouncementID(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Announcements

* `DeleteCustomersAccountAnnouncementsAnnouncementID` - Delete an announcement audio file
* `GetAnnouncements` - List global announcements
* `GetCustomersAccountAnnouncements` - List of announcement audio files
* `GetCustomersAccountAnnouncementsAnnouncementID` - Represents an announcement audio file
* `PostAnnouncements` - Add a new announcement audio file

### Areacodes

* `GetAreacodes` - List areacodes
* `GetNumbersAreacodes` - Search available numbers by areacode

### Billing

* `GetBilling` - List global billing detail

### Calls

* `GetCalls` - Validate a phone number by calling it once
* `PostCalls` - Create phone calls with or without announcements and scheduled hangups

### Charges

* `GetCharges` - List charges
* `PostCharges` - Create charges for invoices

### Contacts

* `GetContacts` - List contacts

### Customers

* `GetCustomer` - Represents a customer
* `GetCustomers` - List all customers or find your own account

### Echo

* `PostSupportEcho` - Return your POSTed data for testing

### Faxes

* `GetFaxes` - List global ongoing faxes

### Global

* `Get` - List global resources

### Hosted

* `GetHosted` - List Hosted VoIP domains

### Mobile

* `GetMobile` - List mobile accounts

### Numbers

* `GetNumbers` - List available SureVoIP Ofcom number allocations for purchase

### Partners

* `GetPartners` - List SureVoIP Partner accounts

### Porting

* `GetPorting` - List ported numbers

### Sip

* `GetSip` - List all SIP accounts

### Sms

* `GetSms` - List SMS

### Support

* `GetIPAddress` - Return the IP address from where your API request originated
* `GetServiceStatus` - List all Service Status messages
* `GetSupportIPAddress` - Return the IP address from where your API request originated
* `GetSupportServiceStatus` - List all Service Status messages

### Topups

* `GetTopups` - List all account credit topups
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
