<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAddressesOutputFormatInterpolationEnum;
import org.openapis.openapi.models.operations.GetAddressesOutputFormatLocationDescriptorEnum;
import org.openapis.openapi.models.operations.GetAddressesOutputFormatOutputFormatEnum;
import org.openapis.openapi.models.operations.GetAddressesOutputFormatOutputSrsEnum;
import org.openapis.openapi.models.operations.GetAddressesOutputFormatRequest;
import org.openapis.openapi.models.operations.GetAddressesOutputFormatResponse;
import org.openapis.openapi.models.operations.GetAddressesOutputFormatStreetDirectionEnum;
import org.openapis.openapi.models.operations.GetAddressesOutputFormatUnitDesignatorEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    apikey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetAddressesOutputFormatRequest req = new GetAddressesOutputFormatRequest(GetAddressesOutputFormatOutputFormatEnum.GML) {{
                addressString = "distinctio";
                autoComplete = false;
                bbox = "quibusdam";
                brief = false;
                centre = "unde";
                civicNumber = "nulla";
                civicNumberSuffix = "corrupti";
                echo = false;
                extrapolate = false;
                interpolation = GetAddressesOutputFormatInterpolationEnum.NONE;
                localities = "vel";
                localityName = "error";
                locationDescriptor = GetAddressesOutputFormatLocationDescriptorEnum.PARCEL_POINT;
                matchPrecision = "suscipit";
                matchPrecisionNot = "iure";
                maxDistance = 2975.34;
                maxResults = 891773L;
                minScore = 56713L;
                notLocalities = "delectus";
                outputSRS = GetAddressesOutputFormatOutputSrsEnum.THREE_THOUSAND_AND_FIVE;
                parcelPoint = "suscipit";
                provinceCode = "molestiae";
                setBack = 791725L;
                siteName = "placeat";
                streetDirection = GetAddressesOutputFormatStreetDirectionEnum.NE;
                streetName = "iusto";
                streetQualifier = "excepturi";
                streetType = "nisi";
                unitDesignator = GetAddressesOutputFormatUnitDesignatorEnum.UNIT;
                unitNumber = "temporibus";
                unitNumberSuffix = "ab";
            }};            

            GetAddressesOutputFormatResponse res = sdk.intersections.getAddressesOutputFormat(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->