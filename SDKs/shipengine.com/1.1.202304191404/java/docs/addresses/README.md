# addresses

## Overview

No matter your shipping volume, failed deliveries and address change surcharges cut into your bottom line and damage perception with customers. Our address validation services ensure your packages make it to the right place the first time. [Learn how to leverage our address validation services here.](https://www.shipengine.com/docs/addresses/validation/)

ShipEngine supports address validation for virtually every country on Earth, including the United States, Canada, Great Britain, Australia, Germany, France, Norway, Spain, Sweden, Israel, Italy, and over 160 others.


Address validation ensures accurate addresses and can lead to reduced shipping costs by preventing address correction surcharges. ShipEngine cross references multiple databases to validate addresses and identify potential deliverability issues.

<https://www.shipengine.com/docs/addresses/validation/>
### Available Operations

* [parseAddress](#parseaddress) - Parse an address
* [validateAddress](#validateaddress) - Validate An Address

## parseAddress

The address-recognition API makes it easy for you to extract address data from unstructured text, including the recipient name, line 1, line 2, city, postal code, and more.

Data often enters your system as unstructured text (for example: emails, SMS messages, support tickets, or other documents). ShipEngine's address-recognition API helps you extract meaningful, structured data from this unstructured text. The parsed address data is returned in the same structure that's used for other ShipEngine APIs, such as address validation, rate quotes, and shipping labels.

> **Note:** Address recognition is currently supported for the United States, Canada, Australia, New Zealand, the United Kingdom, and Ireland.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ParseAddressResponse;
import org.openapis.openapi.models.shared.ParseAddressRequestBody;
import org.openapis.openapi.models.shared.PartialAddress;
import org.openapis.openapi.models.shared.PartialAddressAddressResidentialIndicatorEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deserunt") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.ParseAddressRequestBody req = new ParseAddressRequestBody("Margie McMiller at 3800 North Lamar suite 200 in austin, tx.  The zip code there is 78652.") {{
                address = new PartialAddress() {{
                    addressLine1 = "1999 Bishop Grandin Blvd.";
                    addressLine2 = "Unit 408";
                    addressLine3 = "Building #7";
                    addressResidentialIndicator = PartialAddressAddressResidentialIndicatorEnum.NO;
                    cityLocality = "Winnipeg";
                    companyName = "The Home Depot";
                    countryCode = "CA";
                    email = "example@example.com";
                    name = "John Doe";
                    phone = "+1 204-253-9411 ext. 123";
                    postalCode = "78756-3717";
                    stateProvince = "Manitoba";
                }};;
            }};            

            ParseAddressResponse res = sdk.addresses.parseAddress(req);

            if (res.parseAddressResponseBody != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## validateAddress

Address validation ensures accurate addresses and can lead to reduced shipping costs by preventing address correction surcharges.
ShipEngine cross references multiple databases to validate addresses and identify potential deliverability issues.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ValidateAddressResponse;
import org.openapis.openapi.models.shared.AddressToValidate;
import org.openapis.openapi.models.shared.AddressToValidateAddressResidentialIndicatorEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("suscipit") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.. req = new org.openapis.openapi.models.shared.AddressToValidate[]{{
                add(new AddressToValidate("1999 Bishop Grandin Blvd.", "Winnipeg", "CA", "Manitoba") {{
                    addressLine1 = "1999 Bishop Grandin Blvd.";
                    addressLine2 = "Unit 408";
                    addressLine3 = "Building #7";
                    addressResidentialIndicator = AddressToValidateAddressResidentialIndicatorEnum.NO;
                    cityLocality = "Winnipeg";
                    companyName = "The Home Depot";
                    countryCode = "CA";
                    email = "example@example.com";
                    name = "John Doe";
                    phone = "+1 204-253-9411 ext. 123";
                    postalCode = "78756-3717";
                    stateProvince = "Manitoba";
                }}),
                add(new AddressToValidate("1999 Bishop Grandin Blvd.", "Winnipeg", "CA", "Manitoba") {{
                    addressLine1 = "1999 Bishop Grandin Blvd.";
                    addressLine2 = "Unit 408";
                    addressLine3 = "Building #7";
                    addressResidentialIndicator = AddressToValidateAddressResidentialIndicatorEnum.NO;
                    cityLocality = "Winnipeg";
                    companyName = "The Home Depot";
                    countryCode = "CA";
                    email = "example@example.com";
                    name = "John Doe";
                    phone = "+1 204-253-9411 ext. 123";
                    postalCode = "78756-3717";
                    stateProvince = "Manitoba";
                }}),
            }}            

            ValidateAddressResponse res = sdk.addresses.validateAddress(req);

            if (res.validateAddressResponseBody != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
