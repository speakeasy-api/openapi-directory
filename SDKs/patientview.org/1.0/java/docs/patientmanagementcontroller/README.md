# patientManagementController

## Overview

Patient Management Controller

### Available Operations

* [getPatientManagement](#getpatientmanagement) - getPatientManagement
* [getPatientManagementDiagnoses](#getpatientmanagementdiagnoses) - getPatientManagementDiagnoses
* [getPatientManagementLookupTypes](#getpatientmanagementlookuptypes) - getPatientManagementLookupTypes
* [savePatientManagement](#savepatientmanagement) - savePatientManagement
* [savePatientManagementSurgeries](#savepatientmanagementsurgeries) - savePatientManagementSurgeries
* [validatePatientManagement](#validatepatientmanagement) - validatePatientManagement

## getPatientManagement

getPatientManagement

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPatientManagementRequest;
import org.openapis.openapi.models.operations.GetPatientManagementResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPatientManagementRequest req = new GetPatientManagementRequest(479977L, 568045L, 392785L);            

            GetPatientManagementResponse res = sdk.patientManagementController.getPatientManagement(req);

            if (res.patientManagement != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPatientManagementDiagnoses

getPatientManagementDiagnoses

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPatientManagementDiagnosesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPatientManagementDiagnosesResponse res = sdk.patientManagementController.getPatientManagementDiagnoses();

            if (res.codes != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPatientManagementLookupTypes

getPatientManagementLookupTypes

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPatientManagementLookupTypesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPatientManagementLookupTypesResponse res = sdk.patientManagementController.getPatientManagementLookupTypes();

            if (res.lookupTypes != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## savePatientManagement

savePatientManagement

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SavePatientManagementRequest;
import org.openapis.openapi.models.operations.SavePatientManagementResponse;
import org.openapis.openapi.models.shared.ContactPoint;
import org.openapis.openapi.models.shared.ContactPointType;
import org.openapis.openapi.models.shared.ContactPointTypeValueEnum;
import org.openapis.openapi.models.shared.Feature;
import org.openapis.openapi.models.shared.FhirCondition;
import org.openapis.openapi.models.shared.FhirContact;
import org.openapis.openapi.models.shared.FhirEncounter;
import org.openapis.openapi.models.shared.FhirIdentifier;
import org.openapis.openapi.models.shared.FhirObservation;
import org.openapis.openapi.models.shared.FhirPatient;
import org.openapis.openapi.models.shared.FhirPractitioner;
import org.openapis.openapi.models.shared.FhirProcedure;
import org.openapis.openapi.models.shared.Group;
import org.openapis.openapi.models.shared.GroupFeature;
import org.openapis.openapi.models.shared.Link;
import org.openapis.openapi.models.shared.Location;
import org.openapis.openapi.models.shared.Lookup;
import org.openapis.openapi.models.shared.LookupType;
import org.openapis.openapi.models.shared.LookupTypeTypeEnum;
import org.openapis.openapi.models.shared.PatientManagement;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SavePatientManagementRequest req = new SavePatientManagementRequest(925597L, 836079L, 71036L) {{
                patientManagement = new PatientManagement() {{
                    condition = new FhirCondition() {{
                        asserter = "quis";
                        category = "veritatis";
                        code = "deserunt";
                        date = OffsetDateTime.parse("2022-08-19T14:12:14.246Z");
                        description = "repellendus";
                        fullDescription = "sapiente";
                        group = new Group() {{
                            address1 = "quo";
                            address2 = "odit";
                            address3 = "at";
                            childGroups = new org.openapis.openapi.models.shared.Group[]{{
                                add(new Group() {{}}),
                                add(new Group() {{}}),
                                add(new Group() {{}}),
                                add(new Group() {{}}),
                            }};
                            code = "maiores";
                            contactPoints = new org.openapis.openapi.models.shared.ContactPoint[]{{
                                add(new ContactPoint() {{
                                    contactPointType = new ContactPointType() {{
                                        description = "quod";
                                        id = 800911L;
                                        lookupType = new LookupType() {{
                                            created = OffsetDateTime.parse("2022-06-25T00:37:01.696Z");
                                            description = "porro";
                                            id = 678880L;
                                            lastUpdate = OffsetDateTime.parse("2022-04-12T23:15:28.420Z");
                                            type = LookupTypeTypeEnum.IBD_CROHNSPERIANAL;
                                        }};
                                        value = ContactPointTypeValueEnum.UNIT_ENQUIRIES_PHONE;
                                    }};
                                    content = "fugit";
                                    created = OffsetDateTime.parse("2021-02-10T09:24:01.909Z");
                                    id = 758616L;
                                    lastUpdate = OffsetDateTime.parse("2022-10-15T16:29:54.554Z");
                                }}),
                                add(new ContactPoint() {{
                                    contactPointType = new ContactPointType() {{
                                        description = "commodi";
                                        id = 473600L;
                                        lookupType = new LookupType() {{
                                            created = OffsetDateTime.parse("2022-10-24T23:43:42.369Z");
                                            description = "impedit";
                                            id = 736918L;
                                            lastUpdate = OffsetDateTime.parse("2022-10-13T23:01:07.168Z");
                                            type = LookupTypeTypeEnum.IBD_CROHNSLOCATION;
                                        }};
                                        value = ContactPointTypeValueEnum.TRUST_WEB_ADDRESS;
                                    }};
                                    content = "perferendis";
                                    created = OffsetDateTime.parse("2022-05-20T13:30:46.463Z");
                                    id = 149675L;
                                    lastUpdate = OffsetDateTime.parse("2022-07-22T16:55:44.795Z");
                                }}),
                            }};
                            created = OffsetDateTime.parse("2022-03-24T20:42:46.563Z");
                            fhirResourceId = "fea7596e-b10f-4aaa-a352-c5955907aff1";
                            groupFeatures = new org.openapis.openapi.models.shared.GroupFeature[]{{
                                add(new GroupFeature() {{
                                    created = OffsetDateTime.parse("2022-05-14T04:53:02.888Z");
                                    feature = new Feature() {{
                                        created = OffsetDateTime.parse("2022-01-02T17:10:32.894Z");
                                        description = "mollitia";
                                        id = 581850L;
                                        lastUpdate = OffsetDateTime.parse("2022-08-02T18:07:51.623Z");
                                        name = "Nellie Frami";
                                    }};
                                    id = 338007L;
                                    lastUpdate = OffsetDateTime.parse("2022-04-29T17:10:10.440Z");
                                }}),
                                add(new GroupFeature() {{
                                    created = OffsetDateTime.parse("2022-05-14T10:37:30.872Z");
                                    feature = new Feature() {{
                                        created = OffsetDateTime.parse("2022-03-22T21:41:36.666Z");
                                        description = "sequi";
                                        id = 949572L;
                                        lastUpdate = OffsetDateTime.parse("2022-05-04T04:15:52.352Z");
                                        name = "Richard Boyer";
                                    }};
                                    id = 673660L;
                                    lastUpdate = OffsetDateTime.parse("2022-01-11T05:45:42.485Z");
                                }}),
                                add(new GroupFeature() {{
                                    created = OffsetDateTime.parse("2020-05-14T09:04:32.205Z");
                                    feature = new Feature() {{
                                        created = OffsetDateTime.parse("2022-06-28T23:41:25.321Z");
                                        description = "voluptatibus";
                                        id = 55714L;
                                        lastUpdate = OffsetDateTime.parse("2022-02-05T15:41:25.512Z");
                                        name = "Thomas Batz";
                                    }};
                                    id = 979587L;
                                    lastUpdate = OffsetDateTime.parse("2022-08-22T19:15:58.586Z");
                                }}),
                            }};
                            groupType = new Lookup() {{
                                created = OffsetDateTime.parse("2022-07-09T11:22:20.922Z");
                                description = "dicta";
                                descriptionFriendly = "harum";
                                displayOrder = 317983L;
                                id = 880476L;
                                lastUpdate = OffsetDateTime.parse("2022-01-30T20:15:26.045Z");
                                lookupType = new LookupType() {{
                                    created = OffsetDateTime.parse("2022-10-13T20:38:16.426Z");
                                    description = "quidem";
                                    id = 565189L;
                                    lastUpdate = OffsetDateTime.parse("2021-04-09T11:24:10.949Z");
                                    type = LookupTypeTypeEnum.FEATURE_TYPE;
                                }};;
                                value = "praesentium";
                            }};;
                            id = 523248L;
                            lastImportDate = OffsetDateTime.parse("2022-09-20T03:14:35.704Z");
                            lastUpdate = OffsetDateTime.parse("2021-04-10T08:07:33.561Z");
                            links = new org.openapis.openapi.models.shared.Link[]{{
                                add(new Link() {{
                                    created = OffsetDateTime.parse("2022-03-02T21:33:21.372Z");
                                    displayOrder = 318569;
                                    id = 9356L;
                                    lastUpdate = OffsetDateTime.parse("2021-04-26T02:10:00.226Z");
                                    link = "explicabo";
                                    linkType = new Lookup() {{
                                        created = OffsetDateTime.parse("2021-07-27T01:56:50.693Z");
                                        description = "quibusdam";
                                        descriptionFriendly = "labore";
                                        displayOrder = 264730L;
                                        id = 183191L;
                                        lastUpdate = OffsetDateTime.parse("2022-05-31T22:08:47.731Z");
                                        lookupType = new LookupType() {{
                                            created = OffsetDateTime.parse("2022-12-17T07:42:55.593Z");
                                            description = "magni";
                                            id = 828940L;
                                            lastUpdate = OffsetDateTime.parse("2022-12-30T06:52:02.282Z");
                                            type = LookupTypeTypeEnum.CODE_STANDARD;
                                        }};
                                        value = "dolorum";
                                    }};
                                    name = "Eddie Prosacco";
                                }}),
                            }};
                            locations = new org.openapis.openapi.models.shared.Location[]{{
                                add(new Location() {{
                                    address = "2753 Tremblay Mountains";
                                    created = OffsetDateTime.parse("2022-07-22T03:36:34.615Z");
                                    email = "Veda.Parisian@hotmail.com";
                                    id = 846409L;
                                    label = "maiores";
                                    lastUpdate = OffsetDateTime.parse("2022-10-08T04:08:32.252Z");
                                    name = "Blanca Schulist";
                                    phone = "1-925-489-6576 x5592";
                                    web = "deserunt";
                                }}),
                                add(new Location() {{
                                    address = "4664 Janice Fort";
                                    created = OffsetDateTime.parse("2021-09-06T01:45:34.248Z");
                                    email = "Effie_Hoppe@gmail.com";
                                    id = 428769L;
                                    label = "vero";
                                    lastUpdate = OffsetDateTime.parse("2022-11-24T10:55:00.183Z");
                                    name = "Frances Marks";
                                    phone = "606-963-4281 x3049";
                                    web = "debitis";
                                }}),
                                add(new Location() {{
                                    address = "85741 Tevin Groves";
                                    created = OffsetDateTime.parse("2022-01-23T10:45:15.714Z");
                                    email = "Roman_Cormier3@hotmail.com";
                                    id = 162493L;
                                    label = "praesentium";
                                    lastUpdate = OffsetDateTime.parse("2022-09-01T04:49:52.515Z");
                                    name = "Angelica Stanton";
                                    phone = "1-614-209-6344 x708";
                                    web = "nemo";
                                }}),
                                add(new Location() {{
                                    address = "082 Norwood Harbors";
                                    created = OffsetDateTime.parse("2020-10-23T15:50:52.666Z");
                                    email = "Celestine.Hayes@hotmail.com";
                                    id = 54338L;
                                    label = "quis";
                                    lastUpdate = OffsetDateTime.parse("2022-10-27T11:39:54.088Z");
                                    name = "Jacqueline Schimmel";
                                    phone = "(499) 675-0715 x60562";
                                    web = "asperiores";
                                }}),
                            }};
                            name = "Edwin Morar";
                            parentGroups = new org.openapis.openapi.models.shared.Group[]{{
                                add(new Group() {{}}),
                                add(new Group() {{}}),
                                add(new Group() {{}}),
                                add(new Group() {{}}),
                            }};
                            postcode = "77935-3222";
                            sftpUser = "qui";
                            shortName = "ipsum";
                            visible = false;
                            visibleToJoin = false;
                        }};;
                        id = 944373L;
                        identifier = "excepturi";
                        links = new org.openapis.openapi.models.shared.Link[]{{
                            add(new Link() {{
                                created = OffsetDateTime.parse("2022-07-05T23:34:50.715Z");
                                displayOrder = 970237;
                                id = 227414L;
                                lastUpdate = OffsetDateTime.parse("2022-06-29T07:40:27.174Z");
                                link = "veritatis";
                                linkType = new Lookup() {{
                                    created = OffsetDateTime.parse("2022-12-11T09:46:30.457Z");
                                    description = "iure";
                                    descriptionFriendly = "odio";
                                    displayOrder = 311796L;
                                    id = 881005L;
                                    lastUpdate = OffsetDateTime.parse("2021-01-18T05:23:42.271Z");
                                    lookupType = new LookupType() {{
                                        created = OffsetDateTime.parse("2022-05-20T13:18:59.478Z");
                                        description = "eos";
                                        id = 542499L;
                                        lastUpdate = OffsetDateTime.parse("2022-02-23T01:35:05.899Z");
                                        type = LookupTypeTypeEnum.MENU;
                                    }};
                                    value = "soluta";
                                }};
                                name = "Ted Kling";
                            }}),
                            add(new Link() {{
                                created = OffsetDateTime.parse("2021-03-17T10:19:08.276Z");
                                displayOrder = 714697;
                                id = 990339L;
                                lastUpdate = OffsetDateTime.parse("2022-10-13T19:58:56.024Z");
                                link = "voluptate";
                                linkType = new Lookup() {{
                                    created = OffsetDateTime.parse("2021-03-10T07:33:18.208Z");
                                    description = "eius";
                                    descriptionFriendly = "aspernatur";
                                    displayOrder = 20651L;
                                    id = 229219L;
                                    lastUpdate = OffsetDateTime.parse("2020-05-10T15:56:07.975Z");
                                    lookupType = new LookupType() {{
                                        created = OffsetDateTime.parse("2022-02-04T21:14:13.821Z");
                                        description = "suscipit";
                                        id = 645785L;
                                        lastUpdate = OffsetDateTime.parse("2022-05-08T23:33:14.875Z");
                                        type = LookupTypeTypeEnum.IBD_SURGERYMAINPROCEDURE;
                                    }};
                                    value = "totam";
                                }};
                                name = "James Swaniawski";
                            }}),
                            add(new Link() {{
                                created = OffsetDateTime.parse("2022-03-15T17:06:34.956Z");
                                displayOrder = 885338;
                                id = 185636L;
                                lastUpdate = OffsetDateTime.parse("2021-02-04T11:05:24.484Z");
                                link = "esse";
                                linkType = new Lookup() {{
                                    created = OffsetDateTime.parse("2022-01-13T02:40:51.157Z");
                                    description = "ipsum";
                                    descriptionFriendly = "quisquam";
                                    displayOrder = 947371L;
                                    id = 229442L;
                                    lastUpdate = OffsetDateTime.parse("2021-03-29T09:11:09.370Z");
                                    lookupType = new LookupType() {{
                                        created = OffsetDateTime.parse("2022-09-08T12:03:15.868Z");
                                        description = "dolorem";
                                        id = 957451L;
                                        lastUpdate = OffsetDateTime.parse("2022-01-21T14:54:44.081Z");
                                        type = LookupTypeTypeEnum.GROUP;
                                    }};
                                    value = "expedita";
                                }};
                                name = "Jane Kassulke";
                            }}),
                        }};
                        notes = "deserunt";
                        severity = "quam";
                        status = "ipsum";
                    }};;
                    encounters = new org.openapis.openapi.models.shared.FhirEncounter[]{{
                        add(new FhirEncounter() {{
                            date = OffsetDateTime.parse("2022-05-31T19:46:08.472Z");
                            encounterType = "maxime";
                            group = new Group() {{
                                address1 = "pariatur";
                                address2 = "soluta";
                                address3 = "dicta";
                                childGroups = new org.openapis.openapi.models.shared.Group[]{{
                                    add(new Group() {{}}),
                                    add(new Group() {{}}),
                                    add(new Group() {{}}),
                                }};
                                code = "totam";
                                contactPoints = new org.openapis.openapi.models.shared.ContactPoint[]{{
                                    add(new ContactPoint() {{
                                        contactPointType = new ContactPointType() {{
                                            description = "aspernatur";
                                            id = 174909L;
                                            lookupType = new LookupType() {{
                                                created = OffsetDateTime.parse("2021-08-04T17:36:39.068Z");
                                                description = "aliquid";
                                                id = 463150L;
                                                lastUpdate = OffsetDateTime.parse("2021-04-27T11:41:31.258Z");
                                                type = LookupTypeTypeEnum.CODE_TYPE;
                                            }};
                                            value = ContactPointTypeValueEnum.PV_ADMIN_NAME;
                                        }};
                                        content = "fugit";
                                        created = OffsetDateTime.parse("2022-07-06T20:37:36.497Z");
                                        id = 124833L;
                                        lastUpdate = OffsetDateTime.parse("2022-04-12T10:34:24.004Z");
                                    }}),
                                    add(new ContactPoint() {{
                                        contactPointType = new ContactPointType() {{
                                            description = "hic";
                                            id = 30452L;
                                            lookupType = new LookupType() {{
                                                created = OffsetDateTime.parse("2020-10-05T00:59:28.911Z");
                                                description = "nobis";
                                                id = 92596L;
                                                lastUpdate = OffsetDateTime.parse("2022-05-07T21:24:02.842Z");
                                                type = LookupTypeTypeEnum.MENU;
                                            }};
                                            value = ContactPointTypeValueEnum.APPOINTMENT_PHONE;
                                        }};
                                        content = "quos";
                                        created = OffsetDateTime.parse("2021-10-31T07:58:44.750Z");
                                        id = 45614L;
                                        lastUpdate = OffsetDateTime.parse("2022-05-16T23:21:11.104Z");
                                    }}),
                                }};
                                created = OffsetDateTime.parse("2022-09-18T06:37:26.413Z");
                                fhirResourceId = "3a1108e0-adcf-44b9-a187-9fce953f73ef";
                                groupFeatures = new org.openapis.openapi.models.shared.GroupFeature[]{{
                                    add(new GroupFeature() {{
                                        created = OffsetDateTime.parse("2020-11-08T11:03:10.206Z");
                                        feature = new Feature() {{
                                            created = OffsetDateTime.parse("2021-07-17T15:43:35.984Z");
                                            description = "similique";
                                            id = 708548L;
                                            lastUpdate = OffsetDateTime.parse("2021-07-04T12:52:28.765Z");
                                            name = "Rosemarie Stanton";
                                        }};
                                        id = 773326L;
                                        lastUpdate = OffsetDateTime.parse("2022-01-10T09:29:38.619Z");
                                    }}),
                                    add(new GroupFeature() {{
                                        created = OffsetDateTime.parse("2022-02-20T06:09:58.619Z");
                                        feature = new Feature() {{
                                            created = OffsetDateTime.parse("2022-03-22T03:27:44.973Z");
                                            description = "maiores";
                                            id = 985033L;
                                            lastUpdate = OffsetDateTime.parse("2022-03-31T22:43:48.703Z");
                                            name = "Linda Nikolaus";
                                        }};
                                        id = 410492L;
                                        lastUpdate = OffsetDateTime.parse("2022-07-28T16:45:32.822Z");
                                    }}),
                                }};
                                groupType = new Lookup() {{
                                    created = OffsetDateTime.parse("2022-02-08T20:43:00.221Z");
                                    description = "ratione";
                                    descriptionFriendly = "ex";
                                    displayOrder = 511319L;
                                    id = 120657L;
                                    lastUpdate = OffsetDateTime.parse("2022-01-08T01:04:15.076Z");
                                    lookupType = new LookupType() {{
                                        created = OffsetDateTime.parse("2022-08-05T18:23:03.713Z");
                                        description = "nulla";
                                        id = 569211L;
                                        lastUpdate = OffsetDateTime.parse("2021-12-20T18:02:50.249Z");
                                        type = LookupTypeTypeEnum.LINK_TYPE;
                                    }};
                                    value = "quisquam";
                                }};
                                id = 906556L;
                                lastImportDate = OffsetDateTime.parse("2022-03-24T11:20:42.976Z");
                                lastUpdate = OffsetDateTime.parse("2022-09-01T09:38:53.685Z");
                                links = new org.openapis.openapi.models.shared.Link[]{{
                                    add(new Link() {{
                                        created = OffsetDateTime.parse("2022-09-12T19:57:40.850Z");
                                        displayOrder = 407241;
                                        id = 775220L;
                                        lastUpdate = OffsetDateTime.parse("2022-01-27T22:22:28.881Z");
                                        link = "aspernatur";
                                        linkType = new Lookup() {{
                                            created = OffsetDateTime.parse("2022-12-12T11:58:39.585Z");
                                            description = "a";
                                            descriptionFriendly = "libero";
                                            displayOrder = 13948L;
                                            id = 11427L;
                                            lastUpdate = OffsetDateTime.parse("2021-06-17T11:25:30.782Z");
                                            lookupType = new LookupType() {{
                                                created = OffsetDateTime.parse("2022-11-08T08:44:49.857Z");
                                                description = "accusamus";
                                                id = 79522L;
                                                lastUpdate = OffsetDateTime.parse("2022-11-29T07:04:37.837Z");
                                                type = LookupTypeTypeEnum.IBD_CROHNSPERIANAL;
                                            }};
                                            value = "laborum";
                                        }};
                                        name = "Lee Kemmer";
                                    }}),
                                    add(new Link() {{
                                        created = OffsetDateTime.parse("2021-05-05T09:22:07.208Z");
                                        displayOrder = 860552;
                                        id = 379034L;
                                        lastUpdate = OffsetDateTime.parse("2022-10-22T12:27:01.822Z");
                                        link = "tempora";
                                        linkType = new Lookup() {{
                                            created = OffsetDateTime.parse("2022-11-14T00:12:37.683Z");
                                            description = "provident";
                                            descriptionFriendly = "ipsa";
                                            displayOrder = 476477L;
                                            id = 301598L;
                                            lastUpdate = OffsetDateTime.parse("2022-09-27T07:50:41.350Z");
                                            lookupType = new LookupType() {{
                                                created = OffsetDateTime.parse("2022-07-18T12:12:30.628Z");
                                                description = "rem";
                                                id = 683282L;
                                                lastUpdate = OffsetDateTime.parse("2022-04-22T02:19:15.622Z");
                                                type = LookupTypeTypeEnum.IBD_SURGERYMAINPROCEDURE;
                                            }};
                                            value = "ut";
                                        }};
                                        name = "Yolanda Shields";
                                    }}),
                                }};
                                locations = new org.openapis.openapi.models.shared.Location[]{{
                                    add(new Location() {{
                                        address = "06627 Sanford Port";
                                        created = OffsetDateTime.parse("2022-10-27T21:30:06.318Z");
                                        email = "Ansley27@yahoo.com";
                                        id = 892050L;
                                        label = "ipsam";
                                        lastUpdate = OffsetDateTime.parse("2022-10-21T01:48:15.498Z");
                                        name = "Miss Claude Walsh";
                                        phone = "245.934.5491 x640";
                                        web = "porro";
                                    }}),
                                    add(new Location() {{
                                        address = "5515 Marion Place";
                                        created = OffsetDateTime.parse("2022-06-18T04:24:04.187Z");
                                        email = "Eric95@gmail.com";
                                        id = 159870L;
                                        label = "ratione";
                                        lastUpdate = OffsetDateTime.parse("2022-02-05T01:06:02.008Z");
                                        name = "Ivan Bosco";
                                        phone = "1-248-783-0946 x46537";
                                        web = "eligendi";
                                    }}),
                                    add(new Location() {{
                                        address = "67271 Peyton Garden";
                                        created = OffsetDateTime.parse("2022-04-21T00:17:42.407Z");
                                        email = "Joana_McLaughlin55@yahoo.com";
                                        id = 457223L;
                                        label = "quasi";
                                        lastUpdate = OffsetDateTime.parse("2021-02-19T06:17:20.977Z");
                                        name = "Jody Schuster";
                                        phone = "801.266.3909 x44278";
                                        web = "soluta";
                                    }}),
                                    add(new Location() {{
                                        address = "39134 Giuseppe Bridge";
                                        created = OffsetDateTime.parse("2022-08-18T18:43:46.013Z");
                                        email = "Greta_Leuschke9@hotmail.com";
                                        id = 609178L;
                                        label = "tenetur";
                                        lastUpdate = OffsetDateTime.parse("2022-02-17T15:16:49.489Z");
                                        name = "Allison Bednar I";
                                        phone = "680.605.4605";
                                        web = "non";
                                    }}),
                                }};
                                name = "Carmen McClure";
                                parentGroups = new org.openapis.openapi.models.shared.Group[]{{
                                    add(new Group() {{}}),
                                }};
                                postcode = "04196";
                                sftpUser = "velit";
                                shortName = "voluptatibus";
                                visible = false;
                                visibleToJoin = false;
                            }};
                            id = 374323L;
                            identifier = "asperiores";
                            links = new org.openapis.openapi.models.shared.Link[]{{
                                add(new Link() {{
                                    created = OffsetDateTime.parse("2022-09-09T19:48:26.093Z");
                                    displayOrder = 162954;
                                    id = 831520L;
                                    lastUpdate = OffsetDateTime.parse("2021-05-21T20:57:35.388Z");
                                    link = "dignissimos";
                                    linkType = new Lookup() {{
                                        created = OffsetDateTime.parse("2021-01-08T17:32:26.674Z");
                                        description = "nemo";
                                        descriptionFriendly = "quae";
                                        displayOrder = 312753L;
                                        id = 783235L;
                                        lastUpdate = OffsetDateTime.parse("2022-02-19T04:53:13.708Z");
                                        lookupType = new LookupType() {{
                                            created = OffsetDateTime.parse("2022-10-04T21:10:21.697Z");
                                            description = "fuga";
                                            id = 662505L;
                                            lastUpdate = OffsetDateTime.parse("2022-10-03T04:29:10.698Z");
                                            type = LookupTypeTypeEnum.IBD_CROHNSPROXIMALTERMINALILEUM;
                                        }};
                                        value = "est";
                                    }};
                                    name = "Felix Stehr";
                                }}),
                            }};
                            observations = new org.openapis.openapi.models.shared.FhirObservation[]{{
                                add(new FhirObservation() {{
                                    applies = OffsetDateTime.parse("2022-09-18T05:25:42.565Z");
                                    bodySite = "possimus";
                                    comments = "facilis";
                                    comparator = "cum";
                                    diagram = "commodi";
                                    group = new Group() {{
                                        address1 = "in";
                                        address2 = "corporis";
                                        address3 = "reiciendis";
                                        childGroups = new org.openapis.openapi.models.shared.Group[]{{
                                            add(new Group() {{}}),
                                            add(new Group() {{}}),
                                            add(new Group() {{}}),
                                            add(new Group() {{}}),
                                        }};
                                        code = "nemo";
                                        contactPoints = new org.openapis.openapi.models.shared.ContactPoint[]{{
                                            add(new ContactPoint() {{
                                                contactPointType = new ContactPointType() {{
                                                    description = "aliquid";
                                                    id = 46007L;
                                                    lookupType = new LookupType() {{
                                                        created = OffsetDateTime.parse("2022-07-15T04:22:29.679Z");
                                                        description = "in";
                                                        id = 348519L;
                                                        lastUpdate = OffsetDateTime.parse("2020-07-22T14:40:50.941Z");
                                                        type = LookupTypeTypeEnum.FEATURE_TYPE;
                                                    }};
                                                    value = ContactPointTypeValueEnum.OUT_OF_HOURS_INFO;
                                                }};
                                                content = "suscipit";
                                                created = OffsetDateTime.parse("2020-11-28T15:07:06.228Z");
                                                id = 904949L;
                                                lastUpdate = OffsetDateTime.parse("2022-02-10T06:30:04.103Z");
                                            }}),
                                            add(new ContactPoint() {{
                                                contactPointType = new ContactPointType() {{
                                                    description = "sunt";
                                                    id = 992012L;
                                                    lookupType = new LookupType() {{
                                                        created = OffsetDateTime.parse("2022-10-01T23:04:48.771Z");
                                                        description = "amet";
                                                        id = 105906L;
                                                        lastUpdate = OffsetDateTime.parse("2022-01-18T21:39:18.493Z");
                                                        type = LookupTypeTypeEnum.IBD_SMOKINGSTATUS;
                                                    }};
                                                    value = ContactPointTypeValueEnum.PV_ADMIN_NAME;
                                                }};
                                                content = "corporis";
                                                created = OffsetDateTime.parse("2022-03-25T18:38:24.627Z");
                                                id = 58356L;
                                                lastUpdate = OffsetDateTime.parse("2020-10-22T20:57:52.942Z");
                                            }}),
                                            add(new ContactPoint() {{
                                                contactPointType = new ContactPointType() {{
                                                    description = "vitae";
                                                    id = 881721L;
                                                    lookupType = new LookupType() {{
                                                        created = OffsetDateTime.parse("2022-06-16T02:54:19.259Z");
                                                        description = "aspernatur";
                                                        id = 379057L;
                                                        lastUpdate = OffsetDateTime.parse("2022-08-17T09:09:54.947Z");
                                                        type = LookupTypeTypeEnum.IDENTIFIER;
                                                    }};
                                                    value = ContactPointTypeValueEnum.APPOINTMENT_PHONE;
                                                }};
                                                content = "dolorum";
                                                created = OffsetDateTime.parse("2022-03-16T15:06:56.015Z");
                                                id = 171853L;
                                                lastUpdate = OffsetDateTime.parse("2022-02-07T00:24:36.620Z");
                                            }}),
                                            add(new ContactPoint() {{
                                                contactPointType = new ContactPointType() {{
                                                    description = "dolore";
                                                    id = 304468L;
                                                    lookupType = new LookupType() {{
                                                        created = OffsetDateTime.parse("2020-06-26T02:06:35.498Z");
                                                        description = "ullam";
                                                        id = 237742L;
                                                        lastUpdate = OffsetDateTime.parse("2021-12-30T06:08:11.710Z");
                                                        type = LookupTypeTypeEnum.IBD_CROHNSLOCATION;
                                                    }};
                                                    value = ContactPointTypeValueEnum.OUT_OF_HOURS_INFO;
                                                }};
                                                content = "nesciunt";
                                                created = OffsetDateTime.parse("2021-11-26T13:56:43.134Z");
                                                id = 867290L;
                                                lastUpdate = OffsetDateTime.parse("2021-02-13T15:31:34.151Z");
                                            }}),
                                        }};
                                        created = OffsetDateTime.parse("2022-04-01T23:17:58.998Z");
                                        fhirResourceId = "0b2f2fb7-b194-4a27-ab26-916fe1f08f42";
                                        groupFeatures = new org.openapis.openapi.models.shared.GroupFeature[]{{
                                            add(new GroupFeature() {{
                                                created = OffsetDateTime.parse("2022-02-07T16:22:20.061Z");
                                                feature = new Feature() {{
                                                    created = OffsetDateTime.parse("2022-08-05T13:00:56.741Z");
                                                    description = "occaecati";
                                                    id = 552078L;
                                                    lastUpdate = OffsetDateTime.parse("2022-03-09T12:57:54.030Z");
                                                    name = "Allison Wisozk I";
                                                }};
                                                id = 888044L;
                                                lastUpdate = OffsetDateTime.parse("2021-08-01T17:10:22.856Z");
                                            }}),
                                            add(new GroupFeature() {{
                                                created = OffsetDateTime.parse("2022-09-21T14:42:08.721Z");
                                                feature = new Feature() {{
                                                    created = OffsetDateTime.parse("2022-02-08T08:59:54.184Z");
                                                    description = "rem";
                                                    id = 26522L;
                                                    lastUpdate = OffsetDateTime.parse("2021-02-14T22:16:10.503Z");
                                                    name = "Lorraine Walsh";
                                                }};
                                                id = 168576L;
                                                lastUpdate = OffsetDateTime.parse("2022-02-05T23:00:32.306Z");
                                            }}),
                                            add(new GroupFeature() {{
                                                created = OffsetDateTime.parse("2022-09-02T13:45:48.565Z");
                                                feature = new Feature() {{
                                                    created = OffsetDateTime.parse("2022-02-10T10:18:57.740Z");
                                                    description = "beatae";
                                                    id = 512452L;
                                                    lastUpdate = OffsetDateTime.parse("2022-06-28T14:53:26.431Z");
                                                    name = "Lester Parisian";
                                                }};
                                                id = 944708L;
                                                lastUpdate = OffsetDateTime.parse("2021-03-20T05:03:12.319Z");
                                            }}),
                                        }};
                                        groupType = new Lookup() {{
                                            created = OffsetDateTime.parse("2022-04-28T20:28:39.956Z");
                                            description = "nostrum";
                                            descriptionFriendly = "officia";
                                            displayOrder = 676243L;
                                            id = 548361L;
                                            lastUpdate = OffsetDateTime.parse("2022-03-08T09:53:15.131Z");
                                            lookupType = new LookupType() {{
                                                created = OffsetDateTime.parse("2022-09-14T18:19:59.469Z");
                                                description = "ut";
                                                id = 856303L;
                                                lastUpdate = OffsetDateTime.parse("2022-05-14T04:54:08.545Z");
                                                type = LookupTypeTypeEnum.IBD_CROHNSBEHAVIOUR;
                                            }};
                                            value = "magnam";
                                        }};
                                        id = 7884L;
                                        lastImportDate = OffsetDateTime.parse("2022-08-17T23:19:52.079Z");
                                        lastUpdate = OffsetDateTime.parse("2022-06-21T08:29:37.931Z");
                                        links = new org.openapis.openapi.models.shared.Link[]{{
                                            add(new Link() {{
                                                created = OffsetDateTime.parse("2021-12-01T12:56:16.650Z");
                                                displayOrder = 89494;
                                                id = 502710L;
                                                lastUpdate = OffsetDateTime.parse("2022-11-05T22:13:21.002Z");
                                                link = "sit";
                                                linkType = new Lookup() {{
                                                    created = OffsetDateTime.parse("2022-08-28T22:43:39.407Z");
                                                    description = "saepe";
                                                    descriptionFriendly = "error";
                                                    displayOrder = 8511L;
                                                    id = 279068L;
                                                    lastUpdate = OffsetDateTime.parse("2022-05-16T07:46:15.799Z");
                                                    lookupType = new LookupType() {{
                                                        created = OffsetDateTime.parse("2022-10-08T12:52:44.610Z");
                                                        description = "architecto";
                                                        id = 577140L;
                                                        lastUpdate = OffsetDateTime.parse("2022-04-22T05:26:04.783Z");
                                                        type = LookupTypeTypeEnum.GENDER;
                                                    }};
                                                    value = "laborum";
                                                }};
                                                name = "Mrs. Roman Howell";
                                            }}),
                                            add(new Link() {{
                                                created = OffsetDateTime.parse("2022-05-26T20:33:50.122Z");
                                                displayOrder = 972083;
                                                id = 588740L;
                                                lastUpdate = OffsetDateTime.parse("2020-02-11T18:23:46.078Z");
                                                link = "voluptates";
                                                linkType = new Lookup() {{
                                                    created = OffsetDateTime.parse("2022-05-02T10:35:04.952Z");
                                                    description = "quidem";
                                                    descriptionFriendly = "reprehenderit";
                                                    displayOrder = 813679L;
                                                    id = 685092L;
                                                    lastUpdate = OffsetDateTime.parse("2021-09-14T12:33:27.065Z");
                                                    lookupType = new LookupType() {{
                                                        created = OffsetDateTime.parse("2022-12-21T09:05:01.168Z");
                                                        description = "quisquam";
                                                        id = 919532L;
                                                        lastUpdate = OffsetDateTime.parse("2022-06-17T00:04:35.396Z");
                                                        type = LookupTypeTypeEnum.STATISTIC_TYPE;
                                                    }};
                                                    value = "asperiores";
                                                }};
                                                name = "Sam Powlowski IV";
                                            }}),
                                            add(new Link() {{
                                                created = OffsetDateTime.parse("2022-03-05T05:01:11.294Z");
                                                displayOrder = 410301;
                                                id = 539118L;
                                                lastUpdate = OffsetDateTime.parse("2021-03-24T07:07:12.173Z");
                                                link = "officiis";
                                                linkType = new Lookup() {{
                                                    created = OffsetDateTime.parse("2021-02-22T09:14:53.307Z");
                                                    description = "minima";
                                                    descriptionFriendly = "aspernatur";
                                                    displayOrder = 404425L;
                                                    id = 980581L;
                                                    lastUpdate = OffsetDateTime.parse("2021-04-04T14:18:49.875Z");
                                                    lookupType = new LookupType() {{
                                                        created = OffsetDateTime.parse("2021-12-30T00:19:55.496Z");
                                                        description = "suscipit";
                                                        id = 922348L;
                                                        lastUpdate = OffsetDateTime.parse("2021-12-01T19:00:30.130Z");
                                                        type = LookupTypeTypeEnum.ROLE;
                                                    }};
                                                    value = "recusandae";
                                                }};
                                                name = "Mack Grant DVM";
                                            }}),
                                        }};
                                        locations = new org.openapis.openapi.models.shared.Location[]{{
                                            add(new Location() {{
                                                address = "11332 Maggio Fort";
                                                created = OffsetDateTime.parse("2022-07-09T06:54:36.386Z");
                                                email = "Shemar.Metz@yahoo.com";
                                                id = 907876L;
                                                label = "occaecati";
                                                lastUpdate = OffsetDateTime.parse("2022-11-08T18:10:37.954Z");
                                                name = "Leo Kiehn II";
                                                phone = "928.240.5049 x1748";
                                                web = "ratione";
                                            }}),
                                        }};
                                        name = "Kelvin Lehner";
                                        parentGroups = new org.openapis.openapi.models.shared.Group[]{{
                                            add(new Group() {{}}),
                                            add(new Group() {{}}),
                                        }};
                                        postcode = "03546-3099";
                                        sftpUser = "dolores";
                                        shortName = "id";
                                        visible = false;
                                        visibleToJoin = false;
                                    }};
                                    id = 327988L;
                                    identifier = "dolore";
                                    location = "dolorum";
                                    name = "Amy Walsh";
                                    temporaryUuid = "molestiae";
                                    units = "ex";
                                    value = "ut";
                                }}),
                                add(new FhirObservation() {{
                                    applies = OffsetDateTime.parse("2022-07-10T22:59:57.144Z");
                                    bodySite = "debitis";
                                    comments = "laudantium";
                                    comparator = "eum";
                                    diagram = "nemo";
                                    group = new Group() {{
                                        address1 = "recusandae";
                                        address2 = "esse";
                                        address3 = "provident";
                                        childGroups = new org.openapis.openapi.models.shared.Group[]{{
                                            add(new Group() {{}}),
                                            add(new Group() {{}}),
                                        }};
                                        code = "eum";
                                        contactPoints = new org.openapis.openapi.models.shared.ContactPoint[]{{
                                            add(new ContactPoint() {{
                                                contactPointType = new ContactPointType() {{
                                                    description = "provident";
                                                    id = 133439L;
                                                    lookupType = new LookupType() {{
                                                        created = OffsetDateTime.parse("2022-11-26T15:59:49.659Z");
                                                        description = "animi";
                                                        id = 343392L;
                                                        lastUpdate = OffsetDateTime.parse("2021-10-26T13:12:31.139Z");
                                                        type = LookupTypeTypeEnum.IBD_SURGERYMAINPROCEDURE;
                                                    }};
                                                    value = ContactPointTypeValueEnum.UNIT_ENQUIRIES_EMAIL;
                                                }};
                                                content = "ex";
                                                created = OffsetDateTime.parse("2022-12-18T06:55:47.674Z");
                                                id = 999278L;
                                                lastUpdate = OffsetDateTime.parse("2021-12-11T16:15:06.555Z");
                                            }}),
                                            add(new ContactPoint() {{
                                                contactPointType = new ContactPointType() {{
                                                    description = "in";
                                                    id = 721407L;
                                                    lookupType = new LookupType() {{
                                                        created = OffsetDateTime.parse("2021-02-01T20:19:35.908Z");
                                                        description = "laborum";
                                                        id = 813054L;
                                                        lastUpdate = OffsetDateTime.parse("2022-01-09T16:15:47.527Z");
                                                        type = LookupTypeTypeEnum.IBD_CROHNSLOCATION;
                                                    }};
                                                    value = ContactPointTypeValueEnum.APPOINTMENT_EMAIL;
                                                }};
                                                content = "sapiente";
                                                created = OffsetDateTime.parse("2022-08-29T17:35:23.458Z");
                                                id = 698249L;
                                                lastUpdate = OffsetDateTime.parse("2022-08-31T13:02:08.892Z");
                                            }}),
                                            add(new ContactPoint() {{
                                                contactPointType = new ContactPointType() {{
                                                    description = "inventore";
                                                    id = 147685L;
                                                    lookupType = new LookupType() {{
                                                        created = OffsetDateTime.parse("2022-10-24T09:55:31.770Z");
                                                        description = "perferendis";
                                                        id = 241901L;
                                                        lastUpdate = OffsetDateTime.parse("2022-07-27T05:12:50.586Z");
                                                        type = LookupTypeTypeEnum.FEATURE_TYPE;
                                                    }};
                                                    value = ContactPointTypeValueEnum.UNIT_ENQUIRIES_PHONE;
                                                }};
                                                content = "at";
                                                created = OffsetDateTime.parse("2022-06-18T13:06:11.480Z");
                                                id = 958741L;
                                                lastUpdate = OffsetDateTime.parse("2022-11-19T04:16:20.363Z");
                                            }}),
                                            add(new ContactPoint() {{
                                                contactPointType = new ContactPointType() {{
                                                    description = "minima";
                                                    id = 107004L;
                                                    lookupType = new LookupType() {{
                                                        created = OffsetDateTime.parse("2021-10-27T12:32:54.445Z");
                                                        description = "earum";
                                                        id = 745398L;
                                                        lastUpdate = OffsetDateTime.parse("2020-06-16T06:36:28.349Z");
                                                        type = LookupTypeTypeEnum.MENU;
                                                    }};
                                                    value = ContactPointTypeValueEnum.OUT_OF_HOURS_INFO;
                                                }};
                                                content = "perspiciatis";
                                                created = OffsetDateTime.parse("2020-04-29T11:28:14.354Z");
                                                id = 399802L;
                                                lastUpdate = OffsetDateTime.parse("2021-11-10T12:47:28.024Z");
                                            }}),
                                        }};
                                        created = OffsetDateTime.parse("2022-11-08T01:11:44.885Z");
                                        fhirResourceId = "ca3aed01-1799-4631-afde-04771778ff61";
                                        groupFeatures = new org.openapis.openapi.models.shared.GroupFeature[]{{
                                            add(new GroupFeature() {{
                                                created = OffsetDateTime.parse("2022-11-19T04:18:55.408Z");
                                                feature = new Feature() {{
                                                    created = OffsetDateTime.parse("2022-09-23T23:49:53.776Z");
                                                    description = "esse";
                                                    id = 403793L;
                                                    lastUpdate = OffsetDateTime.parse("2022-08-08T01:38:43.693Z");
                                                    name = "Janie Casper";
                                                }};
                                                id = 713767L;
                                                lastUpdate = OffsetDateTime.parse("2022-05-12T16:43:21.506Z");
                                            }}),
                                            add(new GroupFeature() {{
                                                created = OffsetDateTime.parse("2022-08-08T07:20:53.498Z");
                                                feature = new Feature() {{
                                                    created = OffsetDateTime.parse("2022-07-27T09:46:52.119Z");
                                                    description = "voluptas";
                                                    id = 614528L;
                                                    lastUpdate = OffsetDateTime.parse("2022-11-10T20:51:38.142Z");
                                                    name = "Woodrow Volkman";
                                                }};
                                                id = 726343L;
                                                lastUpdate = OffsetDateTime.parse("2022-06-19T00:33:15.754Z");
                                            }}),
                                            add(new GroupFeature() {{
                                                created = OffsetDateTime.parse("2022-11-21T16:13:12.951Z");
                                                feature = new Feature() {{
                                                    created = OffsetDateTime.parse("2021-10-14T11:39:50.363Z");
                                                    description = "quo";
                                                    id = 405373L;
                                                    lastUpdate = OffsetDateTime.parse("2022-09-05T19:39:47.586Z");
                                                    name = "Donald MacGyver";
                                                }};
                                                id = 109784L;
                                                lastUpdate = OffsetDateTime.parse("2021-10-15T09:28:53.005Z");
                                            }}),
                                            add(new GroupFeature() {{
                                                created = OffsetDateTime.parse("2022-04-19T07:48:52.839Z");
                                                feature = new Feature() {{
                                                    created = OffsetDateTime.parse("2021-09-24T14:32:36.483Z");
                                                    description = "voluptatem";
                                                    id = 959143L;
                                                    lastUpdate = OffsetDateTime.parse("2022-09-09T21:19:27.244Z");
                                                    name = "Mr. Dewey Toy";
                                                }};
                                                id = 937219L;
                                                lastUpdate = OffsetDateTime.parse("2022-01-16T05:13:39.110Z");
                                            }}),
                                        }};
                                        groupType = new Lookup() {{
                                            created = OffsetDateTime.parse("2021-05-29T16:29:01.765Z");
                                            description = "nemo";
                                            descriptionFriendly = "asperiores";
                                            displayOrder = 190567L;
                                            id = 355225L;
                                            lastUpdate = OffsetDateTime.parse("2022-02-25T08:32:24.820Z");
                                            lookupType = new LookupType() {{
                                                created = OffsetDateTime.parse("2021-06-17T09:46:58.064Z");
                                                description = "quibusdam";
                                                id = 720528L;
                                                lastUpdate = OffsetDateTime.parse("2022-05-14T19:17:09.662Z");
                                                type = LookupTypeTypeEnum.CODE_TYPE;
                                            }};
                                            value = "aliquam";
                                        }};
                                        id = 80532L;
                                        lastImportDate = OffsetDateTime.parse("2022-10-30T17:21:08.305Z");
                                        lastUpdate = OffsetDateTime.parse("2022-10-12T04:34:00.871Z");
                                        links = new org.openapis.openapi.models.shared.Link[]{{
                                            add(new Link() {{
                                                created = OffsetDateTime.parse("2022-12-22T21:29:02.039Z");
                                                displayOrder = 265039;
                                                id = 144286L;
                                                lastUpdate = OffsetDateTime.parse("2022-06-27T11:27:52.517Z");
                                                link = "quae";
                                                linkType = new Lookup() {{
                                                    created = OffsetDateTime.parse("2022-02-22T11:01:14.144Z");
                                                    description = "ipsam";
                                                    descriptionFriendly = "consequuntur";
                                                    displayOrder = 55107L;
                                                    id = 559682L;
                                                    lastUpdate = OffsetDateTime.parse("2020-09-06T01:35:17.785Z");
                                                    lookupType = new LookupType() {{
                                                        created = OffsetDateTime.parse("2021-08-19T05:33:23.931Z");
                                                        description = "necessitatibus";
                                                        id = 153369L;
                                                        lastUpdate = OffsetDateTime.parse("2022-10-20T03:32:15.371Z");
                                                        type = LookupTypeTypeEnum.IBD_CROHNSBEHAVIOUR;
                                                    }};
                                                    value = "eum";
                                                }};
                                                name = "Jennie Gutkowski DDS";
                                            }}),
                                        }};
                                        locations = new org.openapis.openapi.models.shared.Location[]{{
                                            add(new Location() {{
                                                address = "391 Federico Turnpike";
                                                created = OffsetDateTime.parse("2022-08-10T17:05:50.277Z");
                                                email = "Shaina.Orn98@hotmail.com";
                                                id = 918092L;
                                                label = "optio";
                                                lastUpdate = OffsetDateTime.parse("2022-04-09T21:10:40.487Z");
                                                name = "Vickie Nitzsche";
                                                phone = "(621) 526-5205 x813";
                                                web = "consequuntur";
                                            }}),
                                            add(new Location() {{
                                                address = "05970 Daugherty Neck";
                                                created = OffsetDateTime.parse("2022-08-29T19:51:14.645Z");
                                                email = "Marques_Tillman60@gmail.com";
                                                id = 966390L;
                                                label = "minima";
                                                lastUpdate = OffsetDateTime.parse("2021-05-25T00:50:01.296Z");
                                                name = "Paulette Lowe";
                                                phone = "1-692-780-3400 x293";
                                                web = "sint";
                                            }}),
                                        }};
                                        name = "Gerard Koch";
                                        parentGroups = new org.openapis.openapi.models.shared.Group[]{{
                                            add(new Group() {{}}),
                                            add(new Group() {{}}),
                                            add(new Group() {{}}),
                                        }};
                                        postcode = "58799";
                                        sftpUser = "asperiores";
                                        shortName = "ex";
                                        visible = false;
                                        visibleToJoin = false;
                                    }};
                                    id = 376741L;
                                    identifier = "debitis";
                                    location = "delectus";
                                    name = "Alexandra Pfannerstill";
                                    temporaryUuid = "velit";
                                    units = "atque";
                                    value = "ipsum";
                                }}),
                                add(new FhirObservation() {{
                                    applies = OffsetDateTime.parse("2022-07-03T04:15:46.912Z");
                                    bodySite = "soluta";
                                    comments = "repudiandae";
                                    comparator = "nam";
                                    diagram = "dolore";
                                    group = new Group() {{
                                        address1 = "iusto";
                                        address2 = "voluptate";
                                        address3 = "sequi";
                                        childGroups = new org.openapis.openapi.models.shared.Group[]{{
                                            add(new Group() {{}}),
                                            add(new Group() {{}}),
                                        }};
                                        code = "neque";
                                        contactPoints = new org.openapis.openapi.models.shared.ContactPoint[]{{
                                            add(new ContactPoint() {{
                                                contactPointType = new ContactPointType() {{
                                                    description = "deleniti";
                                                    id = 844235L;
                                                    lookupType = new LookupType() {{
                                                        created = OffsetDateTime.parse("2022-11-11T05:43:22.650Z");
                                                        description = "voluptatibus";
                                                        id = 426904L;
                                                        lastUpdate = OffsetDateTime.parse("2022-02-27T08:35:27.964Z");
                                                        type = LookupTypeTypeEnum.MENU;
                                                    }};
                                                    value = ContactPointTypeValueEnum.APPOINTMENT_EMAIL;
                                                }};
                                                content = "libero";
                                                created = OffsetDateTime.parse("2022-01-09T23:17:04.281Z");
                                                id = 156383L;
                                                lastUpdate = OffsetDateTime.parse("2022-02-01T21:39:29.465Z");
                                            }}),
                                            add(new ContactPoint() {{
                                                contactPointType = new ContactPointType() {{
                                                    description = "velit";
                                                    id = 75359L;
                                                    lookupType = new LookupType() {{
                                                        created = OffsetDateTime.parse("2022-07-29T23:57:06.865Z");
                                                        description = "ea";
                                                        id = 107617L;
                                                        lastUpdate = OffsetDateTime.parse("2021-04-18T19:14:29.683Z");
                                                        type = LookupTypeTypeEnum.STATISTIC_TYPE;
                                                    }};
                                                    value = ContactPointTypeValueEnum.PV_ADMIN_NAME;
                                                }};
                                                content = "ut";
                                                created = OffsetDateTime.parse("2021-02-17T05:30:39.106Z");
                                                id = 117525L;
                                                lastUpdate = OffsetDateTime.parse("2020-01-28T09:46:18.788Z");
                                            }}),
                                            add(new ContactPoint() {{
                                                contactPointType = new ContactPointType() {{
                                                    description = "iste";
                                                    id = 932562L;
                                                    lookupType = new LookupType() {{
                                                        created = OffsetDateTime.parse("2022-08-10T23:51:31.143Z");
                                                        description = "itaque";
                                                        id = 242178L;
                                                        lastUpdate = OffsetDateTime.parse("2022-07-02T05:01:22.981Z");
                                                        type = LookupTypeTypeEnum.CODE_TYPE;
                                                    }};
                                                    value = ContactPointTypeValueEnum.PV_ADMIN_EMAIL;
                                                }};
                                                content = "sit";
                                                created = OffsetDateTime.parse("2022-12-29T06:34:38.165Z");
                                                id = 639705L;
                                                lastUpdate = OffsetDateTime.parse("2021-10-10T21:47:57.882Z");
                                            }}),
                                            add(new ContactPoint() {{
                                                contactPointType = new ContactPointType() {{
                                                    description = "quidem";
                                                    id = 377406L;
                                                    lookupType = new LookupType() {{
                                                        created = OffsetDateTime.parse("2021-05-20T03:55:32.372Z");
                                                        description = "perspiciatis";
                                                        id = 709036L;
                                                        lastUpdate = OffsetDateTime.parse("2021-02-03T08:04:17.719Z");
                                                        type = LookupTypeTypeEnum.NEWS_TYPE;
                                                    }};
                                                    value = ContactPointTypeValueEnum.PV_ADMIN_PHONE;
                                                }};
                                                content = "unde";
                                                created = OffsetDateTime.parse("2021-01-14T18:43:36.668Z");
                                                id = 769967L;
                                                lastUpdate = OffsetDateTime.parse("2022-08-23T12:57:35.673Z");
                                            }}),
                                        }};
                                        created = OffsetDateTime.parse("2021-10-04T04:25:17.046Z");
                                        fhirResourceId = "741d3113-5296-45bb-8a72-02611435e139";
                                        groupFeatures = new org.openapis.openapi.models.shared.GroupFeature[]{{
                                            add(new GroupFeature() {{
                                                created = OffsetDateTime.parse("2021-05-24T21:18:28.969Z");
                                                feature = new Feature() {{
                                                    created = OffsetDateTime.parse("2022-11-03T21:52:43.365Z");
                                                    description = "nostrum";
                                                    id = 605712L;
                                                    lastUpdate = OffsetDateTime.parse("2022-10-08T13:36:13.725Z");
                                                    name = "Wm Steuber";
                                                }};
                                                id = 811939L;
                                                lastUpdate = OffsetDateTime.parse("2022-07-10T00:35:28.130Z");
                                            }}),
                                            add(new GroupFeature() {{
                                                created = OffsetDateTime.parse("2022-02-01T01:47:57.463Z");
                                                feature = new Feature() {{
                                                    created = OffsetDateTime.parse("2022-12-13T23:42:10.683Z");
                                                    description = "totam";
                                                    id = 292888L;
                                                    lastUpdate = OffsetDateTime.parse("2020-11-09T00:25:03.486Z");
                                                    name = "Ella Koch";
                                                }};
                                                id = 107210L;
                                                lastUpdate = OffsetDateTime.parse("2021-05-14T08:13:07.195Z");
                                            }}),
                                            add(new GroupFeature() {{
                                                created = OffsetDateTime.parse("2022-01-20T14:32:05.606Z");
                                                feature = new Feature() {{
                                                    created = OffsetDateTime.parse("2021-03-27T22:23:24.313Z");
                                                    description = "necessitatibus";
                                                    id = 733289L;
                                                    lastUpdate = OffsetDateTime.parse("2022-03-07T21:35:48.234Z");
                                                    name = "Brittany Prosacco";
                                                }};
                                                id = 889060L;
                                                lastUpdate = OffsetDateTime.parse("2020-10-15T16:19:08.064Z");
                                            }}),
                                            add(new GroupFeature() {{
                                                created = OffsetDateTime.parse("2022-12-26T08:34:47.406Z");
                                                feature = new Feature() {{
                                                    created = OffsetDateTime.parse("2022-04-22T15:10:37.825Z");
                                                    description = "fuga";
                                                    id = 919508L;
                                                    lastUpdate = OffsetDateTime.parse("2022-04-16T16:24:27.042Z");
                                                    name = "Jesse Sporer";
                                                }};
                                                id = 140316L;
                                                lastUpdate = OffsetDateTime.parse("2022-08-22T23:12:04.283Z");
                                            }}),
                                        }};
                                        groupType = new Lookup() {{
                                            created = OffsetDateTime.parse("2021-02-15T21:42:33.554Z");
                                            description = "adipisci";
                                            descriptionFriendly = "recusandae";
                                            displayOrder = 630871L;
                                            id = 282837L;
                                            lastUpdate = OffsetDateTime.parse("2022-04-28T01:39:49.849Z");
                                            lookupType = new LookupType() {{
                                                created = OffsetDateTime.parse("2022-05-26T22:08:06.673Z");
                                                description = "molestiae";
                                                id = 963198L;
                                                lastUpdate = OffsetDateTime.parse("2022-09-15T02:31:13.378Z");
                                                type = LookupTypeTypeEnum.FEATURE_TYPE;
                                            }};
                                            value = "numquam";
                                        }};
                                        id = 201010L;
                                        lastImportDate = OffsetDateTime.parse("2021-02-01T13:09:02.595Z");
                                        lastUpdate = OffsetDateTime.parse("2022-03-29T07:53:10.726Z");
                                        links = new org.openapis.openapi.models.shared.Link[]{{
                                            add(new Link() {{
                                                created = OffsetDateTime.parse("2022-10-25T06:51:46.936Z");
                                                displayOrder = 708898;
                                                id = 532669L;
                                                lastUpdate = OffsetDateTime.parse("2022-05-07T19:45:21.246Z");
                                                link = "placeat";
                                                linkType = new Lookup() {{
                                                    created = OffsetDateTime.parse("2022-10-18T12:19:42.762Z");
                                                    description = "in";
                                                    descriptionFriendly = "minus";
                                                    displayOrder = 433077L;
                                                    id = 266408L;
                                                    lastUpdate = OffsetDateTime.parse("2022-09-14T03:12:12.516Z");
                                                    lookupType = new LookupType() {{
                                                        created = OffsetDateTime.parse("2020-01-25T21:38:07.032Z");
                                                        description = "tempore";
                                                        id = 46013L;
                                                        lastUpdate = OffsetDateTime.parse("2022-08-15T11:30:58.946Z");
                                                        type = LookupTypeTypeEnum.RELATIONSHIP_TYPE;
                                                    }};
                                                    value = "totam";
                                                }};
                                                name = "Glen Satterfield";
                                            }}),
                                            add(new Link() {{
                                                created = OffsetDateTime.parse("2022-04-24T11:49:33.998Z");
                                                displayOrder = 669237;
                                                id = 770873L;
                                                lastUpdate = OffsetDateTime.parse("2020-10-17T04:42:29.949Z");
                                                link = "vero";
                                                linkType = new Lookup() {{
                                                    created = OffsetDateTime.parse("2022-01-01T22:27:34.342Z");
                                                    description = "pariatur";
                                                    descriptionFriendly = "nemo";
                                                    displayOrder = 441321L;
                                                    id = 45234L;
                                                    lastUpdate = OffsetDateTime.parse("2022-09-04T06:23:59.261Z");
                                                    lookupType = new LookupType() {{
                                                        created = OffsetDateTime.parse("2022-07-03T15:01:36.008Z");
                                                        description = "excepturi";
                                                        id = 172195L;
                                                        lastUpdate = OffsetDateTime.parse("2022-10-30T21:28:00.704Z");
                                                        type = LookupTypeTypeEnum.NEWS_TYPE;
                                                    }};
                                                    value = "voluptate";
                                                }};
                                                name = "Bradford Murazik";
                                            }}),
                                            add(new Link() {{
                                                created = OffsetDateTime.parse("2022-08-01T21:46:48.262Z");
                                                displayOrder = 888616;
                                                id = 810839L;
                                                lastUpdate = OffsetDateTime.parse("2022-04-21T19:40:37.162Z");
                                                link = "quam";
                                                linkType = new Lookup() {{
                                                    created = OffsetDateTime.parse("2022-09-26T09:55:57.644Z");
                                                    description = "ipsa";
                                                    descriptionFriendly = "sint";
                                                    displayOrder = 876027L;
                                                    id = 194901L;
                                                    lastUpdate = OffsetDateTime.parse("2020-10-11T08:25:54.157Z");
                                                    lookupType = new LookupType() {{
                                                        created = OffsetDateTime.parse("2022-01-24T00:30:42.322Z");
                                                        description = "veniam";
                                                        id = 659268L;
                                                        lastUpdate = OffsetDateTime.parse("2022-04-11T09:03:05.973Z");
                                                        type = LookupTypeTypeEnum.ROLE;
                                                    }};
                                                    value = "consequuntur";
                                                }};
                                                name = "Robin Bednar";
                                            }}),
                                            add(new Link() {{
                                                created = OffsetDateTime.parse("2022-11-26T19:05:24.735Z");
                                                displayOrder = 386447;
                                                id = 863471L;
                                                lastUpdate = OffsetDateTime.parse("2021-11-13T10:48:46.467Z");
                                                link = "occaecati";
                                                linkType = new Lookup() {{
                                                    created = OffsetDateTime.parse("2022-09-11T04:05:16.062Z");
                                                    description = "nostrum";
                                                    descriptionFriendly = "doloribus";
                                                    displayOrder = 757364L;
                                                    id = 574032L;
                                                    lastUpdate = OffsetDateTime.parse("2022-01-21T02:14:42.373Z");
                                                    lookupType = new LookupType() {{
                                                        created = OffsetDateTime.parse("2021-11-18T08:45:19.384Z");
                                                        description = "totam";
                                                        id = 564667L;
                                                        lastUpdate = OffsetDateTime.parse("2022-12-13T07:44:48.227Z");
                                                        type = LookupTypeTypeEnum.IBD_SMOKINGSTATUS;
                                                    }};
                                                    value = "architecto";
                                                }};
                                                name = "Nick Shields";
                                            }}),
                                        }};
                                        locations = new org.openapis.openapi.models.shared.Location[]{{
                                            add(new Location() {{
                                                address = "97722 Nolan Bypass";
                                                created = OffsetDateTime.parse("2022-09-01T10:17:19.810Z");
                                                email = "Bailee_McDermott@hotmail.com";
                                                id = 820023L;
                                                label = "non";
                                                lastUpdate = OffsetDateTime.parse("2022-01-25T17:05:34.945Z");
                                                name = "Ollie Harris";
                                                phone = "382-402-7739 x3573";
                                                web = "quis";
                                            }}),
                                        }};
                                        name = "Jeannette Schimmel";
                                        parentGroups = new org.openapis.openapi.models.shared.Group[]{{
                                            add(new Group() {{}}),
                                        }};
                                        postcode = "99182";
                                        sftpUser = "rerum";
                                        shortName = "eos";
                                        visible = false;
                                        visibleToJoin = false;
                                    }};
                                    id = 440777L;
                                    identifier = "nostrum";
                                    location = "neque";
                                    name = "Genevieve Lebsack";
                                    temporaryUuid = "unde";
                                    units = "officiis";
                                    value = "ducimus";
                                }}),
                            }};
                            procedures = new org.openapis.openapi.models.shared.FhirProcedure[]{{
                                add(new FhirProcedure() {{
                                    bodySite = "dicta";
                                    id = 622894L;
                                    type = "porro";
                                }}),
                            }};
                            status = "vitae";
                        }}),
                        add(new FhirEncounter() {{
                            date = OffsetDateTime.parse("2022-07-17T11:25:26.149Z");
                            encounterType = "fugiat";
                            group = new Group() {{
                                address1 = "ad";
                                address2 = "aspernatur";
                                address3 = "enim";
                                childGroups = new org.openapis.openapi.models.shared.Group[]{{
                                    add(new Group() {{}}),
                                    add(new Group() {{}}),
                                    add(new Group() {{}}),
                                    add(new Group() {{}}),
                                }};
                                code = "iusto";
                                contactPoints = new org.openapis.openapi.models.shared.ContactPoint[]{{
                                    add(new ContactPoint() {{
                                        contactPointType = new ContactPointType() {{
                                            description = "libero";
                                            id = 72350L;
                                            lookupType = new LookupType() {{
                                                created = OffsetDateTime.parse("2022-09-20T18:12:12.240Z");
                                                description = "accusamus";
                                                id = 902581L;
                                                lastUpdate = OffsetDateTime.parse("2022-05-02T04:00:18.906Z");
                                                type = LookupTypeTypeEnum.CODE_STANDARD;
                                            }};
                                            value = ContactPointTypeValueEnum.OUT_OF_HOURS_INFO;
                                        }};
                                        content = "earum";
                                        created = OffsetDateTime.parse("2022-06-30T04:42:17.193Z");
                                        id = 367046L;
                                        lastUpdate = OffsetDateTime.parse("2020-08-19T04:51:15.983Z");
                                    }}),
                                    add(new ContactPoint() {{
                                        contactPointType = new ContactPointType() {{
                                            description = "sequi";
                                            id = 467119L;
                                            lookupType = new LookupType() {{
                                                created = OffsetDateTime.parse("2022-11-06T20:04:24.972Z");
                                                description = "labore";
                                                id = 828841L;
                                                lastUpdate = OffsetDateTime.parse("2022-03-18T11:33:01.022Z");
                                                type = LookupTypeTypeEnum.IBD_CROHNSPROXIMALTERMINALILEUM;
                                            }};
                                            value = ContactPointTypeValueEnum.UNIT_ENQUIRIES_PHONE;
                                        }};
                                        content = "repudiandae";
                                        created = OffsetDateTime.parse("2022-03-13T01:53:18.865Z");
                                        id = 136357L;
                                        lastUpdate = OffsetDateTime.parse("2021-07-30T05:55:30.073Z");
                                    }}),
                                }};
                                created = OffsetDateTime.parse("2021-10-26T16:10:32.283Z");
                                fhirResourceId = "eb75dad6-36c6-4005-83d8-bb31180f739a";
                                groupFeatures = new org.openapis.openapi.models.shared.GroupFeature[]{{
                                    add(new GroupFeature() {{
                                        created = OffsetDateTime.parse("2021-02-28T04:50:19.409Z");
                                        feature = new Feature() {{
                                            created = OffsetDateTime.parse("2022-08-20T07:41:58.408Z");
                                            description = "molestiae";
                                            id = 930840L;
                                            lastUpdate = OffsetDateTime.parse("2021-11-28T13:56:44.956Z");
                                            name = "Bobbie Thompson";
                                        }};
                                        id = 115861L;
                                        lastUpdate = OffsetDateTime.parse("2022-10-03T19:15:55.395Z");
                                    }}),
                                    add(new GroupFeature() {{
                                        created = OffsetDateTime.parse("2022-11-16T15:13:44.571Z");
                                        feature = new Feature() {{
                                            created = OffsetDateTime.parse("2022-05-01T11:53:41.043Z");
                                            description = "occaecati";
                                            id = 539813L;
                                            lastUpdate = OffsetDateTime.parse("2022-02-18T02:05:10.545Z");
                                            name = "Mr. Bethany Koch";
                                        }};
                                        id = 411615L;
                                        lastUpdate = OffsetDateTime.parse("2022-07-06T08:20:32.050Z");
                                    }}),
                                    add(new GroupFeature() {{
                                        created = OffsetDateTime.parse("2022-04-09T04:08:42.865Z");
                                        feature = new Feature() {{
                                            created = OffsetDateTime.parse("2021-03-27T10:34:01.168Z");
                                            description = "consectetur";
                                            id = 753240L;
                                            lastUpdate = OffsetDateTime.parse("2022-10-06T22:05:31.165Z");
                                            name = "Jeremiah Spencer";
                                        }};
                                        id = 948541L;
                                        lastUpdate = OffsetDateTime.parse("2022-03-22T22:18:02.609Z");
                                    }}),
                                    add(new GroupFeature() {{
                                        created = OffsetDateTime.parse("2020-06-16T01:29:10.948Z");
                                        feature = new Feature() {{
                                            created = OffsetDateTime.parse("2022-01-07T23:50:35.437Z");
                                            description = "vero";
                                            id = 185348L;
                                            lastUpdate = OffsetDateTime.parse("2022-01-02T12:39:28.881Z");
                                            name = "Rose Heller";
                                        }};
                                        id = 68093L;
                                        lastUpdate = OffsetDateTime.parse("2022-01-21T11:51:59.457Z");
                                    }}),
                                }};
                                groupType = new Lookup() {{
                                    created = OffsetDateTime.parse("2021-01-26T14:30:53.787Z");
                                    description = "non";
                                    descriptionFriendly = "distinctio";
                                    displayOrder = 450224L;
                                    id = 349993L;
                                    lastUpdate = OffsetDateTime.parse("2022-09-30T03:36:36.062Z");
                                    lookupType = new LookupType() {{
                                        created = OffsetDateTime.parse("2022-03-16T11:49:42.347Z");
                                        description = "in";
                                        id = 127294L;
                                        lastUpdate = OffsetDateTime.parse("2021-06-04T05:44:25.595Z");
                                        type = LookupTypeTypeEnum.GROUP;
                                    }};
                                    value = "odit";
                                }};
                                id = 535802L;
                                lastImportDate = OffsetDateTime.parse("2022-07-19T18:04:50.511Z");
                                lastUpdate = OffsetDateTime.parse("2022-05-07T22:25:04.312Z");
                                links = new org.openapis.openapi.models.shared.Link[]{{
                                    add(new Link() {{
                                        created = OffsetDateTime.parse("2022-12-23T03:22:14.898Z");
                                        displayOrder = 266788;
                                        id = 430116L;
                                        lastUpdate = OffsetDateTime.parse("2022-05-07T23:23:18.376Z");
                                        link = "dignissimos";
                                        linkType = new Lookup() {{
                                            created = OffsetDateTime.parse("2021-12-19T01:46:44.910Z");
                                            description = "molestiae";
                                            descriptionFriendly = "veniam";
                                            displayOrder = 969206L;
                                            id = 66207L;
                                            lastUpdate = OffsetDateTime.parse("2022-12-26T22:32:30.778Z");
                                            lookupType = new LookupType() {{
                                                created = OffsetDateTime.parse("2022-02-02T05:53:12.433Z");
                                                description = "odio";
                                                id = 413758L;
                                                lastUpdate = OffsetDateTime.parse("2022-04-28T21:05:23.278Z");
                                                type = LookupTypeTypeEnum.IBD_SURGERYMAINPROCEDURE;
                                            }};
                                            value = "voluptate";
                                        }};
                                        name = "Peggy Hagenes";
                                    }}),
                                    add(new Link() {{
                                        created = OffsetDateTime.parse("2022-04-14T23:20:42.137Z");
                                        displayOrder = 481375;
                                        id = 558051L;
                                        lastUpdate = OffsetDateTime.parse("2022-04-18T16:39:17.670Z");
                                        link = "amet";
                                        linkType = new Lookup() {{
                                            created = OffsetDateTime.parse("2022-04-25T19:45:54.258Z");
                                            description = "alias";
                                            descriptionFriendly = "rem";
                                            displayOrder = 11355L;
                                            id = 550055L;
                                            lastUpdate = OffsetDateTime.parse("2021-05-03T11:10:30.236Z");
                                            lookupType = new LookupType() {{
                                                created = OffsetDateTime.parse("2022-12-09T19:34:59.129Z");
                                                description = "eaque";
                                                id = 904827L;
                                                lastUpdate = OffsetDateTime.parse("2021-01-17T21:44:22.334Z");
                                                type = LookupTypeTypeEnum.IBD_SURGERYMAINPROCEDURE;
                                            }};
                                            value = "officia";
                                        }};
                                        name = "Sandra Abbott";
                                    }}),
                                    add(new Link() {{
                                        created = OffsetDateTime.parse("2022-09-21T09:52:12.575Z");
                                        displayOrder = 185448;
                                        id = 185897L;
                                        lastUpdate = OffsetDateTime.parse("2020-12-04T19:10:00.340Z");
                                        link = "explicabo";
                                        linkType = new Lookup() {{
                                            created = OffsetDateTime.parse("2022-08-08T17:37:24.824Z");
                                            description = "modi";
                                            descriptionFriendly = "optio";
                                            displayOrder = 975095L;
                                            id = 562948L;
                                            lastUpdate = OffsetDateTime.parse("2021-07-16T18:01:27.840Z");
                                            lookupType = new LookupType() {{
                                                created = OffsetDateTime.parse("2022-08-13T05:20:10.013Z");
                                                description = "aliquid";
                                                id = 412052L;
                                                lastUpdate = OffsetDateTime.parse("2021-07-04T06:21:37.852Z");
                                                type = LookupTypeTypeEnum.CODE_STANDARD;
                                            }};
                                            value = "velit";
                                        }};
                                        name = "Jerald Stoltenberg";
                                    }}),
                                }};
                                locations = new org.openapis.openapi.models.shared.Location[]{{
                                    add(new Location() {{
                                        address = "37992 Crona Harbor";
                                        created = OffsetDateTime.parse("2022-08-22T07:06:40.070Z");
                                        email = "Nicola.Berge10@hotmail.com";
                                        id = 317898L;
                                        label = "optio";
                                        lastUpdate = OffsetDateTime.parse("2022-12-19T13:06:00.021Z");
                                        name = "Van Wilkinson V";
                                        phone = "(429) 821-8897 x785";
                                        web = "reiciendis";
                                    }}),
                                    add(new Location() {{
                                        address = "54444 Sonny Junctions";
                                        created = OffsetDateTime.parse("2022-08-23T10:02:26.660Z");
                                        email = "Cary_Nitzsche@yahoo.com";
                                        id = 262800L;
                                        label = "ipsa";
                                        lastUpdate = OffsetDateTime.parse("2021-01-16T22:44:47.241Z");
                                        name = "Lynn Ullrich";
                                        phone = "698-792-1260 x939";
                                        web = "possimus";
                                    }}),
                                    add(new Location() {{
                                        address = "2135 Abbott Radial";
                                        created = OffsetDateTime.parse("2022-08-03T11:04:55.002Z");
                                        email = "Casey_Harris57@hotmail.com";
                                        id = 280859L;
                                        label = "numquam";
                                        lastUpdate = OffsetDateTime.parse("2022-04-16T17:09:27.790Z");
                                        name = "Harvey Harber";
                                        phone = "(293) 824-6311";
                                        web = "aliquid";
                                    }}),
                                    add(new Location() {{
                                        address = "22523 Quigley Shoal";
                                        created = OffsetDateTime.parse("2022-08-21T07:53:58.550Z");
                                        email = "Carmen.Feeney@yahoo.com";
                                        id = 332831L;
                                        label = "quod";
                                        lastUpdate = OffsetDateTime.parse("2020-02-19T15:39:45.563Z");
                                        name = "Bill Yundt";
                                        phone = "(260) 881-1458";
                                        web = "ullam";
                                    }}),
                                }};
                                name = "Ms. Donna Auer";
                                parentGroups = new org.openapis.openapi.models.shared.Group[]{{
                                    add(new Group() {{}}),
                                    add(new Group() {{}}),
                                }};
                                postcode = "73922-4314";
                                sftpUser = "natus";
                                shortName = "provident";
                                visible = false;
                                visibleToJoin = false;
                            }};
                            id = 739508L;
                            identifier = "doloribus";
                            links = new org.openapis.openapi.models.shared.Link[]{{
                                add(new Link() {{
                                    created = OffsetDateTime.parse("2021-02-19T13:57:53.084Z");
                                    displayOrder = 389548;
                                    id = 601714L;
                                    lastUpdate = OffsetDateTime.parse("2022-05-28T18:04:13.681Z");
                                    link = "hic";
                                    linkType = new Lookup() {{
                                        created = OffsetDateTime.parse("2022-09-24T01:11:28.454Z");
                                        description = "libero";
                                        descriptionFriendly = "nam";
                                        displayOrder = 279172L;
                                        id = 925395L;
                                        lastUpdate = OffsetDateTime.parse("2021-01-03T04:35:17.852Z");
                                        lookupType = new LookupType() {{
                                            created = OffsetDateTime.parse("2021-09-24T18:07:45.123Z");
                                            description = "quo";
                                            id = 198991L;
                                            lastUpdate = OffsetDateTime.parse("2021-11-24T14:44:53.995Z");
                                            type = LookupTypeTypeEnum.IBD_SURGERYMAINPROCEDURE;
                                        }};
                                        value = "facilis";
                                    }};
                                    name = "Iris Shields";
                                }}),
                                add(new Link() {{
                                    created = OffsetDateTime.parse("2022-01-11T21:57:18.174Z");
                                    displayOrder = 816151;
                                    id = 674683L;
                                    lastUpdate = OffsetDateTime.parse("2020-12-24T20:33:09.754Z");
                                    link = "incidunt";
                                    linkType = new Lookup() {{
                                        created = OffsetDateTime.parse("2021-11-22T08:55:16.108Z");
                                        description = "alias";
                                        descriptionFriendly = "suscipit";
                                        displayOrder = 647210L;
                                        id = 560451L;
                                        lastUpdate = OffsetDateTime.parse("2021-08-31T04:48:59.619Z");
                                        lookupType = new LookupType() {{
                                            created = OffsetDateTime.parse("2022-06-05T16:43:24.726Z");
                                            description = "quo";
                                            id = 19462L;
                                            lastUpdate = OffsetDateTime.parse("2022-08-08T06:48:42.276Z");
                                            type = LookupTypeTypeEnum.RELATIONSHIP_TYPE;
                                        }};
                                        value = "quaerat";
                                    }};
                                    name = "Moses Heathcote";
                                }}),
                                add(new Link() {{
                                    created = OffsetDateTime.parse("2021-02-19T13:48:09.621Z");
                                    displayOrder = 653000;
                                    id = 298613L;
                                    lastUpdate = OffsetDateTime.parse("2022-07-16T18:26:00.868Z");
                                    link = "corrupti";
                                    linkType = new Lookup() {{
                                        created = OffsetDateTime.parse("2021-05-15T21:15:26.131Z");
                                        description = "impedit";
                                        descriptionFriendly = "quasi";
                                        displayOrder = 647218L;
                                        id = 801075L;
                                        lastUpdate = OffsetDateTime.parse("2022-12-16T23:15:53.018Z");
                                        lookupType = new LookupType() {{
                                            created = OffsetDateTime.parse("2022-03-09T00:09:06.189Z");
                                            description = "necessitatibus";
                                            id = 807564L;
                                            lastUpdate = OffsetDateTime.parse("2022-12-13T09:10:32.408Z");
                                            type = LookupTypeTypeEnum.ROLE;
                                        }};
                                        value = "similique";
                                    }};
                                    name = "Guy Beier";
                                }}),
                            }};
                            observations = new org.openapis.openapi.models.shared.FhirObservation[]{{
                                add(new FhirObservation() {{
                                    applies = OffsetDateTime.parse("2020-09-06T06:44:59.753Z");
                                    bodySite = "ipsa";
                                    comments = "excepturi";
                                    comparator = "a";
                                    diagram = "maiores";
                                    group = new Group() {{
                                        address1 = "laudantium";
                                        address2 = "maiores";
                                        address3 = "alias";
                                        childGroups = new org.openapis.openapi.models.shared.Group[]{{
                                            add(new Group() {{}}),
                                            add(new Group() {{}}),
                                            add(new Group() {{}}),
                                            add(new Group() {{}}),
                                        }};
                                        code = "rem";
                                        contactPoints = new org.openapis.openapi.models.shared.ContactPoint[]{{
                                            add(new ContactPoint() {{
                                                contactPointType = new ContactPointType() {{
                                                    description = "suscipit";
                                                    id = 938257L;
                                                    lookupType = new LookupType() {{
                                                        created = OffsetDateTime.parse("2022-04-08T04:42:37.704Z");
                                                        description = "eius";
                                                        id = 458212L;
                                                        lastUpdate = OffsetDateTime.parse("2022-03-30T13:07:06.451Z");
                                                        type = LookupTypeTypeEnum.ROLE;
                                                    }};
                                                    value = ContactPointTypeValueEnum.PV_ADMIN_NAME;
                                                }};
                                                content = "vero";
                                                created = OffsetDateTime.parse("2022-12-04T14:23:52.305Z");
                                                id = 185816L;
                                                lastUpdate = OffsetDateTime.parse("2022-09-08T07:32:05.126Z");
                                            }}),
                                        }};
                                        created = OffsetDateTime.parse("2022-11-19T10:56:46.631Z");
                                        fhirResourceId = "25b0960a-6681-451a-872a-f923c5949f83";
                                        groupFeatures = new org.openapis.openapi.models.shared.GroupFeature[]{{
                                            add(new GroupFeature() {{
                                                created = OffsetDateTime.parse("2022-08-21T04:43:10.345Z");
                                                feature = new Feature() {{
                                                    created = OffsetDateTime.parse("2022-03-19T09:51:28.690Z");
                                                    description = "tenetur";
                                                    id = 555294L;
                                                    lastUpdate = OffsetDateTime.parse("2022-08-09T14:14:56.146Z");
                                                    name = "Tommie Rohan Sr.";
                                                }};
                                                id = 795546L;
                                                lastUpdate = OffsetDateTime.parse("2022-02-03T07:29:42.207Z");
                                            }}),
                                            add(new GroupFeature() {{
                                                created = OffsetDateTime.parse("2020-10-17T08:45:01.673Z");
                                                feature = new Feature() {{
                                                    created = OffsetDateTime.parse("2022-06-20T20:53:51.556Z");
                                                    description = "voluptates";
                                                    id = 145435L;
                                                    lastUpdate = OffsetDateTime.parse("2022-10-22T04:03:03.335Z");
                                                    name = "Marlon Koelpin";
                                                }};
                                                id = 996541L;
                                                lastUpdate = OffsetDateTime.parse("2021-01-09T19:53:05.818Z");
                                            }}),
                                            add(new GroupFeature() {{
                                                created = OffsetDateTime.parse("2020-03-18T04:20:31.433Z");
                                                feature = new Feature() {{
                                                    created = OffsetDateTime.parse("2021-01-26T10:56:43.935Z");
                                                    description = "corporis";
                                                    id = 246577L;
                                                    lastUpdate = OffsetDateTime.parse("2022-01-21T01:13:08.281Z");
                                                    name = "Elias Keeling MD";
                                                }};
                                                id = 770128L;
                                                lastUpdate = OffsetDateTime.parse("2022-07-01T17:33:17.808Z");
                                            }}),
                                            add(new GroupFeature() {{
                                                created = OffsetDateTime.parse("2022-03-20T00:59:19.184Z");
                                                feature = new Feature() {{
                                                    created = OffsetDateTime.parse("2022-04-02T23:19:12.805Z");
                                                    description = "natus";
                                                    id = 793568L;
                                                    lastUpdate = OffsetDateTime.parse("2022-09-13T06:17:44.251Z");
                                                    name = "Traci Lueilwitz";
                                                }};
                                                id = 473326L;
                                                lastUpdate = OffsetDateTime.parse("2022-04-29T13:53:48.890Z");
                                            }}),
                                        }};
                                        groupType = new Lookup() {{
                                            created = OffsetDateTime.parse("2022-12-24T04:53:51.587Z");
                                            description = "necessitatibus";
                                            descriptionFriendly = "architecto";
                                            displayOrder = 564627L;
                                            id = 292177L;
                                            lastUpdate = OffsetDateTime.parse("2022-01-07T05:00:23.813Z");
                                            lookupType = new LookupType() {{
                                                created = OffsetDateTime.parse("2022-11-10T23:49:36.434Z");
                                                description = "earum";
                                                id = 330596L;
                                                lastUpdate = OffsetDateTime.parse("2022-12-13T08:46:29.590Z");
                                                type = LookupTypeTypeEnum.IDENTIFIER;
                                            }};
                                            value = "veniam";
                                        }};
                                        id = 469994L;
                                        lastImportDate = OffsetDateTime.parse("2022-08-10T03:09:02.235Z");
                                        lastUpdate = OffsetDateTime.parse("2021-12-26T13:57:53.481Z");
                                        links = new org.openapis.openapi.models.shared.Link[]{{
                                            add(new Link() {{
                                                created = OffsetDateTime.parse("2022-08-14T06:59:07.022Z");
                                                displayOrder = 866459;
                                                id = 24769L;
                                                lastUpdate = OffsetDateTime.parse("2021-05-04T08:20:05.226Z");
                                                link = "perferendis";
                                                linkType = new Lookup() {{
                                                    created = OffsetDateTime.parse("2021-01-31T13:17:13.329Z");
                                                    description = "sed";
                                                    descriptionFriendly = "possimus";
                                                    displayOrder = 996072L;
                                                    id = 921060L;
                                                    lastUpdate = OffsetDateTime.parse("2022-10-05T03:30:10.840Z");
                                                    lookupType = new LookupType() {{
                                                        created = OffsetDateTime.parse("2020-12-08T03:11:38.650Z");
                                                        description = "dolore";
                                                        id = 976762L;
                                                        lastUpdate = OffsetDateTime.parse("2022-11-15T14:43:00.322Z");
                                                        type = LookupTypeTypeEnum.IBD_EGIMCOMPLICATION;
                                                    }};
                                                    value = "soluta";
                                                }};
                                                name = "Jacob Wehner";
                                            }}),
                                            add(new Link() {{
                                                created = OffsetDateTime.parse("2022-11-26T07:10:57.925Z");
                                                displayOrder = 649032;
                                                id = 884361L;
                                                lastUpdate = OffsetDateTime.parse("2021-06-18T12:23:42.062Z");
                                                link = "doloremque";
                                                linkType = new Lookup() {{
                                                    created = OffsetDateTime.parse("2021-11-26T01:21:46.726Z");
                                                    description = "eaque";
                                                    descriptionFriendly = "deserunt";
                                                    displayOrder = 396223L;
                                                    id = 570423L;
                                                    lastUpdate = OffsetDateTime.parse("2022-09-23T02:35:04.203Z");
                                                    lookupType = new LookupType() {{
                                                        created = OffsetDateTime.parse("2022-05-04T04:44:15.712Z");
                                                        description = "rerum";
                                                        id = 153582L;
                                                        lastUpdate = OffsetDateTime.parse("2020-09-20T22:31:52.202Z");
                                                        type = LookupTypeTypeEnum.LINK_TYPE;
                                                    }};
                                                    value = "minus";
                                                }};
                                                name = "Julian Ziemann";
                                            }}),
                                            add(new Link() {{
                                                created = OffsetDateTime.parse("2022-12-18T10:44:39.786Z");
                                                displayOrder = 75850;
                                                id = 14251L;
                                                lastUpdate = OffsetDateTime.parse("2021-12-22T09:30:36.023Z");
                                                link = "at";
                                                linkType = new Lookup() {{
                                                    created = OffsetDateTime.parse("2022-05-20T23:28:58.015Z");
                                                    description = "pariatur";
                                                    descriptionFriendly = "vel";
                                                    displayOrder = 960813L;
                                                    id = 652515L;
                                                    lastUpdate = OffsetDateTime.parse("2022-06-13T06:49:19.205Z");
                                                    lookupType = new LookupType() {{
                                                        created = OffsetDateTime.parse("2022-10-01T07:29:12.481Z");
                                                        description = "voluptates";
                                                        id = 324052L;
                                                        lastUpdate = OffsetDateTime.parse("2022-03-19T07:40:40.668Z");
                                                        type = LookupTypeTypeEnum.IBD_CROHNSLOCATION;
                                                    }};
                                                    value = "consequuntur";
                                                }};
                                                name = "Walter Jacobs";
                                            }}),
                                            add(new Link() {{
                                                created = OffsetDateTime.parse("2022-08-07T16:17:41.324Z");
                                                displayOrder = 232316;
                                                id = 768195L;
                                                lastUpdate = OffsetDateTime.parse("2021-12-11T18:26:16.165Z");
                                                link = "ducimus";
                                                linkType = new Lookup() {{
                                                    created = OffsetDateTime.parse("2022-01-27T07:05:04.993Z");
                                                    description = "tempora";
                                                    descriptionFriendly = "blanditiis";
                                                    displayOrder = 258059L;
                                                    id = 196374L;
                                                    lastUpdate = OffsetDateTime.parse("2022-12-12T05:35:21.100Z");
                                                    lookupType = new LookupType() {{
                                                        created = OffsetDateTime.parse("2022-10-31T13:11:59.129Z");
                                                        description = "tenetur";
                                                        id = 419858L;
                                                        lastUpdate = OffsetDateTime.parse("2021-12-19T12:01:59.972Z");
                                                        type = LookupTypeTypeEnum.IBD_EGIMCOMPLICATION;
                                                    }};
                                                    value = "deserunt";
                                                }};
                                                name = "Marcia Hintz";
                                            }}),
                                        }};
                                        locations = new org.openapis.openapi.models.shared.Location[]{{
                                            add(new Location() {{
                                                address = "028 Lessie Harbor";
                                                created = OffsetDateTime.parse("2020-07-27T17:15:40.261Z");
                                                email = "Kobe46@yahoo.com";
                                                id = 78246L;
                                                label = "libero";
                                                lastUpdate = OffsetDateTime.parse("2022-11-26T08:30:04.331Z");
                                                name = "Keith Pfeffer";
                                                phone = "(892) 755-5878";
                                                web = "sapiente";
                                            }}),
                                        }};
                                        name = "Randall Schmeler";
                                        parentGroups = new org.openapis.openapi.models.shared.Group[]{{
                                            add(new Group() {{}}),
                                            add(new Group() {{}}),
                                            add(new Group() {{}}),
                                        }};
                                        postcode = "57749-8071";
                                        sftpUser = "pariatur";
                                        shortName = "eligendi";
                                        visible = false;
                                        visibleToJoin = false;
                                    }};
                                    id = 927490L;
                                    identifier = "veritatis";
                                    location = "aut";
                                    name = "Mathew Erdman";
                                    temporaryUuid = "magni";
                                    units = "rerum";
                                    value = "doloremque";
                                }}),
                            }};
                            procedures = new org.openapis.openapi.models.shared.FhirProcedure[]{{
                                add(new FhirProcedure() {{
                                    bodySite = "eum";
                                    id = 873320L;
                                    type = "eum";
                                }}),
                            }};
                            status = "reprehenderit";
                        }}),
                    }};
                    groupCode = "voluptatum";
                    identifier = "blanditiis";
                    observations = new org.openapis.openapi.models.shared.FhirObservation[]{{
                        add(new FhirObservation() {{
                            applies = OffsetDateTime.parse("2021-08-09T11:08:53.449Z");
                            bodySite = "deserunt";
                            comments = "atque";
                            comparator = "nostrum";
                            diagram = "atque";
                            group = new Group() {{
                                address1 = "architecto";
                                address2 = "est";
                                address3 = "enim";
                                childGroups = new org.openapis.openapi.models.shared.Group[]{{
                                    add(new Group() {{}}),
                                    add(new Group() {{}}),
                                    add(new Group() {{}}),
                                }};
                                code = "magni";
                                contactPoints = new org.openapis.openapi.models.shared.ContactPoint[]{{
                                    add(new ContactPoint() {{
                                        contactPointType = new ContactPointType() {{
                                            description = "quas";
                                            id = 811259L;
                                            lookupType = new LookupType() {{
                                                created = OffsetDateTime.parse("2022-09-18T10:40:00.413Z");
                                                description = "sapiente";
                                                id = 901651L;
                                                lastUpdate = OffsetDateTime.parse("2021-01-27T18:05:53.728Z");
                                                type = LookupTypeTypeEnum.IBD_CROHNSPROXIMALTERMINALILEUM;
                                            }};
                                            value = ContactPointTypeValueEnum.APPOINTMENT_PHONE;
                                        }};
                                        content = "natus";
                                        created = OffsetDateTime.parse("2022-01-06T08:05:01.455Z");
                                        id = 156098L;
                                        lastUpdate = OffsetDateTime.parse("2021-01-17T15:26:43.931Z");
                                    }}),
                                }};
                                created = OffsetDateTime.parse("2021-12-27T21:30:34.430Z");
                                fhirResourceId = "565d307c-fee8-4120-ae28-13fa4a41c480";
                                groupFeatures = new org.openapis.openapi.models.shared.GroupFeature[]{{
                                    add(new GroupFeature() {{
                                        created = OffsetDateTime.parse("2022-01-01T01:16:49.496Z");
                                        feature = new Feature() {{
                                            created = OffsetDateTime.parse("2022-12-02T16:42:16.559Z");
                                            description = "sequi";
                                            id = 143078L;
                                            lastUpdate = OffsetDateTime.parse("2021-02-11T12:50:04.175Z");
                                            name = "Mr. Connie Brakus";
                                        }};
                                        id = 316541L;
                                        lastUpdate = OffsetDateTime.parse("2022-09-13T22:56:49.685Z");
                                    }}),
                                    add(new GroupFeature() {{
                                        created = OffsetDateTime.parse("2022-03-27T16:55:25.058Z");
                                        feature = new Feature() {{
                                            created = OffsetDateTime.parse("2020-10-01T03:53:48.305Z");
                                            description = "ex";
                                            id = 998023L;
                                            lastUpdate = OffsetDateTime.parse("2022-06-20T02:21:11.806Z");
                                            name = "Irvin Marks";
                                        }};
                                        id = 106682L;
                                        lastUpdate = OffsetDateTime.parse("2022-03-08T14:16:56.716Z");
                                    }}),
                                    add(new GroupFeature() {{
                                        created = OffsetDateTime.parse("2022-05-29T19:50:28.684Z");
                                        feature = new Feature() {{
                                            created = OffsetDateTime.parse("2021-07-09T17:15:53.752Z");
                                            description = "esse";
                                            id = 657044L;
                                            lastUpdate = OffsetDateTime.parse("2022-01-29T10:24:00.407Z");
                                            name = "Merle Franecki";
                                        }};
                                        id = 701978L;
                                        lastUpdate = OffsetDateTime.parse("2021-07-13T19:04:49.388Z");
                                    }}),
                                    add(new GroupFeature() {{
                                        created = OffsetDateTime.parse("2022-11-13T22:25:09.106Z");
                                        feature = new Feature() {{
                                            created = OffsetDateTime.parse("2021-10-23T06:28:50.254Z");
                                            description = "quis";
                                            id = 704402L;
                                            lastUpdate = OffsetDateTime.parse("2022-09-19T00:24:09.398Z");
                                            name = "Julie Lakin";
                                        }};
                                        id = 709051L;
                                        lastUpdate = OffsetDateTime.parse("2021-10-08T20:21:24.708Z");
                                    }}),
                                }};
                                groupType = new Lookup() {{
                                    created = OffsetDateTime.parse("2022-03-17T17:42:34.376Z");
                                    description = "quos";
                                    descriptionFriendly = "temporibus";
                                    displayOrder = 576657L;
                                    id = 483459L;
                                    lastUpdate = OffsetDateTime.parse("2022-02-13T08:47:27.063Z");
                                    lookupType = new LookupType() {{
                                        created = OffsetDateTime.parse("2022-01-31T12:10:09.931Z");
                                        description = "laudantium";
                                        id = 271551L;
                                        lastUpdate = OffsetDateTime.parse("2022-05-24T05:54:09.135Z");
                                        type = LookupTypeTypeEnum.IBD_SURGERYMAINPROCEDURE;
                                    }};
                                    value = "rem";
                                }};
                                id = 949370L;
                                lastImportDate = OffsetDateTime.parse("2022-06-21T13:56:00.357Z");
                                lastUpdate = OffsetDateTime.parse("2022-09-11T23:53:23.627Z");
                                links = new org.openapis.openapi.models.shared.Link[]{{
                                    add(new Link() {{
                                        created = OffsetDateTime.parse("2022-01-07T01:07:05.981Z");
                                        displayOrder = 196646;
                                        id = 902132L;
                                        lastUpdate = OffsetDateTime.parse("2022-07-17T13:35:14.646Z");
                                        link = "debitis";
                                        linkType = new Lookup() {{
                                            created = OffsetDateTime.parse("2020-08-20T00:40:38.007Z");
                                            description = "cumque";
                                            descriptionFriendly = "aliquam";
                                            displayOrder = 677895L;
                                            id = 644827L;
                                            lastUpdate = OffsetDateTime.parse("2022-01-11T19:12:20.875Z");
                                            lookupType = new LookupType() {{
                                                created = OffsetDateTime.parse("2022-03-20T06:32:16.227Z");
                                                description = "laborum";
                                                id = 748973L;
                                                lastUpdate = OffsetDateTime.parse("2021-03-06T15:38:17.604Z");
                                                type = LookupTypeTypeEnum.GROUP;
                                            }};
                                            value = "ipsam";
                                        }};
                                        name = "Kent Kihn";
                                    }}),
                                    add(new Link() {{
                                        created = OffsetDateTime.parse("2022-09-05T15:53:48.964Z");
                                        displayOrder = 392752;
                                        id = 474185L;
                                        lastUpdate = OffsetDateTime.parse("2022-06-27T02:38:23.996Z");
                                        link = "sed";
                                        linkType = new Lookup() {{
                                            created = OffsetDateTime.parse("2022-07-09T20:41:14.694Z");
                                            description = "expedita";
                                            descriptionFriendly = "eos";
                                            displayOrder = 830477L;
                                            id = 199879L;
                                            lastUpdate = OffsetDateTime.parse("2022-06-05T01:46:57.838Z");
                                            lookupType = new LookupType() {{
                                                created = OffsetDateTime.parse("2022-07-18T04:07:46.043Z");
                                                description = "accusantium";
                                                id = 718119L;
                                                lastUpdate = OffsetDateTime.parse("2021-08-11T23:02:40.424Z");
                                                type = LookupTypeTypeEnum.IBD_CROHNSPERIANAL;
                                            }};
                                            value = "aliquam";
                                        }};
                                        name = "Trevor Lemke";
                                    }}),
                                }};
                                locations = new org.openapis.openapi.models.shared.Location[]{{
                                    add(new Location() {{
                                        address = "2363 Okuneva Via";
                                        created = OffsetDateTime.parse("2022-09-30T19:30:44.770Z");
                                        email = "Milo.Wyman@hotmail.com";
                                        id = 759490L;
                                        label = "sequi";
                                        lastUpdate = OffsetDateTime.parse("2022-11-21T00:41:23.553Z");
                                        name = "Anthony Cormier";
                                        phone = "481.334.9916 x077";
                                        web = "quos";
                                    }}),
                                    add(new Location() {{
                                        address = "945 Bayer Path";
                                        created = OffsetDateTime.parse("2022-05-30T06:51:32.911Z");
                                        email = "Rita77@yahoo.com";
                                        id = 196700L;
                                        label = "commodi";
                                        lastUpdate = OffsetDateTime.parse("2022-04-16T19:53:20.939Z");
                                        name = "Rosalie Casper";
                                        phone = "767.905.5717 x29917";
                                        web = "quas";
                                    }}),
                                    add(new Location() {{
                                        address = "479 Belle Circles";
                                        created = OffsetDateTime.parse("2020-03-17T16:33:05.600Z");
                                        email = "Maud.Bins79@hotmail.com";
                                        id = 717560L;
                                        label = "possimus";
                                        lastUpdate = OffsetDateTime.parse("2022-03-27T21:22:17.518Z");
                                        name = "Merle Schmidt";
                                        phone = "557.713.1144";
                                        web = "magnam";
                                    }}),
                                    add(new Location() {{
                                        address = "8750 Marco Streets";
                                        created = OffsetDateTime.parse("2022-03-13T05:15:53.160Z");
                                        email = "Zoie_Heaney41@hotmail.com";
                                        id = 456371L;
                                        label = "explicabo";
                                        lastUpdate = OffsetDateTime.parse("2022-02-28T03:59:08.192Z");
                                        name = "Jeffrey Wolff";
                                        phone = "1-392-736-4005 x45434";
                                        web = "ab";
                                    }}),
                                }};
                                name = "Wendy Will";
                                parentGroups = new org.openapis.openapi.models.shared.Group[]{{
                                    add(new Group() {{}}),
                                    add(new Group() {{}}),
                                }};
                                postcode = "55733-3320";
                                sftpUser = "corrupti";
                                shortName = "doloremque";
                                visible = false;
                                visibleToJoin = false;
                            }};
                            id = 854137L;
                            identifier = "numquam";
                            location = "doloremque";
                            name = "Loren Murphy";
                            temporaryUuid = "nisi";
                            units = "cumque";
                            value = "soluta";
                        }}),
                        add(new FhirObservation() {{
                            applies = OffsetDateTime.parse("2021-10-31T17:32:08.082Z");
                            bodySite = "nam";
                            comments = "enim";
                            comparator = "maiores";
                            diagram = "consectetur";
                            group = new Group() {{
                                address1 = "necessitatibus";
                                address2 = "maxime";
                                address3 = "cupiditate";
                                childGroups = new org.openapis.openapi.models.shared.Group[]{{
                                    add(new Group() {{}}),
                                }};
                                code = "provident";
                                contactPoints = new org.openapis.openapi.models.shared.ContactPoint[]{{
                                    add(new ContactPoint() {{
                                        contactPointType = new ContactPointType() {{
                                            description = "accusantium";
                                            id = 301360L;
                                            lookupType = new LookupType() {{
                                                created = OffsetDateTime.parse("2021-03-06T15:27:48.340Z");
                                                description = "explicabo";
                                                id = 425817L;
                                                lastUpdate = OffsetDateTime.parse("2021-09-03T23:09:42.514Z");
                                                type = LookupTypeTypeEnum.IBD_SURGERYMAINPROCEDURE;
                                            }};
                                            value = ContactPointTypeValueEnum.TRUST_WEB_ADDRESS;
                                        }};
                                        content = "ipsam";
                                        created = OffsetDateTime.parse("2022-10-21T03:34:32.727Z");
                                        id = 529310L;
                                        lastUpdate = OffsetDateTime.parse("2022-05-18T18:19:33.332Z");
                                    }}),
                                }};
                                created = OffsetDateTime.parse("2022-06-18T04:35:44.323Z");
                                fhirResourceId = "74b0ed20-e562-448f-bf63-9a910abdcab6";
                                groupFeatures = new org.openapis.openapi.models.shared.GroupFeature[]{{
                                    add(new GroupFeature() {{
                                        created = OffsetDateTime.parse("2022-07-19T08:00:32.720Z");
                                        feature = new Feature() {{
                                            created = OffsetDateTime.parse("2022-08-09T00:52:52.587Z");
                                            description = "provident";
                                            id = 385760L;
                                            lastUpdate = OffsetDateTime.parse("2022-10-18T05:15:57.647Z");
                                            name = "Mr. Sylvester Becker";
                                        }};
                                        id = 112224L;
                                        lastUpdate = OffsetDateTime.parse("2022-08-12T20:46:36.515Z");
                                    }}),
                                }};
                                groupType = new Lookup() {{
                                    created = OffsetDateTime.parse("2022-08-27T11:42:55.462Z");
                                    description = "illum";
                                    descriptionFriendly = "praesentium";
                                    displayOrder = 601626L;
                                    id = 629461L;
                                    lastUpdate = OffsetDateTime.parse("2020-10-21T07:18:08.779Z");
                                    lookupType = new LookupType() {{
                                        created = OffsetDateTime.parse("2022-02-10T02:37:22.453Z");
                                        description = "nobis";
                                        id = 989089L;
                                        lastUpdate = OffsetDateTime.parse("2021-01-05T04:07:53.639Z");
                                        type = LookupTypeTypeEnum.GENDER;
                                    }};
                                    value = "quibusdam";
                                }};
                                id = 27400L;
                                lastImportDate = OffsetDateTime.parse("2022-01-04T16:18:44.200Z");
                                lastUpdate = OffsetDateTime.parse("2022-05-30T05:35:32.331Z");
                                links = new org.openapis.openapi.models.shared.Link[]{{
                                    add(new Link() {{
                                        created = OffsetDateTime.parse("2022-11-15T04:11:03.559Z");
                                        displayOrder = 217504;
                                        id = 367L;
                                        lastUpdate = OffsetDateTime.parse("2022-09-23T02:06:07.148Z");
                                        link = "perspiciatis";
                                        linkType = new Lookup() {{
                                            created = OffsetDateTime.parse("2022-06-17T12:45:39.297Z");
                                            description = "officia";
                                            descriptionFriendly = "ex";
                                            displayOrder = 101770L;
                                            id = 953564L;
                                            lastUpdate = OffsetDateTime.parse("2022-10-31T11:16:16.648Z");
                                            lookupType = new LookupType() {{
                                                created = OffsetDateTime.parse("2020-02-24T13:01:57.686Z");
                                                description = "qui";
                                                id = 34989L;
                                                lastUpdate = OffsetDateTime.parse("2022-06-18T06:50:48.884Z");
                                                type = LookupTypeTypeEnum.GENDER;
                                            }};
                                            value = "tenetur";
                                        }};
                                        name = "Dr. Georgia Schmidt";
                                    }}),
                                    add(new Link() {{
                                        created = OffsetDateTime.parse("2021-08-24T12:13:59.282Z");
                                        displayOrder = 77992;
                                        id = 815611L;
                                        lastUpdate = OffsetDateTime.parse("2020-12-15T16:07:38.470Z");
                                        link = "ab";
                                        linkType = new Lookup() {{
                                            created = OffsetDateTime.parse("2022-10-06T20:53:57.361Z");
                                            description = "maiores";
                                            descriptionFriendly = "sed";
                                            displayOrder = 657141L;
                                            id = 197519L;
                                            lastUpdate = OffsetDateTime.parse("2021-06-01T11:52:41.606Z");
                                            lookupType = new LookupType() {{
                                                created = OffsetDateTime.parse("2022-04-30T19:59:48.348Z");
                                                description = "omnis";
                                                id = 470321L;
                                                lastUpdate = OffsetDateTime.parse("2020-02-15T03:11:54.650Z");
                                                type = LookupTypeTypeEnum.FEATURE_TYPE;
                                            }};
                                            value = "adipisci";
                                        }};
                                        name = "Jacquelyn Stark";
                                    }}),
                                    add(new Link() {{
                                        created = OffsetDateTime.parse("2022-04-04T22:54:55.393Z");
                                        displayOrder = 456222;
                                        id = 675755L;
                                        lastUpdate = OffsetDateTime.parse("2021-03-03T13:51:51.754Z");
                                        link = "eum";
                                        linkType = new Lookup() {{
                                            created = OffsetDateTime.parse("2022-06-12T08:30:05.308Z");
                                            description = "odio";
                                            descriptionFriendly = "commodi";
                                            displayOrder = 780789L;
                                            id = 400470L;
                                            lastUpdate = OffsetDateTime.parse("2021-08-11T09:31:47.213Z");
                                            lookupType = new LookupType() {{
                                                created = OffsetDateTime.parse("2022-11-28T02:37:23.352Z");
                                                description = "nulla";
                                                id = 166542L;
                                                lastUpdate = OffsetDateTime.parse("2021-04-19T15:00:10.201Z");
                                                type = LookupTypeTypeEnum.IBD_FAMILYHISTORY;
                                            }};
                                            value = "impedit";
                                        }};
                                        name = "Alexander Schultz";
                                    }}),
                                    add(new Link() {{
                                        created = OffsetDateTime.parse("2020-08-21T17:46:18.554Z");
                                        displayOrder = 818078;
                                        id = 491380L;
                                        lastUpdate = OffsetDateTime.parse("2021-10-28T09:57:41.218Z");
                                        link = "dolor";
                                        linkType = new Lookup() {{
                                            created = OffsetDateTime.parse("2022-11-29T16:42:18.528Z");
                                            description = "eaque";
                                            descriptionFriendly = "eum";
                                            displayOrder = 385291L;
                                            id = 672627L;
                                            lastUpdate = OffsetDateTime.parse("2022-03-04T14:30:38.926Z");
                                            lookupType = new LookupType() {{
                                                created = OffsetDateTime.parse("2022-02-23T18:26:39.282Z");
                                                description = "doloremque";
                                                id = 32775L;
                                                lastUpdate = OffsetDateTime.parse("2022-10-03T21:11:03.072Z");
                                                type = LookupTypeTypeEnum.IDENTIFIER;
                                            }};
                                            value = "quis";
                                        }};
                                        name = "Paula Luettgen";
                                    }}),
                                }};
                                locations = new org.openapis.openapi.models.shared.Location[]{{
                                    add(new Location() {{
                                        address = "54961 Stefanie Parkways";
                                        created = OffsetDateTime.parse("2022-08-19T06:41:35.111Z");
                                        email = "Nova10@gmail.com";
                                        id = 123495L;
                                        label = "molestias";
                                        lastUpdate = OffsetDateTime.parse("2022-07-31T14:45:14.723Z");
                                        name = "Pam MacGyver";
                                        phone = "687-223-0584 x82339";
                                        web = "tenetur";
                                    }}),
                                    add(new Location() {{
                                        address = "233 Abernathy Island";
                                        created = OffsetDateTime.parse("2022-08-26T00:43:51.707Z");
                                        email = "Harley.Doyle52@gmail.com";
                                        id = 884622L;
                                        label = "omnis";
                                        lastUpdate = OffsetDateTime.parse("2022-08-22T15:30:12.306Z");
                                        name = "Todd Schowalter";
                                        phone = "292-278-1922 x1018";
                                        web = "iusto";
                                    }}),
                                    add(new Location() {{
                                        address = "13344 Alberto Key";
                                        created = OffsetDateTime.parse("2022-09-09T09:28:40.153Z");
                                        email = "Jules82@gmail.com";
                                        id = 590969L;
                                        label = "facere";
                                        lastUpdate = OffsetDateTime.parse("2022-12-02T15:16:14.763Z");
                                        name = "Austin Oberbrunner I";
                                        phone = "828-880-1605";
                                        web = "ratione";
                                    }}),
                                    add(new Location() {{
                                        address = "2160 Jon Ranch";
                                        created = OffsetDateTime.parse("2022-04-18T06:07:35.186Z");
                                        email = "Carey36@gmail.com";
                                        id = 884325L;
                                        label = "iusto";
                                        lastUpdate = OffsetDateTime.parse("2021-08-16T07:12:25.575Z");
                                        name = "Melody Schaefer";
                                        phone = "(911) 262-0692 x768";
                                        web = "earum";
                                    }}),
                                }};
                                name = "Jesus Kreiger";
                                parentGroups = new org.openapis.openapi.models.shared.Group[]{{
                                    add(new Group() {{}}),
                                    add(new Group() {{}}),
                                    add(new Group() {{}}),
                                }};
                                postcode = "34772-1214";
                                sftpUser = "eum";
                                shortName = "vel";
                                visible = false;
                                visibleToJoin = false;
                            }};
                            id = 320748L;
                            identifier = "quos";
                            location = "illo";
                            name = "Rosemarie Steuber";
                            temporaryUuid = "atque";
                            units = "voluptates";
                            value = "maiores";
                        }}),
                    }};
                    patient = new FhirPatient() {{
                        address1 = "nemo";
                        address2 = "illo";
                        address3 = "doloribus";
                        address4 = "cumque";
                        contacts = new org.openapis.openapi.models.shared.FhirContact[]{{
                            add(new FhirContact() {{
                                id = 266370L;
                                system = "cumque";
                                use = "ipsam";
                                value = "occaecati";
                            }}),
                            add(new FhirContact() {{
                                id = 219279L;
                                system = "accusamus";
                                use = "quisquam";
                                value = "quasi";
                            }}),
                            add(new FhirContact() {{
                                id = 144240L;
                                system = "quo";
                                use = "temporibus";
                                value = "mollitia";
                            }}),
                        }};
                        dateOfBirth = OffsetDateTime.parse("2021-04-27T01:49:42.157Z");
                        dateOfBirthNoTime = "ipsa";
                        forename = "accusamus";
                        gender = "male";
                        group = new Group() {{
                            address1 = "quam";
                            address2 = "similique";
                            address3 = "delectus";
                            childGroups = new org.openapis.openapi.models.shared.Group[]{{
                                add(new Group() {{}}),
                                add(new Group() {{}}),
                                add(new Group() {{}}),
                                add(new Group() {{}}),
                            }};
                            code = "facere";
                            contactPoints = new org.openapis.openapi.models.shared.ContactPoint[]{{
                                add(new ContactPoint() {{
                                    contactPointType = new ContactPointType() {{
                                        description = "at";
                                        id = 561121L;
                                        lookupType = new LookupType() {{
                                            created = OffsetDateTime.parse("2022-03-01T15:50:48.097Z");
                                            description = "tenetur";
                                            id = 278050L;
                                            lastUpdate = OffsetDateTime.parse("2022-06-15T08:43:02.376Z");
                                            type = LookupTypeTypeEnum.IBD_CROHNSPROXIMALTERMINALILEUM;
                                        }};
                                        value = ContactPointTypeValueEnum.PV_ADMIN_NAME;
                                    }};
                                    content = "esse";
                                    created = OffsetDateTime.parse("2021-03-02T02:07:06.262Z");
                                    id = 226196L;
                                    lastUpdate = OffsetDateTime.parse("2022-12-20T12:15:56.921Z");
                                }}),
                                add(new ContactPoint() {{
                                    contactPointType = new ContactPointType() {{
                                        description = "impedit";
                                        id = 325855L;
                                        lookupType = new LookupType() {{
                                            created = OffsetDateTime.parse("2021-12-30T04:02:06.860Z");
                                            description = "quas";
                                            id = 28362L;
                                            lastUpdate = OffsetDateTime.parse("2021-11-18T17:58:10.750Z");
                                            type = LookupTypeTypeEnum.CODE_TYPE;
                                        }};
                                        value = ContactPointTypeValueEnum.APPOINTMENT_EMAIL;
                                    }};
                                    content = "fuga";
                                    created = OffsetDateTime.parse("2021-01-13T08:47:35.053Z");
                                    id = 622968L;
                                    lastUpdate = OffsetDateTime.parse("2020-02-19T05:19:30.502Z");
                                }}),
                                add(new ContactPoint() {{
                                    contactPointType = new ContactPointType() {{
                                        description = "consectetur";
                                        id = 958280L;
                                        lookupType = new LookupType() {{
                                            created = OffsetDateTime.parse("2020-07-12T10:16:37.957Z");
                                            description = "repellendus";
                                            id = 607742L;
                                            lastUpdate = OffsetDateTime.parse("2021-07-15T21:32:50.223Z");
                                            type = LookupTypeTypeEnum.LINK_TYPE;
                                        }};
                                        value = ContactPointTypeValueEnum.UNIT_WEB_ADDRESS;
                                    }};
                                    content = "quam";
                                    created = OffsetDateTime.parse("2021-09-30T12:38:45.776Z");
                                    id = 989089L;
                                    lastUpdate = OffsetDateTime.parse("2022-03-08T09:26:05.109Z");
                                }}),
                            }};
                            created = OffsetDateTime.parse("2022-08-29T16:18:11.316Z");
                            fhirResourceId = "724cdb0f-4d28-4118-bd56-844eded85a90";
                            groupFeatures = new org.openapis.openapi.models.shared.GroupFeature[]{{
                                add(new GroupFeature() {{
                                    created = OffsetDateTime.parse("2022-02-03T04:20:50.712Z");
                                    feature = new Feature() {{
                                        created = OffsetDateTime.parse("2022-10-24T14:43:05.743Z");
                                        description = "blanditiis";
                                        id = 697729L;
                                        lastUpdate = OffsetDateTime.parse("2020-02-03T10:32:11.414Z");
                                        name = "Todd Altenwerth";
                                    }};
                                    id = 693724L;
                                    lastUpdate = OffsetDateTime.parse("2022-03-22T14:36:41.669Z");
                                }}),
                                add(new GroupFeature() {{
                                    created = OffsetDateTime.parse("2022-01-07T21:34:49.337Z");
                                    feature = new Feature() {{
                                        created = OffsetDateTime.parse("2021-10-12T22:17:34.698Z");
                                        description = "fugit";
                                        id = 212682L;
                                        lastUpdate = OffsetDateTime.parse("2022-01-18T01:43:07.124Z");
                                        name = "Terry Fadel";
                                    }};
                                    id = 284779L;
                                    lastUpdate = OffsetDateTime.parse("2021-09-01T03:14:43.786Z");
                                }}),
                            }};
                            groupType = new Lookup() {{
                                created = OffsetDateTime.parse("2021-02-21T00:11:09.907Z");
                                description = "et";
                                descriptionFriendly = "eos";
                                displayOrder = 773355L;
                                id = 401388L;
                                lastUpdate = OffsetDateTime.parse("2021-10-08T14:44:11.497Z");
                                lookupType = new LookupType() {{
                                    created = OffsetDateTime.parse("2022-01-20T12:09:35.713Z");
                                    description = "laudantium";
                                    id = 133148L;
                                    lastUpdate = OffsetDateTime.parse("2020-03-31T22:12:08.601Z");
                                    type = LookupTypeTypeEnum.ROLE;
                                }};;
                                value = "inventore";
                            }};;
                            id = 356256L;
                            lastImportDate = OffsetDateTime.parse("2022-12-01T22:12:27.786Z");
                            lastUpdate = OffsetDateTime.parse("2022-11-06T16:53:07.781Z");
                            links = new org.openapis.openapi.models.shared.Link[]{{
                                add(new Link() {{
                                    created = OffsetDateTime.parse("2022-08-27T04:15:11.226Z");
                                    displayOrder = 226143;
                                    id = 454165L;
                                    lastUpdate = OffsetDateTime.parse("2022-02-19T04:44:51.261Z");
                                    link = "minus";
                                    linkType = new Lookup() {{
                                        created = OffsetDateTime.parse("2020-12-10T12:00:43.604Z");
                                        description = "totam";
                                        descriptionFriendly = "cupiditate";
                                        displayOrder = 870100L;
                                        id = 986594L;
                                        lastUpdate = OffsetDateTime.parse("2022-01-27T12:04:08.092Z");
                                        lookupType = new LookupType() {{
                                            created = OffsetDateTime.parse("2022-01-31T23:19:53.349Z");
                                            description = "sequi";
                                            id = 336640L;
                                            lastUpdate = OffsetDateTime.parse("2022-07-29T08:01:28.012Z");
                                            type = LookupTypeTypeEnum.GENDER;
                                        }};
                                        value = "aliquid";
                                    }};
                                    name = "Katrina Considine";
                                }}),
                            }};
                            locations = new org.openapis.openapi.models.shared.Location[]{{
                                add(new Location() {{
                                    address = "88739 Bethany Circles";
                                    created = OffsetDateTime.parse("2020-03-10T20:24:25.574Z");
                                    email = "Billie39@hotmail.com";
                                    id = 862666L;
                                    label = "enim";
                                    lastUpdate = OffsetDateTime.parse("2022-11-24T08:01:40.655Z");
                                    name = "Miss Calvin Schumm DVM";
                                    phone = "1-711-550-7887 x08778";
                                    web = "illum";
                                }}),
                                add(new Location() {{
                                    address = "252 Allie Mission";
                                    created = OffsetDateTime.parse("2020-11-20T09:57:48.267Z");
                                    email = "Therese.Farrell@gmail.com";
                                    id = 887835L;
                                    label = "eum";
                                    lastUpdate = OffsetDateTime.parse("2021-05-20T17:11:07.857Z");
                                    name = "Erin Kutch";
                                    phone = "493-435-5962 x21130";
                                    web = "eveniet";
                                }}),
                                add(new Location() {{
                                    address = "7100 Walter Lakes";
                                    created = OffsetDateTime.parse("2021-09-01T14:03:59.260Z");
                                    email = "Meredith_Spinka@gmail.com";
                                    id = 696678L;
                                    label = "in";
                                    lastUpdate = OffsetDateTime.parse("2022-11-30T23:34:54.352Z");
                                    name = "Keith Braun";
                                    phone = "1-511-830-6496 x10866";
                                    web = "hic";
                                }}),
                                add(new Location() {{
                                    address = "1371 Cartwright Divide";
                                    created = OffsetDateTime.parse("2022-12-29T17:39:27.998Z");
                                    email = "Adelbert.Stehr@gmail.com";
                                    id = 942780L;
                                    label = "ullam";
                                    lastUpdate = OffsetDateTime.parse("2021-02-19T16:11:06.739Z");
                                    name = "Mathew Kunde";
                                    phone = "(318) 670-9525 x25139";
                                    web = "illum";
                                }}),
                            }};
                            name = "Calvin Cummerata";
                            parentGroups = new org.openapis.openapi.models.shared.Group[]{{
                                add(new Group() {{}}),
                                add(new Group() {{}}),
                            }};
                            postcode = "81718";
                            sftpUser = "delectus";
                            shortName = "harum";
                            visible = false;
                            visibleToJoin = false;
                        }};;
                        groupCode = "aliquam";
                        identifier = "eligendi";
                        identifiers = new org.openapis.openapi.models.shared.FhirIdentifier[]{{
                            add(new FhirIdentifier() {{
                                id = 779748L;
                                label = "illo";
                                value = "nobis";
                            }}),
                            add(new FhirIdentifier() {{
                                id = 460803L;
                                label = "nisi";
                                value = "explicabo";
                            }}),
                            add(new FhirIdentifier() {{
                                id = 197441L;
                                label = "alias";
                                value = "reiciendis";
                            }}),
                            add(new FhirIdentifier() {{
                                id = 553766L;
                                label = "numquam";
                                value = "vitae";
                            }}),
                        }};
                        postcode = "71681-2987";
                        practitioners = new org.openapis.openapi.models.shared.FhirPractitioner[]{{
                            add(new FhirPractitioner() {{
                                address1 = "magnam";
                                address2 = "pariatur";
                                address3 = "expedita";
                                address4 = "autem";
                                allowInviteGp = false;
                                contacts = new org.openapis.openapi.models.shared.FhirContact[]{{
                                    add(new FhirContact() {{
                                        id = 924825L;
                                        system = "nostrum";
                                        use = "officia";
                                        value = "voluptas";
                                    }}),
                                    add(new FhirContact() {{
                                        id = 516363L;
                                        system = "corporis";
                                        use = "excepturi";
                                        value = "natus";
                                    }}),
                                    add(new FhirContact() {{
                                        id = 536456L;
                                        system = "necessitatibus";
                                        use = "aspernatur";
                                        value = "dolores";
                                    }}),
                                }};
                                gender = "male";
                                groupCode = "vero";
                                identifier = "eos";
                                inviteDate = OffsetDateTime.parse("2022-03-01T01:34:57.474Z");
                                name = "Scott Johns";
                                postcode = "71406";
                                role = "sed";
                            }}),
                        }};
                        surname = "blanditiis";
                    }};;
                    practitioners = new org.openapis.openapi.models.shared.FhirPractitioner[]{{
                        add(new FhirPractitioner() {{
                            address1 = "placeat";
                            address2 = "ullam";
                            address3 = "molestiae";
                            address4 = "itaque";
                            allowInviteGp = false;
                            contacts = new org.openapis.openapi.models.shared.FhirContact[]{{
                                add(new FhirContact() {{
                                    id = 366327L;
                                    system = "non";
                                    use = "recusandae";
                                    value = "omnis";
                                }}),
                                add(new FhirContact() {{
                                    id = 58567L;
                                    system = "aliquam";
                                    use = "dolor";
                                    value = "occaecati";
                                }}),
                                add(new FhirContact() {{
                                    id = 842678L;
                                    system = "magni";
                                    use = "consequuntur";
                                    value = "consequuntur";
                                }}),
                            }};
                            gender = "female";
                            groupCode = "commodi";
                            identifier = "ipsam";
                            inviteDate = OffsetDateTime.parse("2022-06-01T18:25:16.524Z");
                            name = "Sue Cole IV";
                            postcode = "52946";
                            role = "libero";
                        }}),
                        add(new FhirPractitioner() {{
                            address1 = "ratione";
                            address2 = "molestiae";
                            address3 = "optio";
                            address4 = "saepe";
                            allowInviteGp = false;
                            contacts = new org.openapis.openapi.models.shared.FhirContact[]{{
                                add(new FhirContact() {{
                                    id = 35219L;
                                    system = "sed";
                                    use = "eos";
                                    value = "consequuntur";
                                }}),
                                add(new FhirContact() {{
                                    id = 338514L;
                                    system = "vitae";
                                    use = "occaecati";
                                    value = "labore";
                                }}),
                                add(new FhirContact() {{
                                    id = 852737L;
                                    system = "quidem";
                                    use = "exercitationem";
                                    value = "veniam";
                                }}),
                                add(new FhirContact() {{
                                    id = 267988L;
                                    system = "quasi";
                                    use = "quae";
                                    value = "similique";
                                }}),
                            }};
                            gender = "male";
                            groupCode = "quo";
                            identifier = "suscipit";
                            inviteDate = OffsetDateTime.parse("2022-06-06T09:13:12.560Z");
                            name = "Miss Cary McKenzie";
                            postcode = "74887";
                            role = "cupiditate";
                        }}),
                        add(new FhirPractitioner() {{
                            address1 = "deleniti";
                            address2 = "quasi";
                            address3 = "maiores";
                            address4 = "voluptatem";
                            allowInviteGp = false;
                            contacts = new org.openapis.openapi.models.shared.FhirContact[]{{
                                add(new FhirContact() {{
                                    id = 511252L;
                                    system = "unde";
                                    use = "corrupti";
                                    value = "quae";
                                }}),
                                add(new FhirContact() {{
                                    id = 816168L;
                                    system = "ea";
                                    use = "libero";
                                    value = "nam";
                                }}),
                            }};
                            gender = "female";
                            groupCode = "adipisci";
                            identifier = "minus";
                            inviteDate = OffsetDateTime.parse("2021-02-11T02:50:29.169Z");
                            name = "Glenn Green";
                            postcode = "07930";
                            role = "ducimus";
                        }}),
                    }};
                }};;
            }};            

            SavePatientManagementResponse res = sdk.patientManagementController.savePatientManagement(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## savePatientManagementSurgeries

savePatientManagementSurgeries

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SavePatientManagementSurgeriesRequest;
import org.openapis.openapi.models.operations.SavePatientManagementSurgeriesResponse;
import org.openapis.openapi.models.shared.ContactPoint;
import org.openapis.openapi.models.shared.ContactPointType;
import org.openapis.openapi.models.shared.ContactPointTypeValueEnum;
import org.openapis.openapi.models.shared.Feature;
import org.openapis.openapi.models.shared.FhirCondition;
import org.openapis.openapi.models.shared.FhirContact;
import org.openapis.openapi.models.shared.FhirEncounter;
import org.openapis.openapi.models.shared.FhirIdentifier;
import org.openapis.openapi.models.shared.FhirObservation;
import org.openapis.openapi.models.shared.FhirPatient;
import org.openapis.openapi.models.shared.FhirPractitioner;
import org.openapis.openapi.models.shared.FhirProcedure;
import org.openapis.openapi.models.shared.Group;
import org.openapis.openapi.models.shared.GroupFeature;
import org.openapis.openapi.models.shared.Link;
import org.openapis.openapi.models.shared.Location;
import org.openapis.openapi.models.shared.Lookup;
import org.openapis.openapi.models.shared.LookupType;
import org.openapis.openapi.models.shared.LookupTypeTypeEnum;
import org.openapis.openapi.models.shared.PatientManagement;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SavePatientManagementSurgeriesRequest req = new SavePatientManagementSurgeriesRequest(933456L, 898197L, 252854L) {{
                patientManagement = new PatientManagement() {{
                    condition = new FhirCondition() {{
                        asserter = "doloribus";
                        category = "eligendi";
                        code = "sapiente";
                        date = OffsetDateTime.parse("2022-03-25T18:42:51.546Z");
                        description = "numquam";
                        fullDescription = "aspernatur";
                        group = new Group() {{
                            address1 = "nobis";
                            address2 = "nihil";
                            address3 = "voluptatum";
                            childGroups = new org.openapis.openapi.models.shared.Group[]{{
                                add(new Group() {{}}),
                                add(new Group() {{}}),
                                add(new Group() {{}}),
                                add(new Group() {{}}),
                            }};
                            code = "vitae";
                            contactPoints = new org.openapis.openapi.models.shared.ContactPoint[]{{
                                add(new ContactPoint() {{
                                    contactPointType = new ContactPointType() {{
                                        description = "nisi";
                                        id = 159496L;
                                        lookupType = new LookupType() {{
                                            created = OffsetDateTime.parse("2022-10-23T04:06:06.377Z");
                                            description = "excepturi";
                                            id = 549348L;
                                            lastUpdate = OffsetDateTime.parse("2022-12-16T03:47:02.612Z");
                                            type = LookupTypeTypeEnum.IBD_SURGERYMAINPROCEDURE;
                                        }};
                                        value = ContactPointTypeValueEnum.APPOINTMENT_PHONE;
                                    }};
                                    content = "ducimus";
                                    created = OffsetDateTime.parse("2022-08-10T21:53:22.546Z");
                                    id = 223358L;
                                    lastUpdate = OffsetDateTime.parse("2022-09-16T13:36:46.452Z");
                                }}),
                                add(new ContactPoint() {{
                                    contactPointType = new ContactPointType() {{
                                        description = "maxime";
                                        id = 803144L;
                                        lookupType = new LookupType() {{
                                            created = OffsetDateTime.parse("2022-12-04T20:35:09.945Z");
                                            description = "ea";
                                            id = 771321L;
                                            lastUpdate = OffsetDateTime.parse("2021-06-23T12:33:28.750Z");
                                            type = LookupTypeTypeEnum.IBD_CROHNSPERIANAL;
                                        }};
                                        value = ContactPointTypeValueEnum.UNIT_WEB_ADDRESS;
                                    }};
                                    content = "consequuntur";
                                    created = OffsetDateTime.parse("2022-12-02T05:14:29.797Z");
                                    id = 172042L;
                                    lastUpdate = OffsetDateTime.parse("2022-11-12T04:51:07.867Z");
                                }}),
                            }};
                            created = OffsetDateTime.parse("2022-09-01T12:39:02.783Z");
                            fhirResourceId = "70b8d572-2dd8-495b-8bcf-24db95969335";
                            groupFeatures = new org.openapis.openapi.models.shared.GroupFeature[]{{
                                add(new GroupFeature() {{
                                    created = OffsetDateTime.parse("2021-07-27T07:10:51.166Z");
                                    feature = new Feature() {{
                                        created = OffsetDateTime.parse("2022-08-23T22:26:14.910Z");
                                        description = "velit";
                                        id = 240836L;
                                        lastUpdate = OffsetDateTime.parse("2021-11-02T16:09:42.624Z");
                                        name = "Janis Kozey";
                                    }};
                                    id = 906524L;
                                    lastUpdate = OffsetDateTime.parse("2022-04-14T08:52:32.332Z");
                                }}),
                            }};
                            groupType = new Lookup() {{
                                created = OffsetDateTime.parse("2022-02-06T08:10:09.909Z");
                                description = "iste";
                                descriptionFriendly = "nesciunt";
                                displayOrder = 545629L;
                                id = 587337L;
                                lastUpdate = OffsetDateTime.parse("2021-12-08T15:04:06.780Z");
                                lookupType = new LookupType() {{
                                    created = OffsetDateTime.parse("2021-07-07T02:17:11.579Z");
                                    description = "cum";
                                    id = 449880L;
                                    lastUpdate = OffsetDateTime.parse("2021-10-06T15:52:44.474Z");
                                    type = LookupTypeTypeEnum.STATISTIC_TYPE;
                                }};;
                                value = "fugit";
                            }};;
                            id = 355380L;
                            lastImportDate = OffsetDateTime.parse("2022-12-15T23:45:53.587Z");
                            lastUpdate = OffsetDateTime.parse("2022-08-19T12:44:25.036Z");
                            links = new org.openapis.openapi.models.shared.Link[]{{
                                add(new Link() {{
                                    created = OffsetDateTime.parse("2022-06-25T12:24:15.391Z");
                                    displayOrder = 183504;
                                    id = 648166L;
                                    lastUpdate = OffsetDateTime.parse("2022-03-04T22:59:20.153Z");
                                    link = "deleniti";
                                    linkType = new Lookup() {{
                                        created = OffsetDateTime.parse("2022-05-02T07:31:40.193Z");
                                        description = "reiciendis";
                                        descriptionFriendly = "possimus";
                                        displayOrder = 137831L;
                                        id = 230774L;
                                        lastUpdate = OffsetDateTime.parse("2022-09-04T00:54:22.096Z");
                                        lookupType = new LookupType() {{
                                            created = OffsetDateTime.parse("2021-08-01T21:31:41.029Z");
                                            description = "deserunt";
                                            id = 392759L;
                                            lastUpdate = OffsetDateTime.parse("2022-12-21T07:35:10.527Z");
                                            type = LookupTypeTypeEnum.MENU;
                                        }};
                                        value = "iure";
                                    }};
                                    name = "Laverne Berge";
                                }}),
                                add(new Link() {{
                                    created = OffsetDateTime.parse("2022-04-22T04:13:53.635Z");
                                    displayOrder = 989526;
                                    id = 431893L;
                                    lastUpdate = OffsetDateTime.parse("2021-02-28T14:19:51.153Z");
                                    link = "nemo";
                                    linkType = new Lookup() {{
                                        created = OffsetDateTime.parse("2022-10-18T12:37:03.275Z");
                                        description = "expedita";
                                        descriptionFriendly = "quisquam";
                                        displayOrder = 506770L;
                                        id = 708075L;
                                        lastUpdate = OffsetDateTime.parse("2020-03-27T12:03:10.018Z");
                                        lookupType = new LookupType() {{
                                            created = OffsetDateTime.parse("2022-05-08T01:59:46.372Z");
                                            description = "commodi";
                                            id = 114924L;
                                            lastUpdate = OffsetDateTime.parse("2022-04-11T17:07:28.537Z");
                                            type = LookupTypeTypeEnum.CONTACT_POINT_TYPE;
                                        }};
                                        value = "neque";
                                    }};
                                    name = "Jesse Abbott";
                                }}),
                                add(new Link() {{
                                    created = OffsetDateTime.parse("2021-01-05T13:07:10.503Z");
                                    displayOrder = 539537;
                                    id = 310648L;
                                    lastUpdate = OffsetDateTime.parse("2022-07-06T05:09:52.648Z");
                                    link = "quam";
                                    linkType = new Lookup() {{
                                        created = OffsetDateTime.parse("2022-04-26T08:20:18.740Z");
                                        description = "iure";
                                        descriptionFriendly = "deleniti";
                                        displayOrder = 638219L;
                                        id = 572450L;
                                        lastUpdate = OffsetDateTime.parse("2022-07-20T21:54:03.573Z");
                                        lookupType = new LookupType() {{
                                            created = OffsetDateTime.parse("2022-02-25T13:48:12.101Z");
                                            description = "sit";
                                            id = 561399L;
                                            lastUpdate = OffsetDateTime.parse("2022-04-15T15:57:53.358Z");
                                            type = LookupTypeTypeEnum.CONTACT_POINT_TYPE;
                                        }};
                                        value = "maiores";
                                    }};
                                    name = "Jessie Wintheiser";
                                }}),
                            }};
                            locations = new org.openapis.openapi.models.shared.Location[]{{
                                add(new Location() {{
                                    address = "09593 Delmer Road";
                                    created = OffsetDateTime.parse("2022-10-28T23:00:54.899Z");
                                    email = "Jany_Rempel@gmail.com";
                                    id = 179588L;
                                    label = "quisquam";
                                    lastUpdate = OffsetDateTime.parse("2021-05-04T22:57:21.083Z");
                                    name = "Taylor Orn";
                                    phone = "1-299-710-6513 x598";
                                    web = "aut";
                                }}),
                            }};
                            name = "Joey Upton";
                            parentGroups = new org.openapis.openapi.models.shared.Group[]{{
                                add(new Group() {{}}),
                                add(new Group() {{}}),
                            }};
                            postcode = "94829";
                            sftpUser = "a";
                            shortName = "perferendis";
                            visible = false;
                            visibleToJoin = false;
                        }};;
                        id = 310926L;
                        identifier = "excepturi";
                        links = new org.openapis.openapi.models.shared.Link[]{{
                            add(new Link() {{
                                created = OffsetDateTime.parse("2022-12-21T03:02:36.046Z");
                                displayOrder = 849029;
                                id = 388006L;
                                lastUpdate = OffsetDateTime.parse("2022-10-07T19:18:53.708Z");
                                link = "atque";
                                linkType = new Lookup() {{
                                    created = OffsetDateTime.parse("2022-11-20T04:12:26.679Z");
                                    description = "quisquam";
                                    descriptionFriendly = "atque";
                                    displayOrder = 472190L;
                                    id = 631904L;
                                    lastUpdate = OffsetDateTime.parse("2020-02-19T06:37:28.314Z");
                                    lookupType = new LookupType() {{
                                        created = OffsetDateTime.parse("2022-06-01T10:57:10.907Z");
                                        description = "suscipit";
                                        id = 967401L;
                                        lastUpdate = OffsetDateTime.parse("2020-02-13T00:59:27.963Z");
                                        type = LookupTypeTypeEnum.MENU;
                                    }};
                                    value = "mollitia";
                                }};
                                name = "Clayton DuBuque";
                            }}),
                            add(new Link() {{
                                created = OffsetDateTime.parse("2021-05-27T12:11:21.624Z");
                                displayOrder = 28256;
                                id = 789286L;
                                lastUpdate = OffsetDateTime.parse("2022-03-27T05:28:42.748Z");
                                link = "architecto";
                                linkType = new Lookup() {{
                                    created = OffsetDateTime.parse("2021-06-27T10:29:35.130Z");
                                    description = "occaecati";
                                    descriptionFriendly = "quis";
                                    displayOrder = 734361L;
                                    id = 637969L;
                                    lastUpdate = OffsetDateTime.parse("2021-10-17T05:43:24.511Z");
                                    lookupType = new LookupType() {{
                                        created = OffsetDateTime.parse("2022-03-25T08:17:37.868Z");
                                        description = "ducimus";
                                        id = 531568L;
                                        lastUpdate = OffsetDateTime.parse("2021-01-24T13:45:32.800Z");
                                        type = LookupTypeTypeEnum.CODE_TYPE;
                                    }};
                                    value = "hic";
                                }};
                                name = "Bobbie Johnston";
                            }}),
                        }};
                        notes = "ab";
                        severity = "fuga";
                        status = "a";
                    }};;
                    encounters = new org.openapis.openapi.models.shared.FhirEncounter[]{{
                        add(new FhirEncounter() {{
                            date = OffsetDateTime.parse("2021-11-16T20:15:15.899Z");
                            encounterType = "quod";
                            group = new Group() {{
                                address1 = "repudiandae";
                                address2 = "eaque";
                                address3 = "consectetur";
                                childGroups = new org.openapis.openapi.models.shared.Group[]{{
                                    add(new Group() {{}}),
                                    add(new Group() {{}}),
                                }};
                                code = "vitae";
                                contactPoints = new org.openapis.openapi.models.shared.ContactPoint[]{{
                                    add(new ContactPoint() {{
                                        contactPointType = new ContactPointType() {{
                                            description = "incidunt";
                                            id = 266976L;
                                            lookupType = new LookupType() {{
                                                created = OffsetDateTime.parse("2021-06-02T05:43:50.216Z");
                                                description = "voluptate";
                                                id = 623867L;
                                                lastUpdate = OffsetDateTime.parse("2022-07-24T11:49:51.417Z");
                                                type = LookupTypeTypeEnum.IBD_CROHNSPERIANAL;
                                            }};
                                            value = ContactPointTypeValueEnum.UNIT_WEB_ADDRESS;
                                        }};
                                        content = "voluptates";
                                        created = OffsetDateTime.parse("2022-06-11T11:31:45.888Z");
                                        id = 962024L;
                                        lastUpdate = OffsetDateTime.parse("2022-10-13T14:14:32.798Z");
                                    }}),
                                    add(new ContactPoint() {{
                                        contactPointType = new ContactPointType() {{
                                            description = "laboriosam";
                                            id = 41346L;
                                            lookupType = new LookupType() {{
                                                created = OffsetDateTime.parse("2022-06-21T11:27:12.407Z");
                                                description = "debitis";
                                                id = 951411L;
                                                lastUpdate = OffsetDateTime.parse("2020-04-09T02:47:49.932Z");
                                                type = LookupTypeTypeEnum.LINK_TYPE;
                                            }};
                                            value = ContactPointTypeValueEnum.UNIT_ENQUIRIES_PHONE;
                                        }};
                                        content = "adipisci";
                                        created = OffsetDateTime.parse("2022-12-05T19:27:10.992Z");
                                        id = 329961L;
                                        lastUpdate = OffsetDateTime.parse("2022-02-07T06:16:38.287Z");
                                    }}),
                                }};
                                created = OffsetDateTime.parse("2021-07-11T11:54:55.927Z");
                                fhirResourceId = "e253f4c1-57de-4aa7-970f-445accf667aa";
                                groupFeatures = new org.openapis.openapi.models.shared.GroupFeature[]{{
                                    add(new GroupFeature() {{
                                        created = OffsetDateTime.parse("2021-07-05T15:55:17.077Z");
                                        feature = new Feature() {{
                                            created = OffsetDateTime.parse("2021-09-23T13:57:32.666Z");
                                            description = "fugiat";
                                            id = 78074L;
                                            lastUpdate = OffsetDateTime.parse("2022-05-10T01:16:10.281Z");
                                            name = "Pat Goyette PhD";
                                        }};
                                        id = 384354L;
                                        lastUpdate = OffsetDateTime.parse("2021-01-27T05:05:30.002Z");
                                    }}),
                                    add(new GroupFeature() {{
                                        created = OffsetDateTime.parse("2022-03-28T03:56:37.209Z");
                                        feature = new Feature() {{
                                            created = OffsetDateTime.parse("2022-08-10T06:27:07.573Z");
                                            description = "atque";
                                            id = 979706L;
                                            lastUpdate = OffsetDateTime.parse("2021-08-06T05:38:53.226Z");
                                            name = "Miss Jermaine Cole";
                                        }};
                                        id = 406272L;
                                        lastUpdate = OffsetDateTime.parse("2022-01-14T11:17:51.154Z");
                                    }}),
                                    add(new GroupFeature() {{
                                        created = OffsetDateTime.parse("2022-02-24T13:15:27.697Z");
                                        feature = new Feature() {{
                                            created = OffsetDateTime.parse("2022-06-22T22:51:34.295Z");
                                            description = "eos";
                                            id = 333507L;
                                            lastUpdate = OffsetDateTime.parse("2021-04-14T07:30:31.624Z");
                                            name = "Rogelio Howe";
                                        }};
                                        id = 279679L;
                                        lastUpdate = OffsetDateTime.parse("2021-04-04T01:27:13.665Z");
                                    }}),
                                    add(new GroupFeature() {{
                                        created = OffsetDateTime.parse("2021-08-21T12:05:45.550Z");
                                        feature = new Feature() {{
                                            created = OffsetDateTime.parse("2022-02-08T10:54:10.339Z");
                                            description = "omnis";
                                            id = 820735L;
                                            lastUpdate = OffsetDateTime.parse("2020-03-25T08:28:41.959Z");
                                            name = "Mathew Klocko";
                                        }};
                                        id = 801059L;
                                        lastUpdate = OffsetDateTime.parse("2022-06-25T19:06:36.393Z");
                                    }}),
                                }};
                                groupType = new Lookup() {{
                                    created = OffsetDateTime.parse("2022-02-12T17:21:52.677Z");
                                    description = "nam";
                                    descriptionFriendly = "officia";
                                    displayOrder = 978079L;
                                    id = 585109L;
                                    lastUpdate = OffsetDateTime.parse("2022-02-05T22:18:34.745Z");
                                    lookupType = new LookupType() {{
                                        created = OffsetDateTime.parse("2022-12-12T20:54:50.807Z");
                                        description = "ex";
                                        id = 910132L;
                                        lastUpdate = OffsetDateTime.parse("2021-05-25T19:07:34.190Z");
                                        type = LookupTypeTypeEnum.IBD_CROHNSLOCATION;
                                    }};
                                    value = "aut";
                                }};
                                id = 680084L;
                                lastImportDate = OffsetDateTime.parse("2022-09-24T03:14:43.673Z");
                                lastUpdate = OffsetDateTime.parse("2022-06-27T00:48:16.622Z");
                                links = new org.openapis.openapi.models.shared.Link[]{{
                                    add(new Link() {{
                                        created = OffsetDateTime.parse("2022-01-08T05:48:24.485Z");
                                        displayOrder = 83997;
                                        id = 422610L;
                                        lastUpdate = OffsetDateTime.parse("2022-01-08T08:01:33.279Z");
                                        link = "ex";
                                        linkType = new Lookup() {{
                                            created = OffsetDateTime.parse("2022-05-26T10:49:02.083Z");
                                            description = "corrupti";
                                            descriptionFriendly = "nostrum";
                                            displayOrder = 682327L;
                                            id = 195789L;
                                            lastUpdate = OffsetDateTime.parse("2022-03-26T20:32:37.042Z");
                                            lookupType = new LookupType() {{
                                                created = OffsetDateTime.parse("2021-06-26T22:55:06.822Z");
                                                description = "autem";
                                                id = 238022L;
                                                lastUpdate = OffsetDateTime.parse("2022-04-20T22:07:53.297Z");
                                                type = LookupTypeTypeEnum.IBD_CROHNSLOCATION;
                                            }};
                                            value = "provident";
                                        }};
                                        name = "Billy Johnston";
                                    }}),
                                    add(new Link() {{
                                        created = OffsetDateTime.parse("2021-06-28T15:17:19.917Z");
                                        displayOrder = 955988;
                                        id = 620842L;
                                        lastUpdate = OffsetDateTime.parse("2020-07-02T21:03:46.191Z");
                                        link = "facilis";
                                        linkType = new Lookup() {{
                                            created = OffsetDateTime.parse("2022-06-02T07:38:36.555Z");
                                            description = "et";
                                            descriptionFriendly = "accusantium";
                                            displayOrder = 980980L;
                                            id = 390230L;
                                            lastUpdate = OffsetDateTime.parse("2022-04-08T09:48:39.098Z");
                                            lookupType = new LookupType() {{
                                                created = OffsetDateTime.parse("2021-02-13T08:00:41.549Z");
                                                description = "blanditiis";
                                                id = 113540L;
                                                lastUpdate = OffsetDateTime.parse("2022-06-17T01:57:37.545Z");
                                                type = LookupTypeTypeEnum.FEATURE_TYPE;
                                            }};
                                            value = "molestiae";
                                        }};
                                        name = "Kevin Bruen";
                                    }}),
                                }};
                                locations = new org.openapis.openapi.models.shared.Location[]{{
                                    add(new Location() {{
                                        address = "455 Chase Forges";
                                        created = OffsetDateTime.parse("2022-07-01T22:03:30.791Z");
                                        email = "Shane28@yahoo.com";
                                        id = 500537L;
                                        label = "ducimus";
                                        lastUpdate = OffsetDateTime.parse("2022-01-16T07:23:59.091Z");
                                        name = "Donna Dickens";
                                        phone = "(687) 901-3782";
                                        web = "veritatis";
                                    }}),
                                    add(new Location() {{
                                        address = "19676 Smitham Lakes";
                                        created = OffsetDateTime.parse("2022-01-07T15:32:11.672Z");
                                        email = "Britney.Gerlach@gmail.com";
                                        id = 679835L;
                                        label = "alias";
                                        lastUpdate = OffsetDateTime.parse("2022-10-16T13:16:46.989Z");
                                        name = "Grace Rippin";
                                        phone = "587-469-1944 x927";
                                        web = "dolore";
                                    }}),
                                    add(new Location() {{
                                        address = "792 Homenick Streets";
                                        created = OffsetDateTime.parse("2022-08-07T14:30:32.777Z");
                                        email = "Gregoria.Zieme75@yahoo.com";
                                        id = 353424L;
                                        label = "nihil";
                                        lastUpdate = OffsetDateTime.parse("2022-07-06T07:08:00.240Z");
                                        name = "Margaret Bradtke";
                                        phone = "922.931.9570 x527";
                                        web = "dolor";
                                    }}),
                                    add(new Location() {{
                                        address = "64815 Luis Coves";
                                        created = OffsetDateTime.parse("2022-08-21T22:37:15.505Z");
                                        email = "Georgiana_Kutch26@gmail.com";
                                        id = 546329L;
                                        label = "nihil";
                                        lastUpdate = OffsetDateTime.parse("2022-03-10T20:18:58.815Z");
                                        name = "Mable Hills";
                                        phone = "641-321-9437 x859";
                                        web = "officiis";
                                    }}),
                                }};
                                name = "Miss Kari Ankunding";
                                parentGroups = new org.openapis.openapi.models.shared.Group[]{{
                                    add(new Group() {{}}),
                                    add(new Group() {{}}),
                                }};
                                postcode = "89102-5421";
                                sftpUser = "eaque";
                                shortName = "corporis";
                                visible = false;
                                visibleToJoin = false;
                            }};
                            id = 587489L;
                            identifier = "aut";
                            links = new org.openapis.openapi.models.shared.Link[]{{
                                add(new Link() {{
                                    created = OffsetDateTime.parse("2020-09-04T12:32:09.161Z");
                                    displayOrder = 100704;
                                    id = 30288L;
                                    lastUpdate = OffsetDateTime.parse("2022-03-09T22:17:56.070Z");
                                    link = "eius";
                                    linkType = new Lookup() {{
                                        created = OffsetDateTime.parse("2022-12-21T01:04:06.786Z");
                                        description = "non";
                                        descriptionFriendly = "beatae";
                                        displayOrder = 192880L;
                                        id = 699215L;
                                        lastUpdate = OffsetDateTime.parse("2022-02-09T18:17:38.759Z");
                                        lookupType = new LookupType() {{
                                            created = OffsetDateTime.parse("2022-12-12T01:01:21.590Z");
                                            description = "incidunt";
                                            id = 281436L;
                                            lastUpdate = OffsetDateTime.parse("2021-10-21T17:12:52.292Z");
                                            type = LookupTypeTypeEnum.IDENTIFIER;
                                        }};
                                        value = "maiores";
                                    }};
                                    name = "Mitchell Davis";
                                }}),
                                add(new Link() {{
                                    created = OffsetDateTime.parse("2022-12-09T14:36:46.333Z");
                                    displayOrder = 468170;
                                    id = 462761L;
                                    lastUpdate = OffsetDateTime.parse("2022-12-25T23:11:07.179Z");
                                    link = "cumque";
                                    linkType = new Lookup() {{
                                        created = OffsetDateTime.parse("2022-04-14T18:29:04.841Z");
                                        description = "tenetur";
                                        descriptionFriendly = "non";
                                        displayOrder = 35107L;
                                        id = 548473L;
                                        lastUpdate = OffsetDateTime.parse("2020-03-09T20:57:56.425Z");
                                        lookupType = new LookupType() {{
                                            created = OffsetDateTime.parse("2022-08-22T16:17:36.907Z");
                                            description = "corporis";
                                            id = 772062L;
                                            lastUpdate = OffsetDateTime.parse("2020-10-15T07:51:27.118Z");
                                            type = LookupTypeTypeEnum.RELATIONSHIP_TYPE;
                                        }};
                                        value = "illum";
                                    }};
                                    name = "Cecelia Boyer";
                                }}),
                                add(new Link() {{
                                    created = OffsetDateTime.parse("2022-11-29T14:05:24.229Z");
                                    displayOrder = 980705;
                                    id = 484905L;
                                    lastUpdate = OffsetDateTime.parse("2022-04-26T15:14:21.697Z");
                                    link = "itaque";
                                    linkType = new Lookup() {{
                                        created = OffsetDateTime.parse("2020-02-28T10:06:53.730Z");
                                        description = "sed";
                                        descriptionFriendly = "deserunt";
                                        displayOrder = 754091L;
                                        id = 664591L;
                                        lastUpdate = OffsetDateTime.parse("2022-04-14T06:03:14.390Z");
                                        lookupType = new LookupType() {{
                                            created = OffsetDateTime.parse("2021-07-05T22:16:30.550Z");
                                            description = "cupiditate";
                                            id = 602561L;
                                            lastUpdate = OffsetDateTime.parse("2022-03-19T23:50:44.457Z");
                                            type = LookupTypeTypeEnum.IBD_CROHNSPROXIMALTERMINALILEUM;
                                        }};
                                        value = "sed";
                                    }};
                                    name = "Mable Stroman";
                                }}),
                                add(new Link() {{
                                    created = OffsetDateTime.parse("2021-11-06T02:03:14.656Z");
                                    displayOrder = 259716;
                                    id = 426571L;
                                    lastUpdate = OffsetDateTime.parse("2022-02-15T03:56:43.314Z");
                                    link = "odio";
                                    linkType = new Lookup() {{
                                        created = OffsetDateTime.parse("2022-11-09T05:06:53.566Z");
                                        description = "inventore";
                                        descriptionFriendly = "optio";
                                        displayOrder = 748656L;
                                        id = 924559L;
                                        lastUpdate = OffsetDateTime.parse("2022-03-07T13:59:07.330Z");
                                        lookupType = new LookupType() {{
                                            created = OffsetDateTime.parse("2022-05-04T18:21:34.755Z");
                                            description = "sit";
                                            id = 146004L;
                                            lastUpdate = OffsetDateTime.parse("2022-12-23T08:02:22.075Z");
                                            type = LookupTypeTypeEnum.IBD_SMOKINGSTATUS;
                                        }};
                                        value = "id";
                                    }};
                                    name = "Sean Auer";
                                }}),
                            }};
                            observations = new org.openapis.openapi.models.shared.FhirObservation[]{{
                                add(new FhirObservation() {{
                                    applies = OffsetDateTime.parse("2021-08-04T07:56:25.836Z");
                                    bodySite = "fuga";
                                    comments = "cumque";
                                    comparator = "consequuntur";
                                    diagram = "maiores";
                                    group = new Group() {{
                                        address1 = "esse";
                                        address2 = "explicabo";
                                        address3 = "delectus";
                                        childGroups = new org.openapis.openapi.models.shared.Group[]{{
                                            add(new Group() {{}}),
                                            add(new Group() {{}}),
                                            add(new Group() {{}}),
                                        }};
                                        code = "deleniti";
                                        contactPoints = new org.openapis.openapi.models.shared.ContactPoint[]{{
                                            add(new ContactPoint() {{
                                                contactPointType = new ContactPointType() {{
                                                    description = "sit";
                                                    id = 27955L;
                                                    lookupType = new LookupType() {{
                                                        created = OffsetDateTime.parse("2022-12-10T13:51:11.102Z");
                                                        description = "tempora";
                                                        id = 577622L;
                                                        lastUpdate = OffsetDateTime.parse("2022-12-01T17:39:37.534Z");
                                                        type = LookupTypeTypeEnum.CONTACT_POINT_TYPE;
                                                    }};
                                                    value = ContactPointTypeValueEnum.UNIT_WEB_ADDRESS;
                                                }};
                                                content = "quas";
                                                created = OffsetDateTime.parse("2022-12-25T18:43:22.990Z");
                                                id = 459865L;
                                                lastUpdate = OffsetDateTime.parse("2021-12-31T10:33:01.717Z");
                                            }}),
                                            add(new ContactPoint() {{
                                                contactPointType = new ContactPointType() {{
                                                    description = "laudantium";
                                                    id = 915267L;
                                                    lookupType = new LookupType() {{
                                                        created = OffsetDateTime.parse("2021-09-28T11:05:37.357Z");
                                                        description = "vel";
                                                        id = 107778L;
                                                        lastUpdate = OffsetDateTime.parse("2022-07-16T10:21:09.980Z");
                                                        type = LookupTypeTypeEnum.IBD_UCEXTENT;
                                                    }};
                                                    value = ContactPointTypeValueEnum.OUT_OF_HOURS_INFO;
                                                }};
                                                content = "necessitatibus";
                                                created = OffsetDateTime.parse("2022-03-29T13:47:38.416Z");
                                                id = 355342L;
                                                lastUpdate = OffsetDateTime.parse("2021-03-20T07:41:39.184Z");
                                            }}),
                                        }};
                                        created = OffsetDateTime.parse("2022-05-26T13:56:22.903Z");
                                        fhirResourceId = "0ec16faf-75b0-4b53-aa4d-a37cbaaf4452";
                                        groupFeatures = new org.openapis.openapi.models.shared.GroupFeature[]{{
                                            add(new GroupFeature() {{
                                                created = OffsetDateTime.parse("2022-06-20T18:15:05.557Z");
                                                feature = new Feature() {{
                                                    created = OffsetDateTime.parse("2022-11-15T12:08:44.799Z");
                                                    description = "eligendi";
                                                    id = 586723L;
                                                    lastUpdate = OffsetDateTime.parse("2022-09-22T06:36:31.491Z");
                                                    name = "Al Emmerich";
                                                }};
                                                id = 669408L;
                                                lastUpdate = OffsetDateTime.parse("2020-04-23T23:49:24.056Z");
                                            }}),
                                            add(new GroupFeature() {{
                                                created = OffsetDateTime.parse("2022-10-21T08:52:32.010Z");
                                                feature = new Feature() {{
                                                    created = OffsetDateTime.parse("2021-12-09T22:19:55.347Z");
                                                    description = "blanditiis";
                                                    id = 958091L;
                                                    lastUpdate = OffsetDateTime.parse("2022-09-21T13:13:15.843Z");
                                                    name = "Debbie Haley";
                                                }};
                                                id = 947704L;
                                                lastUpdate = OffsetDateTime.parse("2020-08-06T21:21:36.467Z");
                                            }}),
                                            add(new GroupFeature() {{
                                                created = OffsetDateTime.parse("2022-03-10T01:14:29.276Z");
                                                feature = new Feature() {{
                                                    created = OffsetDateTime.parse("2022-10-08T11:18:43.366Z");
                                                    description = "nemo";
                                                    id = 198616L;
                                                    lastUpdate = OffsetDateTime.parse("2021-09-17T10:48:49.409Z");
                                                    name = "Jasmine Lueilwitz V";
                                                }};
                                                id = 191202L;
                                                lastUpdate = OffsetDateTime.parse("2022-05-25T12:43:26.283Z");
                                            }}),
                                            add(new GroupFeature() {{
                                                created = OffsetDateTime.parse("2021-09-04T14:32:32.426Z");
                                                feature = new Feature() {{
                                                    created = OffsetDateTime.parse("2022-06-02T22:28:35.534Z");
                                                    description = "optio";
                                                    id = 869602L;
                                                    lastUpdate = OffsetDateTime.parse("2022-01-03T09:46:13.045Z");
                                                    name = "Benny Williamson";
                                                }};
                                                id = 833935L;
                                                lastUpdate = OffsetDateTime.parse("2022-10-05T02:48:45.510Z");
                                            }}),
                                        }};
                                        groupType = new Lookup() {{
                                            created = OffsetDateTime.parse("2021-08-20T05:05:50.222Z");
                                            description = "odio";
                                            descriptionFriendly = "totam";
                                            displayOrder = 168546L;
                                            id = 178066L;
                                            lastUpdate = OffsetDateTime.parse("2021-01-20T18:12:10.943Z");
                                            lookupType = new LookupType() {{
                                                created = OffsetDateTime.parse("2022-04-28T22:34:34.643Z");
                                                description = "quos";
                                                id = 615424L;
                                                lastUpdate = OffsetDateTime.parse("2022-02-14T07:30:52.001Z");
                                                type = LookupTypeTypeEnum.CONTACT_POINT_TYPE;
                                            }};
                                            value = "praesentium";
                                        }};
                                        id = 433194L;
                                        lastImportDate = OffsetDateTime.parse("2022-05-06T00:25:49.728Z");
                                        lastUpdate = OffsetDateTime.parse("2020-10-28T03:30:55.690Z");
                                        links = new org.openapis.openapi.models.shared.Link[]{{
                                            add(new Link() {{
                                                created = OffsetDateTime.parse("2022-01-07T04:20:03.262Z");
                                                displayOrder = 614737;
                                                id = 883826L;
                                                lastUpdate = OffsetDateTime.parse("2022-02-23T11:47:01.732Z");
                                                link = "odio";
                                                linkType = new Lookup() {{
                                                    created = OffsetDateTime.parse("2022-12-02T02:24:08.784Z");
                                                    description = "eligendi";
                                                    descriptionFriendly = "occaecati";
                                                    displayOrder = 986330L;
                                                    id = 896443L;
                                                    lastUpdate = OffsetDateTime.parse("2021-02-04T00:20:17.939Z");
                                                    lookupType = new LookupType() {{
                                                        created = OffsetDateTime.parse("2022-08-31T20:35:45.651Z");
                                                        description = "aut";
                                                        id = 170126L;
                                                        lastUpdate = OffsetDateTime.parse("2021-01-18T01:15:24.272Z");
                                                        type = LookupTypeTypeEnum.IBD_SURGERYMAINPROCEDURE;
                                                    }};
                                                    value = "quod";
                                                }};
                                                name = "Ms. Joanne Halvorson";
                                            }}),
                                            add(new Link() {{
                                                created = OffsetDateTime.parse("2022-01-17T10:40:45.847Z");
                                                displayOrder = 89642;
                                                id = 474267L;
                                                lastUpdate = OffsetDateTime.parse("2022-09-15T13:48:32.460Z");
                                                link = "eius";
                                                linkType = new Lookup() {{
                                                    created = OffsetDateTime.parse("2022-08-05T19:06:47.080Z");
                                                    description = "amet";
                                                    descriptionFriendly = "voluptate";
                                                    displayOrder = 565304L;
                                                    id = 976274L;
                                                    lastUpdate = OffsetDateTime.parse("2022-01-21T08:17:02.208Z");
                                                    lookupType = new LookupType() {{
                                                        created = OffsetDateTime.parse("2022-09-20T23:55:39.171Z");
                                                        description = "molestiae";
                                                        id = 882586L;
                                                        lastUpdate = OffsetDateTime.parse("2022-12-02T17:23:21.944Z");
                                                        type = LookupTypeTypeEnum.LINK_TYPE;
                                                    }};
                                                    value = "praesentium";
                                                }};
                                                name = "Kathryn Hudson";
                                            }}),
                                        }};
                                        locations = new org.openapis.openapi.models.shared.Location[]{{
                                            add(new Location() {{
                                                address = "49847 Weissnat Greens";
                                                created = OffsetDateTime.parse("2022-01-15T04:37:44.760Z");
                                                email = "Stuart34@hotmail.com";
                                                id = 793402L;
                                                label = "aliquid";
                                                lastUpdate = OffsetDateTime.parse("2022-08-04T00:22:40.684Z");
                                                name = "Julie Pfannerstill";
                                                phone = "(383) 224-7271";
                                                web = "beatae";
                                            }}),
                                            add(new Location() {{
                                                address = "772 Daniela Pike";
                                                created = OffsetDateTime.parse("2021-06-01T10:26:00.616Z");
                                                email = "Oma93@hotmail.com";
                                                id = 685513L;
                                                label = "est";
                                                lastUpdate = OffsetDateTime.parse("2021-04-17T02:36:41.113Z");
                                                name = "Everett Lang";
                                                phone = "(937) 451-3184";
                                                web = "voluptate";
                                            }}),
                                            add(new Location() {{
                                                address = "0949 Aufderhar Lake";
                                                created = OffsetDateTime.parse("2022-12-26T18:18:04.242Z");
                                                email = "Leopold_Thompson81@gmail.com";
                                                id = 161134L;
                                                label = "natus";
                                                lastUpdate = OffsetDateTime.parse("2020-04-04T17:35:50.016Z");
                                                name = "Chelsea Stehr V";
                                                phone = "738.705.7349 x647";
                                                web = "odio";
                                            }}),
                                        }};
                                        name = "Ms. Donnie Crona";
                                        parentGroups = new org.openapis.openapi.models.shared.Group[]{{
                                            add(new Group() {{}}),
                                        }};
                                        postcode = "66997-6305";
                                        sftpUser = "veritatis";
                                        shortName = "aliquam";
                                        visible = false;
                                        visibleToJoin = false;
                                    }};
                                    id = 568231L;
                                    identifier = "atque";
                                    location = "dicta";
                                    name = "Laura Ritchie";
                                    temporaryUuid = "maiores";
                                    units = "delectus";
                                    value = "quos";
                                }}),
                                add(new FhirObservation() {{
                                    applies = OffsetDateTime.parse("2021-03-26T02:05:44.104Z");
                                    bodySite = "ab";
                                    comments = "voluptate";
                                    comparator = "consequatur";
                                    diagram = "itaque";
                                    group = new Group() {{
                                        address1 = "repellat";
                                        address2 = "voluptatem";
                                        address3 = "dolor";
                                        childGroups = new org.openapis.openapi.models.shared.Group[]{{
                                            add(new Group() {{}}),
                                            add(new Group() {{}}),
                                            add(new Group() {{}}),
                                        }};
                                        code = "quaerat";
                                        contactPoints = new org.openapis.openapi.models.shared.ContactPoint[]{{
                                            add(new ContactPoint() {{
                                                contactPointType = new ContactPointType() {{
                                                    description = "neque";
                                                    id = 469567L;
                                                    lookupType = new LookupType() {{
                                                        created = OffsetDateTime.parse("2022-03-29T00:41:20.919Z");
                                                        description = "mollitia";
                                                        id = 651504L;
                                                        lastUpdate = OffsetDateTime.parse("2022-03-28T03:48:50.113Z");
                                                        type = LookupTypeTypeEnum.IBD_CROHNSLOCATION;
                                                    }};
                                                    value = ContactPointTypeValueEnum.PV_ADMIN_PHONE;
                                                }};
                                                content = "enim";
                                                created = OffsetDateTime.parse("2022-05-21T19:49:36.726Z");
                                                id = 411669L;
                                                lastUpdate = OffsetDateTime.parse("2022-07-20T10:09:28.379Z");
                                            }}),
                                            add(new ContactPoint() {{
                                                contactPointType = new ContactPointType() {{
                                                    description = "nesciunt";
                                                    id = 166704L;
                                                    lookupType = new LookupType() {{
                                                        created = OffsetDateTime.parse("2021-08-25T07:41:00.958Z");
                                                        description = "voluptas";
                                                        id = 840198L;
                                                        lastUpdate = OffsetDateTime.parse("2020-10-18T22:48:14.460Z");
                                                        type = LookupTypeTypeEnum.STATISTIC_TYPE;
                                                    }};
                                                    value = ContactPointTypeValueEnum.PV_ADMIN_EMAIL;
                                                }};
                                                content = "praesentium";
                                                created = OffsetDateTime.parse("2022-03-19T13:47:36.994Z");
                                                id = 711819L;
                                                lastUpdate = OffsetDateTime.parse("2022-12-12T18:42:18.242Z");
                                            }}),
                                            add(new ContactPoint() {{
                                                contactPointType = new ContactPointType() {{
                                                    description = "delectus";
                                                    id = 501946L;
                                                    lookupType = new LookupType() {{
                                                        created = OffsetDateTime.parse("2020-02-25T23:21:37.071Z");
                                                        description = "assumenda";
                                                        id = 351495L;
                                                        lastUpdate = OffsetDateTime.parse("2020-10-19T15:02:50.997Z");
                                                        type = LookupTypeTypeEnum.CONTACT_POINT_TYPE;
                                                    }};
                                                    value = ContactPointTypeValueEnum.OUT_OF_HOURS_INFO;
                                                }};
                                                content = "occaecati";
                                                created = OffsetDateTime.parse("2022-04-22T20:08:10.603Z");
                                                id = 609151L;
                                                lastUpdate = OffsetDateTime.parse("2021-11-15T21:37:54.320Z");
                                            }}),
                                            add(new ContactPoint() {{
                                                contactPointType = new ContactPointType() {{
                                                    description = "a";
                                                    id = 493583L;
                                                    lookupType = new LookupType() {{
                                                        created = OffsetDateTime.parse("2022-06-28T11:10:03.721Z");
                                                        description = "dolore";
                                                        id = 398788L;
                                                        lastUpdate = OffsetDateTime.parse("2022-08-05T09:59:30.447Z");
                                                        type = LookupTypeTypeEnum.IBD_EGIMCOMPLICATION;
                                                    }};
                                                    value = ContactPointTypeValueEnum.PV_ADMIN_NAME;
                                                }};
                                                content = "neque";
                                                created = OffsetDateTime.parse("2022-06-06T22:23:21.241Z");
                                                id = 831105L;
                                                lastUpdate = OffsetDateTime.parse("2022-12-20T21:36:09.339Z");
                                            }}),
                                        }};
                                        created = OffsetDateTime.parse("2022-10-10T01:51:14.815Z");
                                        fhirResourceId = "6d9e75ca-006f-4539-ac11-a25a8bf92f97";
                                        groupFeatures = new org.openapis.openapi.models.shared.GroupFeature[]{{
                                            add(new GroupFeature() {{
                                                created = OffsetDateTime.parse("2022-06-10T08:57:54.909Z");
                                                feature = new Feature() {{
                                                    created = OffsetDateTime.parse("2021-04-06T02:33:16.304Z");
                                                    description = "unde";
                                                    id = 673400L;
                                                    lastUpdate = OffsetDateTime.parse("2021-02-13T02:11:36.009Z");
                                                    name = "Gerardo Weimann";
                                                }};
                                                id = 138727L;
                                                lastUpdate = OffsetDateTime.parse("2022-11-24T03:03:32.610Z");
                                            }}),
                                            add(new GroupFeature() {{
                                                created = OffsetDateTime.parse("2022-09-06T08:10:19.294Z");
                                                feature = new Feature() {{
                                                    created = OffsetDateTime.parse("2022-08-24T04:11:39.630Z");
                                                    description = "provident";
                                                    id = 820725L;
                                                    lastUpdate = OffsetDateTime.parse("2021-12-29T08:58:02.327Z");
                                                    name = "Deanna Kuhn";
                                                }};
                                                id = 633956L;
                                                lastUpdate = OffsetDateTime.parse("2022-06-02T03:40:36.510Z");
                                            }}),
                                        }};
                                        groupType = new Lookup() {{
                                            created = OffsetDateTime.parse("2020-07-08T01:08:41.139Z");
                                            description = "nihil";
                                            descriptionFriendly = "sed";
                                            displayOrder = 758366L;
                                            id = 860830L;
                                            lastUpdate = OffsetDateTime.parse("2022-09-26T00:23:34.731Z");
                                            lookupType = new LookupType() {{
                                                created = OffsetDateTime.parse("2022-06-02T01:30:19.072Z");
                                                description = "possimus";
                                                id = 677151L;
                                                lastUpdate = OffsetDateTime.parse("2022-11-17T18:37:31.431Z");
                                                type = LookupTypeTypeEnum.NEWS_TYPE;
                                            }};
                                            value = "eos";
                                        }};
                                        id = 609079L;
                                        lastImportDate = OffsetDateTime.parse("2022-06-12T16:07:26.364Z");
                                        lastUpdate = OffsetDateTime.parse("2021-06-27T13:27:59.360Z");
                                        links = new org.openapis.openapi.models.shared.Link[]{{
                                            add(new Link() {{
                                                created = OffsetDateTime.parse("2022-02-06T14:13:06.817Z");
                                                displayOrder = 946416;
                                                id = 349558L;
                                                lastUpdate = OffsetDateTime.parse("2022-11-05T12:37:24.626Z");
                                                link = "quis";
                                                linkType = new Lookup() {{
                                                    created = OffsetDateTime.parse("2022-08-26T02:18:41.469Z");
                                                    description = "dicta";
                                                    descriptionFriendly = "eum";
                                                    displayOrder = 572996L;
                                                    id = 659804L;
                                                    lastUpdate = OffsetDateTime.parse("2022-09-19T12:52:26.784Z");
                                                    lookupType = new LookupType() {{
                                                        created = OffsetDateTime.parse("2022-01-30T15:14:52.146Z");
                                                        description = "vitae";
                                                        id = 836018L;
                                                        lastUpdate = OffsetDateTime.parse("2021-09-16T06:54:29.871Z");
                                                        type = LookupTypeTypeEnum.ROLE;
                                                    }};
                                                    value = "neque";
                                                }};
                                                name = "Carlos Doyle";
                                            }}),
                                            add(new Link() {{
                                                created = OffsetDateTime.parse("2022-01-01T13:37:48.581Z");
                                                displayOrder = 179500;
                                                id = 845191L;
                                                lastUpdate = OffsetDateTime.parse("2021-01-18T15:51:42.789Z");
                                                link = "quaerat";
                                                linkType = new Lookup() {{
                                                    created = OffsetDateTime.parse("2022-10-01T22:33:05.840Z");
                                                    description = "perspiciatis";
                                                    descriptionFriendly = "quam";
                                                    displayOrder = 952106L;
                                                    id = 434345L;
                                                    lastUpdate = OffsetDateTime.parse("2020-03-22T03:37:51.173Z");
                                                    lookupType = new LookupType() {{
                                                        created = OffsetDateTime.parse("2022-09-25T00:43:44.722Z");
                                                        description = "aspernatur";
                                                        id = 91136L;
                                                        lastUpdate = OffsetDateTime.parse("2022-11-28T01:30:23.895Z");
                                                        type = LookupTypeTypeEnum.LINK_TYPE;
                                                    }};
                                                    value = "saepe";
                                                }};
                                                name = "Arlene Boyle V";
                                            }}),
                                        }};
                                        locations = new org.openapis.openapi.models.shared.Location[]{{
                                            add(new Location() {{
                                                address = "3196 Hayes Ford";
                                                created = OffsetDateTime.parse("2022-02-18T17:52:15.029Z");
                                                email = "Franz22@yahoo.com";
                                                id = 596888L;
                                                label = "accusamus";
                                                lastUpdate = OffsetDateTime.parse("2022-07-14T10:33:32.922Z");
                                                name = "Debbie Friesen II";
                                                phone = "377-232-1557 x193";
                                                web = "vel";
                                            }}),
                                            add(new Location() {{
                                                address = "538 Koss Manor";
                                                created = OffsetDateTime.parse("2022-11-11T17:31:48.398Z");
                                                email = "Lyric.Rempel9@hotmail.com";
                                                id = 487625L;
                                                label = "eligendi";
                                                lastUpdate = OffsetDateTime.parse("2022-04-24T01:44:56.609Z");
                                                name = "Miss Meredith Hand";
                                                phone = "790-276-8540 x482";
                                                web = "ea";
                                            }}),
                                            add(new Location() {{
                                                address = "51797 Schmeler Ford";
                                                created = OffsetDateTime.parse("2022-01-14T05:33:36.100Z");
                                                email = "Fredrick88@hotmail.com";
                                                id = 152807L;
                                                label = "mollitia";
                                                lastUpdate = OffsetDateTime.parse("2022-02-18T03:17:01.620Z");
                                                name = "Cesar Hansen";
                                                phone = "481.532.5919";
                                                web = "facere";
                                            }}),
                                        }};
                                        name = "Kurt Lindgren";
                                        parentGroups = new org.openapis.openapi.models.shared.Group[]{{
                                            add(new Group() {{}}),
                                            add(new Group() {{}}),
                                            add(new Group() {{}}),
                                        }};
                                        postcode = "77377-5409";
                                        sftpUser = "quas";
                                        shortName = "impedit";
                                        visible = false;
                                        visibleToJoin = false;
                                    }};
                                    id = 847942L;
                                    identifier = "ullam";
                                    location = "praesentium";
                                    name = "Celia Okuneva";
                                    temporaryUuid = "quas";
                                    units = "sunt";
                                    value = "aperiam";
                                }}),
                                add(new FhirObservation() {{
                                    applies = OffsetDateTime.parse("2022-01-26T03:12:39.004Z");
                                    bodySite = "repellat";
                                    comments = "necessitatibus";
                                    comparator = "tempora";
                                    diagram = "quaerat";
                                    group = new Group() {{
                                        address1 = "magnam";
                                        address2 = "voluptate";
                                        address3 = "magni";
                                        childGroups = new org.openapis.openapi.models.shared.Group[]{{
                                            add(new Group() {{}}),
                                            add(new Group() {{}}),
                                            add(new Group() {{}}),
                                        }};
                                        code = "esse";
                                        contactPoints = new org.openapis.openapi.models.shared.ContactPoint[]{{
                                            add(new ContactPoint() {{
                                                contactPointType = new ContactPointType() {{
                                                    description = "pariatur";
                                                    id = 248131L;
                                                    lookupType = new LookupType() {{
                                                        created = OffsetDateTime.parse("2022-11-08T22:41:00.189Z");
                                                        description = "illum";
                                                        id = 859740L;
                                                        lastUpdate = OffsetDateTime.parse("2022-04-15T07:43:40.783Z");
                                                        type = LookupTypeTypeEnum.IBD_UCEXTENT;
                                                    }};
                                                    value = ContactPointTypeValueEnum.APPOINTMENT_PHONE;
                                                }};
                                                content = "repudiandae";
                                                created = OffsetDateTime.parse("2022-09-20T06:47:40.609Z");
                                                id = 472444L;
                                                lastUpdate = OffsetDateTime.parse("2022-02-02T03:37:06.588Z");
                                            }}),
                                            add(new ContactPoint() {{
                                                contactPointType = new ContactPointType() {{
                                                    description = "aliquid";
                                                    id = 503373L;
                                                    lookupType = new LookupType() {{
                                                        created = OffsetDateTime.parse("2022-01-30T19:45:18.053Z");
                                                        description = "reiciendis";
                                                        id = 991688L;
                                                        lastUpdate = OffsetDateTime.parse("2022-12-20T10:46:58.185Z");
                                                        type = LookupTypeTypeEnum.ROLE;
                                                    }};
                                                    value = ContactPointTypeValueEnum.TRUST_WEB_ADDRESS;
                                                }};
                                                content = "laboriosam";
                                                created = OffsetDateTime.parse("2021-08-28T19:00:51.406Z");
                                                id = 87571L;
                                                lastUpdate = OffsetDateTime.parse("2020-01-28T19:32:23.296Z");
                                            }}),
                                            add(new ContactPoint() {{
                                                contactPointType = new ContactPointType() {{
                                                    description = "tenetur";
                                                    id = 704412L;
                                                    lookupType = new LookupType() {{
                                                        created = OffsetDateTime.parse("2022-12-19T12:36:59.311Z");
                                                        description = "itaque";
                                                        id = 698001L;
                                                        lastUpdate = OffsetDateTime.parse("2022-09-10T08:29:20.302Z");
                                                        type = LookupTypeTypeEnum.IBD_CROHNSBEHAVIOUR;
                                                    }};
                                                    value = ContactPointTypeValueEnum.UNIT_ENQUIRIES_PHONE;
                                                }};
                                                content = "quaerat";
                                                created = OffsetDateTime.parse("2022-12-06T14:25:00.055Z");
                                                id = 603512L;
                                                lastUpdate = OffsetDateTime.parse("2022-10-15T02:34:08.978Z");
                                            }}),
                                            add(new ContactPoint() {{
                                                contactPointType = new ContactPointType() {{
                                                    description = "rerum";
                                                    id = 282825L;
                                                    lookupType = new LookupType() {{
                                                        created = OffsetDateTime.parse("2022-04-21T22:31:55.945Z");
                                                        description = "nulla";
                                                        id = 198810L;
                                                        lastUpdate = OffsetDateTime.parse("2022-02-18T18:36:00.485Z");
                                                        type = LookupTypeTypeEnum.CODE_TYPE;
                                                    }};
                                                    value = ContactPointTypeValueEnum.UNIT_WEB_ADDRESS;
                                                }};
                                                content = "veniam";
                                                created = OffsetDateTime.parse("2021-05-08T12:41:52.891Z");
                                                id = 239892L;
                                                lastUpdate = OffsetDateTime.parse("2022-02-13T05:37:55.756Z");
                                            }}),
                                        }};
                                        created = OffsetDateTime.parse("2022-05-30T03:37:19.665Z");
                                        fhirResourceId = "53c00113-9863-4aa4-9e6c-31cc2f1fcb51";
                                        groupFeatures = new org.openapis.openapi.models.shared.GroupFeature[]{{
                                            add(new GroupFeature() {{
                                                created = OffsetDateTime.parse("2021-09-02T18:33:54.350Z");
                                                feature = new Feature() {{
                                                    created = OffsetDateTime.parse("2022-11-29T19:16:33.177Z");
                                                    description = "reiciendis";
                                                    id = 971050L;
                                                    lastUpdate = OffsetDateTime.parse("2021-02-20T18:12:52.838Z");
                                                    name = "Forrest Powlowski";
                                                }};
                                                id = 620520L;
                                                lastUpdate = OffsetDateTime.parse("2022-01-30T04:18:24.333Z");
                                            }}),
                                            add(new GroupFeature() {{
                                                created = OffsetDateTime.parse("2021-10-02T17:06:14.043Z");
                                                feature = new Feature() {{
                                                    created = OffsetDateTime.parse("2022-02-08T21:36:15.573Z");
                                                    description = "doloremque";
                                                    id = 458274L;
                                                    lastUpdate = OffsetDateTime.parse("2022-03-21T15:35:53.083Z");
                                                    name = "Fernando O'Connell";
                                                }};
                                                id = 432638L;
                                                lastUpdate = OffsetDateTime.parse("2022-08-14T20:42:37.113Z");
                                            }}),
                                            add(new GroupFeature() {{
                                                created = OffsetDateTime.parse("2021-01-17T00:40:22.927Z");
                                                feature = new Feature() {{
                                                    created = OffsetDateTime.parse("2022-03-21T15:38:05.051Z");
                                                    description = "molestiae";
                                                    id = 81455L;
                                                    lastUpdate = OffsetDateTime.parse("2022-09-26T14:34:15.352Z");
                                                    name = "Daisy Franey";
                                                }};
                                                id = 581017L;
                                                lastUpdate = OffsetDateTime.parse("2022-01-03T09:52:02.484Z");
                                            }}),
                                            add(new GroupFeature() {{
                                                created = OffsetDateTime.parse("2022-02-11T22:30:11.425Z");
                                                feature = new Feature() {{
                                                    created = OffsetDateTime.parse("2022-06-04T03:35:50.569Z");
                                                    description = "nulla";
                                                    id = 68300L;
                                                    lastUpdate = OffsetDateTime.parse("2021-05-10T07:27:43.062Z");
                                                    name = "Dr. Lorene Runte";
                                                }};
                                                id = 934561L;
                                                lastUpdate = OffsetDateTime.parse("2022-01-29T15:14:36.443Z");
                                            }}),
                                        }};
                                        groupType = new Lookup() {{
                                            created = OffsetDateTime.parse("2022-12-29T03:34:56.083Z");
                                            description = "nemo";
                                            descriptionFriendly = "provident";
                                            displayOrder = 252957L;
                                            id = 256632L;
                                            lastUpdate = OffsetDateTime.parse("2021-11-14T19:22:50.217Z");
                                            lookupType = new LookupType() {{
                                                created = OffsetDateTime.parse("2022-09-06T22:03:16.311Z");
                                                description = "illum";
                                                id = 153666L;
                                                lastUpdate = OffsetDateTime.parse("2022-07-22T18:14:05.430Z");
                                                type = LookupTypeTypeEnum.IBD_CROHNSPERIANAL;
                                            }};
                                            value = "ducimus";
                                        }};
                                        id = 174757L;
                                        lastImportDate = OffsetDateTime.parse("2021-04-03T20:48:28.253Z");
                                        lastUpdate = OffsetDateTime.parse("2022-07-01T02:41:36.362Z");
                                        links = new org.openapis.openapi.models.shared.Link[]{{
                                            add(new Link() {{
                                                created = OffsetDateTime.parse("2021-04-19T02:49:11.362Z");
                                                displayOrder = 384939;
                                                id = 659696L;
                                                lastUpdate = OffsetDateTime.parse("2020-07-09T18:46:11.438Z");
                                                link = "quaerat";
                                                linkType = new Lookup() {{
                                                    created = OffsetDateTime.parse("2021-03-09T01:37:29.839Z");
                                                    description = "optio";
                                                    descriptionFriendly = "soluta";
                                                    displayOrder = 492922L;
                                                    id = 366389L;
                                                    lastUpdate = OffsetDateTime.parse("2022-07-17T14:41:15.722Z");
                                                    lookupType = new LookupType() {{
                                                        created = OffsetDateTime.parse("2020-05-20T06:53:27.332Z");
                                                        description = "excepturi";
                                                        id = 180470L;
                                                        lastUpdate = OffsetDateTime.parse("2022-11-05T16:36:43.461Z");
                                                        type = LookupTypeTypeEnum.IBD_EGIMCOMPLICATION;
                                                    }};
                                                    value = "excepturi";
                                                }};
                                                name = "Elijah Hegmann";
                                            }}),
                                            add(new Link() {{
                                                created = OffsetDateTime.parse("2022-11-02T07:17:55.028Z");
                                                displayOrder = 625815;
                                                id = 664491L;
                                                lastUpdate = OffsetDateTime.parse("2021-01-30T22:59:32.750Z");
                                                link = "laborum";
                                                linkType = new Lookup() {{
                                                    created = OffsetDateTime.parse("2022-02-15T12:31:49.137Z");
                                                    description = "odio";
                                                    descriptionFriendly = "eum";
                                                    displayOrder = 98238L;
                                                    id = 947004L;
                                                    lastUpdate = OffsetDateTime.parse("2022-03-22T22:42:10.471Z");
                                                    lookupType = new LookupType() {{
                                                        created = OffsetDateTime.parse("2022-06-14T19:35:26.505Z");
                                                        description = "pariatur";
                                                        id = 289342L;
                                                        lastUpdate = OffsetDateTime.parse("2022-08-08T12:27:34.949Z");
                                                        type = LookupTypeTypeEnum.IBD_SMOKINGSTATUS;
                                                    }};
                                                    value = "reiciendis";
                                                }};
                                                name = "Dr. Nancy Ferry";
                                            }}),
                                        }};
                                        locations = new org.openapis.openapi.models.shared.Location[]{{
                                            add(new Location() {{
                                                address = "6907 Alicia Canyon";
                                                created = OffsetDateTime.parse("2022-02-04T16:11:36.466Z");
                                                email = "Briana.Schinner35@gmail.com";
                                                id = 798934L;
                                                label = "quod";
                                                lastUpdate = OffsetDateTime.parse("2022-08-20T18:13:06.023Z");
                                                name = "Ms. Edwin Murphy";
                                                phone = "(538) 641-9751 x07436";
                                                web = "aut";
                                            }}),
                                            add(new Location() {{
                                                address = "46759 Nora Shoal";
                                                created = OffsetDateTime.parse("2021-11-17T22:15:09.305Z");
                                                email = "Arno_Macejkovic@yahoo.com";
                                                id = 287293L;
                                                label = "nulla";
                                                lastUpdate = OffsetDateTime.parse("2022-12-21T09:24:31.624Z");
                                                name = "Maggie Weissnat";
                                                phone = "488-862-4660 x79848";
                                                web = "corrupti";
                                            }}),
                                            add(new Location() {{
                                                address = "58600 Astrid Passage";
                                                created = OffsetDateTime.parse("2022-11-20T03:17:35.551Z");
                                                email = "Leif39@gmail.com";
                                                id = 429467L;
                                                label = "quaerat";
                                                lastUpdate = OffsetDateTime.parse("2022-03-26T14:15:01.523Z");
                                                name = "Dr. Rosemarie Kutch";
                                                phone = "(231) 933-6646 x9909";
                                                web = "dolorum";
                                            }}),
                                        }};
                                        name = "Ruby Bogan";
                                        parentGroups = new org.openapis.openapi.models.shared.Group[]{{
                                            add(new Group() {{}}),
                                            add(new Group() {{}}),
                                            add(new Group() {{}}),
                                        }};
                                        postcode = "04067-0428";
                                        sftpUser = "sed";
                                        shortName = "quam";
                                        visible = false;
                                        visibleToJoin = false;
                                    }};
                                    id = 601161L;
                                    identifier = "harum";
                                    location = "sequi";
                                    name = "Jeffrey Kuvalis";
                                    temporaryUuid = "dolorum";
                                    units = "omnis";
                                    value = "occaecati";
                                }}),
                            }};
                            procedures = new org.openapis.openapi.models.shared.FhirProcedure[]{{
                                add(new FhirProcedure() {{
                                    bodySite = "veniam";
                                    id = 461568L;
                                    type = "repellendus";
                                }}),
                            }};
                            status = "eaque";
                        }}),
                    }};
                    groupCode = "incidunt";
                    identifier = "asperiores";
                    observations = new org.openapis.openapi.models.shared.FhirObservation[]{{
                        add(new FhirObservation() {{
                            applies = OffsetDateTime.parse("2022-06-10T14:51:37.902Z");
                            bodySite = "incidunt";
                            comments = "iusto";
                            comparator = "laborum";
                            diagram = "in";
                            group = new Group() {{
                                address1 = "numquam";
                                address2 = "quia";
                                address3 = "repellendus";
                                childGroups = new org.openapis.openapi.models.shared.Group[]{{
                                    add(new Group() {{}}),
                                    add(new Group() {{}}),
                                    add(new Group() {{}}),
                                }};
                                code = "ut";
                                contactPoints = new org.openapis.openapi.models.shared.ContactPoint[]{{
                                    add(new ContactPoint() {{
                                        contactPointType = new ContactPointType() {{
                                            description = "cupiditate";
                                            id = 392180L;
                                            lookupType = new LookupType() {{
                                                created = OffsetDateTime.parse("2020-10-19T17:46:06.865Z");
                                                description = "facere";
                                                id = 936863L;
                                                lastUpdate = OffsetDateTime.parse("2020-09-05T14:52:52.827Z");
                                                type = LookupTypeTypeEnum.LINK_TYPE;
                                            }};
                                            value = ContactPointTypeValueEnum.PV_ADMIN_EMAIL;
                                        }};
                                        content = "tempore";
                                        created = OffsetDateTime.parse("2021-10-27T17:27:51.202Z");
                                        id = 746498L;
                                        lastUpdate = OffsetDateTime.parse("2021-10-04T10:16:13.921Z");
                                    }}),
                                    add(new ContactPoint() {{
                                        contactPointType = new ContactPointType() {{
                                            description = "consectetur";
                                            id = 360248L;
                                            lookupType = new LookupType() {{
                                                created = OffsetDateTime.parse("2022-11-12T15:16:06.673Z");
                                                description = "eveniet";
                                                id = 736261L;
                                                lastUpdate = OffsetDateTime.parse("2020-06-26T19:59:39.342Z");
                                                type = LookupTypeTypeEnum.LINK_TYPE;
                                            }};
                                            value = ContactPointTypeValueEnum.PV_ADMIN_PHONE;
                                        }};
                                        content = "ipsam";
                                        created = OffsetDateTime.parse("2022-06-23T11:41:31.333Z");
                                        id = 610213L;
                                        lastUpdate = OffsetDateTime.parse("2022-03-20T19:25:56.778Z");
                                    }}),
                                }};
                                created = OffsetDateTime.parse("2022-08-03T20:41:03.507Z");
                                fhirResourceId = "0b06a128-7764-4eef-ad0c-6d6ed9c73dd6";
                                groupFeatures = new org.openapis.openapi.models.shared.GroupFeature[]{{
                                    add(new GroupFeature() {{
                                        created = OffsetDateTime.parse("2022-08-29T04:39:24.132Z");
                                        feature = new Feature() {{
                                            created = OffsetDateTime.parse("2022-12-03T23:04:12.170Z");
                                            description = "corporis";
                                            id = 55356L;
                                            lastUpdate = OffsetDateTime.parse("2021-08-21T23:19:50.215Z");
                                            name = "Lamar Lesch PhD";
                                        }};
                                        id = 238167L;
                                        lastUpdate = OffsetDateTime.parse("2022-01-03T15:43:14.889Z");
                                    }}),
                                }};
                                groupType = new Lookup() {{
                                    created = OffsetDateTime.parse("2022-10-18T09:45:44.018Z");
                                    description = "maiores";
                                    descriptionFriendly = "perspiciatis";
                                    displayOrder = 802188L;
                                    id = 169072L;
                                    lastUpdate = OffsetDateTime.parse("2022-11-09T02:01:22.662Z");
                                    lookupType = new LookupType() {{
                                        created = OffsetDateTime.parse("2021-07-16T06:20:50.729Z");
                                        description = "quidem";
                                        id = 436965L;
                                        lastUpdate = OffsetDateTime.parse("2022-05-13T11:12:39.454Z");
                                        type = LookupTypeTypeEnum.MENU;
                                    }};
                                    value = "reiciendis";
                                }};
                                id = 214359L;
                                lastImportDate = OffsetDateTime.parse("2022-03-16T00:11:45.666Z");
                                lastUpdate = OffsetDateTime.parse("2022-10-02T07:16:07.379Z");
                                links = new org.openapis.openapi.models.shared.Link[]{{
                                    add(new Link() {{
                                        created = OffsetDateTime.parse("2021-12-15T21:04:43.668Z");
                                        displayOrder = 693988;
                                        id = 408208L;
                                        lastUpdate = OffsetDateTime.parse("2022-11-20T23:00:55.403Z");
                                        link = "excepturi";
                                        linkType = new Lookup() {{
                                            created = OffsetDateTime.parse("2021-10-12T01:30:34.966Z");
                                            description = "eaque";
                                            descriptionFriendly = "reiciendis";
                                            displayOrder = 302147L;
                                            id = 161741L;
                                            lastUpdate = OffsetDateTime.parse("2022-06-16T03:37:31.369Z");
                                            lookupType = new LookupType() {{
                                                created = OffsetDateTime.parse("2021-07-31T23:57:53.258Z");
                                                description = "modi";
                                                id = 239858L;
                                                lastUpdate = OffsetDateTime.parse("2021-04-04T22:52:25.370Z");
                                                type = LookupTypeTypeEnum.GENDER;
                                            }};
                                            value = "exercitationem";
                                        }};
                                        name = "Mrs. Alan Hudson";
                                    }}),
                                    add(new Link() {{
                                        created = OffsetDateTime.parse("2022-03-05T18:31:40.799Z");
                                        displayOrder = 440877;
                                        id = 273793L;
                                        lastUpdate = OffsetDateTime.parse("2022-01-31T02:21:14.629Z");
                                        link = "sequi";
                                        linkType = new Lookup() {{
                                            created = OffsetDateTime.parse("2022-07-06T12:58:01.390Z");
                                            description = "quae";
                                            descriptionFriendly = "veniam";
                                            displayOrder = 572633L;
                                            id = 791517L;
                                            lastUpdate = OffsetDateTime.parse("2021-06-07T05:05:38.670Z");
                                            lookupType = new LookupType() {{
                                                created = OffsetDateTime.parse("2022-01-08T19:11:49.752Z");
                                                description = "veniam";
                                                id = 419685L;
                                                lastUpdate = OffsetDateTime.parse("2022-02-11T04:25:21.634Z");
                                                type = LookupTypeTypeEnum.MENU;
                                            }};
                                            value = "itaque";
                                        }};
                                        name = "Renee Cruickshank";
                                    }}),
                                    add(new Link() {{
                                        created = OffsetDateTime.parse("2022-04-03T05:08:54.838Z");
                                        displayOrder = 107424;
                                        id = 831304L;
                                        lastUpdate = OffsetDateTime.parse("2022-11-02T13:26:31.816Z");
                                        link = "delectus";
                                        linkType = new Lookup() {{
                                            created = OffsetDateTime.parse("2020-07-14T13:33:56.973Z");
                                            description = "laborum";
                                            descriptionFriendly = "optio";
                                            displayOrder = 890688L;
                                            id = 100926L;
                                            lastUpdate = OffsetDateTime.parse("2022-12-20T04:23:08.728Z");
                                            lookupType = new LookupType() {{
                                                created = OffsetDateTime.parse("2022-11-10T21:53:17.505Z");
                                                description = "inventore";
                                                id = 388889L;
                                                lastUpdate = OffsetDateTime.parse("2020-03-28T09:52:01.511Z");
                                                type = LookupTypeTypeEnum.CODE_STANDARD;
                                            }};
                                            value = "aspernatur";
                                        }};
                                        name = "Becky Tillman";
                                    }}),
                                    add(new Link() {{
                                        created = OffsetDateTime.parse("2022-09-06T18:11:30.268Z");
                                        displayOrder = 792676;
                                        id = 842168L;
                                        lastUpdate = OffsetDateTime.parse("2022-02-21T12:24:48.370Z");
                                        link = "inventore";
                                        linkType = new Lookup() {{
                                            created = OffsetDateTime.parse("2021-04-23T13:22:50.149Z");
                                            description = "excepturi";
                                            descriptionFriendly = "nostrum";
                                            displayOrder = 575838L;
                                            id = 984080L;
                                            lastUpdate = OffsetDateTime.parse("2022-10-06T17:22:53.898Z");
                                            lookupType = new LookupType() {{
                                                created = OffsetDateTime.parse("2021-03-14T15:36:36.235Z");
                                                description = "velit";
                                                id = 573816L;
                                                lastUpdate = OffsetDateTime.parse("2022-08-10T09:56:45.031Z");
                                                type = LookupTypeTypeEnum.STATISTIC_TYPE;
                                            }};
                                            value = "impedit";
                                        }};
                                        name = "Lionel Mraz";
                                    }}),
                                }};
                                locations = new org.openapis.openapi.models.shared.Location[]{{
                                    add(new Location() {{
                                        address = "6161 Augusta Cliffs";
                                        created = OffsetDateTime.parse("2022-08-11T05:55:11.724Z");
                                        email = "Evie89@yahoo.com";
                                        id = 393189L;
                                        label = "aliquid";
                                        lastUpdate = OffsetDateTime.parse("2021-11-19T05:37:30.925Z");
                                        name = "Guadalupe Rosenbaum";
                                        phone = "(511) 581-5443 x4422";
                                        web = "tempora";
                                    }}),
                                    add(new Location() {{
                                        address = "32025 Zboncak Rapids";
                                        created = OffsetDateTime.parse("2022-06-01T15:55:43.983Z");
                                        email = "Audie_Thompson@yahoo.com";
                                        id = 79237L;
                                        label = "perspiciatis";
                                        lastUpdate = OffsetDateTime.parse("2022-08-23T06:32:44.912Z");
                                        name = "Nellie Fisher";
                                        phone = "987-774-9862 x53628";
                                        web = "vel";
                                    }}),
                                }};
                                name = "Patty Schinner";
                                parentGroups = new org.openapis.openapi.models.shared.Group[]{{
                                    add(new Group() {{}}),
                                    add(new Group() {{}}),
                                    add(new Group() {{}}),
                                    add(new Group() {{}}),
                                }};
                                postcode = "50421";
                                sftpUser = "rerum";
                                shortName = "iste";
                                visible = false;
                                visibleToJoin = false;
                            }};
                            id = 579690L;
                            identifier = "enim";
                            location = "tempora";
                            name = "Elmer Wolf";
                            temporaryUuid = "explicabo";
                            units = "accusantium";
                            value = "eum";
                        }}),
                        add(new FhirObservation() {{
                            applies = OffsetDateTime.parse("2022-08-01T22:22:18.129Z");
                            bodySite = "molestias";
                            comments = "atque";
                            comparator = "explicabo";
                            diagram = "totam";
                            group = new Group() {{
                                address1 = "ipsam";
                                address2 = "nemo";
                                address3 = "sequi";
                                childGroups = new org.openapis.openapi.models.shared.Group[]{{
                                    add(new Group() {{}}),
                                    add(new Group() {{}}),
                                    add(new Group() {{}}),
                                    add(new Group() {{}}),
                                }};
                                code = "libero";
                                contactPoints = new org.openapis.openapi.models.shared.ContactPoint[]{{
                                    add(new ContactPoint() {{
                                        contactPointType = new ContactPointType() {{
                                            description = "alias";
                                            id = 35538L;
                                            lookupType = new LookupType() {{
                                                created = OffsetDateTime.parse("2022-07-31T14:31:40.941Z");
                                                description = "tempore";
                                                id = 896695L;
                                                lastUpdate = OffsetDateTime.parse("2022-03-03T01:28:38.381Z");
                                                type = LookupTypeTypeEnum.IBD_CROHNSLOCATION;
                                            }};
                                            value = ContactPointTypeValueEnum.TRUST_WEB_ADDRESS;
                                        }};
                                        content = "illo";
                                        created = OffsetDateTime.parse("2020-08-10T19:52:55.197Z");
                                        id = 168223L;
                                        lastUpdate = OffsetDateTime.parse("2022-08-17T04:23:48.087Z");
                                    }}),
                                }};
                                created = OffsetDateTime.parse("2022-04-09T21:49:26.699Z");
                                fhirResourceId = "749366ac-8ee0-4f2b-b195-88d40d03f3de";
                                groupFeatures = new org.openapis.openapi.models.shared.GroupFeature[]{{
                                    add(new GroupFeature() {{
                                        created = OffsetDateTime.parse("2022-09-09T08:07:20.016Z");
                                        feature = new Feature() {{
                                            created = OffsetDateTime.parse("2022-01-18T01:53:56.793Z");
                                            description = "facilis";
                                            id = 937294L;
                                            lastUpdate = OffsetDateTime.parse("2022-01-25T05:40:03.032Z");
                                            name = "William Pollich";
                                        }};
                                        id = 6237L;
                                        lastUpdate = OffsetDateTime.parse("2020-01-19T04:33:02.149Z");
                                    }}),
                                    add(new GroupFeature() {{
                                        created = OffsetDateTime.parse("2022-03-02T14:44:04.274Z");
                                        feature = new Feature() {{
                                            created = OffsetDateTime.parse("2021-01-20T07:57:05.201Z");
                                            description = "nulla";
                                            id = 367747L;
                                            lastUpdate = OffsetDateTime.parse("2022-09-15T23:40:44.734Z");
                                            name = "Jill Russel";
                                        }};
                                        id = 199673L;
                                        lastUpdate = OffsetDateTime.parse("2022-02-19T14:51:16.489Z");
                                    }}),
                                    add(new GroupFeature() {{
                                        created = OffsetDateTime.parse("2022-05-30T10:34:59.125Z");
                                        feature = new Feature() {{
                                            created = OffsetDateTime.parse("2022-01-11T23:34:45.837Z");
                                            description = "modi";
                                            id = 987085L;
                                            lastUpdate = OffsetDateTime.parse("2022-10-25T09:48:19.669Z");
                                            name = "Dr. Josefina Powlowski DDS";
                                        }};
                                        id = 943865L;
                                        lastUpdate = OffsetDateTime.parse("2022-01-14T17:24:16.568Z");
                                    }}),
                                }};
                                groupType = new Lookup() {{
                                    created = OffsetDateTime.parse("2022-09-15T12:13:13.798Z");
                                    description = "inventore";
                                    descriptionFriendly = "reprehenderit";
                                    displayOrder = 572779L;
                                    id = 494093L;
                                    lastUpdate = OffsetDateTime.parse("2021-04-12T23:52:21.478Z");
                                    lookupType = new LookupType() {{
                                        created = OffsetDateTime.parse("2022-05-16T19:26:41.601Z");
                                        description = "eligendi";
                                        id = 774567L;
                                        lastUpdate = OffsetDateTime.parse("2022-01-11T21:06:11.449Z");
                                        type = LookupTypeTypeEnum.STATISTIC_TYPE;
                                    }};
                                    value = "mollitia";
                                }};
                                id = 918967L;
                                lastImportDate = OffsetDateTime.parse("2022-02-04T14:21:51.225Z");
                                lastUpdate = OffsetDateTime.parse("2022-01-29T09:28:22.235Z");
                                links = new org.openapis.openapi.models.shared.Link[]{{
                                    add(new Link() {{
                                        created = OffsetDateTime.parse("2022-11-25T12:48:18.221Z");
                                        displayOrder = 664905;
                                        id = 363660L;
                                        lastUpdate = OffsetDateTime.parse("2022-12-09T15:54:36.296Z");
                                        link = "quaerat";
                                        linkType = new Lookup() {{
                                            created = OffsetDateTime.parse("2022-04-20T19:05:05.653Z");
                                            description = "laboriosam";
                                            descriptionFriendly = "aliquam";
                                            displayOrder = 920234L;
                                            id = 602822L;
                                            lastUpdate = OffsetDateTime.parse("2021-01-18T00:01:17.655Z");
                                            lookupType = new LookupType() {{
                                                created = OffsetDateTime.parse("2022-11-30T12:34:05.479Z");
                                                description = "officiis";
                                                id = 394208L;
                                                lastUpdate = OffsetDateTime.parse("2022-02-06T14:19:21.184Z");
                                                type = LookupTypeTypeEnum.GROUP;
                                            }};
                                            value = "provident";
                                        }};
                                        name = "Darla Schultz";
                                    }}),
                                }};
                                locations = new org.openapis.openapi.models.shared.Location[]{{
                                    add(new Location() {{
                                        address = "3209 Herman Estate";
                                        created = OffsetDateTime.parse("2022-07-07T21:58:01.504Z");
                                        email = "Manley_Boyle95@gmail.com";
                                        id = 923232L;
                                        label = "perspiciatis";
                                        lastUpdate = OffsetDateTime.parse("2022-02-13T13:25:08.448Z");
                                        name = "Ashley Parker";
                                        phone = "485-469-1896";
                                        web = "voluptate";
                                    }}),
                                    add(new Location() {{
                                        address = "96154 Cassandre Neck";
                                        created = OffsetDateTime.parse("2022-02-24T21:59:46.620Z");
                                        email = "Cortez.Jacobson@gmail.com";
                                        id = 88310L;
                                        label = "officiis";
                                        lastUpdate = OffsetDateTime.parse("2021-02-03T22:24:04.882Z");
                                        name = "Vera Veum";
                                        phone = "(430) 784-3888 x7305";
                                        web = "impedit";
                                    }}),
                                    add(new Location() {{
                                        address = "86196 Ernser Haven";
                                        created = OffsetDateTime.parse("2022-11-27T04:28:04.319Z");
                                        email = "Vita_Baumbach@gmail.com";
                                        id = 293381L;
                                        label = "itaque";
                                        lastUpdate = OffsetDateTime.parse("2022-04-12T13:16:18.936Z");
                                        name = "Dr. Louise Will";
                                        phone = "634-660-2129 x006";
                                        web = "architecto";
                                    }}),
                                    add(new Location() {{
                                        address = "497 Glover Drive";
                                        created = OffsetDateTime.parse("2022-08-04T05:35:00.281Z");
                                        email = "Florence22@gmail.com";
                                        id = 14082L;
                                        label = "molestias";
                                        lastUpdate = OffsetDateTime.parse("2022-01-01T00:36:11.382Z");
                                        name = "Pete O'Conner";
                                        phone = "999-477-0098 x30831";
                                        web = "atque";
                                    }}),
                                }};
                                name = "Ray Hammes";
                                parentGroups = new org.openapis.openapi.models.shared.Group[]{{
                                    add(new Group() {{}}),
                                    add(new Group() {{}}),
                                    add(new Group() {{}}),
                                }};
                                postcode = "75395";
                                sftpUser = "libero";
                                shortName = "placeat";
                                visible = false;
                                visibleToJoin = false;
                            }};
                            id = 127095L;
                            identifier = "placeat";
                            location = "animi";
                            name = "Cameron Littel";
                            temporaryUuid = "magnam";
                            units = "veritatis";
                            value = "fugit";
                        }}),
                    }};
                    patient = new FhirPatient() {{
                        address1 = "nihil";
                        address2 = "illum";
                        address3 = "nulla";
                        address4 = "nemo";
                        contacts = new org.openapis.openapi.models.shared.FhirContact[]{{
                            add(new FhirContact() {{
                                id = 439275L;
                                system = "hic";
                                use = "sapiente";
                                value = "eius";
                            }}),
                            add(new FhirContact() {{
                                id = 458491L;
                                system = "quasi";
                                use = "inventore";
                                value = "similique";
                            }}),
                            add(new FhirContact() {{
                                id = 661028L;
                                system = "et";
                                use = "distinctio";
                                value = "porro";
                            }}),
                        }};
                        dateOfBirth = OffsetDateTime.parse("2022-09-29T06:56:10.758Z");
                        dateOfBirthNoTime = "rerum";
                        forename = "atque";
                        gender = "female";
                        group = new Group() {{
                            address1 = "placeat";
                            address2 = "necessitatibus";
                            address3 = "quisquam";
                            childGroups = new org.openapis.openapi.models.shared.Group[]{{
                                add(new Group() {{}}),
                                add(new Group() {{}}),
                                add(new Group() {{}}),
                                add(new Group() {{}}),
                            }};
                            code = "ducimus";
                            contactPoints = new org.openapis.openapi.models.shared.ContactPoint[]{{
                                add(new ContactPoint() {{
                                    contactPointType = new ContactPointType() {{
                                        description = "voluptatibus";
                                        id = 472152L;
                                        lookupType = new LookupType() {{
                                            created = OffsetDateTime.parse("2022-04-12T09:31:48.820Z");
                                            description = "incidunt";
                                            id = 534175L;
                                            lastUpdate = OffsetDateTime.parse("2022-06-25T05:19:38.155Z");
                                            type = LookupTypeTypeEnum.IBD_UCEXTENT;
                                        }};
                                        value = ContactPointTypeValueEnum.APPOINTMENT_EMAIL;
                                    }};
                                    content = "iure";
                                    created = OffsetDateTime.parse("2022-03-01T06:49:32.137Z");
                                    id = 940472L;
                                    lastUpdate = OffsetDateTime.parse("2022-09-23T20:54:18.382Z");
                                }}),
                                add(new ContactPoint() {{
                                    contactPointType = new ContactPointType() {{
                                        description = "aliquam";
                                        id = 99732L;
                                        lookupType = new LookupType() {{
                                            created = OffsetDateTime.parse("2022-06-11T08:21:52.950Z");
                                            description = "maxime";
                                            id = 189827L;
                                            lastUpdate = OffsetDateTime.parse("2021-11-22T10:26:15.271Z");
                                            type = LookupTypeTypeEnum.GROUP;
                                        }};
                                        value = ContactPointTypeValueEnum.UNIT_ENQUIRIES_PHONE;
                                    }};
                                    content = "sit";
                                    created = OffsetDateTime.parse("2022-05-18T15:08:01.341Z");
                                    id = 201056L;
                                    lastUpdate = OffsetDateTime.parse("2022-10-05T15:52:38.616Z");
                                }}),
                            }};
                            created = OffsetDateTime.parse("2022-10-30T15:11:19.802Z");
                            fhirResourceId = "60459beb-bad0-42f2-986b-cf152558daa9";
                            groupFeatures = new org.openapis.openapi.models.shared.GroupFeature[]{{
                                add(new GroupFeature() {{
                                    created = OffsetDateTime.parse("2021-02-18T15:25:52.242Z");
                                    feature = new Feature() {{
                                        created = OffsetDateTime.parse("2022-03-20T22:46:34.076Z");
                                        description = "nulla";
                                        id = 10447L;
                                        lastUpdate = OffsetDateTime.parse("2022-07-20T15:27:19.301Z");
                                        name = "Gina Rutherford";
                                    }};
                                    id = 281753L;
                                    lastUpdate = OffsetDateTime.parse("2021-08-20T12:31:22.512Z");
                                }}),
                                add(new GroupFeature() {{
                                    created = OffsetDateTime.parse("2022-10-05T05:40:14.727Z");
                                    feature = new Feature() {{
                                        created = OffsetDateTime.parse("2022-04-05T18:42:15.600Z");
                                        description = "magnam";
                                        id = 469407L;
                                        lastUpdate = OffsetDateTime.parse("2022-10-05T18:42:30.610Z");
                                        name = "Rosemary Fahey";
                                    }};
                                    id = 129257L;
                                    lastUpdate = OffsetDateTime.parse("2022-07-01T12:28:26.841Z");
                                }}),
                            }};
                            groupType = new Lookup() {{
                                created = OffsetDateTime.parse("2022-06-10T23:32:47.792Z");
                                description = "amet";
                                descriptionFriendly = "recusandae";
                                displayOrder = 597921L;
                                id = 548503L;
                                lastUpdate = OffsetDateTime.parse("2022-11-01T16:16:29.101Z");
                                lookupType = new LookupType() {{
                                    created = OffsetDateTime.parse("2021-04-28T20:12:59.192Z");
                                    description = "ratione";
                                    id = 958592L;
                                    lastUpdate = OffsetDateTime.parse("2022-03-04T03:14:57.868Z");
                                    type = LookupTypeTypeEnum.RELATIONSHIP_TYPE;
                                }};;
                                value = "quis";
                            }};;
                            id = 920488L;
                            lastImportDate = OffsetDateTime.parse("2022-06-23T06:59:55.331Z");
                            lastUpdate = OffsetDateTime.parse("2021-12-29T11:03:02.386Z");
                            links = new org.openapis.openapi.models.shared.Link[]{{
                                add(new Link() {{
                                    created = OffsetDateTime.parse("2022-07-08T12:40:25.600Z");
                                    displayOrder = 294249;
                                    id = 919018L;
                                    lastUpdate = OffsetDateTime.parse("2021-11-19T00:48:02.054Z");
                                    link = "quisquam";
                                    linkType = new Lookup() {{
                                        created = OffsetDateTime.parse("2020-09-18T16:55:04.907Z");
                                        description = "sunt";
                                        descriptionFriendly = "rem";
                                        displayOrder = 932486L;
                                        id = 824862L;
                                        lastUpdate = OffsetDateTime.parse("2021-08-17T00:29:41.636Z");
                                        lookupType = new LookupType() {{
                                            created = OffsetDateTime.parse("2021-08-09T14:49:06.688Z");
                                            description = "quos";
                                            id = 493774L;
                                            lastUpdate = OffsetDateTime.parse("2022-04-16T13:59:56.328Z");
                                            type = LookupTypeTypeEnum.CODE_STANDARD;
                                        }};
                                        value = "recusandae";
                                    }};
                                    name = "Charlotte Prohaska";
                                }}),
                                add(new Link() {{
                                    created = OffsetDateTime.parse("2022-02-07T15:14:07.392Z");
                                    displayOrder = 817352;
                                    id = 61471L;
                                    lastUpdate = OffsetDateTime.parse("2021-12-10T05:03:02.702Z");
                                    link = "vel";
                                    linkType = new Lookup() {{
                                        created = OffsetDateTime.parse("2022-12-26T23:16:12.919Z");
                                        description = "recusandae";
                                        descriptionFriendly = "voluptatibus";
                                        displayOrder = 292938L;
                                        id = 132531L;
                                        lastUpdate = OffsetDateTime.parse("2021-04-19T11:04:28.882Z");
                                        lookupType = new LookupType() {{
                                            created = OffsetDateTime.parse("2022-03-21T16:06:20.452Z");
                                            description = "iste";
                                            id = 938076L;
                                            lastUpdate = OffsetDateTime.parse("2022-03-24T17:01:43.460Z");
                                            type = LookupTypeTypeEnum.IBD_UCEXTENT;
                                        }};
                                        value = "veniam";
                                    }};
                                    name = "Victoria Zulauf";
                                }}),
                                add(new Link() {{
                                    created = OffsetDateTime.parse("2022-05-22T08:46:37.956Z");
                                    displayOrder = 719575;
                                    id = 768501L;
                                    lastUpdate = OffsetDateTime.parse("2022-12-28T16:27:48.564Z");
                                    link = "deserunt";
                                    linkType = new Lookup() {{
                                        created = OffsetDateTime.parse("2022-10-25T01:49:38.826Z");
                                        description = "perspiciatis";
                                        descriptionFriendly = "accusantium";
                                        displayOrder = 976202L;
                                        id = 580401L;
                                        lastUpdate = OffsetDateTime.parse("2022-07-16T02:59:00.480Z");
                                        lookupType = new LookupType() {{
                                            created = OffsetDateTime.parse("2022-05-27T07:46:49.730Z");
                                            description = "laudantium";
                                            id = 368084L;
                                            lastUpdate = OffsetDateTime.parse("2022-06-17T08:45:19.703Z");
                                            type = LookupTypeTypeEnum.IBD_CROHNSPROXIMALTERMINALILEUM;
                                        }};
                                        value = "culpa";
                                    }};
                                    name = "Clinton Torphy";
                                }}),
                            }};
                            locations = new org.openapis.openapi.models.shared.Location[]{{
                                add(new Location() {{
                                    address = "6690 Trudie Expressway";
                                    created = OffsetDateTime.parse("2022-03-28T18:50:26.041Z");
                                    email = "Jeanne_Mitchell58@yahoo.com";
                                    id = 853532L;
                                    label = "recusandae";
                                    lastUpdate = OffsetDateTime.parse("2022-12-27T13:02:07.981Z");
                                    name = "Lori Rodriguez";
                                    phone = "1-981-557-6511 x377";
                                    web = "facilis";
                                }}),
                            }};
                            name = "Jean Heathcote";
                            parentGroups = new org.openapis.openapi.models.shared.Group[]{{
                                add(new Group() {{}}),
                                add(new Group() {{}}),
                            }};
                            postcode = "42421-4110";
                            sftpUser = "amet";
                            shortName = "sequi";
                            visible = false;
                            visibleToJoin = false;
                        }};;
                        groupCode = "recusandae";
                        identifier = "fugiat";
                        identifiers = new org.openapis.openapi.models.shared.FhirIdentifier[]{{
                            add(new FhirIdentifier() {{
                                id = 24522L;
                                label = "modi";
                                value = "eum";
                            }}),
                            add(new FhirIdentifier() {{
                                id = 699109L;
                                label = "quod";
                                value = "nemo";
                            }}),
                            add(new FhirIdentifier() {{
                                id = 100258L;
                                label = "vel";
                                value = "amet";
                            }}),
                            add(new FhirIdentifier() {{
                                id = 705860L;
                                label = "libero";
                                value = "maxime";
                            }}),
                        }};
                        postcode = "25114-7218";
                        practitioners = new org.openapis.openapi.models.shared.FhirPractitioner[]{{
                            add(new FhirPractitioner() {{
                                address1 = "magni";
                                address2 = "minus";
                                address3 = "minima";
                                address4 = "ipsam";
                                allowInviteGp = false;
                                contacts = new org.openapis.openapi.models.shared.FhirContact[]{{
                                    add(new FhirContact() {{
                                        id = 312617L;
                                        system = "accusantium";
                                        use = "incidunt";
                                        value = "cupiditate";
                                    }}),
                                }};
                                gender = "female";
                                groupCode = "quo";
                                identifier = "quis";
                                inviteDate = OffsetDateTime.parse("2020-11-29T11:27:24.940Z");
                                name = "Chad Ruecker";
                                postcode = "19265-1956";
                                role = "similique";
                            }}),
                        }};
                        surname = "qui";
                    }};;
                    practitioners = new org.openapis.openapi.models.shared.FhirPractitioner[]{{
                        add(new FhirPractitioner() {{
                            address1 = "quam";
                            address2 = "assumenda";
                            address3 = "temporibus";
                            address4 = "porro";
                            allowInviteGp = false;
                            contacts = new org.openapis.openapi.models.shared.FhirContact[]{{
                                add(new FhirContact() {{
                                    id = 575307L;
                                    system = "inventore";
                                    use = "fugit";
                                    value = "earum";
                                }}),
                            }};
                            gender = "male";
                            groupCode = "at";
                            identifier = "debitis";
                            inviteDate = OffsetDateTime.parse("2022-10-01T17:06:50.720Z");
                            name = "Darrin Sawayn";
                            postcode = "46830";
                            role = "architecto";
                        }}),
                        add(new FhirPractitioner() {{
                            address1 = "quis";
                            address2 = "possimus";
                            address3 = "reiciendis";
                            address4 = "est";
                            allowInviteGp = false;
                            contacts = new org.openapis.openapi.models.shared.FhirContact[]{{
                                add(new FhirContact() {{
                                    id = 614001L;
                                    system = "ex";
                                    use = "odit";
                                    value = "voluptatem";
                                }}),
                                add(new FhirContact() {{
                                    id = 377377L;
                                    system = "libero";
                                    use = "vero";
                                    value = "hic";
                                }}),
                            }};
                            gender = "female";
                            groupCode = "quidem";
                            identifier = "aperiam";
                            inviteDate = OffsetDateTime.parse("2022-08-14T11:01:33.503Z");
                            name = "Kyle Cremin MD";
                            postcode = "00095-6671";
                            role = "necessitatibus";
                        }}),
                    }};
                }};;
            }};            

            SavePatientManagementSurgeriesResponse res = sdk.patientManagementController.savePatientManagementSurgeries(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## validatePatientManagement

validatePatientManagement

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ValidatePatientManagementResponse;
import org.openapis.openapi.models.shared.ContactPoint;
import org.openapis.openapi.models.shared.ContactPointType;
import org.openapis.openapi.models.shared.ContactPointTypeValueEnum;
import org.openapis.openapi.models.shared.Feature;
import org.openapis.openapi.models.shared.FhirCondition;
import org.openapis.openapi.models.shared.FhirContact;
import org.openapis.openapi.models.shared.FhirEncounter;
import org.openapis.openapi.models.shared.FhirIdentifier;
import org.openapis.openapi.models.shared.FhirObservation;
import org.openapis.openapi.models.shared.FhirPatient;
import org.openapis.openapi.models.shared.FhirPractitioner;
import org.openapis.openapi.models.shared.FhirProcedure;
import org.openapis.openapi.models.shared.Group;
import org.openapis.openapi.models.shared.GroupFeature;
import org.openapis.openapi.models.shared.Link;
import org.openapis.openapi.models.shared.Location;
import org.openapis.openapi.models.shared.Lookup;
import org.openapis.openapi.models.shared.LookupType;
import org.openapis.openapi.models.shared.LookupTypeTypeEnum;
import org.openapis.openapi.models.shared.PatientManagement;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.PatientManagement req = new PatientManagement() {{
                condition = new FhirCondition() {{
                    asserter = "iste";
                    category = "veritatis";
                    code = "adipisci";
                    date = OffsetDateTime.parse("2022-08-31T02:19:15.189Z");
                    description = "quos";
                    fullDescription = "ea";
                    group = new Group() {{
                        address1 = "fugiat";
                        address2 = "dicta";
                        address3 = "quas";
                        childGroups = new org.openapis.openapi.models.shared.Group[]{{
                            add(new Group() {{}}),
                            add(new Group() {{}}),
                            add(new Group() {{}}),
                            add(new Group() {{}}),
                        }};
                        code = "sint";
                        contactPoints = new org.openapis.openapi.models.shared.ContactPoint[]{{
                            add(new ContactPoint() {{
                                contactPointType = new ContactPointType() {{
                                    description = "sint";
                                    id = 445002L;
                                    lookupType = new LookupType() {{
                                        created = OffsetDateTime.parse("2022-06-27T01:11:13.628Z");
                                        description = "nam";
                                        id = 958595L;
                                        lastUpdate = OffsetDateTime.parse("2021-05-13T19:38:03.738Z");
                                        type = LookupTypeTypeEnum.CODE_STANDARD;
                                    }};
                                    value = ContactPointTypeValueEnum.APPOINTMENT_PHONE;
                                }};
                                content = "asperiores";
                                created = OffsetDateTime.parse("2022-02-24T00:16:09.155Z");
                                id = 410579L;
                                lastUpdate = OffsetDateTime.parse("2022-03-22T12:54:01.199Z");
                            }}),
                            add(new ContactPoint() {{
                                contactPointType = new ContactPointType() {{
                                    description = "deserunt";
                                    id = 519614L;
                                    lookupType = new LookupType() {{
                                        created = OffsetDateTime.parse("2022-05-04T21:18:01.342Z");
                                        description = "repellendus";
                                        id = 566193L;
                                        lastUpdate = OffsetDateTime.parse("2021-07-30T02:30:41.836Z");
                                        type = LookupTypeTypeEnum.FEATURE_TYPE;
                                    }};
                                    value = ContactPointTypeValueEnum.UNIT_WEB_ADDRESS;
                                }};
                                content = "quibusdam";
                                created = OffsetDateTime.parse("2022-11-26T01:33:10.043Z");
                                id = 167089L;
                                lastUpdate = OffsetDateTime.parse("2022-10-04T15:41:42.876Z");
                            }}),
                            add(new ContactPoint() {{
                                contactPointType = new ContactPointType() {{
                                    description = "quis";
                                    id = 200824L;
                                    lookupType = new LookupType() {{
                                        created = OffsetDateTime.parse("2022-07-01T06:53:47.405Z");
                                        description = "quam";
                                        id = 18993L;
                                        lastUpdate = OffsetDateTime.parse("2020-02-10T10:55:52.721Z");
                                        type = LookupTypeTypeEnum.CONTACT_POINT_TYPE;
                                    }};
                                    value = ContactPointTypeValueEnum.UNIT_ENQUIRIES_PHONE;
                                }};
                                content = "quidem";
                                created = OffsetDateTime.parse("2022-10-22T04:16:19.781Z");
                                id = 682054L;
                                lastUpdate = OffsetDateTime.parse("2022-03-12T13:37:18.107Z");
                            }}),
                            add(new ContactPoint() {{
                                contactPointType = new ContactPointType() {{
                                    description = "dolores";
                                    id = 106767L;
                                    lookupType = new LookupType() {{
                                        created = OffsetDateTime.parse("2021-05-04T21:04:45.587Z");
                                        description = "ut";
                                        id = 197907L;
                                        lastUpdate = OffsetDateTime.parse("2022-09-08T07:03:27.630Z");
                                        type = LookupTypeTypeEnum.LINK_TYPE;
                                    }};
                                    value = ContactPointTypeValueEnum.UNIT_WEB_ADDRESS;
                                }};
                                content = "quo";
                                created = OffsetDateTime.parse("2022-11-22T14:34:30.317Z");
                                id = 655271L;
                                lastUpdate = OffsetDateTime.parse("2022-12-29T00:10:30.843Z");
                            }}),
                        }};
                        created = OffsetDateTime.parse("2022-10-12T03:49:49.096Z");
                        fhirResourceId = "eb22d9b3-a70d-494f-aa74-1c57d1fedc20";
                        groupFeatures = new org.openapis.openapi.models.shared.GroupFeature[]{{
                            add(new GroupFeature() {{
                                created = OffsetDateTime.parse("2022-03-03T14:47:30.069Z");
                                feature = new Feature() {{
                                    created = OffsetDateTime.parse("2022-06-12T19:52:17.408Z");
                                    description = "pariatur";
                                    id = 776186L;
                                    lastUpdate = OffsetDateTime.parse("2022-03-23T02:37:06.773Z");
                                    name = "Raymond Langosh";
                                }};
                                id = 479021L;
                                lastUpdate = OffsetDateTime.parse("2022-01-20T23:49:53.261Z");
                            }}),
                            add(new GroupFeature() {{
                                created = OffsetDateTime.parse("2021-03-16T07:01:53.323Z");
                                feature = new Feature() {{
                                    created = OffsetDateTime.parse("2021-09-24T18:43:09.755Z");
                                    description = "natus";
                                    id = 95666L;
                                    lastUpdate = OffsetDateTime.parse("2022-08-06T08:12:33.831Z");
                                    name = "Casey Rice";
                                }};
                                id = 294879L;
                                lastUpdate = OffsetDateTime.parse("2022-09-10T06:20:59.659Z");
                            }}),
                        }};
                        groupType = new Lookup() {{
                            created = OffsetDateTime.parse("2021-02-13T05:37:28.481Z");
                            description = "porro";
                            descriptionFriendly = "blanditiis";
                            displayOrder = 726468L;
                            id = 195869L;
                            lastUpdate = OffsetDateTime.parse("2022-09-17T08:22:41.954Z");
                            lookupType = new LookupType() {{
                                created = OffsetDateTime.parse("2022-01-08T16:00:31.335Z");
                                description = "corporis";
                                id = 779391L;
                                lastUpdate = OffsetDateTime.parse("2022-03-22T17:26:17.426Z");
                                type = LookupTypeTypeEnum.MENU;
                            }};;
                            value = "voluptatibus";
                        }};;
                        id = 886192L;
                        lastImportDate = OffsetDateTime.parse("2022-12-24T07:51:57.350Z");
                        lastUpdate = OffsetDateTime.parse("2022-02-26T16:13:43.953Z");
                        links = new org.openapis.openapi.models.shared.Link[]{{
                            add(new Link() {{
                                created = OffsetDateTime.parse("2022-03-04T01:55:25.756Z");
                                displayOrder = 184285;
                                id = 646629L;
                                lastUpdate = OffsetDateTime.parse("2021-06-17T22:57:52.050Z");
                                link = "laudantium";
                                linkType = new Lookup() {{
                                    created = OffsetDateTime.parse("2022-05-12T03:37:57.216Z");
                                    description = "repudiandae";
                                    descriptionFriendly = "nemo";
                                    displayOrder = 29113L;
                                    id = 798559L;
                                    lastUpdate = OffsetDateTime.parse("2022-07-28T16:41:08.535Z");
                                    lookupType = new LookupType() {{
                                        created = OffsetDateTime.parse("2022-08-12T04:49:35.715Z");
                                        description = "veritatis";
                                        id = 626381L;
                                        lastUpdate = OffsetDateTime.parse("2022-03-01T19:54:10.617Z");
                                        type = LookupTypeTypeEnum.IBD_CROHNSLOCATION;
                                    }};
                                    value = "veritatis";
                                }};
                                name = "Willie Murazik";
                            }}),
                        }};
                        locations = new org.openapis.openapi.models.shared.Location[]{{
                            add(new Location() {{
                                address = "321 Dante Villages";
                                created = OffsetDateTime.parse("2022-01-03T00:12:56.253Z");
                                email = "Garnet.Lueilwitz@yahoo.com";
                                id = 145333L;
                                label = "assumenda";
                                lastUpdate = OffsetDateTime.parse("2022-01-18T14:56:47.977Z");
                                name = "Suzanne Schmitt";
                                phone = "263.588.6768 x61686";
                                web = "iusto";
                            }}),
                            add(new Location() {{
                                address = "0507 Hills Hills";
                                created = OffsetDateTime.parse("2022-12-06T03:35:33.312Z");
                                email = "Hugh.Durgan21@yahoo.com";
                                id = 55015L;
                                label = "nam";
                                lastUpdate = OffsetDateTime.parse("2022-07-29T09:32:13.091Z");
                                name = "Lorraine Botsford";
                                phone = "1-332-630-1671 x3116";
                                web = "perspiciatis";
                            }}),
                            add(new Location() {{
                                address = "190 Carter Freeway";
                                created = OffsetDateTime.parse("2022-07-22T13:35:58.412Z");
                                email = "Keenan0@hotmail.com";
                                id = 721691L;
                                label = "minus";
                                lastUpdate = OffsetDateTime.parse("2022-08-31T11:22:29.570Z");
                                name = "Dr. Omar Reinger";
                                phone = "(298) 911-6528 x109";
                                web = "quo";
                            }}),
                        }};
                        name = "Steven Toy";
                        parentGroups = new org.openapis.openapi.models.shared.Group[]{{
                            add(new Group() {{}}),
                        }};
                        postcode = "19233-9530";
                        sftpUser = "minima";
                        shortName = "nisi";
                        visible = false;
                        visibleToJoin = false;
                    }};;
                    id = 995733L;
                    identifier = "sapiente";
                    links = new org.openapis.openapi.models.shared.Link[]{{
                        add(new Link() {{
                            created = OffsetDateTime.parse("2022-10-09T13:18:11.153Z");
                            displayOrder = 975410;
                            id = 837202L;
                            lastUpdate = OffsetDateTime.parse("2021-12-22T00:12:24.493Z");
                            link = "tempora";
                            linkType = new Lookup() {{
                                created = OffsetDateTime.parse("2020-07-23T05:57:34.865Z");
                                description = "illum";
                                descriptionFriendly = "exercitationem";
                                displayOrder = 904920L;
                                id = 645516L;
                                lastUpdate = OffsetDateTime.parse("2022-05-08T02:02:55.749Z");
                                lookupType = new LookupType() {{
                                    created = OffsetDateTime.parse("2022-10-21T05:06:53.487Z");
                                    description = "sequi";
                                    id = 579068L;
                                    lastUpdate = OffsetDateTime.parse("2021-04-19T23:45:43.519Z");
                                    type = LookupTypeTypeEnum.IBD_CROHNSPERIANAL;
                                }};
                                value = "sapiente";
                            }};
                            name = "Ray Dach";
                        }}),
                        add(new Link() {{
                            created = OffsetDateTime.parse("2021-09-10T11:02:01.572Z");
                            displayOrder = 211669;
                            id = 208224L;
                            lastUpdate = OffsetDateTime.parse("2021-11-23T08:06:00.390Z");
                            link = "saepe";
                            linkType = new Lookup() {{
                                created = OffsetDateTime.parse("2022-02-19T07:35:30.479Z");
                                description = "deleniti";
                                descriptionFriendly = "aut";
                                displayOrder = 200109L;
                                id = 624164L;
                                lastUpdate = OffsetDateTime.parse("2021-02-04T05:48:21.808Z");
                                lookupType = new LookupType() {{
                                    created = OffsetDateTime.parse("2022-01-04T06:03:30.189Z");
                                    description = "iste";
                                    id = 688512L;
                                    lastUpdate = OffsetDateTime.parse("2022-06-17T23:46:51.534Z");
                                    type = LookupTypeTypeEnum.IBD_CROHNSPROXIMALTERMINALILEUM;
                                }};
                                value = "qui";
                            }};
                            name = "Pauline Will";
                        }}),
                        add(new Link() {{
                            created = OffsetDateTime.parse("2022-05-24T07:07:06.299Z");
                            displayOrder = 14168;
                            id = 215813L;
                            lastUpdate = OffsetDateTime.parse("2021-04-12T02:56:12.949Z");
                            link = "dolorum";
                            linkType = new Lookup() {{
                                created = OffsetDateTime.parse("2020-07-10T19:34:43.413Z");
                                description = "velit";
                                descriptionFriendly = "voluptatum";
                                displayOrder = 911049L;
                                id = 842370L;
                                lastUpdate = OffsetDateTime.parse("2022-03-05T19:09:19.403Z");
                                lookupType = new LookupType() {{
                                    created = OffsetDateTime.parse("2021-10-31T08:36:07.417Z");
                                    description = "esse";
                                    id = 90809L;
                                    lastUpdate = OffsetDateTime.parse("2020-09-17T13:34:20.713Z");
                                    type = LookupTypeTypeEnum.NEWS_TYPE;
                                }};
                                value = "delectus";
                            }};
                            name = "Meghan Farrell";
                        }}),
                        add(new Link() {{
                            created = OffsetDateTime.parse("2022-09-01T00:36:14.380Z");
                            displayOrder = 592191;
                            id = 160305L;
                            lastUpdate = OffsetDateTime.parse("2022-03-12T20:55:18.934Z");
                            link = "provident";
                            linkType = new Lookup() {{
                                created = OffsetDateTime.parse("2022-03-02T16:44:32.966Z");
                                description = "ab";
                                descriptionFriendly = "cum";
                                displayOrder = 297519L;
                                id = 615698L;
                                lastUpdate = OffsetDateTime.parse("2022-11-17T23:59:38.850Z");
                                lookupType = new LookupType() {{
                                    created = OffsetDateTime.parse("2022-06-25T18:37:10.473Z");
                                    description = "harum";
                                    id = 845115L;
                                    lastUpdate = OffsetDateTime.parse("2021-10-26T05:15:18.876Z");
                                    type = LookupTypeTypeEnum.IBD_EGIMCOMPLICATION;
                                }};
                                value = "totam";
                            }};
                            name = "Mike D'Amore";
                        }}),
                    }};
                    notes = "occaecati";
                    severity = "pariatur";
                    status = "similique";
                }};;
                encounters = new org.openapis.openapi.models.shared.FhirEncounter[]{{
                    add(new FhirEncounter() {{
                        date = OffsetDateTime.parse("2022-02-08T05:20:27.698Z");
                        encounterType = "nobis";
                        group = new Group() {{
                            address1 = "nisi";
                            address2 = "natus";
                            address3 = "eaque";
                            childGroups = new org.openapis.openapi.models.shared.Group[]{{
                                add(new Group() {{}}),
                            }};
                            code = "facilis";
                            contactPoints = new org.openapis.openapi.models.shared.ContactPoint[]{{
                                add(new ContactPoint() {{
                                    contactPointType = new ContactPointType() {{
                                        description = "atque";
                                        id = 74814L;
                                        lookupType = new LookupType() {{
                                            created = OffsetDateTime.parse("2021-10-26T17:11:12.013Z");
                                            description = "incidunt";
                                            id = 979407L;
                                            lastUpdate = OffsetDateTime.parse("2022-09-25T10:54:54.204Z");
                                            type = LookupTypeTypeEnum.CODE_TYPE;
                                        }};
                                        value = ContactPointTypeValueEnum.PV_ADMIN_PHONE;
                                    }};
                                    content = "autem";
                                    created = OffsetDateTime.parse("2022-05-07T11:24:54.622Z");
                                    id = 558910L;
                                    lastUpdate = OffsetDateTime.parse("2022-11-14T01:16:44.518Z");
                                }}),
                                add(new ContactPoint() {{
                                    contactPointType = new ContactPointType() {{
                                        description = "id";
                                        id = 993942L;
                                        lookupType = new LookupType() {{
                                            created = OffsetDateTime.parse("2021-05-29T08:52:26.795Z");
                                            description = "commodi";
                                            id = 617374L;
                                            lastUpdate = OffsetDateTime.parse("2022-03-10T09:23:41.826Z");
                                            type = LookupTypeTypeEnum.NEWS_TYPE;
                                        }};
                                        value = ContactPointTypeValueEnum.PV_ADMIN_NAME;
                                    }};
                                    content = "quia";
                                    created = OffsetDateTime.parse("2021-04-03T12:07:14.664Z");
                                    id = 983596L;
                                    lastUpdate = OffsetDateTime.parse("2021-09-24T01:28:29.157Z");
                                }}),
                                add(new ContactPoint() {{
                                    contactPointType = new ContactPointType() {{
                                        description = "tenetur";
                                        id = 562760L;
                                        lookupType = new LookupType() {{
                                            created = OffsetDateTime.parse("2022-07-20T06:03:20.395Z");
                                            description = "aliquid";
                                            id = 642652L;
                                            lastUpdate = OffsetDateTime.parse("2022-05-06T10:57:23.210Z");
                                            type = LookupTypeTypeEnum.IBD_SMOKINGSTATUS;
                                        }};
                                        value = ContactPointTypeValueEnum.UNIT_ENQUIRIES_PHONE;
                                    }};
                                    content = "possimus";
                                    created = OffsetDateTime.parse("2020-09-04T10:03:13.869Z");
                                    id = 354161L;
                                    lastUpdate = OffsetDateTime.parse("2022-03-10T21:53:10.873Z");
                                }}),
                            }};
                            created = OffsetDateTime.parse("2021-09-24T05:30:43.582Z");
                            fhirResourceId = "3512c737-8489-4307-90a0-0e966ec736d4";
                            groupFeatures = new org.openapis.openapi.models.shared.GroupFeature[]{{
                                add(new GroupFeature() {{
                                    created = OffsetDateTime.parse("2022-05-24T15:18:35.538Z");
                                    feature = new Feature() {{
                                        created = OffsetDateTime.parse("2022-10-20T17:09:38.349Z");
                                        description = "omnis";
                                        id = 547191L;
                                        lastUpdate = OffsetDateTime.parse("2021-07-31T07:27:36.168Z");
                                        name = "Curtis Rosenbaum";
                                    }};
                                    id = 220853L;
                                    lastUpdate = OffsetDateTime.parse("2021-12-25T12:52:43.875Z");
                                }}),
                            }};
                            groupType = new Lookup() {{
                                created = OffsetDateTime.parse("2020-06-06T17:44:39.339Z");
                                description = "ipsum";
                                descriptionFriendly = "pariatur";
                                displayOrder = 227669L;
                                id = 647279L;
                                lastUpdate = OffsetDateTime.parse("2022-01-26T07:31:19.703Z");
                                lookupType = new LookupType() {{
                                    created = OffsetDateTime.parse("2020-12-29T00:25:34.871Z");
                                    description = "non";
                                    id = 810281L;
                                    lastUpdate = OffsetDateTime.parse("2022-03-18T02:33:40.685Z");
                                    type = LookupTypeTypeEnum.IBD_CROHNSPROXIMALTERMINALILEUM;
                                }};
                                value = "corrupti";
                            }};
                            id = 398432L;
                            lastImportDate = OffsetDateTime.parse("2022-05-18T05:39:49.795Z");
                            lastUpdate = OffsetDateTime.parse("2022-01-03T14:32:44.330Z");
                            links = new org.openapis.openapi.models.shared.Link[]{{
                                add(new Link() {{
                                    created = OffsetDateTime.parse("2020-02-05T04:39:55.051Z");
                                    displayOrder = 845889;
                                    id = 329700L;
                                    lastUpdate = OffsetDateTime.parse("2021-09-30T19:35:57.008Z");
                                    link = "iste";
                                    linkType = new Lookup() {{
                                        created = OffsetDateTime.parse("2021-10-10T19:31:35.089Z");
                                        description = "distinctio";
                                        descriptionFriendly = "in";
                                        displayOrder = 161786L;
                                        id = 27614L;
                                        lastUpdate = OffsetDateTime.parse("2022-09-13T19:10:51.768Z");
                                        lookupType = new LookupType() {{
                                            created = OffsetDateTime.parse("2022-12-08T18:00:27.702Z");
                                            description = "ipsa";
                                            id = 437785L;
                                            lastUpdate = OffsetDateTime.parse("2022-02-24T22:30:32.992Z");
                                            type = LookupTypeTypeEnum.MENU;
                                        }};
                                        value = "perspiciatis";
                                    }};
                                    name = "Pablo Lehner";
                                }}),
                            }};
                            locations = new org.openapis.openapi.models.shared.Location[]{{
                                add(new Location() {{
                                    address = "1980 Moses Mount";
                                    created = OffsetDateTime.parse("2022-09-19T23:25:35.238Z");
                                    email = "Bradford.Marquardt@hotmail.com";
                                    id = 330353L;
                                    label = "quaerat";
                                    lastUpdate = OffsetDateTime.parse("2022-02-11T00:26:57.177Z");
                                    name = "Derrick Halvorson";
                                    phone = "253-963-6017 x47316";
                                    web = "facere";
                                }}),
                                add(new Location() {{
                                    address = "86645 Lloyd Roads";
                                    created = OffsetDateTime.parse("2022-08-16T19:49:09.105Z");
                                    email = "Camylle91@hotmail.com";
                                    id = 861301L;
                                    label = "tenetur";
                                    lastUpdate = OffsetDateTime.parse("2022-10-12T16:22:10.179Z");
                                    name = "Jack Buckridge Sr.";
                                    phone = "(351) 784-9833 x304";
                                    web = "vel";
                                }}),
                            }};
                            name = "Christine Sauer";
                            parentGroups = new org.openapis.openapi.models.shared.Group[]{{
                                add(new Group() {{}}),
                                add(new Group() {{}}),
                                add(new Group() {{}}),
                                add(new Group() {{}}),
                            }};
                            postcode = "84253";
                            sftpUser = "nostrum";
                            shortName = "eum";
                            visible = false;
                            visibleToJoin = false;
                        }};
                        id = 268168L;
                        identifier = "cumque";
                        links = new org.openapis.openapi.models.shared.Link[]{{
                            add(new Link() {{
                                created = OffsetDateTime.parse("2022-04-27T06:13:08.358Z");
                                displayOrder = 38622;
                                id = 442212L;
                                lastUpdate = OffsetDateTime.parse("2022-11-29T21:54:55.402Z");
                                link = "similique";
                                linkType = new Lookup() {{
                                    created = OffsetDateTime.parse("2022-03-04T09:08:34.830Z");
                                    description = "dicta";
                                    descriptionFriendly = "illum";
                                    displayOrder = 133452L;
                                    id = 284058L;
                                    lastUpdate = OffsetDateTime.parse("2022-01-08T20:18:15.796Z");
                                    lookupType = new LookupType() {{
                                        created = OffsetDateTime.parse("2020-11-18T01:40:16.126Z");
                                        description = "libero";
                                        id = 545201L;
                                        lastUpdate = OffsetDateTime.parse("2022-01-19T02:29:47.128Z");
                                        type = LookupTypeTypeEnum.FEATURE_TYPE;
                                    }};
                                    value = "sed";
                                }};
                                name = "Dave Metz";
                            }}),
                        }};
                        observations = new org.openapis.openapi.models.shared.FhirObservation[]{{
                            add(new FhirObservation() {{
                                applies = OffsetDateTime.parse("2022-06-17T22:33:29.067Z");
                                bodySite = "sunt";
                                comments = "dolores";
                                comparator = "placeat";
                                diagram = "nam";
                                group = new Group() {{
                                    address1 = "exercitationem";
                                    address2 = "architecto";
                                    address3 = "consequuntur";
                                    childGroups = new org.openapis.openapi.models.shared.Group[]{{
                                        add(new Group() {{}}),
                                        add(new Group() {{}}),
                                        add(new Group() {{}}),
                                        add(new Group() {{}}),
                                    }};
                                    code = "deleniti";
                                    contactPoints = new org.openapis.openapi.models.shared.ContactPoint[]{{
                                        add(new ContactPoint() {{
                                            contactPointType = new ContactPointType() {{
                                                description = "voluptatum";
                                                id = 132662L;
                                                lookupType = new LookupType() {{
                                                    created = OffsetDateTime.parse("2022-12-18T10:01:51.775Z");
                                                    description = "nobis";
                                                    id = 993378L;
                                                    lastUpdate = OffsetDateTime.parse("2022-09-22T20:32:00.922Z");
                                                    type = LookupTypeTypeEnum.GENDER;
                                                }};
                                                value = ContactPointTypeValueEnum.OUT_OF_HOURS_INFO;
                                            }};
                                            content = "corrupti";
                                            created = OffsetDateTime.parse("2021-02-10T09:01:58.870Z");
                                            id = 503015L;
                                            lastUpdate = OffsetDateTime.parse("2022-09-23T06:41:15.155Z");
                                        }}),
                                        add(new ContactPoint() {{
                                            contactPointType = new ContactPointType() {{
                                                description = "harum";
                                                id = 950706L;
                                                lookupType = new LookupType() {{
                                                    created = OffsetDateTime.parse("2022-04-08T11:49:55.826Z");
                                                    description = "quod";
                                                    id = 518728L;
                                                    lastUpdate = OffsetDateTime.parse("2022-08-22T07:38:32.003Z");
                                                    type = LookupTypeTypeEnum.LINK_TYPE;
                                                }};
                                                value = ContactPointTypeValueEnum.TRUST_WEB_ADDRESS;
                                            }};
                                            content = "perferendis";
                                            created = OffsetDateTime.parse("2022-02-21T05:52:29.045Z");
                                            id = 362259L;
                                            lastUpdate = OffsetDateTime.parse("2021-04-29T20:07:58.545Z");
                                        }}),
                                    }};
                                    created = OffsetDateTime.parse("2022-12-04T03:13:35.532Z");
                                    fhirResourceId = "d0081090-f670-4667-bf3a-681c5768dce7";
                                    groupFeatures = new org.openapis.openapi.models.shared.GroupFeature[]{{
                                        add(new GroupFeature() {{
                                            created = OffsetDateTime.parse("2022-09-16T04:27:19.473Z");
                                            feature = new Feature() {{
                                                created = OffsetDateTime.parse("2022-06-08T05:17:59.237Z");
                                                description = "deserunt";
                                                id = 137414L;
                                                lastUpdate = OffsetDateTime.parse("2022-08-26T08:31:15.881Z");
                                                name = "Timothy Labadie Sr.";
                                            }};
                                            id = 271098L;
                                            lastUpdate = OffsetDateTime.parse("2021-11-01T06:53:12.552Z");
                                        }}),
                                        add(new GroupFeature() {{
                                            created = OffsetDateTime.parse("2022-05-05T09:02:12.649Z");
                                            feature = new Feature() {{
                                                created = OffsetDateTime.parse("2021-11-10T01:14:17.656Z");
                                                description = "sequi";
                                                id = 893422L;
                                                lastUpdate = OffsetDateTime.parse("2022-05-09T02:53:40.059Z");
                                                name = "Melvin Stracke";
                                            }};
                                            id = 840664L;
                                            lastUpdate = OffsetDateTime.parse("2021-01-30T21:19:32.520Z");
                                        }}),
                                    }};
                                    groupType = new Lookup() {{
                                        created = OffsetDateTime.parse("2022-10-03T22:51:46.877Z");
                                        description = "vero";
                                        descriptionFriendly = "placeat";
                                        displayOrder = 867308L;
                                        id = 425868L;
                                        lastUpdate = OffsetDateTime.parse("2022-09-20T19:30:08.436Z");
                                        lookupType = new LookupType() {{
                                            created = OffsetDateTime.parse("2022-07-27T11:20:25.281Z");
                                            description = "itaque";
                                            id = 252323L;
                                            lastUpdate = OffsetDateTime.parse("2022-02-01T12:42:49.487Z");
                                            type = LookupTypeTypeEnum.IBD_CROHNSPERIANAL;
                                        }};
                                        value = "natus";
                                    }};
                                    id = 559765L;
                                    lastImportDate = OffsetDateTime.parse("2022-03-12T15:06:22.784Z");
                                    lastUpdate = OffsetDateTime.parse("2020-01-25T15:14:38.390Z");
                                    links = new org.openapis.openapi.models.shared.Link[]{{
                                        add(new Link() {{
                                            created = OffsetDateTime.parse("2022-02-08T20:59:15.988Z");
                                            displayOrder = 311450;
                                            id = 344719L;
                                            lastUpdate = OffsetDateTime.parse("2021-12-18T18:36:43.695Z");
                                            link = "omnis";
                                            linkType = new Lookup() {{
                                                created = OffsetDateTime.parse("2022-08-29T01:57:57.624Z");
                                                description = "facere";
                                                descriptionFriendly = "aliquam";
                                                displayOrder = 110337L;
                                                id = 214506L;
                                                lastUpdate = OffsetDateTime.parse("2022-10-07T01:22:33.743Z");
                                                lookupType = new LookupType() {{
                                                    created = OffsetDateTime.parse("2022-05-17T14:46:20.311Z");
                                                    description = "numquam";
                                                    id = 505694L;
                                                    lastUpdate = OffsetDateTime.parse("2022-10-07T06:43:39.553Z");
                                                    type = LookupTypeTypeEnum.ROLE;
                                                }};
                                                value = "ipsa";
                                            }};
                                            name = "Thomas Kessler";
                                        }}),
                                    }};
                                    locations = new org.openapis.openapi.models.shared.Location[]{{
                                        add(new Location() {{
                                            address = "2705 Marta Track";
                                            created = OffsetDateTime.parse("2022-10-04T15:32:48.639Z");
                                            email = "Velma25@gmail.com";
                                            id = 253261L;
                                            label = "excepturi";
                                            lastUpdate = OffsetDateTime.parse("2021-05-28T12:47:09.482Z");
                                            name = "Marta Gleichner";
                                            phone = "1-298-485-0177";
                                            web = "sapiente";
                                        }}),
                                    }};
                                    name = "Julio Gutkowski";
                                    parentGroups = new org.openapis.openapi.models.shared.Group[]{{
                                        add(new Group() {{}}),
                                        add(new Group() {{}}),
                                        add(new Group() {{}}),
                                    }};
                                    postcode = "23614-9469";
                                    sftpUser = "consequuntur";
                                    shortName = "quod";
                                    visible = false;
                                    visibleToJoin = false;
                                }};
                                id = 581420L;
                                identifier = "earum";
                                location = "eum";
                                name = "Scott Bauch";
                                temporaryUuid = "temporibus";
                                units = "quidem";
                                value = "neque";
                            }}),
                            add(new FhirObservation() {{
                                applies = OffsetDateTime.parse("2021-05-01T20:18:49.926Z");
                                bodySite = "tempora";
                                comments = "quisquam";
                                comparator = "vel";
                                diagram = "cum";
                                group = new Group() {{
                                    address1 = "doloremque";
                                    address2 = "adipisci";
                                    address3 = "quasi";
                                    childGroups = new org.openapis.openapi.models.shared.Group[]{{
                                        add(new Group() {{}}),
                                    }};
                                    code = "molestias";
                                    contactPoints = new org.openapis.openapi.models.shared.ContactPoint[]{{
                                        add(new ContactPoint() {{
                                            contactPointType = new ContactPointType() {{
                                                description = "occaecati";
                                                id = 787042L;
                                                lookupType = new LookupType() {{
                                                    created = OffsetDateTime.parse("2022-10-21T23:41:05.137Z");
                                                    description = "in";
                                                    id = 264002L;
                                                    lastUpdate = OffsetDateTime.parse("2022-10-03T23:09:44.616Z");
                                                    type = LookupTypeTypeEnum.GROUP;
                                                }};
                                                value = ContactPointTypeValueEnum.UNIT_ENQUIRIES_PHONE;
                                            }};
                                            content = "odit";
                                            created = OffsetDateTime.parse("2021-10-02T06:15:46.087Z");
                                            id = 278751L;
                                            lastUpdate = OffsetDateTime.parse("2022-06-16T11:08:23.366Z");
                                        }}),
                                        add(new ContactPoint() {{
                                            contactPointType = new ContactPointType() {{
                                                description = "mollitia";
                                                id = 718112L;
                                                lookupType = new LookupType() {{
                                                    created = OffsetDateTime.parse("2022-01-23T17:51:51.515Z");
                                                    description = "possimus";
                                                    id = 364287L;
                                                    lastUpdate = OffsetDateTime.parse("2022-07-08T14:22:55.798Z");
                                                    type = LookupTypeTypeEnum.MENU;
                                                }};
                                                value = ContactPointTypeValueEnum.OUT_OF_HOURS_INFO;
                                            }};
                                            content = "unde";
                                            created = OffsetDateTime.parse("2022-04-26T06:56:53.920Z");
                                            id = 174960L;
                                            lastUpdate = OffsetDateTime.parse("2022-10-18T02:52:56.329Z");
                                        }}),
                                        add(new ContactPoint() {{
                                            contactPointType = new ContactPointType() {{
                                                description = "enim";
                                                id = 53599L;
                                                lookupType = new LookupType() {{
                                                    created = OffsetDateTime.parse("2022-06-17T17:10:05.177Z");
                                                    description = "eum";
                                                    id = 473328L;
                                                    lastUpdate = OffsetDateTime.parse("2022-09-11T23:12:37.954Z");
                                                    type = LookupTypeTypeEnum.CODE_TYPE;
                                                }};
                                                value = ContactPointTypeValueEnum.PV_ADMIN_EMAIL;
                                            }};
                                            content = "blanditiis";
                                            created = OffsetDateTime.parse("2021-06-03T21:29:32.466Z");
                                            id = 930874L;
                                            lastUpdate = OffsetDateTime.parse("2022-01-28T22:10:05.183Z");
                                        }}),
                                        add(new ContactPoint() {{
                                            contactPointType = new ContactPointType() {{
                                                description = "iste";
                                                id = 622268L;
                                                lookupType = new LookupType() {{
                                                    created = OffsetDateTime.parse("2022-08-20T09:01:55.566Z");
                                                    description = "unde";
                                                    id = 257873L;
                                                    lastUpdate = OffsetDateTime.parse("2021-03-07T09:32:36.870Z");
                                                    type = LookupTypeTypeEnum.FEATURE_TYPE;
                                                }};
                                                value = ContactPointTypeValueEnum.UNIT_ENQUIRIES_EMAIL;
                                            }};
                                            content = "ducimus";
                                            created = OffsetDateTime.parse("2022-03-24T11:17:46.718Z");
                                            id = 58606L;
                                            lastUpdate = OffsetDateTime.parse("2022-08-24T23:08:39.586Z");
                                        }}),
                                    }};
                                    created = OffsetDateTime.parse("2022-01-17T14:13:12.964Z");
                                    fhirResourceId = "e3b4b4db-8b77-48eb-b6e1-d2cf502bafb2";
                                    groupFeatures = new org.openapis.openapi.models.shared.GroupFeature[]{{
                                        add(new GroupFeature() {{
                                            created = OffsetDateTime.parse("2021-05-19T05:35:47.489Z");
                                            feature = new Feature() {{
                                                created = OffsetDateTime.parse("2022-08-08T04:08:45.692Z");
                                                description = "adipisci";
                                                id = 373203L;
                                                lastUpdate = OffsetDateTime.parse("2022-01-20T04:57:22.248Z");
                                                name = "Andre Heidenreich";
                                            }};
                                            id = 1914L;
                                            lastUpdate = OffsetDateTime.parse("2022-06-14T05:25:12.650Z");
                                        }}),
                                        add(new GroupFeature() {{
                                            created = OffsetDateTime.parse("2022-05-01T01:22:18.654Z");
                                            feature = new Feature() {{
                                                created = OffsetDateTime.parse("2021-04-12T20:25:25.525Z");
                                                description = "enim";
                                                id = 86220L;
                                                lastUpdate = OffsetDateTime.parse("2022-10-31T03:54:06.792Z");
                                                name = "Philip Armstrong";
                                            }};
                                            id = 645829L;
                                            lastUpdate = OffsetDateTime.parse("2022-02-20T09:10:26.249Z");
                                        }}),
                                        add(new GroupFeature() {{
                                            created = OffsetDateTime.parse("2022-09-12T22:16:35.904Z");
                                            feature = new Feature() {{
                                                created = OffsetDateTime.parse("2021-11-02T23:45:51.264Z");
                                                description = "possimus";
                                                id = 453198L;
                                                lastUpdate = OffsetDateTime.parse("2022-01-28T13:03:26.541Z");
                                                name = "Rick Kuhlman";
                                            }};
                                            id = 84451L;
                                            lastUpdate = OffsetDateTime.parse("2022-04-25T12:58:42.756Z");
                                        }}),
                                        add(new GroupFeature() {{
                                            created = OffsetDateTime.parse("2022-10-28T07:17:27.489Z");
                                            feature = new Feature() {{
                                                created = OffsetDateTime.parse("2022-02-24T09:19:26.268Z");
                                                description = "rerum";
                                                id = 587248L;
                                                lastUpdate = OffsetDateTime.parse("2022-09-15T19:04:48.516Z");
                                                name = "Katrina Grimes";
                                            }};
                                            id = 255602L;
                                            lastUpdate = OffsetDateTime.parse("2022-06-14T18:16:18.273Z");
                                        }}),
                                    }};
                                    groupType = new Lookup() {{
                                        created = OffsetDateTime.parse("2022-01-04T23:50:13.071Z");
                                        description = "veniam";
                                        descriptionFriendly = "cumque";
                                        displayOrder = 510438L;
                                        id = 285256L;
                                        lastUpdate = OffsetDateTime.parse("2022-07-01T22:32:46.195Z");
                                        lookupType = new LookupType() {{
                                            created = OffsetDateTime.parse("2022-08-05T18:49:17.602Z");
                                            description = "tempore";
                                            id = 525461L;
                                            lastUpdate = OffsetDateTime.parse("2022-04-23T14:01:53.780Z");
                                            type = LookupTypeTypeEnum.FEATURE_TYPE;
                                        }};
                                        value = "quisquam";
                                    }};
                                    id = 858421L;
                                    lastImportDate = OffsetDateTime.parse("2021-10-18T03:18:40.685Z");
                                    lastUpdate = OffsetDateTime.parse("2022-11-19T16:58:37.653Z");
                                    links = new org.openapis.openapi.models.shared.Link[]{{
                                        add(new Link() {{
                                            created = OffsetDateTime.parse("2022-12-15T15:58:08.177Z");
                                            displayOrder = 279972;
                                            id = 299662L;
                                            lastUpdate = OffsetDateTime.parse("2021-02-12T13:15:25.082Z");
                                            link = "error";
                                            linkType = new Lookup() {{
                                                created = OffsetDateTime.parse("2020-02-11T23:32:43.703Z");
                                                description = "dicta";
                                                descriptionFriendly = "ratione";
                                                displayOrder = 964640L;
                                                id = 284172L;
                                                lastUpdate = OffsetDateTime.parse("2020-03-16T05:15:46.333Z");
                                                lookupType = new LookupType() {{
                                                    created = OffsetDateTime.parse("2020-11-05T11:15:44.935Z");
                                                    description = "recusandae";
                                                    id = 449331L;
                                                    lastUpdate = OffsetDateTime.parse("2021-07-13T14:46:12.099Z");
                                                    type = LookupTypeTypeEnum.LINK_TYPE;
                                                }};
                                                value = "commodi";
                                            }};
                                            name = "Terri Maggio";
                                        }}),
                                        add(new Link() {{
                                            created = OffsetDateTime.parse("2021-11-15T05:32:41.625Z");
                                            displayOrder = 262664;
                                            id = 898366L;
                                            lastUpdate = OffsetDateTime.parse("2022-02-06T23:07:05.850Z");
                                            link = "aliquid";
                                            linkType = new Lookup() {{
                                                created = OffsetDateTime.parse("2022-02-23T09:24:13.383Z");
                                                description = "corporis";
                                                descriptionFriendly = "impedit";
                                                displayOrder = 445732L;
                                                id = 147933L;
                                                lastUpdate = OffsetDateTime.parse("2022-05-30T06:02:03.424Z");
                                                lookupType = new LookupType() {{
                                                    created = OffsetDateTime.parse("2022-04-15T11:37:55.490Z");
                                                    description = "quam";
                                                    id = 514441L;
                                                    lastUpdate = OffsetDateTime.parse("2022-11-20T09:49:17.590Z");
                                                    type = LookupTypeTypeEnum.RELATIONSHIP_TYPE;
                                                }};
                                                value = "blanditiis";
                                            }};
                                            name = "Andre Sporer";
                                        }}),
                                    }};
                                    locations = new org.openapis.openapi.models.shared.Location[]{{
                                        add(new Location() {{
                                            address = "342 Myah Expressway";
                                            created = OffsetDateTime.parse("2022-04-16T11:36:09.485Z");
                                            email = "Alessia.Wuckert@hotmail.com";
                                            id = 27979L;
                                            label = "placeat";
                                            lastUpdate = OffsetDateTime.parse("2022-10-31T13:05:54.663Z");
                                            name = "Israel McLaughlin";
                                            phone = "421-339-4374 x5404";
                                            web = "nostrum";
                                        }}),
                                        add(new Location() {{
                                            address = "099 Kautzer Ville";
                                            created = OffsetDateTime.parse("2022-08-14T23:24:33.322Z");
                                            email = "Kendall.Abernathy71@hotmail.com";
                                            id = 536202L;
                                            label = "eligendi";
                                            lastUpdate = OffsetDateTime.parse("2022-05-02T19:12:36.302Z");
                                            name = "Sheldon Buckridge";
                                            phone = "742-692-9944 x110";
                                            web = "possimus";
                                        }}),
                                        add(new Location() {{
                                            address = "93335 McCullough Mountains";
                                            created = OffsetDateTime.parse("2021-09-07T12:29:48.905Z");
                                            email = "Brown72@gmail.com";
                                            id = 761165L;
                                            label = "accusantium";
                                            lastUpdate = OffsetDateTime.parse("2021-04-20T05:28:08.982Z");
                                            name = "Helen Lehner";
                                            phone = "(866) 902-1884 x8668";
                                            web = "occaecati";
                                        }}),
                                    }};
                                    name = "Edwin Schinner";
                                    parentGroups = new org.openapis.openapi.models.shared.Group[]{{
                                        add(new Group() {{}}),
                                    }};
                                    postcode = "99590-3895";
                                    sftpUser = "ipsa";
                                    shortName = "amet";
                                    visible = false;
                                    visibleToJoin = false;
                                }};
                                id = 616403L;
                                identifier = "aperiam";
                                location = "ducimus";
                                name = "Vincent Kunze";
                                temporaryUuid = "ab";
                                units = "sint";
                                value = "quos";
                            }}),
                            add(new FhirObservation() {{
                                applies = OffsetDateTime.parse("2022-02-23T02:52:57.734Z");
                                bodySite = "eius";
                                comments = "odit";
                                comparator = "recusandae";
                                diagram = "minima";
                                group = new Group() {{
                                    address1 = "aliquam";
                                    address2 = "similique";
                                    address3 = "voluptatum";
                                    childGroups = new org.openapis.openapi.models.shared.Group[]{{
                                        add(new Group() {{}}),
                                        add(new Group() {{}}),
                                    }};
                                    code = "dolore";
                                    contactPoints = new org.openapis.openapi.models.shared.ContactPoint[]{{
                                        add(new ContactPoint() {{
                                            contactPointType = new ContactPointType() {{
                                                description = "commodi";
                                                id = 338451L;
                                                lookupType = new LookupType() {{
                                                    created = OffsetDateTime.parse("2022-01-13T15:37:23.994Z");
                                                    description = "optio";
                                                    id = 373196L;
                                                    lastUpdate = OffsetDateTime.parse("2022-11-09T08:23:03.941Z");
                                                    type = LookupTypeTypeEnum.CODE_TYPE;
                                                }};
                                                value = ContactPointTypeValueEnum.TRUST_WEB_ADDRESS;
                                            }};
                                            content = "maxime";
                                            created = OffsetDateTime.parse("2022-09-26T09:29:33.100Z");
                                            id = 467657L;
                                            lastUpdate = OffsetDateTime.parse("2022-02-26T10:15:41.349Z");
                                        }}),
                                        add(new ContactPoint() {{
                                            contactPointType = new ContactPointType() {{
                                                description = "veniam";
                                                id = 90551L;
                                                lookupType = new LookupType() {{
                                                    created = OffsetDateTime.parse("2021-09-07T03:07:45.077Z");
                                                    description = "mollitia";
                                                    id = 420223L;
                                                    lastUpdate = OffsetDateTime.parse("2020-05-21T20:06:24.358Z");
                                                    type = LookupTypeTypeEnum.IBD_FAMILYHISTORY;
                                                }};
                                                value = ContactPointTypeValueEnum.PV_ADMIN_PHONE;
                                            }};
                                            content = "laborum";
                                            created = OffsetDateTime.parse("2021-04-13T00:52:57.728Z");
                                            id = 399112L;
                                            lastUpdate = OffsetDateTime.parse("2022-06-17T04:31:53.449Z");
                                        }}),
                                    }};
                                    created = OffsetDateTime.parse("2022-03-24T03:28:33.888Z");
                                    fhirResourceId = "5fc2b862-a00b-4ef6-9e10-0157630bda7a";
                                    groupFeatures = new org.openapis.openapi.models.shared.GroupFeature[]{{
                                        add(new GroupFeature() {{
                                            created = OffsetDateTime.parse("2020-05-07T20:37:07.047Z");
                                            feature = new Feature() {{
                                                created = OffsetDateTime.parse("2021-07-01T15:35:54.322Z");
                                                description = "tempora";
                                                id = 627058L;
                                                lastUpdate = OffsetDateTime.parse("2022-09-08T04:31:27.508Z");
                                                name = "Jay Brekke";
                                            }};
                                            id = 545400L;
                                            lastUpdate = OffsetDateTime.parse("2022-10-03T13:40:43.893Z");
                                        }}),
                                        add(new GroupFeature() {{
                                            created = OffsetDateTime.parse("2022-02-08T19:01:06.672Z");
                                            feature = new Feature() {{
                                                created = OffsetDateTime.parse("2022-09-05T13:41:38.103Z");
                                                description = "fuga";
                                                id = 790534L;
                                                lastUpdate = OffsetDateTime.parse("2022-08-14T18:32:10.464Z");
                                                name = "Alonzo Emmerich";
                                            }};
                                            id = 930547L;
                                            lastUpdate = OffsetDateTime.parse("2021-03-22T08:25:36.626Z");
                                        }}),
                                        add(new GroupFeature() {{
                                            created = OffsetDateTime.parse("2022-11-18T02:40:59.925Z");
                                            feature = new Feature() {{
                                                created = OffsetDateTime.parse("2021-12-30T10:19:43.977Z");
                                                description = "repellat";
                                                id = 267918L;
                                                lastUpdate = OffsetDateTime.parse("2022-04-02T14:26:24.846Z");
                                                name = "Mr. Angelo Brakus";
                                            }};
                                            id = 965711L;
                                            lastUpdate = OffsetDateTime.parse("2021-03-06T14:23:26.829Z");
                                        }}),
                                        add(new GroupFeature() {{
                                            created = OffsetDateTime.parse("2022-08-19T00:53:45.170Z");
                                            feature = new Feature() {{
                                                created = OffsetDateTime.parse("2022-02-01T16:31:06.377Z");
                                                description = "vitae";
                                                id = 105497L;
                                                lastUpdate = OffsetDateTime.parse("2022-11-30T20:21:04.044Z");
                                                name = "Guillermo White";
                                            }};
                                            id = 899112L;
                                            lastUpdate = OffsetDateTime.parse("2021-03-02T06:22:21.112Z");
                                        }}),
                                    }};
                                    groupType = new Lookup() {{
                                        created = OffsetDateTime.parse("2021-08-06T08:19:08.285Z");
                                        description = "libero";
                                        descriptionFriendly = "perspiciatis";
                                        displayOrder = 577273L;
                                        id = 641333L;
                                        lastUpdate = OffsetDateTime.parse("2022-08-30T19:45:21.263Z");
                                        lookupType = new LookupType() {{
                                            created = OffsetDateTime.parse("2022-05-15T18:49:02.131Z");
                                            description = "eum";
                                            id = 339333L;
                                            lastUpdate = OffsetDateTime.parse("2022-02-03T15:27:28.517Z");
                                            type = LookupTypeTypeEnum.IBD_SURGERYMAINPROCEDURE;
                                        }};
                                        value = "dolor";
                                    }};
                                    id = 189252L;
                                    lastImportDate = OffsetDateTime.parse("2022-04-04T22:25:51.652Z");
                                    lastUpdate = OffsetDateTime.parse("2022-12-04T13:53:06.976Z");
                                    links = new org.openapis.openapi.models.shared.Link[]{{
                                        add(new Link() {{
                                            created = OffsetDateTime.parse("2021-06-16T07:37:58.167Z");
                                            displayOrder = 667943;
                                            id = 684708L;
                                            lastUpdate = OffsetDateTime.parse("2022-08-31T15:51:12.518Z");
                                            link = "modi";
                                            linkType = new Lookup() {{
                                                created = OffsetDateTime.parse("2022-10-25T16:38:48.040Z");
                                                description = "officia";
                                                descriptionFriendly = "cupiditate";
                                                displayOrder = 525089L;
                                                id = 410239L;
                                                lastUpdate = OffsetDateTime.parse("2020-10-09T09:21:30.028Z");
                                                lookupType = new LookupType() {{
                                                    created = OffsetDateTime.parse("2022-02-04T00:39:17.662Z");
                                                    description = "beatae";
                                                    id = 295651L;
                                                    lastUpdate = OffsetDateTime.parse("2021-01-19T08:37:06.718Z");
                                                    type = LookupTypeTypeEnum.CONTACT_POINT_TYPE;
                                                }};
                                                value = "autem";
                                            }};
                                            name = "Laura Lindgren III";
                                        }}),
                                        add(new Link() {{
                                            created = OffsetDateTime.parse("2022-12-26T23:45:34.418Z");
                                            displayOrder = 618132;
                                            id = 472280L;
                                            lastUpdate = OffsetDateTime.parse("2022-11-28T12:58:48.622Z");
                                            link = "unde";
                                            linkType = new Lookup() {{
                                                created = OffsetDateTime.parse("2022-06-25T20:13:38.946Z");
                                                description = "rem";
                                                descriptionFriendly = "delectus";
                                                displayOrder = 500349L;
                                                id = 514976L;
                                                lastUpdate = OffsetDateTime.parse("2020-09-05T14:38:08.021Z");
                                                lookupType = new LookupType() {{
                                                    created = OffsetDateTime.parse("2021-09-05T21:22:03.637Z");
                                                    description = "expedita";
                                                    id = 940617L;
                                                    lastUpdate = OffsetDateTime.parse("2022-12-16T23:15:16.093Z");
                                                    type = LookupTypeTypeEnum.FEATURE_TYPE;
                                                }};
                                                value = "saepe";
                                            }};
                                            name = "Mrs. Alice Carter";
                                        }}),
                                        add(new Link() {{
                                            created = OffsetDateTime.parse("2022-06-28T00:56:55.409Z");
                                            displayOrder = 570004;
                                            id = 4431L;
                                            lastUpdate = OffsetDateTime.parse("2022-10-21T08:01:24.911Z");
                                            link = "laboriosam";
                                            linkType = new Lookup() {{
                                                created = OffsetDateTime.parse("2022-03-14T19:13:47.512Z");
                                                description = "suscipit";
                                                descriptionFriendly = "tempore";
                                                displayOrder = 927171L;
                                                id = 687883L;
                                                lastUpdate = OffsetDateTime.parse("2022-07-01T12:33:52.857Z");
                                                lookupType = new LookupType() {{
                                                    created = OffsetDateTime.parse("2022-11-30T06:50:21.806Z");
                                                    description = "doloribus";
                                                    id = 428028L;
                                                    lastUpdate = OffsetDateTime.parse("2022-07-02T19:10:01.188Z");
                                                    type = LookupTypeTypeEnum.IBD_CROHNSBEHAVIOUR;
                                                }};
                                                value = "in";
                                            }};
                                            name = "Robert Feeney I";
                                        }}),
                                        add(new Link() {{
                                            created = OffsetDateTime.parse("2022-11-29T09:34:37.882Z");
                                            displayOrder = 940676;
                                            id = 503469L;
                                            lastUpdate = OffsetDateTime.parse("2020-03-29T00:00:53.118Z");
                                            link = "ipsum";
                                            linkType = new Lookup() {{
                                                created = OffsetDateTime.parse("2022-01-21T01:14:05.660Z");
                                                description = "aut";
                                                descriptionFriendly = "ex";
                                                displayOrder = 587748L;
                                                id = 855063L;
                                                lastUpdate = OffsetDateTime.parse("2022-10-15T00:51:04.574Z");
                                                lookupType = new LookupType() {{
                                                    created = OffsetDateTime.parse("2022-08-03T09:54:13.470Z");
                                                    description = "architecto";
                                                    id = 543317L;
                                                    lastUpdate = OffsetDateTime.parse("2021-03-14T19:37:29.651Z");
                                                    type = LookupTypeTypeEnum.STATISTIC_TYPE;
                                                }};
                                                value = "debitis";
                                            }};
                                            name = "Geraldine Crist";
                                        }}),
                                    }};
                                    locations = new org.openapis.openapi.models.shared.Location[]{{
                                        add(new Location() {{
                                            address = "00865 Daphne Corner";
                                            created = OffsetDateTime.parse("2022-11-04T01:11:23.740Z");
                                            email = "Buck.Rolfson9@yahoo.com";
                                            id = 780614L;
                                            label = "sed";
                                            lastUpdate = OffsetDateTime.parse("2022-02-08T16:17:13.254Z");
                                            name = "Kathy Reichel";
                                            phone = "980.218.6189 x239";
                                            web = "praesentium";
                                        }}),
                                        add(new Location() {{
                                            address = "007 Emard Field";
                                            created = OffsetDateTime.parse("2021-02-14T00:43:05.912Z");
                                            email = "Maudie26@yahoo.com";
                                            id = 61954L;
                                            label = "dolores";
                                            lastUpdate = OffsetDateTime.parse("2021-05-25T15:13:43.378Z");
                                            name = "Charlene Bartell";
                                            phone = "288.698.4166 x93963";
                                            web = "delectus";
                                        }}),
                                    }};
                                    name = "Johnnie Green";
                                    parentGroups = new org.openapis.openapi.models.shared.Group[]{{
                                        add(new Group() {{}}),
                                        add(new Group() {{}}),
                                        add(new Group() {{}}),
                                    }};
                                    postcode = "42280";
                                    sftpUser = "rem";
                                    shortName = "dolorum";
                                    visible = false;
                                    visibleToJoin = false;
                                }};
                                id = 129394L;
                                identifier = "odit";
                                location = "laboriosam";
                                name = "Genevieve Orn";
                                temporaryUuid = "esse";
                                units = "omnis";
                                value = "repudiandae";
                            }}),
                            add(new FhirObservation() {{
                                applies = OffsetDateTime.parse("2022-03-16T08:11:09.881Z");
                                bodySite = "molestiae";
                                comments = "illo";
                                comparator = "est";
                                diagram = "placeat";
                                group = new Group() {{
                                    address1 = "sequi";
                                    address2 = "et";
                                    address3 = "tempore";
                                    childGroups = new org.openapis.openapi.models.shared.Group[]{{
                                        add(new Group() {{}}),
                                        add(new Group() {{}}),
                                        add(new Group() {{}}),
                                        add(new Group() {{}}),
                                    }};
                                    code = "cumque";
                                    contactPoints = new org.openapis.openapi.models.shared.ContactPoint[]{{
                                        add(new ContactPoint() {{
                                            contactPointType = new ContactPointType() {{
                                                description = "rem";
                                                id = 232991L;
                                                lookupType = new LookupType() {{
                                                    created = OffsetDateTime.parse("2022-06-29T22:22:52.529Z");
                                                    description = "dolor";
                                                    id = 459639L;
                                                    lastUpdate = OffsetDateTime.parse("2021-09-13T17:25:58.468Z");
                                                    type = LookupTypeTypeEnum.IBD_SMOKINGSTATUS;
                                                }};
                                                value = ContactPointTypeValueEnum.PV_ADMIN_NAME;
                                            }};
                                            content = "facilis";
                                            created = OffsetDateTime.parse("2020-07-31T11:20:34.281Z");
                                            id = 148873L;
                                            lastUpdate = OffsetDateTime.parse("2022-02-21T02:13:18.301Z");
                                        }}),
                                        add(new ContactPoint() {{
                                            contactPointType = new ContactPointType() {{
                                                description = "sint";
                                                id = 261500L;
                                                lookupType = new LookupType() {{
                                                    created = OffsetDateTime.parse("2022-12-15T08:48:11.174Z");
                                                    description = "animi";
                                                    id = 603863L;
                                                    lastUpdate = OffsetDateTime.parse("2022-02-17T03:35:45.423Z");
                                                    type = LookupTypeTypeEnum.IBD_CROHNSPROXIMALTERMINALILEUM;
                                                }};
                                                value = ContactPointTypeValueEnum.PV_ADMIN_PHONE;
                                            }};
                                            content = "natus";
                                            created = OffsetDateTime.parse("2022-04-07T04:49:19.640Z");
                                            id = 678630L;
                                            lastUpdate = OffsetDateTime.parse("2021-08-02T16:04:05.839Z");
                                        }}),
                                        add(new ContactPoint() {{
                                            contactPointType = new ContactPointType() {{
                                                description = "quae";
                                                id = 496204L;
                                                lookupType = new LookupType() {{
                                                    created = OffsetDateTime.parse("2022-11-04T23:29:25.958Z");
                                                    description = "ex";
                                                    id = 699606L;
                                                    lastUpdate = OffsetDateTime.parse("2022-06-26T22:55:05.045Z");
                                                    type = LookupTypeTypeEnum.IBD_FAMILYHISTORY;
                                                }};
                                                value = ContactPointTypeValueEnum.APPOINTMENT_PHONE;
                                            }};
                                            content = "porro";
                                            created = OffsetDateTime.parse("2022-02-28T03:24:03.662Z");
                                            id = 258807L;
                                            lastUpdate = OffsetDateTime.parse("2022-09-30T20:47:41.175Z");
                                        }}),
                                    }};
                                    created = OffsetDateTime.parse("2022-06-28T03:56:28.805Z");
                                    fhirResourceId = "6f62c969-c4cc-46b7-8890-a3fd3c81da10";
                                    groupFeatures = new org.openapis.openapi.models.shared.GroupFeature[]{{
                                        add(new GroupFeature() {{
                                            created = OffsetDateTime.parse("2021-06-25T11:35:02.539Z");
                                            feature = new Feature() {{
                                                created = OffsetDateTime.parse("2022-10-02T06:52:38.021Z");
                                                description = "fugiat";
                                                id = 974775L;
                                                lastUpdate = OffsetDateTime.parse("2022-07-18T04:44:42.001Z");
                                                name = "Freda Nitzsche";
                                            }};
                                            id = 818505L;
                                            lastUpdate = OffsetDateTime.parse("2022-05-07T11:59:56.041Z");
                                        }}),
                                        add(new GroupFeature() {{
                                            created = OffsetDateTime.parse("2022-01-02T09:17:56.220Z");
                                            feature = new Feature() {{
                                                created = OffsetDateTime.parse("2021-05-16T01:51:56.088Z");
                                                description = "iste";
                                                id = 254663L;
                                                lastUpdate = OffsetDateTime.parse("2021-06-24T08:29:07.902Z");
                                                name = "Perry Gutmann";
                                            }};
                                            id = 115879L;
                                            lastUpdate = OffsetDateTime.parse("2022-07-22T21:58:08.957Z");
                                        }}),
                                        add(new GroupFeature() {{
                                            created = OffsetDateTime.parse("2022-11-01T02:43:55.852Z");
                                            feature = new Feature() {{
                                                created = OffsetDateTime.parse("2022-02-27T14:40:04.914Z");
                                                description = "veritatis";
                                                id = 321932L;
                                                lastUpdate = OffsetDateTime.parse("2022-11-04T03:58:12.248Z");
                                                name = "Antoinette Luettgen";
                                            }};
                                            id = 685110L;
                                            lastUpdate = OffsetDateTime.parse("2022-08-08T05:13:51.736Z");
                                        }}),
                                        add(new GroupFeature() {{
                                            created = OffsetDateTime.parse("2021-10-31T22:40:48.063Z");
                                            feature = new Feature() {{
                                                created = OffsetDateTime.parse("2022-10-17T04:07:05.956Z");
                                                description = "totam";
                                                id = 1320L;
                                                lastUpdate = OffsetDateTime.parse("2020-02-29T18:48:44.753Z");
                                                name = "Elizabeth Tillman";
                                            }};
                                            id = 682506L;
                                            lastUpdate = OffsetDateTime.parse("2022-07-30T19:23:38.078Z");
                                        }}),
                                    }};
                                    groupType = new Lookup() {{
                                        created = OffsetDateTime.parse("2022-06-17T14:18:01.789Z");
                                        description = "saepe";
                                        descriptionFriendly = "eum";
                                        displayOrder = 565245L;
                                        id = 684196L;
                                        lastUpdate = OffsetDateTime.parse("2022-04-12T18:09:30.716Z");
                                        lookupType = new LookupType() {{
                                            created = OffsetDateTime.parse("2022-06-09T09:50:29.140Z");
                                            description = "non";
                                            id = 849421L;
                                            lastUpdate = OffsetDateTime.parse("2022-06-25T06:33:30.748Z");
                                            type = LookupTypeTypeEnum.ROLE;
                                        }};
                                        value = "quibusdam";
                                    }};
                                    id = 689309L;
                                    lastImportDate = OffsetDateTime.parse("2020-08-28T18:10:26.162Z");
                                    lastUpdate = OffsetDateTime.parse("2022-09-04T21:09:32.258Z");
                                    links = new org.openapis.openapi.models.shared.Link[]{{
                                        add(new Link() {{
                                            created = OffsetDateTime.parse("2022-06-15T07:03:15.601Z");
                                            displayOrder = 793068;
                                            id = 421094L;
                                            lastUpdate = OffsetDateTime.parse("2022-08-11T02:28:18.862Z");
                                            link = "veniam";
                                            linkType = new Lookup() {{
                                                created = OffsetDateTime.parse("2022-05-21T10:56:46.331Z");
                                                description = "suscipit";
                                                descriptionFriendly = "atque";
                                                displayOrder = 795080L;
                                                id = 894870L;
                                                lastUpdate = OffsetDateTime.parse("2022-12-17T05:04:23.086Z");
                                                lookupType = new LookupType() {{
                                                    created = OffsetDateTime.parse("2022-02-27T09:19:22.404Z");
                                                    description = "deleniti";
                                                    id = 557128L;
                                                    lastUpdate = OffsetDateTime.parse("2022-05-31T12:02:15.447Z");
                                                    type = LookupTypeTypeEnum.IBD_CROHNSBEHAVIOUR;
                                                }};
                                                value = "sapiente";
                                            }};
                                            name = "Roy Bogisich";
                                        }}),
                                        add(new Link() {{
                                            created = OffsetDateTime.parse("2022-10-12T20:47:08.651Z");
                                            displayOrder = 468840;
                                            id = 943706L;
                                            lastUpdate = OffsetDateTime.parse("2022-02-15T16:49:58.214Z");
                                            link = "libero";
                                            linkType = new Lookup() {{
                                                created = OffsetDateTime.parse("2022-11-23T06:45:10.196Z");
                                                description = "porro";
                                                descriptionFriendly = "vel";
                                                displayOrder = 608680L;
                                                id = 924275L;
                                                lastUpdate = OffsetDateTime.parse("2022-07-16T03:41:13.644Z");
                                                lookupType = new LookupType() {{
                                                    created = OffsetDateTime.parse("2022-03-08T13:37:29.807Z");
                                                    description = "libero";
                                                    id = 111979L;
                                                    lastUpdate = OffsetDateTime.parse("2022-09-17T06:23:18.254Z");
                                                    type = LookupTypeTypeEnum.RELATIONSHIP_TYPE;
                                                }};
                                                value = "tempore";
                                            }};
                                            name = "Jeremiah Yost";
                                        }}),
                                        add(new Link() {{
                                            created = OffsetDateTime.parse("2022-04-27T09:44:08.154Z");
                                            displayOrder = 770969;
                                            id = 34342L;
                                            lastUpdate = OffsetDateTime.parse("2020-07-21T04:23:30.529Z");
                                            link = "reprehenderit";
                                            linkType = new Lookup() {{
                                                created = OffsetDateTime.parse("2021-09-18T21:28:40.741Z");
                                                description = "soluta";
                                                descriptionFriendly = "suscipit";
                                                displayOrder = 128652L;
                                                id = 927050L;
                                                lastUpdate = OffsetDateTime.parse("2022-01-15T02:25:17.319Z");
                                                lookupType = new LookupType() {{
                                                    created = OffsetDateTime.parse("2022-08-04T03:49:06.173Z");
                                                    description = "architecto";
                                                    id = 939472L;
                                                    lastUpdate = OffsetDateTime.parse("2022-12-30T13:38:17.333Z");
                                                    type = LookupTypeTypeEnum.IBD_EGIMCOMPLICATION;
                                                }};
                                                value = "veniam";
                                            }};
                                            name = "Lionel Connelly";
                                        }}),
                                        add(new Link() {{
                                            created = OffsetDateTime.parse("2022-11-22T22:22:22.522Z");
                                            displayOrder = 587817;
                                            id = 583913L;
                                            lastUpdate = OffsetDateTime.parse("2022-04-08T02:10:17.640Z");
                                            link = "minima";
                                            linkType = new Lookup() {{
                                                created = OffsetDateTime.parse("2022-06-20T20:08:50.864Z");
                                                description = "expedita";
                                                descriptionFriendly = "quaerat";
                                                displayOrder = 37560L;
                                                id = 924162L;
                                                lastUpdate = OffsetDateTime.parse("2020-02-15T03:47:43.358Z");
                                                lookupType = new LookupType() {{
                                                    created = OffsetDateTime.parse("2022-11-25T22:14:37.429Z");
                                                    description = "odit";
                                                    id = 735414L;
                                                    lastUpdate = OffsetDateTime.parse("2022-05-05T21:59:55.525Z");
                                                    type = LookupTypeTypeEnum.NEWS_TYPE;
                                                }};
                                                value = "similique";
                                            }};
                                            name = "Kenneth Fisher";
                                        }}),
                                    }};
                                    locations = new org.openapis.openapi.models.shared.Location[]{{
                                        add(new Location() {{
                                            address = "41045 Stanton Underpass";
                                            created = OffsetDateTime.parse("2020-11-19T23:03:35.715Z");
                                            email = "Yoshiko.Legros@hotmail.com";
                                            id = 938917L;
                                            label = "velit";
                                            lastUpdate = OffsetDateTime.parse("2020-05-27T15:28:52.704Z");
                                            name = "Bernadette Schinner";
                                            phone = "901.729.3905";
                                            web = "aut";
                                        }}),
                                        add(new Location() {{
                                            address = "6102 Kaleb Keys";
                                            created = OffsetDateTime.parse("2020-09-21T19:56:01.939Z");
                                            email = "Felix.Medhurst17@yahoo.com";
                                            id = 964654L;
                                            label = "dolor";
                                            lastUpdate = OffsetDateTime.parse("2022-12-15T23:58:19.046Z");
                                            name = "Jasmine Hayes";
                                            phone = "1-381-296-8210 x29622";
                                            web = "iure";
                                        }}),
                                        add(new Location() {{
                                            address = "47914 Mollie Forges";
                                            created = OffsetDateTime.parse("2022-11-06T09:14:44.032Z");
                                            email = "Brice9@yahoo.com";
                                            id = 967492L;
                                            label = "nulla";
                                            lastUpdate = OffsetDateTime.parse("2022-09-10T20:13:48.284Z");
                                            name = "Andre Marquardt";
                                            phone = "(334) 840-7758 x1782";
                                            web = "fugit";
                                        }}),
                                    }};
                                    name = "Mrs. Jennie Smith";
                                    parentGroups = new org.openapis.openapi.models.shared.Group[]{{
                                        add(new Group() {{}}),
                                        add(new Group() {{}}),
                                        add(new Group() {{}}),
                                    }};
                                    postcode = "51850-5991";
                                    sftpUser = "quam";
                                    shortName = "ullam";
                                    visible = false;
                                    visibleToJoin = false;
                                }};
                                id = 78350L;
                                identifier = "laborum";
                                location = "fugit";
                                name = "Hazel Kunze I";
                                temporaryUuid = "numquam";
                                units = "omnis";
                                value = "repudiandae";
                            }}),
                        }};
                        procedures = new org.openapis.openapi.models.shared.FhirProcedure[]{{
                            add(new FhirProcedure() {{
                                bodySite = "quaerat";
                                id = 202145L;
                                type = "hic";
                            }}),
                        }};
                        status = "natus";
                    }}),
                    add(new FhirEncounter() {{
                        date = OffsetDateTime.parse("2022-11-26T04:18:15.366Z");
                        encounterType = "excepturi";
                        group = new Group() {{
                            address1 = "distinctio";
                            address2 = "cum";
                            address3 = "in";
                            childGroups = new org.openapis.openapi.models.shared.Group[]{{
                                add(new Group() {{}}),
                                add(new Group() {{}}),
                                add(new Group() {{}}),
                                add(new Group() {{}}),
                            }};
                            code = "incidunt";
                            contactPoints = new org.openapis.openapi.models.shared.ContactPoint[]{{
                                add(new ContactPoint() {{
                                    contactPointType = new ContactPointType() {{
                                        description = "vero";
                                        id = 357589L;
                                        lookupType = new LookupType() {{
                                            created = OffsetDateTime.parse("2022-11-15T05:28:40.759Z");
                                            description = "quae";
                                            id = 972654L;
                                            lastUpdate = OffsetDateTime.parse("2022-06-18T17:38:00.630Z");
                                            type = LookupTypeTypeEnum.CODE_TYPE;
                                        }};
                                        value = ContactPointTypeValueEnum.PV_ADMIN_EMAIL;
                                    }};
                                    content = "repudiandae";
                                    created = OffsetDateTime.parse("2022-11-05T21:18:27.128Z");
                                    id = 346951L;
                                    lastUpdate = OffsetDateTime.parse("2022-09-29T05:11:17.957Z");
                                }}),
                            }};
                            created = OffsetDateTime.parse("2022-10-05T06:19:52.611Z");
                            fhirResourceId = "f95c9d23-7397-4c78-9b5d-b4f500183feb";
                            groupFeatures = new org.openapis.openapi.models.shared.GroupFeature[]{{
                                add(new GroupFeature() {{
                                    created = OffsetDateTime.parse("2021-10-12T12:08:04.183Z");
                                    feature = new Feature() {{
                                        created = OffsetDateTime.parse("2022-08-07T17:19:28.796Z");
                                        description = "nobis";
                                        id = 443973L;
                                        lastUpdate = OffsetDateTime.parse("2022-12-18T04:34:25.043Z");
                                        name = "Mercedes Nolan";
                                    }};
                                    id = 321537L;
                                    lastUpdate = OffsetDateTime.parse("2022-12-23T05:23:05.906Z");
                                }}),
                                add(new GroupFeature() {{
                                    created = OffsetDateTime.parse("2022-10-26T17:02:57.737Z");
                                    feature = new Feature() {{
                                        created = OffsetDateTime.parse("2022-05-10T10:14:29.852Z");
                                        description = "nisi";
                                        id = 296001L;
                                        lastUpdate = OffsetDateTime.parse("2022-02-11T11:38:13.419Z");
                                        name = "Roosevelt Glover";
                                    }};
                                    id = 905357L;
                                    lastUpdate = OffsetDateTime.parse("2021-05-10T18:48:04.479Z");
                                }}),
                                add(new GroupFeature() {{
                                    created = OffsetDateTime.parse("2022-02-02T22:08:00.229Z");
                                    feature = new Feature() {{
                                        created = OffsetDateTime.parse("2022-11-14T11:54:46.816Z");
                                        description = "eaque";
                                        id = 941709L;
                                        lastUpdate = OffsetDateTime.parse("2022-12-07T23:21:45.478Z");
                                        name = "Monica Barrows";
                                    }};
                                    id = 279004L;
                                    lastUpdate = OffsetDateTime.parse("2022-01-14T23:31:00.064Z");
                                }}),
                                add(new GroupFeature() {{
                                    created = OffsetDateTime.parse("2021-06-07T11:17:54.316Z");
                                    feature = new Feature() {{
                                        created = OffsetDateTime.parse("2022-05-30T06:51:20.047Z");
                                        description = "neque";
                                        id = 713240L;
                                        lastUpdate = OffsetDateTime.parse("2022-05-18T03:12:08.057Z");
                                        name = "Antonio Powlowski";
                                    }};
                                    id = 167183L;
                                    lastUpdate = OffsetDateTime.parse("2022-06-18T06:32:49.625Z");
                                }}),
                            }};
                            groupType = new Lookup() {{
                                created = OffsetDateTime.parse("2021-04-26T03:56:48.801Z");
                                description = "odio";
                                descriptionFriendly = "unde";
                                displayOrder = 321582L;
                                id = 638323L;
                                lastUpdate = OffsetDateTime.parse("2022-06-13T13:41:24.677Z");
                                lookupType = new LookupType() {{
                                    created = OffsetDateTime.parse("2022-01-04T14:30:32.542Z");
                                    description = "maxime";
                                    id = 294102L;
                                    lastUpdate = OffsetDateTime.parse("2022-08-23T12:52:39.349Z");
                                    type = LookupTypeTypeEnum.CONTACT_POINT_TYPE;
                                }};
                                value = "laboriosam";
                            }};
                            id = 607320L;
                            lastImportDate = OffsetDateTime.parse("2021-09-23T07:42:42.086Z");
                            lastUpdate = OffsetDateTime.parse("2021-09-09T08:16:24.628Z");
                            links = new org.openapis.openapi.models.shared.Link[]{{
                                add(new Link() {{
                                    created = OffsetDateTime.parse("2022-08-15T19:03:50.744Z");
                                    displayOrder = 867161;
                                    id = 146693L;
                                    lastUpdate = OffsetDateTime.parse("2022-11-11T09:26:21.432Z");
                                    link = "labore";
                                    linkType = new Lookup() {{
                                        created = OffsetDateTime.parse("2022-05-31T20:10:34.963Z");
                                        description = "ullam";
                                        descriptionFriendly = "aut";
                                        displayOrder = 540570L;
                                        id = 94023L;
                                        lastUpdate = OffsetDateTime.parse("2021-04-19T02:59:36.682Z");
                                        lookupType = new LookupType() {{
                                            created = OffsetDateTime.parse("2022-03-23T19:51:42.706Z");
                                            description = "ipsum";
                                            id = 737994L;
                                            lastUpdate = OffsetDateTime.parse("2022-04-24T09:45:54.515Z");
                                            type = LookupTypeTypeEnum.RELATIONSHIP_TYPE;
                                        }};
                                        value = "illo";
                                    }};
                                    name = "Mrs. Miguel Goyette PhD";
                                }}),
                            }};
                            locations = new org.openapis.openapi.models.shared.Location[]{{
                                add(new Location() {{
                                    address = "10080 Deja Stravenue";
                                    created = OffsetDateTime.parse("2021-02-15T18:54:05.132Z");
                                    email = "Berneice_Wyman@gmail.com";
                                    id = 961590L;
                                    label = "pariatur";
                                    lastUpdate = OffsetDateTime.parse("2022-05-04T20:15:34.139Z");
                                    name = "Roxanne Hackett";
                                    phone = "569-685-5132 x755";
                                    web = "ea";
                                }}),
                            }};
                            name = "Lucia Hahn";
                            parentGroups = new org.openapis.openapi.models.shared.Group[]{{
                                add(new Group() {{}}),
                                add(new Group() {{}}),
                            }};
                            postcode = "93092-4318";
                            sftpUser = "dolorem";
                            shortName = "cumque";
                            visible = false;
                            visibleToJoin = false;
                        }};
                        id = 198788L;
                        identifier = "aliquam";
                        links = new org.openapis.openapi.models.shared.Link[]{{
                            add(new Link() {{
                                created = OffsetDateTime.parse("2021-11-06T21:05:09.188Z");
                                displayOrder = 62556;
                                id = 464944L;
                                lastUpdate = OffsetDateTime.parse("2022-06-17T01:39:50.988Z");
                                link = "animi";
                                linkType = new Lookup() {{
                                    created = OffsetDateTime.parse("2022-01-24T03:31:59.623Z");
                                    description = "excepturi";
                                    descriptionFriendly = "ab";
                                    displayOrder = 179646L;
                                    id = 257160L;
                                    lastUpdate = OffsetDateTime.parse("2022-07-08T10:09:32.871Z");
                                    lookupType = new LookupType() {{
                                        created = OffsetDateTime.parse("2022-09-06T21:23:17.310Z");
                                        description = "eveniet";
                                        id = 415672L;
                                        lastUpdate = OffsetDateTime.parse("2022-11-28T00:13:41.117Z");
                                        type = LookupTypeTypeEnum.IBD_CROHNSPROXIMALTERMINALILEUM;
                                    }};
                                    value = "aut";
                                }};
                                name = "Mr. Ignacio Mueller";
                            }}),
                        }};
                        observations = new org.openapis.openapi.models.shared.FhirObservation[]{{
                            add(new FhirObservation() {{
                                applies = OffsetDateTime.parse("2022-04-17T19:41:07.689Z");
                                bodySite = "quibusdam";
                                comments = "recusandae";
                                comparator = "ad";
                                diagram = "omnis";
                                group = new Group() {{
                                    address1 = "mollitia";
                                    address2 = "placeat";
                                    address3 = "nihil";
                                    childGroups = new org.openapis.openapi.models.shared.Group[]{{
                                        add(new Group() {{}}),
                                        add(new Group() {{}}),
                                    }};
                                    code = "eaque";
                                    contactPoints = new org.openapis.openapi.models.shared.ContactPoint[]{{
                                        add(new ContactPoint() {{
                                            contactPointType = new ContactPointType() {{
                                                description = "ea";
                                                id = 483599L;
                                                lookupType = new LookupType() {{
                                                    created = OffsetDateTime.parse("2022-03-19T16:26:41.064Z");
                                                    description = "delectus";
                                                    id = 91007L;
                                                    lastUpdate = OffsetDateTime.parse("2020-02-21T17:20:08.973Z");
                                                    type = LookupTypeTypeEnum.IDENTIFIER;
                                                }};
                                                value = ContactPointTypeValueEnum.UNIT_ENQUIRIES_EMAIL;
                                            }};
                                            content = "consectetur";
                                            created = OffsetDateTime.parse("2022-08-07T21:08:01.634Z");
                                            id = 43763L;
                                            lastUpdate = OffsetDateTime.parse("2022-11-15T05:57:13.752Z");
                                        }}),
                                        add(new ContactPoint() {{
                                            contactPointType = new ContactPointType() {{
                                                description = "ipsam";
                                                id = 107103L;
                                                lookupType = new LookupType() {{
                                                    created = OffsetDateTime.parse("2021-10-17T02:29:52.101Z");
                                                    description = "ex";
                                                    id = 691991L;
                                                    lastUpdate = OffsetDateTime.parse("2022-07-02T08:48:06.592Z");
                                                    type = LookupTypeTypeEnum.CODE_STANDARD;
                                                }};
                                                value = ContactPointTypeValueEnum.PV_ADMIN_PHONE;
                                            }};
                                            content = "deleniti";
                                            created = OffsetDateTime.parse("2022-01-05T13:46:51.024Z");
                                            id = 813463L;
                                            lastUpdate = OffsetDateTime.parse("2021-10-14T09:31:48.800Z");
                                        }}),
                                    }};
                                    created = OffsetDateTime.parse("2022-08-18T19:09:00.927Z");
                                    fhirResourceId = "d335670e-93ee-46cf-99f3-58aaeacae323";
                                    groupFeatures = new org.openapis.openapi.models.shared.GroupFeature[]{{
                                        add(new GroupFeature() {{
                                            created = OffsetDateTime.parse("2022-12-02T20:00:29.803Z");
                                            feature = new Feature() {{
                                                created = OffsetDateTime.parse("2021-01-15T15:12:25.632Z");
                                                description = "ducimus";
                                                id = 698279L;
                                                lastUpdate = OffsetDateTime.parse("2022-10-16T21:57:10.772Z");
                                                name = "Kim Maggio";
                                            }};
                                            id = 79517L;
                                            lastUpdate = OffsetDateTime.parse("2022-03-13T09:43:48.646Z");
                                        }}),
                                        add(new GroupFeature() {{
                                            created = OffsetDateTime.parse("2022-12-06T06:20:17.395Z");
                                            feature = new Feature() {{
                                                created = OffsetDateTime.parse("2022-03-16T16:53:58.512Z");
                                                description = "quisquam";
                                                id = 574221L;
                                                lastUpdate = OffsetDateTime.parse("2022-12-29T00:53:05.581Z");
                                                name = "Roland Schuster";
                                            }};
                                            id = 205120L;
                                            lastUpdate = OffsetDateTime.parse("2022-10-06T19:33:15.187Z");
                                        }}),
                                        add(new GroupFeature() {{
                                            created = OffsetDateTime.parse("2022-10-22T03:03:52.996Z");
                                            feature = new Feature() {{
                                                created = OffsetDateTime.parse("2021-08-30T02:15:40.141Z");
                                                description = "autem";
                                                id = 194514L;
                                                lastUpdate = OffsetDateTime.parse("2020-06-02T02:34:31.967Z");
                                                name = "Miss Earnest Zemlak";
                                            }};
                                            id = 367511L;
                                            lastUpdate = OffsetDateTime.parse("2022-04-04T23:09:17.478Z");
                                        }}),
                                    }};
                                    groupType = new Lookup() {{
                                        created = OffsetDateTime.parse("2020-10-23T12:42:35.526Z");
                                        description = "id";
                                        descriptionFriendly = "quaerat";
                                        displayOrder = 78154L;
                                        id = 884176L;
                                        lastUpdate = OffsetDateTime.parse("2022-07-30T20:41:51.806Z");
                                        lookupType = new LookupType() {{
                                            created = OffsetDateTime.parse("2022-08-20T16:12:13.841Z");
                                            description = "numquam";
                                            id = 636274L;
                                            lastUpdate = OffsetDateTime.parse("2022-07-10T02:44:28.394Z");
                                            type = LookupTypeTypeEnum.LINK_TYPE;
                                        }};
                                        value = "dolorum";
                                    }};
                                    id = 803782L;
                                    lastImportDate = OffsetDateTime.parse("2022-09-28T18:33:54.397Z");
                                    lastUpdate = OffsetDateTime.parse("2022-08-01T10:28:02.583Z");
                                    links = new org.openapis.openapi.models.shared.Link[]{{
                                        add(new Link() {{
                                            created = OffsetDateTime.parse("2020-07-19T22:05:01.740Z");
                                            displayOrder = 349223;
                                            id = 282201L;
                                            lastUpdate = OffsetDateTime.parse("2022-09-29T20:49:58.071Z");
                                            link = "officia";
                                            linkType = new Lookup() {{
                                                created = OffsetDateTime.parse("2022-08-19T19:10:48.732Z");
                                                description = "nisi";
                                                descriptionFriendly = "consequuntur";
                                                displayOrder = 507819L;
                                                id = 483271L;
                                                lastUpdate = OffsetDateTime.parse("2022-03-10T17:32:32.415Z");
                                                lookupType = new LookupType() {{
                                                    created = OffsetDateTime.parse("2022-02-26T17:58:11.808Z");
                                                    description = "placeat";
                                                    id = 615655L;
                                                    lastUpdate = OffsetDateTime.parse("2020-01-02T23:07:03.534Z");
                                                    type = LookupTypeTypeEnum.IBD_CROHNSPERIANAL;
                                                }};
                                                value = "doloribus";
                                            }};
                                            name = "Sylvia Swift";
                                        }}),
                                        add(new Link() {{
                                            created = OffsetDateTime.parse("2022-10-08T09:22:07.593Z");
                                            displayOrder = 411416;
                                            id = 134597L;
                                            lastUpdate = OffsetDateTime.parse("2022-01-14T23:46:50.816Z");
                                            link = "nesciunt";
                                            linkType = new Lookup() {{
                                                created = OffsetDateTime.parse("2022-10-11T09:06:18.810Z");
                                                description = "voluptatum";
                                                descriptionFriendly = "doloribus";
                                                displayOrder = 202177L;
                                                id = 41645L;
                                                lastUpdate = OffsetDateTime.parse("2020-03-01T07:01:01.879Z");
                                                lookupType = new LookupType() {{
                                                    created = OffsetDateTime.parse("2022-03-01T01:26:19.479Z");
                                                    description = "cum";
                                                    id = 22479L;
                                                    lastUpdate = OffsetDateTime.parse("2022-11-12T02:13:18.133Z");
                                                    type = LookupTypeTypeEnum.IBD_FAMILYHISTORY;
                                                }};
                                                value = "similique";
                                            }};
                                            name = "Dustin Johns";
                                        }}),
                                        add(new Link() {{
                                            created = OffsetDateTime.parse("2021-12-14T10:37:43.596Z");
                                            displayOrder = 994756;
                                            id = 384074L;
                                            lastUpdate = OffsetDateTime.parse("2022-11-02T16:42:51.772Z");
                                            link = "repudiandae";
                                            linkType = new Lookup() {{
                                                created = OffsetDateTime.parse("2021-07-18T05:42:03.072Z");
                                                description = "perspiciatis";
                                                descriptionFriendly = "illum";
                                                displayOrder = 222893L;
                                                id = 508838L;
                                                lastUpdate = OffsetDateTime.parse("2022-06-20T08:22:49.539Z");
                                                lookupType = new LookupType() {{
                                                    created = OffsetDateTime.parse("2022-06-15T12:58:03.796Z");
                                                    description = "ducimus";
                                                    id = 565139L;
                                                    lastUpdate = OffsetDateTime.parse("2022-11-09T06:41:44.283Z");
                                                    type = LookupTypeTypeEnum.RELATIONSHIP_TYPE;
                                                }};
                                                value = "neque";
                                            }};
                                            name = "Aaron Mraz";
                                        }}),
                                        add(new Link() {{
                                            created = OffsetDateTime.parse("2021-07-06T06:40:00.036Z");
                                            displayOrder = 206500;
                                            id = 21277L;
                                            lastUpdate = OffsetDateTime.parse("2021-04-17T07:43:22.926Z");
                                            link = "dicta";
                                            linkType = new Lookup() {{
                                                created = OffsetDateTime.parse("2022-01-05T02:38:08.382Z");
                                                description = "corporis";
                                                descriptionFriendly = "alias";
                                                displayOrder = 992382L;
                                                id = 843875L;
                                                lastUpdate = OffsetDateTime.parse("2022-12-30T13:07:26.233Z");
                                                lookupType = new LookupType() {{
                                                    created = OffsetDateTime.parse("2022-03-20T07:17:48.609Z");
                                                    description = "voluptatum";
                                                    id = 727655L;
                                                    lastUpdate = OffsetDateTime.parse("2022-04-22T11:49:21.068Z");
                                                    type = LookupTypeTypeEnum.IBD_UCEXTENT;
                                                }};
                                                value = "exercitationem";
                                            }};
                                            name = "Marguerite Cummings";
                                        }}),
                                    }};
                                    locations = new org.openapis.openapi.models.shared.Location[]{{
                                        add(new Location() {{
                                            address = "77277 Elwin Freeway";
                                            created = OffsetDateTime.parse("2022-08-11T01:28:54.379Z");
                                            email = "Shawna83@gmail.com";
                                            id = 29564L;
                                            label = "non";
                                            lastUpdate = OffsetDateTime.parse("2022-06-27T08:35:32.228Z");
                                            name = "Cesar Adams MD";
                                            phone = "246.999.4273 x9965";
                                            web = "labore";
                                        }}),
                                        add(new Location() {{
                                            address = "4849 Pacocha Walk";
                                            created = OffsetDateTime.parse("2022-05-29T11:34:03.754Z");
                                            email = "Arely_Johnston99@hotmail.com";
                                            id = 486354L;
                                            label = "nisi";
                                            lastUpdate = OffsetDateTime.parse("2020-07-10T16:46:34.467Z");
                                            name = "Agnes Crist";
                                            phone = "382-212-6528";
                                            web = "consectetur";
                                        }}),
                                        add(new Location() {{
                                            address = "10389 Frederik Roads";
                                            created = OffsetDateTime.parse("2022-10-22T18:42:43.493Z");
                                            email = "Darlene.Herman@gmail.com";
                                            id = 784657L;
                                            label = "optio";
                                            lastUpdate = OffsetDateTime.parse("2022-08-31T18:24:29.056Z");
                                            name = "Wayne Adams";
                                            phone = "787-855-0283 x053";
                                            web = "cum";
                                        }}),
                                    }};
                                    name = "Rick Grant";
                                    parentGroups = new org.openapis.openapi.models.shared.Group[]{{
                                        add(new Group() {{}}),
                                        add(new Group() {{}}),
                                        add(new Group() {{}}),
                                        add(new Group() {{}}),
                                    }};
                                    postcode = "64590-9182";
                                    sftpUser = "libero";
                                    shortName = "error";
                                    visible = false;
                                    visibleToJoin = false;
                                }};
                                id = 20026L;
                                identifier = "beatae";
                                location = "saepe";
                                name = "Becky Hessel";
                                temporaryUuid = "harum";
                                units = "quidem";
                                value = "tempora";
                            }}),
                            add(new FhirObservation() {{
                                applies = OffsetDateTime.parse("2020-12-04T13:01:49.061Z");
                                bodySite = "quidem";
                                comments = "inventore";
                                comparator = "iste";
                                diagram = "voluptatibus";
                                group = new Group() {{
                                    address1 = "odio";
                                    address2 = "ab";
                                    address3 = "neque";
                                    childGroups = new org.openapis.openapi.models.shared.Group[]{{
                                        add(new Group() {{}}),
                                        add(new Group() {{}}),
                                        add(new Group() {{}}),
                                        add(new Group() {{}}),
                                    }};
                                    code = "excepturi";
                                    contactPoints = new org.openapis.openapi.models.shared.ContactPoint[]{{
                                        add(new ContactPoint() {{
                                            contactPointType = new ContactPointType() {{
                                                description = "culpa";
                                                id = 293095L;
                                                lookupType = new LookupType() {{
                                                    created = OffsetDateTime.parse("2022-08-09T19:57:56.549Z");
                                                    description = "molestias";
                                                    id = 772560L;
                                                    lastUpdate = OffsetDateTime.parse("2022-10-20T02:05:00.869Z");
                                                    type = LookupTypeTypeEnum.IBD_CROHNSLOCATION;
                                                }};
                                                value = ContactPointTypeValueEnum.PV_ADMIN_EMAIL;
                                            }};
                                            content = "quia";
                                            created = OffsetDateTime.parse("2022-11-18T13:26:27.939Z");
                                            id = 907524L;
                                            lastUpdate = OffsetDateTime.parse("2022-06-12T11:30:53.069Z");
                                        }}),
                                        add(new ContactPoint() {{
                                            contactPointType = new ContactPointType() {{
                                                description = "eveniet";
                                                id = 638654L;
                                                lookupType = new LookupType() {{
                                                    created = OffsetDateTime.parse("2021-03-19T07:41:29.330Z");
                                                    description = "non";
                                                    id = 333354L;
                                                    lastUpdate = OffsetDateTime.parse("2022-12-05T15:06:34.752Z");
                                                    type = LookupTypeTypeEnum.GENDER;
                                                }};
                                                value = ContactPointTypeValueEnum.APPOINTMENT_PHONE;
                                            }};
                                            content = "fugit";
                                            created = OffsetDateTime.parse("2020-08-31T15:34:14.616Z");
                                            id = 324305L;
                                            lastUpdate = OffsetDateTime.parse("2022-01-19T23:54:57.801Z");
                                        }}),
                                    }};
                                    created = OffsetDateTime.parse("2021-05-02T09:49:31.466Z");
                                    fhirResourceId = "60b1a78e-d29a-49d4-aea8-5658c2d4f4c8";
                                    groupFeatures = new org.openapis.openapi.models.shared.GroupFeature[]{{
                                        add(new GroupFeature() {{
                                            created = OffsetDateTime.parse("2021-03-05T11:05:39.608Z");
                                            feature = new Feature() {{
                                                created = OffsetDateTime.parse("2022-01-21T21:10:36.356Z");
                                                description = "aspernatur";
                                                id = 467599L;
                                                lastUpdate = OffsetDateTime.parse("2021-02-07T16:21:22.547Z");
                                                name = "Stuart Johnson";
                                            }};
                                            id = 882826L;
                                            lastUpdate = OffsetDateTime.parse("2022-07-31T19:33:00.414Z");
                                        }}),
                                        add(new GroupFeature() {{
                                            created = OffsetDateTime.parse("2021-12-02T09:56:04.898Z");
                                            feature = new Feature() {{
                                                created = OffsetDateTime.parse("2022-03-08T04:02:33.713Z");
                                                description = "dolores";
                                                id = 975070L;
                                                lastUpdate = OffsetDateTime.parse("2021-01-05T02:31:24.422Z");
                                                name = "Leon Lowe";
                                            }};
                                            id = 913898L;
                                            lastUpdate = OffsetDateTime.parse("2022-07-21T18:36:03.009Z");
                                        }}),
                                        add(new GroupFeature() {{
                                            created = OffsetDateTime.parse("2022-09-10T01:27:42.291Z");
                                            feature = new Feature() {{
                                                created = OffsetDateTime.parse("2021-02-24T07:00:54.667Z");
                                                description = "nostrum";
                                                id = 332597L;
                                                lastUpdate = OffsetDateTime.parse("2021-10-06T19:32:21.314Z");
                                                name = "Kristopher Zulauf V";
                                            }};
                                            id = 2125L;
                                            lastUpdate = OffsetDateTime.parse("2021-07-04T02:48:58.259Z");
                                        }}),
                                    }};
                                    groupType = new Lookup() {{
                                        created = OffsetDateTime.parse("2021-04-18T04:32:33.209Z");
                                        description = "expedita";
                                        descriptionFriendly = "harum";
                                        displayOrder = 788995L;
                                        id = 753525L;
                                        lastUpdate = OffsetDateTime.parse("2022-07-04T20:52:56.732Z");
                                        lookupType = new LookupType() {{
                                            created = OffsetDateTime.parse("2022-08-23T20:45:26.670Z");
                                            description = "saepe";
                                            id = 770376L;
                                            lastUpdate = OffsetDateTime.parse("2022-08-15T06:03:41.868Z");
                                            type = LookupTypeTypeEnum.CONTACT_POINT_TYPE;
                                        }};
                                        value = "error";
                                    }};
                                    id = 790168L;
                                    lastImportDate = OffsetDateTime.parse("2022-10-26T19:39:55.255Z");
                                    lastUpdate = OffsetDateTime.parse("2022-06-25T04:35:28.436Z");
                                    links = new org.openapis.openapi.models.shared.Link[]{{
                                        add(new Link() {{
                                            created = OffsetDateTime.parse("2022-06-27T13:37:26.116Z");
                                            displayOrder = 4068;
                                            id = 797472L;
                                            lastUpdate = OffsetDateTime.parse("2022-06-08T02:36:26.289Z");
                                            link = "eveniet";
                                            linkType = new Lookup() {{
                                                created = OffsetDateTime.parse("2021-09-21T06:18:53.224Z");
                                                description = "corrupti";
                                                descriptionFriendly = "voluptates";
                                                displayOrder = 265781L;
                                                id = 315747L;
                                                lastUpdate = OffsetDateTime.parse("2021-06-26T15:51:33.867Z");
                                                lookupType = new LookupType() {{
                                                    created = OffsetDateTime.parse("2021-04-25T14:00:39.732Z");
                                                    description = "possimus";
                                                    id = 981451L;
                                                    lastUpdate = OffsetDateTime.parse("2021-06-25T18:58:02.706Z");
                                                    type = LookupTypeTypeEnum.STATISTIC_TYPE;
                                                }};
                                                value = "nostrum";
                                            }};
                                            name = "Mrs. Darlene Bednar";
                                        }}),
                                    }};
                                    locations = new org.openapis.openapi.models.shared.Location[]{{
                                        add(new Location() {{
                                            address = "442 Mckayla Fort";
                                            created = OffsetDateTime.parse("2022-05-31T02:06:03.542Z");
                                            email = "Vern.Smitham11@gmail.com";
                                            id = 750959L;
                                            label = "adipisci";
                                            lastUpdate = OffsetDateTime.parse("2021-03-16T04:32:03.183Z");
                                            name = "Alexis Macejkovic";
                                            phone = "846.824.0644 x8797";
                                            web = "sunt";
                                        }}),
                                    }};
                                    name = "Dr. Christie Bradtke DVM";
                                    parentGroups = new org.openapis.openapi.models.shared.Group[]{{
                                        add(new Group() {{}}),
                                        add(new Group() {{}}),
                                        add(new Group() {{}}),
                                        add(new Group() {{}}),
                                    }};
                                    postcode = "32074";
                                    sftpUser = "quisquam";
                                    shortName = "aperiam";
                                    visible = false;
                                    visibleToJoin = false;
                                }};
                                id = 965491L;
                                identifier = "aut";
                                location = "repellat";
                                name = "Allan Ebert";
                                temporaryUuid = "facere";
                                units = "veniam";
                                value = "eligendi";
                            }}),
                        }};
                        procedures = new org.openapis.openapi.models.shared.FhirProcedure[]{{
                            add(new FhirProcedure() {{
                                bodySite = "nemo";
                                id = 984402L;
                                type = "illum";
                            }}),
                        }};
                        status = "non";
                    }}),
                }};
                groupCode = "repudiandae";
                identifier = "quae";
                observations = new org.openapis.openapi.models.shared.FhirObservation[]{{
                    add(new FhirObservation() {{
                        applies = OffsetDateTime.parse("2022-05-10T00:46:22.048Z");
                        bodySite = "non";
                        comments = "officia";
                        comparator = "magnam";
                        diagram = "quia";
                        group = new Group() {{
                            address1 = "ullam";
                            address2 = "dolor";
                            address3 = "maxime";
                            childGroups = new org.openapis.openapi.models.shared.Group[]{{
                                add(new Group() {{}}),
                            }};
                            code = "ipsa";
                            contactPoints = new org.openapis.openapi.models.shared.ContactPoint[]{{
                                add(new ContactPoint() {{
                                    contactPointType = new ContactPointType() {{
                                        description = "ullam";
                                        id = 478000L;
                                        lookupType = new LookupType() {{
                                            created = OffsetDateTime.parse("2022-12-07T13:46:58.747Z");
                                            description = "maiores";
                                            id = 287425L;
                                            lastUpdate = OffsetDateTime.parse("2022-03-12T06:54:52.730Z");
                                            type = LookupTypeTypeEnum.NEWS_TYPE;
                                        }};
                                        value = ContactPointTypeValueEnum.OUT_OF_HOURS_INFO;
                                    }};
                                    content = "iusto";
                                    created = OffsetDateTime.parse("2020-08-28T14:38:11.674Z");
                                    id = 317169L;
                                    lastUpdate = OffsetDateTime.parse("2022-06-21T19:18:14.487Z");
                                }}),
                            }};
                            created = OffsetDateTime.parse("2021-02-18T09:52:18.104Z");
                            fhirResourceId = "09e41a7a-215c-4a12-a4ba-9d59988192cf";
                            groupFeatures = new org.openapis.openapi.models.shared.GroupFeature[]{{
                                add(new GroupFeature() {{
                                    created = OffsetDateTime.parse("2022-03-30T18:54:55.798Z");
                                    feature = new Feature() {{
                                        created = OffsetDateTime.parse("2022-07-08T23:04:54.874Z");
                                        description = "eligendi";
                                        id = 355092L;
                                        lastUpdate = OffsetDateTime.parse("2022-02-14T10:14:56.572Z");
                                        name = "Leigh Kunde";
                                    }};
                                    id = 884357L;
                                    lastUpdate = OffsetDateTime.parse("2021-10-25T04:34:30.511Z");
                                }}),
                                add(new GroupFeature() {{
                                    created = OffsetDateTime.parse("2021-05-25T18:33:04.164Z");
                                    feature = new Feature() {{
                                        created = OffsetDateTime.parse("2021-11-10T23:30:48.006Z");
                                        description = "consequatur";
                                        id = 717926L;
                                        lastUpdate = OffsetDateTime.parse("2021-06-09T00:38:41.199Z");
                                        name = "Jenny Gleichner";
                                    }};
                                    id = 224646L;
                                    lastUpdate = OffsetDateTime.parse("2022-03-08T15:57:25.344Z");
                                }}),
                                add(new GroupFeature() {{
                                    created = OffsetDateTime.parse("2022-12-11T02:07:14.847Z");
                                    feature = new Feature() {{
                                        created = OffsetDateTime.parse("2022-01-07T14:28:40.207Z");
                                        description = "itaque";
                                        id = 801325L;
                                        lastUpdate = OffsetDateTime.parse("2022-11-16T21:52:45.180Z");
                                        name = "Floyd Bailey";
                                    }};
                                    id = 296594L;
                                    lastUpdate = OffsetDateTime.parse("2022-08-24T21:31:02.010Z");
                                }}),
                                add(new GroupFeature() {{
                                    created = OffsetDateTime.parse("2021-10-20T22:25:10.545Z");
                                    feature = new Feature() {{
                                        created = OffsetDateTime.parse("2022-07-21T17:53:55.867Z");
                                        description = "eum";
                                        id = 632913L;
                                        lastUpdate = OffsetDateTime.parse("2022-04-23T20:01:41.220Z");
                                        name = "Mable Dach";
                                    }};
                                    id = 698306L;
                                    lastUpdate = OffsetDateTime.parse("2022-12-19T04:04:03.437Z");
                                }}),
                            }};
                            groupType = new Lookup() {{
                                created = OffsetDateTime.parse("2022-05-15T16:54:21.019Z");
                                description = "est";
                                descriptionFriendly = "iure";
                                displayOrder = 14126L;
                                id = 809072L;
                                lastUpdate = OffsetDateTime.parse("2021-01-09T20:10:28.664Z");
                                lookupType = new LookupType() {{
                                    created = OffsetDateTime.parse("2022-02-14T18:55:03.442Z");
                                    description = "commodi";
                                    id = 894444L;
                                    lastUpdate = OffsetDateTime.parse("2022-11-23T07:31:25.615Z");
                                    type = LookupTypeTypeEnum.STATISTIC_TYPE;
                                }};
                                value = "voluptate";
                            }};
                            id = 855102L;
                            lastImportDate = OffsetDateTime.parse("2021-10-12T16:46:51.362Z");
                            lastUpdate = OffsetDateTime.parse("2020-10-04T15:37:05.208Z");
                            links = new org.openapis.openapi.models.shared.Link[]{{
                                add(new Link() {{
                                    created = OffsetDateTime.parse("2022-01-06T09:03:43.073Z");
                                    displayOrder = 50859;
                                    id = 975909L;
                                    lastUpdate = OffsetDateTime.parse("2020-10-15T16:25:25.640Z");
                                    link = "facilis";
                                    linkType = new Lookup() {{
                                        created = OffsetDateTime.parse("2022-06-03T06:06:09.794Z");
                                        description = "ducimus";
                                        descriptionFriendly = "aperiam";
                                        displayOrder = 919652L;
                                        id = 918082L;
                                        lastUpdate = OffsetDateTime.parse("2022-07-13T14:40:55.583Z");
                                        lookupType = new LookupType() {{
                                            created = OffsetDateTime.parse("2022-02-02T09:57:16.835Z");
                                            description = "neque";
                                            id = 418407L;
                                            lastUpdate = OffsetDateTime.parse("2022-06-04T06:48:29.044Z");
                                            type = LookupTypeTypeEnum.NEWS_TYPE;
                                        }};
                                        value = "debitis";
                                    }};
                                    name = "Erik Schmitt III";
                                }}),
                            }};
                            locations = new org.openapis.openapi.models.shared.Location[]{{
                                add(new Location() {{
                                    address = "1708 Aditya Lodge";
                                    created = OffsetDateTime.parse("2022-12-03T14:49:13.058Z");
                                    email = "Osvaldo66@gmail.com";
                                    id = 218153L;
                                    label = "temporibus";
                                    lastUpdate = OffsetDateTime.parse("2021-11-29T14:00:40.022Z");
                                    name = "Annie Koelpin";
                                    phone = "482-994-3342 x8669";
                                    web = "natus";
                                }}),
                                add(new Location() {{
                                    address = "64855 Blanda Fields";
                                    created = OffsetDateTime.parse("2021-01-29T00:11:24.644Z");
                                    email = "Jude.Shields78@gmail.com";
                                    id = 956449L;
                                    label = "consequuntur";
                                    lastUpdate = OffsetDateTime.parse("2021-01-19T10:28:28.371Z");
                                    name = "Tami Durgan";
                                    phone = "(334) 848-1271 x17855";
                                    web = "beatae";
                                }}),
                                add(new Location() {{
                                    address = "3833 Wintheiser Junction";
                                    created = OffsetDateTime.parse("2021-09-14T11:11:27.779Z");
                                    email = "Piper.Green61@gmail.com";
                                    id = 684746L;
                                    label = "saepe";
                                    lastUpdate = OffsetDateTime.parse("2022-10-02T13:25:53.817Z");
                                    name = "Maxine Breitenberg";
                                    phone = "826.747.0804";
                                    web = "optio";
                                }}),
                                add(new Location() {{
                                    address = "017 Modesta Pike";
                                    created = OffsetDateTime.parse("2022-09-15T01:04:47.587Z");
                                    email = "Vergie17@yahoo.com";
                                    id = 776764L;
                                    label = "fugiat";
                                    lastUpdate = OffsetDateTime.parse("2022-03-28T07:57:09.844Z");
                                    name = "Carlton Jakubowski";
                                    phone = "975.316.9451 x28437";
                                    web = "delectus";
                                }}),
                            }};
                            name = "Clark Ullrich";
                            parentGroups = new org.openapis.openapi.models.shared.Group[]{{
                                add(new Group() {{}}),
                                add(new Group() {{}}),
                                add(new Group() {{}}),
                                add(new Group() {{}}),
                            }};
                            postcode = "45049-4974";
                            sftpUser = "quibusdam";
                            shortName = "assumenda";
                            visible = false;
                            visibleToJoin = false;
                        }};
                        id = 657897L;
                        identifier = "molestiae";
                        location = "ipsa";
                        name = "Dr. Guadalupe Jacobs";
                        temporaryUuid = "aut";
                        units = "reprehenderit";
                        value = "nostrum";
                    }}),
                    add(new FhirObservation() {{
                        applies = OffsetDateTime.parse("2021-10-07T23:31:59.799Z");
                        bodySite = "numquam";
                        comments = "fugiat";
                        comparator = "autem";
                        diagram = "et";
                        group = new Group() {{
                            address1 = "quisquam";
                            address2 = "illo";
                            address3 = "tempora";
                            childGroups = new org.openapis.openapi.models.shared.Group[]{{
                                add(new Group() {{}}),
                                add(new Group() {{}}),
                                add(new Group() {{}}),
                                add(new Group() {{}}),
                            }};
                            code = "facere";
                            contactPoints = new org.openapis.openapi.models.shared.ContactPoint[]{{
                                add(new ContactPoint() {{
                                    contactPointType = new ContactPointType() {{
                                        description = "aut";
                                        id = 131924L;
                                        lookupType = new LookupType() {{
                                            created = OffsetDateTime.parse("2022-07-10T18:08:32.436Z");
                                            description = "recusandae";
                                            id = 204633L;
                                            lastUpdate = OffsetDateTime.parse("2022-04-01T17:48:28.978Z");
                                            type = LookupTypeTypeEnum.MENU;
                                        }};
                                        value = ContactPointTypeValueEnum.APPOINTMENT_EMAIL;
                                    }};
                                    content = "iste";
                                    created = OffsetDateTime.parse("2022-07-18T13:22:41.461Z");
                                    id = 967856L;
                                    lastUpdate = OffsetDateTime.parse("2022-05-14T01:56:43.453Z");
                                }}),
                                add(new ContactPoint() {{
                                    contactPointType = new ContactPointType() {{
                                        description = "exercitationem";
                                        id = 259656L;
                                        lookupType = new LookupType() {{
                                            created = OffsetDateTime.parse("2022-11-13T20:54:15.995Z");
                                            description = "similique";
                                            id = 697314L;
                                            lastUpdate = OffsetDateTime.parse("2021-03-25T22:45:23.869Z");
                                            type = LookupTypeTypeEnum.NEWS_TYPE;
                                        }};
                                        value = ContactPointTypeValueEnum.PV_ADMIN_PHONE;
                                    }};
                                    content = "beatae";
                                    created = OffsetDateTime.parse("2022-10-10T02:32:57.504Z");
                                    id = 38735L;
                                    lastUpdate = OffsetDateTime.parse("2022-02-23T21:59:04.900Z");
                                }}),
                                add(new ContactPoint() {{
                                    contactPointType = new ContactPointType() {{
                                        description = "qui";
                                        id = 190657L;
                                        lookupType = new LookupType() {{
                                            created = OffsetDateTime.parse("2022-11-25T17:26:41.025Z");
                                            description = "dolorem";
                                            id = 891921L;
                                            lastUpdate = OffsetDateTime.parse("2022-05-20T10:56:48.599Z");
                                            type = LookupTypeTypeEnum.GENDER;
                                        }};
                                        value = ContactPointTypeValueEnum.TRUST_WEB_ADDRESS;
                                    }};
                                    content = "veniam";
                                    created = OffsetDateTime.parse("2021-09-02T20:16:23.953Z");
                                    id = 889034L;
                                    lastUpdate = OffsetDateTime.parse("2021-10-30T21:51:05.641Z");
                                }}),
                            }};
                            created = OffsetDateTime.parse("2020-09-30T14:18:03.569Z");
                            fhirResourceId = "de9e729c-9d4f-42d8-a446-40ca60db73a2";
                            groupFeatures = new org.openapis.openapi.models.shared.GroupFeature[]{{
                                add(new GroupFeature() {{
                                    created = OffsetDateTime.parse("2022-07-30T00:44:02.159Z");
                                    feature = new Feature() {{
                                        created = OffsetDateTime.parse("2022-02-19T02:21:39.861Z");
                                        description = "autem";
                                        id = 449909L;
                                        lastUpdate = OffsetDateTime.parse("2020-08-23T06:10:38.086Z");
                                        name = "Marcella Lang";
                                    }};
                                    id = 327811L;
                                    lastUpdate = OffsetDateTime.parse("2022-11-29T16:11:01.978Z");
                                }}),
                                add(new GroupFeature() {{
                                    created = OffsetDateTime.parse("2022-11-07T17:10:19.019Z");
                                    feature = new Feature() {{
                                        created = OffsetDateTime.parse("2022-11-05T06:19:27.713Z");
                                        description = "laboriosam";
                                        id = 671090L;
                                        lastUpdate = OffsetDateTime.parse("2021-11-19T10:41:43.307Z");
                                        name = "Alan Kohler";
                                    }};
                                    id = 508424L;
                                    lastUpdate = OffsetDateTime.parse("2022-03-23T01:12:06.412Z");
                                }}),
                                add(new GroupFeature() {{
                                    created = OffsetDateTime.parse("2022-06-02T08:41:47.333Z");
                                    feature = new Feature() {{
                                        created = OffsetDateTime.parse("2022-08-16T07:55:38.521Z");
                                        description = "similique";
                                        id = 949400L;
                                        lastUpdate = OffsetDateTime.parse("2021-12-30T02:47:30.138Z");
                                        name = "Christie Nader";
                                    }};
                                    id = 14962L;
                                    lastUpdate = OffsetDateTime.parse("2021-10-18T10:37:44.792Z");
                                }}),
                                add(new GroupFeature() {{
                                    created = OffsetDateTime.parse("2020-08-05T08:14:56.620Z");
                                    feature = new Feature() {{
                                        created = OffsetDateTime.parse("2022-09-19T09:29:33.881Z");
                                        description = "fugiat";
                                        id = 706345L;
                                        lastUpdate = OffsetDateTime.parse("2022-07-15T20:04:46.803Z");
                                        name = "Dr. Marion Doyle";
                                    }};
                                    id = 793526L;
                                    lastUpdate = OffsetDateTime.parse("2021-08-25T17:17:10.377Z");
                                }}),
                            }};
                            groupType = new Lookup() {{
                                created = OffsetDateTime.parse("2021-11-13T01:33:12.613Z");
                                description = "quibusdam";
                                descriptionFriendly = "aut";
                                displayOrder = 798905L;
                                id = 701940L;
                                lastUpdate = OffsetDateTime.parse("2020-02-09T09:25:34.067Z");
                                lookupType = new LookupType() {{
                                    created = OffsetDateTime.parse("2020-08-31T12:30:44.121Z");
                                    description = "possimus";
                                    id = 233076L;
                                    lastUpdate = OffsetDateTime.parse("2022-09-26T10:57:43.185Z");
                                    type = LookupTypeTypeEnum.IBD_CROHNSBEHAVIOUR;
                                }};
                                value = "autem";
                            }};
                            id = 996450L;
                            lastImportDate = OffsetDateTime.parse("2022-11-09T00:52:22.655Z");
                            lastUpdate = OffsetDateTime.parse("2022-04-07T13:36:21.889Z");
                            links = new org.openapis.openapi.models.shared.Link[]{{
                                add(new Link() {{
                                    created = OffsetDateTime.parse("2020-08-23T05:40:04.020Z");
                                    displayOrder = 651742;
                                    id = 706471L;
                                    lastUpdate = OffsetDateTime.parse("2022-12-30T04:32:41.441Z");
                                    link = "laborum";
                                    linkType = new Lookup() {{
                                        created = OffsetDateTime.parse("2020-03-21T02:08:30.231Z");
                                        description = "quis";
                                        descriptionFriendly = "earum";
                                        displayOrder = 28818L;
                                        id = 866285L;
                                        lastUpdate = OffsetDateTime.parse("2021-11-20T17:49:05.964Z");
                                        lookupType = new LookupType() {{
                                            created = OffsetDateTime.parse("2021-11-09T13:28:18.340Z");
                                            description = "laborum";
                                            id = 959477L;
                                            lastUpdate = OffsetDateTime.parse("2022-05-04T05:56:55.555Z");
                                            type = LookupTypeTypeEnum.IBD_SURGERYMAINPROCEDURE;
                                        }};
                                        value = "perferendis";
                                    }};
                                    name = "Amber Lind";
                                }}),
                                add(new Link() {{
                                    created = OffsetDateTime.parse("2022-04-10T07:38:12.933Z");
                                    displayOrder = 303668;
                                    id = 94668L;
                                    lastUpdate = OffsetDateTime.parse("2022-03-23T08:15:55.694Z");
                                    link = "expedita";
                                    linkType = new Lookup() {{
                                        created = OffsetDateTime.parse("2022-06-29T18:13:08.491Z");
                                        description = "assumenda";
                                        descriptionFriendly = "et";
                                        displayOrder = 476765L;
                                        id = 410045L;
                                        lastUpdate = OffsetDateTime.parse("2020-07-27T11:23:20.202Z");
                                        lookupType = new LookupType() {{
                                            created = OffsetDateTime.parse("2022-03-29T12:01:17.263Z");
                                            description = "numquam";
                                            id = 236392L;
                                            lastUpdate = OffsetDateTime.parse("2022-03-14T17:59:05.485Z");
                                            type = LookupTypeTypeEnum.GROUP;
                                        }};
                                        value = "doloribus";
                                    }};
                                    name = "Ms. Martha Stoltenberg Jr.";
                                }}),
                                add(new Link() {{
                                    created = OffsetDateTime.parse("2022-07-17T10:10:27.040Z");
                                    displayOrder = 763837;
                                    id = 732216L;
                                    lastUpdate = OffsetDateTime.parse("2022-01-19T13:13:08.058Z");
                                    link = "itaque";
                                    linkType = new Lookup() {{
                                        created = OffsetDateTime.parse("2022-03-30T14:44:44.698Z");
                                        description = "hic";
                                        descriptionFriendly = "esse";
                                        displayOrder = 167765L;
                                        id = 93508L;
                                        lastUpdate = OffsetDateTime.parse("2022-06-11T23:23:42.172Z");
                                        lookupType = new LookupType() {{
                                            created = OffsetDateTime.parse("2022-12-29T14:42:31.255Z");
                                            description = "nihil";
                                            id = 459634L;
                                            lastUpdate = OffsetDateTime.parse("2022-01-08T03:36:18.234Z");
                                            type = LookupTypeTypeEnum.FEATURE_TYPE;
                                        }};
                                        value = "odit";
                                    }};
                                    name = "Stanley Rau";
                                }}),
                                add(new Link() {{
                                    created = OffsetDateTime.parse("2020-11-16T18:55:25.598Z");
                                    displayOrder = 889994;
                                    id = 2725L;
                                    lastUpdate = OffsetDateTime.parse("2022-07-25T15:41:53.660Z");
                                    link = "non";
                                    linkType = new Lookup() {{
                                        created = OffsetDateTime.parse("2022-02-03T22:47:27.809Z");
                                        description = "distinctio";
                                        descriptionFriendly = "suscipit";
                                        displayOrder = 852973L;
                                        id = 595858L;
                                        lastUpdate = OffsetDateTime.parse("2022-05-29T22:48:58.861Z");
                                        lookupType = new LookupType() {{
                                            created = OffsetDateTime.parse("2021-05-05T19:38:34.320Z");
                                            description = "aliquid";
                                            id = 906140L;
                                            lastUpdate = OffsetDateTime.parse("2020-04-20T12:47:39.383Z");
                                            type = LookupTypeTypeEnum.IBD_SURGERYMAINPROCEDURE;
                                        }};
                                        value = "eius";
                                    }};
                                    name = "Lydia Hirthe DVM";
                                }}),
                            }};
                            locations = new org.openapis.openapi.models.shared.Location[]{{
                                add(new Location() {{
                                    address = "6046 Daniel Turnpike";
                                    created = OffsetDateTime.parse("2022-02-14T15:34:30.165Z");
                                    email = "Chaz.Windler50@yahoo.com";
                                    id = 851873L;
                                    label = "beatae";
                                    lastUpdate = OffsetDateTime.parse("2022-09-09T07:24:08.598Z");
                                    name = "Fannie Kris";
                                    phone = "(361) 772-3771";
                                    web = "totam";
                                }}),
                                add(new Location() {{
                                    address = "30059 Genoveva Circle";
                                    created = OffsetDateTime.parse("2020-05-11T10:26:07.205Z");
                                    email = "Clovis.Treutel@yahoo.com";
                                    id = 271465L;
                                    label = "ut";
                                    lastUpdate = OffsetDateTime.parse("2021-12-12T20:54:41.368Z");
                                    name = "Joey Reinger";
                                    phone = "1-268-898-8200 x724";
                                    web = "possimus";
                                }}),
                                add(new Location() {{
                                    address = "6615 Maria Ford";
                                    created = OffsetDateTime.parse("2021-04-17T08:51:14.065Z");
                                    email = "Grant_Conroy@yahoo.com";
                                    id = 225653L;
                                    label = "eligendi";
                                    lastUpdate = OffsetDateTime.parse("2021-01-27T00:15:05.903Z");
                                    name = "Sylvester Block";
                                    phone = "1-962-431-4617 x88220";
                                    web = "saepe";
                                }}),
                                add(new Location() {{
                                    address = "5579 Sawayn Viaduct";
                                    created = OffsetDateTime.parse("2022-09-17T03:41:03.733Z");
                                    email = "Gladys.Stroman83@yahoo.com";
                                    id = 373465L;
                                    label = "aliquid";
                                    lastUpdate = OffsetDateTime.parse("2021-08-07T06:21:00.878Z");
                                    name = "Mrs. Verna Anderson";
                                    phone = "395-874-1499";
                                    web = "nihil";
                                }}),
                            }};
                            name = "Pat Kertzmann";
                            parentGroups = new org.openapis.openapi.models.shared.Group[]{{
                                add(new Group() {{}}),
                                add(new Group() {{}}),
                            }};
                            postcode = "93640";
                            sftpUser = "recusandae";
                            shortName = "consectetur";
                            visible = false;
                            visibleToJoin = false;
                        }};
                        id = 877848L;
                        identifier = "eius";
                        location = "optio";
                        name = "Gregg Russel";
                        temporaryUuid = "cupiditate";
                        units = "ab";
                        value = "necessitatibus";
                    }}),
                    add(new FhirObservation() {{
                        applies = OffsetDateTime.parse("2022-01-03T16:32:06.063Z");
                        bodySite = "qui";
                        comments = "aliquid";
                        comparator = "sed";
                        diagram = "modi";
                        group = new Group() {{
                            address1 = "at";
                            address2 = "aperiam";
                            address3 = "alias";
                            childGroups = new org.openapis.openapi.models.shared.Group[]{{
                                add(new Group() {{}}),
                            }};
                            code = "quae";
                            contactPoints = new org.openapis.openapi.models.shared.ContactPoint[]{{
                                add(new ContactPoint() {{
                                    contactPointType = new ContactPointType() {{
                                        description = "repudiandae";
                                        id = 941174L;
                                        lookupType = new LookupType() {{
                                            created = OffsetDateTime.parse("2022-09-04T15:40:29.486Z");
                                            description = "impedit";
                                            id = 888573L;
                                            lastUpdate = OffsetDateTime.parse("2022-10-06T18:29:28.581Z");
                                            type = LookupTypeTypeEnum.ROLE;
                                        }};
                                        value = ContactPointTypeValueEnum.UNIT_ENQUIRIES_EMAIL;
                                    }};
                                    content = "minus";
                                    created = OffsetDateTime.parse("2022-10-17T07:15:17.259Z");
                                    id = 892485L;
                                    lastUpdate = OffsetDateTime.parse("2021-08-09T15:40:40.365Z");
                                }}),
                                add(new ContactPoint() {{
                                    contactPointType = new ContactPointType() {{
                                        description = "suscipit";
                                        id = 342129L;
                                        lookupType = new LookupType() {{
                                            created = OffsetDateTime.parse("2022-01-10T02:24:36.314Z");
                                            description = "tenetur";
                                            id = 234641L;
                                            lastUpdate = OffsetDateTime.parse("2022-12-21T00:13:56.379Z");
                                            type = LookupTypeTypeEnum.RELATIONSHIP_TYPE;
                                        }};
                                        value = ContactPointTypeValueEnum.UNIT_WEB_ADDRESS;
                                    }};
                                    content = "dolore";
                                    created = OffsetDateTime.parse("2021-11-21T19:48:09.109Z");
                                    id = 739569L;
                                    lastUpdate = OffsetDateTime.parse("2021-09-01T20:26:55.162Z");
                                }}),
                            }};
                            created = OffsetDateTime.parse("2020-04-06T02:46:36.774Z");
                            fhirResourceId = "e400ae9f-92ca-4f1b-825f-1d14718c6fa2";
                            groupFeatures = new org.openapis.openapi.models.shared.GroupFeature[]{{
                                add(new GroupFeature() {{
                                    created = OffsetDateTime.parse("2021-04-26T10:50:20.795Z");
                                    feature = new Feature() {{
                                        created = OffsetDateTime.parse("2022-03-28T01:54:26.748Z");
                                        description = "accusantium";
                                        id = 416306L;
                                        lastUpdate = OffsetDateTime.parse("2022-01-04T19:33:29.819Z");
                                        name = "Salvador Heller";
                                    }};
                                    id = 169937L;
                                    lastUpdate = OffsetDateTime.parse("2020-05-25T06:53:51.738Z");
                                }}),
                                add(new GroupFeature() {{
                                    created = OffsetDateTime.parse("2022-08-21T19:51:48.639Z");
                                    feature = new Feature() {{
                                        created = OffsetDateTime.parse("2022-01-06T17:09:13.013Z");
                                        description = "porro";
                                        id = 259396L;
                                        lastUpdate = OffsetDateTime.parse("2022-04-06T21:39:41.903Z");
                                        name = "Brenda Reichel";
                                    }};
                                    id = 515768L;
                                    lastUpdate = OffsetDateTime.parse("2021-01-24T16:59:17.681Z");
                                }}),
                                add(new GroupFeature() {{
                                    created = OffsetDateTime.parse("2022-01-06T14:15:54.380Z");
                                    feature = new Feature() {{
                                        created = OffsetDateTime.parse("2022-03-23T03:39:24.144Z");
                                        description = "labore";
                                        id = 232501L;
                                        lastUpdate = OffsetDateTime.parse("2022-08-26T21:34:43.843Z");
                                        name = "Rosalie Durgan";
                                    }};
                                    id = 106404L;
                                    lastUpdate = OffsetDateTime.parse("2020-12-05T03:00:18.916Z");
                                }}),
                                add(new GroupFeature() {{
                                    created = OffsetDateTime.parse("2021-01-15T06:48:59.539Z");
                                    feature = new Feature() {{
                                        created = OffsetDateTime.parse("2022-01-20T09:27:24.312Z");
                                        description = "quam";
                                        id = 364332L;
                                        lastUpdate = OffsetDateTime.parse("2022-02-07T19:07:07.452Z");
                                        name = "Brandon Emmerich DDS";
                                    }};
                                    id = 54383L;
                                    lastUpdate = OffsetDateTime.parse("2022-04-14T21:44:16.462Z");
                                }}),
                            }};
                            groupType = new Lookup() {{
                                created = OffsetDateTime.parse("2022-03-02T04:38:56.657Z");
                                description = "maxime";
                                descriptionFriendly = "non";
                                displayOrder = 651659L;
                                id = 920225L;
                                lastUpdate = OffsetDateTime.parse("2022-03-01T10:31:51.232Z");
                                lookupType = new LookupType() {{
                                    created = OffsetDateTime.parse("2022-04-04T06:30:12.205Z");
                                    description = "voluptas";
                                    id = 483896L;
                                    lastUpdate = OffsetDateTime.parse("2020-05-05T06:53:28.787Z");
                                    type = LookupTypeTypeEnum.IBD_FAMILYHISTORY;
                                }};
                                value = "tenetur";
                            }};
                            id = 333868L;
                            lastImportDate = OffsetDateTime.parse("2022-10-21T22:55:58.985Z");
                            lastUpdate = OffsetDateTime.parse("2022-11-05T05:31:08.839Z");
                            links = new org.openapis.openapi.models.shared.Link[]{{
                                add(new Link() {{
                                    created = OffsetDateTime.parse("2022-04-20T05:34:05.165Z");
                                    displayOrder = 724140;
                                    id = 123268L;
                                    lastUpdate = OffsetDateTime.parse("2020-10-08T17:36:12.111Z");
                                    link = "eveniet";
                                    linkType = new Lookup() {{
                                        created = OffsetDateTime.parse("2020-03-13T08:56:12.716Z");
                                        description = "doloribus";
                                        descriptionFriendly = "voluptatibus";
                                        displayOrder = 480957L;
                                        id = 778975L;
                                        lastUpdate = OffsetDateTime.parse("2022-04-08T09:04:14.407Z");
                                        lookupType = new LookupType() {{
                                            created = OffsetDateTime.parse("2022-08-29T17:56:33.057Z");
                                            description = "commodi";
                                            id = 928900L;
                                            lastUpdate = OffsetDateTime.parse("2022-09-22T16:21:13.344Z");
                                            type = LookupTypeTypeEnum.NEWS_TYPE;
                                        }};
                                        value = "corrupti";
                                    }};
                                    name = "Colleen Hilpert";
                                }}),
                                add(new Link() {{
                                    created = OffsetDateTime.parse("2022-01-30T17:10:17.224Z");
                                    displayOrder = 385106;
                                    id = 512223L;
                                    lastUpdate = OffsetDateTime.parse("2022-07-12T18:03:14.635Z");
                                    link = "labore";
                                    linkType = new Lookup() {{
                                        created = OffsetDateTime.parse("2022-06-29T13:19:48.949Z");
                                        description = "quae";
                                        descriptionFriendly = "nisi";
                                        displayOrder = 229184L;
                                        id = 949051L;
                                        lastUpdate = OffsetDateTime.parse("2022-05-27T23:32:16.561Z");
                                        lookupType = new LookupType() {{
                                            created = OffsetDateTime.parse("2021-08-02T21:25:32.244Z");
                                            description = "iusto";
                                            id = 595638L;
                                            lastUpdate = OffsetDateTime.parse("2022-08-06T03:14:32.967Z");
                                            type = LookupTypeTypeEnum.IBD_EGIMCOMPLICATION;
                                        }};
                                        value = "quae";
                                    }};
                                    name = "George West MD";
                                }}),
                                add(new Link() {{
                                    created = OffsetDateTime.parse("2022-08-22T16:04:53.291Z");
                                    displayOrder = 61375;
                                    id = 633569L;
                                    lastUpdate = OffsetDateTime.parse("2022-12-28T01:19:38.325Z");
                                    link = "voluptates";
                                    linkType = new Lookup() {{
                                        created = OffsetDateTime.parse("2022-03-23T23:53:15.044Z");
                                        description = "incidunt";
                                        descriptionFriendly = "id";
                                        displayOrder = 882841L;
                                        id = 399696L;
                                        lastUpdate = OffsetDateTime.parse("2022-12-13T19:30:37.541Z");
                                        lookupType = new LookupType() {{
                                            created = OffsetDateTime.parse("2022-09-28T00:11:06.745Z");
                                            description = "consequuntur";
                                            id = 480869L;
                                            lastUpdate = OffsetDateTime.parse("2022-07-30T16:27:39.885Z");
                                            type = LookupTypeTypeEnum.IDENTIFIER;
                                        }};
                                        value = "esse";
                                    }};
                                    name = "George Bernhard III";
                                }}),
                                add(new Link() {{
                                    created = OffsetDateTime.parse("2022-12-13T14:47:32.244Z");
                                    displayOrder = 524194;
                                    id = 939214L;
                                    lastUpdate = OffsetDateTime.parse("2022-05-29T12:25:57.935Z");
                                    link = "iste";
                                    linkType = new Lookup() {{
                                        created = OffsetDateTime.parse("2022-12-03T08:50:45.233Z");
                                        description = "eligendi";
                                        descriptionFriendly = "dolores";
                                        displayOrder = 348663L;
                                        id = 442079L;
                                        lastUpdate = OffsetDateTime.parse("2022-08-16T10:09:10.895Z");
                                        lookupType = new LookupType() {{
                                            created = OffsetDateTime.parse("2022-02-19T00:54:10.171Z");
                                            description = "eum";
                                            id = 980715L;
                                            lastUpdate = OffsetDateTime.parse("2022-05-20T02:03:40.918Z");
                                            type = LookupTypeTypeEnum.CODE_TYPE;
                                        }};
                                        value = "mollitia";
                                    }};
                                    name = "Cecelia Witting";
                                }}),
                            }};
                            locations = new org.openapis.openapi.models.shared.Location[]{{
                                add(new Location() {{
                                    address = "244 Wisoky Plaza";
                                    created = OffsetDateTime.parse("2022-12-29T09:52:12.215Z");
                                    email = "Bert60@gmail.com";
                                    id = 90445L;
                                    label = "cum";
                                    lastUpdate = OffsetDateTime.parse("2022-02-06T04:01:08.832Z");
                                    name = "Armando Rice";
                                    phone = "518-906-5813 x9841";
                                    web = "voluptates";
                                }}),
                                add(new Location() {{
                                    address = "1096 Deanna Cape";
                                    created = OffsetDateTime.parse("2022-03-06T12:26:33.568Z");
                                    email = "Oren51@hotmail.com";
                                    id = 246846L;
                                    label = "natus";
                                    lastUpdate = OffsetDateTime.parse("2022-01-12T09:35:32.140Z");
                                    name = "Moses Murazik";
                                    phone = "(811) 250-9703";
                                    web = "reprehenderit";
                                }}),
                            }};
                            name = "Noel Maggio";
                            parentGroups = new org.openapis.openapi.models.shared.Group[]{{
                                add(new Group() {{}}),
                            }};
                            postcode = "41785-7831";
                            sftpUser = "eligendi";
                            shortName = "atque";
                            visible = false;
                            visibleToJoin = false;
                        }};
                        id = 393177L;
                        identifier = "omnis";
                        location = "nulla";
                        name = "Kelly Sporer";
                        temporaryUuid = "illo";
                        units = "unde";
                        value = "repellendus";
                    }}),
                }};
                patient = new FhirPatient() {{
                    address1 = "consequatur";
                    address2 = "dignissimos";
                    address3 = "harum";
                    address4 = "odit";
                    contacts = new org.openapis.openapi.models.shared.FhirContact[]{{
                        add(new FhirContact() {{
                            id = 49892L;
                            system = "deserunt";
                            use = "corporis";
                            value = "praesentium";
                        }}),
                    }};
                    dateOfBirth = OffsetDateTime.parse("2020-02-21T07:18:38.577Z");
                    dateOfBirthNoTime = "temporibus";
                    forename = "consequuntur";
                    gender = "male";
                    group = new Group() {{
                        address1 = "suscipit";
                        address2 = "iusto";
                        address3 = "nulla";
                        childGroups = new org.openapis.openapi.models.shared.Group[]{{
                            add(new Group() {{}}),
                            add(new Group() {{}}),
                            add(new Group() {{}}),
                            add(new Group() {{}}),
                        }};
                        code = "laudantium";
                        contactPoints = new org.openapis.openapi.models.shared.ContactPoint[]{{
                            add(new ContactPoint() {{
                                contactPointType = new ContactPointType() {{
                                    description = "facere";
                                    id = 512782L;
                                    lookupType = new LookupType() {{
                                        created = OffsetDateTime.parse("2022-09-11T02:42:21.444Z");
                                        description = "fuga";
                                        id = 533219L;
                                        lastUpdate = OffsetDateTime.parse("2021-11-13T09:49:33.984Z");
                                        type = LookupTypeTypeEnum.MENU;
                                    }};
                                    value = ContactPointTypeValueEnum.APPOINTMENT_PHONE;
                                }};
                                content = "accusamus";
                                created = OffsetDateTime.parse("2022-10-27T16:18:15.952Z");
                                id = 21666L;
                                lastUpdate = OffsetDateTime.parse("2020-07-23T06:27:14.390Z");
                            }}),
                            add(new ContactPoint() {{
                                contactPointType = new ContactPointType() {{
                                    description = "molestias";
                                    id = 790286L;
                                    lookupType = new LookupType() {{
                                        created = OffsetDateTime.parse("2022-05-13T02:33:30.909Z");
                                        description = "sapiente";
                                        id = 819185L;
                                        lastUpdate = OffsetDateTime.parse("2022-11-16T02:24:19.097Z");
                                        type = LookupTypeTypeEnum.RELATIONSHIP_TYPE;
                                    }};
                                    value = ContactPointTypeValueEnum.APPOINTMENT_PHONE;
                                }};
                                content = "nesciunt";
                                created = OffsetDateTime.parse("2022-08-22T23:14:33.909Z");
                                id = 135376L;
                                lastUpdate = OffsetDateTime.parse("2022-11-27T11:28:42.422Z");
                            }}),
                            add(new ContactPoint() {{
                                contactPointType = new ContactPointType() {{
                                    description = "consequuntur";
                                    id = 689127L;
                                    lookupType = new LookupType() {{
                                        created = OffsetDateTime.parse("2021-01-20T21:40:12.082Z");
                                        description = "officiis";
                                        id = 97192L;
                                        lastUpdate = OffsetDateTime.parse("2021-05-16T06:10:44.635Z");
                                        type = LookupTypeTypeEnum.NEWS_TYPE;
                                    }};
                                    value = ContactPointTypeValueEnum.OUT_OF_HOURS_INFO;
                                }};
                                content = "quisquam";
                                created = OffsetDateTime.parse("2021-12-02T09:48:01.479Z");
                                id = 962744L;
                                lastUpdate = OffsetDateTime.parse("2020-08-06T22:23:22.001Z");
                            }}),
                            add(new ContactPoint() {{
                                contactPointType = new ContactPointType() {{
                                    description = "saepe";
                                    id = 655102L;
                                    lookupType = new LookupType() {{
                                        created = OffsetDateTime.parse("2021-03-06T09:57:11.527Z");
                                        description = "molestiae";
                                        id = 672368L;
                                        lastUpdate = OffsetDateTime.parse("2021-12-31T19:39:22.415Z");
                                        type = LookupTypeTypeEnum.FEATURE_TYPE;
                                    }};
                                    value = ContactPointTypeValueEnum.UNIT_WEB_ADDRESS;
                                }};
                                content = "et";
                                created = OffsetDateTime.parse("2022-08-12T18:34:50.415Z");
                                id = 187267L;
                                lastUpdate = OffsetDateTime.parse("2020-05-20T09:41:58.240Z");
                            }}),
                        }};
                        created = OffsetDateTime.parse("2022-02-22T08:27:46.463Z");
                        fhirResourceId = "d77c1d86-0662-437d-8227-866db8a749e3";
                        groupFeatures = new org.openapis.openapi.models.shared.GroupFeature[]{{
                            add(new GroupFeature() {{
                                created = OffsetDateTime.parse("2022-06-12T07:06:12.170Z");
                                feature = new Feature() {{
                                    created = OffsetDateTime.parse("2022-11-25T22:17:16.108Z");
                                    description = "beatae";
                                    id = 773351L;
                                    lastUpdate = OffsetDateTime.parse("2021-08-29T23:04:14.507Z");
                                    name = "Patti Gottlieb DDS";
                                }};
                                id = 38004L;
                                lastUpdate = OffsetDateTime.parse("2022-10-01T01:50:31.983Z");
                            }}),
                            add(new GroupFeature() {{
                                created = OffsetDateTime.parse("2022-05-05T10:37:44.961Z");
                                feature = new Feature() {{
                                    created = OffsetDateTime.parse("2021-08-08T15:17:02.460Z");
                                    description = "molestiae";
                                    id = 368456L;
                                    lastUpdate = OffsetDateTime.parse("2021-05-29T12:53:01.964Z");
                                    name = "Terrance Goodwin";
                                }};
                                id = 157397L;
                                lastUpdate = OffsetDateTime.parse("2022-12-30T12:00:41.864Z");
                            }}),
                            add(new GroupFeature() {{
                                created = OffsetDateTime.parse("2022-08-14T03:55:07.715Z");
                                feature = new Feature() {{
                                    created = OffsetDateTime.parse("2022-03-10T02:15:36.089Z");
                                    description = "rem";
                                    id = 363891L;
                                    lastUpdate = OffsetDateTime.parse("2020-08-05T08:49:18.429Z");
                                    name = "Ms. Arthur O'Reilly";
                                }};
                                id = 847447L;
                                lastUpdate = OffsetDateTime.parse("2022-06-30T12:51:14.821Z");
                            }}),
                        }};
                        groupType = new Lookup() {{
                            created = OffsetDateTime.parse("2021-07-10T05:12:01.232Z");
                            description = "saepe";
                            descriptionFriendly = "odit";
                            displayOrder = 267095L;
                            id = 947821L;
                            lastUpdate = OffsetDateTime.parse("2022-05-18T16:43:55.440Z");
                            lookupType = new LookupType() {{
                                created = OffsetDateTime.parse("2022-08-11T13:09:19.369Z");
                                description = "magnam";
                                id = 648495L;
                                lastUpdate = OffsetDateTime.parse("2020-12-07T09:35:40.457Z");
                                type = LookupTypeTypeEnum.GROUP;
                            }};;
                            value = "odio";
                        }};;
                        id = 190895L;
                        lastImportDate = OffsetDateTime.parse("2022-03-31T22:49:31.020Z");
                        lastUpdate = OffsetDateTime.parse("2022-03-24T22:39:53.072Z");
                        links = new org.openapis.openapi.models.shared.Link[]{{
                            add(new Link() {{
                                created = OffsetDateTime.parse("2022-04-11T18:08:29.434Z");
                                displayOrder = 815452;
                                id = 290044L;
                                lastUpdate = OffsetDateTime.parse("2022-09-20T02:45:07.981Z");
                                link = "unde";
                                linkType = new Lookup() {{
                                    created = OffsetDateTime.parse("2021-08-21T06:26:59.389Z");
                                    description = "est";
                                    descriptionFriendly = "quae";
                                    displayOrder = 890615L;
                                    id = 97799L;
                                    lastUpdate = OffsetDateTime.parse("2022-05-24T05:52:16.008Z");
                                    lookupType = new LookupType() {{
                                        created = OffsetDateTime.parse("2022-08-19T17:41:00.279Z");
                                        description = "nisi";
                                        id = 995715L;
                                        lastUpdate = OffsetDateTime.parse("2022-03-07T11:01:36.834Z");
                                        type = LookupTypeTypeEnum.ROLE;
                                    }};
                                    value = "recusandae";
                                }};
                                name = "Alan Auer";
                            }}),
                        }};
                        locations = new org.openapis.openapi.models.shared.Location[]{{
                            add(new Location() {{
                                address = "7902 McCullough Expressway";
                                created = OffsetDateTime.parse("2021-03-24T15:30:02.249Z");
                                email = "Doug76@gmail.com";
                                id = 685537L;
                                label = "ratione";
                                lastUpdate = OffsetDateTime.parse("2022-01-09T07:53:46.600Z");
                                name = "Andrew Bednar";
                                phone = "(211) 772-2104 x1918";
                                web = "quibusdam";
                            }}),
                        }};
                        name = "Daisy Walter";
                        parentGroups = new org.openapis.openapi.models.shared.Group[]{{
                            add(new Group() {{}}),
                            add(new Group() {{}}),
                        }};
                        postcode = "64855-8872";
                        sftpUser = "commodi";
                        shortName = "delectus";
                        visible = false;
                        visibleToJoin = false;
                    }};;
                    groupCode = "facere";
                    identifier = "inventore";
                    identifiers = new org.openapis.openapi.models.shared.FhirIdentifier[]{{
                        add(new FhirIdentifier() {{
                            id = 761109L;
                            label = "maxime";
                            value = "nesciunt";
                        }}),
                        add(new FhirIdentifier() {{
                            id = 290479L;
                            label = "dicta";
                            value = "quisquam";
                        }}),
                        add(new FhirIdentifier() {{
                            id = 559026L;
                            label = "autem";
                            value = "enim";
                        }}),
                        add(new FhirIdentifier() {{
                            id = 495843L;
                            label = "dolor";
                            value = "magnam";
                        }}),
                    }};
                    postcode = "29064";
                    practitioners = new org.openapis.openapi.models.shared.FhirPractitioner[]{{
                        add(new FhirPractitioner() {{
                            address1 = "eaque";
                            address2 = "doloribus";
                            address3 = "cum";
                            address4 = "incidunt";
                            allowInviteGp = false;
                            contacts = new org.openapis.openapi.models.shared.FhirContact[]{{
                                add(new FhirContact() {{
                                    id = 719652L;
                                    system = "magnam";
                                    use = "eius";
                                    value = "illo";
                                }}),
                                add(new FhirContact() {{
                                    id = 774307L;
                                    system = "ipsum";
                                    use = "deserunt";
                                    value = "doloremque";
                                }}),
                                add(new FhirContact() {{
                                    id = 572707L;
                                    system = "saepe";
                                    use = "esse";
                                    value = "commodi";
                                }}),
                            }};
                            gender = "female";
                            groupCode = "perspiciatis";
                            identifier = "omnis";
                            inviteDate = OffsetDateTime.parse("2022-02-15T20:42:55.644Z");
                            name = "George Lowe";
                            postcode = "46223-3977";
                            role = "nemo";
                        }}),
                        add(new FhirPractitioner() {{
                            address1 = "minima";
                            address2 = "consequatur";
                            address3 = "est";
                            address4 = "beatae";
                            allowInviteGp = false;
                            contacts = new org.openapis.openapi.models.shared.FhirContact[]{{
                                add(new FhirContact() {{
                                    id = 285340L;
                                    system = "qui";
                                    use = "nisi";
                                    value = "rerum";
                                }}),
                                add(new FhirContact() {{
                                    id = 364325L;
                                    system = "cupiditate";
                                    use = "maxime";
                                    value = "voluptatum";
                                }}),
                                add(new FhirContact() {{
                                    id = 221582L;
                                    system = "commodi";
                                    use = "ea";
                                    value = "asperiores";
                                }}),
                                add(new FhirContact() {{
                                    id = 814227L;
                                    system = "maxime";
                                    use = "minus";
                                    value = "architecto";
                                }}),
                            }};
                            gender = "female";
                            groupCode = "veniam";
                            identifier = "nemo";
                            inviteDate = OffsetDateTime.parse("2022-09-08T21:23:36.559Z");
                            name = "Henry Quitzon";
                            postcode = "85558";
                            role = "omnis";
                        }}),
                    }};
                    surname = "officiis";
                }};;
                practitioners = new org.openapis.openapi.models.shared.FhirPractitioner[]{{
                    add(new FhirPractitioner() {{
                        address1 = "error";
                        address2 = "consectetur";
                        address3 = "fugit";
                        address4 = "necessitatibus";
                        allowInviteGp = false;
                        contacts = new org.openapis.openapi.models.shared.FhirContact[]{{
                            add(new FhirContact() {{
                                id = 51308L;
                                system = "perferendis";
                                use = "voluptatem";
                                value = "culpa";
                            }}),
                            add(new FhirContact() {{
                                id = 108768L;
                                system = "nesciunt";
                                use = "deserunt";
                                value = "nulla";
                            }}),
                            add(new FhirContact() {{
                                id = 530294L;
                                system = "veritatis";
                                use = "consequuntur";
                                value = "dolore";
                            }}),
                        }};
                        gender = "female";
                        groupCode = "alias";
                        identifier = "voluptatum";
                        inviteDate = OffsetDateTime.parse("2020-02-15T21:19:30.458Z");
                        name = "Shawn Feest Sr.";
                        postcode = "55942-5469";
                        role = "tenetur";
                    }}),
                    add(new FhirPractitioner() {{
                        address1 = "facilis";
                        address2 = "eveniet";
                        address3 = "voluptatum";
                        address4 = "rerum";
                        allowInviteGp = false;
                        contacts = new org.openapis.openapi.models.shared.FhirContact[]{{
                            add(new FhirContact() {{
                                id = 902022L;
                                system = "tempore";
                                use = "mollitia";
                                value = "libero";
                            }}),
                            add(new FhirContact() {{
                                id = 735721L;
                                system = "odio";
                                use = "iste";
                                value = "ut";
                            }}),
                            add(new FhirContact() {{
                                id = 374786L;
                                system = "neque";
                                use = "eum";
                                value = "repudiandae";
                            }}),
                        }};
                        gender = "male";
                        groupCode = "ipsa";
                        identifier = "velit";
                        inviteDate = OffsetDateTime.parse("2022-12-03T21:28:14.776Z");
                        name = "Rickey Miller";
                        postcode = "14106";
                        role = "molestiae";
                    }}),
                    add(new FhirPractitioner() {{
                        address1 = "odio";
                        address2 = "culpa";
                        address3 = "quis";
                        address4 = "mollitia";
                        allowInviteGp = false;
                        contacts = new org.openapis.openapi.models.shared.FhirContact[]{{
                            add(new FhirContact() {{
                                id = 211009L;
                                system = "eum";
                                use = "ipsam";
                                value = "fuga";
                            }}),
                            add(new FhirContact() {{
                                id = 483585L;
                                system = "unde";
                                use = "sapiente";
                                value = "ab";
                            }}),
                        }};
                        gender = "female";
                        groupCode = "quia";
                        identifier = "voluptate";
                        inviteDate = OffsetDateTime.parse("2022-01-02T09:19:03.566Z");
                        name = "Dr. Janet Sanford";
                        postcode = "09885";
                        role = "nulla";
                    }}),
                    add(new FhirPractitioner() {{
                        address1 = "minus";
                        address2 = "nemo";
                        address3 = "voluptates";
                        address4 = "a";
                        allowInviteGp = false;
                        contacts = new org.openapis.openapi.models.shared.FhirContact[]{{
                            add(new FhirContact() {{
                                id = 748930L;
                                system = "quaerat";
                                use = "ullam";
                                value = "velit";
                            }}),
                            add(new FhirContact() {{
                                id = 888833L;
                                system = "perspiciatis";
                                use = "alias";
                                value = "quas";
                            }}),
                            add(new FhirContact() {{
                                id = 571591L;
                                system = "necessitatibus";
                                use = "totam";
                                value = "reprehenderit";
                            }}),
                            add(new FhirContact() {{
                                id = 81790L;
                                system = "asperiores";
                                use = "nulla";
                                value = "soluta";
                            }}),
                        }};
                        gender = "female";
                        groupCode = "at";
                        identifier = "voluptas";
                        inviteDate = OffsetDateTime.parse("2022-01-19T03:18:43.343Z");
                        name = "Bryant Strosin";
                        postcode = "53922-4226";
                        role = "quis";
                    }}),
                }};
            }};            

            ValidatePatientManagementResponse res = sdk.patientManagementController.validatePatientManagement(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
