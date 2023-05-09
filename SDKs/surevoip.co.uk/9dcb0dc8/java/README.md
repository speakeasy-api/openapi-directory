# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteCustomersAccountAnnouncementsAnnouncementIdRequest;
import org.openapis.openapi.models.operations.DeleteCustomersAccountAnnouncementsAnnouncementIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("corrupti", "provident") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            DeleteCustomersAccountAnnouncementsAnnouncementIdRequest req = new DeleteCustomersAccountAnnouncementsAnnouncementIdRequest(715190L, "quibusdam");            

            DeleteCustomersAccountAnnouncementsAnnouncementIdResponse res = sdk.announcements.deleteCustomersAccountAnnouncementsAnnouncementId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [announcements](docs/announcements/README.md)

* [deleteCustomersAccountAnnouncementsAnnouncementId](docs/announcements/README.md#deletecustomersaccountannouncementsannouncementid) - Delete an announcement audio file
* [getAnnouncements](docs/announcements/README.md#getannouncements) - List global announcements
* [getCustomersAccountAnnouncements](docs/announcements/README.md#getcustomersaccountannouncements) - List of announcement audio files
* [getCustomersAccountAnnouncementsAnnouncementId](docs/announcements/README.md#getcustomersaccountannouncementsannouncementid) - Represents an announcement audio file
* [postAnnouncements](docs/announcements/README.md#postannouncements) - Add a new announcement audio file

### [areacodes](docs/areacodes/README.md)

* [getAreacodes](docs/areacodes/README.md#getareacodes) - List areacodes
* [getNumbersAreacodes](docs/areacodes/README.md#getnumbersareacodes) - Search available numbers by areacode

### [billing](docs/billing/README.md)

* [getBilling](docs/billing/README.md#getbilling) - List global billing detail

### [calls](docs/calls/README.md)

* [getCalls](docs/calls/README.md#getcalls) - Validate a phone number by calling it once
* [postCalls](docs/calls/README.md#postcalls) - Create phone calls with or without announcements and scheduled hangups

### [charges](docs/charges/README.md)

* [getCharges](docs/charges/README.md#getcharges) - List charges
* [postCharges](docs/charges/README.md#postcharges) - Create charges for invoices

### [contacts](docs/contacts/README.md)

* [getContacts](docs/contacts/README.md#getcontacts) - List contacts

### [customers](docs/customers/README.md)

* [getCustomer](docs/customers/README.md#getcustomer) - Represents a customer
* [getCustomers](docs/customers/README.md#getcustomers) - List all customers or find your own account

### [echo](docs/echo/README.md)

* [postSupportEcho](docs/echo/README.md#postsupportecho) - Return your POSTed data for testing

### [faxes](docs/faxes/README.md)

* [getFaxes](docs/faxes/README.md#getfaxes) - List global ongoing faxes

### [global](docs/global/README.md)

* [get](docs/global/README.md#get) - List global resources

### [hosted](docs/hosted/README.md)

* [getHosted](docs/hosted/README.md#gethosted) - List Hosted VoIP domains

### [mobile](docs/mobile/README.md)

* [getMobile](docs/mobile/README.md#getmobile) - List mobile accounts

### [numbers](docs/numbers/README.md)

* [getNumbers](docs/numbers/README.md#getnumbers) - List available SureVoIP Ofcom number allocations for purchase

### [partners](docs/partners/README.md)

* [getPartners](docs/partners/README.md#getpartners) - List SureVoIP Partner accounts

### [porting](docs/porting/README.md)

* [getPorting](docs/porting/README.md#getporting) - List ported numbers

### [sip](docs/sip/README.md)

* [getSip](docs/sip/README.md#getsip) - List all SIP accounts

### [sms](docs/sms/README.md)

* [getSms](docs/sms/README.md#getsms) - List SMS

### [support](docs/support/README.md)

* [getIpAddress](docs/support/README.md#getipaddress) - Return the IP address from where your API request originated
* [getServiceStatus](docs/support/README.md#getservicestatus) - List all Service Status messages
* [getSupportIpAddress](docs/support/README.md#getsupportipaddress) - Return the IP address from where your API request originated
* [getSupportServiceStatus](docs/support/README.md#getsupportservicestatus) - List all Service Status messages

### [topups](docs/topups/README.md)

* [getTopups](docs/topups/README.md#gettopups) - List all account credit topups
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
