# Employee

### Available Operations

* [AddEmployee](#addemployee) - Add new employee
* [GetAllEmployees](#getallemployees) - Get all employees
* [GetEmployee](#getemployee) - Get employee
* [UpdateEmployee](#updateemployee) - Update employee

## AddEmployee

New Employee API sends new employee data directly to Web Pay. Companies who use the New Hire Template in Web Pay may require additional fields when hiring employees. New Employee API Requests will honor these required fields.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Employee.AddEmployee(ctx, operations.AddEmployeeRequest{
        CompanyID: "excepturi",
        Employee: shared.Employee{
            AdditionalDirectDeposit: []shared.EmployeeAdditionalDirectDeposit{
                shared.EmployeeAdditionalDirectDeposit{
                    AccountNumber: sdk.String("iure"),
                    AccountType: sdk.String("culpa"),
                    Amount: sdk.Float64(9883.74),
                    AmountType: sdk.String("sapiente"),
                    BlockSpecial: sdk.Bool(false),
                    IsSkipPreNote: sdk.Bool(false),
                    NameOnAccount: sdk.String("architecto"),
                    PreNoteDate: sdk.String("mollitia"),
                    RoutingNumber: sdk.String("dolorem"),
                },
            },
            AdditionalRate: []shared.EmployeeAdditionalRate{
                shared.EmployeeAdditionalRate{
                    ChangeReason: sdk.String("consequuntur"),
                    CostCenter1: sdk.String("repellat"),
                    CostCenter2: sdk.String("mollitia"),
                    CostCenter3: sdk.String("occaecati"),
                    EffectiveDate: sdk.String("numquam"),
                    EndCheckDate: sdk.String("commodi"),
                    Job: sdk.String("quam"),
                    Rate: sdk.Float64(4746.97),
                    RateCode: sdk.String("velit"),
                    RateNotes: sdk.String("error"),
                    RatePer: sdk.String("quia"),
                    Shift: sdk.String("quis"),
                },
                shared.EmployeeAdditionalRate{
                    ChangeReason: sdk.String("vitae"),
                    CostCenter1: sdk.String("laborum"),
                    CostCenter2: sdk.String("animi"),
                    CostCenter3: sdk.String("enim"),
                    EffectiveDate: sdk.String("odit"),
                    EndCheckDate: sdk.String("quo"),
                    Job: sdk.String("sequi"),
                    Rate: sdk.Float64(9495.72),
                    RateCode: sdk.String("ipsam"),
                    RateNotes: sdk.String("id"),
                    RatePer: sdk.String("possimus"),
                    Shift: sdk.String("aut"),
                },
                shared.EmployeeAdditionalRate{
                    ChangeReason: sdk.String("quasi"),
                    CostCenter1: sdk.String("error"),
                    CostCenter2: sdk.String("temporibus"),
                    CostCenter3: sdk.String("laborum"),
                    EffectiveDate: sdk.String("quasi"),
                    EndCheckDate: sdk.String("reiciendis"),
                    Job: sdk.String("voluptatibus"),
                    Rate: sdk.Float64(8781.94),
                    RateCode: sdk.String("nihil"),
                    RateNotes: sdk.String("praesentium"),
                    RatePer: sdk.String("voluptatibus"),
                    Shift: sdk.String("ipsa"),
                },
            },
            BenefitSetup: &shared.EmployeeBenefitSetup{
                BenefitClass: sdk.String("omnis"),
                BenefitClassEffectiveDate: sdk.String("voluptate"),
                BenefitSalary: sdk.Float64(7392.64),
                BenefitSalaryEffectiveDate: sdk.String("perferendis"),
                DoNotApplyAdministrativePeriod: sdk.Bool(false),
                IsMeasureAcaEligibility: sdk.Bool(false),
            },
            BirthDate: sdk.String("doloremque"),
            CoEmpCode: sdk.String("reprehenderit"),
            CompanyFEIN: sdk.String("ut"),
            CompanyName: sdk.String("maiores"),
            Currency: sdk.String("dicta"),
            CustomBooleanFields: []shared.EmployeeCustomBooleanFields{
                shared.EmployeeCustomBooleanFields{
                    Category: shared.EmployeeCustomBooleanFieldsCategoryEnumPayrollAndHr,
                    Label: "dolore",
                    Value: false,
                },
                shared.EmployeeCustomBooleanFields{
                    Category: shared.EmployeeCustomBooleanFieldsCategoryEnumPayrollAndHr,
                    Label: "iusto",
                    Value: false,
                },
            },
            CustomDateFields: []shared.EmployeeCustomDateFields{
                shared.EmployeeCustomDateFields{
                    Category: shared.EmployeeCustomDateFieldsCategoryEnumPayrollAndHr,
                    Label: "harum",
                    Value: "enim",
                },
            },
            CustomDropDownFields: []shared.EmployeeCustomDropDownFields{
                shared.EmployeeCustomDropDownFields{
                    Category: shared.EmployeeCustomDropDownFieldsCategoryEnumPayrollAndHr,
                    Label: "commodi",
                    Value: "repudiandae",
                },
                shared.EmployeeCustomDropDownFields{
                    Category: shared.EmployeeCustomDropDownFieldsCategoryEnumPayrollAndHr,
                    Label: "quae",
                    Value: "ipsum",
                },
                shared.EmployeeCustomDropDownFields{
                    Category: shared.EmployeeCustomDropDownFieldsCategoryEnumPayrollAndHr,
                    Label: "quidem",
                    Value: "molestias",
                },
                shared.EmployeeCustomDropDownFields{
                    Category: shared.EmployeeCustomDropDownFieldsCategoryEnumPayrollAndHr,
                    Label: "excepturi",
                    Value: "pariatur",
                },
            },
            CustomNumberFields: []shared.EmployeeCustomNumberFields{
                shared.EmployeeCustomNumberFields{
                    Category: shared.EmployeeCustomNumberFieldsCategoryEnumPayrollAndHr,
                    Label: "praesentium",
                    Value: 5232.48,
                },
                shared.EmployeeCustomNumberFields{
                    Category: shared.EmployeeCustomNumberFieldsCategoryEnumPayrollAndHr,
                    Label: "voluptates",
                    Value: 939.4,
                },
            },
            CustomTextFields: []shared.EmployeeCustomTextFields{
                shared.EmployeeCustomTextFields{
                    Category: shared.EmployeeCustomTextFieldsCategoryEnumPayrollAndHr,
                    Label: "sint",
                    Value: "veritatis",
                },
                shared.EmployeeCustomTextFields{
                    Category: shared.EmployeeCustomTextFieldsCategoryEnumPayrollAndHr,
                    Label: "itaque",
                    Value: "incidunt",
                },
                shared.EmployeeCustomTextFields{
                    Category: shared.EmployeeCustomTextFieldsCategoryEnumPayrollAndHr,
                    Label: "enim",
                    Value: "consequatur",
                },
                shared.EmployeeCustomTextFields{
                    Category: shared.EmployeeCustomTextFieldsCategoryEnumPayrollAndHr,
                    Label: "est",
                    Value: "quibusdam",
                },
            },
            DepartmentPosition: &shared.EmployeeDepartmentPosition{
                ChangeReason: sdk.String("explicabo"),
                ClockBadgeNumber: sdk.String("deserunt"),
                CostCenter1: sdk.String("distinctio"),
                CostCenter2: sdk.String("quibusdam"),
                CostCenter3: sdk.String("labore"),
                EffectiveDate: sdk.String("modi"),
                EmployeeType: sdk.String("qui"),
                EqualEmploymentOpportunityClass: sdk.String("aliquid"),
                IsMinimumWageExempt: sdk.Bool(false),
                IsOvertimeExempt: sdk.Bool(false),
                IsSupervisorReviewer: sdk.Bool(false),
                IsUnionDuesCollected: sdk.Bool(false),
                IsUnionInitiationCollected: sdk.Bool(false),
                JobTitle: sdk.String("Customer Infrastructure Supervisor"),
                PayGroup: sdk.String("magni"),
                PositionCode: sdk.String("assumenda"),
                ReviewerCompanyNumber: sdk.String("ipsam"),
                ReviewerEmployeeID: sdk.String("alias"),
                Shift: sdk.String("fugit"),
                SupervisorCompanyNumber: sdk.String("dolorum"),
                SupervisorEmployeeID: sdk.String("excepturi"),
                Tipped: sdk.String("tempora"),
                UnionAffiliationDate: sdk.String("facilis"),
                UnionCode: sdk.String("tempore"),
                UnionPosition: sdk.String("labore"),
                WorkersCompensation: sdk.String("delectus"),
            },
            DisabilityDescription: sdk.String("eum"),
            EmergencyContacts: []shared.EmployeeEmergencyContacts{
                shared.EmployeeEmergencyContacts{
                    Address1: sdk.String("eligendi"),
                    Address2: sdk.String("sint"),
                    City: sdk.String("New Sonya"),
                    Country: sdk.String("Mexico"),
                    County: sdk.String("officia"),
                    Email: sdk.String("Sim.Wilderman44@gmail.com"),
                    FirstName: "Rose",
                    HomePhone: sdk.String("maiores"),
                    LastName: "Price",
                    MobilePhone: sdk.String("dicta"),
                    Notes: sdk.String("magnam"),
                    Pager: sdk.String("cumque"),
                    PrimaryPhone: sdk.String("facere"),
                    Priority: sdk.String("ea"),
                    Relationship: sdk.String("aliquid"),
                    State: sdk.String("laborum"),
                    SyncEmployeeInfo: sdk.Bool(false),
                    WorkExtension: sdk.String("accusamus"),
                    WorkPhone: sdk.String("non"),
                    Zip: sdk.String("occaecati"),
                },
            },
            EmployeeID: sdk.String("enim"),
            Ethnicity: sdk.String("accusamus"),
            FederalTax: &shared.EmployeeFederalTax{
                Amount: sdk.Float64(9654.17),
                DeductionsAmount: sdk.Float64(6925.32),
                DependentsAmount: sdk.Float64(5884.65),
                Exemptions: sdk.Float64(7252.55),
                FilingStatus: sdk.String("id"),
                HigherRate: sdk.Bool(false),
                OtherIncomeAmount: sdk.Float64(5013.24),
                Percentage: sdk.Float64(5332.06),
                TaxCalculationCode: sdk.String("sapiente"),
                W4FormYear: sdk.Int64(230533),
            },
            FirstName: sdk.String("Luis"),
            Gender: sdk.String("female"),
            HomeAddress: &shared.EmployeeHomeAddress{
                Address1: sdk.String("vel"),
                Address2: sdk.String("natus"),
                City: sdk.String("Krajciktown"),
                Country: sdk.String("Republic of Korea"),
                County: sdk.String("magnam"),
                EmailAddress: sdk.String("distinctio"),
                MobilePhone: sdk.String("id"),
                Phone: sdk.String("436-748-1120 x535"),
                PostalCode: sdk.String("50696-3428"),
                State: sdk.String("odit"),
            },
            IsHighlyCompensated: sdk.Bool(false),
            IsSmoker: sdk.Bool(false),
            LastName: sdk.String("Hilll"),
            LocalTax: []shared.EmployeeLocalTax{
                shared.EmployeeLocalTax{
                    Exemptions: sdk.Float64(4358.65),
                    Exemptions2: sdk.Float64(9840.43),
                    FilingStatus: sdk.String("debitis"),
                    ResidentPSD: sdk.String("eius"),
                    TaxCode: sdk.String("maxime"),
                    WorkPSD: sdk.String("deleniti"),
                },
            },
            MainDirectDeposit: &shared.EmployeeMainDirectDeposit{
                AccountNumber: sdk.String("facilis"),
                AccountType: sdk.String("in"),
                BlockSpecial: sdk.Bool(false),
                IsSkipPreNote: sdk.Bool(false),
                NameOnAccount: sdk.String("architecto"),
                PreNoteDate: sdk.String("architecto"),
                RoutingNumber: sdk.String("repudiandae"),
            },
            MaritalStatus: sdk.String("ullam"),
            MiddleName: sdk.String("expedita"),
            NonPrimaryStateTax: &shared.EmployeeNonPrimaryStateTax{
                Amount: sdk.Float64(4692.49),
                DeductionsAmount: sdk.Float64(9988.48),
                DependentsAmount: sdk.Float64(8411.4),
                Exemptions: sdk.Float64(1494.48),
                Exemptions2: sdk.Float64(9046.48),
                FilingStatus: sdk.String("pariatur"),
                HigherRate: sdk.Bool(false),
                OtherIncomeAmount: sdk.Float64(375.59),
                Percentage: sdk.Float64(1624.93),
                ReciprocityCode: sdk.String("praesentium"),
                SpecialCheckCalc: sdk.String("natus"),
                TaxCalculationCode: sdk.String("magni"),
                TaxCode: sdk.String("sunt"),
                W4FormYear: sdk.Int64(779051),
            },
            OwnerPercent: sdk.Float64(8480.09),
            PreferredName: sdk.String("pariatur"),
            PrimaryPayRate: &shared.EmployeePrimaryPayRate{
                AnnualSalary: sdk.Float64(8073.19),
                BaseRate: sdk.Float64(4113.97),
                BeginCheckDate: sdk.String("excepturi"),
                ChangeReason: sdk.String("odit"),
                DefaultHours: sdk.Float64(4071.83),
                EffectiveDate: sdk.String("accusantium"),
                IsAutoPay: sdk.Bool(false),
                PayFrequency: sdk.String("ab"),
                PayGrade: sdk.String("maiores"),
                PayRateNote: sdk.String("quidem"),
                PayType: sdk.String("ipsam"),
                RatePer: sdk.String("voluptate"),
                Salary: sdk.Float64(4200.75),
            },
            PrimaryStateTax: &shared.EmployeePrimaryStateTax{
                Amount: sdk.Float64(7220.56),
                DeductionsAmount: sdk.Float64(505.88),
                DependentsAmount: sdk.Float64(8663.83),
                Exemptions: sdk.Float64(3654.96),
                Exemptions2: sdk.Float64(9755.22),
                FilingStatus: sdk.String("perferendis"),
                HigherRate: sdk.Bool(false),
                OtherIncomeAmount: sdk.Float64(8558.04),
                Percentage: sdk.Float64(2307.42),
                SpecialCheckCalc: sdk.String("aut"),
                TaxCalculationCode: sdk.String("cumque"),
                TaxCode: sdk.String("corporis"),
                W4FormYear: sdk.Int64(944124),
            },
            PriorLastName: sdk.String("libero"),
            Salutation: sdk.String("nobis"),
            Ssn: sdk.String("dolores"),
            Status: &shared.EmployeeStatus{
                AdjustedSeniorityDate: sdk.String("quis"),
                ChangeReason: sdk.String("totam"),
                EffectiveDate: sdk.String("dignissimos"),
                EmployeeStatus: sdk.String("eaque"),
                HireDate: sdk.String("quis"),
                IsEligibleForRehire: sdk.Bool(false),
                ReHireDate: sdk.String("nesciunt"),
                StatusType: sdk.String("eos"),
                TerminationDate: sdk.String("perferendis"),
            },
            Suffix: sdk.String("dolores"),
            TaxSetup: &shared.EmployeeTaxSetup{
                FitwExemptNotes: sdk.String("minus"),
                FitwExemptReason: sdk.String("quam"),
                FutaExemptNotes: sdk.String("dolor"),
                FutaExemptReason: sdk.String("vero"),
                IsEmployee943: sdk.Bool(false),
                IsPension: sdk.Bool(false),
                IsStatutory: sdk.Bool(false),
                MedExemptNotes: sdk.String("nostrum"),
                MedExemptReason: sdk.String("hic"),
                SitwExemptNotes: sdk.String("recusandae"),
                SitwExemptReason: sdk.String("omnis"),
                SsExemptNotes: sdk.String("facilis"),
                SsExemptReason: sdk.String("perspiciatis"),
                SuiExemptNotes: sdk.String("voluptatem"),
                SuiExemptReason: sdk.String("porro"),
                SuiState: sdk.String("consequuntur"),
                TaxDistributionCode1099R: sdk.String("blanditiis"),
                TaxForm: sdk.String("error"),
            },
            VeteranDescription: sdk.String("eaque"),
            WebTime: &shared.EmployeeWebTime{
                BadgeNumber: sdk.String("occaecati"),
                ChargeRate: sdk.Float64(6990.98),
                IsTimeLaborEnabled: sdk.Bool(false),
            },
            WorkAddress: &shared.EmployeeWorkAddress{
                Address1: sdk.String("adipisci"),
                Address2: sdk.String("asperiores"),
                City: sdk.String("East Providence"),
                Country: sdk.String("Namibia"),
                County: sdk.String("dolorum"),
                EmailAddress: sdk.String("deleniti"),
                Location: sdk.String("pariatur"),
                MailStop: sdk.String("provident"),
                MobilePhone: sdk.String("nobis"),
                Pager: sdk.String("libero"),
                Phone: sdk.String("453.322.1295 x74492"),
                PhoneExtension: sdk.String("dolorum"),
                PostalCode: sdk.String("00044"),
                State: sdk.String("quaerat"),
            },
            WorkEligibility: &shared.EmployeeWorkEligibility{
                AlienOrAdmissionDocumentNumber: sdk.String("accusamus"),
                AttestedDate: sdk.String("quidem"),
                CountryOfIssuance: sdk.String("voluptatibus"),
                ForeignPassportNumber: sdk.String("voluptas"),
                I94AdmissionNumber: sdk.String("natus"),
                I9DateVerified: sdk.String("eos"),
                I9Notes: sdk.String("atque"),
                IsI9Verified: sdk.Bool(false),
                IsSsnVerified: sdk.Bool(false),
                SsnDateVerified: sdk.String("sit"),
                SsnNotes: sdk.String("fugiat"),
                VisaType: sdk.String("ab"),
                WorkAuthorization: sdk.String("soluta"),
                WorkUntil: sdk.String("dolorum"),
            },
        },
    }, operations.AddEmployeeSecurity{
        PaylocityAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EmployeeIDResponse != nil {
        // handle response
    }
}
```

## GetAllEmployees

Get All Employees API will return employee data currently available in Web Pay.

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
    res, err := s.Employee.GetAllEmployees(ctx, operations.GetAllEmployeesRequest{
        CompanyID: "iusto",
        Includetotalcount: sdk.Bool(false),
        Pagenumber: sdk.Int64(453697),
        Pagesize: sdk.Int64(677082),
    }, operations.GetAllEmployeesSecurity{
        PaylocityAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EmployeeInfos != nil {
        // handle response
    }
}
```

## GetEmployee

Get Employee API will return employee data currently available in Web Pay.

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
    res, err := s.Employee.GetEmployee(ctx, operations.GetEmployeeRequest{
        CompanyID: "deleniti",
        EmployeeID: "omnis",
    }, operations.GetEmployeeSecurity{
        PaylocityAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Employee != nil {
        // handle response
    }
}
```

## UpdateEmployee

Update Employee API will update existing employee data in WebPay.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Employee.UpdateEmployee(ctx, operations.UpdateEmployeeRequest{
        CompanyID: "necessitatibus",
        Employee: shared.Employee{
            AdditionalDirectDeposit: []shared.EmployeeAdditionalDirectDeposit{
                shared.EmployeeAdditionalDirectDeposit{
                    AccountNumber: sdk.String("asperiores"),
                    AccountType: sdk.String("nihil"),
                    Amount: sdk.Float64(2168.97),
                    AmountType: sdk.String("voluptate"),
                    BlockSpecial: sdk.Bool(false),
                    IsSkipPreNote: sdk.Bool(false),
                    NameOnAccount: sdk.String("id"),
                    PreNoteDate: sdk.String("saepe"),
                    RoutingNumber: sdk.String("eius"),
                },
                shared.EmployeeAdditionalDirectDeposit{
                    AccountNumber: sdk.String("aspernatur"),
                    AccountType: sdk.String("perferendis"),
                    Amount: sdk.Float64(2292.19),
                    AmountType: sdk.String("optio"),
                    BlockSpecial: sdk.Bool(false),
                    IsSkipPreNote: sdk.Bool(false),
                    NameOnAccount: sdk.String("accusamus"),
                    PreNoteDate: sdk.String("ad"),
                    RoutingNumber: sdk.String("saepe"),
                },
                shared.EmployeeAdditionalDirectDeposit{
                    AccountNumber: sdk.String("suscipit"),
                    AccountType: sdk.String("deserunt"),
                    Amount: sdk.Float64(5883.17),
                    AmountType: sdk.String("minima"),
                    BlockSpecial: sdk.Bool(false),
                    IsSkipPreNote: sdk.Bool(false),
                    NameOnAccount: sdk.String("repellendus"),
                    PreNoteDate: sdk.String("totam"),
                    RoutingNumber: sdk.String("similique"),
                },
            },
            AdditionalRate: []shared.EmployeeAdditionalRate{
                shared.EmployeeAdditionalRate{
                    ChangeReason: sdk.String("at"),
                    CostCenter1: sdk.String("quaerat"),
                    CostCenter2: sdk.String("tempora"),
                    CostCenter3: sdk.String("vel"),
                    EffectiveDate: sdk.String("quod"),
                    EndCheckDate: sdk.String("officiis"),
                    Job: sdk.String("qui"),
                    Rate: sdk.Float64(6798.8),
                    RateCode: sdk.String("a"),
                    RateNotes: sdk.String("esse"),
                    RatePer: sdk.String("harum"),
                    Shift: sdk.String("iusto"),
                },
            },
            BenefitSetup: &shared.EmployeeBenefitSetup{
                BenefitClass: sdk.String("ipsum"),
                BenefitClassEffectiveDate: sdk.String("quisquam"),
                BenefitSalary: sdk.Float64(9473.71),
                BenefitSalaryEffectiveDate: sdk.String("amet"),
                DoNotApplyAdministrativePeriod: sdk.Bool(false),
                IsMeasureAcaEligibility: sdk.Bool(false),
            },
            BirthDate: sdk.String("tempore"),
            CoEmpCode: sdk.String("accusamus"),
            CompanyFEIN: sdk.String("numquam"),
            CompanyName: sdk.String("enim"),
            Currency: sdk.String("dolorem"),
            CustomBooleanFields: []shared.EmployeeCustomBooleanFields{
                shared.EmployeeCustomBooleanFields{
                    Category: shared.EmployeeCustomBooleanFieldsCategoryEnumPayrollAndHr,
                    Label: "totam",
                    Value: false,
                },
                shared.EmployeeCustomBooleanFields{
                    Category: shared.EmployeeCustomBooleanFieldsCategoryEnumPayrollAndHr,
                    Label: "nihil",
                    Value: false,
                },
                shared.EmployeeCustomBooleanFields{
                    Category: shared.EmployeeCustomBooleanFieldsCategoryEnumPayrollAndHr,
                    Label: "sit",
                    Value: false,
                },
                shared.EmployeeCustomBooleanFields{
                    Category: shared.EmployeeCustomBooleanFieldsCategoryEnumPayrollAndHr,
                    Label: "expedita",
                    Value: false,
                },
            },
            CustomDateFields: []shared.EmployeeCustomDateFields{
                shared.EmployeeCustomDateFields{
                    Category: shared.EmployeeCustomDateFieldsCategoryEnumPayrollAndHr,
                    Label: "sed",
                    Value: "vel",
                },
            },
            CustomDropDownFields: []shared.EmployeeCustomDropDownFields{
                shared.EmployeeCustomDropDownFields{
                    Category: shared.EmployeeCustomDropDownFieldsCategoryEnumPayrollAndHr,
                    Label: "voluptas",
                    Value: "deserunt",
                },
                shared.EmployeeCustomDropDownFields{
                    Category: shared.EmployeeCustomDropDownFieldsCategoryEnumPayrollAndHr,
                    Label: "quam",
                    Value: "ipsum",
                },
                shared.EmployeeCustomDropDownFields{
                    Category: shared.EmployeeCustomDropDownFieldsCategoryEnumPayrollAndHr,
                    Label: "incidunt",
                    Value: "qui",
                },
            },
            CustomNumberFields: []shared.EmployeeCustomNumberFields{
                shared.EmployeeCustomNumberFields{
                    Category: shared.EmployeeCustomNumberFieldsCategoryEnumPayrollAndHr,
                    Label: "maxime",
                    Value: 8638.56,
                },
                shared.EmployeeCustomNumberFields{
                    Category: shared.EmployeeCustomNumberFieldsCategoryEnumPayrollAndHr,
                    Label: "soluta",
                    Value: 1175.31,
                },
                shared.EmployeeCustomNumberFields{
                    Category: shared.EmployeeCustomNumberFieldsCategoryEnumPayrollAndHr,
                    Label: "laborum",
                    Value: 5173.79,
                },
            },
            CustomTextFields: []shared.EmployeeCustomTextFields{
                shared.EmployeeCustomTextFields{
                    Category: shared.EmployeeCustomTextFieldsCategoryEnumPayrollAndHr,
                    Label: "aspernatur",
                    Value: "dolores",
                },
                shared.EmployeeCustomTextFields{
                    Category: shared.EmployeeCustomTextFieldsCategoryEnumPayrollAndHr,
                    Label: "distinctio",
                    Value: "facilis",
                },
            },
            DepartmentPosition: &shared.EmployeeDepartmentPosition{
                ChangeReason: sdk.String("aliquid"),
                ClockBadgeNumber: sdk.String("quam"),
                CostCenter1: sdk.String("molestias"),
                CostCenter2: sdk.String("temporibus"),
                CostCenter3: sdk.String("qui"),
                EffectiveDate: sdk.String("neque"),
                EmployeeType: sdk.String("fugit"),
                EqualEmploymentOpportunityClass: sdk.String("magni"),
                IsMinimumWageExempt: sdk.Bool(false),
                IsOvertimeExempt: sdk.Bool(false),
                IsSupervisorReviewer: sdk.Bool(false),
                IsUnionDuesCollected: sdk.Bool(false),
                IsUnionInitiationCollected: sdk.Bool(false),
                JobTitle: sdk.String("Central Research Director"),
                PayGroup: sdk.String("nam"),
                PositionCode: sdk.String("hic"),
                ReviewerCompanyNumber: sdk.String("voluptatem"),
                ReviewerEmployeeID: sdk.String("cumque"),
                Shift: sdk.String("soluta"),
                SupervisorCompanyNumber: sdk.String("nobis"),
                SupervisorEmployeeID: sdk.String("et"),
                Tipped: sdk.String("saepe"),
                UnionAffiliationDate: sdk.String("ipsum"),
                UnionCode: sdk.String("veritatis"),
                UnionPosition: sdk.String("nobis"),
                WorkersCompensation: sdk.String("quos"),
            },
            DisabilityDescription: sdk.String("tempore"),
            EmergencyContacts: []shared.EmployeeEmergencyContacts{
                shared.EmployeeEmergencyContacts{
                    Address1: sdk.String("aperiam"),
                    Address2: sdk.String("delectus"),
                    City: sdk.String("West Edmund"),
                    Country: sdk.String("Dominica"),
                    County: sdk.String("dolorum"),
                    Email: sdk.String("Angus_Armstrong@gmail.com"),
                    FirstName: "Adelbert",
                    HomePhone: sdk.String("est"),
                    LastName: "Skiles",
                    MobilePhone: sdk.String("porro"),
                    Notes: sdk.String("doloribus"),
                    Pager: sdk.String("ut"),
                    PrimaryPhone: sdk.String("facilis"),
                    Priority: sdk.String("cupiditate"),
                    Relationship: sdk.String("qui"),
                    State: sdk.String("quae"),
                    SyncEmployeeInfo: sdk.Bool(false),
                    WorkExtension: sdk.String("laudantium"),
                    WorkPhone: sdk.String("odio"),
                    Zip: sdk.String("occaecati"),
                },
                shared.EmployeeEmergencyContacts{
                    Address1: sdk.String("voluptatibus"),
                    Address2: sdk.String("quisquam"),
                    City: sdk.String("Newport Beach"),
                    Country: sdk.String("Greenland"),
                    County: sdk.String("ipsum"),
                    Email: sdk.String("Jackie_Feeney49@hotmail.com"),
                    FirstName: "Troy",
                    HomePhone: sdk.String("distinctio"),
                    LastName: "Schmidt",
                    MobilePhone: sdk.String("odio"),
                    Notes: sdk.String("similique"),
                    Pager: sdk.String("facilis"),
                    PrimaryPhone: sdk.String("vero"),
                    Priority: sdk.String("ducimus"),
                    Relationship: sdk.String("dolore"),
                    State: sdk.String("quibusdam"),
                    SyncEmployeeInfo: sdk.Bool(false),
                    WorkExtension: sdk.String("illum"),
                    WorkPhone: sdk.String("sequi"),
                    Zip: sdk.String("natus"),
                },
                shared.EmployeeEmergencyContacts{
                    Address1: sdk.String("impedit"),
                    Address2: sdk.String("aut"),
                    City: sdk.String("Germantown"),
                    Country: sdk.String("Switzerland"),
                    County: sdk.String("fugit"),
                    Email: sdk.String("Willie_Wyman@hotmail.com"),
                    FirstName: "Jess",
                    HomePhone: sdk.String("alias"),
                    LastName: "Nikolaus",
                    MobilePhone: sdk.String("tempora"),
                    Notes: sdk.String("ipsam"),
                    Pager: sdk.String("ea"),
                    PrimaryPhone: sdk.String("aspernatur"),
                    Priority: sdk.String("vel"),
                    Relationship: sdk.String("possimus"),
                    State: sdk.String("magnam"),
                    SyncEmployeeInfo: sdk.Bool(false),
                    WorkExtension: sdk.String("ratione"),
                    WorkPhone: sdk.String("ex"),
                    Zip: sdk.String("laudantium"),
                },
            },
            EmployeeID: sdk.String("dicta"),
            Ethnicity: sdk.String("dolor"),
            FederalTax: &shared.EmployeeFederalTax{
                Amount: sdk.Float64(9807),
                DeductionsAmount: sdk.Float64(978.44),
                DependentsAmount: sdk.Float64(4061.2),
                Exemptions: sdk.Float64(8621.92),
                FilingStatus: sdk.String("excepturi"),
                HigherRate: sdk.Bool(false),
                OtherIncomeAmount: sdk.Float64(9729.2),
                Percentage: sdk.Float64(3436.05),
                TaxCalculationCode: sdk.String("sapiente"),
                W4FormYear: sdk.Int64(788873),
            },
            FirstName: sdk.String("Sven"),
            Gender: sdk.String("female"),
            HomeAddress: &shared.EmployeeHomeAddress{
                Address1: sdk.String("impedit"),
                Address2: sdk.String("corporis"),
                City: sdk.String("South Armando"),
                Country: sdk.String("French Polynesia"),
                County: sdk.String("ea"),
                EmailAddress: sdk.String("quo"),
                MobilePhone: sdk.String("consectetur"),
                Phone: sdk.String("1-330-970-0573 x18020"),
                PostalCode: sdk.String("68244-7588"),
                State: sdk.String("voluptas"),
            },
            IsHighlyCompensated: sdk.Bool(false),
            IsSmoker: sdk.Bool(false),
            LastName: sdk.String("Reinger"),
            LocalTax: []shared.EmployeeLocalTax{
                shared.EmployeeLocalTax{
                    Exemptions: sdk.Float64(2703.28),
                    Exemptions2: sdk.Float64(2561.39),
                    FilingStatus: sdk.String("explicabo"),
                    ResidentPSD: sdk.String("provident"),
                    TaxCode: sdk.String("ipsa"),
                    WorkPSD: sdk.String("molestiae"),
                },
            },
            MainDirectDeposit: &shared.EmployeeMainDirectDeposit{
                AccountNumber: sdk.String("magnam"),
                AccountType: sdk.String("odio"),
                BlockSpecial: sdk.Bool(false),
                IsSkipPreNote: sdk.Bool(false),
                NameOnAccount: sdk.String("eius"),
                PreNoteDate: sdk.String("esse"),
                RoutingNumber: sdk.String("esse"),
            },
            MaritalStatus: sdk.String("rem"),
            MiddleName: sdk.String("fuga"),
            NonPrimaryStateTax: &shared.EmployeeNonPrimaryStateTax{
                Amount: sdk.Float64(4420.15),
                DeductionsAmount: sdk.Float64(6956.26),
                DependentsAmount: sdk.Float64(8526.35),
                Exemptions: sdk.Float64(2835.19),
                Exemptions2: sdk.Float64(4334.39),
                FilingStatus: sdk.String("suscipit"),
                HigherRate: sdk.Bool(false),
                OtherIncomeAmount: sdk.Float64(8268.71),
                Percentage: sdk.Float64(1811.51),
                ReciprocityCode: sdk.String("praesentium"),
                SpecialCheckCalc: sdk.String("quisquam"),
                TaxCalculationCode: sdk.String("veritatis"),
                TaxCode: sdk.String("ipsa"),
                W4FormYear: sdk.Int64(660040),
            },
            OwnerPercent: sdk.Float64(6969.97),
            PreferredName: sdk.String("neque"),
            PrimaryPayRate: &shared.EmployeePrimaryPayRate{
                AnnualSalary: sdk.Float64(7786.96),
                BaseRate: sdk.Float64(8472.76),
                BeginCheckDate: sdk.String("quo"),
                ChangeReason: sdk.String("fuga"),
                DefaultHours: sdk.Float64(2594.22),
                EffectiveDate: sdk.String("eos"),
                IsAutoPay: sdk.Bool(false),
                PayFrequency: sdk.String("voluptas"),
                PayGrade: sdk.String("ab"),
                PayRateNote: sdk.String("cupiditate"),
                PayType: sdk.String("consequatur"),
                RatePer: sdk.String("tempora"),
                Salary: sdk.Float64(8920.5),
            },
            PrimaryStateTax: &shared.EmployeePrimaryStateTax{
                Amount: sdk.Float64(3708.53),
                DeductionsAmount: sdk.Float64(1334.65),
                DependentsAmount: sdk.Float64(1970.54),
                Exemptions: sdk.Float64(7791.92),
                Exemptions2: sdk.Float64(4598.56),
                FilingStatus: sdk.String("recusandae"),
                HigherRate: sdk.Bool(false),
                OtherIncomeAmount: sdk.Float64(446.12),
                Percentage: sdk.Float64(7151.79),
                SpecialCheckCalc: sdk.String("quod"),
                TaxCalculationCode: sdk.String("dignissimos"),
                TaxCode: sdk.String("inventore"),
                W4FormYear: sdk.Int64(469498),
            },
            PriorLastName: sdk.String("totam"),
            Salutation: sdk.String("accusamus"),
            Ssn: sdk.String("aliquam"),
            Status: &shared.EmployeeStatus{
                AdjustedSeniorityDate: sdk.String("odio"),
                ChangeReason: sdk.String("occaecati"),
                EffectiveDate: sdk.String("commodi"),
                EmployeeStatus: sdk.String("sapiente"),
                HireDate: sdk.String("dolores"),
                IsEligibleForRehire: sdk.Bool(false),
                ReHireDate: sdk.String("deserunt"),
                StatusType: sdk.String("molestiae"),
                TerminationDate: sdk.String("accusantium"),
            },
            Suffix: sdk.String("porro"),
            TaxSetup: &shared.EmployeeTaxSetup{
                FitwExemptNotes: sdk.String("eum"),
                FitwExemptReason: sdk.String("quas"),
                FutaExemptNotes: sdk.String("praesentium"),
                FutaExemptReason: sdk.String("consequuntur"),
                IsEmployee943: sdk.Bool(false),
                IsPension: sdk.Bool(false),
                IsStatutory: sdk.Bool(false),
                MedExemptNotes: sdk.String("deleniti"),
                MedExemptReason: sdk.String("fugit"),
                SitwExemptNotes: sdk.String("fuga"),
                SitwExemptReason: sdk.String("mollitia"),
                SsExemptNotes: sdk.String("incidunt"),
                SsExemptReason: sdk.String("atque"),
                SuiExemptNotes: sdk.String("explicabo"),
                SuiExemptReason: sdk.String("minima"),
                SuiState: sdk.String("nisi"),
                TaxDistributionCode1099R: sdk.String("fugit"),
                TaxForm: sdk.String("sapiente"),
            },
            VeteranDescription: sdk.String("consequuntur"),
            WebTime: &shared.EmployeeWebTime{
                BadgeNumber: sdk.String("ratione"),
                ChargeRate: sdk.Float64(1294.12),
                IsTimeLaborEnabled: sdk.Bool(false),
            },
            WorkAddress: &shared.EmployeeWorkAddress{
                Address1: sdk.String("saepe"),
                Address2: sdk.String("occaecati"),
                City: sdk.String("Audreyport"),
                Country: sdk.String("Turkey"),
                County: sdk.String("accusamus"),
                EmailAddress: sdk.String("veritatis"),
                Location: sdk.String("esse"),
                MailStop: sdk.String("quod"),
                MobilePhone: sdk.String("nam"),
                Pager: sdk.String("vero"),
                Phone: sdk.String("1-294-746-5377 x067"),
                PhoneExtension: sdk.String("adipisci"),
                PostalCode: sdk.String("10739-2455"),
                State: sdk.String("a"),
            },
            WorkEligibility: &shared.EmployeeWorkEligibility{
                AlienOrAdmissionDocumentNumber: sdk.String("nulla"),
                AttestedDate: sdk.String("quas"),
                CountryOfIssuance: sdk.String("esse"),
                ForeignPassportNumber: sdk.String("quasi"),
                I94AdmissionNumber: sdk.String("a"),
                I9DateVerified: sdk.String("error"),
                I9Notes: sdk.String("sint"),
                IsI9Verified: sdk.Bool(false),
                IsSsnVerified: sdk.Bool(false),
                SsnDateVerified: sdk.String("pariatur"),
                SsnNotes: sdk.String("possimus"),
                VisaType: sdk.String("quia"),
                WorkAuthorization: sdk.String("eveniet"),
                WorkUntil: sdk.String("asperiores"),
            },
        },
        EmployeeID: "facere",
    }, operations.UpdateEmployeeSecurity{
        PaylocityAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
