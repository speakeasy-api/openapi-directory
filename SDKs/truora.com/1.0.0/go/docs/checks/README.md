# Checks

## Overview

Allows you to create and retrieve background checks. Consults multiple databases and delivers a comprehensive set of information to help assess the reliability of a person, vehicle, or company.

### Available Operations

* [GetHealthDashboard](#gethealthdashboard) - Get Health Dashboard
* [CreateCheck](#createcheck) - Create a background check
* [GetCheck](#getcheck) - Get Background Check
* [ListCheckDetails](#listcheckdetails) - List Check Details
* [ListChecks](#listchecks) - List Checks

## GetHealthDashboard

Get the status of a database

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
    res, err := s.Checks.GetHealthDashboard(ctx, operations.GetHealthDashboardRequest{
        Country: sdk.String("Andorra"),
        UnixTimestampSeconds: sdk.String("ipsam"),
        UnixtimezoneOffsetSeconds: sdk.String("repellendus"),
    }, operations.GetHealthDashboardSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Databases != nil {
        // handle response
    }
}
```

## CreateCheck

Creates a background check and queues it to start collecting information. The full details of background checks can be retrieved with their respective Check IDs using getCheck endpoint. Keep in mind that, depending on the check type, input document, and country of a search, certain inputs are required. You should always provide as many inputs as possible in order to get the highest accuracy.

If your check type is not referenced in the following table, please reach out to find out the fields that apply for you.

| Country | Person-National | PersonForeigner | Company | Vehicle-National | Vehicle-Foreigner |
|:-------:|:---------------:|:---------------:|:-------:|:----------------:|:-----------------:|
| Chile<br>CL | national_id*<br>date_of_birth<br>phone_number | foreign_id*<br>date_of_birth*<br>phone_number<br>first_name*<br>last_name*<br>native_country* | N/A | national_id*<br>license_plate*<br>payment_date (Santiago only)<br>driver_license (Santiago only) | foreign_id*<br>first_name*<br>last_name*<br>date_of_birth*<br>native_country*<br>license_plate*<br>payment_date (Santiago only)<br>driver_license (Santiago only) |
| Colombia<br>CO | national_id*<br>date_of_birth<br>issue_date<br>phone_number | foreign_id* or PEP*<br>date_of_birth<br>phone_number<br>issue_date* | tax_id*<br>national_id | national_id*<br>date_of_birth<br>phone_number<br>license_plate*<br>owner_document_type<br>owner_document_id | foreign_id*<br>date_of_birth<br>phone_number<br>license_plate*<br>issue_date* |
| Mexico<br>MX | national_id*<br>phone_number | foreign_id* | tax_id* | license_plate*<br>national_id<br>vehicle_id<br>driver_license(Estado de Mexico only) | N/A |
| Brazil<br>BR | national_id*<br>date_of_birth*<br>region*<br>phone_number | N/A | tax_id* | license_plate* | N/A |
| Costa Rica<br>CR | national_id*<br>phone_number | foreign_id* | N/A | license_plate* | N/A |
| Ecuador<br>EC | national_id*<br>phone_number | foreign_id* | tax_id* | license_plate* | N/A |
| Peru<br>PE | national_id*<br>date_of_birth<br>phone_number | foreign_id*<br>ptp<br>date_of_birth*<br>phone_number | N/A | national_id*<br>date_of_birth<br>license_plate* | foreign_id*<br>ptp<br>date_of_birth*<br>license_plate* |
| Argentina<br>AR | national_id* | N/A | N/A | national_id* | N/A |
| International<br>ALL | name* | name* | company_name* | N/A | N/A |

(*) Required field

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Checks.CreateCheck(ctx, operations.CreateCheckRequest{
        CreateCheckInput: shared.CreateCheckInput{
            BirthCertificate: sdk.String("sapiente"),
            CompanyName: sdk.String("quo"),
            Country: shared.CreateCheckInputCountryEnumBr,
            DateOfBirth: types.MustDateFromString("2020-05-23"),
            DiplomaticID: sdk.String("maiores"),
            DriverLicense: sdk.String("molestiae"),
            Escrow: sdk.String("quod"),
            FirstName: sdk.String("Presley"),
            ForceCreation: sdk.Bool(false),
            ForeignID: sdk.String("esse"),
            IssueDate: types.MustDateFromString("2021-06-10"),
            LastName: sdk.String("Parisian"),
            LicensePlate: sdk.String("dicta"),
            NationalID: sdk.String("nam"),
            NativeCountry: sdk.String("officia"),
            OwnerDocumentID: sdk.String("occaecati"),
            OwnerDocumentType: sdk.String("fugit"),
            Passport: sdk.String("deleniti"),
            PaymentDate: types.MustDateFromString("2020-09-22"),
            Pep: sdk.String("totam"),
            PhoneNumber: sdk.String("beatae"),
            ProfessionalCard: sdk.String("commodi"),
            Ptp: sdk.String("molestiae"),
            Region: shared.CreateCheckInputRegionEnumEs.ToPointer(),
            ReportID: sdk.String("qui"),
            StateID: sdk.String("impedit"),
            TaxID: sdk.String("cum"),
            Type: shared.CreateCheckInputTypeEnumVehicle,
            UserAuthorized: sdk.Bool(false),
            VehicleID: sdk.String("ipsum"),
            VerificationCode: sdk.String("excepturi"),
            Watch: sdk.String("aspernatur"),
        },
        TruoraPriority: operations.CreateCheckTruoraPriorityEnumLow.ToPointer(),
    }, operations.CreateCheckSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CheckOutput != nil {
        // handle response
    }
}
```

## GetCheck

Returns the results of the check that matches the ID provided, complete with a set of scores explained below.

### Scores:


- **Global Score**: Average risk associated with a person, company or vehicle, according to  the background check results. The global score considers results that are validated with the  ID number provided. The score ranges from 0 to 1, where 0 represents high risk and 1 low risk.


- **ID Score**: Average risk associated with a person according to the background check  results. The ID score considers the results that are validated with a person identity  document. The score ranges from 0 to 1, where 0 represents high risk and 1 low risk. 


- **Homonym Score**: Average risk associated with a person according to the background check  results. The homonym score considers results that are validated against the name of a person and could not be validated with their ID number. These results might have homonyms associated with them. The score ranges from 0 to 1, where 0 represents high risk and 1 low risk.


In order to calculate these scores, a weighted average is considered with different weights allocated to each dataset. Scores can be customized using the config endpoints by assigning a weight to each dataset according to its relevance.

Keep in mind that results from the API vary depending on the country, check type and the inputs entered on check creation.

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
    res, err := s.Checks.GetCheck(ctx, operations.GetCheckRequest{
        CheckID: "ad",
    }, operations.GetCheckSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CheckOutput != nil {
        // handle response
    }
}
```

## ListCheckDetails

Lists all details associated with a Check. It can be paginated.

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
    res, err := s.Checks.ListCheckDetails(ctx, operations.ListCheckDetailsRequest{
        CheckID: "natus",
        Lang: sdk.String("sed"),
        StartKey: sdk.String("iste"),
    }, operations.ListCheckDetailsSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CheckDetailsOutput != nil {
        // handle response
    }
}
```

## ListChecks

Lists the existing checks in the account or in a specified report.

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
    res, err := s.Checks.ListChecks(ctx, operations.ListChecksRequest{
        ReportID: sdk.String("dolor"),
        StartKey: sdk.String("natus"),
    }, operations.ListChecksSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ChecksOutput != nil {
        // handle response
    }
}
```
