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
import org.openapis.openapi.models.operations.CreateAlphaSenderCreateAlphaSenderRequest;
import org.openapis.openapi.models.operations.CreateAlphaSenderRequest;
import org.openapis.openapi.models.operations.CreateAlphaSenderResponse;
import org.openapis.openapi.models.operations.CreateAlphaSenderSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateAlphaSenderRequest req = new CreateAlphaSenderRequest("corrupti") {{
                requestBody = new CreateAlphaSenderCreateAlphaSenderRequest("provident");;
            }};            

            CreateAlphaSenderResponse res = sdk.createAlphaSender(req, new CreateAlphaSenderSecurity("distinctio", "quibusdam") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.messagingV1ServiceAlphaSender != null) {
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

### [SDK](docs/sdk/README.md)

* [createAlphaSender](docs/sdk/README.md#createalphasender)
* [createBrandRegistrationOtp](docs/sdk/README.md#createbrandregistrationotp)
* [createBrandRegistrations](docs/sdk/README.md#createbrandregistrations)
* [createBrandVetting](docs/sdk/README.md#createbrandvetting)
* [createExternalCampaign](docs/sdk/README.md#createexternalcampaign)
* [createLinkshorteningMessagingService](docs/sdk/README.md#createlinkshorteningmessagingservice)
* [createPhoneNumber](docs/sdk/README.md#createphonenumber)
* [createService](docs/sdk/README.md#createservice)
* [createShortCode](docs/sdk/README.md#createshortcode)
* [createUsAppToPerson](docs/sdk/README.md#createusapptoperson)
* [deleteAlphaSender](docs/sdk/README.md#deletealphasender)
* [deleteDomainCertV4](docs/sdk/README.md#deletedomaincertv4)
* [deleteLinkshorteningMessagingService](docs/sdk/README.md#deletelinkshorteningmessagingservice)
* [deletePhoneNumber](docs/sdk/README.md#deletephonenumber)
* [deleteService](docs/sdk/README.md#deleteservice)
* [deleteShortCode](docs/sdk/README.md#deleteshortcode)
* [deleteUsAppToPerson](docs/sdk/README.md#deleteusapptoperson)
* [fetchAlphaSender](docs/sdk/README.md#fetchalphasender)
* [fetchBrandRegistrations](docs/sdk/README.md#fetchbrandregistrations)
* [fetchBrandVetting](docs/sdk/README.md#fetchbrandvetting)
* [fetchDeactivation](docs/sdk/README.md#fetchdeactivation) - Fetch a list of all United States numbers that have been deactivated on a specific date.
* [fetchDomainCertV4](docs/sdk/README.md#fetchdomaincertv4)
* [fetchDomainConfig](docs/sdk/README.md#fetchdomainconfig)
* [fetchDomainConfigMessagingService](docs/sdk/README.md#fetchdomainconfigmessagingservice)
* [fetchPhoneNumber](docs/sdk/README.md#fetchphonenumber)
* [fetchService](docs/sdk/README.md#fetchservice)
* [fetchShortCode](docs/sdk/README.md#fetchshortcode)
* [fetchUsAppToPerson](docs/sdk/README.md#fetchusapptoperson)
* [fetchUsAppToPersonUsecase](docs/sdk/README.md#fetchusapptopersonusecase)
* [fetchUsecase](docs/sdk/README.md#fetchusecase)
* [listAlphaSender](docs/sdk/README.md#listalphasender)
* [listBrandRegistrations](docs/sdk/README.md#listbrandregistrations)
* [listBrandVetting](docs/sdk/README.md#listbrandvetting)
* [listPhoneNumber](docs/sdk/README.md#listphonenumber)
* [listService](docs/sdk/README.md#listservice)
* [listShortCode](docs/sdk/README.md#listshortcode)
* [listUsAppToPerson](docs/sdk/README.md#listusapptoperson)
* [updateBrandRegistrations](docs/sdk/README.md#updatebrandregistrations)
* [updateDomainCertV4](docs/sdk/README.md#updatedomaincertv4)
* [updateDomainConfig](docs/sdk/README.md#updatedomainconfig)
* [updateService](docs/sdk/README.md#updateservice)
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
