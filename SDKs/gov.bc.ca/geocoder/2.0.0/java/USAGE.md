<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            builder.setSecurity(
                new Security() {{
                    apikey = new SchemeApikey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

            GetAddressesOutputFormatRequest req = new GetAddressesOutputFormatRequest() {{
                pathParams = new GetAddressesOutputFormatPathParams() {{
                    outputFormat = "csv";
                }};
                queryParams = new GetAddressesOutputFormatQueryParams() {{
                    addressString = "dolor";
                    autoComplete = false;
                    bbox = "ea";
                    brief = false;
                    centre = "architecto";
                    civicNumber = "consectetur";
                    civicNumberSuffix = "qui";
                    echo = true;
                    extrapolate = false;
                    interpolation = "adaptive";
                    localities = "suscipit";
                    localityName = "deleniti";
                    locationDescriptor = "frontDoorPoint";
                    matchPrecision = "praesentium";
                    matchPrecisionNot = "consequatur";
                    maxDistance = 73.199997;
                    maxResults = 8109920834523359352;
                    minScore = 2351956951862576030;
                    notLocalities = "sit";
                    outputSRS = 4260297587765721210;
                    parcelPoint = "et";
                    provinceCode = "ad";
                    setBack = 9179881789193897614;
                    siteName = "eius";
                    streetDirection = "NE";
                    streetName = "et";
                    streetQualifier = "ab";
                    streetType = "illum";
                    unitDesignator = "UNIT";
                    unitNumber = "debitis";
                    unitNumberSuffix = "nam";
                }};
            }};

            GetAddressesOutputFormatResponse res = sdk.intersections.getAddressesOutputFormat(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->