# offerings

### Available Operations

* [getOfferings](#getofferings) - Find current, past and future offerings
* [getOfferingsCurrent](#getofferingscurrent) - Find active offerings
* [getOfferingsFuture](#getofferingsfuture) - Find scheduled offerings
* [getOfferingsInfoTextPattern](#getofferingsinfotextpattern) - Find offerings where info field matches the specified textPattern
* [getOfferingsPast](#getofferingspast) - Find past offerings
* [getOfferingsOfferingId](#getofferingsofferingid) - Find offering by ID
* [patchOfferingsOfferingId](#patchofferingsofferingid) - Update offering
* [postOfferings](#postofferings) - Create offering

## getOfferings

Responds with all offerings for your organisation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOfferingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repudiandae") {{
                    authorization = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOfferingsResponse res = sdk.offerings.getOfferings();

            if (res.offeringMetadataResponses != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOfferingsCurrent

Responds with active offerings for your organisation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOfferingsCurrentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ullam") {{
                    authorization = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOfferingsCurrentResponse res = sdk.offerings.getOfferingsCurrent();

            if (res.offeringMetadataResponses != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOfferingsFuture

Responds with scheduled offerings for your organisation. Scheduled offerings have a start date after today's date (inclusive).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOfferingsFutureResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("expedita") {{
                    authorization = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOfferingsFutureResponse res = sdk.offerings.getOfferingsFuture();

            if (res.offeringMetadataResponses != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOfferingsInfoTextPattern

Find offerings where info field matches the specified text pattern.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOfferingsInfoTextPatternRequest;
import org.openapis.openapi.models.operations.GetOfferingsInfoTextPatternResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nihil") {{
                    authorization = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOfferingsInfoTextPatternRequest req = new GetOfferingsInfoTextPatternRequest("repellat");            

            GetOfferingsInfoTextPatternResponse res = sdk.offerings.getOfferingsInfoTextPattern(req);

            if (res.portfolioActivations != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOfferingsPast

Responds with past offerings for your organisation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOfferingsPastResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quibusdam") {{
                    authorization = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOfferingsPastResponse res = sdk.offerings.getOfferingsPast();

            if (res.offeringMetadataResponses != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOfferingsOfferingId

Responds with an offering matching the offeringId.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOfferingsOfferingIdRequest;
import org.openapis.openapi.models.operations.GetOfferingsOfferingIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sed") {{
                    authorization = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOfferingsOfferingIdRequest req = new GetOfferingsOfferingIdRequest("saepe");            

            GetOfferingsOfferingIdResponse res = sdk.offerings.getOfferingsOfferingId(req);

            if (res.offeringMetadataResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patchOfferingsOfferingId

Updates the offering.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatchOfferingsOfferingIdRequest;
import org.openapis.openapi.models.operations.PatchOfferingsOfferingIdResponse;
import org.openapis.openapi.models.shared.BadgeExpiry;
import org.openapis.openapi.models.shared.BadgeExpiryExpiryTypeEnum;
import org.openapis.openapi.models.shared.BadgeExpiryTimeframeUnitEnum;
import org.openapis.openapi.models.shared.Offering;
import org.openapis.openapi.models.shared.OfferingBadge;
import org.openapis.openapi.models.shared.OfferingMetadata1;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("pariatur") {{
                    authorization = "YOUR_API_KEY_HERE";
                }})
                .build();

            PatchOfferingsOfferingIdRequest req = new PatchOfferingsOfferingIdRequest(                new Offering() {{
                                badge = new OfferingBadge() {{
                                    badgeExpiry = new BadgeExpiry() {{
                                        expirationDate = OffsetDateTime.parse("2022-11-02T16:33:42.080Z");
                                        expires = false;
                                        expiryType = BadgeExpiryExpiryTypeEnum.TIMEFRAME;
                                        timeframeAmount = 6155.6;
                                        timeframeUnit = BadgeExpiryTimeframeUnitEnum.DAYS;
                                    }};;
                                    description = "sunt";
                                    requiresApproval = false;
                                    title = "Miss";
                                }};;
                                contentId = "illum";
                                description = "pariatur";
                                earlyCloseOffDate = OffsetDateTime.parse("2021-10-07T12:29:38.109Z");
                                end = OffsetDateTime.parse("2022-09-20T19:40:48.375Z");
                                hasEarlyCloseOff = false;
                                identifier = "ea";
                                isReadonly = false;
                                metadata = new OfferingMetadata1() {{
                                    category = "accusantium";
                                    level = "ab";
                                    tags = new String[]{{
                                        add("quidem"),
                                        add("ipsam"),
                                        add("voluptate"),
                                        add("autem"),
                                    }};
                                    topic = "nam";
                                }};;
                                name = "Meredith Hickle PhD";
                                overview = "amet";
                                rootContentId = "aut";
                                start = OffsetDateTime.parse("2021-12-02T19:46:35.147Z");
                                trailerVideoUrl = "hic";
                                useRelativeDates = false;
                            }};, "libero");            

            PatchOfferingsOfferingIdResponse res = sdk.offerings.patchOfferingsOfferingId(req);

            if (res.offeringMetadataResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postOfferings

Creates a new offering.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostOfferingsResponse;
import org.openapis.openapi.models.shared.BadgeExpiry;
import org.openapis.openapi.models.shared.BadgeExpiryExpiryTypeEnum;
import org.openapis.openapi.models.shared.BadgeExpiryTimeframeUnitEnum;
import org.openapis.openapi.models.shared.OfferingRequired;
import org.openapis.openapi.models.shared.OfferingRequiredBadge;
import org.openapis.openapi.models.shared.OfferingRequiredMetadata;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nobis") {{
                    authorization = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.OfferingRequired req = new OfferingRequired(OffsetDateTime.parse("2022-08-30T02:49:20.597Z")) {{
                badge = new OfferingRequiredBadge() {{
                    badgeExpiry = new BadgeExpiry() {{
                        expirationDate = OffsetDateTime.parse("2022-01-08T15:06:08.615Z");
                        expires = false;
                        expiryType = BadgeExpiryExpiryTypeEnum.DATE;
                        timeframeAmount = 3389.85;
                        timeframeUnit = BadgeExpiryTimeframeUnitEnum.DAYS;
                    }};;
                    description = "eos";
                    requiresApproval = false;
                    title = "Mr.";
                }};;
                contentId = "dolores";
                createDefaultChannels = false;
                description = "minus";
                earlyCloseOffDate = OffsetDateTime.parse("2022-10-11T06:25:10.430Z");
                end = OffsetDateTime.parse("2021-12-18T20:09:27.741Z");
                hasEarlyCloseOff = false;
                identifier = "hic";
                isReadonly = false;
                metadata = new OfferingRequiredMetadata() {{
                    category = "recusandae";
                    level = "omnis";
                    tags = new String[]{{
                        add("perspiciatis"),
                        add("voluptatem"),
                        add("porro"),
                    }};
                    topic = "consequuntur";
                }};;
                name = "Jeremiah Beatty";
                rootContentId = "adipisci";
                trailerVideoUrl = "asperiores";
                useRelativeDates = false;
            }};            

            PostOfferingsResponse res = sdk.offerings.postOfferings(req);

            if (res.offeringMetadataResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
