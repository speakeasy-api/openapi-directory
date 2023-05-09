# datafeeds

### Available Operations

* [contentDatafeedsCustombatch](#contentdatafeedscustombatch) - Deletes, fetches, gets, inserts and updates multiple datafeeds in a single request.
* [contentDatafeedsDelete](#contentdatafeedsdelete) - Deletes a datafeed configuration from your Merchant Center account.
* [contentDatafeedsFetchnow](#contentdatafeedsfetchnow) - Invokes a fetch for the datafeed in your Merchant Center account. If you need to call this method more than once per day, we recommend you use the [Products service](https://developers.google.com/shopping-content/reference/rest/v2.1/products) to update your product data.
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
                dollarXgafv = XgafvEnum.ONE;
                datafeedsCustomBatchRequest = new DatafeedsCustomBatchRequest() {{
                    entries = new org.openapis.openapi.models.shared.DatafeedsCustomBatchRequestEntry[]{{
                        add(new DatafeedsCustomBatchRequestEntry() {{
                            batchId = 58870L;
                            datafeed = new Datafeed() {{
                                attributeLanguage = "laborum";
                                contentType = "sunt";
                                fetchSchedule = new DatafeedFetchSchedule() {{
                                    dayOfMonth = 344718L;
                                    fetchUrl = "fugiat";
                                    hour = 713767L;
                                    minuteOfHour = 399667L;
                                    password = "officia";
                                    paused = false;
                                    timeZone = "suscipit";
                                    username = "Green.Bahringer";
                                    weekday = "iste";
                                }};
                                fileName = "id";
                                format = new DatafeedFormat() {{
                                    columnDelimiter = "ab";
                                    fileEncoding = "error";
                                    quotingMode = "possimus";
                                }};
                                id = "voluptates";
                                kind = "mollitia";
                                name = "Wm Hane";
                                targets = new org.openapis.openapi.models.shared.DatafeedTarget[]{{
                                    add(new DatafeedTarget() {{
                                        country = "Spain";
                                        excludedDestinations = new String[]{{
                                            add("quo"),
                                            add("ex"),
                                        }};
                                        feedLabel = "ut";
                                        includedDestinations = new String[]{{
                                            add("expedita"),
                                            add("voluptatem"),
                                        }};
                                        language = "molestias";
                                        targetCountries = new String[]{{
                                            add("aliquid"),
                                            add("beatae"),
                                            add("voluptatum"),
                                        }};
                                    }}),
                                }};
                            }};
                            datafeedId = "omnis";
                            merchantId = "veritatis";
                            method = "rerum";
                        }}),
                        add(new DatafeedsCustomBatchRequestEntry() {{
                            batchId = 665678L;
                            datafeed = new Datafeed() {{
                                attributeLanguage = "culpa";
                                contentType = "voluptatem";
                                fetchSchedule = new DatafeedFetchSchedule() {{
                                    dayOfMonth = 959143L;
                                    fetchUrl = "officiis";
                                    hour = 103298L;
                                    minuteOfHour = 682119L;
                                    password = "pariatur";
                                    paused = false;
                                    timeZone = "debitis";
                                    username = "Alessia_Abbott";
                                    weekday = "ex";
                                }};
                                fileName = "sapiente";
                                format = new DatafeedFormat() {{
                                    columnDelimiter = "rem";
                                    fileEncoding = "minus";
                                    quotingMode = "nemo";
                                }};
                                id = "asperiores";
                                kind = "ratione";
                                name = "Dorothy Stanton";
                                targets = new org.openapis.openapi.models.shared.DatafeedTarget[]{{
                                    add(new DatafeedTarget() {{
                                        country = "Puerto Rico";
                                        excludedDestinations = new String[]{{
                                            add("culpa"),
                                            add("dolor"),
                                        }};
                                        feedLabel = "aliquam";
                                        includedDestinations = new String[]{{
                                            add("deleniti"),
                                        }};
                                        language = "veritatis";
                                        targetCountries = new String[]{{
                                            add("dolor"),
                                            add("consequatur"),
                                        }};
                                    }}),
                                    add(new DatafeedTarget() {{
                                        country = "Bhutan";
                                        excludedDestinations = new String[]{{
                                            add("modi"),
                                        }};
                                        feedLabel = "fugit";
                                        includedDestinations = new String[]{{
                                            add("laudantium"),
                                        }};
                                        language = "quae";
                                        targetCountries = new String[]{{
                                            add("fugiat"),
                                        }};
                                    }}),
                                    add(new DatafeedTarget() {{
                                        country = "Guyana";
                                        excludedDestinations = new String[]{{
                                            add("ipsa"),
                                        }};
                                        feedLabel = "quas";
                                        includedDestinations = new String[]{{
                                            add("impedit"),
                                            add("officiis"),
                                            add("esse"),
                                            add("necessitatibus"),
                                        }};
                                        language = "sed";
                                        targetCountries = new String[]{{
                                            add("nesciunt"),
                                            add("expedita"),
                                        }};
                                    }}),
                                    add(new DatafeedTarget() {{
                                        country = "Italy";
                                        excludedDestinations = new String[]{{
                                            add("voluptatum"),
                                            add("magnam"),
                                        }};
                                        feedLabel = "exercitationem";
                                        includedDestinations = new String[]{{
                                            add("porro"),
                                        }};
                                        language = "autem";
                                        targetCountries = new String[]{{
                                            add("laboriosam"),
                                            add("recusandae"),
                                            add("consequuntur"),
                                            add("voluptatem"),
                                        }};
                                    }}),
                                }};
                            }};
                            datafeedId = "exercitationem";
                            merchantId = "necessitatibus";
                            method = "quasi";
                        }}),
                    }};
                }};;
                accessToken = "nisi";
                alt = AltEnum.PROTO;
                callback = "vero";
                fields = "est";
                key = "harum";
                oauthToken = "sequi";
                prettyPrint = false;
                quotaUser = "doloribus";
                uploadType = "repudiandae";
                uploadProtocol = "optio";
            }};            

            ContentDatafeedsCustombatchResponse res = sdk.datafeeds.contentDatafeedsCustombatch(req, new ContentDatafeedsCustombatchSecurity("occaecati", "nemo") {{
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

            ContentDatafeedsDeleteRequest req = new ContentDatafeedsDeleteRequest("voluptate", "blanditiis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "voluptas";
                alt = AltEnum.JSON;
                callback = "nemo";
                fields = "quos";
                key = "eius";
                oauthToken = "aspernatur";
                prettyPrint = false;
                quotaUser = "ducimus";
                uploadType = "nesciunt";
                uploadProtocol = "fuga";
            }};            

            ContentDatafeedsDeleteResponse res = sdk.datafeeds.contentDatafeedsDelete(req, new ContentDatafeedsDeleteSecurity("laudantium", "incidunt") {{
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

Invokes a fetch for the datafeed in your Merchant Center account. If you need to call this method more than once per day, we recommend you use the [Products service](https://developers.google.com/shopping-content/reference/rest/v2.1/products) to update your product data.

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

            ContentDatafeedsFetchnowRequest req = new ContentDatafeedsFetchnowRequest("quasi", "rem") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "dicta";
                alt = AltEnum.MEDIA;
                callback = "consequuntur";
                fields = "consectetur";
                key = "aperiam";
                oauthToken = "cupiditate";
                prettyPrint = false;
                quotaUser = "reiciendis";
                uploadType = "soluta";
                uploadProtocol = "alias";
            }};            

            ContentDatafeedsFetchnowResponse res = sdk.datafeeds.contentDatafeedsFetchnow(req, new ContentDatafeedsFetchnowSecurity("omnis", "eos") {{
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

            ContentDatafeedsGetRequest req = new ContentDatafeedsGetRequest("occaecati", "iste") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "inventore";
                alt = AltEnum.PROTO;
                callback = "accusamus";
                fields = "voluptatibus";
                key = "distinctio";
                oauthToken = "omnis";
                prettyPrint = false;
                quotaUser = "delectus";
                uploadType = "minima";
                uploadProtocol = "praesentium";
            }};            

            ContentDatafeedsGetResponse res = sdk.datafeeds.contentDatafeedsGet(req, new ContentDatafeedsGetSecurity("maxime", "magnam") {{
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

            ContentDatafeedsInsertRequest req = new ContentDatafeedsInsertRequest("temporibus") {{
                dollarXgafv = XgafvEnum.TWO;
                datafeed = new Datafeed() {{
                    attributeLanguage = "commodi";
                    contentType = "itaque";
                    fetchSchedule = new DatafeedFetchSchedule() {{
                        dayOfMonth = 415608L;
                        fetchUrl = "totam";
                        hour = 936618L;
                        minuteOfHour = 267207L;
                        password = "nam";
                        paused = false;
                        timeZone = "vero";
                        username = "Alexane.Hilpert";
                        weekday = "quasi";
                    }};;
                    fileName = "non";
                    format = new DatafeedFormat() {{
                        columnDelimiter = "maiores";
                        fileEncoding = "enim";
                        quotingMode = "sint";
                    }};;
                    id = "nulla";
                    kind = "deserunt";
                    name = "Ida Kilback";
                    targets = new org.openapis.openapi.models.shared.DatafeedTarget[]{{
                        add(new DatafeedTarget() {{
                            country = "Tanzania";
                            excludedDestinations = new String[]{{
                                add("hic"),
                                add("necessitatibus"),
                                add("asperiores"),
                                add("ex"),
                            }};
                            feedLabel = "voluptas";
                            includedDestinations = new String[]{{
                                add("delectus"),
                                add("quae"),
                                add("minus"),
                                add("fuga"),
                            }};
                            language = "laborum";
                            targetCountries = new String[]{{
                                add("velit"),
                            }};
                        }}),
                        add(new DatafeedTarget() {{
                            country = "Maldives";
                            excludedDestinations = new String[]{{
                                add("impedit"),
                            }};
                            feedLabel = "magni";
                            includedDestinations = new String[]{{
                                add("repudiandae"),
                                add("nam"),
                                add("dolore"),
                            }};
                            language = "iusto";
                            targetCountries = new String[]{{
                                add("sequi"),
                                add("dignissimos"),
                            }};
                        }}),
                        add(new DatafeedTarget() {{
                            country = "Costa Rica";
                            excludedDestinations = new String[]{{
                                add("deleniti"),
                                add("quibusdam"),
                                add("iure"),
                                add("odit"),
                            }};
                            feedLabel = "voluptatibus";
                            includedDestinations = new String[]{{
                                add("magnam"),
                                add("quibusdam"),
                            }};
                            language = "inventore";
                            targetCountries = new String[]{{
                                add("libero"),
                                add("architecto"),
                                add("voluptatibus"),
                                add("quia"),
                            }};
                        }}),
                    }};
                }};;
                accessToken = "porro";
                alt = AltEnum.JSON;
                callback = "velit";
                fields = "illo";
                key = "accusantium";
                oauthToken = "vel";
                prettyPrint = false;
                quotaUser = "ea";
                uploadType = "beatae";
                uploadProtocol = "vero";
            }};            

            ContentDatafeedsInsertResponse res = sdk.datafeeds.contentDatafeedsInsert(req, new ContentDatafeedsInsertSecurity("excepturi", "eum") {{
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

            ContentDatafeedsListRequest req = new ContentDatafeedsListRequest("velit") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "perspiciatis";
                alt = AltEnum.PROTO;
                callback = "dicta";
                fields = "impedit";
                key = "voluptatibus";
                maxResults = 610987L;
                oauthToken = "itaque";
                pageToken = "alias";
                prettyPrint = false;
                quotaUser = "nisi";
                uploadType = "itaque";
                uploadProtocol = "velit";
            }};            

            ContentDatafeedsListResponse res = sdk.datafeeds.contentDatafeedsList(req, new ContentDatafeedsListSecurity("laborum", "non") {{
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

            ContentDatafeedsUpdateRequest req = new ContentDatafeedsUpdateRequest("dolor", "iusto") {{
                dollarXgafv = XgafvEnum.ONE;
                datafeed = new Datafeed() {{
                    attributeLanguage = "doloremque";
                    contentType = "consequatur";
                    fetchSchedule = new DatafeedFetchSchedule() {{
                        dayOfMonth = 639705L;
                        fetchUrl = "recusandae";
                        hour = 408303L;
                        minuteOfHour = 693153L;
                        password = "voluptas";
                        paused = false;
                        timeZone = "facilis";
                        username = "Raleigh_Mertz95";
                        weekday = "voluptate";
                    }};;
                    fileName = "ullam";
                    format = new DatafeedFormat() {{
                        columnDelimiter = "unde";
                        fileEncoding = "necessitatibus";
                        quotingMode = "animi";
                    }};;
                    id = "impedit";
                    kind = "ipsam";
                    name = "Jodi Mueller";
                    targets = new org.openapis.openapi.models.shared.DatafeedTarget[]{{
                        add(new DatafeedTarget() {{
                            country = "Tajikistan";
                            excludedDestinations = new String[]{{
                                add("vitae"),
                            }};
                            feedLabel = "inventore";
                            includedDestinations = new String[]{{
                                add("ad"),
                            }};
                            language = "qui";
                            targetCountries = new String[]{{
                                add("ex"),
                                add("nemo"),
                                add("soluta"),
                            }};
                        }}),
                    }};
                }};;
                accessToken = "libero";
                alt = AltEnum.MEDIA;
                callback = "dolorum";
                fields = "odio";
                key = "fugit";
                oauthToken = "alias";
                prettyPrint = false;
                quotaUser = "magni";
                uploadType = "vel";
                uploadProtocol = "quae";
            }};            

            ContentDatafeedsUpdateResponse res = sdk.datafeeds.contentDatafeedsUpdate(req, new ContentDatafeedsUpdateSecurity("quae", "modi") {{
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
