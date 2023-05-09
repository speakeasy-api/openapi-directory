# general

### Available Operations

* [nameType](#nametype) - Infer the likely type of a proper noun (personal name, brand name, place name etc.)
* [nameTypeBatch](#nametypebatch) - Infer the likely common type of up to 100 proper nouns (personal name, brand name, place name etc.)
* [nameTypeGeo](#nametypegeo) - Infer the likely type of a proper noun (personal name, brand name, place name etc.)
* [nameTypeGeoBatch](#nametypegeobatch) - Infer the likely common type of up to 100 proper nouns (personal name, brand name, place name etc.)

## nameType

Infer the likely type of a proper noun (personal name, brand name, place name etc.)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NameTypeRequest;
import org.openapis.openapi.models.operations.NameTypeResponse;
import org.openapis.openapi.models.operations.NameTypeSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NameTypeRequest req = new NameTypeRequest("eum");            

            NameTypeResponse res = sdk.general.nameType(req, new NameTypeSecurity("nemo") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.properNounCategorizedOut != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## nameTypeBatch

Infer the likely common type of up to 100 proper nouns (personal name, brand name, place name etc.)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NameTypeBatchResponse;
import org.openapis.openapi.models.operations.NameTypeBatchSecurity;
import org.openapis.openapi.models.shared.BatchNameIn;
import org.openapis.openapi.models.shared.FactIn;
import org.openapis.openapi.models.shared.NameIn;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.BatchNameIn req = new BatchNameIn() {{
                facts = new org.openapis.openapi.models.shared.FactIn[]{{
                    add(new FactIn() {{
                        id = "7956f925-1a5a-49da-a60f-f57bfaad4f9e";
                        name = "Noel Bruen";
                    }}),
                    add(new FactIn() {{
                        id = "512c1032-648d-4c2f-a151-99ebfd0e9fe6";
                        name = "Ricardo Effertz";
                    }}),
                    add(new FactIn() {{
                        id = "a3aed011-7996-4312-bde0-4771778ff61d";
                        name = "Cheryl Kub";
                    }}),
                    add(new FactIn() {{
                        id = "6360a15d-b6a6-4606-99a1-adeaab5851d6";
                        name = "Ruben Goyette";
                    }}),
                }};
                properNouns = new org.openapis.openapi.models.shared.NameIn[]{{
                    add(new NameIn() {{
                        id = "8b61891b-aa0f-4e1a-9e00-8e6f8c5f350d";
                        name = "Myron Spinka";
                    }}),
                }};
            }};            

            NameTypeBatchResponse res = sdk.general.nameTypeBatch(req, new NameTypeBatchSecurity("culpa") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.batchProperNounCategorizedOut != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## nameTypeGeo

Infer the likely type of a proper noun (personal name, brand name, place name etc.)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NameTypeGeoRequest;
import org.openapis.openapi.models.operations.NameTypeGeoResponse;
import org.openapis.openapi.models.operations.NameTypeGeoSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NameTypeGeoRequest req = new NameTypeGeoRequest("dolor", "aliquam");            

            NameTypeGeoResponse res = sdk.general.nameTypeGeo(req, new NameTypeGeoSecurity("inventore") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.properNounCategorizedOut != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## nameTypeGeoBatch

Infer the likely common type of up to 100 proper nouns (personal name, brand name, place name etc.)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NameTypeGeoBatchResponse;
import org.openapis.openapi.models.operations.NameTypeGeoBatchSecurity;
import org.openapis.openapi.models.shared.BatchNameGeoIn;
import org.openapis.openapi.models.shared.FactIn;
import org.openapis.openapi.models.shared.NameGeoIn;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.BatchNameGeoIn req = new BatchNameGeoIn() {{
                facts = new org.openapis.openapi.models.shared.FactIn[]{{
                    add(new FactIn() {{
                        id = "14301042-1813-4d52-88ec-e7e253b66845";
                        name = "Johnnie Jones";
                    }}),
                    add(new FactIn() {{
                        id = "e205e16d-eab3-4fec-9578-a64584273a84";
                        name = "Mrs. Hilda Stark";
                    }}),
                    add(new FactIn() {{
                        id = "309fb092-9921-4aef-b9f5-8c4d86e68e4b";
                        name = "Kenneth Hilpert Sr.";
                    }}),
                }};
                properNouns = new org.openapis.openapi.models.shared.NameGeoIn[]{{
                    add(new NameGeoIn() {{
                        countryIso2 = "maiores";
                        id = "59da757a-59ec-4fef-a6ef-1caa3383c2be";
                        name = "Theodore Kub";
                    }}),
                }};
            }};            

            NameTypeGeoBatchResponse res = sdk.general.nameTypeGeoBatch(req, new NameTypeGeoBatchSecurity("dignissimos") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.batchProperNounCategorizedOut != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
