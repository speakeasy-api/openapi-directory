# eCommerce

### Available Operations

* [binListDownload](#binlistdownload) - BIN List Download
* [binLookup](#binlookup) - BIN Lookup
* [convert](#convert) - Convert

## binListDownload

Download our entire BIN database for direct use on your own systems

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BINListDownloadRequest;
import org.openapis.openapi.models.operations.BINListDownloadResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("temporibus", "ab") {{
                    apiKey = "YOUR_API_KEY_HERE";
                    userId = "YOUR_API_KEY_HERE";
                }})
                .build();

            BINListDownloadRequest req = new BINListDownloadRequest() {{
                include8digit = false;
                includeIso3 = false;
            }};            

            BINListDownloadResponse res = sdk.eCommerce.binListDownload(req);

            if (res.binListDownload200ApplicationJSONBinaryString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## binLookup

Perform a BIN (Bank Identification Number) or IIN (Issuer Identification Number) lookup

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BINLookupRequest;
import org.openapis.openapi.models.operations.BINLookupResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quis", "veritatis") {{
                    apiKey = "YOUR_API_KEY_HERE";
                    userId = "YOUR_API_KEY_HERE";
                }})
                .build();

            BINLookupRequest req = new BINLookupRequest("deserunt") {{
                customerIp = "perferendis";
            }};            

            BINLookupResponse res = sdk.eCommerce.binLookup(req);

            if (res.binLookupResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## convert

A currency and unit conversion tool

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConvertRequest;
import org.openapis.openapi.models.operations.ConvertResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsam", "repellendus") {{
                    apiKey = "YOUR_API_KEY_HERE";
                    userId = "YOUR_API_KEY_HERE";
                }})
                .build();

            ConvertRequest req = new ConvertRequest("sapiente", "quo", "odit");            

            ConvertResponse res = sdk.eCommerce.convert(req);

            if (res.convertResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
