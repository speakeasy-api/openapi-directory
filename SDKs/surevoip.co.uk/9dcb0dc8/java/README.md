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
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.DeleteCustomersAccountAnnouncementsAnnouncementIdRequest;
import org.openapis.openapi.models.operations.DeleteCustomersAccountAnnouncementsAnnouncementIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth() {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            DeleteCustomersAccountAnnouncementsAnnouncementIdRequest req = new DeleteCustomersAccountAnnouncementsAnnouncementIdRequest() {{
                account = 548814;
                announcementId = "provident";
            }}            

            DeleteCustomersAccountAnnouncementsAnnouncementIdResponse res = sdk.announcements.deleteCustomersAccountAnnouncementsAnnouncementId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### announcements

* `deleteCustomersAccountAnnouncementsAnnouncementId` - Delete an announcement audio file
* `getAnnouncements` - List global announcements
* `getCustomersAccountAnnouncements` - List of announcement audio files
* `getCustomersAccountAnnouncementsAnnouncementId` - Represents an announcement audio file
* `postAnnouncements` - Add a new announcement audio file

### areacodes

* `getAreacodes` - List areacodes
* `getNumbersAreacodes` - Search available numbers by areacode

### billing

* `getBilling` - List global billing detail

### calls

* `getCalls` - Validate a phone number by calling it once
* `postCalls` - Create phone calls with or without announcements and scheduled hangups

### charges

* `getCharges` - List charges
* `postCharges` - Create charges for invoices

### contacts

* `getContacts` - List contacts

### customers

* `getCustomer` - Represents a customer
* `getCustomers` - List all customers or find your own account

### echo

* `postSupportEcho` - Return your POSTed data for testing

### faxes

* `getFaxes` - List global ongoing faxes

### global

* `get` - List global resources

### hosted

* `getHosted` - List Hosted VoIP domains

### mobile

* `getMobile` - List mobile accounts

### numbers

* `getNumbers` - List available SureVoIP Ofcom number allocations for purchase

### partners

* `getPartners` - List SureVoIP Partner accounts

### porting

* `getPorting` - List ported numbers

### sip

* `getSip` - List all SIP accounts

### sms

* `getSms` - List SMS

### support

* `getIpAddress` - Return the IP address from where your API request originated
* `getServiceStatus` - List all Service Status messages
* `getSupportIpAddress` - Return the IP address from where your API request originated
* `getSupportServiceStatus` - List all Service Status messages

### topups

* `getTopups` - List all account credit topups
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
