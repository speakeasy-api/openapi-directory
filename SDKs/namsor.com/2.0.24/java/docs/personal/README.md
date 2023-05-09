# personal

## Overview

Personal names (anthroponyms) : gender, country origin/ethnicity, diaspora, US 'race'/ethniciy

### Available Operations

* [corridor](#corridor) - [USES 20 UNITS PER NAME COUPLE] Infer several classifications for a cross border interaction between names (ex. remit, travel, intl com)
* [corridorBatch](#corridorbatch) - [USES 20 UNITS PER NAME PAIR] Infer several classifications for up to 100 cross border interaction between names (ex. remit, travel, intl com)
* [country](#country) - [USES 10 UNITS PER NAME] Infer the likely country of residence of a personal full name, or one surname. Assumes names as they are in the country of residence OR the country of origin.
* [countryBatch](#countrybatch) - [USES 10 UNITS PER NAME] Infer the likely country of residence of up to 100 personal full names, or surnames. Assumes names as they are in the country of residence OR the country of origin.
* [diaspora](#diaspora) - [USES 20 UNITS PER NAME] Infer the likely ethnicity/diaspora of a personal name, given a country of residence ISO2 code (ex. US, CA, AU, NZ etc.)
* [diasporaBatch](#diasporabatch) - [USES 20 UNITS PER NAME] Infer the likely ethnicity/diaspora of up to 100 personal names, given a country of residence ISO2 code (ex. US, CA, AU, NZ etc.)
* [gender](#gender) - Infer the likely gender of a name.
* [genderBatch](#genderbatch) - Infer the likely gender of up to 100 names, detecting automatically the cultural context.
* [genderFull](#genderfull) - Infer the likely gender of a full name, ex. John H. Smith
* [genderFullBatch](#genderfullbatch) - Infer the likely gender of up to 100 full names, detecting automatically the cultural context.
* [genderFullGeo](#genderfullgeo) - Infer the likely gender of a full name, given a local context (ISO2 country code).
* [genderFullGeoBatch](#genderfullgeobatch) - Infer the likely gender of up to 100 full names, with a given cultural context (country ISO2 code).
* [genderGeo](#gendergeo) - Infer the likely gender of a name, given a local context (ISO2 country code).
* [genderGeoBatch](#gendergeobatch) - Infer the likely gender of up to 100 names, each given a local context (ISO2 country code).
* [gender1](#gender1) - Infer the likely gender of a just a fiven name, assuming default 'US' local context. Please use preferably full names and local geographic context for better accuracy.
* [origin](#origin) - [USES 10 UNITS PER NAME] Infer the likely country of origin of a personal name. Assumes names as they are in the country of origin. For US, CA, AU, NZ and other melting-pots : use 'diaspora' instead.
* [originBatch](#originbatch) - [USES 10 UNITS PER NAME] Infer the likely country of origin of up to 100 names, detecting automatically the cultural context.
* [parseName](#parsename) - Infer the likely first/last name structure of a name, ex. John Smith or SMITH, John or SMITH; John. 
* [parseNameBatch](#parsenamebatch) - Infer the likely first/last name structure of a name, ex. John Smith or SMITH, John or SMITH; John.
* [parseNameGeo](#parsenamegeo) - Infer the likely first/last name structure of a name, ex. John Smith or SMITH, John or SMITH; John. For better accuracy, provide a geographic context.
* [parseNameGeoBatch](#parsenamegeobatch) - Infer the likely first/last name structure of a name, ex. John Smith or SMITH, John or SMITH; John. Giving a local context improves precision. 
* [religionFull](#religionfull) - [USES 10 UNITS PER NAME] Infer the likely religion of a personal full name. NB: only for INDIA (as of current version).
* [religionFullBatch](#religionfullbatch) - [USES 10 UNITS PER NAME] Infer the likely religion of up to 100 personal full names. NB: only for India as of currently.
* [subclassification](#subclassification) - [USES 10 UNITS PER NAME] Infer the likely origin of a name at a country subclassification level (state or regeion). Initially, this is only supported for India (ISO2 code 'IN').
* [subclassificationBatch](#subclassificationbatch) - [USES 10 UNITS PER NAME] Infer the likely origin of a list of up to 100 names at a country subclassification level (state or regeion). Initially, this is only supported for India (ISO2 code 'IN').
* [subclassificationFull](#subclassificationfull) - [USES 10 UNITS PER NAME] Infer the likely origin of a name at a country subclassification level (state or regeion). Initially, this is only supported for India (ISO2 code 'IN').
* [subclassificationFullBatch](#subclassificationfullbatch) - [USES 10 UNITS PER NAME] Infer the likely origin of a list of up to 100 names at a country subclassification level (state or regeion). Initially, this is only supported for India (ISO2 code 'IN').
* [usRaceEthnicity](#usraceethnicity) - [USES 10 UNITS PER NAME] Infer a US resident's likely race/ethnicity according to US Census taxonomy W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino). Optionally add header X-OPTION-USRACEETHNICITY-TAXONOMY: USRACEETHNICITY-6CLASSES for two additional classes, AI_AN (American Indian or Alaskan Native) and PI (Pacific Islander).
* [usRaceEthnicityBatch](#usraceethnicitybatch) - [USES 10 UNITS PER NAME] Infer up-to 100 US resident's likely race/ethnicity according to US Census taxonomy. Output is W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino). Optionally add header X-OPTION-USRACEETHNICITY-TAXONOMY: USRACEETHNICITY-6CLASSES for two additional classes, AI_AN (American Indian or Alaskan Native) and PI (Pacific Islander).
* [usRaceEthnicityZip5](#usraceethnicityzip5) - [USES 10 UNITS PER NAME] Infer a US resident's likely race/ethnicity according to US Census taxonomy, using (optional) ZIP5 code info. Output is W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino). Optionally add header X-OPTION-USRACEETHNICITY-TAXONOMY: USRACEETHNICITY-6CLASSES for two additional classes, AI_AN (American Indian or Alaskan Native) and PI (Pacific Islander).
* [usZipRaceEthnicityBatch](#uszipraceethnicitybatch) - [USES 10 UNITS PER NAME] Infer up-to 100 US resident's likely race/ethnicity according to US Census taxonomy, with (optional) ZIP code. Output is W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino). Optionally add header X-OPTION-USRACEETHNICITY-TAXONOMY: USRACEETHNICITY-6CLASSES for two additional classes, AI_AN (American Indian or Alaskan Native) and PI (Pacific Islander).

## corridor

[USES 20 UNITS PER NAME COUPLE] Infer several classifications for a cross border interaction between names (ex. remit, travel, intl com)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CorridorRequest;
import org.openapis.openapi.models.operations.CorridorResponse;
import org.openapis.openapi.models.operations.CorridorSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CorridorRequest req = new CorridorRequest("nostrum", "officia", "voluptas", "laudantium", "corporis", "excepturi");            

            CorridorResponse res = sdk.personal.corridor(req, new CorridorSecurity("natus") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.corridorOut != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## corridorBatch

[USES 20 UNITS PER NAME PAIR] Infer several classifications for up to 100 cross border interaction between names (ex. remit, travel, intl com)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CorridorBatchResponse;
import org.openapis.openapi.models.operations.CorridorBatchSecurity;
import org.openapis.openapi.models.shared.BatchCorridorIn;
import org.openapis.openapi.models.shared.CorridorIn;
import org.openapis.openapi.models.shared.FactIn;
import org.openapis.openapi.models.shared.FirstLastNameGeoIn;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.BatchCorridorIn req = new BatchCorridorIn() {{
                corridorFromTo = new org.openapis.openapi.models.shared.CorridorIn[]{{
                    add(new CorridorIn() {{
                        firstLastNameGeoFrom = new FirstLastNameGeoIn() {{
                            countryIso2 = "necessitatibus";
                            firstName = "Bridie";
                            id = "2ae20da1-6fc2-4b27-9a28-9c57e854e904";
                            lastName = "Ernser";
                        }};
                        firstLastNameGeoTo = new FirstLastNameGeoIn() {{
                            countryIso2 = "occaecati";
                            firstName = "Rory";
                            id = "22246569-4624-4070-84f7-ab37cef02225";
                            lastName = "Buckridge";
                        }};
                        id = "94db5541-0adc-4669-af90-a26c7cdc981f";
                    }}),
                    add(new CorridorIn() {{
                        firstLastNameGeoFrom = new FirstLastNameGeoIn() {{
                            countryIso2 = "voluptatem";
                            firstName = "Grace";
                            id = "8981d6bb-33cf-4aa3-88c3-1bf407ee4fcf";
                            lastName = "Abbott";
                        }};
                        firstLastNameGeoTo = new FirstLastNameGeoIn() {{
                            countryIso2 = "impedit";
                            firstName = "Deontae";
                            id = "2b78f156-2639-48a0-9c76-6324ccb06c8c";
                            lastName = "O'Reilly";
                        }};
                        id = "12d02529-270b-48d5-b22d-d895b8bcf24d";
                    }}),
                    add(new CorridorIn() {{
                        firstLastNameGeoFrom = new FirstLastNameGeoIn() {{
                            countryIso2 = "facilis";
                            firstName = "Kyle";
                            id = "59693352-f745-4339-94d7-8de3b6e9389f";
                            lastName = "Hermann";
                        }};
                        firstLastNameGeoTo = new FirstLastNameGeoIn() {{
                            countryIso2 = "dolorum";
                            firstName = "Natalia";
                            id = "b7f66255-0a28-4382-ac48-3afd2315bba6";
                            lastName = "Hilpert";
                        }};
                        id = "0164e06f-5bf6-4ae5-91bc-8bdef3612b63";
                    }}),
                }};
                facts = new org.openapis.openapi.models.shared.FactIn[]{{
                    add(new FactIn() {{
                        id = "205fda84-0774-4a68-a9a3-5d086b6f66fe";
                        name = "Dr. Michael Cormier";
                    }}),
                    add(new FactIn() {{
                        id = "f443b425-7b99-42c8-9bda-6a61efa21982";
                        name = "Leah Yundt V";
                    }}),
                    add(new FactIn() {{
                        id = "9eba47f7-d3ef-4049-a40d-6a1831c87adf";
                        name = "Mae Hoppe";
                    }}),
                    add(new FactIn() {{
                        id = "f1ad837a-e80c-41c1-9c95-ba998678fa3f";
                        name = "Bobbie Johnston";
                    }}),
                }};
            }};            

            CorridorBatchResponse res = sdk.personal.corridorBatch(req, new CorridorBatchSecurity("ab") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.batchCorridorOut != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## country

[USES 10 UNITS PER NAME] Infer the likely country of residence of a personal full name, or one surname. Assumes names as they are in the country of residence OR the country of origin.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CountryRequest;
import org.openapis.openapi.models.operations.CountryResponse;
import org.openapis.openapi.models.operations.CountrySecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CountryRequest req = new CountryRequest("fuga");            

            CountryResponse res = sdk.personal.country(req, new CountrySecurity("a") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.personalNameGeoOut != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## countryBatch

[USES 10 UNITS PER NAME] Infer the likely country of residence of up to 100 personal full names, or surnames. Assumes names as they are in the country of residence OR the country of origin.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CountryBatchResponse;
import org.openapis.openapi.models.operations.CountryBatchSecurity;
import org.openapis.openapi.models.shared.BatchPersonalNameIn;
import org.openapis.openapi.models.shared.FactIn;
import org.openapis.openapi.models.shared.PersonalNameIn;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.BatchPersonalNameIn req = new BatchPersonalNameIn() {{
                facts = new org.openapis.openapi.models.shared.FactIn[]{{
                    add(new FactIn() {{
                        id = "88ce0361-4448-4c79-b7a0-ef2f536028ef";
                        name = "Conrad Zulauf";
                    }}),
                }};
                personalNames = new org.openapis.openapi.models.shared.PersonalNameIn[]{{
                    add(new PersonalNameIn() {{
                        id = "152ed7e2-53f4-4c15-bdea-a7170f445acc";
                        name = "Rick Howell";
                    }}),
                    add(new PersonalNameIn() {{
                        id = "af9bbad1-85fe-4431-96bf-5c838fbb8c20";
                        name = "Archie Jaskolski";
                    }}),
                }};
            }};            

            CountryBatchResponse res = sdk.personal.countryBatch(req, new CountryBatchSecurity("minus") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.batchPersonalNameGeoOut != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## diaspora

[USES 20 UNITS PER NAME] Infer the likely ethnicity/diaspora of a personal name, given a country of residence ISO2 code (ex. US, CA, AU, NZ etc.)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DiasporaRequest;
import org.openapis.openapi.models.operations.DiasporaResponse;
import org.openapis.openapi.models.operations.DiasporaSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DiasporaRequest req = new DiasporaRequest("ut", "distinctio", "eius");            

            DiasporaResponse res = sdk.personal.diaspora(req, new DiasporaSecurity("eos") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.firstLastNameDiasporaedOut != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## diasporaBatch

[USES 20 UNITS PER NAME] Infer the likely ethnicity/diaspora of up to 100 personal names, given a country of residence ISO2 code (ex. US, CA, AU, NZ etc.)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DiasporaBatchResponse;
import org.openapis.openapi.models.operations.DiasporaBatchSecurity;
import org.openapis.openapi.models.shared.BatchFirstLastNameGeoIn;
import org.openapis.openapi.models.shared.FactIn;
import org.openapis.openapi.models.shared.FirstLastNameGeoIn;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.BatchFirstLastNameGeoIn req = new BatchFirstLastNameGeoIn() {{
                facts = new org.openapis.openapi.models.shared.FactIn[]{{
                    add(new FactIn() {{
                        id = "e99e6234-c9f7-4b79-9feb-77a5c38d4baf";
                        name = "Joshua Turcotte III";
                    }}),
                    add(new FactIn() {{
                        id = "ef890a54-b475-4f16-b56d-385a3c4ac631";
                        name = "Tracy Medhurst";
                    }}),
                }};
                personalNames = new org.openapis.openapi.models.shared.FirstLastNameGeoIn[]{{
                    add(new FirstLastNameGeoIn() {{
                        countryIso2 = "optio";
                        firstName = "Talon";
                        id = "d8f9fdb9-410f-463b-bf81-7837b01afdd7";
                        lastName = "Lesch";
                    }}),
                    add(new FirstLastNameGeoIn() {{
                        countryIso2 = "rem";
                        firstName = "Herman";
                        id = "24189eb4-4873-4f50-b3f1-9dbf125ce415";
                        lastName = "Cummerata";
                    }}),
                }};
            }};            

            DiasporaBatchResponse res = sdk.personal.diasporaBatch(req, new DiasporaBatchSecurity("itaque") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.batchFirstLastNameDiasporaedOut != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## gender

Infer the likely gender of a name.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GenderRequest;
import org.openapis.openapi.models.operations.GenderResponse;
import org.openapis.openapi.models.operations.GenderSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GenderRequest req = new GenderRequest("error", "expedita");            

            GenderResponse res = sdk.personal.gender(req, new GenderSecurity("error") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.firstLastNameGenderedOut != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## genderBatch

Infer the likely gender of up to 100 names, detecting automatically the cultural context.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GenderBatchResponse;
import org.openapis.openapi.models.operations.GenderBatchSecurity;
import org.openapis.openapi.models.shared.BatchFirstLastNameIn;
import org.openapis.openapi.models.shared.FactIn;
import org.openapis.openapi.models.shared.FirstLastNameIn;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.BatchFirstLastNameIn req = new BatchFirstLastNameIn() {{
                facts = new org.openapis.openapi.models.shared.FactIn[]{{
                    add(new FactIn() {{
                        id = "d7e5224a-6a0e-4123-b784-7ec59e1f67f3";
                        name = "Marcus Ruecker";
                    }}),
                    add(new FactIn() {{
                        id = "4b6d7696-ff3c-4574-b501-357e44f51f8b";
                        name = "Lena Goldner";
                    }}),
                    add(new FactIn() {{
                        id = "197e193a-2454-467f-9487-4c2d5cc49722";
                        name = "Paula Turner";
                    }}),
                    add(new FactIn() {{
                        id = "bd8fe5d0-0b97-49ef-a038-7320590ccc10";
                        name = "Mr. Brett Gislason";
                    }}),
                }};
                personalNames = new org.openapis.openapi.models.shared.FirstLastNameIn[]{{
                    add(new FirstLastNameIn() {{
                        firstName = "Clay";
                        id = "b3e5044f-65fe-472d-8407-7d0cc3f408ef";
                        lastName = "Ryan";
                    }}),
                }};
            }};            

            GenderBatchResponse res = sdk.personal.genderBatch(req, new GenderBatchSecurity("dicta") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.batchFirstLastNameGenderedOut != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## genderFull

Infer the likely gender of a full name, ex. John H. Smith

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GenderFullRequest;
import org.openapis.openapi.models.operations.GenderFullResponse;
import org.openapis.openapi.models.operations.GenderFullSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GenderFullRequest req = new GenderFullRequest("corporis");            

            GenderFullResponse res = sdk.personal.genderFull(req, new GenderFullSecurity("impedit") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.personalNameGenderedOut != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## genderFullBatch

Infer the likely gender of up to 100 full names, detecting automatically the cultural context.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GenderFullBatchResponse;
import org.openapis.openapi.models.operations.GenderFullBatchSecurity;
import org.openapis.openapi.models.shared.BatchPersonalNameIn;
import org.openapis.openapi.models.shared.FactIn;
import org.openapis.openapi.models.shared.PersonalNameIn;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.BatchPersonalNameIn req = new BatchPersonalNameIn() {{
                facts = new org.openapis.openapi.models.shared.FactIn[]{{
                    add(new FactIn() {{
                        id = "b4d6e1ea-e0f7-45ae-9f2a-cab58b991c92";
                        name = "Mable Stroman";
                    }}),
                    add(new FactIn() {{
                        id = "89461e74-21cb-4e6d-9502-f0ea930b69f7";
                        name = "Spencer Crooks";
                    }}),
                    add(new FactIn() {{
                        id = "2f885009-0491-4160-8207-888ec66183bf";
                        name = "Enrique Hoeger";
                    }}),
                    add(new FactIn() {{
                        id = "eb40ec16-faf7-45b0-b532-a4da37cbaaf4";
                        name = "Lauren Cremin";
                    }}),
                }};
                personalNames = new org.openapis.openapi.models.shared.PersonalNameIn[]{{
                    add(new PersonalNameIn() {{
                        id = "42c9b2ad-32da-4fe8-9a88-f4444573fecd";
                        name = "Georgia Feeney";
                    }}),
                    add(new PersonalNameIn() {{
                        id = "f63c8209-379a-4a69-8d5f-bcf79da18a78";
                        name = "Ruby Pfeffer";
                    }}),
                    add(new PersonalNameIn() {{
                        id = "5894e686-1adb-455f-9e5d-751c9fe8f750";
                        name = "Susie Wolf";
                    }}),
                }};
            }};            

            GenderFullBatchResponse res = sdk.personal.genderFullBatch(req, new GenderFullBatchSecurity("non") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.batchPersonalNameGenderedOut != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## genderFullGeo

Infer the likely gender of a full name, given a local context (ISO2 country code).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GenderFullGeoRequest;
import org.openapis.openapi.models.operations.GenderFullGeoResponse;
import org.openapis.openapi.models.operations.GenderFullGeoSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GenderFullGeoRequest req = new GenderFullGeoRequest("dolore", "enim");            

            GenderFullGeoResponse res = sdk.personal.genderFullGeo(req, new GenderFullGeoSecurity("alias") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.personalNameGenderedOut != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## genderFullGeoBatch

Infer the likely gender of up to 100 full names, with a given cultural context (country ISO2 code).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GenderFullGeoBatchResponse;
import org.openapis.openapi.models.operations.GenderFullGeoBatchSecurity;
import org.openapis.openapi.models.shared.BatchPersonalNameGeoIn;
import org.openapis.openapi.models.shared.FactIn;
import org.openapis.openapi.models.shared.PersonalNameGeoIn;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.BatchPersonalNameGeoIn req = new BatchPersonalNameGeoIn() {{
                facts = new org.openapis.openapi.models.shared.FactIn[]{{
                    add(new FactIn() {{
                        id = "41f17644-5637-49f3-bb27-e21f862657b3";
                        name = "Lucia Schoen";
                    }}),
                    add(new FactIn() {{
                        id = "9f587ce5-25c6-4764-9a83-12e5047b4c21";
                        name = "Spencer Rau";
                    }}),
                    add(new FactIn() {{
                        id = "3abcdc91-faab-4dd8-8e71-f6c48252d777";
                        name = "Olive Klocko";
                    }}),
                }};
                personalNames = new org.openapis.openapi.models.shared.PersonalNameGeoIn[]{{
                    add(new PersonalNameGeoIn() {{
                        countryIso2 = "in";
                        id = "4009ef8d-29de-41dd-b097-b5da08c57fa6";
                        name = "Darren Lindgren";
                    }}),
                }};
            }};            

            GenderFullGeoBatchResponse res = sdk.personal.genderFullGeoBatch(req, new GenderFullGeoBatchSecurity("architecto") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.batchPersonalNameGenderedOut != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## genderGeo

Infer the likely gender of a name, given a local context (ISO2 country code).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GenderGeoRequest;
import org.openapis.openapi.models.operations.GenderGeoResponse;
import org.openapis.openapi.models.operations.GenderGeoSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GenderGeoRequest req = new GenderGeoRequest("ea", "accusamus", "illo");            

            GenderGeoResponse res = sdk.personal.genderGeo(req, new GenderGeoSecurity("excepturi") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.firstLastNameGenderedOut != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## genderGeoBatch

Infer the likely gender of up to 100 names, each given a local context (ISO2 country code).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GenderGeoBatchResponse;
import org.openapis.openapi.models.operations.GenderGeoBatchSecurity;
import org.openapis.openapi.models.shared.BatchFirstLastNameGeoIn;
import org.openapis.openapi.models.shared.FactIn;
import org.openapis.openapi.models.shared.FirstLastNameGeoIn;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.BatchFirstLastNameGeoIn req = new BatchFirstLastNameGeoIn() {{
                facts = new org.openapis.openapi.models.shared.FactIn[]{{
                    add(new FactIn() {{
                        id = "afeca619-1498-4140-b64f-f8ae170ef03b";
                        name = "Josefina Durgan";
                    }}),
                    add(new FactIn() {{
                        id = "4aa86855-5966-4732-aa5d-cb6682cb70f8";
                        name = "Roman Shanahan";
                    }}),
                    add(new FactIn() {{
                        id = "b6e91b9a-9f74-4846-a2c3-309db0536d9e";
                        name = "Lauren Romaguera Jr.";
                    }}),
                }};
                personalNames = new org.openapis.openapi.models.shared.FirstLastNameGeoIn[]{{
                    add(new FirstLastNameGeoIn() {{
                        countryIso2 = "earum";
                        firstName = "Eudora";
                        id = "392c11a2-5a8b-4f92-b974-28ad9a9f8bf8";
                        lastName = "Christiansen";
                    }}),
                    add(new FirstLastNameGeoIn() {{
                        countryIso2 = "odit";
                        firstName = "Antwan";
                        id = "125359d9-8387-4f7a-b9cd-72cd2484da21";
                        lastName = "Kohler";
                    }}),
                }};
            }};            

            GenderGeoBatchResponse res = sdk.personal.genderGeoBatch(req, new GenderGeoBatchSecurity("eos") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.batchFirstLastNameGenderedOut != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## gender1

Infer the likely gender of a just a fiven name, assuming default 'US' local context. Please use preferably full names and local geographic context for better accuracy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Gender1Request;
import org.openapis.openapi.models.operations.Gender1Response;
import org.openapis.openapi.models.operations.Gender1Security;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Gender1Request req = new Gender1Request("omnis");            

            Gender1Response res = sdk.personal.gender1(req, new Gender1Security("reiciendis") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.firstLastNameGenderedOut != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## origin

[USES 10 UNITS PER NAME] Infer the likely country of origin of a personal name. Assumes names as they are in the country of origin. For US, CA, AU, NZ and other melting-pots : use 'diaspora' instead.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OriginRequest;
import org.openapis.openapi.models.operations.OriginResponse;
import org.openapis.openapi.models.operations.OriginSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OriginRequest req = new OriginRequest("qui", "similique");            

            OriginResponse res = sdk.personal.origin(req, new OriginSecurity("eligendi") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.firstLastNameOriginedOut != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## originBatch

[USES 10 UNITS PER NAME] Infer the likely country of origin of up to 100 names, detecting automatically the cultural context.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OriginBatchResponse;
import org.openapis.openapi.models.operations.OriginBatchSecurity;
import org.openapis.openapi.models.shared.BatchFirstLastNameIn;
import org.openapis.openapi.models.shared.FactIn;
import org.openapis.openapi.models.shared.FirstLastNameIn;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.BatchFirstLastNameIn req = new BatchFirstLastNameIn() {{
                facts = new org.openapis.openapi.models.shared.FactIn[]{{
                    add(new FactIn() {{
                        id = "1ef5725f-1169-4ac1-a41d-8a23c23e34f2";
                        name = "Edmond O'Conner";
                    }}),
                    add(new FactIn() {{
                        id = "197f6de9-2215-41fe-9712-099853e9f543";
                        name = "Dwayne Hickle";
                    }}),
                }};
                personalNames = new org.openapis.openapi.models.shared.FirstLastNameIn[]{{
                    add(new FirstLastNameIn() {{
                        firstName = "Lavada";
                        id = "ee224460-443b-4c15-8188-c2f56e85da78";
                        lastName = "Emard";
                    }}),
                }};
            }};            

            OriginBatchResponse res = sdk.personal.originBatch(req, new OriginBatchSecurity("odit") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.batchFirstLastNameOriginedOut != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## parseName

Infer the likely first/last name structure of a name, ex. John Smith or SMITH, John or SMITH; John. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ParseNameRequest;
import org.openapis.openapi.models.operations.ParseNameResponse;
import org.openapis.openapi.models.operations.ParseNameSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ParseNameRequest req = new ParseNameRequest("officiis");            

            ParseNameResponse res = sdk.personal.parseName(req, new ParseNameSecurity("mollitia") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.personalNameParsedOut != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## parseNameBatch

Infer the likely first/last name structure of a name, ex. John Smith or SMITH, John or SMITH; John.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ParseNameBatchResponse;
import org.openapis.openapi.models.operations.ParseNameBatchSecurity;
import org.openapis.openapi.models.shared.BatchPersonalNameIn;
import org.openapis.openapi.models.shared.FactIn;
import org.openapis.openapi.models.shared.PersonalNameIn;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.BatchPersonalNameIn req = new BatchPersonalNameIn() {{
                facts = new org.openapis.openapi.models.shared.FactIn[]{{
                    add(new FactIn() {{
                        id = "d617c3b0-d51a-444b-b01b-ad8706d46082";
                        name = "Emilio Reilly";
                    }}),
                    add(new FactIn() {{
                        id = "41ff5d4e-2ae4-4fb5-8b35-d17638f1edb7";
                        name = "Jeffery Hilll";
                    }}),
                    add(new FactIn() {{
                        id = "cc5cb860-f8cd-4580-ba73-810e4fe44472";
                        name = "Cory Runolfsson";
                    }}),
                }};
                personalNames = new org.openapis.openapi.models.shared.PersonalNameIn[]{{
                    add(new PersonalNameIn() {{
                        id = "1dd3bbce-247b-4768-8eff-50126d71cffb";
                        name = "David Waters";
                    }}),
                    add(new PersonalNameIn() {{
                        id = "4b842195-3b44-4bd3-8431-59d33e5953c0";
                        name = "Cheryl Bins";
                    }}),
                    add(new PersonalNameIn() {{
                        id = "863aa41e-6c31-4cc2-b1fc-b51c9a41ffbe";
                        name = "Forrest Powlowski";
                    }}),
                }};
            }};            

            ParseNameBatchResponse res = sdk.personal.parseNameBatch(req, new ParseNameBatchSecurity("natus") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.batchPersonalNameParsedOut != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## parseNameGeo

Infer the likely first/last name structure of a name, ex. John Smith or SMITH, John or SMITH; John. For better accuracy, provide a geographic context.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ParseNameGeoRequest;
import org.openapis.openapi.models.operations.ParseNameGeoResponse;
import org.openapis.openapi.models.operations.ParseNameGeoSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ParseNameGeoRequest req = new ParseNameGeoRequest("ipsam", "repudiandae");            

            ParseNameGeoResponse res = sdk.personal.parseNameGeo(req, new ParseNameGeoSecurity("earum") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.personalNameParsedOut != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## parseNameGeoBatch

Infer the likely first/last name structure of a name, ex. John Smith or SMITH, John or SMITH; John. Giving a local context improves precision. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ParseNameGeoBatchResponse;
import org.openapis.openapi.models.operations.ParseNameGeoBatchSecurity;
import org.openapis.openapi.models.shared.BatchPersonalNameGeoIn;
import org.openapis.openapi.models.shared.FactIn;
import org.openapis.openapi.models.shared.PersonalNameGeoIn;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.BatchPersonalNameGeoIn req = new BatchPersonalNameGeoIn() {{
                facts = new org.openapis.openapi.models.shared.FactIn[]{{
                    add(new FactIn() {{
                        id = "5e076cc7-abf6-416e-a5c7-1641934b90f2";
                        name = "Paul Mayert V";
                    }}),
                    add(new FactIn() {{
                        id = "d2fc2f9e-2e10-4594-8b93-5d237a72f908";
                        name = "Velma Stark";
                    }}),
                }};
                personalNames = new org.openapis.openapi.models.shared.PersonalNameGeoIn[]{{
                    add(new PersonalNameGeoIn() {{
                        countryIso2 = "assumenda";
                        id = "4aecb753-7cd9-4222-89ff-57491aabfa2e";
                        name = "Agnes Boyle DDS";
                    }}),
                    add(new PersonalNameGeoIn() {{
                        countryIso2 = "id";
                        id = "4d456ef1-031e-4689-9f0c-2001e22cd55c";
                        name = "Robert Hickle";
                    }}),
                    add(new PersonalNameGeoIn() {{
                        countryIso2 = "similique";
                        id = "184d76d9-71fc-4820-865b-037bb8e0cc88";
                        name = "Carolyn Macejkovic";
                    }}),
                    add(new PersonalNameGeoIn() {{
                        countryIso2 = "labore";
                        id = "de04af28-c5dd-4db4-aaa1-cfd6d828da01";
                        name = "Mr. Janet Mueller";
                    }}),
                }};
            }};            

            ParseNameGeoBatchResponse res = sdk.personal.parseNameGeoBatch(req, new ParseNameGeoBatchSecurity("unde") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.batchPersonalNameParsedOut != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## religionFull

[USES 10 UNITS PER NAME] Infer the likely religion of a personal full name. NB: only for INDIA (as of current version).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReligionFullRequest;
import org.openapis.openapi.models.operations.ReligionFullResponse;
import org.openapis.openapi.models.operations.ReligionFullSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReligionFullRequest req = new ReligionFullRequest("ex", "quaerat", "aliquid");            

            ReligionFullResponse res = sdk.personal.religionFull(req, new ReligionFullSecurity("eum") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.personalNameReligionedOut != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## religionFullBatch

[USES 10 UNITS PER NAME] Infer the likely religion of up to 100 personal full names. NB: only for India as of currently.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReligionFullBatchResponse;
import org.openapis.openapi.models.operations.ReligionFullBatchSecurity;
import org.openapis.openapi.models.shared.BatchPersonalNameGeoSubdivisionIn;
import org.openapis.openapi.models.shared.FactIn;
import org.openapis.openapi.models.shared.PersonalNameGeoSubdivisionIn;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.BatchPersonalNameGeoSubdivisionIn req = new BatchPersonalNameGeoSubdivisionIn() {{
                facts = new org.openapis.openapi.models.shared.FactIn[]{{
                    add(new FactIn() {{
                        id = "5c1d81f2-9042-4f56-9b7a-ff0ea2216cbe";
                        name = "Stella Boehm";
                    }}),
                    add(new FactIn() {{
                        id = "163e279a-3b08-44da-9925-7d04f40847a7";
                        name = "Lori Sipes";
                    }}),
                }};
                personalNames = new org.openapis.openapi.models.shared.PersonalNameGeoSubdivisionIn[]{{
                    add(new PersonalNameGeoSubdivisionIn() {{
                        countryIso2 = "cupiditate";
                        id = "6cbdeecf-6b99-4bc6-b562-ebfdf55c294c";
                        name = "Terri Adams III";
                        subdivisionIso = "laborum";
                    }}),
                    add(new PersonalNameGeoSubdivisionIn() {{
                        countryIso2 = "et";
                        id = "287764ee-f6d0-4c6d-aed9-c73dd6345715";
                        name = "Kristina Parker";
                        subdivisionIso = "deleniti";
                    }}),
                }};
            }};            

            ReligionFullBatchResponse res = sdk.personal.religionFullBatch(req, new ReligionFullBatchSecurity("dignissimos") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.batchPersonalNameReligionedOut != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## subclassification

[USES 10 UNITS PER NAME] Infer the likely origin of a name at a country subclassification level (state or regeion). Initially, this is only supported for India (ISO2 code 'IN').

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SubclassificationRequest;
import org.openapis.openapi.models.operations.SubclassificationResponse;
import org.openapis.openapi.models.operations.SubclassificationSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SubclassificationRequest req = new SubclassificationRequest("doloremque", "quibusdam", "adipisci");            

            SubclassificationResponse res = sdk.personal.subclassification(req, new SubclassificationSecurity("minus") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.firstLastNameGeoSubclassificationOut != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## subclassificationBatch

[USES 10 UNITS PER NAME] Infer the likely origin of a list of up to 100 names at a country subclassification level (state or regeion). Initially, this is only supported for India (ISO2 code 'IN').

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SubclassificationBatchResponse;
import org.openapis.openapi.models.operations.SubclassificationBatchSecurity;
import org.openapis.openapi.models.shared.BatchFirstLastNameGeoIn;
import org.openapis.openapi.models.shared.FactIn;
import org.openapis.openapi.models.shared.FirstLastNameGeoIn;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.BatchFirstLastNameGeoIn req = new BatchFirstLastNameGeoIn() {{
                facts = new org.openapis.openapi.models.shared.FactIn[]{{
                    add(new FactIn() {{
                        id = "a1f9c242-c7b6-46a1-b30c-73df5b671989";
                        name = "Lela Gutkowski";
                    }}),
                    add(new FactIn() {{
                        id = "4bb438d8-5b26-4059-9d74-5e3c2059c9c3";
                        name = "Leo Johnston";
                    }}),
                }};
                personalNames = new org.openapis.openapi.models.shared.FirstLastNameGeoIn[]{{
                    add(new FirstLastNameGeoIn() {{
                        countryIso2 = "itaque";
                        firstName = "Cameron";
                        id = "52765b1d-62fc-4dac-a1f0-1216ce2239e8";
                        lastName = "Weimann";
                    }}),
                }};
            }};            

            SubclassificationBatchResponse res = sdk.personal.subclassificationBatch(req, new SubclassificationBatchSecurity("consequuntur") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.batchFirstLastNameGeoSubclassificationOut != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## subclassificationFull

[USES 10 UNITS PER NAME] Infer the likely origin of a name at a country subclassification level (state or regeion). Initially, this is only supported for India (ISO2 code 'IN').

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SubclassificationFullRequest;
import org.openapis.openapi.models.operations.SubclassificationFullResponse;
import org.openapis.openapi.models.operations.SubclassificationFullSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SubclassificationFullRequest req = new SubclassificationFullRequest("enim", "minus");            

            SubclassificationFullResponse res = sdk.personal.subclassificationFull(req, new SubclassificationFullSecurity("quibusdam") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.firstLastNameGeoSubclassificationOut != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## subclassificationFullBatch

[USES 10 UNITS PER NAME] Infer the likely origin of a list of up to 100 names at a country subclassification level (state or regeion). Initially, this is only supported for India (ISO2 code 'IN').

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SubclassificationFullBatchResponse;
import org.openapis.openapi.models.operations.SubclassificationFullBatchSecurity;
import org.openapis.openapi.models.shared.BatchPersonalNameGeoIn;
import org.openapis.openapi.models.shared.FactIn;
import org.openapis.openapi.models.shared.PersonalNameGeoIn;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.BatchPersonalNameGeoIn req = new BatchPersonalNameGeoIn() {{
                facts = new org.openapis.openapi.models.shared.FactIn[]{{
                    add(new FactIn() {{
                        id = "d19d959f-439e-4392-a6cb-d95f7aa2b241";
                        name = "Diana Hudson";
                    }}),
                }};
                personalNames = new org.openapis.openapi.models.shared.PersonalNameGeoIn[]{{
                    add(new PersonalNameGeoIn() {{
                        countryIso2 = "et";
                        id = "e6698fcc-4596-4217-8297-767633425403";
                        name = "Geoffrey Zboncak";
                    }}),
                    add(new PersonalNameGeoIn() {{
                        countryIso2 = "cupiditate";
                        id = "71e98190-5573-489c-adba-c7fda39594d6";
                        name = "Patty Schinner";
                    }}),
                    add(new PersonalNameGeoIn() {{
                        countryIso2 = "officiis";
                        id = "480632b9-954b-46fa-a206-369828553cb1";
                        name = "Carol Batz";
                    }}),
                    add(new PersonalNameGeoIn() {{
                        countryIso2 = "necessitatibus";
                        id = "f4921ec2-053b-4749-b66a-c8ee0f2bf195";
                        name = "Everett Schulist PhD";
                    }}),
                }};
            }};            

            SubclassificationFullBatchResponse res = sdk.personal.subclassificationFullBatch(req, new SubclassificationFullBatchSecurity("aut") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.batchPersonalNameGeoSubclassificationOut != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## usRaceEthnicity

[USES 10 UNITS PER NAME] Infer a US resident's likely race/ethnicity according to US Census taxonomy W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino). Optionally add header X-OPTION-USRACEETHNICITY-TAXONOMY: USRACEETHNICITY-6CLASSES for two additional classes, AI_AN (American Indian or Alaskan Native) and PI (Pacific Islander).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UsRaceEthnicityRequest;
import org.openapis.openapi.models.operations.UsRaceEthnicityResponse;
import org.openapis.openapi.models.operations.UsRaceEthnicitySecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UsRaceEthnicityRequest req = new UsRaceEthnicityRequest("sequi", "reiciendis");            

            UsRaceEthnicityResponse res = sdk.personal.usRaceEthnicity(req, new UsRaceEthnicitySecurity("neque") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.firstLastNameUSRaceEthnicityOut != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## usRaceEthnicityBatch

[USES 10 UNITS PER NAME] Infer up-to 100 US resident's likely race/ethnicity according to US Census taxonomy. Output is W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino). Optionally add header X-OPTION-USRACEETHNICITY-TAXONOMY: USRACEETHNICITY-6CLASSES for two additional classes, AI_AN (American Indian or Alaskan Native) and PI (Pacific Islander).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UsRaceEthnicityBatchResponse;
import org.openapis.openapi.models.operations.UsRaceEthnicityBatchSecurity;
import org.openapis.openapi.models.shared.BatchFirstLastNameGeoIn;
import org.openapis.openapi.models.shared.FactIn;
import org.openapis.openapi.models.shared.FirstLastNameGeoIn;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.BatchFirstLastNameGeoIn req = new BatchFirstLastNameGeoIn() {{
                facts = new org.openapis.openapi.models.shared.FactIn[]{{
                    add(new FactIn() {{
                        id = "eba297be-3e90-4bc4-8df8-68fd52405cb3";
                        name = "Evelyn Stracke";
                    }}),
                    add(new FactIn() {{
                        id = "2f4f127f-b0e0-4bf1-b821-7978d0acca77";
                        name = "Phil Rice";
                    }}),
                    add(new FactIn() {{
                        id = "7021a520-46b6-44e9-9fb0-e67e094fdfed";
                        name = "Dr. Yvonne Grimes";
                    }}),
                    add(new FactIn() {{
                        id = "53a34a1b-8fe9-4973-9adc-05d85ae2dfb7";
                        name = "Shawna Pouros";
                    }}),
                }};
                personalNames = new org.openapis.openapi.models.shared.FirstLastNameGeoIn[]{{
                    add(new FirstLastNameGeoIn() {{
                        countryIso2 = "non";
                        firstName = "Cassandre";
                        id = "90d33656-1eca-416e-b894-51bd76eeeb51";
                        lastName = "MacGyver";
                    }}),
                    add(new FirstLastNameGeoIn() {{
                        countryIso2 = "impedit";
                        firstName = "Dina";
                        id = "da1fad35-512f-406d-8e5b-72f0f548568a";
                        lastName = "Adams";
                    }}),
                }};
            }};            

            UsRaceEthnicityBatchResponse res = sdk.personal.usRaceEthnicityBatch(req, new UsRaceEthnicityBatchSecurity("incidunt") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.batchFirstLastNameUSRaceEthnicityOut != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## usRaceEthnicityZip5

[USES 10 UNITS PER NAME] Infer a US resident's likely race/ethnicity according to US Census taxonomy, using (optional) ZIP5 code info. Output is W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino). Optionally add header X-OPTION-USRACEETHNICITY-TAXONOMY: USRACEETHNICITY-6CLASSES for two additional classes, AI_AN (American Indian or Alaskan Native) and PI (Pacific Islander).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UsRaceEthnicityZip5Request;
import org.openapis.openapi.models.operations.UsRaceEthnicityZip5Response;
import org.openapis.openapi.models.operations.UsRaceEthnicityZip5Security;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UsRaceEthnicityZip5Request req = new UsRaceEthnicityZip5Request("dolores", "labore", "earum");            

            UsRaceEthnicityZip5Response res = sdk.personal.usRaceEthnicityZip5(req, new UsRaceEthnicityZip5Security("consequatur") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.firstLastNameUSRaceEthnicityOut != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## usZipRaceEthnicityBatch

[USES 10 UNITS PER NAME] Infer up-to 100 US resident's likely race/ethnicity according to US Census taxonomy, with (optional) ZIP code. Output is W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino). Optionally add header X-OPTION-USRACEETHNICITY-TAXONOMY: USRACEETHNICITY-6CLASSES for two additional classes, AI_AN (American Indian or Alaskan Native) and PI (Pacific Islander).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UsZipRaceEthnicityBatchResponse;
import org.openapis.openapi.models.operations.UsZipRaceEthnicityBatchSecurity;
import org.openapis.openapi.models.shared.BatchFirstLastNameGeoZippedIn;
import org.openapis.openapi.models.shared.FactIn;
import org.openapis.openapi.models.shared.FirstLastNameGeoZippedIn;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.BatchFirstLastNameGeoZippedIn req = new BatchFirstLastNameGeoZippedIn() {{
                facts = new org.openapis.openapi.models.shared.FactIn[]{{
                    add(new FactIn() {{
                        id = "a1d6eb94-3464-45d0-b084-fbba5cceff5c";
                        name = "Ronald Blanda";
                    }}),
                }};
                personalNames = new org.openapis.openapi.models.shared.FirstLastNameGeoZippedIn[]{{
                    add(new FirstLastNameGeoZippedIn() {{
                        countryIso2 = "quasi";
                        firstName = "Shawn";
                        id = "528a45ac-82b8-45f8-bc2c-aba8da4127dd";
                        lastName = "Hickle";
                        zipCode = "49924-0066";
                    }}),
                    add(new FirstLastNameGeoZippedIn() {{
                        countryIso2 = "et";
                        firstName = "Miguel";
                        id = "c74b86ce-cc74-4f77-b484-8bd6a6f0441d";
                        lastName = "Denesik";
                        zipCode = "17505-0532";
                    }}),
                }};
            }};            

            UsZipRaceEthnicityBatchResponse res = sdk.personal.usZipRaceEthnicityBatch(req, new UsZipRaceEthnicityBatchSecurity("molestiae") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.batchFirstLastNameUSRaceEthnicityOut != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
