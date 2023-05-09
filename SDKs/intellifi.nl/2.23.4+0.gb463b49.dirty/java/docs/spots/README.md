# spots

## Overview

The `spots` resource contains representations of Smartspot devices that have connected to this Brain at least once.
It is possible to configure Smartspots through this resource.

Smartspots also have their own locally stored sets, referred to as "spotsets".
Spotsets can be created and managed within a single spot instance or by using `spotsets` resource.
Created or updated spotsets are automatically synced between Smartspot and server.


<https://intellifi.zendesk.com/hc/en-us/categories/360000685434>
### Available Operations

* [addSpotSet](#addspotset) - Create spotset
* [getSpotById](#getspotbyid) - Get spot
* [getSpotSetById](#getspotsetbyid) - Get spotset
* [getSpotSetsById](#getspotsetsbyid) - Get spotsets
* [getSpots](#getspots) - Get all spots
* [updateSpot](#updatespot) - Update existing spot
* [updateSpotSet](#updatespotset) - Update existing spotset

## addSpotSet

Create spotset

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddSpotSetRequest;
import org.openapis.openapi.models.operations.AddSpotSetResponse;
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

            AddSpotSetRequest req = new AddSpotSetRequest(                new SpotSetTypeAreacodeInput() {{
                                areaCode = 855804;
                                setid = 230742L;
                                type = SpotSetTypeAreacodeTypeEnum.AREACODE;
                            }}, "aut");            

            AddSpotSetResponse res = sdk.spots.addSpotSet(req);

            if (res.responseDefaultResource != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSpotById

Get spot

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSpotByIdRequest;
import org.openapis.openapi.models.operations.GetSpotByIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    cookieSid = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSpotByIdRequest req = new GetSpotByIdRequest("cumque");            

            GetSpotByIdResponse res = sdk.spots.getSpotById(req);

            if (res.spotGet != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSpotSetById

Get spotset

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSpotSetByIdRequest;
import org.openapis.openapi.models.operations.GetSpotSetByIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    cookieSid = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSpotSetByIdRequest req = new GetSpotSetByIdRequest("corporis", "hic");            

            GetSpotSetByIdResponse res = sdk.spots.getSpotSetById(req);

            if (res.spotSet != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSpotSetsById

Get spotsets

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSpotSetsByIdRequest;
import org.openapis.openapi.models.operations.GetSpotSetsByIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    cookieSid = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSpotSetsByIdRequest req = new GetSpotSetsByIdRequest("libero");            

            GetSpotSetsByIdResponse res = sdk.spots.getSpotSetsById(req);

            if (res.spotSet != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSpots

Get all spots

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSpotsRequest;
import org.openapis.openapi.models.operations.GetSpotsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    cookieSid = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSpotsRequest req = new GetSpotsRequest() {{
                after = OffsetDateTime.parse("2022-08-28T17:02:52.151Z");
                afterId = "quis";
                before = "totam";
                beforeId = "dignissimos";
                from = "eaque";
                fromId = "quis";
                id = "5b7d6cbd7503c445552a1664";
                idOnly = false;
                isOnline = true;
                limit = 199996L;
                populate = "eos";
                requestCounter = 73807L;
                resultsOnly = false;
                select = "perferendis";
                serialNumber = 1337L;
                sort = "dolores";
                timeCreated = "2018-08-30T09:51:59.737Z";
                timeUpdated = "2018-08-30T09:51:59.737Z";
                timeoutS = 7936.98;
                until = "quam";
                untilId = "dolor";
            }};            

            GetSpotsResponse res = sdk.spots.getSpots(req);

            if (res.getSpots200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateSpot

Update existing spot

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateSpotRequest;
import org.openapis.openapi.models.operations.UpdateSpotResponse;
import org.openapis.openapi.models.shared.GeoCoordsInput;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SpotUpdateAntennaReportLocationsInput;
import org.openapis.openapi.models.shared.SpotUpdateInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    cookieSid = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateSpotRequest req = new UpdateSpotRequest(                new SpotUpdateInput() {{
                                antennaReportLocations = new org.openapis.openapi.models.shared.SpotUpdateAntennaReportLocationsInput[]{{
                                    add(new SpotUpdateAntennaReportLocationsInput() {{
                                        antennaNumber = 1L;
                                    }}),
                                    add(new SpotUpdateAntennaReportLocationsInput() {{
                                        antennaNumber = 1L;
                                    }}),
                                    add(new SpotUpdateAntennaReportLocationsInput() {{
                                        antennaNumber = 1L;
                                    }}),
                                    add(new SpotUpdateAntennaReportLocationsInput() {{
                                        antennaNumber = 1L;
                                    }}),
                                }};
                                configRequest = new java.util.HashMap<String, Object>() {{
                                    put("hic", "recusandae");
                                    put("omnis", "facilis");
                                }};
                                geoCoords = new GeoCoordsInput() {{
                                    lat = 5966.56;
                                    lng = 318.38;
                                }};;
                                reportLocation = "5b7d6cbd7503c445552a1664";
                                sensesRequest = new java.util.HashMap<String, Object>() {{
                                    put("consequuntur", "blanditiis");
                                    put("error", "eaque");
                                    put("occaecati", "rerum");
                                    put("adipisci", "asperiores");
                                }};
                            }};, "earum");            

            UpdateSpotResponse res = sdk.spots.updateSpot(req);

            if (res.responseDefaultResource != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateSpotSet

Update existing spotset

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateSpotSetRequest;
import org.openapis.openapi.models.operations.UpdateSpotSetResponse;
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

            UpdateSpotSetRequest req = new UpdateSpotSetRequest(                new SpotSetUpdate() {{
                                delete = false;
                            }};, "modi", "iste");            

            UpdateSpotSetResponse res = sdk.spots.updateSpotSet(req);

            if (res.responseDefaultResource != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
