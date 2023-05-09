# datafeeds

### Available Operations

* [contentDatafeedsCustombatch](#contentdatafeedscustombatch) - Deletes, fetches, gets, inserts and updates multiple datafeeds in a single request.
* [contentDatafeedsDelete](#contentdatafeedsdelete) - Deletes a datafeed configuration from your Merchant Center account.
* [contentDatafeedsFetchnow](#contentdatafeedsfetchnow) - Invokes a fetch for the datafeed in your Merchant Center account. If you need to call this method more than once per day, we recommend you use the Products service to update your product data.
* [contentDatafeedsGet](#contentdatafeedsget) - Retrieves a datafeed configuration from your Merchant Center account.
* [contentDatafeedsInsert](#contentdatafeedsinsert) - Registers a datafeed configuration with your Merchant Center account.
* [contentDatafeedsList](#contentdatafeedslist) - Lists the configurations for datafeeds in your Merchant Center account.
* [contentDatafeedsUpdate](#contentdatafeedsupdate) - Updates a datafeed configuration of your Merchant Center account. Any fields that are not provided are deleted from the resource.

## contentDatafeedsCustombatch

Deletes, fetches, gets, inserts and updates multiple datafeeds in a single request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentDatafeedsCustombatchRequest;
import org.openapis.openapi.models.operations.ContentDatafeedsCustombatchResponse;
import org.openapis.openapi.models.operations.ContentDatafeedsCustombatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Datafeed;
import org.openapis.openapi.models.shared.DatafeedFetchSchedule;
import org.openapis.openapi.models.shared.DatafeedFormat;
import org.openapis.openapi.models.shared.DatafeedTarget;
import org.openapis.openapi.models.shared.DatafeedsCustomBatchRequest;
import org.openapis.openapi.models.shared.DatafeedsCustomBatchRequestEntry;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentDatafeedsCustombatchRequest req = new ContentDatafeedsCustombatchRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                datafeedsCustomBatchRequest = new DatafeedsCustomBatchRequest() {{
                    entries = new org.openapis.openapi.models.shared.DatafeedsCustomBatchRequestEntry[]{{
                        add(new DatafeedsCustomBatchRequestEntry() {{
                            batchId = 13948L;
                            datafeed = new Datafeed() {{
                                attributeLanguage = "aut";
                                contentLanguage = "deleniti";
                                contentType = "impedit";
                                fetchSchedule = new DatafeedFetchSchedule() {{
                                    dayOfMonth = 304582L;
                                    fetchUrl = "fugit";
                                    hour = 882860L;
                                    minuteOfHour = 79522L;
                                    password = "non";
                                    paused = false;
                                    timeZone = "et";
                                    username = "Marianne.Osinski43";
                                    weekday = "autem";
                                }};
                                fileName = "nobis";
                                format = new DatafeedFormat() {{
                                    columnDelimiter = "quas";
                                    fileEncoding = "assumenda";
                                    quotingMode = "nulla";
                                }};
                                id = "voluptas";
                                intendedDestinations = new String[]{{
                                    add("quasi"),
                                    add("tempora"),
                                    add("numquam"),
                                }};
                                kind = "explicabo";
                                name = "Jose Kreiger";
                                targetCountry = "eius";
                                targets = new org.openapis.openapi.models.shared.DatafeedTarget[]{{
                                    add(new DatafeedTarget() {{
                                        country = "Kenya";
                                        excludedDestinations = new String[]{{
                                            add("fuga"),
                                            add("reprehenderit"),
                                            add("quidem"),
                                        }};
                                        includedDestinations = new String[]{{
                                            add("ut"),
                                            add("eum"),
                                            add("suscipit"),
                                            add("assumenda"),
                                        }};
                                        language = "eos";
                                    }}),
                                    add(new DatafeedTarget() {{
                                        country = "Lithuania";
                                        excludedDestinations = new String[]{{
                                            add("veritatis"),
                                            add("ipsa"),
                                            add("id"),
                                            add("quidem"),
                                        }};
                                        includedDestinations = new String[]{{
                                            add("quo"),
                                        }};
                                        language = "illum";
                                    }}),
                                }};
                            }};
                            datafeedId = "quo";
                            merchantId = "fuga";
                            method = "eius";
                        }}),
                        add(new DatafeedsCustomBatchRequestEntry() {{
                            batchId = 178367L;
                            datafeed = new Datafeed() {{
                                attributeLanguage = "voluptas";
                                contentLanguage = "ab";
                                contentType = "cupiditate";
                                fetchSchedule = new DatafeedFetchSchedule() {{
                                    dayOfMonth = 9688L;
                                    fetchUrl = "tempora";
                                    hour = 892050L;
                                    minuteOfHour = 370853L;
                                    password = "aspernatur";
                                    paused = false;
                                    timeZone = "sequi";
                                    username = "Orrin.Koelpin71";
                                    weekday = "quod";
                                }};
                                fileName = "dignissimos";
                                format = new DatafeedFormat() {{
                                    columnDelimiter = "inventore";
                                    fileEncoding = "nihil";
                                    quotingMode = "totam";
                                }};
                                id = "accusamus";
                                intendedDestinations = new String[]{{
                                    add("odio"),
                                    add("occaecati"),
                                }};
                                kind = "commodi";
                                name = "Todd Oberbrunner DDS";
                                targetCountry = "eum";
                                targets = new org.openapis.openapi.models.shared.DatafeedTarget[]{{
                                    add(new DatafeedTarget() {{
                                        country = "Lithuania";
                                        excludedDestinations = new String[]{{
                                            add("deleniti"),
                                        }};
                                        includedDestinations = new String[]{{
                                            add("fuga"),
                                        }};
                                        language = "mollitia";
                                    }}),
                                    add(new DatafeedTarget() {{
                                        country = "Faroe Islands";
                                        excludedDestinations = new String[]{{
                                            add("explicabo"),
                                            add("minima"),
                                            add("nisi"),
                                        }};
                                        includedDestinations = new String[]{{
                                            add("sapiente"),
                                        }};
                                        language = "consequuntur";
                                    }}),
                                    add(new DatafeedTarget() {{
                                        country = "Cocos (Keeling) Islands";
                                        excludedDestinations = new String[]{{
                                            add("saepe"),
                                        }};
                                        includedDestinations = new String[]{{
                                            add("atque"),
                                            add("et"),
                                            add("esse"),
                                        }};
                                        language = "eveniet";
                                    }}),
                                }};
                            }};
                            datafeedId = "accusamus";
                            merchantId = "veritatis";
                            method = "esse";
                        }}),
                        add(new DatafeedsCustomBatchRequestEntry() {{
                            batchId = 800379L;
                            datafeed = new Datafeed() {{
                                attributeLanguage = "nam";
                                contentLanguage = "vero";
                                contentType = "aliquid";
                                fetchSchedule = new DatafeedFetchSchedule() {{
                                    dayOfMonth = 93459L;
                                    fetchUrl = "saepe";
                                    hour = 426306L;
                                    minuteOfHour = 690025L;
                                    password = "molestiae";
                                    paused = false;
                                    timeZone = "rerum";
                                    username = "Kraig_Harber2";
                                    weekday = "culpa";
                                }};
                                fileName = "tempore";
                                format = new DatafeedFormat() {{
                                    columnDelimiter = "adipisci";
                                    fileEncoding = "cumque";
                                    quotingMode = "consequuntur";
                                }};
                                id = "consequatur";
                                intendedDestinations = new String[]{{
                                    add("quaerat"),
                                    add("sapiente"),
                                    add("consectetur"),
                                    add("esse"),
                                }};
                                kind = "blanditiis";
                                name = "Randal Stiedemann";
                                targetCountry = "quasi";
                                targets = new org.openapis.openapi.models.shared.DatafeedTarget[]{{
                                    add(new DatafeedTarget() {{
                                        country = "Nepal";
                                        excludedDestinations = new String[]{{
                                            add("pariatur"),
                                            add("possimus"),
                                            add("quia"),
                                        }};
                                        includedDestinations = new String[]{{
                                            add("asperiores"),
                                            add("facere"),
                                            add("veritatis"),
                                            add("consequuntur"),
                                        }};
                                        language = "quasi";
                                    }}),
                                    add(new DatafeedTarget() {{
                                        country = "Netherlands";
                                        excludedDestinations = new String[]{{
                                            add("aliquid"),
                                            add("tenetur"),
                                            add("quae"),
                                        }};
                                        includedDestinations = new String[]{{
                                            add("vel"),
                                            add("in"),
                                            add("eius"),
                                            add("libero"),
                                        }};
                                        language = "illum";
                                    }}),
                                    add(new DatafeedTarget() {{
                                        country = "Saint Barthelemy";
                                        excludedDestinations = new String[]{{
                                            add("aliquam"),
                                        }};
                                        includedDestinations = new String[]{{
                                            add("dicta"),
                                            add("ullam"),
                                            add("reprehenderit"),
                                            add("ullam"),
                                        }};
                                        language = "nisi";
                                    }}),
                                    add(new DatafeedTarget() {{
                                        country = "American Samoa";
                                        excludedDestinations = new String[]{{
                                            add("qui"),
                                            add("quibusdam"),
                                            add("ex"),
                                        }};
                                        includedDestinations = new String[]{{
                                            add("itaque"),
                                            add("dolorum"),
                                            add("architecto"),
                                        }};
                                        language = "omnis";
                                    }}),
                                }};
                            }};
                            datafeedId = "tenetur";
                            merchantId = "quasi";
                            method = "at";
                        }}),
                    }};
                }};;
                accessToken = "et";
                alt = AltEnum.MEDIA;
                callback = "ipsa";
                dryRun = false;
                fields = "minima";
                key = "veritatis";
                oauthToken = "consectetur";
                prettyPrint = false;
                quotaUser = "adipisci";
                uploadType = "iste";
                uploadProtocol = "temporibus";
            }};            

            ContentDatafeedsCustombatchResponse res = sdk.datafeeds.contentDatafeedsCustombatch(req, new ContentDatafeedsCustombatchSecurity("accusantium", "rem") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.datafeedsCustomBatchResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contentDatafeedsDelete

Deletes a datafeed configuration from your Merchant Center account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentDatafeedsDeleteRequest;
import org.openapis.openapi.models.operations.ContentDatafeedsDeleteResponse;
import org.openapis.openapi.models.operations.ContentDatafeedsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentDatafeedsDeleteRequest req = new ContentDatafeedsDeleteRequest("aut", "laudantium") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "mollitia";
                alt = AltEnum.JSON;
                callback = "corrupti";
                dryRun = false;
                fields = "non";
                key = "voluptatem";
                oauthToken = "dolor";
                prettyPrint = false;
                quotaUser = "occaecati";
                uploadType = "numquam";
                uploadProtocol = "impedit";
            }};            

            ContentDatafeedsDeleteResponse res = sdk.datafeeds.contentDatafeedsDelete(req, new ContentDatafeedsDeleteSecurity("explicabo", "voluptas") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contentDatafeedsFetchnow

Invokes a fetch for the datafeed in your Merchant Center account. If you need to call this method more than once per day, we recommend you use the Products service to update your product data.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentDatafeedsFetchnowRequest;
import org.openapis.openapi.models.operations.ContentDatafeedsFetchnowResponse;
import org.openapis.openapi.models.operations.ContentDatafeedsFetchnowSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentDatafeedsFetchnowRequest req = new ContentDatafeedsFetchnowRequest("aut", "dignissimos") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "maiores";
                alt = AltEnum.MEDIA;
                callback = "velit";
                dryRun = false;
                fields = "voluptatibus";
                key = "voluptas";
                oauthToken = "asperiores";
                prettyPrint = false;
                quotaUser = "aperiam";
                uploadType = "ea";
                uploadProtocol = "quaerat";
            }};            

            ContentDatafeedsFetchnowResponse res = sdk.datafeeds.contentDatafeedsFetchnow(req, new ContentDatafeedsFetchnowSecurity("consequuntur", "repellendus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.datafeedsFetchNowResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contentDatafeedsGet

Retrieves a datafeed configuration from your Merchant Center account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentDatafeedsGetRequest;
import org.openapis.openapi.models.operations.ContentDatafeedsGetResponse;
import org.openapis.openapi.models.operations.ContentDatafeedsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentDatafeedsGetRequest req = new ContentDatafeedsGetRequest("officia", "maxime") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "officia";
                alt = AltEnum.PROTO;
                callback = "nemo";
                fields = "quae";
                key = "quaerat";
                oauthToken = "porro";
                prettyPrint = false;
                quotaUser = "quod";
                uploadType = "labore";
                uploadProtocol = "ab";
            }};            

            ContentDatafeedsGetResponse res = sdk.datafeeds.contentDatafeedsGet(req, new ContentDatafeedsGetSecurity("adipisci", "fuga") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.datafeed != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contentDatafeedsInsert

Registers a datafeed configuration with your Merchant Center account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentDatafeedsInsertRequest;
import org.openapis.openapi.models.operations.ContentDatafeedsInsertResponse;
import org.openapis.openapi.models.operations.ContentDatafeedsInsertSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Datafeed;
import org.openapis.openapi.models.shared.DatafeedFetchSchedule;
import org.openapis.openapi.models.shared.DatafeedFormat;
import org.openapis.openapi.models.shared.DatafeedTarget;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentDatafeedsInsertRequest req = new ContentDatafeedsInsertRequest("id") {{
                dollarXgafv = XgafvEnum.ONE;
                datafeed = new Datafeed() {{
                    attributeLanguage = "velit";
                    contentLanguage = "culpa";
                    contentType = "est";
                    fetchSchedule = new DatafeedFetchSchedule() {{
                        dayOfMonth = 926880L;
                        fetchUrl = "totam";
                        hour = 853940L;
                        minuteOfHour = 424089L;
                        password = "ducimus";
                        paused = false;
                        timeZone = "quos";
                        username = "Hilario_Grant73";
                        weekday = "commodi";
                    }};;
                    fileName = "in";
                    format = new DatafeedFormat() {{
                        columnDelimiter = "corporis";
                        fileEncoding = "reiciendis";
                        quotingMode = "assumenda";
                    }};;
                    id = "nemo";
                    intendedDestinations = new String[]{{
                        add("aliquid"),
                        add("aperiam"),
                        add("cum"),
                        add("consectetur"),
                    }};
                    kind = "in";
                    name = "Lila Schultz";
                    targetCountry = "suscipit";
                    targets = new org.openapis.openapi.models.shared.DatafeedTarget[]{{
                        add(new DatafeedTarget() {{
                            country = "Peru";
                            excludedDestinations = new String[]{{
                                add("necessitatibus"),
                                add("dolore"),
                                add("sunt"),
                                add("asperiores"),
                            }};
                            includedDestinations = new String[]{{
                                add("non"),
                            }};
                            language = "amet";
                        }}),
                        add(new DatafeedTarget() {{
                            country = "Bolivia";
                            excludedDestinations = new String[]{{
                                add("a"),
                                add("debitis"),
                            }};
                            includedDestinations = new String[]{{
                                add("corporis"),
                            }};
                            language = "harum";
                        }}),
                        add(new DatafeedTarget() {{
                            country = "Holy See (Vatican City State)";
                            excludedDestinations = new String[]{{
                                add("voluptates"),
                            }};
                            includedDestinations = new String[]{{
                                add("vitae"),
                                add("accusamus"),
                                add("similique"),
                            }};
                            language = "tempora";
                        }}),
                        add(new DatafeedTarget() {{
                            country = "Bulgaria";
                            excludedDestinations = new String[]{{
                                add("voluptas"),
                                add("voluptas"),
                            }};
                            includedDestinations = new String[]{{
                                add("nobis"),
                                add("dolorum"),
                            }};
                            language = "adipisci";
                        }}),
                    }};
                }};;
                accessToken = "minus";
                alt = AltEnum.JSON;
                callback = "blanditiis";
                dryRun = false;
                fields = "in";
                key = "dolore";
                oauthToken = "aliquam";
                prettyPrint = false;
                quotaUser = "officiis";
                uploadType = "temporibus";
                uploadProtocol = "ullam";
            }};            

            ContentDatafeedsInsertResponse res = sdk.datafeeds.contentDatafeedsInsert(req, new ContentDatafeedsInsertSecurity("adipisci", "cum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.datafeed != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contentDatafeedsList

Lists the configurations for datafeeds in your Merchant Center account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentDatafeedsListRequest;
import org.openapis.openapi.models.operations.ContentDatafeedsListResponse;
import org.openapis.openapi.models.operations.ContentDatafeedsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentDatafeedsListRequest req = new ContentDatafeedsListRequest("blanditiis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "hic";
                alt = AltEnum.JSON;
                callback = "culpa";
                fields = "corrupti";
                key = "pariatur";
                maxResults = 519643L;
                oauthToken = "hic";
                pageToken = "exercitationem";
                prettyPrint = false;
                quotaUser = "nobis";
                uploadType = "sit";
                uploadProtocol = "rerum";
            }};            

            ContentDatafeedsListResponse res = sdk.datafeeds.contentDatafeedsList(req, new ContentDatafeedsListSecurity("sed", "reiciendis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.datafeedsListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contentDatafeedsUpdate

Updates a datafeed configuration of your Merchant Center account. Any fields that are not provided are deleted from the resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentDatafeedsUpdateRequest;
import org.openapis.openapi.models.operations.ContentDatafeedsUpdateResponse;
import org.openapis.openapi.models.operations.ContentDatafeedsUpdateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Datafeed;
import org.openapis.openapi.models.shared.DatafeedFetchSchedule;
import org.openapis.openapi.models.shared.DatafeedFormat;
import org.openapis.openapi.models.shared.DatafeedTarget;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentDatafeedsUpdateRequest req = new ContentDatafeedsUpdateRequest("explicabo", "asperiores") {{
                dollarXgafv = XgafvEnum.TWO;
                datafeed = new Datafeed() {{
                    attributeLanguage = "voluptate";
                    contentLanguage = "expedita";
                    contentType = "ab";
                    fetchSchedule = new DatafeedFetchSchedule() {{
                        dayOfMonth = 611749L;
                        fetchUrl = "dolore";
                        hour = 671907L;
                        minuteOfHour = 152354L;
                        password = "in";
                        paused = false;
                        timeZone = "commodi";
                        username = "Mauricio_Cole";
                        weekday = "architecto";
                    }};;
                    fileName = "suscipit";
                    format = new DatafeedFormat() {{
                        columnDelimiter = "sapiente";
                        fileEncoding = "debitis";
                        quotingMode = "illo";
                    }};;
                    id = "reiciendis";
                    intendedDestinations = new String[]{{
                        add("corrupti"),
                    }};
                    kind = "maiores";
                    name = "Tammy Medhurst";
                    targetCountry = "ipsum";
                    targets = new org.openapis.openapi.models.shared.DatafeedTarget[]{{
                        add(new DatafeedTarget() {{
                            country = "Moldova";
                            excludedDestinations = new String[]{{
                                add("voluptatibus"),
                                add("tempora"),
                                add("tempora"),
                            }};
                            includedDestinations = new String[]{{
                                add("reiciendis"),
                                add("ex"),
                            }};
                            language = "sit";
                        }}),
                        add(new DatafeedTarget() {{
                            country = "Ecuador";
                            excludedDestinations = new String[]{{
                                add("praesentium"),
                                add("facilis"),
                                add("quaerat"),
                                add("incidunt"),
                            }};
                            includedDestinations = new String[]{{
                                add("debitis"),
                                add("rem"),
                            }};
                            language = "sit";
                        }}),
                    }};
                }};;
                accessToken = "nobis";
                alt = AltEnum.MEDIA;
                callback = "veniam";
                dryRun = false;
                fields = "minima";
                key = "recusandae";
                oauthToken = "reiciendis";
                prettyPrint = false;
                quotaUser = "nulla";
                uploadType = "magni";
                uploadProtocol = "aperiam";
            }};            

            ContentDatafeedsUpdateResponse res = sdk.datafeeds.contentDatafeedsUpdate(req, new ContentDatafeedsUpdateSecurity("saepe", "numquam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.datafeed != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
