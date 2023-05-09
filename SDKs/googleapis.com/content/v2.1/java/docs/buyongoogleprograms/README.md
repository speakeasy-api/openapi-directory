# buyongoogleprograms

### Available Operations

* [contentBuyongoogleprogramsActivate](#contentbuyongoogleprogramsactivate) - Reactivates the BoG program in your Merchant Center account. Moves the program to the active state when allowed, for example, when paused. This method is only available to selected merchants.
* [contentBuyongoogleprogramsGet](#contentbuyongoogleprogramsget) - Retrieves a status of the BoG program for your Merchant Center account.
* [contentBuyongoogleprogramsOnboard](#contentbuyongoogleprogramsonboard) - Onboards the BoG program in your Merchant Center account. By using this method, you agree to the [Terms of Service](https://merchants.google.com/mc/termsofservice/transactions/US/latest). Calling this method is only possible if the authenticated account is the same as the merchant id in the request. Calling this method multiple times will only accept Terms of Service if the latest version is not currently signed.
* [contentBuyongoogleprogramsPatch](#contentbuyongoogleprogramspatch) - Updates the status of the BoG program for your Merchant Center account.
* [contentBuyongoogleprogramsPause](#contentbuyongoogleprogramspause) - Pauses the BoG program in your Merchant Center account. This method is only available to selected merchants.
* [contentBuyongoogleprogramsRequestreview](#contentbuyongoogleprogramsrequestreview) - Requests review and then activates the BoG program in your Merchant Center account for the first time. Moves the program to the REVIEW_PENDING state. This method is only available to selected merchants.

## contentBuyongoogleprogramsActivate

Reactivates the BoG program in your Merchant Center account. Moves the program to the active state when allowed, for example, when paused. This method is only available to selected merchants.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentBuyongoogleprogramsActivateRequest;
import org.openapis.openapi.models.operations.ContentBuyongoogleprogramsActivateResponse;
import org.openapis.openapi.models.operations.ContentBuyongoogleprogramsActivateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentBuyongoogleprogramsActivateRequest req = new ContentBuyongoogleprogramsActivateRequest("blanditiis", "in") {{
                dollarXgafv = XgafvEnum.ONE;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("officiis", "temporibus");
                    put("ullam", "adipisci");
                }};
                accessToken = "cum";
                alt = AltEnum.MEDIA;
                callback = "quas";
                fields = "hic";
                key = "nesciunt";
                oauthToken = "culpa";
                prettyPrint = false;
                quotaUser = "corrupti";
                uploadType = "pariatur";
                uploadProtocol = "totam";
            }};            

            ContentBuyongoogleprogramsActivateResponse res = sdk.buyongoogleprograms.contentBuyongoogleprogramsActivate(req, new ContentBuyongoogleprogramsActivateSecurity("hic", "exercitationem") {{
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

## contentBuyongoogleprogramsGet

Retrieves a status of the BoG program for your Merchant Center account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentBuyongoogleprogramsGetRequest;
import org.openapis.openapi.models.operations.ContentBuyongoogleprogramsGetResponse;
import org.openapis.openapi.models.operations.ContentBuyongoogleprogramsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentBuyongoogleprogramsGetRequest req = new ContentBuyongoogleprogramsGetRequest("nobis", "sit") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "sed";
                alt = AltEnum.PROTO;
                callback = "explicabo";
                fields = "asperiores";
                key = "facilis";
                oauthToken = "voluptate";
                prettyPrint = false;
                quotaUser = "expedita";
                uploadType = "ab";
                uploadProtocol = "iste";
            }};            

            ContentBuyongoogleprogramsGetResponse res = sdk.buyongoogleprograms.contentBuyongoogleprogramsGet(req, new ContentBuyongoogleprogramsGetSecurity("dolore", "laborum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.buyOnGoogleProgramStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contentBuyongoogleprogramsOnboard

Onboards the BoG program in your Merchant Center account. By using this method, you agree to the [Terms of Service](https://merchants.google.com/mc/termsofservice/transactions/US/latest). Calling this method is only possible if the authenticated account is the same as the merchant id in the request. Calling this method multiple times will only accept Terms of Service if the latest version is not currently signed.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentBuyongoogleprogramsOnboardRequest;
import org.openapis.openapi.models.operations.ContentBuyongoogleprogramsOnboardResponse;
import org.openapis.openapi.models.operations.ContentBuyongoogleprogramsOnboardSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.OnboardBuyOnGoogleProgramRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentBuyongoogleprogramsOnboardRequest req = new ContentBuyongoogleprogramsOnboardRequest("sed", "in") {{
                dollarXgafv = XgafvEnum.ONE;
                onboardBuyOnGoogleProgramRequest = new OnboardBuyOnGoogleProgramRequest() {{
                    customerServiceEmail = "quidem";
                }};;
                accessToken = "explicabo";
                alt = AltEnum.MEDIA;
                callback = "unde";
                fields = "architecto";
                key = "suscipit";
                oauthToken = "sapiente";
                prettyPrint = false;
                quotaUser = "debitis";
                uploadType = "illo";
                uploadProtocol = "reiciendis";
            }};            

            ContentBuyongoogleprogramsOnboardResponse res = sdk.buyongoogleprograms.contentBuyongoogleprogramsOnboard(req, new ContentBuyongoogleprogramsOnboardSecurity("perferendis", "corrupti") {{
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

## contentBuyongoogleprogramsPatch

Updates the status of the BoG program for your Merchant Center account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentBuyongoogleprogramsPatchRequest;
import org.openapis.openapi.models.operations.ContentBuyongoogleprogramsPatchResponse;
import org.openapis.openapi.models.operations.ContentBuyongoogleprogramsPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.BuyOnGoogleProgramStatusBusinessModelEnum;
import org.openapis.openapi.models.shared.BuyOnGoogleProgramStatusInput;
import org.openapis.openapi.models.shared.BuyOnGoogleProgramStatusOnlineSalesChannelEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentBuyongoogleprogramsPatchRequest req = new ContentBuyongoogleprogramsPatchRequest("maiores", "incidunt") {{
                dollarXgafv = XgafvEnum.ONE;
                buyOnGoogleProgramStatusInput = new BuyOnGoogleProgramStatusInput() {{
                    businessModel = new org.openapis.openapi.models.shared.BuyOnGoogleProgramStatusBusinessModelEnum[]{{
                        add(BuyOnGoogleProgramStatusBusinessModelEnum.MANUFACTURER),
                        add(BuyOnGoogleProgramStatusBusinessModelEnum.OTHER),
                        add(BuyOnGoogleProgramStatusBusinessModelEnum.MANUFACTURER),
                    }};
                    customerServicePendingEmail = "ea";
                    customerServicePendingPhoneNumber = "occaecati";
                    customerServicePendingPhoneRegionCode = "quos";
                    onlineSalesChannel = BuyOnGoogleProgramStatusOnlineSalesChannelEnum.GOOGLE_AND_OTHER_WEBSITES;
                }};;
                accessToken = "tempora";
                alt = AltEnum.JSON;
                callback = "voluptate";
                fields = "reiciendis";
                key = "ex";
                oauthToken = "sit";
                prettyPrint = false;
                quotaUser = "non";
                updateMask = "officiis";
                uploadType = "praesentium";
                uploadProtocol = "facilis";
            }};            

            ContentBuyongoogleprogramsPatchResponse res = sdk.buyongoogleprograms.contentBuyongoogleprogramsPatch(req, new ContentBuyongoogleprogramsPatchSecurity("quaerat", "incidunt") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.buyOnGoogleProgramStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contentBuyongoogleprogramsPause

Pauses the BoG program in your Merchant Center account. This method is only available to selected merchants.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentBuyongoogleprogramsPauseRequest;
import org.openapis.openapi.models.operations.ContentBuyongoogleprogramsPauseResponse;
import org.openapis.openapi.models.operations.ContentBuyongoogleprogramsPauseSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentBuyongoogleprogramsPauseRequest req = new ContentBuyongoogleprogramsPauseRequest("ipsam", "debitis") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("nobis", "error");
                }};
                accessToken = "veniam";
                alt = AltEnum.JSON;
                callback = "recusandae";
                fields = "reiciendis";
                key = "nulla";
                oauthToken = "magni";
                prettyPrint = false;
                quotaUser = "aperiam";
                uploadType = "saepe";
                uploadProtocol = "numquam";
            }};            

            ContentBuyongoogleprogramsPauseResponse res = sdk.buyongoogleprograms.contentBuyongoogleprogramsPause(req, new ContentBuyongoogleprogramsPauseSecurity("veniam", "in") {{
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

## contentBuyongoogleprogramsRequestreview

Requests review and then activates the BoG program in your Merchant Center account for the first time. Moves the program to the REVIEW_PENDING state. This method is only available to selected merchants.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentBuyongoogleprogramsRequestreviewRequest;
import org.openapis.openapi.models.operations.ContentBuyongoogleprogramsRequestreviewResponse;
import org.openapis.openapi.models.operations.ContentBuyongoogleprogramsRequestreviewSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentBuyongoogleprogramsRequestreviewRequest req = new ContentBuyongoogleprogramsRequestreviewRequest("officiis", "beatae") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("praesentium", "cum");
                    put("laboriosam", "dolorum");
                }};
                accessToken = "voluptatum";
                alt = AltEnum.MEDIA;
                callback = "hic";
                fields = "expedita";
                key = "debitis";
                oauthToken = "neque";
                prettyPrint = false;
                quotaUser = "dolorum";
                uploadType = "nostrum";
                uploadProtocol = "officia";
            }};            

            ContentBuyongoogleprogramsRequestreviewResponse res = sdk.buyongoogleprograms.contentBuyongoogleprogramsRequestreview(req, new ContentBuyongoogleprogramsRequestreviewSecurity("dolorum", "corrupti") {{
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
