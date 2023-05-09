# indian

## Overview

INDIAN special features

### Available Operations

* [castegroupIndianFull](#castegroupindianfull) - [USES 10 UNITS PER NAME] Infer the likely Indian name castegroup of a personal full name.
* [castegroupIndianFullBatch](#castegroupindianfullbatch) - [USES 10 UNITS PER NAME] Infer the likely Indian name castegroup of up to 100 personal full names. 
* [religion](#religion) - [USES 10 UNITS PER NAME] Infer the likely religion of a personal Indian full name, provided the Indian state or Union territory (NB/ this can be inferred using the subclassification endpoint).
* [religionIndianFullBatch](#religionindianfullbatch) - [USES 10 UNITS PER NAME] Infer the likely religion of up to 100 personal full Indian names, provided the subclassification at State or Union territory level (NB/ can be inferred using the subclassification endpoint).
* [subclassificationIndian](#subclassificationindian) - [USES 10 UNITS PER NAME] Infer the likely Indian state of Union territory according to ISO 3166-2:IN based on the name.
* [subclassificationIndianBatch](#subclassificationindianbatch) - [USES 10 UNITS PER NAME] Infer the likely Indian state of Union territory according to ISO 3166-2:IN based on a list of up to 100 names.
* [subclassificationIndianFull](#subclassificationindianfull) - [USES 10 UNITS PER NAME] Infer the likely Indian state of Union territory according to ISO 3166-2:IN based on the name.
* [subclassificationIndianFullBatch](#subclassificationindianfullbatch) - [USES 10 UNITS PER NAME] Infer the likely Indian state of Union territory according to ISO 3166-2:IN based on a list of up to 100 names.

## castegroupIndianFull

[USES 10 UNITS PER NAME] Infer the likely Indian name castegroup of a personal full name.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CastegroupIndianFullRequest;
import org.openapis.openapi.models.operations.CastegroupIndianFullResponse;
import org.openapis.openapi.models.operations.CastegroupIndianFullSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CastegroupIndianFullRequest req = new CastegroupIndianFullRequest("neque", "quo");            

            CastegroupIndianFullResponse res = sdk.indian.castegroupIndianFull(req, new CastegroupIndianFullSecurity("deleniti") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.personalNameCastegroupOut != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## castegroupIndianFullBatch

[USES 10 UNITS PER NAME] Infer the likely Indian name castegroup of up to 100 personal full names. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CastegroupIndianFullBatchResponse;
import org.openapis.openapi.models.operations.CastegroupIndianFullBatchSecurity;
import org.openapis.openapi.models.shared.BatchPersonalNameSubdivisionIn;
import org.openapis.openapi.models.shared.FactIn;
import org.openapis.openapi.models.shared.PersonalNameSubdivisionIn;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.BatchPersonalNameSubdivisionIn req = new BatchPersonalNameSubdivisionIn() {{
                facts = new org.openapis.openapi.models.shared.FactIn[]{{
                    add(new FactIn() {{
                        id = "72f64d1d-b1f2-4c43-9066-1e96349e1cf9";
                        name = "John Huel";
                    }}),
                    add(new FactIn() {{
                        id = "a437000a-e6b6-4bc9-b8f7-59eac55a9741";
                        name = "Mrs. Glenn Bruen";
                    }}),
                    add(new FactIn() {{
                        id = "2965bb8a-7202-4611-835e-139dbc2259b1";
                        name = "Wm Steuber";
                    }}),
                    add(new FactIn() {{
                        id = "c070e108-4cb0-4672-91ad-879eeb9665b8";
                        name = "Cecelia Wiza";
                    }}),
                }};
                personalNames = new org.openapis.openapi.models.shared.PersonalNameSubdivisionIn[]{{
                    add(new PersonalNameSubdivisionIn() {{
                        id = "2bae0be2-d782-4259-a3ea-4b5197f92443";
                        name = "Oliver Kulas";
                        subdivisionIso = "corporis";
                    }}),
                }};
            }};            

            CastegroupIndianFullBatchResponse res = sdk.indian.castegroupIndianFullBatch(req, new CastegroupIndianFullBatchSecurity("qui") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.batchPersonalNameCastegroupOut != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## religion

[USES 10 UNITS PER NAME] Infer the likely religion of a personal Indian full name, provided the Indian state or Union territory (NB/ this can be inferred using the subclassification endpoint).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReligionRequest;
import org.openapis.openapi.models.operations.ReligionResponse;
import org.openapis.openapi.models.operations.ReligionSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReligionRequest req = new ReligionRequest("expedita", "voluptatum");            

            ReligionResponse res = sdk.indian.religion(req, new ReligionSecurity("cupiditate") {{
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

## religionIndianFullBatch

[USES 10 UNITS PER NAME] Infer the likely religion of up to 100 personal full Indian names, provided the subclassification at State or Union territory level (NB/ can be inferred using the subclassification endpoint).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReligionIndianFullBatchResponse;
import org.openapis.openapi.models.operations.ReligionIndianFullBatchSecurity;
import org.openapis.openapi.models.shared.BatchPersonalNameSubdivisionIn;
import org.openapis.openapi.models.shared.FactIn;
import org.openapis.openapi.models.shared.PersonalNameSubdivisionIn;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.BatchPersonalNameSubdivisionIn req = new BatchPersonalNameSubdivisionIn() {{
                facts = new org.openapis.openapi.models.shared.FactIn[]{{
                    add(new FactIn() {{
                        id = "c537c645-4efb-40b3-8896-c3ca5acfbe2f";
                        name = "Ms. Corey Kiehn";
                    }}),
                    add(new FactIn() {{
                        id = "77929177-deac-4646-acb5-73409e3eb1e5";
                        name = "Mr. Todd Reilly";
                    }}),
                }};
                personalNames = new org.openapis.openapi.models.shared.PersonalNameSubdivisionIn[]{{
                    add(new PersonalNameSubdivisionIn() {{
                        id = "07f116db-9954-45fc-95fa-88970e189dbb";
                        name = "Sharon Windler";
                        subdivisionIso = "ipsum";
                    }}),
                    add(new PersonalNameSubdivisionIn() {{
                        id = "3ea055b1-97cd-444e-af52-d82d3513bb6f";
                        name = "Mattie Raynor";
                        subdivisionIso = "nisi";
                    }}),
                    add(new PersonalNameSubdivisionIn() {{
                        id = "bcdb35ff-2e4b-4275-b7a8-cd9e7319c177";
                        name = "Leon Collier";
                        subdivisionIso = "iusto";
                    }}),
                }};
            }};            

            ReligionIndianFullBatchResponse res = sdk.indian.religionIndianFullBatch(req, new ReligionIndianFullBatchSecurity("dignissimos") {{
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

## subclassificationIndian

[USES 10 UNITS PER NAME] Infer the likely Indian state of Union territory according to ISO 3166-2:IN based on the name.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SubclassificationIndianRequest;
import org.openapis.openapi.models.operations.SubclassificationIndianResponse;
import org.openapis.openapi.models.operations.SubclassificationIndianSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SubclassificationIndianRequest req = new SubclassificationIndianRequest("libero", "illo");            

            SubclassificationIndianResponse res = sdk.indian.subclassificationIndian(req, new SubclassificationIndianSecurity("ab") {{
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

## subclassificationIndianBatch

[USES 10 UNITS PER NAME] Infer the likely Indian state of Union territory according to ISO 3166-2:IN based on a list of up to 100 names.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SubclassificationIndianBatchResponse;
import org.openapis.openapi.models.operations.SubclassificationIndianBatchSecurity;
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
                        id = "eeb52ff7-85fc-4378-94d4-c98e0c2bb89e";
                        name = "Julio Hessel";
                    }}),
                    add(new FactIn() {{
                        id = "d636c600-503d-48bb-b118-0f739ae9e057";
                        name = "Ms. Malcolm Lockman";
                    }}),
                }};
                personalNames = new org.openapis.openapi.models.shared.FirstLastNameGeoIn[]{{
                    add(new FirstLastNameGeoIn() {{
                        countryIso2 = "totam";
                        firstName = "Betty";
                        id = "0331f398-1d4c-4700-b607-f3c93c73b9da";
                        lastName = "Fay";
                    }}),
                }};
            }};            

            SubclassificationIndianBatchResponse res = sdk.indian.subclassificationIndianBatch(req, new SubclassificationIndianBatchSecurity("tenetur") {{
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

## subclassificationIndianFull

[USES 10 UNITS PER NAME] Infer the likely Indian state of Union territory according to ISO 3166-2:IN based on the name.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SubclassificationIndianFullRequest;
import org.openapis.openapi.models.operations.SubclassificationIndianFullResponse;
import org.openapis.openapi.models.operations.SubclassificationIndianFullSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SubclassificationIndianFullRequest req = new SubclassificationIndianFullRequest("aspernatur");            

            SubclassificationIndianFullResponse res = sdk.indian.subclassificationIndianFull(req, new SubclassificationIndianFullSecurity("quo") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.personalNameGeoSubclassificationOut != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## subclassificationIndianFullBatch

[USES 10 UNITS PER NAME] Infer the likely Indian state of Union territory according to ISO 3166-2:IN based on a list of up to 100 names.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SubclassificationIndianFullBatchResponse;
import org.openapis.openapi.models.operations.SubclassificationIndianFullBatchSecurity;
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
                        id = "da7e23f2-2574-411f-af4b-7544e472e802";
                        name = "Bill Kling";
                    }}),
                    add(new FactIn() {{
                        id = "b40463a7-d575-4f14-80e7-64ad7334ec1b";
                        name = "Tracey Bosco";
                    }}),
                    add(new FactIn() {{
                        id = "6a08088d-100e-4fad-a200-ef0422eb2164";
                        name = "Courtney Maggio";
                    }}),
                    add(new FactIn() {{
                        id = "8366c723-ffda-49e0-abee-4825c1fc0e11";
                        name = "Miss Marianne Leffler";
                    }}),
                }};
                personalNames = new org.openapis.openapi.models.shared.PersonalNameGeoIn[]{{
                    add(new PersonalNameGeoIn() {{
                        countryIso2 = "iste";
                        id = "18544ec4-2def-4cce-8f19-77773e63562a";
                        name = "Ms. Verna Gislason";
                    }}),
                    add(new PersonalNameGeoIn() {{
                        countryIso2 = "accusantium";
                        id = "5e3d48fd-af31-43a1-b5fd-94259c0b36f2";
                        name = "Henrietta Nienow";
                    }}),
                    add(new PersonalNameGeoIn() {{
                        countryIso2 = "numquam";
                        id = "f3b756c1-1f6c-437a-9126-243835bbc05a";
                        name = "Victoria Nolan";
                    }}),
                    add(new PersonalNameGeoIn() {{
                        countryIso2 = "quod";
                        id = "efc5fde1-0a0c-4e21-a9e5-10019c6dc5e3";
                        name = "Stella Howell";
                    }}),
                }};
            }};            

            SubclassificationIndianFullBatchResponse res = sdk.indian.subclassificationIndianFullBatch(req, new SubclassificationIndianFullBatchSecurity("natus") {{
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
