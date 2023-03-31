<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.GetAddressesOutputFormatOutputFormatEnum;
import org.openapis.openapi.models.operations.GetAddressesOutputFormatPathParams;
import org.openapis.openapi.models.operations.GetAddressesOutputFormatInterpolationEnum;
import org.openapis.openapi.models.operations.GetAddressesOutputFormatLocationDescriptorEnum;
import org.openapis.openapi.models.operations.GetAddressesOutputFormatOutputSrsEnum;
import org.openapis.openapi.models.operations.GetAddressesOutputFormatStreetDirectionEnum;
import org.openapis.openapi.models.operations.GetAddressesOutputFormatUnitDesignatorEnum;
import org.openapis.openapi.models.operations.GetAddressesOutputFormatQueryParams;
import org.openapis.openapi.models.operations.GetAddressesOutputFormatRequest;
import org.openapis.openapi.models.operations.GetAddressesOutputFormatResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apikey = new SchemeApikey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            GetAddressesOutputFormatRequest req = new GetAddressesOutputFormatRequest() {{
                pathParams = new GetAddressesOutputFormatPathParams() {{
                    outputFormat = "kml";
                }};
                queryParams = new GetAddressesOutputFormatQueryParams() {{
                    addressString = "provident";
                    autoComplete = false;
                    bbox = "distinctio";
                    brief = false;
                    centre = "quibusdam";
                    civicNumber = "unde";
                    civicNumberSuffix = "nulla";
                    echo = false;
                    extrapolate = false;
                    interpolation = "linear";
                    localities = "illum";
                    localityName = "vel";
                    locationDescriptor = "parcelPoint";
                    matchPrecision = "deserunt";
                    matchPrecisionNot = "suscipit";
                    maxDistance = 4375.87;
                    maxResults = 297534;
                    minScore = 891773;
                    notLocalities = "ipsa";
                    outputSRS = "26911";
                    parcelPoint = "tempora";
                    provinceCode = "suscipit";
                    setBack = 477665;
                    siteName = "minus";
                    streetDirection = "SE";
                    streetName = "voluptatum";
                    streetQualifier = "iusto";
                    streetType = "excepturi";
                    unitDesignator = "PAD";
                    unitNumber = "recusandae";
                    unitNumberSuffix = "temporibus";
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