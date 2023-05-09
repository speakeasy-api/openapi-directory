# export

## Overview

Requires Export Token or Organization Key

### Available Operations

* [exportAssetTopHWCSV](#exportassettophwcsv) - Top asset hardware products as CSV
* [exportAssetTopOSCSV](#exportassettoposcsv) - Top asset operating systems as CSV
* [exportAssetTopTagsCSV](#exportassettoptagscsv) - Top asset tags as CSV
* [exportAssetTopTypesCSV](#exportassettoptypescsv) - Top asset types as CSV
* [exportAssetsCSV](#exportassetscsv) - Asset inventory as CSV
* [exportAssetsJSON](#exportassetsjson) - Exports the asset inventory
* [exportAssetsJSONL](#exportassetsjsonl) - Asset inventory as JSON line-delimited
* [exportAssetsNmapXML](#exportassetsnmapxml) - Asset inventory as Nmap-style XML
* [exportServicesCSV](#exportservicescsv) - Service inventory as CSV
* [exportServicesJSON](#exportservicesjson) - Service inventory as JSON
* [exportServicesJSONL](#exportservicesjsonl) - Service inventory as JSON line-delimited
* [exportServicesTopProductsCSV](#exportservicestopproductscsv) - Top service products as CSV
* [exportServicesTopProtocolsCSV](#exportservicestopprotocolscsv) - Top service protocols as CSV
* [exportServicesTopTCPCSV](#exportservicestoptcpcsv) - Top TCP services as CSV
* [exportServicesTopUDPCSV](#exportservicestopudpcsv) - Top UDP services as CSV
* [exportSitesCSV](#exportsitescsv) - Site list as CSV
* [exportSitesJSON](#exportsitesjson) - Export all sites
* [exportSitesJSONL](#exportsitesjsonl) - Site list as JSON line-delimited
* [exportSubnetUtilizationStatsCSV](#exportsubnetutilizationstatscsv) - Subnet utilization statistics as as CSV
* [exportWirelessCSV](#exportwirelesscsv) - Wireless inventory as CSV
* [exportWirelessJSON](#exportwirelessjson) - Wireless inventory as JSON
* [exportWirelessJSONL](#exportwirelessjsonl) - Wireless inventory as JSON line-delimited

## exportAssetTopHWCSV

Top asset hardware products as CSV

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ExportAssetTopHWCSVResponse;
import org.openapis.openapi.models.operations.ExportAssetTopHWCSVSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ExportAssetTopHWCSVResponse res = sdk.export.exportAssetTopHWCSV(new ExportAssetTopHWCSVSecurity("eum") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.exportAssetTopHWCSV200TextCsvBinaryString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## exportAssetTopOSCSV

Top asset operating systems as CSV

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ExportAssetTopOSCSVResponse;
import org.openapis.openapi.models.operations.ExportAssetTopOSCSVSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ExportAssetTopOSCSVResponse res = sdk.export.exportAssetTopOSCSV(new ExportAssetTopOSCSVSecurity("mollitia") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.exportAssetTopOSCSV200TextCsvBinaryString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## exportAssetTopTagsCSV

Top asset tags as CSV

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ExportAssetTopTagsCSVResponse;
import org.openapis.openapi.models.operations.ExportAssetTopTagsCSVSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ExportAssetTopTagsCSVResponse res = sdk.export.exportAssetTopTagsCSV(new ExportAssetTopTagsCSVSecurity("ab") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.exportAssetTopTagsCSV200TextCSVBinaryString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## exportAssetTopTypesCSV

Top asset types as CSV

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ExportAssetTopTypesCSVResponse;
import org.openapis.openapi.models.operations.ExportAssetTopTypesCSVSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ExportAssetTopTypesCSVResponse res = sdk.export.exportAssetTopTypesCSV(new ExportAssetTopTypesCSVSecurity("corrupti") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.exportAssetTopTypesCSV200TextCSVBinaryString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## exportAssetsCSV

Asset inventory as CSV

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ExportAssetsCSVRequest;
import org.openapis.openapi.models.operations.ExportAssetsCSVResponse;
import org.openapis.openapi.models.operations.ExportAssetsCSVSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ExportAssetsCSVRequest req = new ExportAssetsCSVRequest() {{
                search = "non";
            }};            

            ExportAssetsCSVResponse res = sdk.export.exportAssetsCSV(req, new ExportAssetsCSVSecurity("voluptatem") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.exportAssetsCSV200TextCSVBinaryString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## exportAssetsJSON

Exports the asset inventory

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ExportAssetsJSONRequest;
import org.openapis.openapi.models.operations.ExportAssetsJSONResponse;
import org.openapis.openapi.models.operations.ExportAssetsJSONSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ExportAssetsJSONRequest req = new ExportAssetsJSONRequest() {{
                fields = "dolor";
                search = "occaecati";
            }};            

            ExportAssetsJSONResponse res = sdk.export.exportAssetsJSON(req, new ExportAssetsJSONSecurity("numquam") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.assets != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## exportAssetsJSONL

Asset inventory as JSON line-delimited

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ExportAssetsJSONLRequest;
import org.openapis.openapi.models.operations.ExportAssetsJSONLResponse;
import org.openapis.openapi.models.operations.ExportAssetsJSONLSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ExportAssetsJSONLRequest req = new ExportAssetsJSONLRequest() {{
                fields = "impedit";
                search = "explicabo";
            }};            

            ExportAssetsJSONLResponse res = sdk.export.exportAssetsJSONL(req, new ExportAssetsJSONLSecurity("voluptas") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.exportAssetsJSONL200ApplicationJSONBinaryString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## exportAssetsNmapXML

Asset inventory as Nmap-style XML

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ExportAssetsNmapXMLRequest;
import org.openapis.openapi.models.operations.ExportAssetsNmapXMLResponse;
import org.openapis.openapi.models.operations.ExportAssetsNmapXMLSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ExportAssetsNmapXMLRequest req = new ExportAssetsNmapXMLRequest() {{
                search = "aut";
            }};            

            ExportAssetsNmapXMLResponse res = sdk.export.exportAssetsNmapXML(req, new ExportAssetsNmapXMLSecurity("dignissimos") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.exportAssetsNmapXML200TextXMLBinaryString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## exportServicesCSV

Service inventory as CSV

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ExportServicesCSVRequest;
import org.openapis.openapi.models.operations.ExportServicesCSVResponse;
import org.openapis.openapi.models.operations.ExportServicesCSVSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ExportServicesCSVRequest req = new ExportServicesCSVRequest() {{
                search = "dicta";
            }};            

            ExportServicesCSVResponse res = sdk.export.exportServicesCSV(req, new ExportServicesCSVSecurity("maiores") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.exportServicesCSV200TextCSVBinaryString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## exportServicesJSON

Service inventory as JSON

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ExportServicesJSONRequest;
import org.openapis.openapi.models.operations.ExportServicesJSONResponse;
import org.openapis.openapi.models.operations.ExportServicesJSONSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ExportServicesJSONRequest req = new ExportServicesJSONRequest() {{
                fields = "natus";
                search = "velit";
            }};            

            ExportServicesJSONResponse res = sdk.export.exportServicesJSON(req, new ExportServicesJSONSecurity("voluptatibus") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.services != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## exportServicesJSONL

Service inventory as JSON line-delimited

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ExportServicesJSONLRequest;
import org.openapis.openapi.models.operations.ExportServicesJSONLResponse;
import org.openapis.openapi.models.operations.ExportServicesJSONLSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ExportServicesJSONLRequest req = new ExportServicesJSONLRequest() {{
                fields = "voluptas";
                search = "asperiores";
            }};            

            ExportServicesJSONLResponse res = sdk.export.exportServicesJSONL(req, new ExportServicesJSONLSecurity("aperiam") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.exportServicesJSONL200ApplicationJSONBinaryString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## exportServicesTopProductsCSV

Top service products as CSV

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ExportServicesTopProductsCSVResponse;
import org.openapis.openapi.models.operations.ExportServicesTopProductsCSVSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ExportServicesTopProductsCSVResponse res = sdk.export.exportServicesTopProductsCSV(new ExportServicesTopProductsCSVSecurity("ea") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.exportServicesTopProductsCSV200TextCSVBinaryString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## exportServicesTopProtocolsCSV

Top service protocols as CSV

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ExportServicesTopProtocolsCSVResponse;
import org.openapis.openapi.models.operations.ExportServicesTopProtocolsCSVSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ExportServicesTopProtocolsCSVResponse res = sdk.export.exportServicesTopProtocolsCSV(new ExportServicesTopProtocolsCSVSecurity("quaerat") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.exportServicesTopProtocolsCSV200TextCSVBinaryString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## exportServicesTopTCPCSV

Top TCP services as CSV

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ExportServicesTopTCPCSVResponse;
import org.openapis.openapi.models.operations.ExportServicesTopTCPCSVSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ExportServicesTopTCPCSVResponse res = sdk.export.exportServicesTopTCPCSV(new ExportServicesTopTCPCSVSecurity("consequuntur") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.exportServicesTopTCPCSV200TextCsvBinaryString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## exportServicesTopUDPCSV

Top UDP services as CSV

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ExportServicesTopUDPCSVResponse;
import org.openapis.openapi.models.operations.ExportServicesTopUDPCSVSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ExportServicesTopUDPCSVResponse res = sdk.export.exportServicesTopUDPCSV(new ExportServicesTopUDPCSVSecurity("repellendus") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.exportServicesTopUDPCSV200TextCsvBinaryString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## exportSitesCSV

Site list as CSV

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ExportSitesCSVResponse;
import org.openapis.openapi.models.operations.ExportSitesCSVSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ExportSitesCSVResponse res = sdk.export.exportSitesCSV(new ExportSitesCSVSecurity("officia") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.exportSitesCSV200TextCSVBinaryString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## exportSitesJSON

Export all sites

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ExportSitesJSONRequest;
import org.openapis.openapi.models.operations.ExportSitesJSONResponse;
import org.openapis.openapi.models.operations.ExportSitesJSONSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ExportSitesJSONRequest req = new ExportSitesJSONRequest() {{
                fields = "maxime";
                search = "dignissimos";
            }};            

            ExportSitesJSONResponse res = sdk.export.exportSitesJSON(req, new ExportSitesJSONSecurity("officia") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.sites != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## exportSitesJSONL

Site list as JSON line-delimited

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ExportSitesJSONLRequest;
import org.openapis.openapi.models.operations.ExportSitesJSONLResponse;
import org.openapis.openapi.models.operations.ExportSitesJSONLSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ExportSitesJSONLRequest req = new ExportSitesJSONLRequest() {{
                fields = "asperiores";
                search = "nemo";
            }};            

            ExportSitesJSONLResponse res = sdk.export.exportSitesJSONL(req, new ExportSitesJSONLSecurity("quae") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.exportSitesJSONL200ApplicationJSONBinaryString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## exportSubnetUtilizationStatsCSV

Subnet utilization statistics as as CSV

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ExportSubnetUtilizationStatsCSVRequest;
import org.openapis.openapi.models.operations.ExportSubnetUtilizationStatsCSVResponse;
import org.openapis.openapi.models.operations.ExportSubnetUtilizationStatsCSVSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ExportSubnetUtilizationStatsCSVRequest req = new ExportSubnetUtilizationStatsCSVRequest() {{
                mask = "quaerat";
            }};            

            ExportSubnetUtilizationStatsCSVResponse res = sdk.export.exportSubnetUtilizationStatsCSV(req, new ExportSubnetUtilizationStatsCSVSecurity("porro") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.exportSubnetUtilizationStatsCSV200TextCSVBinaryString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## exportWirelessCSV

Wireless inventory as CSV

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ExportWirelessCSVRequest;
import org.openapis.openapi.models.operations.ExportWirelessCSVResponse;
import org.openapis.openapi.models.operations.ExportWirelessCSVSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ExportWirelessCSVRequest req = new ExportWirelessCSVRequest() {{
                search = "quod";
            }};            

            ExportWirelessCSVResponse res = sdk.export.exportWirelessCSV(req, new ExportWirelessCSVSecurity("labore") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.exportWirelessCSV200TextCSVBinaryString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## exportWirelessJSON

Wireless inventory as JSON

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ExportWirelessJSONRequest;
import org.openapis.openapi.models.operations.ExportWirelessJSONResponse;
import org.openapis.openapi.models.operations.ExportWirelessJSONSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ExportWirelessJSONRequest req = new ExportWirelessJSONRequest() {{
                fields = "ab";
                search = "adipisci";
            }};            

            ExportWirelessJSONResponse res = sdk.export.exportWirelessJSON(req, new ExportWirelessJSONSecurity("fuga") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.wirelesses != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## exportWirelessJSONL

Wireless inventory as JSON line-delimited

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ExportWirelessJSONLRequest;
import org.openapis.openapi.models.operations.ExportWirelessJSONLResponse;
import org.openapis.openapi.models.operations.ExportWirelessJSONLSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ExportWirelessJSONLRequest req = new ExportWirelessJSONLRequest() {{
                fields = "id";
                search = "suscipit";
            }};            

            ExportWirelessJSONLResponse res = sdk.export.exportWirelessJSONL(req, new ExportWirelessJSONLSecurity("velit") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.exportWirelessJSONL200ApplicationJSONBinaryString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
