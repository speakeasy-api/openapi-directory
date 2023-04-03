<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.GetAddressesOutputFormatInterpolationEnum;
import org.openapis.openapi.models.operations.GetAddressesOutputFormatLocationDescriptorEnum;
import org.openapis.openapi.models.operations.GetAddressesOutputFormatOutputFormatEnum;
import org.openapis.openapi.models.operations.GetAddressesOutputFormatOutputSrsEnum;
import org.openapis.openapi.models.operations.GetAddressesOutputFormatStreetDirectionEnum;
import org.openapis.openapi.models.operations.GetAddressesOutputFormatUnitDesignatorEnum;
import org.openapis.openapi.models.operations.GetAddressesOutputFormatRequest;
import org.openapis.openapi.models.operations.GetAddressesOutputFormatResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apikey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetAddressesOutputFormatRequest req = new GetAddressesOutputFormatRequest() {{
                addressString = "corrupti";
                autoComplete = false;
                bbox = "provident";
                brief = false;
                centre = "distinctio";
                civicNumber = "quibusdam";
                civicNumberSuffix = "unde";
                echo = false;
                extrapolate = false;
                interpolation = "none";
                localities = "corrupti";
                localityName = "illum";
                locationDescriptor = "frontDoorPoint";
                matchPrecision = "error";
                matchPrecisionNot = "deserunt";
                maxDistance = 3843.82;
                maxResults = 437587;
                minScore = 297534;
                notLocalities = "debitis";
                outputFormat = "json";
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
            }}            

            GetAddressesOutputFormatResponse res = sdk.intersections.getAddressesOutputFormat(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->