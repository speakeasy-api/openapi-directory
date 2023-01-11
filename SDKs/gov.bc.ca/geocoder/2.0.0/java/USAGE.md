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
                    addressString = "voluptas";
                    autoComplete = true;
                    bbox = "expedita";
                    brief = true;
                    centre = "dolor";
                    civicNumber = "expedita";
                    civicNumberSuffix = "voluptas";
                    echo = true;
                    extrapolate = false;
                    interpolation = "adaptive";
                    localities = "rerum";
                    localityName = "dicta";
                    locationDescriptor = "any";
                    matchPrecision = "voluptatum";
                    matchPrecisionNot = "et";
                    maxDistance = 11.100000;
                    maxResults = 7259475919510918339;
                    minScore = 7373105480197164748;
                    notLocalities = "iste";
                    outputSRS = 3930927879439176946;
                    parcelPoint = "totam";
                    provinceCode = "dolores";
                    setBack = 1929546706668609706;
                    siteName = "debitis";
                    streetDirection = "N";
                    streetName = "odio";
                    streetQualifier = "dolore";
                    streetType = "id";
                    unitDesignator = "TH";
                    unitNumber = "accusantium";
                    unitNumberSuffix = "totam";
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