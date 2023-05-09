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
import org.openapis.openapi.models.operations.SearchRequest;
import org.openapis.openapi.models.operations.SearchRequestBody;
import org.openapis.openapi.models.operations.SearchRequestBodyAddress;
import org.openapis.openapi.models.operations.SearchResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchRequest req = new SearchRequest() {{
                requestBody = new SearchRequestBody() {{
                    address = new SearchRequestBodyAddress() {{
                        addressLine1 = "corrupti";
                        addressLine2 = "provident";
                    }};;
                    age = 7151.9;
                    dob = "quibusdam";
                    email = "Ryan.Little62@yahoo.com";
                    firstName = "Luna";
                    lastName = "Hoppe";
                    middleName = "iure";
                    phoneNumber = "magnam";
                }};;
                galaxyApName = "debitis";
                galaxyApPassword = "ipsa";
                galaxySearchType = "delectus";
            }};            

            SearchResponse res = sdk.search(req);

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

### [SDK](docs/sdk/README.md)

* [search](docs/sdk/README.md#search) - Search
* [postAddressAutocomplete](docs/sdk/README.md#postaddressautocomplete) - Search
* [postContactEnrich](docs/sdk/README.md#postcontactenrich) - Search
* [postEmailEnrich](docs/sdk/README.md#postemailenrich) - Search
* [postPhoneEnrich](docs/sdk/README.md#postphoneenrich) - Search
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
