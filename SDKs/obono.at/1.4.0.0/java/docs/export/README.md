# export

### Available Operations

* [getExportCsvRegistrierkassenRegistrierkasseUuidBelege](#getexportcsvregistrierkassenregistrierkasseuuidbelege)
* [getExportDep131RegistrierkassenRegistrierkasseUuidBelege](#getexportdep131registrierkassenregistrierkasseuuidbelege)
* [getExportDep7RegistrierkassenRegistrierkasseUuidBelege](#getexportdep7registrierkassenregistrierkasseuuidbelege)
* [getExportGobdRegistrierkassenRegistrierkasseUuid](#getexportgobdregistrierkassenregistrierkasseuuid)
* [getExportHtmlBelegeBelegUuid](#getexporthtmlbelegebeleguuid)
* [getExportPdfBelegeBelegUuid](#getexportpdfbelegebeleguuid)
* [getExportQrBelegeBelegUuid](#getexportqrbelegebeleguuid)
* [getExportThermalPrintBelegeBelegUuid](#getexportthermalprintbelegebeleguuid)
* [getExportXlsRegistrierkassenRegistrierkasseUuidBelege](#getexportxlsregistrierkassenregistrierkasseuuidbelege)

## getExportCsvRegistrierkassenRegistrierkasseUuidBelege

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetExportCsvRegistrierkassenRegistrierkasseUuidBelegeRequest;
import org.openapis.openapi.models.operations.GetExportCsvRegistrierkassenRegistrierkasseUuidBelegeResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laborum") {{
                    jwt = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetExportCsvRegistrierkassenRegistrierkasseUuidBelegeRequest req = new GetExportCsvRegistrierkassenRegistrierkasseUuidBelegeRequest("quasi") {{
                after = "reiciendis";
                before = "voluptatibus";
                posten = false;
            }};            

            GetExportCsvRegistrierkassenRegistrierkasseUuidBelegeResponse res = sdk.export.getExportCsvRegistrierkassenRegistrierkasseUuidBelege(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getExportDep131RegistrierkassenRegistrierkasseUuidBelege

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetExportDep131RegistrierkassenRegistrierkasseUuidBelegeRequest;
import org.openapis.openapi.models.operations.GetExportDep131RegistrierkassenRegistrierkasseUuidBelegeResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vero") {{
                    jwt = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetExportDep131RegistrierkassenRegistrierkasseUuidBelegeRequest req = new GetExportDep131RegistrierkassenRegistrierkasseUuidBelegeRequest("nihil") {{
                after = "praesentium";
                before = "voluptatibus";
            }};            

            GetExportDep131RegistrierkassenRegistrierkasseUuidBelegeResponse res = sdk.export.getExportDep131RegistrierkassenRegistrierkasseUuidBelege(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getExportDep7RegistrierkassenRegistrierkasseUuidBelege

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetExportDep7RegistrierkassenRegistrierkasseUuidBelegeRequest;
import org.openapis.openapi.models.operations.GetExportDep7RegistrierkassenRegistrierkasseUuidBelegeResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsa") {{
                    jwt = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetExportDep7RegistrierkassenRegistrierkasseUuidBelegeRequest req = new GetExportDep7RegistrierkassenRegistrierkasseUuidBelegeRequest("omnis") {{
                after = "voluptate";
                before = "cum";
            }};            

            GetExportDep7RegistrierkassenRegistrierkasseUuidBelegeResponse res = sdk.export.getExportDep7RegistrierkassenRegistrierkasseUuidBelege(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getExportGobdRegistrierkassenRegistrierkasseUuid

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetExportGobdRegistrierkassenRegistrierkasseUuidRequest;
import org.openapis.openapi.models.operations.GetExportGobdRegistrierkassenRegistrierkasseUuidResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perferendis") {{
                    jwt = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetExportGobdRegistrierkassenRegistrierkasseUuidRequest req = new GetExportGobdRegistrierkassenRegistrierkasseUuidRequest("doloremque") {{
                after = "reprehenderit";
                before = "ut";
            }};            

            GetExportGobdRegistrierkassenRegistrierkasseUuidResponse res = sdk.export.getExportGobdRegistrierkassenRegistrierkasseUuid(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getExportHtmlBelegeBelegUuid

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetExportHtmlBelegeBelegUuidRequest;
import org.openapis.openapi.models.operations.GetExportHtmlBelegeBelegUuidResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maiores") {{
                    jwt = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetExportHtmlBelegeBelegUuidRequest req = new GetExportHtmlBelegeBelegUuidRequest("dicta");            

            GetExportHtmlBelegeBelegUuidResponse res = sdk.export.getExportHtmlBelegeBelegUuid(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getExportPdfBelegeBelegUuid

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetExportPdfBelegeBelegUuidRequest;
import org.openapis.openapi.models.operations.GetExportPdfBelegeBelegUuidResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corporis") {{
                    jwt = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetExportPdfBelegeBelegUuidRequest req = new GetExportPdfBelegeBelegUuidRequest("dolore");            

            GetExportPdfBelegeBelegUuidResponse res = sdk.export.getExportPdfBelegeBelegUuid(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getExportQrBelegeBelegUuid

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetExportQrBelegeBelegUuidRequest;
import org.openapis.openapi.models.operations.GetExportQrBelegeBelegUuidResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iusto") {{
                    jwt = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetExportQrBelegeBelegUuidRequest req = new GetExportQrBelegeBelegUuidRequest("dicta");            

            GetExportQrBelegeBelegUuidResponse res = sdk.export.getExportQrBelegeBelegUuid(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getExportThermalPrintBelegeBelegUuid

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetExportThermalPrintBelegeBelegUuidDialectEnum;
import org.openapis.openapi.models.operations.GetExportThermalPrintBelegeBelegUuidEncodingEnum;
import org.openapis.openapi.models.operations.GetExportThermalPrintBelegeBelegUuidRequest;
import org.openapis.openapi.models.operations.GetExportThermalPrintBelegeBelegUuidResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("harum") {{
                    jwt = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetExportThermalPrintBelegeBelegUuidRequest req = new GetExportThermalPrintBelegeBelegUuidRequest("enim") {{
                dialect = GetExportThermalPrintBelegeBelegUuidDialectEnum.TEXT;
                encoding = GetExportThermalPrintBelegeBelegUuidEncodingEnum.RAW;
                qr = false;
                width = 918236L;
            }};            

            GetExportThermalPrintBelegeBelegUuidResponse res = sdk.export.getExportThermalPrintBelegeBelegUuid(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getExportXlsRegistrierkassenRegistrierkasseUuidBelege

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetExportXlsRegistrierkassenRegistrierkasseUuidBelegeRequest;
import org.openapis.openapi.models.operations.GetExportXlsRegistrierkassenRegistrierkasseUuidBelegeResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quae") {{
                    jwt = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetExportXlsRegistrierkassenRegistrierkasseUuidBelegeRequest req = new GetExportXlsRegistrierkassenRegistrierkasseUuidBelegeRequest("ipsum") {{
                after = "quidem";
                before = "molestias";
            }};            

            GetExportXlsRegistrierkassenRegistrierkasseUuidBelegeResponse res = sdk.export.getExportXlsRegistrierkassenRegistrierkasseUuidBelege(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
