# Addresses

## Overview

No matter your shipping volume, failed deliveries and address change surcharges cut into your bottom line and damage perception with customers. Our address validation services ensure your packages make it to the right place the first time. [Learn how to leverage our address validation services here.](https://www.shipengine.com/docs/addresses/validation/)

ShipEngine supports address validation for virtually every country on Earth, including the United States, Canada, Great Britain, Australia, Germany, France, Norway, Spain, Sweden, Israel, Italy, and over 160 others.


Address validation ensures accurate addresses and can lead to reduced shipping costs by preventing address correction surcharges. ShipEngine cross references multiple databases to validate addresses and identify potential deliverability issues.

<https://www.shipengine.com/docs/addresses/validation/>
### Available Operations

* [ParseAddress](#parseaddress) - Parse an address
* [ValidateAddress](#validateaddress) - Validate An Address

## ParseAddress

The address-recognition API makes it easy for you to extract address data from unstructured text, including the recipient name, line 1, line 2, city, postal code, and more.

Data often enters your system as unstructured text (for example: emails, SMS messages, support tickets, or other documents). ShipEngine's address-recognition API helps you extract meaningful, structured data from this unstructured text. The parsed address data is returned in the same structure that's used for other ShipEngine APIs, such as address validation, rate quotes, and shipping labels.

> **Note:** Address recognition is currently supported for the United States, Canada, Australia, New Zealand, the United Kingdom, and Ireland.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Addresses.ParseAddress(ctx, shared.ParseAddressRequestBody{
        Address: &shared.PartialAddress{
            AddressLine1: sdk.String("1999 Bishop Grandin Blvd."),
            AddressLine2: sdk.String("Unit 408"),
            AddressLine3: sdk.String("Building #7"),
            AddressResidentialIndicator: shared.PartialAddressAddressResidentialIndicatorEnumNo.ToPointer(),
            CityLocality: sdk.String("Winnipeg"),
            CompanyName: sdk.String("The Home Depot"),
            CountryCode: sdk.String("CA"),
            Email: sdk.String("example@example.com"),
            Name: sdk.String("John Doe"),
            Phone: sdk.String("+1 204-253-9411 ext. 123"),
            PostalCode: sdk.String("78756-3717"),
            StateProvince: sdk.String("Manitoba"),
        },
        Text: "Margie McMiller at 3800 North Lamar suite 200 in austin, tx.  The zip code there is 78652.",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ParseAddressResponseBody != nil {
        // handle response
    }
}
```

## ValidateAddress

Address validation ensures accurate addresses and can lead to reduced shipping costs by preventing address correction surcharges.
ShipEngine cross references multiple databases to validate addresses and identify potential deliverability issues.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Addresses.ValidateAddress(ctx, []shared.AddressToValidate{
        shared.AddressToValidate{
            AddressLine1: "1999 Bishop Grandin Blvd.",
            AddressLine2: sdk.String("Unit 408"),
            AddressLine3: sdk.String("Building #7"),
            AddressResidentialIndicator: shared.AddressToValidateAddressResidentialIndicatorEnumNo.ToPointer(),
            CityLocality: "Winnipeg",
            CompanyName: sdk.String("The Home Depot"),
            CountryCode: "CA",
            Email: sdk.String("example@example.com"),
            Name: sdk.String("John Doe"),
            Phone: sdk.String("+1 204-253-9411 ext. 123"),
            PostalCode: sdk.String("78756-3717"),
            StateProvince: "Manitoba",
        },
        shared.AddressToValidate{
            AddressLine1: "1999 Bishop Grandin Blvd.",
            AddressLine2: sdk.String("Unit 408"),
            AddressLine3: sdk.String("Building #7"),
            AddressResidentialIndicator: shared.AddressToValidateAddressResidentialIndicatorEnumNo.ToPointer(),
            CityLocality: "Winnipeg",
            CompanyName: sdk.String("The Home Depot"),
            CountryCode: "CA",
            Email: sdk.String("example@example.com"),
            Name: sdk.String("John Doe"),
            Phone: sdk.String("+1 204-253-9411 ext. 123"),
            PostalCode: sdk.String("78756-3717"),
            StateProvince: "Manitoba",
        },
        shared.AddressToValidate{
            AddressLine1: "1999 Bishop Grandin Blvd.",
            AddressLine2: sdk.String("Unit 408"),
            AddressLine3: sdk.String("Building #7"),
            AddressResidentialIndicator: shared.AddressToValidateAddressResidentialIndicatorEnumNo.ToPointer(),
            CityLocality: "Winnipeg",
            CompanyName: sdk.String("The Home Depot"),
            CountryCode: "CA",
            Email: sdk.String("example@example.com"),
            Name: sdk.String("John Doe"),
            Phone: sdk.String("+1 204-253-9411 ext. 123"),
            PostalCode: sdk.String("78756-3717"),
            StateProvince: "Manitoba",
        },
        shared.AddressToValidate{
            AddressLine1: "1999 Bishop Grandin Blvd.",
            AddressLine2: sdk.String("Unit 408"),
            AddressLine3: sdk.String("Building #7"),
            AddressResidentialIndicator: shared.AddressToValidateAddressResidentialIndicatorEnumNo.ToPointer(),
            CityLocality: "Winnipeg",
            CompanyName: sdk.String("The Home Depot"),
            CountryCode: "CA",
            Email: sdk.String("example@example.com"),
            Name: sdk.String("John Doe"),
            Phone: sdk.String("+1 204-253-9411 ext. 123"),
            PostalCode: sdk.String("78756-3717"),
            StateProvince: "Manitoba",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ValidateAddressResponseBody != nil {
        // handle response
    }
}
```
