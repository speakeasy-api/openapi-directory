# Patient

## Overview

A patient is the core user of Fitbit Plus.

### Available Operations

* [CreatePatient](#createpatient) - Create a patient
* [FetchPatient](#fetchpatient) - Get a patient
* [FetchPatientCoaches](#fetchpatientcoaches) - List coaches for a patient
* [FetchPatientGroups](#fetchpatientgroups) - List groups for a patient
* [FetchPatients](#fetchpatients) - List patients
* [UpdatePatient](#updatepatient) - Update a patient
* [UpsertPatient](#upsertpatient) - Upsert patient

## CreatePatient

Create a patient record.

Example for creating a patient with a group specified using `meta.query` instead of `id`:

```JSON
{
  "data": {
    "type": "patient",
    "attributes": {
      "first_name": "Andrew",
      "last_name": "Smith"
    },
    "relationships": {
      "groups": {
        "data": [
          {
            "type": "group",
            "meta": {
              "query": {
                "organization": "58c88de7c93eb96357a87033",
                "name": "Patients Lead"
              }
            }
          }
        ]
      }
    }
  }
}
```


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Patient.CreatePatient(ctx, shared.CreatePatientRequestInput{
        Data: shared.PatientCreateResourceInput{
            Attributes: shared.PatientCreateResourceAttributesInput{
                Addresses: []shared.Address{
                    shared.Address{
                        City: sdk.String("Cambridge"),
                        Country: sdk.String("Eritrea"),
                        District: sdk.String("ipsa"),
                        Lines: []string{
                            "vero",
                            "sequi",
                            "repudiandae",
                        },
                        PostalCode: sdk.String("02138"),
                        State: sdk.String("MA"),
                        Text: sdk.String("cum"),
                        Type: sdk.String("dicta"),
                        Use: sdk.String("earum"),
                    },
                },
                ArchiveHistory: []shared.ArchiveHistory{
                    shared.ArchiveHistory{
                        Archived: sdk.Bool(true),
                        ModifiedAt: sdk.String("2016-06-03T13:15:22.000Z"),
                        Notes: sdk.String("Patient called requesting opt out of coaching"),
                        Reason: sdk.String("Opted out of coaching"),
                    },
                    shared.ArchiveHistory{
                        Archived: sdk.Bool(true),
                        ModifiedAt: sdk.String("2016-06-03T13:15:22.000Z"),
                        Notes: sdk.String("Patient called requesting opt out of coaching"),
                        Reason: sdk.String("Opted out of coaching"),
                    },
                },
                BirthDate: types.MustDateFromString("1944-03-06"),
                EmailAddress: sdk.String("fiona@example.com"),
                FirstName: sdk.String("Fiona"),
                Gender: shared.PatientCreateResourceAttributesGenderEnumFemale.ToPointer(),
                Identifiers: []shared.PatientIdentifier{
                    shared.PatientIdentifier{
                        Label: sdk.String("dolores"),
                        System: "nam",
                        Unique: sdk.Bool(false),
                        Value: "dicta",
                    },
                    shared.PatientIdentifier{
                        Label: sdk.String("consequuntur"),
                        System: "necessitatibus",
                        Unique: sdk.Bool(false),
                        Value: "nobis",
                    },
                    shared.PatientIdentifier{
                        Label: sdk.String("ipsa"),
                        System: "ducimus",
                        Unique: sdk.Bool(false),
                        Value: "maiores",
                    },
                },
                LastName: sdk.String("Reeves"),
                Note: sdk.String("Relies on daughter to get around"),
                PhoneNumbers: []shared.PhoneNumber{
                    shared.PhoneNumber{
                        Primary: true,
                        Type: shared.PhoneNumberTypeEnumMobile,
                        Value: "555-555-1234",
                    },
                },
            },
            ID: sdk.String("57b36ef304ad8c2224f2af3a"),
            Relationships: &shared.PatientCreateResourceRelationshipsInput{
                Coaches: &shared.PatientCreateResourceRelationshipsCoachesInput{
                    Data: []shared.PatientCreateResourceRelationshipsCoachesData{
                        shared.PatientCreateResourceRelationshipsCoachesData{
                            ID: "57fee2a66b49113551658505",
                            Meta: &shared.PatientCreateResourceRelationshipsCoachesDataMeta{
                                Primary: sdk.Bool(false),
                            },
                            Type: shared.PatientCreateResourceRelationshipsCoachesDataTypeEnumCoach,
                        },
                    },
                },
                Groups: shared.PatientCreateResourceRelationshipsGroups{
                    Data: []shared.PatientCreateResourceRelationshipsGroupsData{
                        shared.PatientCreateResourceRelationshipsGroupsData{
                            ID: sdk.String("57b3708b04ad8c2224f2af3b"),
                            Meta: &shared.PatientCreateResourceRelationshipsGroupsDataMeta{
                                Query: shared.PatientCreateResourceRelationshipsGroupsDataMetaQuery{
                                    Name: "Pete Mann",
                                    Organization: "aliquam",
                                },
                            },
                            Type: shared.PatientCreateResourceRelationshipsGroupsDataTypeEnumGroup,
                        },
                        shared.PatientCreateResourceRelationshipsGroupsData{
                            ID: sdk.String("57b3708b04ad8c2224f2af3b"),
                            Meta: &shared.PatientCreateResourceRelationshipsGroupsDataMeta{
                                Query: shared.PatientCreateResourceRelationshipsGroupsDataMetaQuery{
                                    Name: "Nettie Rosenbaum",
                                    Organization: "hic",
                                },
                            },
                            Type: shared.PatientCreateResourceRelationshipsGroupsDataTypeEnumGroup,
                        },
                    },
                },
            },
            Type: shared.PatientCreateResourceTypeEnumPatient,
        },
        Meta: &shared.CreatePatientRequestMeta{
            IgnoreDuplicates: sdk.Bool(false),
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreatePatientResponse != nil {
        // handle response
    }
}
```

## FetchPatient

Gets a patient record by id.

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
    res, err := s.Patient.FetchPatient(ctx, operations.FetchPatientRequest{
        ID: "a88970e1-89db-4b30-bcb3-3ea055b197cd",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FetchPatientResponse != nil {
        // handle response
    }
}
```

## FetchPatientCoaches

Get the list of coaches for a patient.

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
    res, err := s.Patient.FetchPatientCoaches(ctx, operations.FetchPatientCoachesRequest{
        ID: "44e2f52d-82d3-4513-bb6f-48b656bcdb35",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FetchCoachesResponse != nil {
        // handle response
    }
}
```

## FetchPatientGroups

Get the list of groups for a patient.

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
    res, err := s.Patient.FetchPatientGroups(ctx, operations.FetchPatientGroupsRequest{
        ID: "ff2e4b27-537a-48cd-9e73-19c177d525f7",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FetchGroupsResponse != nil {
        // handle response
    }
}
```

## FetchPatients

Get a list of patients.

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
    res, err := s.Patient.FetchPatients(ctx, operations.FetchPatientsRequest{
        FilterArchived: sdk.Bool(false),
        FilterCreatedAt: sdk.String("dignissimos"),
        FilterGroups: sdk.String("libero"),
        FilterIdentifierSystem: sdk.String("illo"),
        FilterIdentifierValue: sdk.String("ab"),
        FilterOrganization: sdk.String("incidunt"),
        FilterUpdatedAt: sdk.String("accusamus"),
        PageCursor: sdk.String("saepe"),
        PageLimit: sdk.Int64(734814),
        PageNumber: sdk.Int64(334018),
        PageSize: sdk.Int64(176499),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FetchPatientsResponse != nil {
        // handle response
    }
}
```

## UpdatePatient

Update a patient record.

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
    res, err := s.Patient.UpdatePatient(ctx, operations.UpdatePatientRequest{
        UpdatePatientRequestInput: shared.UpdatePatientRequestInput{
            Data: shared.PatientResourceInput{
                Attributes: shared.PatientResourceAttributesInput{
                    Addresses: []shared.Address{
                        shared.Address{
                            City: sdk.String("Cambridge"),
                            Country: sdk.String("United Kingdom"),
                            District: sdk.String("reprehenderit"),
                            Lines: []string{
                                "nemo",
                                "repellat",
                                "quisquam",
                            },
                            PostalCode: sdk.String("02138"),
                            State: sdk.String("MA"),
                            Text: sdk.String("sequi"),
                            Type: sdk.String("nihil"),
                            Use: sdk.String("deleniti"),
                        },
                        shared.Address{
                            City: sdk.String("Cambridge"),
                            Country: sdk.String("Barbados"),
                            District: sdk.String("labore"),
                            Lines: []string{
                                "aliquam",
                                "quisquam",
                                "provident",
                                "laudantium",
                            },
                            PostalCode: sdk.String("02138"),
                            State: sdk.String("MA"),
                            Text: sdk.String("repudiandae"),
                            Type: sdk.String("consequatur"),
                            Use: sdk.String("maxime"),
                        },
                        shared.Address{
                            City: sdk.String("Cambridge"),
                            Country: sdk.String("Burkina Faso"),
                            District: sdk.String("nam"),
                            Lines: []string{
                                "quas",
                                "provident",
                                "repudiandae",
                            },
                            PostalCode: sdk.String("02138"),
                            State: sdk.String("MA"),
                            Text: sdk.String("rerum"),
                            Type: sdk.String("dignissimos"),
                            Use: sdk.String("corporis"),
                        },
                        shared.Address{
                            City: sdk.String("Cambridge"),
                            Country: sdk.String("Tajikistan"),
                            District: sdk.String("similique"),
                            Lines: []string{
                                "iure",
                                "dolorem",
                                "commodi",
                                "impedit",
                            },
                            PostalCode: sdk.String("02138"),
                            State: sdk.String("MA"),
                            Text: sdk.String("commodi"),
                            Type: sdk.String("aut"),
                            Use: sdk.String("voluptatem"),
                        },
                    },
                    ArchiveHistory: []shared.ArchiveHistory{
                        shared.ArchiveHistory{
                            Archived: sdk.Bool(true),
                            ModifiedAt: sdk.String("2016-06-03T13:15:22.000Z"),
                            Notes: sdk.String("Patient called requesting opt out of coaching"),
                            Reason: sdk.String("Opted out of coaching"),
                        },
                        shared.ArchiveHistory{
                            Archived: sdk.Bool(true),
                            ModifiedAt: sdk.String("2016-06-03T13:15:22.000Z"),
                            Notes: sdk.String("Patient called requesting opt out of coaching"),
                            Reason: sdk.String("Opted out of coaching"),
                        },
                    },
                    BirthDate: types.MustDateFromString("1944-03-06"),
                    EmailAddress: sdk.String("fiona@example.com"),
                    FirstName: sdk.String("Fiona"),
                    Gender: shared.PatientResourceAttributesGenderEnumFemale.ToPointer(),
                    Identifiers: []shared.PatientIdentifier{
                        shared.PatientIdentifier{
                            Label: sdk.String("amet"),
                            System: "illum",
                            Unique: sdk.Bool(false),
                            Value: "praesentium",
                        },
                    },
                    LastName: sdk.String("Reeves"),
                    Note: sdk.String("Relies on daughter to get around"),
                    PhoneNumbers: []shared.PhoneNumber{
                        shared.PhoneNumber{
                            Primary: true,
                            Type: shared.PhoneNumberTypeEnumMobile,
                            Value: "555-555-1234",
                        },
                        shared.PhoneNumber{
                            Primary: true,
                            Type: shared.PhoneNumberTypeEnumMobile,
                            Value: "555-555-1234",
                        },
                        shared.PhoneNumber{
                            Primary: true,
                            Type: shared.PhoneNumberTypeEnumMobile,
                            Value: "555-555-1234",
                        },
                    },
                },
                ID: sdk.String("57b36ef304ad8c2224f2af3a"),
                Relationships: &shared.PatientResourceRelationshipsInput{
                    Coaches: &shared.PatientResourceRelationshipsCoachesInput{
                        Data: []shared.PatientResourceRelationshipsCoachesData{
                            shared.PatientResourceRelationshipsCoachesData{
                                ID: "57fee2a66b49113551658505",
                                Meta: &shared.PatientResourceRelationshipsCoachesDataMeta{
                                    Primary: sdk.Bool(false),
                                },
                                Type: shared.PatientResourceRelationshipsCoachesDataTypeEnumCoach,
                            },
                            shared.PatientResourceRelationshipsCoachesData{
                                ID: "57fee2a66b49113551658505",
                                Meta: &shared.PatientResourceRelationshipsCoachesDataMeta{
                                    Primary: sdk.Bool(false),
                                },
                                Type: shared.PatientResourceRelationshipsCoachesDataTypeEnumCoach,
                            },
                            shared.PatientResourceRelationshipsCoachesData{
                                ID: "57fee2a66b49113551658505",
                                Meta: &shared.PatientResourceRelationshipsCoachesDataMeta{
                                    Primary: sdk.Bool(false),
                                },
                                Type: shared.PatientResourceRelationshipsCoachesDataTypeEnumCoach,
                            },
                        },
                    },
                    Groups: shared.PatientResourceRelationshipsGroups{
                        Data: []shared.PatientResourceRelationshipsGroupsData{
                            shared.PatientResourceRelationshipsGroupsData{
                                ID: sdk.String("57b3708b04ad8c2224f2af3b"),
                                Type: shared.PatientResourceRelationshipsGroupsDataTypeEnumGroup,
                            },
                        },
                    },
                },
                Type: shared.PatientResourceTypeEnumPatient,
            },
        },
        ID: "1180f739-ae9e-4057-ab80-9e2810331f39",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdatePatientResponse != nil {
        // handle response
    }
}
```

## UpsertPatient

Create a new patient or update an existing patient

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Patient.UpsertPatient(ctx, shared.UpsertPatientRequestInput{
        Data: shared.PatientResourceInput{
            Attributes: shared.PatientResourceAttributesInput{
                Addresses: []shared.Address{
                    shared.Address{
                        City: sdk.String("Cambridge"),
                        Country: sdk.String("Bosnia and Herzegovina"),
                        District: sdk.String("at"),
                        Lines: []string{
                            "minus",
                            "esse",
                        },
                        PostalCode: sdk.String("02138"),
                        State: sdk.String("MA"),
                        Text: sdk.String("voluptatem"),
                        Type: sdk.String("perferendis"),
                        Use: sdk.String("rerum"),
                    },
                    shared.Address{
                        City: sdk.String("Cambridge"),
                        Country: sdk.String("Iran"),
                        District: sdk.String("aperiam"),
                        Lines: []string{
                            "repellat",
                            "velit",
                        },
                        PostalCode: sdk.String("02138"),
                        State: sdk.String("MA"),
                        Text: sdk.String("porro"),
                        Type: sdk.String("provident"),
                        Use: sdk.String("consectetur"),
                    },
                    shared.Address{
                        City: sdk.String("Cambridge"),
                        Country: sdk.String("Saint Kitts and Nevis"),
                        District: sdk.String("dignissimos"),
                        Lines: []string{
                            "soluta",
                        },
                        PostalCode: sdk.String("02138"),
                        State: sdk.String("MA"),
                        Text: sdk.String("natus"),
                        Type: sdk.String("temporibus"),
                        Use: sdk.String("officia"),
                    },
                },
                ArchiveHistory: []shared.ArchiveHistory{
                    shared.ArchiveHistory{
                        Archived: sdk.Bool(true),
                        ModifiedAt: sdk.String("2016-06-03T13:15:22.000Z"),
                        Notes: sdk.String("Patient called requesting opt out of coaching"),
                        Reason: sdk.String("Opted out of coaching"),
                    },
                },
                BirthDate: types.MustDateFromString("1944-03-06"),
                EmailAddress: sdk.String("fiona@example.com"),
                FirstName: sdk.String("Fiona"),
                Gender: shared.PatientResourceAttributesGenderEnumFemale.ToPointer(),
                Identifiers: []shared.PatientIdentifier{
                    shared.PatientIdentifier{
                        Label: sdk.String("aspernatur"),
                        System: "quo",
                        Unique: sdk.Bool(false),
                        Value: "itaque",
                    },
                    shared.PatientIdentifier{
                        Label: sdk.String("illum"),
                        System: "laborum",
                        Unique: sdk.Bool(false),
                        Value: "dignissimos",
                    },
                    shared.PatientIdentifier{
                        Label: sdk.String("vero"),
                        System: "qui",
                        Unique: sdk.Bool(false),
                        Value: "consectetur",
                    },
                    shared.PatientIdentifier{
                        Label: sdk.String("repellat"),
                        System: "explicabo",
                        Unique: sdk.Bool(false),
                        Value: "explicabo",
                    },
                },
                LastName: sdk.String("Reeves"),
                Note: sdk.String("Relies on daughter to get around"),
                PhoneNumbers: []shared.PhoneNumber{
                    shared.PhoneNumber{
                        Primary: true,
                        Type: shared.PhoneNumberTypeEnumMobile,
                        Value: "555-555-1234",
                    },
                    shared.PhoneNumber{
                        Primary: true,
                        Type: shared.PhoneNumberTypeEnumMobile,
                        Value: "555-555-1234",
                    },
                },
            },
            ID: sdk.String("57b36ef304ad8c2224f2af3a"),
            Relationships: &shared.PatientResourceRelationshipsInput{
                Coaches: &shared.PatientResourceRelationshipsCoachesInput{
                    Data: []shared.PatientResourceRelationshipsCoachesData{
                        shared.PatientResourceRelationshipsCoachesData{
                            ID: "57fee2a66b49113551658505",
                            Meta: &shared.PatientResourceRelationshipsCoachesDataMeta{
                                Primary: sdk.Bool(false),
                            },
                            Type: shared.PatientResourceRelationshipsCoachesDataTypeEnumCoach,
                        },
                        shared.PatientResourceRelationshipsCoachesData{
                            ID: "57fee2a66b49113551658505",
                            Meta: &shared.PatientResourceRelationshipsCoachesDataMeta{
                                Primary: sdk.Bool(false),
                            },
                            Type: shared.PatientResourceRelationshipsCoachesDataTypeEnumCoach,
                        },
                    },
                },
                Groups: shared.PatientResourceRelationshipsGroups{
                    Data: []shared.PatientResourceRelationshipsGroupsData{
                        shared.PatientResourceRelationshipsGroupsData{
                            ID: sdk.String("57b3708b04ad8c2224f2af3b"),
                            Type: shared.PatientResourceRelationshipsGroupsDataTypeEnumGroup,
                        },
                        shared.PatientResourceRelationshipsGroupsData{
                            ID: sdk.String("57b3708b04ad8c2224f2af3b"),
                            Type: shared.PatientResourceRelationshipsGroupsDataTypeEnumGroup,
                        },
                    },
                },
            },
            Type: shared.PatientResourceTypeEnumPatient,
        },
        Meta: shared.UpsertPatientRequestMeta{
            Query: shared.UpsertPatientRequestMetaQuery{
                Groups: []string{
                    "illo",
                },
                Identifier: shared.UpsertPatientRequestMetaQueryIdentifier{
                    System: sdk.String("hic"),
                    Value: sdk.String("deserunt"),
                },
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreatePatientResponse != nil {
        // handle response
    }
}
```
