# returnaddress

### Available Operations

* [contentReturnaddressCustombatch](#contentreturnaddresscustombatch) - Batches multiple return address related calls in a single request.
* [contentReturnaddressDelete](#contentreturnaddressdelete) - Deletes a return address for the given Merchant Center account.
* [contentReturnaddressGet](#contentreturnaddressget) - Gets a return address of the Merchant Center account.
* [contentReturnaddressInsert](#contentreturnaddressinsert) - Inserts a return address for the Merchant Center account.
* [contentReturnaddressList](#contentreturnaddresslist) - Lists the return addresses of the Merchant Center account.

## contentReturnaddressCustombatch

Batches multiple return address related calls in a single request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentReturnaddressCustombatchRequest;
import org.openapis.openapi.models.operations.ContentReturnaddressCustombatchResponse;
import org.openapis.openapi.models.operations.ContentReturnaddressCustombatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ReturnAddress;
import org.openapis.openapi.models.shared.ReturnAddressAddress;
import org.openapis.openapi.models.shared.ReturnaddressCustomBatchRequest;
import org.openapis.openapi.models.shared.ReturnaddressCustomBatchRequestEntry;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentReturnaddressCustombatchRequest req = new ContentReturnaddressCustombatchRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                returnaddressCustomBatchRequest = new ReturnaddressCustomBatchRequest() {{
                    entries = new org.openapis.openapi.models.shared.ReturnaddressCustomBatchRequestEntry[]{{
                        add(new ReturnaddressCustomBatchRequestEntry() {{
                            batchId = 149376L;
                            merchantId = "quam";
                            method = "unde";
                            returnAddress = new ReturnAddress() {{
                                address = new ReturnAddressAddress() {{
                                    country = "Panama";
                                    locality = "sequi";
                                    postalCode = "05386-6513";
                                    recipientName = "quam";
                                    region = "repellendus";
                                    streetAddress = new String[]{{
                                        add("incidunt"),
                                    }};
                                }};
                                country = "Zambia";
                                kind = "eius";
                                label = "ipsa";
                                phoneNumber = "quas";
                                returnAddressId = "incidunt";
                            }};
                            returnAddressId = "iusto";
                        }}),
                        add(new ReturnaddressCustomBatchRequestEntry() {{
                            batchId = 674166L;
                            merchantId = "in";
                            method = "numquam";
                            returnAddress = new ReturnAddress() {{
                                address = new ReturnAddressAddress() {{
                                    country = "Cape Verde";
                                    locality = "repellendus";
                                    postalCode = "22538-7898";
                                    recipientName = "impedit";
                                    region = "reiciendis";
                                    streetAddress = new String[]{{
                                        add("tempore"),
                                        add("provident"),
                                    }};
                                }};
                                country = "Mongolia";
                                kind = "soluta";
                                label = "maxime";
                                phoneNumber = "commodi";
                                returnAddressId = "consectetur";
                            }};
                            returnAddressId = "corporis";
                        }}),
                        add(new ReturnaddressCustomBatchRequestEntry() {{
                            batchId = 391970L;
                            merchantId = "aspernatur";
                            method = "eveniet";
                            returnAddress = new ReturnAddress() {{
                                address = new ReturnAddressAddress() {{
                                    country = "Russian Federation";
                                    locality = "asperiores";
                                    postalCode = "93371-6270";
                                    recipientName = "ea";
                                    region = "consequatur";
                                    streetAddress = new String[]{{
                                        add("accusantium"),
                                        add("ea"),
                                        add("laborum"),
                                    }};
                                }};
                                country = "Belize";
                                kind = "fugit";
                                label = "quos";
                                phoneNumber = "molestiae";
                                returnAddressId = "voluptate";
                            }};
                            returnAddressId = "autem";
                        }}),
                        add(new ReturnaddressCustomBatchRequestEntry() {{
                            batchId = 252880L;
                            merchantId = "voluptates";
                            method = "debitis";
                            returnAddress = new ReturnAddress() {{
                                address = new ReturnAddressAddress() {{
                                    country = "United Arab Emirates";
                                    locality = "suscipit";
                                    postalCode = "07384-9857";
                                    recipientName = "in";
                                    region = "nesciunt";
                                    streetAddress = new String[]{{
                                        add("temporibus"),
                                        add("eum"),
                                        add("non"),
                                        add("ut"),
                                    }};
                                }};
                                country = "Grenada";
                                kind = "dignissimos";
                                label = "illo";
                                phoneNumber = "corporis";
                                returnAddressId = "ipsa";
                            }};
                            returnAddressId = "occaecati";
                        }}),
                    }};
                }};;
                accessToken = "dolorum";
                alt = AltEnum.MEDIA;
                callback = "recusandae";
                fields = "deleniti";
                key = "dignissimos";
                oauthToken = "doloremque";
                prettyPrint = false;
                quotaUser = "quibusdam";
                uploadType = "adipisci";
                uploadProtocol = "minus";
            }};            

            ContentReturnaddressCustombatchResponse res = sdk.returnaddress.contentReturnaddressCustombatch(req, new ContentReturnaddressCustombatchSecurity("veniam", "id") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.returnaddressCustomBatchResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contentReturnaddressDelete

Deletes a return address for the given Merchant Center account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentReturnaddressDeleteRequest;
import org.openapis.openapi.models.operations.ContentReturnaddressDeleteResponse;
import org.openapis.openapi.models.operations.ContentReturnaddressDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentReturnaddressDeleteRequest req = new ContentReturnaddressDeleteRequest("architecto", "maiores") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quod";
                alt = AltEnum.JSON;
                callback = "incidunt";
                fields = "fugit";
                key = "quisquam";
                oauthToken = "odio";
                prettyPrint = false;
                quotaUser = "quidem";
                uploadType = "iure";
                uploadProtocol = "aliquid";
            }};            

            ContentReturnaddressDeleteResponse res = sdk.returnaddress.contentReturnaddressDelete(req, new ContentReturnaddressDeleteSecurity("culpa", "illo") {{
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

## contentReturnaddressGet

Gets a return address of the Merchant Center account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentReturnaddressGetRequest;
import org.openapis.openapi.models.operations.ContentReturnaddressGetResponse;
import org.openapis.openapi.models.operations.ContentReturnaddressGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentReturnaddressGetRequest req = new ContentReturnaddressGetRequest("reiciendis", "ipsum") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quod";
                alt = AltEnum.MEDIA;
                callback = "non";
                fields = "facere";
                key = "repellat";
                oauthToken = "exercitationem";
                prettyPrint = false;
                quotaUser = "quidem";
                uploadType = "ea";
                uploadProtocol = "molestiae";
            }};            

            ContentReturnaddressGetResponse res = sdk.returnaddress.contentReturnaddressGet(req, new ContentReturnaddressGetSecurity("vitae", "excepturi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.returnAddress != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contentReturnaddressInsert

Inserts a return address for the Merchant Center account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentReturnaddressInsertRequest;
import org.openapis.openapi.models.operations.ContentReturnaddressInsertResponse;
import org.openapis.openapi.models.operations.ContentReturnaddressInsertSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ReturnAddress;
import org.openapis.openapi.models.shared.ReturnAddressAddress;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentReturnaddressInsertRequest req = new ContentReturnaddressInsertRequest("voluptatum") {{
                dollarXgafv = XgafvEnum.TWO;
                returnAddress = new ReturnAddress() {{
                    address = new ReturnAddressAddress() {{
                        country = "Australia";
                        locality = "reiciendis";
                        postalCode = "16277";
                        recipientName = "modi";
                        region = "adipisci";
                        streetAddress = new String[]{{
                            add("at"),
                            add("rem"),
                            add("exercitationem"),
                        }};
                    }};;
                    country = "Romania";
                    kind = "eos";
                    label = "laboriosam";
                    phoneNumber = "aperiam";
                    returnAddressId = "minima";
                }};;
                accessToken = "perspiciatis";
                alt = AltEnum.JSON;
                callback = "assumenda";
                fields = "reprehenderit";
                key = "tempora";
                oauthToken = "ad";
                prettyPrint = false;
                quotaUser = "voluptates";
                uploadType = "sequi";
                uploadProtocol = "eligendi";
            }};            

            ContentReturnaddressInsertResponse res = sdk.returnaddress.contentReturnaddressInsert(req, new ContentReturnaddressInsertSecurity("consequuntur", "quae") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.returnAddress != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contentReturnaddressList

Lists the return addresses of the Merchant Center account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentReturnaddressListRequest;
import org.openapis.openapi.models.operations.ContentReturnaddressListResponse;
import org.openapis.openapi.models.operations.ContentReturnaddressListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentReturnaddressListRequest req = new ContentReturnaddressListRequest("veniam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "minus";
                alt = AltEnum.MEDIA;
                callback = "porro";
                country = "Cook Islands";
                fields = "maiores";
                key = "veniam";
                maxResults = 419685L;
                oauthToken = "esse";
                pageToken = "officiis";
                prettyPrint = false;
                quotaUser = "aperiam";
                uploadType = "itaque";
                uploadProtocol = "sed";
            }};            

            ContentReturnaddressListResponse res = sdk.returnaddress.contentReturnaddressList(req, new ContentReturnaddressListSecurity("corporis", "consequuntur") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.returnaddressListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
