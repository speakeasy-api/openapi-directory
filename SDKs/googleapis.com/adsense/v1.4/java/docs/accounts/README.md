# accounts

### Available Operations

* [adsenseAccountsAdclientsGetAdCode](#adsenseaccountsadclientsgetadcode) - Get Auto ad code for a given ad client.
* [adsenseAccountsAdclientsList](#adsenseaccountsadclientslist) - List all ad clients in the specified account.
* [adsenseAccountsAdunitsCustomchannelsList](#adsenseaccountsadunitscustomchannelslist) - List all custom channels which the specified ad unit belongs to.
* [adsenseAccountsAdunitsGet](#adsenseaccountsadunitsget) - Gets the specified ad unit in the specified ad client for the specified account.
* [adsenseAccountsAdunitsGetAdCode](#adsenseaccountsadunitsgetadcode) - Get ad code for the specified ad unit.
* [adsenseAccountsAdunitsList](#adsenseaccountsadunitslist) - List all ad units in the specified ad client for the specified account.
* [adsenseAccountsAlertsDelete](#adsenseaccountsalertsdelete) - Dismiss (delete) the specified alert from the specified publisher AdSense account.
* [adsenseAccountsAlertsList](#adsenseaccountsalertslist) - List the alerts for the specified AdSense account.
* [adsenseAccountsCustomchannelsAdunitsList](#adsenseaccountscustomchannelsadunitslist) - List all ad units in the specified custom channel.
* [adsenseAccountsCustomchannelsGet](#adsenseaccountscustomchannelsget) - Get the specified custom channel from the specified ad client for the specified account.
* [adsenseAccountsCustomchannelsList](#adsenseaccountscustomchannelslist) - List all custom channels in the specified ad client for the specified account.
* [adsenseAccountsGet](#adsenseaccountsget) - Get information about the selected AdSense account.
* [adsenseAccountsList](#adsenseaccountslist) - List all accounts available to this AdSense account.
* [adsenseAccountsPaymentsList](#adsenseaccountspaymentslist) - List the payments for the specified AdSense account.
* [adsenseAccountsReportsGenerate](#adsenseaccountsreportsgenerate) - Generate an AdSense report based on the report request sent in the query parameters. Returns the result as JSON; to retrieve output in CSV format specify "alt=csv" as a query parameter.
* [adsenseAccountsReportsSavedGenerate](#adsenseaccountsreportssavedgenerate) - Generate an AdSense report based on the saved report ID sent in the query parameters.
* [adsenseAccountsReportsSavedList](#adsenseaccountsreportssavedlist) - List all saved reports in the specified AdSense account.
* [adsenseAccountsSavedadstylesGet](#adsenseaccountssavedadstylesget) - List a specific saved ad style for the specified account.
* [adsenseAccountsSavedadstylesList](#adsenseaccountssavedadstyleslist) - List all saved ad styles in the specified account.
* [adsenseAccountsUrlchannelsList](#adsenseaccountsurlchannelslist) - List all URL channels in the specified ad client for the specified account.

## adsenseAccountsAdclientsGetAdCode

Get Auto ad code for a given ad client.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdsenseAccountsAdclientsGetAdCodeRequest;
import org.openapis.openapi.models.operations.AdsenseAccountsAdclientsGetAdCodeResponse;
import org.openapis.openapi.models.operations.AdsenseAccountsAdclientsGetAdCodeSecurity;
import org.openapis.openapi.models.operations.AdsenseAccountsAdclientsGetAdCodeSecurityOption1;
import org.openapis.openapi.models.operations.AdsenseAccountsAdclientsGetAdCodeSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdsenseAccountsAdclientsGetAdCodeRequest req = new AdsenseAccountsAdclientsGetAdCodeRequest("suscipit", "iure") {{
                alt = AltEnum.CSV;
                fields = "debitis";
                key = "ipsa";
                oauthToken = "delectus";
                prettyPrint = false;
                quotaUser = "tempora";
                tagPartner = "suscipit";
                userIp = "molestiae";
            }};            

            AdsenseAccountsAdclientsGetAdCodeResponse res = sdk.accounts.adsenseAccountsAdclientsGetAdCode(req, new AdsenseAccountsAdclientsGetAdCodeSecurity() {{
                option1 = new AdsenseAccountsAdclientsGetAdCodeSecurityOption1("minus", "placeat") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.adCode != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adsenseAccountsAdclientsList

List all ad clients in the specified account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdsenseAccountsAdclientsListRequest;
import org.openapis.openapi.models.operations.AdsenseAccountsAdclientsListResponse;
import org.openapis.openapi.models.operations.AdsenseAccountsAdclientsListSecurity;
import org.openapis.openapi.models.operations.AdsenseAccountsAdclientsListSecurityOption1;
import org.openapis.openapi.models.operations.AdsenseAccountsAdclientsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdsenseAccountsAdclientsListRequest req = new AdsenseAccountsAdclientsListRequest("voluptatum") {{
                alt = AltEnum.CSV;
                fields = "excepturi";
                key = "nisi";
                maxResults = 925597L;
                oauthToken = "temporibus";
                pageToken = "ab";
                prettyPrint = false;
                quotaUser = "quis";
                userIp = "veritatis";
            }};            

            AdsenseAccountsAdclientsListResponse res = sdk.accounts.adsenseAccountsAdclientsList(req, new AdsenseAccountsAdclientsListSecurity() {{
                option1 = new AdsenseAccountsAdclientsListSecurityOption1("deserunt", "perferendis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.adClients != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adsenseAccountsAdunitsCustomchannelsList

List all custom channels which the specified ad unit belongs to.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdsenseAccountsAdunitsCustomchannelsListRequest;
import org.openapis.openapi.models.operations.AdsenseAccountsAdunitsCustomchannelsListResponse;
import org.openapis.openapi.models.operations.AdsenseAccountsAdunitsCustomchannelsListSecurity;
import org.openapis.openapi.models.operations.AdsenseAccountsAdunitsCustomchannelsListSecurityOption1;
import org.openapis.openapi.models.operations.AdsenseAccountsAdunitsCustomchannelsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdsenseAccountsAdunitsCustomchannelsListRequest req = new AdsenseAccountsAdunitsCustomchannelsListRequest("ipsam", "repellendus", "sapiente") {{
                alt = AltEnum.JSON;
                fields = "odit";
                key = "at";
                maxResults = 870088L;
                oauthToken = "maiores";
                pageToken = "molestiae";
                prettyPrint = false;
                quotaUser = "quod";
                userIp = "quod";
            }};            

            AdsenseAccountsAdunitsCustomchannelsListResponse res = sdk.accounts.adsenseAccountsAdunitsCustomchannelsList(req, new AdsenseAccountsAdunitsCustomchannelsListSecurity() {{
                option1 = new AdsenseAccountsAdunitsCustomchannelsListSecurityOption1("esse", "totam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.customChannels != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adsenseAccountsAdunitsGet

Gets the specified ad unit in the specified ad client for the specified account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdsenseAccountsAdunitsGetRequest;
import org.openapis.openapi.models.operations.AdsenseAccountsAdunitsGetResponse;
import org.openapis.openapi.models.operations.AdsenseAccountsAdunitsGetSecurity;
import org.openapis.openapi.models.operations.AdsenseAccountsAdunitsGetSecurityOption1;
import org.openapis.openapi.models.operations.AdsenseAccountsAdunitsGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdsenseAccountsAdunitsGetRequest req = new AdsenseAccountsAdunitsGetRequest("porro", "dolorum", "dicta") {{
                alt = AltEnum.JSON;
                fields = "officia";
                key = "occaecati";
                oauthToken = "fugit";
                prettyPrint = false;
                quotaUser = "deleniti";
                userIp = "hic";
            }};            

            AdsenseAccountsAdunitsGetResponse res = sdk.accounts.adsenseAccountsAdunitsGet(req, new AdsenseAccountsAdunitsGetSecurity() {{
                option1 = new AdsenseAccountsAdunitsGetSecurityOption1("optio", "totam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.adUnit != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adsenseAccountsAdunitsGetAdCode

Get ad code for the specified ad unit.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdsenseAccountsAdunitsGetAdCodeRequest;
import org.openapis.openapi.models.operations.AdsenseAccountsAdunitsGetAdCodeResponse;
import org.openapis.openapi.models.operations.AdsenseAccountsAdunitsGetAdCodeSecurity;
import org.openapis.openapi.models.operations.AdsenseAccountsAdunitsGetAdCodeSecurityOption1;
import org.openapis.openapi.models.operations.AdsenseAccountsAdunitsGetAdCodeSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdsenseAccountsAdunitsGetAdCodeRequest req = new AdsenseAccountsAdunitsGetAdCodeRequest("beatae", "commodi", "molestiae") {{
                alt = AltEnum.CSV;
                fields = "qui";
                key = "impedit";
                oauthToken = "cum";
                prettyPrint = false;
                quotaUser = "esse";
                userIp = "ipsum";
            }};            

            AdsenseAccountsAdunitsGetAdCodeResponse res = sdk.accounts.adsenseAccountsAdunitsGetAdCode(req, new AdsenseAccountsAdunitsGetAdCodeSecurity() {{
                option1 = new AdsenseAccountsAdunitsGetAdCodeSecurityOption1("excepturi", "aspernatur") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.adCode != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adsenseAccountsAdunitsList

List all ad units in the specified ad client for the specified account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdsenseAccountsAdunitsListRequest;
import org.openapis.openapi.models.operations.AdsenseAccountsAdunitsListResponse;
import org.openapis.openapi.models.operations.AdsenseAccountsAdunitsListSecurity;
import org.openapis.openapi.models.operations.AdsenseAccountsAdunitsListSecurityOption1;
import org.openapis.openapi.models.operations.AdsenseAccountsAdunitsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdsenseAccountsAdunitsListRequest req = new AdsenseAccountsAdunitsListRequest("perferendis", "ad") {{
                alt = AltEnum.JSON;
                fields = "sed";
                includeInactive = false;
                key = "iste";
                maxResults = 222321L;
                oauthToken = "natus";
                pageToken = "laboriosam";
                prettyPrint = false;
                quotaUser = "hic";
                userIp = "saepe";
            }};            

            AdsenseAccountsAdunitsListResponse res = sdk.accounts.adsenseAccountsAdunitsList(req, new AdsenseAccountsAdunitsListSecurity() {{
                option1 = new AdsenseAccountsAdunitsListSecurityOption1("fuga", "in") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.adUnits != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adsenseAccountsAlertsDelete

Dismiss (delete) the specified alert from the specified publisher AdSense account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdsenseAccountsAlertsDeleteRequest;
import org.openapis.openapi.models.operations.AdsenseAccountsAlertsDeleteResponse;
import org.openapis.openapi.models.operations.AdsenseAccountsAlertsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdsenseAccountsAlertsDeleteRequest req = new AdsenseAccountsAlertsDeleteRequest("corporis", "iste") {{
                alt = AltEnum.CSV;
                fields = "saepe";
                key = "quidem";
                oauthToken = "architecto";
                prettyPrint = false;
                quotaUser = "ipsa";
                userIp = "reiciendis";
            }};            

            AdsenseAccountsAlertsDeleteResponse res = sdk.accounts.adsenseAccountsAlertsDelete(req, new AdsenseAccountsAlertsDeleteSecurity("est", "mollitia") {{
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

## adsenseAccountsAlertsList

List the alerts for the specified AdSense account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdsenseAccountsAlertsListRequest;
import org.openapis.openapi.models.operations.AdsenseAccountsAlertsListResponse;
import org.openapis.openapi.models.operations.AdsenseAccountsAlertsListSecurity;
import org.openapis.openapi.models.operations.AdsenseAccountsAlertsListSecurityOption1;
import org.openapis.openapi.models.operations.AdsenseAccountsAlertsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdsenseAccountsAlertsListRequest req = new AdsenseAccountsAlertsListRequest("laborum") {{
                alt = AltEnum.CSV;
                fields = "dolorem";
                key = "corporis";
                locale = "explicabo";
                oauthToken = "nobis";
                prettyPrint = false;
                quotaUser = "enim";
                userIp = "omnis";
            }};            

            AdsenseAccountsAlertsListResponse res = sdk.accounts.adsenseAccountsAlertsList(req, new AdsenseAccountsAlertsListSecurity() {{
                option1 = new AdsenseAccountsAlertsListSecurityOption1("nemo", "minima") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.alerts != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adsenseAccountsCustomchannelsAdunitsList

List all ad units in the specified custom channel.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdsenseAccountsCustomchannelsAdunitsListRequest;
import org.openapis.openapi.models.operations.AdsenseAccountsCustomchannelsAdunitsListResponse;
import org.openapis.openapi.models.operations.AdsenseAccountsCustomchannelsAdunitsListSecurity;
import org.openapis.openapi.models.operations.AdsenseAccountsCustomchannelsAdunitsListSecurityOption1;
import org.openapis.openapi.models.operations.AdsenseAccountsCustomchannelsAdunitsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdsenseAccountsCustomchannelsAdunitsListRequest req = new AdsenseAccountsCustomchannelsAdunitsListRequest("excepturi", "accusantium", "iure") {{
                alt = AltEnum.JSON;
                fields = "doloribus";
                includeInactive = false;
                key = "sapiente";
                maxResults = 102044L;
                oauthToken = "mollitia";
                pageToken = "dolorem";
                prettyPrint = false;
                quotaUser = "culpa";
                userIp = "consequuntur";
            }};            

            AdsenseAccountsCustomchannelsAdunitsListResponse res = sdk.accounts.adsenseAccountsCustomchannelsAdunitsList(req, new AdsenseAccountsCustomchannelsAdunitsListSecurity() {{
                option1 = new AdsenseAccountsCustomchannelsAdunitsListSecurityOption1("repellat", "mollitia") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.adUnits != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adsenseAccountsCustomchannelsGet

Get the specified custom channel from the specified ad client for the specified account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdsenseAccountsCustomchannelsGetRequest;
import org.openapis.openapi.models.operations.AdsenseAccountsCustomchannelsGetResponse;
import org.openapis.openapi.models.operations.AdsenseAccountsCustomchannelsGetSecurity;
import org.openapis.openapi.models.operations.AdsenseAccountsCustomchannelsGetSecurityOption1;
import org.openapis.openapi.models.operations.AdsenseAccountsCustomchannelsGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdsenseAccountsCustomchannelsGetRequest req = new AdsenseAccountsCustomchannelsGetRequest("occaecati", "numquam", "commodi") {{
                alt = AltEnum.CSV;
                fields = "molestiae";
                key = "velit";
                oauthToken = "error";
                prettyPrint = false;
                quotaUser = "quia";
                userIp = "quis";
            }};            

            AdsenseAccountsCustomchannelsGetResponse res = sdk.accounts.adsenseAccountsCustomchannelsGet(req, new AdsenseAccountsCustomchannelsGetSecurity() {{
                option1 = new AdsenseAccountsCustomchannelsGetSecurityOption1("vitae", "laborum") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.customChannel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adsenseAccountsCustomchannelsList

List all custom channels in the specified ad client for the specified account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdsenseAccountsCustomchannelsListRequest;
import org.openapis.openapi.models.operations.AdsenseAccountsCustomchannelsListResponse;
import org.openapis.openapi.models.operations.AdsenseAccountsCustomchannelsListSecurity;
import org.openapis.openapi.models.operations.AdsenseAccountsCustomchannelsListSecurityOption1;
import org.openapis.openapi.models.operations.AdsenseAccountsCustomchannelsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdsenseAccountsCustomchannelsListRequest req = new AdsenseAccountsCustomchannelsListRequest("animi", "enim") {{
                alt = AltEnum.CSV;
                fields = "quo";
                key = "sequi";
                maxResults = 949572L;
                oauthToken = "ipsam";
                pageToken = "id";
                prettyPrint = false;
                quotaUser = "possimus";
                userIp = "aut";
            }};            

            AdsenseAccountsCustomchannelsListResponse res = sdk.accounts.adsenseAccountsCustomchannelsList(req, new AdsenseAccountsCustomchannelsListSecurity() {{
                option1 = new AdsenseAccountsCustomchannelsListSecurityOption1("quasi", "error") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.customChannels != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adsenseAccountsGet

Get information about the selected AdSense account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdsenseAccountsGetRequest;
import org.openapis.openapi.models.operations.AdsenseAccountsGetResponse;
import org.openapis.openapi.models.operations.AdsenseAccountsGetSecurity;
import org.openapis.openapi.models.operations.AdsenseAccountsGetSecurityOption1;
import org.openapis.openapi.models.operations.AdsenseAccountsGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdsenseAccountsGetRequest req = new AdsenseAccountsGetRequest("temporibus") {{
                alt = AltEnum.JSON;
                fields = "quasi";
                key = "reiciendis";
                oauthToken = "voluptatibus";
                prettyPrint = false;
                quotaUser = "vero";
                tree = false;
                userIp = "nihil";
            }};            

            AdsenseAccountsGetResponse res = sdk.accounts.adsenseAccountsGet(req, new AdsenseAccountsGetSecurity() {{
                option1 = new AdsenseAccountsGetSecurityOption1("praesentium", "voluptatibus") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.account != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adsenseAccountsList

List all accounts available to this AdSense account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdsenseAccountsListRequest;
import org.openapis.openapi.models.operations.AdsenseAccountsListResponse;
import org.openapis.openapi.models.operations.AdsenseAccountsListSecurity;
import org.openapis.openapi.models.operations.AdsenseAccountsListSecurityOption1;
import org.openapis.openapi.models.operations.AdsenseAccountsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdsenseAccountsListRequest req = new AdsenseAccountsListRequest() {{
                alt = AltEnum.CSV;
                fields = "omnis";
                key = "voluptate";
                maxResults = 739264L;
                oauthToken = "perferendis";
                pageToken = "doloremque";
                prettyPrint = false;
                quotaUser = "reprehenderit";
                userIp = "ut";
            }};            

            AdsenseAccountsListResponse res = sdk.accounts.adsenseAccountsList(req, new AdsenseAccountsListSecurity() {{
                option1 = new AdsenseAccountsListSecurityOption1("maiores", "dicta") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.accounts != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adsenseAccountsPaymentsList

List the payments for the specified AdSense account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdsenseAccountsPaymentsListRequest;
import org.openapis.openapi.models.operations.AdsenseAccountsPaymentsListResponse;
import org.openapis.openapi.models.operations.AdsenseAccountsPaymentsListSecurity;
import org.openapis.openapi.models.operations.AdsenseAccountsPaymentsListSecurityOption1;
import org.openapis.openapi.models.operations.AdsenseAccountsPaymentsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdsenseAccountsPaymentsListRequest req = new AdsenseAccountsPaymentsListRequest("corporis") {{
                alt = AltEnum.CSV;
                fields = "iusto";
                key = "dicta";
                oauthToken = "harum";
                prettyPrint = false;
                quotaUser = "enim";
                userIp = "accusamus";
            }};            

            AdsenseAccountsPaymentsListResponse res = sdk.accounts.adsenseAccountsPaymentsList(req, new AdsenseAccountsPaymentsListSecurity() {{
                option1 = new AdsenseAccountsPaymentsListSecurityOption1("commodi", "repudiandae") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.payments != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adsenseAccountsReportsGenerate

Generate an AdSense report based on the report request sent in the query parameters. Returns the result as JSON; to retrieve output in CSV format specify "alt=csv" as a query parameter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdsenseAccountsReportsGenerateRequest;
import org.openapis.openapi.models.operations.AdsenseAccountsReportsGenerateResponse;
import org.openapis.openapi.models.operations.AdsenseAccountsReportsGenerateSecurity;
import org.openapis.openapi.models.operations.AdsenseAccountsReportsGenerateSecurityOption1;
import org.openapis.openapi.models.operations.AdsenseAccountsReportsGenerateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdsenseAccountsReportsGenerateRequest req = new AdsenseAccountsReportsGenerateRequest("quae", "ipsum", "quidem") {{
                alt = AltEnum.JSON;
                currency = "excepturi";
                dimension = new String[]{{
                    add("modi"),
                    add("praesentium"),
                    add("rem"),
                    add("voluptates"),
                }};
                fields = "quasi";
                filter = new String[]{{
                    add("sint"),
                    add("veritatis"),
                    add("itaque"),
                    add("incidunt"),
                }};
                key = "enim";
                locale = "consequatur";
                maxResults = 667411L;
                metric = new String[]{{
                    add("explicabo"),
                    add("deserunt"),
                    add("distinctio"),
                    add("quibusdam"),
                }};
                oauthToken = "labore";
                prettyPrint = false;
                quotaUser = "modi";
                sort = new String[]{{
                    add("aliquid"),
                }};
                startIndex = 586513L;
                useTimezoneReporting = false;
                userIp = "quos";
            }};            

            AdsenseAccountsReportsGenerateResponse res = sdk.accounts.adsenseAccountsReportsGenerate(req, new AdsenseAccountsReportsGenerateSecurity() {{
                option1 = new AdsenseAccountsReportsGenerateSecurityOption1("perferendis", "magni") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.adsenseReportsGenerateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adsenseAccountsReportsSavedGenerate

Generate an AdSense report based on the saved report ID sent in the query parameters.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdsenseAccountsReportsSavedGenerateRequest;
import org.openapis.openapi.models.operations.AdsenseAccountsReportsSavedGenerateResponse;
import org.openapis.openapi.models.operations.AdsenseAccountsReportsSavedGenerateSecurity;
import org.openapis.openapi.models.operations.AdsenseAccountsReportsSavedGenerateSecurityOption1;
import org.openapis.openapi.models.operations.AdsenseAccountsReportsSavedGenerateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdsenseAccountsReportsSavedGenerateRequest req = new AdsenseAccountsReportsSavedGenerateRequest("assumenda", "ipsam") {{
                alt = AltEnum.CSV;
                fields = "fugit";
                key = "dolorum";
                locale = "excepturi";
                maxResults = 270008L;
                oauthToken = "facilis";
                prettyPrint = false;
                quotaUser = "tempore";
                startIndex = 288476L;
                userIp = "delectus";
            }};            

            AdsenseAccountsReportsSavedGenerateResponse res = sdk.accounts.adsenseAccountsReportsSavedGenerate(req, new AdsenseAccountsReportsSavedGenerateSecurity() {{
                option1 = new AdsenseAccountsReportsSavedGenerateSecurityOption1("eum", "non") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.adsenseReportsGenerateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adsenseAccountsReportsSavedList

List all saved reports in the specified AdSense account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdsenseAccountsReportsSavedListRequest;
import org.openapis.openapi.models.operations.AdsenseAccountsReportsSavedListResponse;
import org.openapis.openapi.models.operations.AdsenseAccountsReportsSavedListSecurity;
import org.openapis.openapi.models.operations.AdsenseAccountsReportsSavedListSecurityOption1;
import org.openapis.openapi.models.operations.AdsenseAccountsReportsSavedListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdsenseAccountsReportsSavedListRequest req = new AdsenseAccountsReportsSavedListRequest("eligendi") {{
                alt = AltEnum.JSON;
                fields = "aliquid";
                key = "provident";
                maxResults = 896039L;
                oauthToken = "sint";
                pageToken = "officia";
                prettyPrint = false;
                quotaUser = "dolor";
                userIp = "debitis";
            }};            

            AdsenseAccountsReportsSavedListResponse res = sdk.accounts.adsenseAccountsReportsSavedList(req, new AdsenseAccountsReportsSavedListSecurity() {{
                option1 = new AdsenseAccountsReportsSavedListSecurityOption1("a", "dolorum") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.savedReports != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adsenseAccountsSavedadstylesGet

List a specific saved ad style for the specified account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdsenseAccountsSavedadstylesGetRequest;
import org.openapis.openapi.models.operations.AdsenseAccountsSavedadstylesGetResponse;
import org.openapis.openapi.models.operations.AdsenseAccountsSavedadstylesGetSecurity;
import org.openapis.openapi.models.operations.AdsenseAccountsSavedadstylesGetSecurityOption1;
import org.openapis.openapi.models.operations.AdsenseAccountsSavedadstylesGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdsenseAccountsSavedadstylesGetRequest req = new AdsenseAccountsSavedadstylesGetRequest("in", "in") {{
                alt = AltEnum.JSON;
                fields = "maiores";
                key = "rerum";
                oauthToken = "dicta";
                prettyPrint = false;
                quotaUser = "magnam";
                userIp = "cumque";
            }};            

            AdsenseAccountsSavedadstylesGetResponse res = sdk.accounts.adsenseAccountsSavedadstylesGet(req, new AdsenseAccountsSavedadstylesGetSecurity() {{
                option1 = new AdsenseAccountsSavedadstylesGetSecurityOption1("facere", "ea") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.savedAdStyle != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adsenseAccountsSavedadstylesList

List all saved ad styles in the specified account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdsenseAccountsSavedadstylesListRequest;
import org.openapis.openapi.models.operations.AdsenseAccountsSavedadstylesListResponse;
import org.openapis.openapi.models.operations.AdsenseAccountsSavedadstylesListSecurity;
import org.openapis.openapi.models.operations.AdsenseAccountsSavedadstylesListSecurityOption1;
import org.openapis.openapi.models.operations.AdsenseAccountsSavedadstylesListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdsenseAccountsSavedadstylesListRequest req = new AdsenseAccountsSavedadstylesListRequest("aliquid") {{
                alt = AltEnum.JSON;
                fields = "accusamus";
                key = "non";
                maxResults = 581273L;
                oauthToken = "enim";
                pageToken = "accusamus";
                prettyPrint = false;
                quotaUser = "delectus";
                userIp = "quidem";
            }};            

            AdsenseAccountsSavedadstylesListResponse res = sdk.accounts.adsenseAccountsSavedadstylesList(req, new AdsenseAccountsSavedadstylesListSecurity() {{
                option1 = new AdsenseAccountsSavedadstylesListSecurityOption1("provident", "nam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.savedAdStyles != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adsenseAccountsUrlchannelsList

List all URL channels in the specified ad client for the specified account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdsenseAccountsUrlchannelsListRequest;
import org.openapis.openapi.models.operations.AdsenseAccountsUrlchannelsListResponse;
import org.openapis.openapi.models.operations.AdsenseAccountsUrlchannelsListSecurity;
import org.openapis.openapi.models.operations.AdsenseAccountsUrlchannelsListSecurityOption1;
import org.openapis.openapi.models.operations.AdsenseAccountsUrlchannelsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdsenseAccountsUrlchannelsListRequest req = new AdsenseAccountsUrlchannelsListRequest("id", "blanditiis") {{
                alt = AltEnum.JSON;
                fields = "sapiente";
                key = "amet";
                maxResults = 643990L;
                oauthToken = "nisi";
                pageToken = "vel";
                prettyPrint = false;
                quotaUser = "natus";
                userIp = "omnis";
            }};            

            AdsenseAccountsUrlchannelsListResponse res = sdk.accounts.adsenseAccountsUrlchannelsList(req, new AdsenseAccountsUrlchannelsListSecurity() {{
                option1 = new AdsenseAccountsUrlchannelsListSecurityOption1("molestiae", "perferendis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.urlChannels != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
