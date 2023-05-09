# hotspot20

### Available Operations

* [getNetworkWirelessSsidHotspot20](#getnetworkwirelessssidhotspot20) - Return the Hotspot 2.0 settings for an SSID
* [updateNetworkWirelessSsidHotspot20](#updatenetworkwirelessssidhotspot20) - Update the Hotspot 2.0 settings of an SSID

## getNetworkWirelessSsidHotspot20

Return the Hotspot 2.0 settings for an SSID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkWirelessSsidHotspot20Request;
import org.openapis.openapi.models.operations.GetNetworkWirelessSsidHotspot20Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reprehenderit") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkWirelessSsidHotspot20Request req = new GetNetworkWirelessSsidHotspot20Request("odio", "placeat");            

            GetNetworkWirelessSsidHotspot20Response res = sdk.hotspot20.getNetworkWirelessSsidHotspot20(req);

            if (res.getNetworkWirelessSsidHotspot20200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkWirelessSsidHotspot20

Update the Hotspot 2.0 settings of an SSID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidHotspot20Request;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidHotspot20RequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidHotspot20RequestBodyMccMncs;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealms;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsFormatEnum;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsMethods;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidHotspot20RequestBodyNetworkAccessTypeEnum;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidHotspot20RequestBodyOperator;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidHotspot20RequestBodyVenue;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum;
import org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidHotspot20Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perspiciatis") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkWirelessSsidHotspot20Request req = new UpdateNetworkWirelessSsidHotspot20Request("harum", "asperiores") {{
                requestBody = new UpdateNetworkWirelessSsidHotspot20RequestBody() {{
                    domains = new String[]{{
                        add("aspernatur"),
                        add("labore"),
                        add("et"),
                        add("fuga"),
                    }};
                    enabled = false;
                    mccMncs = new org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidHotspot20RequestBodyMccMncs[]{{
                        add(new UpdateNetworkWirelessSsidHotspot20RequestBodyMccMncs() {{
                            mcc = "sed";
                            mnc = "nobis";
                        }}),
                        add(new UpdateNetworkWirelessSsidHotspot20RequestBodyMccMncs() {{
                            mcc = "maiores";
                            mnc = "quis";
                        }}),
                    }};
                    naiRealms = new org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealms[]{{
                        add(new UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealms() {{
                            format = UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsFormatEnum.ONE;
                            methods = new org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsMethods[]{{
                                add(new UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsMethods() {{
                                    authenticationTypes = new java.util.HashMap<String, Object>() {{
                                        put("in", "minus");
                                        put("suscipit", "architecto");
                                        put("aliquam", "in");
                                        put("recusandae", "accusantium");
                                    }};
                                    id = "c2cce298-1922-44e2-80e5-13e655c46bb6";
                                }}),
                            }};
                            realm = "fugiat";
                        }}),
                        add(new UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealms() {{
                            format = UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsFormatEnum.ONE;
                            methods = new org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsMethods[]{{
                                add(new UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsMethods() {{
                                    authenticationTypes = new java.util.HashMap<String, Object>() {{
                                        put("ex", "voluptatem");
                                        put("nisi", "ullam");
                                    }};
                                    id = "0d0eb06d-21d9-4af7-b5b5-a53eb6c072c5";
                                }}),
                                add(new UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsMethods() {{
                                    authenticationTypes = new java.util.HashMap<String, Object>() {{
                                        put("magni", "eum");
                                        put("possimus", "delectus");
                                        put("repellat", "dolorum");
                                        put("veniam", "reprehenderit");
                                    }};
                                    id = "7403383a-66db-46bb-b8aa-7310c3d14ba9";
                                }}),
                                add(new UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsMethods() {{
                                    authenticationTypes = new java.util.HashMap<String, Object>() {{
                                        put("minus", "sed");
                                    }};
                                    id = "6349d592-72ed-4506-a462-c99eaadacd2b";
                                }}),
                            }};
                            realm = "atque";
                        }}),
                        add(new UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealms() {{
                            format = UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsFormatEnum.ZERO;
                            methods = new org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsMethods[]{{
                                add(new UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsMethods() {{
                                    authenticationTypes = new java.util.HashMap<String, Object>() {{
                                        put("saepe", "sunt");
                                        put("iure", "at");
                                        put("recusandae", "praesentium");
                                        put("quae", "corrupti");
                                    }};
                                    id = "2e0ab164-fb61-4449-8dbb-0b50681a7f89";
                                }}),
                                add(new UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsMethods() {{
                                    authenticationTypes = new java.util.HashMap<String, Object>() {{
                                        put("dignissimos", "at");
                                        put("perspiciatis", "itaque");
                                        put("cumque", "tempora");
                                        put("non", "sed");
                                    }};
                                    id = "ba730923-9137-4eac-9f80-6d4e2f39e706";
                                }}),
                            }};
                            realm = "fugit";
                        }}),
                        add(new UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealms() {{
                            format = UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsFormatEnum.ZERO;
                            methods = new org.openapis.openapi.models.operations.UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsMethods[]{{
                                add(new UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsMethods() {{
                                    authenticationTypes = new java.util.HashMap<String, Object>() {{
                                        put("fuga", "quod");
                                        put("ea", "inventore");
                                        put("adipisci", "tempora");
                                    }};
                                    id = "4ba7b3f7-bd63-43e8-8b61-304356ca70d8";
                                }}),
                                add(new UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsMethods() {{
                                    authenticationTypes = new java.util.HashMap<String, Object>() {{
                                        put("labore", "doloribus");
                                        put("veniam", "facere");
                                        put("eum", "accusantium");
                                        put("esse", "numquam");
                                    }};
                                    id = "6411237b-62fb-4c39-b8d0-6ad968ecac33";
                                }}),
                                add(new UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsMethods() {{
                                    authenticationTypes = new java.util.HashMap<String, Object>() {{
                                        put("qui", "ut");
                                    }};
                                    id = "ac5b7a0f-6cfe-4b9d-ba69-7f371ce361d2";
                                }}),
                            }};
                            realm = "saepe";
                        }}),
                    }};
                    networkAccessType = UpdateNetworkWirelessSsidHotspot20RequestBodyNetworkAccessTypeEnum.FREE_PUBLIC_NETWORK;
                    operator = new UpdateNetworkWirelessSsidHotspot20RequestBodyOperator() {{
                        name = "Erik Donnelly";
                    }};;
                    roamConsortOis = new String[]{{
                        add("corporis"),
                        add("officia"),
                        add("officia"),
                    }};
                    venue = new UpdateNetworkWirelessSsidHotspot20RequestBodyVenue() {{
                        name = "Tamara Ortiz";
                        type = UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnum.ATTORNEY_OFFICE;
                    }};;
                }};;
            }};            

            UpdateNetworkWirelessSsidHotspot20Response res = sdk.hotspot20.updateNetworkWirelessSsidHotspot20(req);

            if (res.updateNetworkWirelessSsidHotspot20200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
