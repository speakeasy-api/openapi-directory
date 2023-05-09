# patient

## Overview

A patient is the core user of Fitbit Plus.

### Available Operations

* [createPatient](#createpatient) - Create a patient
* [fetchPatient](#fetchpatient) - Get a patient
* [fetchPatientCoaches](#fetchpatientcoaches) - List coaches for a patient
* [fetchPatientGroups](#fetchpatientgroups) - List groups for a patient
* [fetchPatients](#fetchpatients) - List patients
* [updatePatient](#updatepatient) - Update a patient
* [upsertPatient](#upsertpatient) - Upsert patient

## createPatient

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

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreatePatientResponse;
import org.openapis.openapi.models.shared.Address;
import org.openapis.openapi.models.shared.ArchiveHistory;
import org.openapis.openapi.models.shared.CreatePatientRequestInput;
import org.openapis.openapi.models.shared.CreatePatientRequestMeta;
import org.openapis.openapi.models.shared.PatientCreateResourceAttributesGenderEnum;
import org.openapis.openapi.models.shared.PatientCreateResourceAttributesInput;
import org.openapis.openapi.models.shared.PatientCreateResourceInput;
import org.openapis.openapi.models.shared.PatientCreateResourceRelationshipsCoachesData;
import org.openapis.openapi.models.shared.PatientCreateResourceRelationshipsCoachesDataMeta;
import org.openapis.openapi.models.shared.PatientCreateResourceRelationshipsCoachesDataTypeEnum;
import org.openapis.openapi.models.shared.PatientCreateResourceRelationshipsCoachesInput;
import org.openapis.openapi.models.shared.PatientCreateResourceRelationshipsGroups;
import org.openapis.openapi.models.shared.PatientCreateResourceRelationshipsGroupsData;
import org.openapis.openapi.models.shared.PatientCreateResourceRelationshipsGroupsDataMeta;
import org.openapis.openapi.models.shared.PatientCreateResourceRelationshipsGroupsDataMetaQuery;
import org.openapis.openapi.models.shared.PatientCreateResourceRelationshipsGroupsDataTypeEnum;
import org.openapis.openapi.models.shared.PatientCreateResourceRelationshipsInput;
import org.openapis.openapi.models.shared.PatientCreateResourceTypeEnum;
import org.openapis.openapi.models.shared.PatientIdentifier;
import org.openapis.openapi.models.shared.PhoneNumber;
import org.openapis.openapi.models.shared.PhoneNumberTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.CreatePatientRequestInput req = new CreatePatientRequestInput(                new PatientCreateResourceInput(                new PatientCreateResourceAttributesInput() {{
                                                addresses = new org.openapis.openapi.models.shared.Address[]{{
                                                    add(new Address() {{
                                                        city = "Cambridge";
                                                        country = "Nicaragua";
                                                        district = "asperiores";
                                                        lines = new String[]{{
                                                            add("quae"),
                                                            add("quaerat"),
                                                        }};
                                                        postalCode = "02138";
                                                        state = "MA";
                                                        text = "porro";
                                                        type = "quod";
                                                        use = "labore";
                                                    }}),
                                                    add(new Address() {{
                                                        city = "Cambridge";
                                                        country = "Bangladesh";
                                                        district = "adipisci";
                                                        lines = new String[]{{
                                                            add("id"),
                                                            add("suscipit"),
                                                            add("velit"),
                                                        }};
                                                        postalCode = "02138";
                                                        state = "MA";
                                                        text = "culpa";
                                                        type = "est";
                                                        use = "recusandae";
                                                    }}),
                                                }};
                                                archiveHistory = new org.openapis.openapi.models.shared.ArchiveHistory[]{{
                                                    add(new ArchiveHistory() {{
                                                        archived = true;
                                                        modifiedAt = "2016-06-03T13:15:22.000Z";
                                                        notes = "Patient called requesting opt out of coaching";
                                                        reason = "Opted out of coaching";
                                                    }}),
                                                    add(new ArchiveHistory() {{
                                                        archived = true;
                                                        modifiedAt = "2016-06-03T13:15:22.000Z";
                                                        notes = "Patient called requesting opt out of coaching";
                                                        reason = "Opted out of coaching";
                                                    }}),
                                                    add(new ArchiveHistory() {{
                                                        archived = true;
                                                        modifiedAt = "2016-06-03T13:15:22.000Z";
                                                        notes = "Patient called requesting opt out of coaching";
                                                        reason = "Opted out of coaching";
                                                    }}),
                                                }};
                                                birthDate = LocalDate.parse("1944-03-06");
                                                emailAddress = "fiona@example.com";
                                                firstName = "Fiona";
                                                gender = PatientCreateResourceAttributesGenderEnum.FEMALE;
                                                identifiers = new org.openapis.openapi.models.shared.PatientIdentifier[]{{
                                                    add(new PatientIdentifier("vel", "labore") {{
                                                        label = "vel";
                                                        system = "ducimus";
                                                        unique = false;
                                                        value = "quos";
                                                    }}),
                                                    add(new PatientIdentifier("commodi", "in") {{
                                                        label = "possimus";
                                                        system = "facilis";
                                                        unique = false;
                                                        value = "cum";
                                                    }}),
                                                    add(new PatientIdentifier("nemo", "recusandae") {{
                                                        label = "corporis";
                                                        system = "reiciendis";
                                                        unique = false;
                                                        value = "assumenda";
                                                    }}),
                                                    add(new PatientIdentifier("consectetur", "in") {{
                                                        label = "aliquid";
                                                        system = "aperiam";
                                                        unique = false;
                                                        value = "cum";
                                                    }}),
                                                }};
                                                lastName = "Reeves";
                                                note = "Relies on daughter to get around";
                                                phoneNumbers = new org.openapis.openapi.models.shared.PhoneNumber[]{{
                                                    add(new PhoneNumber(true, PhoneNumberTypeEnum.MOBILE, "555-555-1234") {{
                                                        primary = true;
                                                        type = PhoneNumberTypeEnum.MOBILE;
                                                        value = "555-555-1234";
                                                    }}),
                                                    add(new PhoneNumber(true, PhoneNumberTypeEnum.MOBILE, "555-555-1234") {{
                                                        primary = true;
                                                        type = PhoneNumberTypeEnum.MOBILE;
                                                        value = "555-555-1234";
                                                    }}),
                                                }};
                                            }};, PatientCreateResourceTypeEnum.PATIENT) {{
                                id = "57b36ef304ad8c2224f2af3a";
                                relationships = new PatientCreateResourceRelationshipsInput(                new PatientCreateResourceRelationshipsGroups(                new org.openapis.openapi.models.shared.PatientCreateResourceRelationshipsGroupsData[]{{
                                                                    add(new PatientCreateResourceRelationshipsGroupsData(PatientCreateResourceRelationshipsGroupsDataTypeEnum.GROUP) {{
                                                                        id = "57b3708b04ad8c2224f2af3b";
                                                                        meta = new PatientCreateResourceRelationshipsGroupsDataMeta(                new PatientCreateResourceRelationshipsGroupsDataMetaQuery("dolore", "sunt");) {{
                                                                            query = new PatientCreateResourceRelationshipsGroupsDataMetaQuery("saepe", "necessitatibus") {{
                                                                                name = "Jesus Yost";
                                                                                organization = "quidem";
                                                                            }};
                                                                        }};
                                                                        type = PatientCreateResourceRelationshipsGroupsDataTypeEnum.GROUP;
                                                                    }}),
                                                                    add(new PatientCreateResourceRelationshipsGroupsData(PatientCreateResourceRelationshipsGroupsDataTypeEnum.GROUP) {{
                                                                        id = "57b3708b04ad8c2224f2af3b";
                                                                        meta = new PatientCreateResourceRelationshipsGroupsDataMeta(                new PatientCreateResourceRelationshipsGroupsDataMetaQuery("corporis", "harum");) {{
                                                                            query = new PatientCreateResourceRelationshipsGroupsDataMetaQuery("debitis", "consectetur") {{
                                                                                name = "Chad Franey IV";
                                                                                organization = "a";
                                                                            }};
                                                                        }};
                                                                        type = PatientCreateResourceRelationshipsGroupsDataTypeEnum.GROUP;
                                                                    }}),
                                                                    add(new PatientCreateResourceRelationshipsGroupsData(PatientCreateResourceRelationshipsGroupsDataTypeEnum.GROUP) {{
                                                                        id = "57b3708b04ad8c2224f2af3b";
                                                                        meta = new PatientCreateResourceRelationshipsGroupsDataMeta(                new PatientCreateResourceRelationshipsGroupsDataMetaQuery("voluptas", "voluptas");) {{
                                                                            query = new PatientCreateResourceRelationshipsGroupsDataMetaQuery("tempora", "aspernatur") {{
                                                                                name = "Melissa Von PhD";
                                                                                organization = "similique";
                                                                            }};
                                                                        }};
                                                                        type = PatientCreateResourceRelationshipsGroupsDataTypeEnum.GROUP;
                                                                    }}),
                                                                    add(new PatientCreateResourceRelationshipsGroupsData(PatientCreateResourceRelationshipsGroupsDataTypeEnum.GROUP) {{
                                                                        id = "57b3708b04ad8c2224f2af3b";
                                                                        meta = new PatientCreateResourceRelationshipsGroupsDataMeta(                new PatientCreateResourceRelationshipsGroupsDataMetaQuery("in", "dolore");) {{
                                                                            query = new PatientCreateResourceRelationshipsGroupsDataMetaQuery("dolores", "blanditiis") {{
                                                                                name = "Cathy Rohan";
                                                                                organization = "minus";
                                                                            }};
                                                                        }};
                                                                        type = PatientCreateResourceRelationshipsGroupsDataTypeEnum.GROUP;
                                                                    }}),
                                                                }});) {{
                                    coaches = new PatientCreateResourceRelationshipsCoachesInput(                new org.openapis.openapi.models.shared.PatientCreateResourceRelationshipsCoachesData[]{{
                                                        add(new PatientCreateResourceRelationshipsCoachesData("57fee2a66b49113551658505", PatientCreateResourceRelationshipsCoachesDataTypeEnum.COACH) {{
                                                            id = "57fee2a66b49113551658505";
                                                            meta = new PatientCreateResourceRelationshipsCoachesDataMeta() {{
                                                                primary = false;
                                                            }};
                                                            type = PatientCreateResourceRelationshipsCoachesDataTypeEnum.COACH;
                                                        }}),
                                                        add(new PatientCreateResourceRelationshipsCoachesData("57fee2a66b49113551658505", PatientCreateResourceRelationshipsCoachesDataTypeEnum.COACH) {{
                                                            id = "57fee2a66b49113551658505";
                                                            meta = new PatientCreateResourceRelationshipsCoachesDataMeta() {{
                                                                primary = false;
                                                            }};
                                                            type = PatientCreateResourceRelationshipsCoachesDataTypeEnum.COACH;
                                                        }}),
                                                    }});;
                                }};;
                            }};) {{
                meta = new CreatePatientRequestMeta() {{
                    ignoreDuplicates = false;
                }};;
            }};            

            CreatePatientResponse res = sdk.patient.createPatient(req);

            if (res.createPatientResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchPatient

Gets a patient record by id.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchPatientRequest;
import org.openapis.openapi.models.operations.FetchPatientResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchPatientRequest req = new FetchPatientRequest("officiis");            

            FetchPatientResponse res = sdk.patient.fetchPatient(req);

            if (res.fetchPatientResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchPatientCoaches

Get the list of coaches for a patient.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchPatientCoachesRequest;
import org.openapis.openapi.models.operations.FetchPatientCoachesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchPatientCoachesRequest req = new FetchPatientCoachesRequest("temporibus");            

            FetchPatientCoachesResponse res = sdk.patient.fetchPatientCoaches(req);

            if (res.fetchCoachesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchPatientGroups

Get the list of groups for a patient.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchPatientGroupsRequest;
import org.openapis.openapi.models.operations.FetchPatientGroupsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchPatientGroupsRequest req = new FetchPatientGroupsRequest("ullam");            

            FetchPatientGroupsResponse res = sdk.patient.fetchPatientGroups(req);

            if (res.fetchGroupsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchPatients

Get a list of patients.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchPatientsRequest;
import org.openapis.openapi.models.operations.FetchPatientsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchPatientsRequest req = new FetchPatientsRequest() {{
                filterArchived = false;
                filterCreatedAt = "adipisci";
                filterGroups = "cum";
                filterIdentifierSystem = "blanditiis";
                filterIdentifierValue = "quas";
                filterOrganization = "hic";
                filterUpdatedAt = "nesciunt";
                pageCursor = "culpa";
                pageLimit = 548519L;
                pageNumber = 867290L;
                pageSize = 519643L;
            }};            

            FetchPatientsResponse res = sdk.patient.fetchPatients(req);

            if (res.fetchPatientsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updatePatient

Update a patient record.

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdatePatientRequest;
import org.openapis.openapi.models.operations.UpdatePatientResponse;
import org.openapis.openapi.models.shared.Address;
import org.openapis.openapi.models.shared.ArchiveHistory;
import org.openapis.openapi.models.shared.PatientIdentifier;
import org.openapis.openapi.models.shared.PatientResourceAttributesGenderEnum;
import org.openapis.openapi.models.shared.PatientResourceAttributesInput;
import org.openapis.openapi.models.shared.PatientResourceInput;
import org.openapis.openapi.models.shared.PatientResourceRelationshipsCoachesData;
import org.openapis.openapi.models.shared.PatientResourceRelationshipsCoachesDataMeta;
import org.openapis.openapi.models.shared.PatientResourceRelationshipsCoachesDataTypeEnum;
import org.openapis.openapi.models.shared.PatientResourceRelationshipsCoachesInput;
import org.openapis.openapi.models.shared.PatientResourceRelationshipsGroups;
import org.openapis.openapi.models.shared.PatientResourceRelationshipsGroupsData;
import org.openapis.openapi.models.shared.PatientResourceRelationshipsGroupsDataTypeEnum;
import org.openapis.openapi.models.shared.PatientResourceRelationshipsInput;
import org.openapis.openapi.models.shared.PatientResourceTypeEnum;
import org.openapis.openapi.models.shared.PhoneNumber;
import org.openapis.openapi.models.shared.PhoneNumberTypeEnum;
import org.openapis.openapi.models.shared.UpdatePatientRequestInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdatePatientRequest req = new UpdatePatientRequest(                new UpdatePatientRequestInput(                new PatientResourceInput(                new PatientResourceAttributesInput() {{
                                                                addresses = new org.openapis.openapi.models.shared.Address[]{{
                                                                    add(new Address() {{
                                                                        city = "Cambridge";
                                                                        country = "Guam";
                                                                        district = "nobis";
                                                                        lines = new String[]{{
                                                                            add("rerum"),
                                                                        }};
                                                                        postalCode = "02138";
                                                                        state = "MA";
                                                                        text = "sed";
                                                                        type = "reiciendis";
                                                                        use = "explicabo";
                                                                    }}),
                                                                    add(new Address() {{
                                                                        city = "Cambridge";
                                                                        country = "Zambia";
                                                                        district = "facilis";
                                                                        lines = new String[]{{
                                                                            add("expedita"),
                                                                            add("ab"),
                                                                        }};
                                                                        postalCode = "02138";
                                                                        state = "MA";
                                                                        text = "iste";
                                                                        type = "dolore";
                                                                        use = "laborum";
                                                                    }}),
                                                                    add(new Address() {{
                                                                        city = "Cambridge";
                                                                        country = "Canada";
                                                                        district = "in";
                                                                        lines = new String[]{{
                                                                            add("quidem"),
                                                                            add("explicabo"),
                                                                        }};
                                                                        postalCode = "02138";
                                                                        state = "MA";
                                                                        text = "voluptas";
                                                                        type = "unde";
                                                                        use = "architecto";
                                                                    }}),
                                                                    add(new Address() {{
                                                                        city = "Cambridge";
                                                                        country = "Holy See (Vatican City State)";
                                                                        district = "sapiente";
                                                                        lines = new String[]{{
                                                                            add("illo"),
                                                                            add("reiciendis"),
                                                                            add("perferendis"),
                                                                            add("corrupti"),
                                                                        }};
                                                                        postalCode = "02138";
                                                                        state = "MA";
                                                                        text = "maiores";
                                                                        type = "incidunt";
                                                                        use = "sed";
                                                                    }}),
                                                                }};
                                                                archiveHistory = new org.openapis.openapi.models.shared.ArchiveHistory[]{{
                                                                    add(new ArchiveHistory() {{
                                                                        archived = true;
                                                                        modifiedAt = "2016-06-03T13:15:22.000Z";
                                                                        notes = "Patient called requesting opt out of coaching";
                                                                        reason = "Opted out of coaching";
                                                                    }}),
                                                                    add(new ArchiveHistory() {{
                                                                        archived = true;
                                                                        modifiedAt = "2016-06-03T13:15:22.000Z";
                                                                        notes = "Patient called requesting opt out of coaching";
                                                                        reason = "Opted out of coaching";
                                                                    }}),
                                                                    add(new ArchiveHistory() {{
                                                                        archived = true;
                                                                        modifiedAt = "2016-06-03T13:15:22.000Z";
                                                                        notes = "Patient called requesting opt out of coaching";
                                                                        reason = "Opted out of coaching";
                                                                    }}),
                                                                }};
                                                                birthDate = LocalDate.parse("1944-03-06");
                                                                emailAddress = "fiona@example.com";
                                                                firstName = "Fiona";
                                                                gender = PatientResourceAttributesGenderEnum.FEMALE;
                                                                identifiers = new org.openapis.openapi.models.shared.PatientIdentifier[]{{
                                                                    add(new PatientIdentifier("occaecati", "quos") {{
                                                                        label = "necessitatibus";
                                                                        system = "ipsum";
                                                                        unique = false;
                                                                        value = "ea";
                                                                    }}),
                                                                    add(new PatientIdentifier("voluptate", "reiciendis") {{
                                                                        label = "voluptatibus";
                                                                        system = "tempora";
                                                                        unique = false;
                                                                        value = "tempora";
                                                                    }}),
                                                                }};
                                                                lastName = "Reeves";
                                                                note = "Relies on daughter to get around";
                                                                phoneNumbers = new org.openapis.openapi.models.shared.PhoneNumber[]{{
                                                                    add(new PhoneNumber(true, PhoneNumberTypeEnum.MOBILE, "555-555-1234") {{
                                                                        primary = true;
                                                                        type = PhoneNumberTypeEnum.MOBILE;
                                                                        value = "555-555-1234";
                                                                    }}),
                                                                    add(new PhoneNumber(true, PhoneNumberTypeEnum.MOBILE, "555-555-1234") {{
                                                                        primary = true;
                                                                        type = PhoneNumberTypeEnum.MOBILE;
                                                                        value = "555-555-1234";
                                                                    }}),
                                                                }};
                                                            }};, PatientResourceTypeEnum.PATIENT) {{
                                                id = "57b36ef304ad8c2224f2af3a";
                                                relationships = new PatientResourceRelationshipsInput(                new PatientResourceRelationshipsGroups(                new org.openapis.openapi.models.shared.PatientResourceRelationshipsGroupsData[]{{
                                                                                    add(new PatientResourceRelationshipsGroupsData(PatientResourceRelationshipsGroupsDataTypeEnum.GROUP) {{
                                                                                        id = "57b3708b04ad8c2224f2af3b";
                                                                                        type = PatientResourceRelationshipsGroupsDataTypeEnum.GROUP;
                                                                                    }}),
                                                                                }});) {{
                                                    coaches = new PatientResourceRelationshipsCoachesInput(                new org.openapis.openapi.models.shared.PatientResourceRelationshipsCoachesData[]{{
                                                                        add(new PatientResourceRelationshipsCoachesData("57fee2a66b49113551658505", PatientResourceRelationshipsCoachesDataTypeEnum.COACH) {{
                                                                            id = "57fee2a66b49113551658505";
                                                                            meta = new PatientResourceRelationshipsCoachesDataMeta() {{
                                                                                primary = false;
                                                                            }};
                                                                            type = PatientResourceRelationshipsCoachesDataTypeEnum.COACH;
                                                                        }}),
                                                                    }});;
                                                }};;
                                            }};);, "officiis");            

            UpdatePatientResponse res = sdk.patient.updatePatient(req);

            if (res.updatePatientResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## upsertPatient

Create a new patient or update an existing patient

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpsertPatientResponse;
import org.openapis.openapi.models.shared.Address;
import org.openapis.openapi.models.shared.ArchiveHistory;
import org.openapis.openapi.models.shared.PatientIdentifier;
import org.openapis.openapi.models.shared.PatientResourceAttributesGenderEnum;
import org.openapis.openapi.models.shared.PatientResourceAttributesInput;
import org.openapis.openapi.models.shared.PatientResourceInput;
import org.openapis.openapi.models.shared.PatientResourceRelationshipsCoachesData;
import org.openapis.openapi.models.shared.PatientResourceRelationshipsCoachesDataMeta;
import org.openapis.openapi.models.shared.PatientResourceRelationshipsCoachesDataTypeEnum;
import org.openapis.openapi.models.shared.PatientResourceRelationshipsCoachesInput;
import org.openapis.openapi.models.shared.PatientResourceRelationshipsGroups;
import org.openapis.openapi.models.shared.PatientResourceRelationshipsGroupsData;
import org.openapis.openapi.models.shared.PatientResourceRelationshipsGroupsDataTypeEnum;
import org.openapis.openapi.models.shared.PatientResourceRelationshipsInput;
import org.openapis.openapi.models.shared.PatientResourceTypeEnum;
import org.openapis.openapi.models.shared.PhoneNumber;
import org.openapis.openapi.models.shared.PhoneNumberTypeEnum;
import org.openapis.openapi.models.shared.UpsertPatientRequestInput;
import org.openapis.openapi.models.shared.UpsertPatientRequestMeta;
import org.openapis.openapi.models.shared.UpsertPatientRequestMetaQuery;
import org.openapis.openapi.models.shared.UpsertPatientRequestMetaQueryIdentifier;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.UpsertPatientRequestInput req = new UpsertPatientRequestInput(                new PatientResourceInput(                new PatientResourceAttributesInput() {{
                                                addresses = new org.openapis.openapi.models.shared.Address[]{{
                                                    add(new Address() {{
                                                        city = "Cambridge";
                                                        country = "Pitcairn Islands";
                                                        district = "quaerat";
                                                        lines = new String[]{{
                                                            add("ipsam"),
                                                            add("debitis"),
                                                        }};
                                                        postalCode = "02138";
                                                        state = "MA";
                                                        text = "rem";
                                                        type = "sit";
                                                        use = "nobis";
                                                    }}),
                                                    add(new Address() {{
                                                        city = "Cambridge";
                                                        country = "Netherlands Antilles";
                                                        district = "veniam";
                                                        lines = new String[]{{
                                                            add("recusandae"),
                                                            add("reiciendis"),
                                                        }};
                                                        postalCode = "02138";
                                                        state = "MA";
                                                        text = "nulla";
                                                        type = "magni";
                                                        use = "aperiam";
                                                    }}),
                                                    add(new Address() {{
                                                        city = "Cambridge";
                                                        country = "Tonga";
                                                        district = "numquam";
                                                        lines = new String[]{{
                                                            add("in"),
                                                            add("officiis"),
                                                        }};
                                                        postalCode = "02138";
                                                        state = "MA";
                                                        text = "beatae";
                                                        type = "laudantium";
                                                        use = "exercitationem";
                                                    }}),
                                                }};
                                                archiveHistory = new org.openapis.openapi.models.shared.ArchiveHistory[]{{
                                                    add(new ArchiveHistory() {{
                                                        archived = true;
                                                        modifiedAt = "2016-06-03T13:15:22.000Z";
                                                        notes = "Patient called requesting opt out of coaching";
                                                        reason = "Opted out of coaching";
                                                    }}),
                                                    add(new ArchiveHistory() {{
                                                        archived = true;
                                                        modifiedAt = "2016-06-03T13:15:22.000Z";
                                                        notes = "Patient called requesting opt out of coaching";
                                                        reason = "Opted out of coaching";
                                                    }}),
                                                    add(new ArchiveHistory() {{
                                                        archived = true;
                                                        modifiedAt = "2016-06-03T13:15:22.000Z";
                                                        notes = "Patient called requesting opt out of coaching";
                                                        reason = "Opted out of coaching";
                                                    }}),
                                                }};
                                                birthDate = LocalDate.parse("1944-03-06");
                                                emailAddress = "fiona@example.com";
                                                firstName = "Fiona";
                                                gender = PatientResourceAttributesGenderEnum.FEMALE;
                                                identifiers = new org.openapis.openapi.models.shared.PatientIdentifier[]{{
                                                    add(new PatientIdentifier("error", "hic") {{
                                                        label = "laboriosam";
                                                        system = "dolorum";
                                                        unique = false;
                                                        value = "voluptatum";
                                                    }}),
                                                    add(new PatientIdentifier("dolorum", "nostrum") {{
                                                        label = "expedita";
                                                        system = "debitis";
                                                        unique = false;
                                                        value = "neque";
                                                    }}),
                                                    add(new PatientIdentifier("accusamus", "tempora") {{
                                                        label = "officia";
                                                        system = "dolorum";
                                                        unique = false;
                                                        value = "corrupti";
                                                    }}),
                                                }};
                                                lastName = "Reeves";
                                                note = "Relies on daughter to get around";
                                                phoneNumbers = new org.openapis.openapi.models.shared.PhoneNumber[]{{
                                                    add(new PhoneNumber(true, PhoneNumberTypeEnum.MOBILE, "555-555-1234") {{
                                                        primary = true;
                                                        type = PhoneNumberTypeEnum.MOBILE;
                                                        value = "555-555-1234";
                                                    }}),
                                                    add(new PhoneNumber(true, PhoneNumberTypeEnum.MOBILE, "555-555-1234") {{
                                                        primary = true;
                                                        type = PhoneNumberTypeEnum.MOBILE;
                                                        value = "555-555-1234";
                                                    }}),
                                                    add(new PhoneNumber(true, PhoneNumberTypeEnum.MOBILE, "555-555-1234") {{
                                                        primary = true;
                                                        type = PhoneNumberTypeEnum.MOBILE;
                                                        value = "555-555-1234";
                                                    }}),
                                                }};
                                            }};, PatientResourceTypeEnum.PATIENT) {{
                                id = "57b36ef304ad8c2224f2af3a";
                                relationships = new PatientResourceRelationshipsInput(                new PatientResourceRelationshipsGroups(                new org.openapis.openapi.models.shared.PatientResourceRelationshipsGroupsData[]{{
                                                                    add(new PatientResourceRelationshipsGroupsData(PatientResourceRelationshipsGroupsDataTypeEnum.GROUP) {{
                                                                        id = "57b3708b04ad8c2224f2af3b";
                                                                        type = PatientResourceRelationshipsGroupsDataTypeEnum.GROUP;
                                                                    }}),
                                                                }});) {{
                                    coaches = new PatientResourceRelationshipsCoachesInput(                new org.openapis.openapi.models.shared.PatientResourceRelationshipsCoachesData[]{{
                                                        add(new PatientResourceRelationshipsCoachesData("57fee2a66b49113551658505", PatientResourceRelationshipsCoachesDataTypeEnum.COACH) {{
                                                            id = "57fee2a66b49113551658505";
                                                            meta = new PatientResourceRelationshipsCoachesDataMeta() {{
                                                                primary = false;
                                                            }};
                                                            type = PatientResourceRelationshipsCoachesDataTypeEnum.COACH;
                                                        }}),
                                                        add(new PatientResourceRelationshipsCoachesData("57fee2a66b49113551658505", PatientResourceRelationshipsCoachesDataTypeEnum.COACH) {{
                                                            id = "57fee2a66b49113551658505";
                                                            meta = new PatientResourceRelationshipsCoachesDataMeta() {{
                                                                primary = false;
                                                            }};
                                                            type = PatientResourceRelationshipsCoachesDataTypeEnum.COACH;
                                                        }}),
                                                    }});;
                                }};;
                            }};,                 new UpsertPatientRequestMeta(                new UpsertPatientRequestMetaQuery(                new String[]{{
                                                                add("voluptatem"),
                                                                add("culpa"),
                                                                add("expedita"),
                                                                add("magnam"),
                                                            }},                 new UpsertPatientRequestMetaQueryIdentifier() {{
                                                                system = "consequatur";
                                                                value = "esse";
                                                            }};);););            

            UpsertPatientResponse res = sdk.patient.upsertPatient(req);

            if (res.createPatientResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
