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

import(
	"context"
	"log"
	"openapi"
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

    ctx := context.Background()
    res, err := s.Announcements.DeleteCustomersAccountAnnouncementsAnnouncementID(ctx, operations.DeleteCustomersAccountAnnouncementsAnnouncementIDRequest{
        Account: 548814,
        AnnouncementID: "provident",
    })
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


### [Announcements](docs/announcements/README.md)

* [DeleteCustomersAccountAnnouncementsAnnouncementID](docs/announcements/README.md#deletecustomersaccountannouncementsannouncementid) - Delete an announcement audio file
* [GetAnnouncements](docs/announcements/README.md#getannouncements) - List global announcements
* [GetCustomersAccountAnnouncements](docs/announcements/README.md#getcustomersaccountannouncements) - List of announcement audio files
* [GetCustomersAccountAnnouncementsAnnouncementID](docs/announcements/README.md#getcustomersaccountannouncementsannouncementid) - Represents an announcement audio file
* [PostAnnouncements](docs/announcements/README.md#postannouncements) - Add a new announcement audio file

### [Areacodes](docs/areacodes/README.md)

* [GetAreacodes](docs/areacodes/README.md#getareacodes) - List areacodes
* [GetNumbersAreacodes](docs/areacodes/README.md#getnumbersareacodes) - Search available numbers by areacode

### [Billing](docs/billing/README.md)

* [GetBilling](docs/billing/README.md#getbilling) - List global billing detail

### [Calls](docs/calls/README.md)

* [GetCalls](docs/calls/README.md#getcalls) - Validate a phone number by calling it once
* [PostCalls](docs/calls/README.md#postcalls) - Create phone calls with or without announcements and scheduled hangups

### [Charges](docs/charges/README.md)

* [GetCharges](docs/charges/README.md#getcharges) - List charges
* [PostCharges](docs/charges/README.md#postcharges) - Create charges for invoices

### [Contacts](docs/contacts/README.md)

* [GetContacts](docs/contacts/README.md#getcontacts) - List contacts

### [Customers](docs/customers/README.md)

* [GetCustomer](docs/customers/README.md#getcustomer) - Represents a customer
* [GetCustomers](docs/customers/README.md#getcustomers) - List all customers or find your own account

### [Echo](docs/echo/README.md)

* [PostSupportEcho](docs/echo/README.md#postsupportecho) - Return your POSTed data for testing

### [Faxes](docs/faxes/README.md)

* [GetFaxes](docs/faxes/README.md#getfaxes) - List global ongoing faxes

### [Global](docs/global/README.md)

* [Get](docs/global/README.md#get) - List global resources

### [Hosted](docs/hosted/README.md)

* [GetHosted](docs/hosted/README.md#gethosted) - List Hosted VoIP domains

### [Mobile](docs/mobile/README.md)

* [GetMobile](docs/mobile/README.md#getmobile) - List mobile accounts

### [Numbers](docs/numbers/README.md)

* [GetNumbers](docs/numbers/README.md#getnumbers) - List available SureVoIP Ofcom number allocations for purchase

### [Partners](docs/partners/README.md)

* [GetPartners](docs/partners/README.md#getpartners) - List SureVoIP Partner accounts

### [Porting](docs/porting/README.md)

* [GetPorting](docs/porting/README.md#getporting) - List ported numbers

### [Sip](docs/sip/README.md)

* [GetSip](docs/sip/README.md#getsip) - List all SIP accounts

### [Sms](docs/sms/README.md)

* [GetSms](docs/sms/README.md#getsms) - List SMS

### [Support](docs/support/README.md)

* [GetIPAddress](docs/support/README.md#getipaddress) - Return the IP address from where your API request originated
* [GetServiceStatus](docs/support/README.md#getservicestatus) - List all Service Status messages
* [GetSupportIPAddress](docs/support/README.md#getsupportipaddress) - Return the IP address from where your API request originated
* [GetSupportServiceStatus](docs/support/README.md#getsupportservicestatus) - List all Service Status messages

### [Topups](docs/topups/README.md)

* [GetTopups](docs/topups/README.md#gettopups) - List all account credit topups
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
