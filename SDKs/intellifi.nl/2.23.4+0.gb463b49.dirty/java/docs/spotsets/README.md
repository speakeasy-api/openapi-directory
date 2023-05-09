# spotsets

## Overview

The `spotsets` resource contains a collection of set definitons for each Smartspot and allows for remote mananagement.
Spotsets are stored and used on the Smartspot locally and synced between Smartspot and server.
Spotsets primarly are used as an input for Sense&Control.


<https://intellifi.zendesk.com/hc/en-us/articles/360009282834>
### Available Operations

* [getSpotsets](#getspotsets) - Get spotsets
* [getSpotsetsId](#getspotsetsid) - Get spotset
* [postSpotsets](#postspotsets) - Create spotset
* [putSpotsetsId](#putspotsetsid) - Update existing spotset

## getSpotsets

Get spotsets

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSpotsetsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    cookieSid = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSpotsetsResponse res = sdk.spotsets.getSpotsets();

            if (res.spotSet != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSpotsetsId

Get spotset

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSpotsetsIdRequest;
import org.openapis.openapi.models.operations.GetSpotsetsIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    cookieSid = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSpotsetsIdRequest req = new GetSpotsetsIdRequest("dolorum");            

            GetSpotsetsIdResponse res = sdk.spotsets.getSpotsetsId(req);

            if (res.spotSet != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postSpotsets

Create spotset

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostSpotsetsResponse;
import org.openapis.openapi.models.shared.ItemProtocolEnum;
import org.openapis.openapi.models.shared.ItemTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SpotSetTypeAreacodeInput;
import org.openapis.openapi.models.shared.SpotSetTypeAreacodeTypeEnum;
import org.openapis.openapi.models.shared.SpotSetTypeCodelengthInput;
import org.openapis.openapi.models.shared.SpotSetTypeCodelengthTypeEnum;
import org.openapis.openapi.models.shared.SpotSetTypeCodemaskInput;
import org.openapis.openapi.models.shared.SpotSetTypeCodemaskTypeEnum;
import org.openapis.openapi.models.shared.SpotSetTypeCoderangeInput;
import org.openapis.openapi.models.shared.SpotSetTypeCoderangeTypeEnum;
import org.openapis.openapi.models.shared.SpotSetTypeExtendedInput;
import org.openapis.openapi.models.shared.SpotSetTypeExtendedOperatorEnum;
import org.openapis.openapi.models.shared.SpotSetTypeExtendedTypeEnum;
import org.openapis.openapi.models.shared.SpotSetTypeListInput;
import org.openapis.openapi.models.shared.SpotSetTypeListRestrictions;
import org.openapis.openapi.models.shared.SpotSetTypeListTypeEnum;
import org.openapis.openapi.models.shared.SpotSetTypeProtocolInput;
import org.openapis.openapi.models.shared.SpotSetTypeProtocolTypeEnum;
import org.openapis.openapi.models.shared.SpotSetTypeTechnologyInput;
import org.openapis.openapi.models.shared.SpotSetTypeTechnologyTypeEnum;
import org.openapis.openapi.models.shared.SpotSetTypeTypeInput;
import org.openapis.openapi.models.shared.SpotSetTypeTypeTypeEnum;
import org.openapis.openapi.models.shared.TechnologyEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    cookieSid = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.. req = new SpotSetTypeExtendedInput() {{
                key = "pariatur";
                operator = SpotSetTypeExtendedOperatorEnum.LT;
                setid = 750844L;
                type = SpotSetTypeExtendedTypeEnum.EXTENDED;
                value = 964490;
            }}            

            PostSpotsetsResponse res = sdk.spotsets.postSpotsets(req);

            if (res.responseDefaultResource != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putSpotsetsId

Update existing spotset

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutSpotsetsIdRequest;
import org.openapis.openapi.models.operations.PutSpotsetsIdResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SpotSetUpdate;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    cookieSid = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutSpotsetsIdRequest req = new PutSpotsetsIdRequest(                new SpotSetUpdate() {{
                                delete = false;
                            }};, "quaerat");            

            PutSpotsetsIdResponse res = sdk.spotsets.putSpotsetsId(req);

            if (res.responseDefaultResource != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
