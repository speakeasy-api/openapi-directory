# SDK

## Overview

Publish API

### Available Operations

* [patchAttraction](#patchattraction) - Publish a patch on an attraction
* [patchEvent](#patchevent) - Publish a patch on an event
* [patchVenue](#patchvenue) - Publish a patch on a venue
* [publishAttraction](#publishattraction) - Publish an attractions
* [publishAttractionVideos](#publishattractionvideos) - Publish a video on an attraction
* [publishEntitlements](#publishentitlements) - Publish entitlements on an entity
* [publishEvent](#publishevent) - Publish an event
* [publishEventVideos](#publisheventvideos) - Publish a video on an event
* [publishExtension](#publishextension) - Publish extension on an entity
* [publishVenue](#publishvenue) - Publish a venue

## patchAttraction

Since 1.0.0

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatchAttractionRequest;
import org.openapis.openapi.models.operations.PatchAttractionResponse;
import org.openapis.openapi.models.shared.AugmentationData;
import org.openapis.openapi.models.shared.AugmentationDataRelatedEntityTypeEnum;
import org.openapis.openapi.models.shared.Change;
import org.openapis.openapi.models.shared.ChangeOpEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatchAttractionRequest req = new PatchAttractionRequest(                new AugmentationData(                new org.openapis.openapi.models.shared.Change[]{{
                                                add(new Change(ChangeOpEnum.COPY, "totam") {{
                                                    from = "quod";
                                                    op = ChangeOpEnum.REPLACE;
                                                    path = "totam";
                                                    value = new java.util.HashMap<String, Object>() {{
                                                        put("dolorum", "dicta");
                                                        put("nam", "officia");
                                                        put("occaecati", "fugit");
                                                        put("deleniti", "hic");
                                                    }};
                                                }}),
                                                add(new Change(ChangeOpEnum.REMOVE, "excepturi") {{
                                                    from = "beatae";
                                                    op = ChangeOpEnum.REPLACE;
                                                    path = "molestiae";
                                                    value = new java.util.HashMap<String, Object>() {{
                                                        put("qui", "impedit");
                                                        put("cum", "esse");
                                                    }};
                                                }}),
                                                add(new Change(ChangeOpEnum.TEST, "fuga") {{
                                                    from = "aspernatur";
                                                    op = ChangeOpEnum.ADD;
                                                    path = "ad";
                                                    value = new java.util.HashMap<String, Object>() {{
                                                        put("sed", "iste");
                                                        put("dolor", "natus");
                                                        put("laboriosam", "hic");
                                                    }};
                                                }}),
                                                add(new Change(ChangeOpEnum.TEST, "est") {{
                                                    from = "in";
                                                    op = ChangeOpEnum.REPLACE;
                                                    path = "iste";
                                                    value = new java.util.HashMap<String, Object>() {{
                                                        put("saepe", "quidem");
                                                        put("architecto", "ipsa");
                                                    }};
                                                }}),
                                            }}, "mollitia", AugmentationDataRelatedEntityTypeEnum.VENUE, "dolores", 210382L) {{
                                score = 3581.52;
                            }};, "explicabo", "nobis");            

            PatchAttractionResponse res = sdk.sdk.patchAttraction(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patchEvent

Since 1.0.0

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatchEventRequest;
import org.openapis.openapi.models.operations.PatchEventResponse;
import org.openapis.openapi.models.shared.AugmentationData;
import org.openapis.openapi.models.shared.AugmentationDataRelatedEntityTypeEnum;
import org.openapis.openapi.models.shared.Change;
import org.openapis.openapi.models.shared.ChangeOpEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatchEventRequest req = new PatchEventRequest(                new AugmentationData(                new org.openapis.openapi.models.shared.Change[]{{
                                                add(new Change(ChangeOpEnum.MOVE, "dolorem") {{
                                                    from = "omnis";
                                                    op = ChangeOpEnum.REPLACE;
                                                    path = "minima";
                                                    value = new java.util.HashMap<String, Object>() {{
                                                        put("accusantium", "iure");
                                                        put("culpa", "doloribus");
                                                        put("sapiente", "architecto");
                                                    }};
                                                }}),
                                                add(new Change(ChangeOpEnum.MOVE, "quia") {{
                                                    from = "culpa";
                                                    op = ChangeOpEnum.ADD;
                                                    path = "repellat";
                                                    value = new java.util.HashMap<String, Object>() {{
                                                        put("occaecati", "numquam");
                                                        put("commodi", "quam");
                                                        put("molestiae", "velit");
                                                    }};
                                                }}),
                                            }}, "quis", AugmentationDataRelatedEntityTypeEnum.EVENT, "laborum", 656330L) {{
                                score = 3172.02;
                            }};, "odit", "quo");            

            PatchEventResponse res = sdk.sdk.patchEvent(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patchVenue

Since 1.0.0

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatchVenueRequest;
import org.openapis.openapi.models.operations.PatchVenueResponse;
import org.openapis.openapi.models.shared.AugmentationData;
import org.openapis.openapi.models.shared.AugmentationDataRelatedEntityTypeEnum;
import org.openapis.openapi.models.shared.Change;
import org.openapis.openapi.models.shared.ChangeOpEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatchVenueRequest req = new PatchVenueRequest(                new AugmentationData(                new org.openapis.openapi.models.shared.Change[]{{
                                                add(new Change(ChangeOpEnum.TEST, "nihil") {{
                                                    from = "tenetur";
                                                    op = ChangeOpEnum.REPLACE;
                                                    path = "id";
                                                    value = new java.util.HashMap<String, Object>() {{
                                                        put("aut", "quasi");
                                                        put("error", "temporibus");
                                                        put("laborum", "quasi");
                                                        put("reiciendis", "voluptatibus");
                                                    }};
                                                }}),
                                            }}, "praesentium", AugmentationDataRelatedEntityTypeEnum.VENUE, "ipsa", 604846L) {{
                                score = 4511.59;
                            }};, "cum", "perferendis");            

            PatchVenueResponse res = sdk.sdk.patchVenue(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## publishAttraction

Since 1.0.0

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PublishAttractionRequest;
import org.openapis.openapi.models.operations.PublishAttractionResponse;
import org.openapis.openapi.models.shared.Attraction;
import org.openapis.openapi.models.shared.AttractionTypeEnum;
import org.openapis.openapi.models.shared.Classification;
import org.openapis.openapi.models.shared.Image;
import org.openapis.openapi.models.shared.ImageRatioEnum;
import org.openapis.openapi.models.shared.Level;
import org.openapis.openapi.models.shared.Segment;
import org.openapis.openapi.models.shared.Source;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PublishAttractionRequest req = new PublishAttractionRequest(                new Attraction(AttractionTypeEnum.EVENT) {{
                                active = false;
                                additionalInfos = new java.util.HashMap<String, String>() {{
                                    put("ut", "maiores");
                                    put("dicta", "corporis");
                                }};
                                classifications = new org.openapis.openapi.models.shared.Classification[]{{
                                    add(new Classification() {{
                                        genre = new Level() {{
                                            id = "71b5e6e1-3b99-4d48-8e1e-91e450ad2abd";
                                            names = new java.util.HashMap<String, String>() {{
                                                put("modi", "qui");
                                                put("aliquid", "cupiditate");
                                            }};
                                        }};
                                        primary = false;
                                        segment = new Segment() {{
                                            id = "802d502a-94bb-44f6-bc96-9e9a3efa77df";
                                            names = new java.util.HashMap<String, String>() {{
                                                put("dicta", "magnam");
                                                put("cumque", "facere");
                                                put("ea", "aliquid");
                                            }};
                                        }};
                                        subGenre = new Level() {{
                                            id = "ae395efb-9ba8-48f3-a669-97074ba4469b";
                                            names = new java.util.HashMap<String, String>() {{
                                                put("vero", "aspernatur");
                                                put("architecto", "magnam");
                                            }};
                                        }};
                                        subType = new Level() {{
                                            id = "1959890a-fa56-43e2-916f-e4c8b711e5b7";
                                            names = new java.util.HashMap<String, String>() {{
                                                put("quibusdam", "sed");
                                                put("saepe", "pariatur");
                                                put("accusantium", "consequuntur");
                                                put("praesentium", "natus");
                                            }};
                                        }};
                                        type = new Level() {{
                                            id = "21cddc69-2601-4fb5-b6b0-d5f0d30c5fbb";
                                            names = new java.util.HashMap<String, String>() {{
                                                put("quis", "totam");
                                            }};
                                        }};
                                    }}),
                                    add(new Classification() {{
                                        genre = new Level() {{
                                            id = "7053202c-73d5-4fe9-b90c-28909b3fe49a";
                                            names = new java.util.HashMap<String, String>() {{
                                                put("pariatur", "provident");
                                                put("nobis", "libero");
                                                put("delectus", "quaerat");
                                            }};
                                        }};
                                        primary = false;
                                        segment = new Segment() {{
                                            id = "8633323f-9b77-4f3a-8100-674ebf69280d";
                                            names = new java.util.HashMap<String, String>() {{
                                                put("soluta", "dolorum");
                                            }};
                                        }};
                                        subGenre = new Level() {{
                                            id = "77a89ebf-737a-4e42-83ce-5e6a95d8a0d4";
                                            names = new java.util.HashMap<String, String>() {{
                                                put("vel", "quod");
                                                put("officiis", "qui");
                                            }};
                                        }};
                                        subType = new Level() {{
                                            id = "af7a73cf-3be4-453f-870b-326b5a73429c";
                                            names = new java.util.HashMap<String, String>() {{
                                                put("soluta", "dicta");
                                                put("laborum", "totam");
                                                put("incidunt", "aspernatur");
                                                put("dolores", "distinctio");
                                            }};
                                        }};
                                        type = new Level() {{
                                            id = "b679d232-2715-4bf0-8bb1-e31b8b90f344";
                                            names = new java.util.HashMap<String, String>() {{
                                                put("dolorum", "architecto");
                                            }};
                                        }};
                                    }}),
                                }};
                                descriptions = new java.util.HashMap<String, String>() {{
                                    put("aut", "quas");
                                }};
                                discoverable = false;
                                images = new org.openapis.openapi.models.shared.Image[]{{
                                    add(new Image() {{
                                        attribution = "consequatur";
                                        domains = new String[]{{
                                            add("repellendus"),
                                            add("porro"),
                                            add("doloribus"),
                                        }};
                                        fallback = false;
                                        height = 281730;
                                        ratio = ImageRatioEnum.ZERO;
                                        url = "facilis";
                                        width = 586410;
                                    }}),
                                    add(new Image() {{
                                        attribution = "qui";
                                        domains = new String[]{{
                                            add("laudantium"),
                                        }};
                                        fallback = false;
                                        height = 485628;
                                        ratio = ImageRatioEnum.ZERO;
                                        url = "occaecati";
                                        width = 977496;
                                    }}),
                                    add(new Image() {{
                                        attribution = "quisquam";
                                        domains = new String[]{{
                                            add("omnis"),
                                            add("quis"),
                                            add("ipsum"),
                                            add("delectus"),
                                        }};
                                        fallback = false;
                                        height = 455169;
                                        ratio = ImageRatioEnum.ZERO;
                                        url = "consectetur";
                                        width = 878870;
                                    }}),
                                    add(new Image() {{
                                        attribution = "tenetur";
                                        domains = new String[]{{
                                            add("hic"),
                                            add("distinctio"),
                                        }};
                                        fallback = false;
                                        height = 799203;
                                        ratio = ImageRatioEnum.ZERO;
                                        url = "odio";
                                        width = 630448;
                                    }}),
                                }};
                                names = new java.util.HashMap<String, String>() {{
                                    put("vero", "ducimus");
                                    put("dolore", "quibusdam");
                                    put("illum", "sequi");
                                }};
                                references = new java.util.HashMap<String, String>() {{
                                    put("impedit", "aut");
                                    put("voluptatibus", "exercitationem");
                                    put("nulla", "fugit");
                                }};
                                relationships = new java.util.HashMap<String, Object>[]{{
                                    add(new java.util.HashMap<String, Object>() {{
                                        put("doloribus", "iusto");
                                        put("eligendi", "ducimus");
                                        put("alias", "officia");
                                        put("tempora", "ipsam");
                                    }}),
                                    add(new java.util.HashMap<String, Object>() {{
                                        put("aspernatur", "vel");
                                        put("possimus", "magnam");
                                    }}),
                                    add(new java.util.HashMap<String, Object>() {{
                                        put("ex", "laudantium");
                                    }}),
                                    add(new java.util.HashMap<String, Object>() {{
                                        put("dolor", "maiores");
                                    }}),
                                }};
                                source = new Source() {{
                                    id = "16d9f5fc-e6c5-4561-86c3-e250fb008c42";
                                    name = "Miss Dennis Friesen";
                                }};;
                                test = false;
                                url = "placeat";
                                version = 245367L;
                            }};, "eum");            

            PublishAttractionResponse res = sdk.sdk.publishAttraction(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## publishAttractionVideos

Since 1.0.0

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PublishAttractionVideosRequest;
import org.openapis.openapi.models.operations.PublishAttractionVideosResponse;
import org.openapis.openapi.models.shared.LicensingInformation;
import org.openapis.openapi.models.shared.RegionRestrictions;
import org.openapis.openapi.models.shared.Source;
import org.openapis.openapi.models.shared.Video;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PublishAttractionVideosRequest req = new PublishAttractionVideosRequest("autem",                 new Video(                new LicensingInformation("nobis") {{
                                                regionRestriction = new RegionRestrictions() {{
                                                    allowed = new String[]{{
                                                        add("assumenda"),
                                                        add("nulla"),
                                                        add("voluptas"),
                                                    }};
                                                }};;
                                            }};,                 new Source() {{
                                                id = "b1442907-4747-478a-bbd4-66d28c10ab3c";
                                                name = "Salvatore Parker";
                                            }};, "voluptas") {{
                                embedUrl = "ab";
                            }};, "cupiditate");            

            PublishAttractionVideosResponse res = sdk.sdk.publishAttractionVideos(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## publishEntitlements

Since 2.0.0

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PublishEntitlementsRequest;
import org.openapis.openapi.models.operations.PublishEntitlementsResponse;
import org.openapis.openapi.models.shared.Entitlement;
import org.openapis.openapi.models.shared.EntitlementRelatedEntityTypeEnum;
import org.openapis.openapi.models.shared.EntitlementSourceEnum;
import org.openapis.openapi.models.shared.Source;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PublishEntitlementsRequest req = new PublishEntitlementsRequest(                new Entitlement(                new java.util.HashMap<String, Object>() {{
                                                put("tempora", "debitis");
                                            }}, EntitlementRelatedEntityTypeEnum.VENUE, EntitlementSourceEnum.TICKETMASTER) {{
                                relatedEntityId = "aspernatur";
                                relatedEntitySource = new Source() {{
                                    id = "3c7e0bc7-178e-4479-af2a-70c688282aa4";
                                    name = "Roy Hansen";
                                }};;
                                versionNumber = 956406L;
                            }};, "consequuntur");            

            PublishEntitlementsResponse res = sdk.sdk.publishEntitlements(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## publishEvent

Since 1.0.0

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PublishEventRequest;
import org.openapis.openapi.models.operations.PublishEventResponse;
import org.openapis.openapi.models.shared.AccessDates;
import org.openapis.openapi.models.shared.Address;
import org.openapis.openapi.models.shared.Area;
import org.openapis.openapi.models.shared.Attraction;
import org.openapis.openapi.models.shared.AttractionTypeEnum;
import org.openapis.openapi.models.shared.Chronology;
import org.openapis.openapi.models.shared.City;
import org.openapis.openapi.models.shared.Classification;
import org.openapis.openapi.models.shared.Country;
import org.openapis.openapi.models.shared.DateTimeField;
import org.openapis.openapi.models.shared.DateTimeFieldType;
import org.openapis.openapi.models.shared.DateTimeZone;
import org.openapis.openapi.models.shared.Dma;
import org.openapis.openapi.models.shared.DurationField;
import org.openapis.openapi.models.shared.DurationFieldType;
import org.openapis.openapi.models.shared.EndDates;
import org.openapis.openapi.models.shared.Event;
import org.openapis.openapi.models.shared.EventDates;
import org.openapis.openapi.models.shared.EventSalesDates;
import org.openapis.openapi.models.shared.EventStatus;
import org.openapis.openapi.models.shared.EventStatusCodeEnum;
import org.openapis.openapi.models.shared.EventTypeEnum;
import org.openapis.openapi.models.shared.Image;
import org.openapis.openapi.models.shared.ImageRatioEnum;
import org.openapis.openapi.models.shared.Level;
import org.openapis.openapi.models.shared.LocalTime;
import org.openapis.openapi.models.shared.Location;
import org.openapis.openapi.models.shared.Market;
import org.openapis.openapi.models.shared.Place;
import org.openapis.openapi.models.shared.Presale;
import org.openapis.openapi.models.shared.PriceRange;
import org.openapis.openapi.models.shared.PriceRangeTypeEnum;
import org.openapis.openapi.models.shared.Promoter;
import org.openapis.openapi.models.shared.PublicSaleDates;
import org.openapis.openapi.models.shared.PublicVisibility;
import org.openapis.openapi.models.shared.Segment;
import org.openapis.openapi.models.shared.Social;
import org.openapis.openapi.models.shared.Source;
import org.openapis.openapi.models.shared.StartDates;
import org.openapis.openapi.models.shared.State;
import org.openapis.openapi.models.shared.Twitter;
import org.openapis.openapi.models.shared.TwitterHandleEnum;
import org.openapis.openapi.models.shared.Venue;
import org.openapis.openapi.models.shared.VenueBoxOfficeInfo;
import org.openapis.openapi.models.shared.VenueGeneralInfo;
import org.openapis.openapi.models.shared.VenueTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PublishEventRequest req = new PublishEventRequest(                new Event(EventTypeEnum.EVENT) {{
                                active = false;
                                additionalInfos = new java.util.HashMap<String, String>() {{
                                    put("saepe", "occaecati");
                                }};
                                attractions = new org.openapis.openapi.models.shared.Attraction[]{{
                                    add(new Attraction(AttractionTypeEnum.ATTRACTION) {{
                                        active = false;
                                        additionalInfos = new java.util.HashMap<String, String>() {{
                                            put("esse", "eveniet");
                                        }};
                                        classifications = new org.openapis.openapi.models.shared.Classification[]{{
                                            add(new Classification() {{
                                                genre = new Level() {{
                                                    id = "17cbe61e-6b7b-495b-80ab-3c20c4f3789f";
                                                    names = new java.util.HashMap<String, String>() {{
                                                        put("quas", "esse");
                                                        put("quasi", "a");
                                                        put("error", "sint");
                                                        put("pariatur", "possimus");
                                                    }};
                                                }};
                                                primary = false;
                                                segment = new Segment() {{
                                                    id = "2efd121a-a6f1-4e67-8bdb-04f15756082d";
                                                    names = new java.util.HashMap<String, String>() {{
                                                        put("deleniti", "itaque");
                                                        put("dolorum", "architecto");
                                                    }};
                                                }};
                                                subGenre = new Level() {{
                                                    id = "9f1d1705-1339-4d08-886a-1840394c2607";
                                                    names = new java.util.HashMap<String, String>() {{
                                                        put("maiores", "natus");
                                                    }};
                                                }};
                                                subType = new Level() {{
                                                    id = "3f5f0642-dac7-4af5-95cc-413aa63aae8d";
                                                    names = new java.util.HashMap<String, String>() {{
                                                        put("ducimus", "quos");
                                                        put("vel", "labore");
                                                    }};
                                                }};
                                                type = new Level() {{
                                                    id = "dbb675fd-5e60-4b37-9ed4-f6fbee41f333";
                                                    names = new java.util.HashMap<String, String>() {{
                                                        put("dignissimos", "a");
                                                    }};
                                                }};
                                            }}),
                                            add(new Classification() {{
                                                genre = new Level() {{
                                                    id = "e35b60eb-1ea4-4265-95ba-3c28744ed53b";
                                                    names = new java.util.HashMap<String, String>() {{
                                                        put("quas", "hic");
                                                        put("nesciunt", "culpa");
                                                        put("corrupti", "pariatur");
                                                    }};
                                                }};
                                                primary = false;
                                                segment = new Segment() {{
                                                    id = "8f5c0b2f-2fb7-4b19-8a27-6b26916fe1f0";
                                                    names = new java.util.HashMap<String, String>() {{
                                                        put("maiores", "incidunt");
                                                        put("sed", "provident");
                                                        put("eius", "necessitatibus");
                                                    }};
                                                }};
                                                subGenre = new Level() {{
                                                    id = "3698f447-f603-4e8b-845e-80ca55efd20e";
                                                    names = new java.util.HashMap<String, String>() {{
                                                        put("veniam", "in");
                                                        put("officiis", "beatae");
                                                    }};
                                                }};
                                                subType = new Level() {{
                                                    id = "858b6a89-fbe3-4a5a-a8e4-824d0ab40750";
                                                    names = new java.util.HashMap<String, String>() {{
                                                        put("quas", "repudiandae");
                                                        put("corporis", "et");
                                                        put("blanditiis", "ex");
                                                    }};
                                                }};
                                                type = new Level() {{
                                                    id = "2065e904-f3b1-4194-b8ab-f603a79f9dfe";
                                                    names = new java.util.HashMap<String, String>() {{
                                                        put("est", "quidem");
                                                    }};
                                                }};
                                            }}),
                                            add(new Classification() {{
                                                genre = new Level() {{
                                                    id = "7da8a50c-e187-4f86-bc17-3d689eee9526";
                                                    names = new java.util.HashMap<String, String>() {{
                                                        put("corrupti", "at");
                                                        put("error", "blanditiis");
                                                        put("suscipit", "repudiandae");
                                                        put("atque", "atque");
                                                    }};
                                                }};
                                                primary = false;
                                                segment = new Segment() {{
                                                    id = "1ead4f0e-1012-4563-b94e-29e973e922a5";
                                                    names = new java.util.HashMap<String, String>() {{
                                                        put("error", "illo");
                                                        put("corporis", "quidem");
                                                    }};
                                                }};
                                                subGenre = new Level() {{
                                                    id = "e3e06080-7e2b-46e3-ab88-45f0597a60ff";
                                                    names = new java.util.HashMap<String, String>() {{
                                                        put("id", "minima");
                                                    }};
                                                }};
                                                subType = new Level() {{
                                                    id = "4a31e947-64a3-4e86-9e79-56f9251a5a9d";
                                                    names = new java.util.HashMap<String, String>() {{
                                                        put("ex", "aliquid");
                                                        put("accusantium", "repellat");
                                                        put("doloribus", "ullam");
                                                    }};
                                                }};
                                                type = new Level() {{
                                                    id = "7bfaad4f-9efc-41b4-912c-1032648dc2f6";
                                                    names = new java.util.HashMap<String, String>() {{
                                                        put("minima", "beatae");
                                                    }};
                                                }};
                                            }}),
                                            add(new Classification() {{
                                                genre = new Level() {{
                                                    id = "99ebfd0e-9fe6-4c63-aca3-aed011799631";
                                                    names = new java.util.HashMap<String, String>() {{
                                                        put("doloribus", "nulla");
                                                    }};
                                                }};
                                                primary = false;
                                                segment = new Segment() {{
                                                    id = "e0477177-8ff6-41d0-9747-6360a15db6a6";
                                                    names = new java.util.HashMap<String, String>() {{
                                                        put("perferendis", "eum");
                                                        put("voluptas", "iste");
                                                    }};
                                                }};
                                                subGenre = new Level() {{
                                                    id = "a1adeaab-5851-4d6c-a45b-08b61891baa0";
                                                    names = new java.util.HashMap<String, String>() {{
                                                        put("officiis", "architecto");
                                                        put("fuga", "pariatur");
                                                        put("debitis", "voluptatem");
                                                        put("alias", "deleniti");
                                                    }};
                                                }};
                                                subType = new Level() {{
                                                    id = "e6f8c5f3-50d8-4cdb-9a34-181430104218";
                                                    names = new java.util.HashMap<String, String>() {{
                                                        put("dolor", "fugiat");
                                                    }};
                                                }};
                                                type = new Level() {{
                                                    id = "5208ece7-e253-4b66-8451-c6c6e205e16d";
                                                    names = new java.util.HashMap<String, String>() {{
                                                        put("est", "harum");
                                                        put("sequi", "doloribus");
                                                        put("repudiandae", "optio");
                                                        put("occaecati", "nemo");
                                                    }};
                                                }};
                                            }}),
                                        }};
                                        descriptions = new java.util.HashMap<String, String>() {{
                                            put("blanditiis", "officia");
                                            put("voluptas", "numquam");
                                        }};
                                        discoverable = false;
                                        images = new org.openapis.openapi.models.shared.Image[]{{
                                            add(new Image() {{
                                                attribution = "quos";
                                                domains = new String[]{{
                                                    add("aspernatur"),
                                                    add("ducimus"),
                                                }};
                                                fallback = false;
                                                height = 200516;
                                                ratio = ImageRatioEnum.ZERO;
                                                url = "fuga";
                                                width = 514054;
                                            }}),
                                            add(new Image() {{
                                                attribution = "incidunt";
                                                domains = new String[]{{
                                                    add("rem"),
                                                }};
                                                fallback = false;
                                                height = 851854;
                                                ratio = ImageRatioEnum.ZERO;
                                                url = "dicta";
                                                width = 395544;
                                            }}),
                                        }};
                                        names = new java.util.HashMap<String, String>() {{
                                            put("consectetur", "aperiam");
                                        }};
                                        references = new java.util.HashMap<String, String>() {{
                                            put("reiciendis", "soluta");
                                            put("alias", "omnis");
                                            put("eos", "occaecati");
                                        }};
                                        relationships = new java.util.HashMap<String, Object>[]{{
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("inventore", "fuga");
                                            }}),
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("voluptatibus", "distinctio");
                                                put("omnis", "delectus");
                                                put("minima", "praesentium");
                                                put("maxime", "magnam");
                                            }}),
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("quos", "commodi");
                                                put("itaque", "commodi");
                                                put("totam", "earum");
                                                put("modi", "nam");
                                            }}),
                                        }};
                                        source = new Source() {{
                                            id = "e056013f-59da-4757-a59e-cfef66ef1caa";
                                            name = "Shannon Lind";
                                        }};
                                        test = false;
                                        type = AttractionTypeEnum.EVENT;
                                        url = "soluta";
                                        version = 922757L;
                                    }}),
                                    add(new Attraction(AttractionTypeEnum.VENUE) {{
                                        active = false;
                                        additionalInfos = new java.util.HashMap<String, String>() {{
                                            put("iusto", "voluptate");
                                            put("sequi", "dignissimos");
                                        }};
                                        classifications = new org.openapis.openapi.models.shared.Classification[]{{
                                            add(new Classification() {{
                                                genre = new Level() {{
                                                    id = "c8d72f64-d1db-41f2-8431-0661e96349e1";
                                                    names = new java.util.HashMap<String, String>() {{
                                                        put("voluptatibus", "iste");
                                                        put("itaque", "alias");
                                                        put("nisi", "itaque");
                                                        put("velit", "laborum");
                                                    }};
                                                }};
                                                primary = false;
                                                segment = new Segment() {{
                                                    id = "437000ae-6b6b-4c9b-8f75-9eac55a9741d";
                                                    names = new java.util.HashMap<String, String>() {{
                                                        put("vitae", "inventore");
                                                    }};
                                                }};
                                                subGenre = new Level() {{
                                                    id = "352965bb-8a72-4026-9143-5e139dbc2259";
                                                    names = new java.util.HashMap<String, String>() {{
                                                        put("dicta", "id");
                                                        put("libero", "fugiat");
                                                        put("officia", "quos");
                                                    }};
                                                }};
                                                subType = new Level() {{
                                                    id = "c070e108-4cb0-4672-91ad-879eeb9665b8";
                                                    names = new java.util.HashMap<String, String>() {{
                                                        put("officiis", "voluptatibus");
                                                        put("cum", "at");
                                                    }};
                                                }};
                                                type = new Level() {{
                                                    id = "02bae0be-2d78-4225-9e3e-a4b5197f9244";
                                                    names = new java.util.HashMap<String, String>() {{
                                                        put("at", "officia");
                                                    }};
                                                }};
                                            }}),
                                        }};
                                        descriptions = new java.util.HashMap<String, String>() {{
                                            put("optio", "necessitatibus");
                                            put("corporis", "qui");
                                        }};
                                        discoverable = false;
                                        images = new org.openapis.openapi.models.shared.Image[]{{
                                            add(new Image() {{
                                                attribution = "voluptatum";
                                                domains = new String[]{{
                                                    add("minima"),
                                                    add("placeat"),
                                                    add("enim"),
                                                }};
                                                fallback = false;
                                                height = 204072;
                                                ratio = ImageRatioEnum.ZERO;
                                                url = "in";
                                                width = 796397;
                                            }}),
                                            add(new Image() {{
                                                attribution = "eum";
                                                domains = new String[]{{
                                                    add("corporis"),
                                                    add("magnam"),
                                                }};
                                                fallback = false;
                                                height = 914971;
                                                ratio = ImageRatioEnum.ZERO;
                                                url = "maiores";
                                                width = 731744;
                                            }}),
                                            add(new Image() {{
                                                attribution = "aperiam";
                                                domains = new String[]{{
                                                    add("ratione"),
                                                    add("labore"),
                                                    add("totam"),
                                                }};
                                                fallback = false;
                                                height = 577709;
                                                ratio = ImageRatioEnum.ZERO;
                                                url = "voluptas";
                                                width = 779180;
                                            }}),
                                        }};
                                        names = new java.util.HashMap<String, String>() {{
                                            put("minus", "fuga");
                                        }};
                                        references = new java.util.HashMap<String, String>() {{
                                            put("est", "impedit");
                                            put("delectus", "tempore");
                                        }};
                                        relationships = new java.util.HashMap<String, Object>[]{{
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("repellat", "pariatur");
                                            }}),
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("reprehenderit", "aperiam");
                                                put("odio", "minima");
                                            }}),
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("ducimus", "excepturi");
                                                put("dolores", "error");
                                            }}),
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("ducimus", "voluptate");
                                            }}),
                                        }};
                                        source = new Source() {{
                                            id = "deac646e-cb57-4340-9e3e-b1e5a2b12eb0";
                                            name = "Mrs. Elisa Bogisich";
                                        }};
                                        test = false;
                                        type = AttractionTypeEnum.ATTRACTION;
                                        url = "excepturi";
                                        version = 578210L;
                                    }}),
                                    add(new Attraction(AttractionTypeEnum.EVENT) {{
                                        active = false;
                                        additionalInfos = new java.util.HashMap<String, String>() {{
                                            put("nostrum", "doloribus");
                                            put("eligendi", "sint");
                                        }};
                                        classifications = new org.openapis.openapi.models.shared.Classification[]{{
                                            add(new Classification() {{
                                                genre = new Level() {{
                                                    id = "fa88970e-189d-4bb3-8fcb-33ea055b197c";
                                                    names = new java.util.HashMap<String, String>() {{
                                                        put("non", "magnam");
                                                        put("itaque", "sed");
                                                        put("asperiores", "veniam");
                                                        put("consequuntur", "facere");
                                                    }};
                                                }};
                                                primary = false;
                                                segment = new Segment() {{
                                                    id = "82d3513b-b6f4-48b6-96bc-db35ff2e4b27";
                                                    names = new java.util.HashMap<String, String>() {{
                                                        put("neque", "iusto");
                                                        put("est", "rem");
                                                    }};
                                                }};
                                                subGenre = new Level() {{
                                                    id = "cd9e7319-c177-4d52-9f77-b114eeb52ff7";
                                                    names = new java.util.HashMap<String, String>() {{
                                                        put("nemo", "repellat");
                                                        put("quisquam", "sequi");
                                                        put("nihil", "deleniti");
                                                    }};
                                                }};
                                                subType = new Level() {{
                                                    id = "14d4c98e-0c2b-4b89-ab75-dad636c60050";
                                                    names = new java.util.HashMap<String, String>() {{
                                                        put("illum", "praesentium");
                                                    }};
                                                }};
                                                type = new Level() {{
                                                    id = "bb31180f-739a-4e9e-857e-b809e2810331";
                                                    names = new java.util.HashMap<String, String>() {{
                                                        put("dolor", "occaecati");
                                                        put("atque", "beatae");
                                                        put("at", "labore");
                                                        put("minus", "esse");
                                                    }};
                                                }};
                                            }}),
                                            add(new Classification() {{
                                                genre = new Level() {{
                                                    id = "00b607f3-c93c-473b-9da3-f2ceda7e23f2";
                                                    names = new java.util.HashMap<String, String>() {{
                                                        put("exercitationem", "nihil");
                                                    }};
                                                }};
                                                primary = false;
                                                segment = new Segment() {{
                                                    id = "411faf4b-7544-4e47-ae80-2857a5b40463";
                                                    names = new java.util.HashMap<String, String>() {{
                                                        put("dignissimos", "fugiat");
                                                        put("nostrum", "molestiae");
                                                        put("veniam", "reiciendis");
                                                    }};
                                                }};
                                                subGenre = new Level() {{
                                                    id = "1400e764-ad73-434e-81b7-81b36a08088d";
                                                    names = new java.util.HashMap<String, String>() {{
                                                        put("quae", "eaque");
                                                    }};
                                                }};
                                                subType = new Level() {{
                                                    id = "efada200-ef04-422e-b216-4cf9ab8366c7";
                                                    names = new java.util.HashMap<String, String>() {{
                                                        put("velit", "reiciendis");
                                                    }};
                                                }};
                                                type = new Level() {{
                                                    id = "fda9e06b-ee48-425c-9fc0-e115c80bff91";
                                                    names = new java.util.HashMap<String, String>() {{
                                                        put("ullam", "dolore");
                                                        put("modi", "itaque");
                                                        put("maxime", "modi");
                                                    }};
                                                }};
                                            }}),
                                        }};
                                        descriptions = new java.util.HashMap<String, String>() {{
                                            put("assumenda", "vero");
                                        }};
                                        discoverable = false;
                                        images = new org.openapis.openapi.models.shared.Image[]{{
                                            add(new Image() {{
                                                attribution = "impedit";
                                                domains = new String[]{{
                                                    add("accusamus"),
                                                    add("totam"),
                                                    add("reiciendis"),
                                                    add("ab"),
                                                }};
                                                fallback = false;
                                                height = 573444;
                                                ratio = ImageRatioEnum.ZERO;
                                                url = "nihil";
                                                width = 458412;
                                            }}),
                                            add(new Image() {{
                                                attribution = "iure";
                                                domains = new String[]{{
                                                    add("nesciunt"),
                                                    add("debitis"),
                                                }};
                                                fallback = false;
                                                height = 423588;
                                                ratio = ImageRatioEnum.ZERO;
                                                url = "neque";
                                                width = 357758;
                                            }}),
                                            add(new Image() {{
                                                attribution = "voluptas";
                                                domains = new String[]{{
                                                    add("officia"),
                                                }};
                                                fallback = false;
                                                height = 441374;
                                                ratio = ImageRatioEnum.ZERO;
                                                url = "distinctio";
                                                width = 262800;
                                            }}),
                                            add(new Image() {{
                                                attribution = "ipsa";
                                                domains = new String[]{{
                                                    add("maiores"),
                                                    add("accusantium"),
                                                    add("veniam"),
                                                }};
                                                fallback = false;
                                                height = 906232;
                                                ratio = ImageRatioEnum.ZERO;
                                                url = "neque";
                                                width = 816365;
                                            }}),
                                        }};
                                        names = new java.util.HashMap<String, String>() {{
                                            put("quos", "doloribus");
                                            put("fugiat", "est");
                                        }};
                                        references = new java.util.HashMap<String, String>() {{
                                            put("velit", "vitae");
                                            put("nesciunt", "similique");
                                            put("illo", "repellat");
                                            put("nemo", "doloribus");
                                        }};
                                        relationships = new java.util.HashMap<String, Object>[]{{
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("incidunt", "explicabo");
                                                put("ipsam", "cupiditate");
                                                put("optio", "alias");
                                            }}),
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("nesciunt", "commodi");
                                                put("sapiente", "consequuntur");
                                                put("veniam", "debitis");
                                            }}),
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("sint", "ut");
                                                put("numquam", "tenetur");
                                                put("adipisci", "libero");
                                            }}),
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("minima", "ex");
                                                put("minus", "ab");
                                            }}),
                                        }};
                                        source = new Source() {{
                                            id = "1f6c37a5-1262-4438-b5bb-c05a23a45cef";
                                            name = "Bill Yundt";
                                        }};
                                        test = false;
                                        type = AttractionTypeEnum.EVENT;
                                        url = "alias";
                                        version = 633982L;
                                    }}),
                                }};
                                classifications = new org.openapis.openapi.models.shared.Classification[]{{
                                    add(new Classification() {{
                                        genre = new Level() {{
                                            id = "e2169e51-0019-4c6d-85e3-4762799bfbbe";
                                            names = new java.util.HashMap<String, String>() {{
                                                put("unde", "modi");
                                                put("perspiciatis", "hic");
                                            }};
                                        }};
                                        primary = false;
                                        segment = new Segment() {{
                                            id = "b2bb4eca-e6c3-4d5d-b3ad-ebd5daea4c50";
                                            names = new java.util.HashMap<String, String>() {{
                                                put("deserunt", "molestias");
                                                put("laborum", "est");
                                            }};
                                        }};
                                        subGenre = new Level() {{
                                            id = "94c02644-cf5e-49d9-a457-8adc1ac600de";
                                            names = new java.util.HashMap<String, String>() {{
                                                put("consequatur", "eaque");
                                                put("architecto", "similique");
                                                put("porro", "blanditiis");
                                                put("quae", "magni");
                                            }};
                                        }};
                                        subType = new Level() {{
                                            id = "e2ec09ff-8f0f-4816-bf34-77c13e902c14";
                                            names = new java.util.HashMap<String, String>() {{
                                                put("odit", "corporis");
                                            }};
                                        }};
                                        type = new Level() {{
                                            id = "b0960a66-8151-4a47-aaf9-23c5949f83f3";
                                            names = new java.util.HashMap<String, String>() {{
                                                put("ipsa", "quisquam");
                                                put("tenetur", "quas");
                                            }};
                                        }};
                                    }}),
                                    add(new Classification() {{
                                        genre = new Level() {{
                                            id = "76ffb901-c6ec-4bb4-a243-cf789ffafeda";
                                            names = new java.util.HashMap<String, String>() {{
                                                put("velit", "officiis");
                                                put("enim", "officia");
                                            }};
                                        }};
                                        primary = false;
                                        segment = new Segment() {{
                                            id = "e6e0ac18-4c2b-49c2-87c8-8373a40e1942";
                                            names = new java.util.HashMap<String, String>() {{
                                                put("neque", "odit");
                                                put("earum", "veniam");
                                                put("ipsam", "eaque");
                                                put("exercitationem", "veniam");
                                            }};
                                        }};
                                        subGenre = new Level() {{
                                            id = "756f5d56-d0bd-40af-adfe-13db4f62cba3";
                                            names = new java.util.HashMap<String, String>() {{
                                                put("praesentium", "error");
                                                put("non", "quasi");
                                                put("mollitia", "accusamus");
                                                put("harum", "cumque");
                                            }};
                                        }};
                                        subType = new Level() {{
                                            id = "0b80a692-4d3b-42ec-bcc8-f895010f5dd3";
                                            names = new java.util.HashMap<String, String>() {{
                                                put("vel", "sapiente");
                                                put("mollitia", "quae");
                                                put("quos", "aperiam");
                                                put("non", "voluptates");
                                            }};
                                        }};
                                        type = new Level() {{
                                            id = "54c82f16-8a36-43c8-873e-484380b1f6b8";
                                            names = new java.util.HashMap<String, String>() {{
                                                put("deserunt", "magni");
                                                put("nihil", "voluptas");
                                                put("animi", "commodi");
                                                put("alias", "fuga");
                                            }};
                                        }};
                                    }}),
                                    add(new Classification() {{
                                        genre = new Level() {{
                                            id = "04c495cc-6991-471b-91c1-bdb1cf4b888e";
                                            names = new java.util.HashMap<String, String>() {{
                                                put("pariatur", "sapiente");
                                                put("quo", "incidunt");
                                                put("quod", "minus");
                                            }};
                                        }};
                                        primary = false;
                                        segment = new Segment() {{
                                            id = "ca99bc7f-c0b2-4dce-9087-3e42b006d678";
                                            names = new java.util.HashMap<String, String>() {{
                                                put("nihil", "atque");
                                                put("rerum", "deserunt");
                                                put("atque", "nostrum");
                                            }};
                                        }};
                                        subGenre = new Level() {{
                                            id = "81a58208-c54f-4efa-9c95-f2eac5565d30";
                                            names = new java.util.HashMap<String, String>() {{
                                                put("minus", "asperiores");
                                                put("recusandae", "voluptates");
                                            }};
                                        }};
                                        subType = new Level() {{
                                            id = "81206e28-13fa-44a4-9c48-0d3f2132af03";
                                            names = new java.util.HashMap<String, String>() {{
                                                put("aperiam", "aspernatur");
                                            }};
                                        }};
                                        type = new Level() {{
                                            id = "d514f4cc-6f18-4bf9-a21a-6a4f77a87ee3";
                                            names = new java.util.HashMap<String, String>() {{
                                                put("eius", "rerum");
                                                put("itaque", "dignissimos");
                                                put("ipsam", "explicabo");
                                                put("impedit", "aliquid");
                                            }};
                                        }};
                                    }}),
                                    add(new Classification() {{
                                        genre = new Level() {{
                                            id = "5b34418e-3bb9-41c8-9975-e0e8419d8f84";
                                            names = new java.util.HashMap<String, String>() {{
                                                put("architecto", "aliquam");
                                                put("labore", "maiores");
                                                put("sequi", "saepe");
                                                put("consequatur", "esse");
                                            }};
                                        }};
                                        primary = false;
                                        segment = new Segment() {{
                                            id = "edcc4aa5-f3ca-4bd9-85a9-72e056728227";
                                            names = new java.util.HashMap<String, String>() {{
                                                put("eos", "repellendus");
                                                put("nesciunt", "ipsa");
                                                put("sint", "dolore");
                                            }};
                                        }};
                                        subGenre = new Level() {{
                                            id = "70bf7a4f-a87c-4f53-9a6f-ae54ebf60c32";
                                            names = new java.util.HashMap<String, String>() {{
                                                put("voluptatibus", "doloremque");
                                            }};
                                        }};
                                        subType = new Level() {{
                                            id = "23b75d23-67fe-41a0-8c8d-f79f0a396d90";
                                            names = new java.util.HashMap<String, String>() {{
                                                put("sequi", "commodi");
                                                put("labore", "expedita");
                                                put("in", "quisquam");
                                                put("sunt", "enim");
                                            }};
                                        }};
                                        type = new Level() {{
                                            id = "dfbace18-8b1c-44ee-ac8c-6ce611feeb1c";
                                            names = new java.util.HashMap<String, String>() {{
                                                put("minus", "distinctio");
                                                put("possimus", "cum");
                                            }};
                                        }};
                                    }}),
                                }};
                                dates = new EventDates() {{
                                    access = new AccessDates() {{
                                        endApproximate = true;
                                        endDateTime = OffsetDateTime.parse("yyyy-MM-ddThh-mm-ssZ");
                                        startApproximate = false;
                                        startDateTime = OffsetDateTime.parse("yyyy-MM-ddThh-mm-ssZ");
                                    }};;
                                    end = new EndDates() {{
                                        approximate = false;
                                        dateTime = OffsetDateTime.parse("yyyy-MM-ddThh-mm-ssZ");
                                        localTime = new LocalTime() {{
                                            chronology = new Chronology() {{
                                                zone = new DateTimeZone() {{
                                                    fixed = false;
                                                    id = "6eec7437-8ba2-4531-b747-dc915ad2caf5";
                                                }};;
                                            }};;
                                            fieldTypes = new org.openapis.openapi.models.shared.DateTimeFieldType[]{{
                                                add(new DateTimeFieldType() {{
                                                    durationType = new DurationFieldType() {{
                                                        name = "Mrs. Leslie Klocko";
                                                    }};
                                                    name = "Jeffrey Wolff";
                                                    rangeDurationType = new DurationFieldType() {{
                                                        name = "Brandon Willms";
                                                    }};
                                                }}),
                                                add(new DateTimeFieldType() {{
                                                    durationType = new DurationFieldType() {{
                                                        name = "Mr. Maryann Kunze";
                                                    }};
                                                    name = "Naomi Krajcik";
                                                    rangeDurationType = new DurationFieldType() {{
                                                        name = "Gail Fay";
                                                    }};
                                                }}),
                                                add(new DateTimeFieldType() {{
                                                    durationType = new DurationFieldType() {{
                                                        name = "Elmer Schaefer";
                                                    }};
                                                    name = "Maurice Hamill";
                                                    rangeDurationType = new DurationFieldType() {{
                                                        name = "Dr. Dorothy Lockman";
                                                    }};
                                                }}),
                                                add(new DateTimeFieldType() {{
                                                    durationType = new DurationFieldType() {{
                                                        name = "Celia Rolfson";
                                                    }};
                                                    name = "Tyler Runte";
                                                    rangeDurationType = new DurationFieldType() {{
                                                        name = "Antoinette Halvorson";
                                                    }};
                                                }}),
                                            }};
                                            fields = new org.openapis.openapi.models.shared.DateTimeField[]{{
                                                add(new DateTimeField() {{
                                                    durationField = new DurationField() {{
                                                        name = "Terrance Barrows";
                                                        precise = false;
                                                        supported = false;
                                                        type = new DurationFieldType() {{
                                                            name = "Megan Zulauf";
                                                        }};
                                                        unitMillis = 425817L;
                                                    }};
                                                    leapDurationField = new DurationField() {{
                                                        name = "Orlando Schuster";
                                                        precise = false;
                                                        supported = false;
                                                        type = new DurationFieldType() {{
                                                            name = "Miss Emily Lehner";
                                                        }};
                                                        unitMillis = 269600L;
                                                    }};
                                                    lenient = false;
                                                    maximumValue = 452653;
                                                    minimumValue = 261170;
                                                    name = "Jason Volkman";
                                                    rangeDurationField = new DurationField() {{
                                                        name = "Elvira Hessel";
                                                        precise = false;
                                                        supported = false;
                                                        type = new DurationFieldType() {{
                                                            name = "Vickie Welch";
                                                        }};
                                                        unitMillis = 420985L;
                                                    }};
                                                    supported = false;
                                                    type = new DateTimeFieldType() {{
                                                        durationType = new DurationFieldType() {{
                                                            name = "Mae O'Kon Jr.";
                                                        }};
                                                        name = "Alton Shields";
                                                        rangeDurationType = new DurationFieldType() {{
                                                            name = "Edgar Corkery";
                                                        }};
                                                    }};
                                                }}),
                                                add(new DateTimeField() {{
                                                    durationField = new DurationField() {{
                                                        name = "Beth McKenzie";
                                                        precise = false;
                                                        supported = false;
                                                        type = new DurationFieldType() {{
                                                            name = "Mr. Patti Schamberger";
                                                        }};
                                                        unitMillis = 163263L;
                                                    }};
                                                    leapDurationField = new DurationField() {{
                                                        name = "Melody Dickinson";
                                                        precise = false;
                                                        supported = false;
                                                        type = new DurationFieldType() {{
                                                            name = "Hugh Mills";
                                                        }};
                                                        unitMillis = 732142L;
                                                    }};
                                                    lenient = false;
                                                    maximumValue = 225809;
                                                    minimumValue = 890112;
                                                    name = "Aubrey Smith";
                                                    rangeDurationField = new DurationField() {{
                                                        name = "Mark Satterfield";
                                                        precise = false;
                                                        supported = false;
                                                        type = new DurationFieldType() {{
                                                            name = "Mrs. Hugo Wehner Jr.";
                                                        }};
                                                        unitMillis = 273732L;
                                                    }};
                                                    supported = false;
                                                    type = new DateTimeFieldType() {{
                                                        durationType = new DurationFieldType() {{
                                                            name = "Darryl Lindgren";
                                                        }};
                                                        name = "Dr. Elsa Pacocha";
                                                        rangeDurationType = new DurationFieldType() {{
                                                            name = "Carol Johns";
                                                        }};
                                                    }};
                                                }}),
                                                add(new DateTimeField() {{
                                                    durationField = new DurationField() {{
                                                        name = "Jared Koepp DVM";
                                                        precise = false;
                                                        supported = false;
                                                        type = new DurationFieldType() {{
                                                            name = "Dr. Jermaine Klein";
                                                        }};
                                                        unitMillis = 681578L;
                                                    }};
                                                    leapDurationField = new DurationField() {{
                                                        name = "Tara Feil";
                                                        precise = false;
                                                        supported = false;
                                                        type = new DurationFieldType() {{
                                                            name = "Jimmy Rosenbaum MD";
                                                        }};
                                                        unitMillis = 609172L;
                                                    }};
                                                    lenient = false;
                                                    maximumValue = 470321;
                                                    minimumValue = 945190;
                                                    name = "Jacob Fisher";
                                                    rangeDurationField = new DurationField() {{
                                                        name = "Wilfred West";
                                                        precise = false;
                                                        supported = false;
                                                        type = new DurationFieldType() {{
                                                            name = "Kayla Mertz";
                                                        }};
                                                        unitMillis = 95123L;
                                                    }};
                                                    supported = false;
                                                    type = new DateTimeFieldType() {{
                                                        durationType = new DurationFieldType() {{
                                                            name = "Darren Johnson";
                                                        }};
                                                        name = "Dr. Willis Cassin";
                                                        rangeDurationType = new DurationFieldType() {{
                                                            name = "Clint Wiegand";
                                                        }};
                                                    }};
                                                }}),
                                                add(new DateTimeField() {{
                                                    durationField = new DurationField() {{
                                                        name = "Mable Hodkiewicz";
                                                        precise = false;
                                                        supported = false;
                                                        type = new DurationFieldType() {{
                                                            name = "Owen Kulas";
                                                        }};
                                                        unitMillis = 221490L;
                                                    }};
                                                    leapDurationField = new DurationField() {{
                                                        name = "Kevin Beatty";
                                                        precise = false;
                                                        supported = false;
                                                        type = new DurationFieldType() {{
                                                            name = "Ben Shields";
                                                        }};
                                                        unitMillis = 41306L;
                                                    }};
                                                    lenient = false;
                                                    maximumValue = 32775;
                                                    minimumValue = 4747;
                                                    name = "Dana Hayes";
                                                    rangeDurationField = new DurationField() {{
                                                        name = "Wilbert Walsh IV";
                                                        precise = false;
                                                        supported = false;
                                                        type = new DurationFieldType() {{
                                                            name = "Ebony Orn PhD";
                                                        }};
                                                        unitMillis = 611970L;
                                                    }};
                                                    supported = false;
                                                    type = new DateTimeFieldType() {{
                                                        durationType = new DurationFieldType() {{
                                                            name = "Roberta Cruickshank";
                                                        }};
                                                        name = "Doris Casper III";
                                                        rangeDurationType = new DurationFieldType() {{
                                                            name = "Pam MacGyver";
                                                        }};
                                                    }};
                                                }}),
                                            }};
                                            hourOfDay = 769872;
                                            millisOfDay = 550799;
                                            millisOfSecond = 849690;
                                            minuteOfHour = 717853;
                                            secondOfMinute = 32945;
                                            values = new Integer[]{{
                                                add(310195),
                                            }};
                                        }};;
                                    }};;
                                    start = new StartDates() {{
                                        dateTBA = false;
                                        dateTBD = false;
                                        dateTime = OffsetDateTime.parse("yyyy-MM-ddThh:mm:ssZ");
                                        localDate = LocalDate.parse("yyyy-MM-dd");
                                        localTime = new LocalTime() {{
                                            chronology = new Chronology() {{
                                                zone = new DateTimeZone() {{
                                                    fixed = false;
                                                    id = "08d6d364-ffd4-4559-86d1-263d48e935c2";
                                                }};;
                                            }};;
                                            fieldTypes = new org.openapis.openapi.models.shared.DateTimeFieldType[]{{
                                                add(new DateTimeFieldType() {{
                                                    durationType = new DurationFieldType() {{
                                                        name = "Dr. Clay Lubowitz";
                                                    }};
                                                    name = "Latoya Treutel";
                                                    rangeDurationType = new DurationFieldType() {{
                                                        name = "Mr. Josephine Cummerata";
                                                    }};
                                                }}),
                                                add(new DateTimeFieldType() {{
                                                    durationType = new DurationFieldType() {{
                                                        name = "Anne Brekke";
                                                    }};
                                                    name = "Ms. Kristin Hane";
                                                    rangeDurationType = new DurationFieldType() {{
                                                        name = "Ann Leffler PhD";
                                                    }};
                                                }}),
                                                add(new DateTimeFieldType() {{
                                                    durationType = new DurationFieldType() {{
                                                        name = "Dr. Owen Cremin";
                                                    }};
                                                    name = "Gustavo Adams DDS";
                                                    rangeDurationType = new DurationFieldType() {{
                                                        name = "Raquel Runolfsdottir Sr.";
                                                    }};
                                                }}),
                                                add(new DateTimeFieldType() {{
                                                    durationType = new DurationFieldType() {{
                                                        name = "William Lubowitz";
                                                    }};
                                                    name = "Mrs. Julia Morissette";
                                                    rangeDurationType = new DurationFieldType() {{
                                                        name = "Mr. Armando Hermann";
                                                    }};
                                                }}),
                                            }};
                                            fields = new org.openapis.openapi.models.shared.DateTimeField[]{{
                                                add(new DateTimeField() {{
                                                    durationField = new DurationField() {{
                                                        name = "Rochelle Kshlerin";
                                                        precise = false;
                                                        supported = false;
                                                        type = new DurationFieldType() {{
                                                            name = "Melody Schaefer";
                                                        }};
                                                        unitMillis = 370052L;
                                                    }};
                                                    leapDurationField = new DurationField() {{
                                                        name = "Miss Jimmy Cummerata";
                                                        precise = false;
                                                        supported = false;
                                                        type = new DurationFieldType() {{
                                                            name = "Natasha Wiza";
                                                        }};
                                                        unitMillis = 678695L;
                                                    }};
                                                    lenient = false;
                                                    maximumValue = 841816;
                                                    minimumValue = 937591;
                                                    name = "Jesus Kreiger";
                                                    rangeDurationField = new DurationField() {{
                                                        name = "Ken Jacobs";
                                                        precise = false;
                                                        supported = false;
                                                        type = new DurationFieldType() {{
                                                            name = "Barry Daugherty";
                                                        }};
                                                        unitMillis = 400492L;
                                                    }};
                                                    supported = false;
                                                    type = new DateTimeFieldType() {{
                                                        durationType = new DurationFieldType() {{
                                                            name = "Wilma Hammes III";
                                                        }};
                                                        name = "Laurence Russel";
                                                        rangeDurationType = new DurationFieldType() {{
                                                            name = "Dr. Emilio Hilll";
                                                        }};
                                                    }};
                                                }}),
                                                add(new DateTimeField() {{
                                                    durationField = new DurationField() {{
                                                        name = "Edwin Runte";
                                                        precise = false;
                                                        supported = false;
                                                        type = new DurationFieldType() {{
                                                            name = "Mr. Meghan Schamberger";
                                                        }};
                                                        unitMillis = 840017L;
                                                    }};
                                                    leapDurationField = new DurationField() {{
                                                        name = "Dr. Alfonso Spencer";
                                                        precise = false;
                                                        supported = false;
                                                        type = new DurationFieldType() {{
                                                            name = "Marguerite Windler";
                                                        }};
                                                        unitMillis = 748723L;
                                                    }};
                                                    lenient = false;
                                                    maximumValue = 869088;
                                                    minimumValue = 561121;
                                                    name = "Paulette White";
                                                    rangeDurationField = new DurationField() {{
                                                        name = "Otis Greenholt";
                                                        precise = false;
                                                        supported = false;
                                                        type = new DurationFieldType() {{
                                                            name = "Miss Allen McClure";
                                                        }};
                                                        unitMillis = 551549L;
                                                    }};
                                                    supported = false;
                                                    type = new DateTimeFieldType() {{
                                                        durationType = new DurationFieldType() {{
                                                            name = "Willard Barrows";
                                                        }};
                                                        name = "Eula Paucek";
                                                        rangeDurationType = new DurationFieldType() {{
                                                            name = "Clay Will";
                                                        }};
                                                    }};
                                                }}),
                                            }};
                                            hourOfDay = 977641;
                                            millisOfDay = 824267;
                                            millisOfSecond = 830149;
                                            minuteOfHour = 607742;
                                            secondOfMinute = 966652;
                                            values = new Integer[]{{
                                                add(974703),
                                                add(13316),
                                            }};
                                        }};;
                                        noSpecificTime = false;
                                        timeTBA = false;
                                    }};;
                                    status = new EventStatus() {{
                                        code = EventStatusCodeEnum.CANCELED;
                                    }};;
                                    timezone = "omnis";
                                }};;
                                descriptions = new java.util.HashMap<String, String>() {{
                                    put("asperiores", "modi");
                                    put("facere", "neque");
                                    put("quis", "in");
                                }};
                                discoverable = false;
                                distance = 1520.47;
                                images = new org.openapis.openapi.models.shared.Image[]{{
                                    add(new Image() {{
                                        attribution = "porro";
                                        domains = new String[]{{
                                            add("soluta"),
                                            add("ipsa"),
                                            add("reiciendis"),
                                            add("labore"),
                                        }};
                                        fallback = false;
                                        height = 874843;
                                        ratio = ImageRatioEnum.ZERO;
                                        url = "eos";
                                        width = 555663;
                                    }}),
                                    add(new Image() {{
                                        attribution = "quasi";
                                        domains = new String[]{{
                                            add("praesentium"),
                                        }};
                                        fallback = false;
                                        height = 483501;
                                        ratio = ImageRatioEnum.ZERO;
                                        url = "fugiat";
                                        width = 313695;
                                    }}),
                                }};
                                infos = new java.util.HashMap<String, String>() {{
                                    put("laudantium", "modi");
                                    put("magnam", "accusamus");
                                }};
                                location = new Location() {{
                                    latitude = 8618.23;
                                    longitude = 9211.27;
                                }};;
                                names = new java.util.HashMap<String, String>() {{
                                    put("praesentium", "enim");
                                    put("animi", "unde");
                                    put("quae", "eum");
                                    put("nostrum", "eveniet");
                                }};
                                place = new Place() {{
                                    address = new Address() {{
                                        line1s = new java.util.HashMap<String, String>() {{
                                            put("ratione", "blanditiis");
                                            put("quidem", "illum");
                                        }};
                                        line2s = new java.util.HashMap<String, String>() {{
                                            put("placeat", "dolores");
                                            put("consequatur", "nesciunt");
                                            put("quia", "quidem");
                                            put("voluptas", "quo");
                                        }};
                                        line3s = new java.util.HashMap<String, String>() {{
                                            put("dignissimos", "omnis");
                                            put("omnis", "fugit");
                                            put("dolorem", "quidem");
                                        }};
                                    }};;
                                    area = new Area() {{
                                        names = new java.util.HashMap<String, String>() {{
                                            put("debitis", "vitae");
                                            put("dolor", "ad");
                                        }};
                                    }};;
                                    city = new City() {{
                                        names = new java.util.HashMap<String, String>() {{
                                            put("ut", "asperiores");
                                            put("reprehenderit", "deserunt");
                                            put("itaque", "et");
                                        }};
                                    }};;
                                    country = new Country() {{
                                        countryCode = "CL";
                                        names = new java.util.HashMap<String, String>() {{
                                            put("ex", "praesentium");
                                            put("natus", "vitae");
                                            put("tenetur", "laudantium");
                                            put("aspernatur", "eligendi");
                                        }};
                                    }};;
                                    location = new Location() {{
                                        latitude = 9178.77;
                                        longitude = 1171.42;
                                    }};;
                                    names = new java.util.HashMap<String, String>() {{
                                        put("ullam", "iusto");
                                    }};
                                    postalCode = "41203";
                                    state = new State() {{
                                        names = new java.util.HashMap<String, String>() {{
                                            put("voluptate", "voluptate");
                                        }};
                                        stateCode = "pariatur";
                                    }};;
                                }};;
                                pleaseNotes = new java.util.HashMap<String, String>() {{
                                    put("a", "fuga");
                                    put("totam", "cupiditate");
                                    put("at", "doloribus");
                                    put("omnis", "quam");
                                }};
                                priceRanges = new org.openapis.openapi.models.shared.PriceRange[]{{
                                    add(new PriceRange() {{
                                        currency = "voluptates";
                                        max = 1941.94;
                                        min = 3366.4;
                                        type = PriceRangeTypeEnum.STANDARD;
                                    }}),
                                    add(new PriceRange() {{
                                        currency = "commodi";
                                        max = 4264.81;
                                        min = 5228.24;
                                        type = PriceRangeTypeEnum.STANDARD;
                                    }}),
                                }};
                                promoter = new Promoter() {{
                                    descriptions = new java.util.HashMap<String, String>() {{
                                        put("aperiam", "perspiciatis");
                                        put("fugit", "itaque");
                                    }};
                                    id = "9c3ddc5f-111d-4ea1-826d-541a4d190feb";
                                    names = new java.util.HashMap<String, String>() {{
                                        put("vitae", "odio");
                                    }};
                                }};;
                                publicVisibility = new PublicVisibility() {{
                                    endDateTime = OffsetDateTime.parse("2022-11-21T13:15:25.093Z");
                                    startDateTime = OffsetDateTime.parse("2021-05-18T07:27:34.126Z");
                                    visible = false;
                                }};;
                                references = new java.util.HashMap<String, String>() {{
                                    put("eligendi", "sit");
                                    put("possimus", "distinctio");
                                    put("distinctio", "assumenda");
                                    put("illum", "soluta");
                                }};
                                relationships = new java.util.HashMap<String, Object>[]{{
                                    add(new java.util.HashMap<String, Object>() {{
                                        put("tempora", "esse");
                                        put("doloremque", "corrupti");
                                        put("reiciendis", "facilis");
                                    }}),
                                    add(new java.util.HashMap<String, Object>() {{
                                        put("repudiandae", "amet");
                                        put("natus", "ab");
                                    }}),
                                }};
                                sales = new EventSalesDates() {{
                                    presales = new org.openapis.openapi.models.shared.Presale[]{{
                                        add(new Presale() {{
                                            descriptions = new java.util.HashMap<String, String>() {{
                                                put("rerum", "placeat");
                                                put("ab", "ad");
                                            }};
                                            endDateTime = OffsetDateTime.parse("2021-06-10T07:55:03.152Z");
                                            names = new java.util.HashMap<String, String>() {{
                                                put("impedit", "ut");
                                                put("earum", "ullam");
                                            }};
                                            startDateTime = OffsetDateTime.parse("2022-09-08T02:56:26.644Z");
                                            url = "cupiditate";
                                        }}),
                                        add(new Presale() {{
                                            descriptions = new java.util.HashMap<String, String>() {{
                                                put("itaque", "fuga");
                                                put("consectetur", "modi");
                                                put("aspernatur", "explicabo");
                                            }};
                                            endDateTime = OffsetDateTime.parse("2022-12-10T12:50:07.237Z");
                                            names = new java.util.HashMap<String, String>() {{
                                                put("sint", "nobis");
                                                put("qui", "accusantium");
                                                put("consequatur", "impedit");
                                                put("recusandae", "voluptate");
                                            }};
                                            startDateTime = OffsetDateTime.parse("2021-09-01T14:03:59.260Z");
                                            url = "et";
                                        }}),
                                        add(new Presale() {{
                                            descriptions = new java.util.HashMap<String, String>() {{
                                                put("quibusdam", "quos");
                                                put("maiores", "quidem");
                                                put("in", "culpa");
                                            }};
                                            endDateTime = OffsetDateTime.parse("2022-04-27T07:29:57.818Z");
                                            names = new java.util.HashMap<String, String>() {{
                                                put("architecto", "suscipit");
                                            }};
                                            startDateTime = OffsetDateTime.parse("2020-05-06T08:27:54.041Z");
                                            url = "dignissimos";
                                        }}),
                                        add(new Presale() {{
                                            descriptions = new java.util.HashMap<String, String>() {{
                                                put("ratione", "possimus");
                                            }};
                                            endDateTime = OffsetDateTime.parse("2022-12-26T12:48:27.657Z");
                                            names = new java.util.HashMap<String, String>() {{
                                                put("esse", "delectus");
                                                put("deserunt", "ratione");
                                                put("ipsa", "debitis");
                                            }};
                                            startDateTime = OffsetDateTime.parse("2021-09-15T20:29:38.782Z");
                                            url = "hic";
                                        }}),
                                    }};
                                    public_ = new PublicSaleDates() {{
                                        endDateTime = OffsetDateTime.parse("2022-11-03T12:07:22.406Z");
                                        startDateTime = OffsetDateTime.parse("2022-04-09T16:36:14.999Z");
                                        startTBD = false;
                                    }};;
                                }};;
                                source = new Source() {{
                                    id = "29122030-d83f-45ae-b779-9d22e8c1f849";
                                    name = "Naomi Cassin";
                                }};;
                                test = false;
                                units = "illum";
                                url = "porro";
                                venue = new Venue(VenueTypeEnum.EVENT) {{
                                    accessibleSeatingDetails = new java.util.HashMap<String, String>() {{
                                        put("cumque", "quos");
                                    }};
                                    active = false;
                                    additionalInfos = new java.util.HashMap<String, String>() {{
                                        put("commodi", "maxime");
                                        put("sed", "minus");
                                    }};
                                    address = new Address() {{
                                        line1s = new java.util.HashMap<String, String>() {{
                                            put("possimus", "delectus");
                                        }};
                                        line2s = new java.util.HashMap<String, String>() {{
                                            put("aliquam", "eligendi");
                                            put("hic", "quo");
                                            put("illo", "nobis");
                                        }};
                                        line3s = new java.util.HashMap<String, String>() {{
                                            put("nisi", "explicabo");
                                            put("sequi", "alias");
                                        }};
                                    }};;
                                    boxOfficeInfo = new VenueBoxOfficeInfo() {{
                                        acceptedPaymentDetails = new java.util.HashMap<String, String>() {{
                                            put("quos", "numquam");
                                            put("vitae", "maiores");
                                            put("nam", "architecto");
                                            put("rerum", "assumenda");
                                        }};
                                        openHoursDetails = new java.util.HashMap<String, String>() {{
                                            put("dolorem", "hic");
                                        }};
                                        phoneNumberDetails = new java.util.HashMap<String, String>() {{
                                            put("nam", "ab");
                                            put("magnam", "pariatur");
                                            put("expedita", "autem");
                                            put("tempore", "recusandae");
                                        }};
                                        willCallDetails = new java.util.HashMap<String, String>() {{
                                            put("officia", "voluptas");
                                            put("laudantium", "corporis");
                                        }};
                                    }};;
                                    city = new City() {{
                                        names = new java.util.HashMap<String, String>() {{
                                            put("natus", "deleniti");
                                            put("necessitatibus", "aspernatur");
                                            put("dolores", "laborum");
                                        }};
                                    }};;
                                    country = new Country() {{
                                        countryCode = "TH";
                                        names = new java.util.HashMap<String, String>() {{
                                            put("voluptatem", "temporibus");
                                        }};
                                    }};;
                                    currency = "id";
                                    descriptions = new java.util.HashMap<String, String>() {{
                                        put("commodi", "a");
                                    }};
                                    discoverable = false;
                                    distance = 7912.82;
                                    dma = new org.openapis.openapi.models.shared.Dma[]{{
                                        add(new Dma() {{
                                            id = 721198;
                                        }}),
                                    }};
                                    generalInfo = new VenueGeneralInfo() {{
                                        childRules = new java.util.HashMap<String, String>() {{
                                            put("iusto", "ab");
                                        }};
                                        generalRules = new java.util.HashMap<String, String>() {{
                                            put("sed", "blanditiis");
                                            put("sint", "placeat");
                                            put("ullam", "molestiae");
                                        }};
                                    }};;
                                    images = new org.openapis.openapi.models.shared.Image[]{{
                                        add(new Image() {{
                                            attribution = "rem";
                                            domains = new String[]{{
                                                add("non"),
                                                add("recusandae"),
                                            }};
                                            fallback = false;
                                            height = 605043;
                                            ratio = ImageRatioEnum.ZERO;
                                            url = "ipsa";
                                            width = 302905;
                                        }}),
                                        add(new Image() {{
                                            attribution = "dolor";
                                            domains = new String[]{{
                                                add("quibusdam"),
                                                add("magni"),
                                                add("consequuntur"),
                                            }};
                                            fallback = false;
                                            height = 159469;
                                            ratio = ImageRatioEnum.ZERO;
                                            url = "eius";
                                            width = 417030;
                                        }}),
                                        add(new Image() {{
                                            attribution = "ipsam";
                                            domains = new String[]{{
                                                add("cupiditate"),
                                                add("modi"),
                                            }};
                                            fallback = false;
                                            height = 392311;
                                            ratio = ImageRatioEnum.ZERO;
                                            url = "explicabo";
                                            width = 268173;
                                        }}),
                                        add(new Image() {{
                                            attribution = "doloremque";
                                            domains = new String[]{{
                                                add("sit"),
                                                add("voluptatum"),
                                            }};
                                            fallback = false;
                                            height = 271550;
                                            ratio = ImageRatioEnum.ZERO;
                                            url = "delectus";
                                            width = 461853;
                                        }}),
                                    }};
                                    location = new Location() {{
                                        latitude = 6759.55;
                                        longitude = 7262.44;
                                    }};;
                                    markets = new org.openapis.openapi.models.shared.Market[]{{
                                        add(new Market() {{
                                            id = "7cef0222-5194-4db5-9410-adc669af90a2";
                                        }}),
                                    }};
                                    names = new java.util.HashMap<String, String>() {{
                                        put("quo", "molestiae");
                                        put("maxime", "facere");
                                    }};
                                    parkingDetails = new java.util.HashMap<String, String>() {{
                                        put("cupiditate", "deleniti");
                                        put("quasi", "maiores");
                                        put("voluptatem", "aliquid");
                                        put("laudantium", "unde");
                                    }};
                                    postalCode = "08477-2279";
                                    references = new java.util.HashMap<String, String>() {{
                                        put("fuga", "consectetur");
                                        put("labore", "laudantium");
                                        put("cumque", "adipisci");
                                    }};
                                    relationships = new java.util.HashMap<String, Object>[]{{
                                        add(new java.util.HashMap<String, Object>() {{
                                            put("voluptatibus", "magnam");
                                            put("aperiam", "ducimus");
                                            put("itaque", "necessitatibus");
                                        }}),
                                    }};
                                    social = new Social() {{
                                        twitter = new Twitter() {{
                                            handle = TwitterHandleEnum.AT_A_TWITTER_HANDLE;
                                            hashtags = new String[]{{
                                                add("doloribus"),
                                                add("eligendi"),
                                            }};
                                        }};;
                                    }};;
                                    source = new Source() {{
                                        id = "f0c42b78-f156-4263-98a0-dc766324ccb0";
                                        name = "Leticia Leannon";
                                    }};;
                                    state = new State() {{
                                        names = new java.util.HashMap<String, String>() {{
                                            put("consequuntur", "repellendus");
                                        }};
                                        stateCode = "sit";
                                    }};;
                                    test = false;
                                    timezone = "dolores";
                                    units = "enim";
                                    url = "aspernatur";
                                    version = 595585L;
                                }};;
                                version = 166401L;
                            }};, "odio");            

            PublishEventResponse res = sdk.sdk.publishEvent(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## publishEventVideos

Since 1.0.0

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PublishEventVideosRequest;
import org.openapis.openapi.models.operations.PublishEventVideosResponse;
import org.openapis.openapi.models.shared.LicensingInformation;
import org.openapis.openapi.models.shared.RegionRestrictions;
import org.openapis.openapi.models.shared.Source;
import org.openapis.openapi.models.shared.Video;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PublishEventVideosRequest req = new PublishEventVideosRequest("alias",                 new Video(                new LicensingInformation("quidem") {{
                                                regionRestriction = new RegionRestrictions() {{
                                                    allowed = new String[]{{
                                                        add("possimus"),
                                                        add("ipsam"),
                                                        add("odio"),
                                                    }};
                                                }};;
                                            }};,                 new Source() {{
                                                id = "22dd895b-8bcf-424d-b959-693352f74533";
                                                name = "Tracy Gerlach";
                                            }};, "quas") {{
                                embedUrl = "repellendus";
                            }};, "saepe");            

            PublishEventVideosResponse res = sdk.sdk.publishEventVideos(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## publishExtension

Since 1.0.0

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PublishExtensionRequest;
import org.openapis.openapi.models.operations.PublishExtensionResponse;
import org.openapis.openapi.models.shared.ExtensionData;
import org.openapis.openapi.models.shared.ExtensionDataRelatedEntityTypeEnum;
import org.openapis.openapi.models.shared.Source;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PublishExtensionRequest req = new PublishExtensionRequest(                new ExtensionData(                new java.util.HashMap<String, Object>() {{
                                                put("distinctio", "vel");
                                            }}, ExtensionDataRelatedEntityTypeEnum.ATTRACTION, "iste", "nesciunt") {{
                                relatedEntityId = "corrupti";
                                relatedEntitySource = new Source() {{
                                    id = "9f5abb7f-6625-450a-a838-2ac483afd231";
                                    name = "Olivia Quitzon";
                                }};;
                                versionNumber = 370973L;
                            }};, "voluptatem");            

            PublishExtensionResponse res = sdk.sdk.publishExtension(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## publishVenue

Since 1.0.0

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PublishVenueRequest;
import org.openapis.openapi.models.operations.PublishVenueResponse;
import org.openapis.openapi.models.shared.Address;
import org.openapis.openapi.models.shared.City;
import org.openapis.openapi.models.shared.Country;
import org.openapis.openapi.models.shared.Dma;
import org.openapis.openapi.models.shared.Image;
import org.openapis.openapi.models.shared.ImageRatioEnum;
import org.openapis.openapi.models.shared.Location;
import org.openapis.openapi.models.shared.Market;
import org.openapis.openapi.models.shared.Social;
import org.openapis.openapi.models.shared.Source;
import org.openapis.openapi.models.shared.State;
import org.openapis.openapi.models.shared.Twitter;
import org.openapis.openapi.models.shared.TwitterHandleEnum;
import org.openapis.openapi.models.shared.Venue;
import org.openapis.openapi.models.shared.VenueBoxOfficeInfo;
import org.openapis.openapi.models.shared.VenueGeneralInfo;
import org.openapis.openapi.models.shared.VenueTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PublishVenueRequest req = new PublishVenueRequest("illo",                 new Venue(VenueTypeEnum.VENUE) {{
                                accessibleSeatingDetails = new java.util.HashMap<String, String>() {{
                                    put("eveniet", "quae");
                                    put("ea", "asperiores");
                                }};
                                active = false;
                                additionalInfos = new java.util.HashMap<String, String>() {{
                                    put("quidem", "asperiores");
                                    put("eum", "deserunt");
                                }};
                                address = new Address() {{
                                    line1s = new java.util.HashMap<String, String>() {{
                                        put("nemo", "molestias");
                                        put("architecto", "expedita");
                                        put("quisquam", "praesentium");
                                        put("facilis", "assumenda");
                                    }};
                                    line2s = new java.util.HashMap<String, String>() {{
                                        put("maiores", "ipsum");
                                        put("commodi", "vitae");
                                        put("fugit", "nam");
                                        put("ex", "neque");
                                    }};
                                    line3s = new java.util.HashMap<String, String>() {{
                                        put("eos", "alias");
                                        put("ad", "a");
                                        put("facere", "id");
                                        put("atque", "quaerat");
                                    }};
                                }};;
                                boxOfficeInfo = new VenueBoxOfficeInfo() {{
                                    acceptedPaymentDetails = new java.util.HashMap<String, String>() {{
                                        put("dignissimos", "quam");
                                    }};
                                    openHoursDetails = new java.util.HashMap<String, String>() {{
                                        put("fuga", "iure");
                                        put("deleniti", "officia");
                                    }};
                                    phoneNumberDetails = new java.util.HashMap<String, String>() {{
                                        put("laborum", "dolor");
                                        put("ad", "illum");
                                        put("sit", "molestias");
                                    }};
                                    willCallDetails = new java.util.HashMap<String, String>() {{
                                        put("expedita", "voluptas");
                                        put("maiores", "ea");
                                    }};
                                }};;
                                city = new City() {{
                                    names = new java.util.HashMap<String, String>() {{
                                        put("delectus", "accusamus");
                                        put("reiciendis", "consequatur");
                                    }};
                                }};;
                                country = new Country() {{
                                    countryCode = "CA";
                                    names = new java.util.HashMap<String, String>() {{
                                        put("voluptates", "provident");
                                    }};
                                }};;
                                currency = "maiores";
                                descriptions = new java.util.HashMap<String, String>() {{
                                    put("numquam", "non");
                                    put("cum", "incidunt");
                                }};
                                discoverable = false;
                                distance = 1754.55;
                                dma = new org.openapis.openapi.models.shared.Dma[]{{
                                    add(new Dma() {{
                                        id = 471966;
                                    }}),
                                    add(new Dma() {{
                                        id = 728948;
                                    }}),
                                }};
                                generalInfo = new VenueGeneralInfo() {{
                                    childRules = new java.util.HashMap<String, String>() {{
                                        put("excepturi", "eos");
                                        put("quisquam", "corrupti");
                                        put("repellendus", "cum");
                                    }};
                                    generalRules = new java.util.HashMap<String, String>() {{
                                        put("est", "commodi");
                                        put("similique", "autem");
                                        put("dicta", "recusandae");
                                        put("sapiente", "id");
                                    }};
                                }};;
                                images = new org.openapis.openapi.models.shared.Image[]{{
                                    add(new Image() {{
                                        attribution = "inventore";
                                        domains = new String[]{{
                                            add("atque"),
                                            add("explicabo"),
                                            add("ullam"),
                                        }};
                                        fallback = false;
                                        height = 539703;
                                        ratio = ImageRatioEnum.ZERO;
                                        url = "doloribus";
                                        width = 867434;
                                    }}),
                                }};
                                location = new Location() {{
                                    latitude = 136.55;
                                    longitude = 6302.86;
                                }};;
                                markets = new org.openapis.openapi.models.shared.Market[]{{
                                    add(new Market() {{
                                        id = "eba47f7d-3ef0-4496-80d6-a1831c87adf5";
                                    }}),
                                    add(new Market() {{
                                        id = "96fdf1ad-837a-4e80-81c1-9c95ba998678";
                                    }}),
                                    add(new Market() {{
                                        id = "fa3f6969-91af-4388-8e03-614448c7977a";
                                    }}),
                                }};
                                names = new java.util.HashMap<String, String>() {{
                                    put("voluptates", "delectus");
                                }};
                                parkingDetails = new java.util.HashMap<String, String>() {{
                                    put("delectus", "exercitationem");
                                }};
                                postalCode = "30158";
                                references = new java.util.HashMap<String, String>() {{
                                    put("itaque", "eveniet");
                                    put("repellat", "cupiditate");
                                    put("adipisci", "aliquam");
                                    put("illo", "veniam");
                                }};
                                relationships = new java.util.HashMap<String, Object>[]{{
                                    add(new java.util.HashMap<String, Object>() {{
                                        put("possimus", "dignissimos");
                                        put("itaque", "explicabo");
                                        put("ullam", "non");
                                        put("delectus", "incidunt");
                                    }}),
                                }};
                                social = new Social() {{
                                    twitter = new Twitter() {{
                                        handle = TwitterHandleEnum.AT_A_TWITTER_HANDLE;
                                        hashtags = new String[]{{
                                            add("sunt"),
                                            add("ullam"),
                                            add("quam"),
                                            add("illum"),
                                        }};
                                    }};;
                                }};;
                                source = new Source() {{
                                    id = "eaa7170f-445a-4ccf-a67a-af9bbad185fe";
                                    name = "Peggy Bergstrom";
                                }};;
                                state = new State() {{
                                    names = new java.util.HashMap<String, String>() {{
                                        put("delectus", "nemo");
                                        put("cumque", "voluptatum");
                                        put("sequi", "atque");
                                    }};
                                    stateCode = "maiores";
                                }};;
                                test = false;
                                timezone = "expedita";
                                units = "rerum";
                                url = "totam";
                                version = 799236L;
                            }};);            

            PublishVenueResponse res = sdk.sdk.publishVenue(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
