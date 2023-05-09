# lookup

### Available Operations

* [getEnsemblGeneMappingUsingGET](#getensemblgenemappingusingget) - Translate an RGD ID to an Ensembl Gene  ID
* [getEnsemblGeneMappingUsingPOST](#getensemblgenemappingusingpost) - Translate RGD IDs to Ensembl Gene IDs
* [getEnsemblProteinMappingUsingGET](#getensemblproteinmappingusingget) - Translate an RGD ID to an Ensembl Protein ID
* [getEnsemblProteinMappingUsingPOST](#getensemblproteinmappingusingpost) - Translate RGD IDs to Ensembl Protein IDs
* [getEnsemblTranscriptMappingUsingGET](#getensembltranscriptmappingusingget) - Translate an RGD ID to an Ensembl Transcript ID
* [getEnsemblTranscriptMappingUsingPOST](#getensembltranscriptmappingusingpost) - Translate RGD IDs to Ensembl Transcript IDs
* [getGTEXMappingUsingGET](#getgtexmappingusingget) - Translate an RGD ID to an GTEx ID
* [getGTEXMappingUsingPOST](#getgtexmappingusingpost) - Translate RGD IDs to GTEx IDs
* [getGenBankNucleotideMappingUsingGET](#getgenbanknucleotidemappingusingget) - Translate an RGD ID to a GenBank Nucleotide ID
* [getGenBankNucleotideMappingUsingPOST](#getgenbanknucleotidemappingusingpost) - Translate RGD IDs to GenBank Nucleotide IDs
* [getGenBankProteinMappingUsingGET](#getgenbankproteinmappingusingget) - Translate an RGD ID to a GenBank Protein ID
* [getGenBankProteinMappingUsingPOST](#getgenbankproteinmappingusingpost) - Translate RGD IDs to GenBank Protein IDs
* [getGeneTypesUsingGET](#getgenetypesusingget) - Returns a list of gene types avialable in RGD
* [getHGNCMappingUsingGET](#gethgncmappingusingget) - Translate an RGD ID to an HGNC ID
* [getHGNCMappingUsingPOST](#gethgncmappingusingpost) - Translate RGD IDs to HGNC IDs
* [getMGIMappingUsingGET](#getmgimappingusingget) - Translate an RGD ID to an MGI ID
* [getMGIMappingUsingPOST](#getmgimappingusingpost) - Translate RGD IDs to MGI IDs
* [getMapsUsingGET](#getmapsusingget) - Return a list assembly maps for a species
* [getMapsUsingGET1](#getmapsusingget1) - Return a standardUnit for an ontology if it exists
* [getNCBIGeneMappingUsingGET](#getncbigenemappingusingget) - Translate an RGD ID to an NCBI Gene ID
* [getNCBIGeneMappingUsingPOST](#getncbigenemappingusingpost) - Translate RGD IDs to NCBI Gene IDs
* [getSpeciesTypesUsingGET](#getspeciestypesusingget) - Return a Map of species type keys available in RGD
* [getUniProtMappingUsingGET](#getuniprotmappingusingget) - Translate an RGD ID to a UniProt ID
* [getUniProtMappingUsingPOST](#getuniprotmappingusingpost) - Translate RGD IDs to UniProt IDs

## getEnsemblGeneMappingUsingGET

Translate an RGD ID to an Ensembl Gene  ID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETEnsemblGeneMappingUsingGETRequest;
import org.openapis.openapi.models.operations.GETEnsemblGeneMappingUsingGETResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETEnsemblGeneMappingUsingGETRequest req = new GETEnsemblGeneMappingUsingGETRequest(437032);            

            GETEnsemblGeneMappingUsingGETResponse res = sdk.lookup.getEnsemblGeneMappingUsingGET(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEnsemblGeneMappingUsingPOST

Translate RGD IDs to Ensembl Gene IDs

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEnsemblGeneMappingUsingPOSTResponse;
import org.openapis.openapi.models.shared.RGDIDListRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.RGDIDListRequest req = new RGDIDListRequest() {{
                rgdIds = new Integer[]{{
                    add(697631),
                    add(99280),
                    add(60225),
                    add(969810),
                }};
            }};            

            GetEnsemblGeneMappingUsingPOSTResponse res = sdk.lookup.getEnsemblGeneMappingUsingPOST(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEnsemblProteinMappingUsingGET

Translate an RGD ID to an Ensembl Protein ID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETEnsemblProteinMappingUsingGETRequest;
import org.openapis.openapi.models.operations.GETEnsemblProteinMappingUsingGETResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETEnsemblProteinMappingUsingGETRequest req = new GETEnsemblProteinMappingUsingGETRequest(666767);            

            GETEnsemblProteinMappingUsingGETResponse res = sdk.lookup.getEnsemblProteinMappingUsingGET(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEnsemblProteinMappingUsingPOST

Translate RGD IDs to Ensembl Protein IDs

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEnsemblProteinMappingUsingPOSTResponse;
import org.openapis.openapi.models.shared.RGDIDListRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.RGDIDListRequest req = new RGDIDListRequest() {{
                rgdIds = new Integer[]{{
                    add(670638),
                    add(170909),
                    add(210382),
                }};
            }};            

            GetEnsemblProteinMappingUsingPOSTResponse res = sdk.lookup.getEnsemblProteinMappingUsingPOST(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEnsemblTranscriptMappingUsingGET

Translate an RGD ID to an Ensembl Transcript ID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETEnsemblTranscriptMappingUsingGETRequest;
import org.openapis.openapi.models.operations.GETEnsemblTranscriptMappingUsingGETResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETEnsemblTranscriptMappingUsingGETRequest req = new GETEnsemblTranscriptMappingUsingGETRequest(358152);            

            GETEnsemblTranscriptMappingUsingGETResponse res = sdk.lookup.getEnsemblTranscriptMappingUsingGET(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEnsemblTranscriptMappingUsingPOST

Translate RGD IDs to Ensembl Transcript IDs

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEnsemblTranscriptMappingUsingPOSTResponse;
import org.openapis.openapi.models.shared.RGDIDListRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.RGDIDListRequest req = new RGDIDListRequest() {{
                rgdIds = new Integer[]{{
                    add(750686),
                }};
            }};            

            GetEnsemblTranscriptMappingUsingPOSTResponse res = sdk.lookup.getEnsemblTranscriptMappingUsingPOST(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGTEXMappingUsingGET

Translate an RGD ID to an GTEx ID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETGTEXMappingUsingGETRequest;
import org.openapis.openapi.models.operations.GETGTEXMappingUsingGETResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETGTEXMappingUsingGETRequest req = new GETGTEXMappingUsingGETRequest(315428);            

            GETGTEXMappingUsingGETResponse res = sdk.lookup.getGTEXMappingUsingGET(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGTEXMappingUsingPOST

Translate RGD IDs to GTEx IDs

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetGTEXMappingUsingPOSTResponse;
import org.openapis.openapi.models.shared.RGDIDListRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.RGDIDListRequest req = new RGDIDListRequest() {{
                rgdIds = new Integer[]{{
                    add(363711),
                    add(325047),
                    add(570197),
                }};
            }};            

            GetGTEXMappingUsingPOSTResponse res = sdk.lookup.getGTEXMappingUsingPOST(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGenBankNucleotideMappingUsingGET

Translate an RGD ID to a GenBank Nucleotide ID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETGenBankNucleotideMappingUsingGETRequest;
import org.openapis.openapi.models.operations.GETGenBankNucleotideMappingUsingGETResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETGenBankNucleotideMappingUsingGETRequest req = new GETGenBankNucleotideMappingUsingGETRequest(38425);            

            GETGenBankNucleotideMappingUsingGETResponse res = sdk.lookup.getGenBankNucleotideMappingUsingGET(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGenBankNucleotideMappingUsingPOST

Translate RGD IDs to GenBank Nucleotide IDs

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetGenBankNucleotideMappingUsingPOSTResponse;
import org.openapis.openapi.models.shared.RGDIDListRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.RGDIDListRequest req = new RGDIDListRequest() {{
                rgdIds = new Integer[]{{
                    add(634274),
                    add(988374),
                }};
            }};            

            GetGenBankNucleotideMappingUsingPOSTResponse res = sdk.lookup.getGenBankNucleotideMappingUsingPOST(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGenBankProteinMappingUsingGET

Translate an RGD ID to a GenBank Protein ID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETGenBankProteinMappingUsingGETRequest;
import org.openapis.openapi.models.operations.GETGenBankProteinMappingUsingGETResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETGenBankProteinMappingUsingGETRequest req = new GETGenBankProteinMappingUsingGETRequest(958950);            

            GETGenBankProteinMappingUsingGETResponse res = sdk.lookup.getGenBankProteinMappingUsingGET(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGenBankProteinMappingUsingPOST

Translate RGD IDs to GenBank Protein IDs

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetGenBankProteinMappingUsingPOSTResponse;
import org.openapis.openapi.models.shared.RGDIDListRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.RGDIDListRequest req = new RGDIDListRequest() {{
                rgdIds = new Integer[]{{
                    add(652790),
                }};
            }};            

            GetGenBankProteinMappingUsingPOSTResponse res = sdk.lookup.getGenBankProteinMappingUsingPOST(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGeneTypesUsingGET

Returns a list of gene types avialable in RGD

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETGeneTypesUsingGETResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETGeneTypesUsingGETResponse res = sdk.lookup.getGeneTypesUsingGET();

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getHGNCMappingUsingGET

Translate an RGD ID to an HGNC ID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETHGNCMappingUsingGETRequest;
import org.openapis.openapi.models.operations.GETHGNCMappingUsingGETResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETHGNCMappingUsingGETRequest req = new GETHGNCMappingUsingGETRequest(208876);            

            GETHGNCMappingUsingGETResponse res = sdk.lookup.getHGNCMappingUsingGET(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getHGNCMappingUsingPOST

Translate RGD IDs to HGNC IDs

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetHGNCMappingUsingPOSTResponse;
import org.openapis.openapi.models.shared.RGDIDListRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.RGDIDListRequest req = new RGDIDListRequest() {{
                rgdIds = new Integer[]{{
                    add(161309),
                    add(995300),
                    add(653108),
                }};
            }};            

            GetHGNCMappingUsingPOSTResponse res = sdk.lookup.getHGNCMappingUsingPOST(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMGIMappingUsingGET

Translate an RGD ID to an MGI ID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETMGIMappingUsingGETRequest;
import org.openapis.openapi.models.operations.GETMGIMappingUsingGETResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETMGIMappingUsingGETRequest req = new GETMGIMappingUsingGETRequest(581850);            

            GETMGIMappingUsingGETResponse res = sdk.lookup.getMGIMappingUsingGET(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMGIMappingUsingPOST

Translate RGD IDs to MGI IDs

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMGIMappingUsingPOSTResponse;
import org.openapis.openapi.models.shared.RGDIDListRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.RGDIDListRequest req = new RGDIDListRequest() {{
                rgdIds = new Integer[]{{
                    add(414369),
                    add(466311),
                }};
            }};            

            GetMGIMappingUsingPOSTResponse res = sdk.lookup.getMGIMappingUsingPOST(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMapsUsingGET

Return a list assembly maps for a species

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETMapsUsingGETRequest;
import org.openapis.openapi.models.operations.GETMapsUsingGETResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETMapsUsingGETRequest req = new GETMapsUsingGETRequest(474697);            

            GETMapsUsingGETResponse res = sdk.lookup.getMapsUsingGET(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMapsUsingGET1

Return a standardUnit for an ontology if it exists

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETMapsUsingGET1Request;
import org.openapis.openapi.models.operations.GETMapsUsingGET1Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETMapsUsingGET1Request req = new GETMapsUsingGET1Request("velit");            

            GETMapsUsingGET1Response res = sdk.lookup.getMapsUsingGET1(req);

            if (res.getMapsUsingGET1200WildcardString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNCBIGeneMappingUsingGET

Translate an RGD ID to an NCBI Gene ID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETNCBIGeneMappingUsingGETRequest;
import org.openapis.openapi.models.operations.GETNCBIGeneMappingUsingGETResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETNCBIGeneMappingUsingGETRequest req = new GETNCBIGeneMappingUsingGETRequest(623510);            

            GETNCBIGeneMappingUsingGETResponse res = sdk.lookup.getNCBIGeneMappingUsingGET(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNCBIGeneMappingUsingPOST

Translate RGD IDs to NCBI Gene IDs

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNCBIGeneMappingUsingPOSTResponse;
import org.openapis.openapi.models.shared.RGDIDListRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.RGDIDListRequest req = new RGDIDListRequest() {{
                rgdIds = new Integer[]{{
                    add(338007),
                }};
            }};            

            GetNCBIGeneMappingUsingPOSTResponse res = sdk.lookup.getNCBIGeneMappingUsingPOST(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSpeciesTypesUsingGET

Return a Map of species type keys available in RGD

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETSpeciesTypesUsingGETResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETSpeciesTypesUsingGETResponse res = sdk.lookup.getSpeciesTypesUsingGET();

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUniProtMappingUsingGET

Translate an RGD ID to a UniProt ID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETUniProtMappingUsingGETRequest;
import org.openapis.openapi.models.operations.GETUniProtMappingUsingGETResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETUniProtMappingUsingGETRequest req = new GETUniProtMappingUsingGETRequest(110375);            

            GETUniProtMappingUsingGETResponse res = sdk.lookup.getUniProtMappingUsingGET(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUniProtMappingUsingPOST

Translate RGD IDs to UniProt IDs

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUniProtMappingUsingPOSTResponse;
import org.openapis.openapi.models.shared.RGDIDListRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.RGDIDListRequest req = new RGDIDListRequest() {{
                rgdIds = new Integer[]{{
                    add(656330),
                    add(317202),
                    add(138183),
                }};
            }};            

            GetUniProtMappingUsingPOSTResponse res = sdk.lookup.getUniProtMappingUsingPOST(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
