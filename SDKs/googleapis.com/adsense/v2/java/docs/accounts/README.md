# accounts

### Available Operations

* [adsenseAccountsAdclientsAdunitsCreate](#adsenseaccountsadclientsadunitscreate) - Creates an ad unit. This method can only be used by projects enabled for the [AdSense for Platforms](https://developers.google.com/adsense/platforms/) product. Note that ad units can only be created for ad clients with an "AFC" product code. For more info see the [AdClient resource](/adsense/management/reference/rest/v2/accounts.adclients). For now, this method can only be used to create `DISPLAY` ad units. See: https://support.google.com/adsense/answer/9183566
* [adsenseAccountsAdclientsAdunitsGetAdcode](#adsenseaccountsadclientsadunitsgetadcode) - Gets the ad unit code for a given ad unit. For more information, see [About the AdSense code](https://support.google.com/adsense/answer/9274634) and [Where to place the ad code in your HTML](https://support.google.com/adsense/answer/9190028).
* [adsenseAccountsAdclientsAdunitsList](#adsenseaccountsadclientsadunitslist) - Lists all ad units under a specified account and ad client.
* [adsenseAccountsAdclientsAdunitsListLinkedCustomChannels](#adsenseaccountsadclientsadunitslistlinkedcustomchannels) - Lists all the custom channels available for an ad unit.
* [adsenseAccountsAdclientsCustomchannelsCreate](#adsenseaccountsadclientscustomchannelscreate) - Creates a custom channel. This method can only be used by projects enabled for the [AdSense for Platforms](https://developers.google.com/adsense/platforms/) product.
* [adsenseAccountsAdclientsCustomchannelsDelete](#adsenseaccountsadclientscustomchannelsdelete) - Deletes a custom channel. This method can only be used by projects enabled for the [AdSense for Platforms](https://developers.google.com/adsense/platforms/) product.
* [adsenseAccountsAdclientsCustomchannelsList](#adsenseaccountsadclientscustomchannelslist) - Lists all the custom channels available in an ad client.
* [adsenseAccountsAdclientsCustomchannelsListLinkedAdUnits](#adsenseaccountsadclientscustomchannelslistlinkedadunits) - Lists all the ad units available for a custom channel.
* [adsenseAccountsAdclientsCustomchannelsPatch](#adsenseaccountsadclientscustomchannelspatch) - Updates a custom channel. This method can only be used by projects enabled for the [AdSense for Platforms](https://developers.google.com/adsense/platforms/) product.
* [adsenseAccountsAdclientsList](#adsenseaccountsadclientslist) - Lists all the ad clients available in an account.
* [adsenseAccountsAdclientsUrlchannelsList](#adsenseaccountsadclientsurlchannelslist) - Lists active url channels.
* [adsenseAccountsAlertsList](#adsenseaccountsalertslist) - Lists all the alerts available in an account.
* [adsenseAccountsGetAdBlockingRecoveryTag](#adsenseaccountsgetadblockingrecoverytag) - Gets the ad blocking recovery tag of an account.
* [adsenseAccountsList](#adsenseaccountslist) - Lists all accounts available to this user.
* [adsenseAccountsListChildAccounts](#adsenseaccountslistchildaccounts) - Lists all accounts directly managed by the given AdSense account.
* [adsenseAccountsPaymentsList](#adsenseaccountspaymentslist) - Lists all the payments available for an account.
* [adsenseAccountsReportsGenerate](#adsenseaccountsreportsgenerate) - Generates an ad hoc report.
* [adsenseAccountsReportsGenerateCsv](#adsenseaccountsreportsgeneratecsv) - Generates a csv formatted ad hoc report.
* [adsenseAccountsReportsGetSaved](#adsenseaccountsreportsgetsaved) - Gets the saved report from the given resource name.
* [adsenseAccountsReportsSavedGenerate](#adsenseaccountsreportssavedgenerate) - Generates a saved report.
* [adsenseAccountsReportsSavedGenerateCsv](#adsenseaccountsreportssavedgeneratecsv) - Generates a csv formatted saved report.
* [adsenseAccountsReportsSavedList](#adsenseaccountsreportssavedlist) - Lists saved reports.
* [adsenseAccountsSitesGet](#adsenseaccountssitesget) - Gets information about the selected site.
* [adsenseAccountsSitesList](#adsenseaccountssiteslist) - Lists all the sites available in an account.

## adsenseAccountsAdclientsAdunitsCreate

Creates an ad unit. This method can only be used by projects enabled for the [AdSense for Platforms](https://developers.google.com/adsense/platforms/) product. Note that ad units can only be created for ad clients with an "AFC" product code. For more info see the [AdClient resource](/adsense/management/reference/rest/v2/accounts.adclients). For now, this method can only be used to create `DISPLAY` ad units. See: https://support.google.com/adsense/answer/9183566

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdsenseAccountsAdclientsAdunitsCreateRequest;
import org.openapis.openapi.models.operations.AdsenseAccountsAdclientsAdunitsCreateResponse;
import org.openapis.openapi.models.operations.AdsenseAccountsAdclientsAdunitsCreateSecurity;
import org.openapis.openapi.models.shared.AdUnitInput;
import org.openapis.openapi.models.shared.AdUnitStateEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ContentAdsSettings;
import org.openapis.openapi.models.shared.ContentAdsSettingsTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdsenseAccountsAdclientsAdunitsCreateRequest req = new AdsenseAccountsAdclientsAdunitsCreateRequest("tempora") {{
                dollarXgafv = XgafvEnum.ONE;
                adUnitInput = new AdUnitInput() {{
                    contentAdsSettings = new ContentAdsSettings() {{
                        size = "molestiae";
                        type = ContentAdsSettingsTypeEnum.MATCHED_CONTENT;
                    }};;
                    displayName = "placeat";
                    state = AdUnitStateEnum.ACTIVE;
                }};;
                accessToken = "iusto";
                alt = AltEnum.MEDIA;
                callback = "nisi";
                fields = "recusandae";
                key = "temporibus";
                oauthToken = "ab";
                prettyPrint = false;
                quotaUser = "quis";
                uploadType = "veritatis";
                uploadProtocol = "deserunt";
            }};            

            AdsenseAccountsAdclientsAdunitsCreateResponse res = sdk.accounts.adsenseAccountsAdclientsAdunitsCreate(req, new AdsenseAccountsAdclientsAdunitsCreateSecurity("perferendis", "ipsam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## adsenseAccountsAdclientsAdunitsGetAdcode

Gets the ad unit code for a given ad unit. For more information, see [About the AdSense code](https://support.google.com/adsense/answer/9274634) and [Where to place the ad code in your HTML](https://support.google.com/adsense/answer/9190028).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdsenseAccountsAdclientsAdunitsGetAdcodeRequest;
import org.openapis.openapi.models.operations.AdsenseAccountsAdclientsAdunitsGetAdcodeResponse;
import org.openapis.openapi.models.operations.AdsenseAccountsAdclientsAdunitsGetAdcodeSecurity;
import org.openapis.openapi.models.operations.AdsenseAccountsAdclientsAdunitsGetAdcodeSecurityOption1;
import org.openapis.openapi.models.operations.AdsenseAccountsAdclientsAdunitsGetAdcodeSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdsenseAccountsAdclientsAdunitsGetAdcodeRequest req = new AdsenseAccountsAdclientsAdunitsGetAdcodeRequest("repellendus") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quo";
                alt = AltEnum.JSON;
                callback = "at";
                fields = "at";
                key = "maiores";
                oauthToken = "molestiae";
                prettyPrint = false;
                quotaUser = "quod";
                uploadType = "quod";
                uploadProtocol = "esse";
            }};            

            AdsenseAccountsAdclientsAdunitsGetAdcodeResponse res = sdk.accounts.adsenseAccountsAdclientsAdunitsGetAdcode(req, new AdsenseAccountsAdclientsAdunitsGetAdcodeSecurity() {{
                option1 = new AdsenseAccountsAdclientsAdunitsGetAdcodeSecurityOption1("totam", "porro") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.adUnitAdCode != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adsenseAccountsAdclientsAdunitsList

Lists all ad units under a specified account and ad client.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdsenseAccountsAdclientsAdunitsListRequest;
import org.openapis.openapi.models.operations.AdsenseAccountsAdclientsAdunitsListResponse;
import org.openapis.openapi.models.operations.AdsenseAccountsAdclientsAdunitsListSecurity;
import org.openapis.openapi.models.operations.AdsenseAccountsAdclientsAdunitsListSecurityOption1;
import org.openapis.openapi.models.operations.AdsenseAccountsAdclientsAdunitsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdsenseAccountsAdclientsAdunitsListRequest req = new AdsenseAccountsAdclientsAdunitsListRequest("dolorum") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "nam";
                alt = AltEnum.MEDIA;
                callback = "occaecati";
                fields = "fugit";
                key = "deleniti";
                oauthToken = "hic";
                pageSize = 758616L;
                pageToken = "totam";
                prettyPrint = false;
                quotaUser = "beatae";
                uploadType = "commodi";
                uploadProtocol = "molestiae";
            }};            

            AdsenseAccountsAdclientsAdunitsListResponse res = sdk.accounts.adsenseAccountsAdclientsAdunitsList(req, new AdsenseAccountsAdclientsAdunitsListSecurity() {{
                option1 = new AdsenseAccountsAdclientsAdunitsListSecurityOption1("modi", "qui") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listAdUnitsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adsenseAccountsAdclientsAdunitsListLinkedCustomChannels

Lists all the custom channels available for an ad unit.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdsenseAccountsAdclientsAdunitsListLinkedCustomChannelsRequest;
import org.openapis.openapi.models.operations.AdsenseAccountsAdclientsAdunitsListLinkedCustomChannelsResponse;
import org.openapis.openapi.models.operations.AdsenseAccountsAdclientsAdunitsListLinkedCustomChannelsSecurity;
import org.openapis.openapi.models.operations.AdsenseAccountsAdclientsAdunitsListLinkedCustomChannelsSecurityOption1;
import org.openapis.openapi.models.operations.AdsenseAccountsAdclientsAdunitsListLinkedCustomChannelsSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdsenseAccountsAdclientsAdunitsListLinkedCustomChannelsRequest req = new AdsenseAccountsAdclientsAdunitsListLinkedCustomChannelsRequest("impedit") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "esse";
                alt = AltEnum.JSON;
                callback = "excepturi";
                fields = "aspernatur";
                key = "perferendis";
                oauthToken = "ad";
                pageSize = 617636L;
                pageToken = "sed";
                prettyPrint = false;
                quotaUser = "iste";
                uploadType = "dolor";
                uploadProtocol = "natus";
            }};            

            AdsenseAccountsAdclientsAdunitsListLinkedCustomChannelsResponse res = sdk.accounts.adsenseAccountsAdclientsAdunitsListLinkedCustomChannels(req, new AdsenseAccountsAdclientsAdunitsListLinkedCustomChannelsSecurity() {{
                option1 = new AdsenseAccountsAdclientsAdunitsListLinkedCustomChannelsSecurityOption1("laboriosam", "hic") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listLinkedCustomChannelsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adsenseAccountsAdclientsCustomchannelsCreate

Creates a custom channel. This method can only be used by projects enabled for the [AdSense for Platforms](https://developers.google.com/adsense/platforms/) product.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdsenseAccountsAdclientsCustomchannelsCreateRequest;
import org.openapis.openapi.models.operations.AdsenseAccountsAdclientsCustomchannelsCreateResponse;
import org.openapis.openapi.models.operations.AdsenseAccountsAdclientsCustomchannelsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CustomChannelInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdsenseAccountsAdclientsCustomchannelsCreateRequest req = new AdsenseAccountsAdclientsCustomchannelsCreateRequest("saepe") {{
                dollarXgafv = XgafvEnum.TWO;
                customChannelInput = new CustomChannelInput() {{
                    active = false;
                    displayName = "in";
                }};;
                accessToken = "corporis";
                alt = AltEnum.MEDIA;
                callback = "iure";
                fields = "saepe";
                key = "quidem";
                oauthToken = "architecto";
                prettyPrint = false;
                quotaUser = "ipsa";
                uploadType = "reiciendis";
                uploadProtocol = "est";
            }};            

            AdsenseAccountsAdclientsCustomchannelsCreateResponse res = sdk.accounts.adsenseAccountsAdclientsCustomchannelsCreate(req, new AdsenseAccountsAdclientsCustomchannelsCreateSecurity("mollitia", "laborum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## adsenseAccountsAdclientsCustomchannelsDelete

Deletes a custom channel. This method can only be used by projects enabled for the [AdSense for Platforms](https://developers.google.com/adsense/platforms/) product.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdsenseAccountsAdclientsCustomchannelsDeleteRequest;
import org.openapis.openapi.models.operations.AdsenseAccountsAdclientsCustomchannelsDeleteResponse;
import org.openapis.openapi.models.operations.AdsenseAccountsAdclientsCustomchannelsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdsenseAccountsAdclientsCustomchannelsDeleteRequest req = new AdsenseAccountsAdclientsCustomchannelsDeleteRequest("dolores") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "corporis";
                alt = AltEnum.JSON;
                callback = "nobis";
                fields = "enim";
                key = "omnis";
                oauthToken = "nemo";
                prettyPrint = false;
                quotaUser = "minima";
                uploadType = "excepturi";
                uploadProtocol = "accusantium";
            }};            

            AdsenseAccountsAdclientsCustomchannelsDeleteResponse res = sdk.accounts.adsenseAccountsAdclientsCustomchannelsDelete(req, new AdsenseAccountsAdclientsCustomchannelsDeleteSecurity("iure", "culpa") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adsenseAccountsAdclientsCustomchannelsList

Lists all the custom channels available in an ad client.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdsenseAccountsAdclientsCustomchannelsListRequest;
import org.openapis.openapi.models.operations.AdsenseAccountsAdclientsCustomchannelsListResponse;
import org.openapis.openapi.models.operations.AdsenseAccountsAdclientsCustomchannelsListSecurity;
import org.openapis.openapi.models.operations.AdsenseAccountsAdclientsCustomchannelsListSecurityOption1;
import org.openapis.openapi.models.operations.AdsenseAccountsAdclientsCustomchannelsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdsenseAccountsAdclientsCustomchannelsListRequest req = new AdsenseAccountsAdclientsCustomchannelsListRequest("doloribus") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "architecto";
                alt = AltEnum.MEDIA;
                callback = "dolorem";
                fields = "culpa";
                key = "consequuntur";
                oauthToken = "repellat";
                pageSize = 653108L;
                pageToken = "occaecati";
                prettyPrint = false;
                quotaUser = "numquam";
                uploadType = "commodi";
                uploadProtocol = "quam";
            }};            

            AdsenseAccountsAdclientsCustomchannelsListResponse res = sdk.accounts.adsenseAccountsAdclientsCustomchannelsList(req, new AdsenseAccountsAdclientsCustomchannelsListSecurity() {{
                option1 = new AdsenseAccountsAdclientsCustomchannelsListSecurityOption1("molestiae", "velit") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listCustomChannelsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adsenseAccountsAdclientsCustomchannelsListLinkedAdUnits

Lists all the ad units available for a custom channel.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdsenseAccountsAdclientsCustomchannelsListLinkedAdUnitsRequest;
import org.openapis.openapi.models.operations.AdsenseAccountsAdclientsCustomchannelsListLinkedAdUnitsResponse;
import org.openapis.openapi.models.operations.AdsenseAccountsAdclientsCustomchannelsListLinkedAdUnitsSecurity;
import org.openapis.openapi.models.operations.AdsenseAccountsAdclientsCustomchannelsListLinkedAdUnitsSecurityOption1;
import org.openapis.openapi.models.operations.AdsenseAccountsAdclientsCustomchannelsListLinkedAdUnitsSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdsenseAccountsAdclientsCustomchannelsListLinkedAdUnitsRequest req = new AdsenseAccountsAdclientsCustomchannelsListLinkedAdUnitsRequest("error") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quis";
                alt = AltEnum.JSON;
                callback = "laborum";
                fields = "animi";
                key = "enim";
                oauthToken = "odit";
                pageSize = 778346L;
                pageToken = "sequi";
                prettyPrint = false;
                quotaUser = "tenetur";
                uploadType = "ipsam";
                uploadProtocol = "id";
            }};            

            AdsenseAccountsAdclientsCustomchannelsListLinkedAdUnitsResponse res = sdk.accounts.adsenseAccountsAdclientsCustomchannelsListLinkedAdUnits(req, new AdsenseAccountsAdclientsCustomchannelsListLinkedAdUnitsSecurity() {{
                option1 = new AdsenseAccountsAdclientsCustomchannelsListLinkedAdUnitsSecurityOption1("possimus", "aut") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listLinkedAdUnitsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adsenseAccountsAdclientsCustomchannelsPatch

Updates a custom channel. This method can only be used by projects enabled for the [AdSense for Platforms](https://developers.google.com/adsense/platforms/) product.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdsenseAccountsAdclientsCustomchannelsPatchRequest;
import org.openapis.openapi.models.operations.AdsenseAccountsAdclientsCustomchannelsPatchResponse;
import org.openapis.openapi.models.operations.AdsenseAccountsAdclientsCustomchannelsPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CustomChannelInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdsenseAccountsAdclientsCustomchannelsPatchRequest req = new AdsenseAccountsAdclientsCustomchannelsPatchRequest("quasi") {{
                dollarXgafv = XgafvEnum.TWO;
                customChannelInput = new CustomChannelInput() {{
                    active = false;
                    displayName = "temporibus";
                }};;
                accessToken = "laborum";
                alt = AltEnum.JSON;
                callback = "reiciendis";
                fields = "voluptatibus";
                key = "vero";
                oauthToken = "nihil";
                prettyPrint = false;
                quotaUser = "praesentium";
                updateMask = "voluptatibus";
                uploadType = "ipsa";
                uploadProtocol = "omnis";
            }};            

            AdsenseAccountsAdclientsCustomchannelsPatchResponse res = sdk.accounts.adsenseAccountsAdclientsCustomchannelsPatch(req, new AdsenseAccountsAdclientsCustomchannelsPatchSecurity("voluptate", "cum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## adsenseAccountsAdclientsList

Lists all the ad clients available in an account.

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
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdsenseAccountsAdclientsListRequest req = new AdsenseAccountsAdclientsListRequest("perferendis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "reprehenderit";
                alt = AltEnum.JSON;
                callback = "maiores";
                fields = "dicta";
                key = "corporis";
                oauthToken = "dolore";
                pageSize = 480894L;
                pageToken = "dicta";
                prettyPrint = false;
                quotaUser = "harum";
                uploadType = "enim";
                uploadProtocol = "accusamus";
            }};            

            AdsenseAccountsAdclientsListResponse res = sdk.accounts.adsenseAccountsAdclientsList(req, new AdsenseAccountsAdclientsListSecurity() {{
                option1 = new AdsenseAccountsAdclientsListSecurityOption1("commodi", "repudiandae") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listAdClientsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adsenseAccountsAdclientsUrlchannelsList

Lists active url channels.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdsenseAccountsAdclientsUrlchannelsListRequest;
import org.openapis.openapi.models.operations.AdsenseAccountsAdclientsUrlchannelsListResponse;
import org.openapis.openapi.models.operations.AdsenseAccountsAdclientsUrlchannelsListSecurity;
import org.openapis.openapi.models.operations.AdsenseAccountsAdclientsUrlchannelsListSecurityOption1;
import org.openapis.openapi.models.operations.AdsenseAccountsAdclientsUrlchannelsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdsenseAccountsAdclientsUrlchannelsListRequest req = new AdsenseAccountsAdclientsUrlchannelsListRequest("quae") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quidem";
                alt = AltEnum.MEDIA;
                callback = "excepturi";
                fields = "pariatur";
                key = "modi";
                oauthToken = "praesentium";
                pageSize = 523248L;
                pageToken = "voluptates";
                prettyPrint = false;
                quotaUser = "quasi";
                uploadType = "repudiandae";
                uploadProtocol = "sint";
            }};            

            AdsenseAccountsAdclientsUrlchannelsListResponse res = sdk.accounts.adsenseAccountsAdclientsUrlchannelsList(req, new AdsenseAccountsAdclientsUrlchannelsListSecurity() {{
                option1 = new AdsenseAccountsAdclientsUrlchannelsListSecurityOption1("veritatis", "itaque") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listUrlChannelsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adsenseAccountsAlertsList

Lists all the alerts available in an account.

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
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdsenseAccountsAlertsListRequest req = new AdsenseAccountsAlertsListRequest("incidunt") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "consequatur";
                alt = AltEnum.PROTO;
                callback = "quibusdam";
                fields = "explicabo";
                key = "deserunt";
                languageCode = "distinctio";
                oauthToken = "quibusdam";
                prettyPrint = false;
                quotaUser = "labore";
                uploadType = "modi";
                uploadProtocol = "qui";
            }};            

            AdsenseAccountsAlertsListResponse res = sdk.accounts.adsenseAccountsAlertsList(req, new AdsenseAccountsAlertsListSecurity() {{
                option1 = new AdsenseAccountsAlertsListSecurityOption1("aliquid", "cupiditate") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listAlertsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adsenseAccountsGetAdBlockingRecoveryTag

Gets the ad blocking recovery tag of an account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdsenseAccountsGetAdBlockingRecoveryTagRequest;
import org.openapis.openapi.models.operations.AdsenseAccountsGetAdBlockingRecoveryTagResponse;
import org.openapis.openapi.models.operations.AdsenseAccountsGetAdBlockingRecoveryTagSecurity;
import org.openapis.openapi.models.operations.AdsenseAccountsGetAdBlockingRecoveryTagSecurityOption1;
import org.openapis.openapi.models.operations.AdsenseAccountsGetAdBlockingRecoveryTagSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdsenseAccountsGetAdBlockingRecoveryTagRequest req = new AdsenseAccountsGetAdBlockingRecoveryTagRequest("quos") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "magni";
                alt = AltEnum.PROTO;
                callback = "ipsam";
                fields = "alias";
                key = "fugit";
                oauthToken = "dolorum";
                prettyPrint = false;
                quotaUser = "excepturi";
                uploadType = "tempora";
                uploadProtocol = "facilis";
            }};            

            AdsenseAccountsGetAdBlockingRecoveryTagResponse res = sdk.accounts.adsenseAccountsGetAdBlockingRecoveryTag(req, new AdsenseAccountsGetAdBlockingRecoveryTagSecurity() {{
                option1 = new AdsenseAccountsGetAdBlockingRecoveryTagSecurityOption1("tempore", "labore") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.adBlockingRecoveryTag != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adsenseAccountsList

Lists all accounts available to this user.

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
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdsenseAccountsListRequest req = new AdsenseAccountsListRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "eum";
                alt = AltEnum.JSON;
                callback = "eligendi";
                fields = "sint";
                key = "aliquid";
                oauthToken = "provident";
                pageSize = 896039L;
                pageToken = "sint";
                prettyPrint = false;
                quotaUser = "officia";
                uploadType = "dolor";
                uploadProtocol = "debitis";
            }};            

            AdsenseAccountsListResponse res = sdk.accounts.adsenseAccountsList(req, new AdsenseAccountsListSecurity() {{
                option1 = new AdsenseAccountsListSecurityOption1("a", "dolorum") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listAccountsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adsenseAccountsListChildAccounts

Lists all accounts directly managed by the given AdSense account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdsenseAccountsListChildAccountsRequest;
import org.openapis.openapi.models.operations.AdsenseAccountsListChildAccountsResponse;
import org.openapis.openapi.models.operations.AdsenseAccountsListChildAccountsSecurity;
import org.openapis.openapi.models.operations.AdsenseAccountsListChildAccountsSecurityOption1;
import org.openapis.openapi.models.operations.AdsenseAccountsListChildAccountsSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdsenseAccountsListChildAccountsRequest req = new AdsenseAccountsListChildAccountsRequest("in") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "illum";
                alt = AltEnum.PROTO;
                callback = "rerum";
                fields = "dicta";
                key = "magnam";
                oauthToken = "cumque";
                pageSize = 813798L;
                pageToken = "ea";
                prettyPrint = false;
                quotaUser = "aliquid";
                uploadType = "laborum";
                uploadProtocol = "accusamus";
            }};            

            AdsenseAccountsListChildAccountsResponse res = sdk.accounts.adsenseAccountsListChildAccounts(req, new AdsenseAccountsListChildAccountsSecurity() {{
                option1 = new AdsenseAccountsListChildAccountsSecurityOption1("non", "occaecati") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listChildAccountsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adsenseAccountsPaymentsList

Lists all the payments available for an account.

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
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdsenseAccountsPaymentsListRequest req = new AdsenseAccountsPaymentsListRequest("enim") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "delectus";
                alt = AltEnum.PROTO;
                callback = "provident";
                fields = "nam";
                key = "id";
                oauthToken = "blanditiis";
                prettyPrint = false;
                quotaUser = "deleniti";
                uploadType = "sapiente";
                uploadProtocol = "amet";
            }};            

            AdsenseAccountsPaymentsListResponse res = sdk.accounts.adsenseAccountsPaymentsList(req, new AdsenseAccountsPaymentsListSecurity() {{
                option1 = new AdsenseAccountsPaymentsListSecurityOption1("deserunt", "nisi") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listPaymentsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adsenseAccountsReportsGenerate

Generates an ad hoc report.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdsenseAccountsReportsGenerateDateRangeEnum;
import org.openapis.openapi.models.operations.AdsenseAccountsReportsGenerateDimensionsEnum;
import org.openapis.openapi.models.operations.AdsenseAccountsReportsGenerateMetricsEnum;
import org.openapis.openapi.models.operations.AdsenseAccountsReportsGenerateReportingTimeZoneEnum;
import org.openapis.openapi.models.operations.AdsenseAccountsReportsGenerateRequest;
import org.openapis.openapi.models.operations.AdsenseAccountsReportsGenerateResponse;
import org.openapis.openapi.models.operations.AdsenseAccountsReportsGenerateSecurity;
import org.openapis.openapi.models.operations.AdsenseAccountsReportsGenerateSecurityOption1;
import org.openapis.openapi.models.operations.AdsenseAccountsReportsGenerateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdsenseAccountsReportsGenerateRequest req = new AdsenseAccountsReportsGenerateRequest("vel") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "omnis";
                alt = AltEnum.MEDIA;
                callback = "perferendis";
                currencyCode = "nihil";
                dateRange = AdsenseAccountsReportsGenerateDateRangeEnum.TODAY;
                dimensions = new org.openapis.openapi.models.operations.AdsenseAccountsReportsGenerateDimensionsEnum[]{{
                    add(AdsenseAccountsReportsGenerateDimensionsEnum.PLATFORM_TYPE_CODE),
                    add(AdsenseAccountsReportsGenerateDimensionsEnum.CUSTOM_CHANNEL_NAME),
                    add(AdsenseAccountsReportsGenerateDimensionsEnum.CUSTOM_CHANNEL_NAME),
                }};
                endDateDay = 383462L;
                endDateMonth = 618016L;
                endDateYear = 749170L;
                fields = "eum";
                filters = new String[]{{
                    add("aspernatur"),
                    add("architecto"),
                    add("magnam"),
                    add("et"),
                }};
                key = "excepturi";
                languageCode = "ullam";
                limit = 590873L;
                metrics = new org.openapis.openapi.models.operations.AdsenseAccountsReportsGenerateMetricsEnum[]{{
                    add(AdsenseAccountsReportsGenerateMetricsEnum.IMPRESSIONS_CTR),
                    add(AdsenseAccountsReportsGenerateMetricsEnum.PAGE_VIEWS),
                    add(AdsenseAccountsReportsGenerateMetricsEnum.ACTIVE_VIEW_VIEWABILITY),
                }};
                oauthToken = "reiciendis";
                orderBy = new String[]{{
                    add("ad"),
                    add("eum"),
                    add("dolor"),
                }};
                prettyPrint = false;
                quotaUser = "necessitatibus";
                reportingTimeZone = AdsenseAccountsReportsGenerateReportingTimeZoneEnum.REPORTING_TIME_ZONE_UNSPECIFIED;
                startDateDay = 367562L;
                startDateMonth = 97260L;
                startDateYear = 435865L;
                uploadType = "doloribus";
                uploadProtocol = "debitis";
            }};            

            AdsenseAccountsReportsGenerateResponse res = sdk.accounts.adsenseAccountsReportsGenerate(req, new AdsenseAccountsReportsGenerateSecurity() {{
                option1 = new AdsenseAccountsReportsGenerateSecurityOption1("eius", "maxime") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.reportResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adsenseAccountsReportsGenerateCsv

Generates a csv formatted ad hoc report.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdsenseAccountsReportsGenerateCsvDateRangeEnum;
import org.openapis.openapi.models.operations.AdsenseAccountsReportsGenerateCsvDimensionsEnum;
import org.openapis.openapi.models.operations.AdsenseAccountsReportsGenerateCsvMetricsEnum;
import org.openapis.openapi.models.operations.AdsenseAccountsReportsGenerateCsvReportingTimeZoneEnum;
import org.openapis.openapi.models.operations.AdsenseAccountsReportsGenerateCsvRequest;
import org.openapis.openapi.models.operations.AdsenseAccountsReportsGenerateCsvResponse;
import org.openapis.openapi.models.operations.AdsenseAccountsReportsGenerateCsvSecurity;
import org.openapis.openapi.models.operations.AdsenseAccountsReportsGenerateCsvSecurityOption1;
import org.openapis.openapi.models.operations.AdsenseAccountsReportsGenerateCsvSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdsenseAccountsReportsGenerateCsvRequest req = new AdsenseAccountsReportsGenerateCsvRequest("deleniti") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "in";
                alt = AltEnum.JSON;
                callback = "architecto";
                currencyCode = "repudiandae";
                dateRange = AdsenseAccountsReportsGenerateCsvDateRangeEnum.TODAY;
                dimensions = new org.openapis.openapi.models.operations.AdsenseAccountsReportsGenerateCsvDimensionsEnum[]{{
                    add(AdsenseAccountsReportsGenerateCsvDimensionsEnum.BID_TYPE_NAME),
                    add(AdsenseAccountsReportsGenerateCsvDimensionsEnum.WEBSEARCH_QUERY_STRING),
                    add(AdsenseAccountsReportsGenerateCsvDimensionsEnum.SERVED_AD_TYPE_NAME),
                }};
                endDateDay = 149448L;
                endDateMonth = 904648L;
                endDateYear = 868126L;
                fields = "accusantium";
                filters = new String[]{{
                    add("praesentium"),
                }};
                key = "natus";
                languageCode = "magni";
                limit = 123820L;
                metrics = new org.openapis.openapi.models.operations.AdsenseAccountsReportsGenerateCsvMetricsEnum[]{{
                    add(AdsenseAccountsReportsGenerateCsvMetricsEnum.IMPRESSIONS_RPM),
                    add(AdsenseAccountsReportsGenerateCsvMetricsEnum.INDIVIDUAL_AD_IMPRESSIONS_RPM),
                    add(AdsenseAccountsReportsGenerateCsvMetricsEnum.MATCHED_AD_REQUESTS_RPM),
                    add(AdsenseAccountsReportsGenerateCsvMetricsEnum.CLICKS_SPAM_RATIO),
                }};
                oauthToken = "excepturi";
                orderBy = new String[]{{
                    add("ea"),
                }};
                prettyPrint = false;
                quotaUser = "accusantium";
                reportingTimeZone = AdsenseAccountsReportsGenerateCsvReportingTimeZoneEnum.REPORTING_TIME_ZONE_UNSPECIFIED;
                startDateDay = 982575L;
                startDateMonth = 697429L;
                startDateYear = 373291L;
                uploadType = "voluptate";
                uploadProtocol = "autem";
            }};            

            AdsenseAccountsReportsGenerateCsvResponse res = sdk.accounts.adsenseAccountsReportsGenerateCsv(req, new AdsenseAccountsReportsGenerateCsvSecurity() {{
                option1 = new AdsenseAccountsReportsGenerateCsvSecurityOption1("nam", "eaque") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.httpBody != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adsenseAccountsReportsGetSaved

Gets the saved report from the given resource name.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdsenseAccountsReportsGetSavedRequest;
import org.openapis.openapi.models.operations.AdsenseAccountsReportsGetSavedResponse;
import org.openapis.openapi.models.operations.AdsenseAccountsReportsGetSavedSecurity;
import org.openapis.openapi.models.operations.AdsenseAccountsReportsGetSavedSecurityOption1;
import org.openapis.openapi.models.operations.AdsenseAccountsReportsGetSavedSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdsenseAccountsReportsGetSavedRequest req = new AdsenseAccountsReportsGetSavedRequest("pariatur") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "voluptatibus";
                alt = AltEnum.JSON;
                callback = "fugiat";
                fields = "amet";
                key = "aut";
                oauthToken = "cumque";
                prettyPrint = false;
                quotaUser = "corporis";
                uploadType = "hic";
                uploadProtocol = "libero";
            }};            

            AdsenseAccountsReportsGetSavedResponse res = sdk.accounts.adsenseAccountsReportsGetSaved(req, new AdsenseAccountsReportsGetSavedSecurity() {{
                option1 = new AdsenseAccountsReportsGetSavedSecurityOption1("nobis", "dolores") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.savedReport != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adsenseAccountsReportsSavedGenerate

Generates a saved report.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdsenseAccountsReportsSavedGenerateDateRangeEnum;
import org.openapis.openapi.models.operations.AdsenseAccountsReportsSavedGenerateReportingTimeZoneEnum;
import org.openapis.openapi.models.operations.AdsenseAccountsReportsSavedGenerateRequest;
import org.openapis.openapi.models.operations.AdsenseAccountsReportsSavedGenerateResponse;
import org.openapis.openapi.models.operations.AdsenseAccountsReportsSavedGenerateSecurity;
import org.openapis.openapi.models.operations.AdsenseAccountsReportsSavedGenerateSecurityOption1;
import org.openapis.openapi.models.operations.AdsenseAccountsReportsSavedGenerateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdsenseAccountsReportsSavedGenerateRequest req = new AdsenseAccountsReportsSavedGenerateRequest("quis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "dignissimos";
                alt = AltEnum.JSON;
                callback = "quis";
                currencyCode = "nesciunt";
                dateRange = AdsenseAccountsReportsSavedGenerateDateRangeEnum.CUSTOM;
                endDateDay = 18521L;
                endDateMonth = 170986L;
                endDateYear = 793698L;
                fields = "quam";
                key = "dolor";
                languageCode = "vero";
                oauthToken = "nostrum";
                prettyPrint = false;
                quotaUser = "hic";
                reportingTimeZone = AdsenseAccountsReportsSavedGenerateReportingTimeZoneEnum.GOOGLE_TIME_ZONE;
                startDateDay = 608253L;
                startDateMonth = 704415L;
                startDateYear = 596656L;
                uploadType = "voluptatem";
                uploadProtocol = "porro";
            }};            

            AdsenseAccountsReportsSavedGenerateResponse res = sdk.accounts.adsenseAccountsReportsSavedGenerate(req, new AdsenseAccountsReportsSavedGenerateSecurity() {{
                option1 = new AdsenseAccountsReportsSavedGenerateSecurityOption1("consequuntur", "blanditiis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.reportResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adsenseAccountsReportsSavedGenerateCsv

Generates a csv formatted saved report.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdsenseAccountsReportsSavedGenerateCsvDateRangeEnum;
import org.openapis.openapi.models.operations.AdsenseAccountsReportsSavedGenerateCsvReportingTimeZoneEnum;
import org.openapis.openapi.models.operations.AdsenseAccountsReportsSavedGenerateCsvRequest;
import org.openapis.openapi.models.operations.AdsenseAccountsReportsSavedGenerateCsvResponse;
import org.openapis.openapi.models.operations.AdsenseAccountsReportsSavedGenerateCsvSecurity;
import org.openapis.openapi.models.operations.AdsenseAccountsReportsSavedGenerateCsvSecurityOption1;
import org.openapis.openapi.models.operations.AdsenseAccountsReportsSavedGenerateCsvSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdsenseAccountsReportsSavedGenerateCsvRequest req = new AdsenseAccountsReportsSavedGenerateCsvRequest("error") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "occaecati";
                alt = AltEnum.PROTO;
                callback = "adipisci";
                currencyCode = "asperiores";
                dateRange = AdsenseAccountsReportsSavedGenerateCsvDateRangeEnum.LAST30_DAYS;
                endDateDay = 267262L;
                endDateMonth = 613966L;
                endDateYear = 679091L;
                fields = "deleniti";
                key = "pariatur";
                languageCode = "provident";
                oauthToken = "nobis";
                prettyPrint = false;
                quotaUser = "libero";
                reportingTimeZone = AdsenseAccountsReportsSavedGenerateCsvReportingTimeZoneEnum.GOOGLE_TIME_ZONE;
                startDateDay = 311945L;
                startDateMonth = 554242L;
                startDateYear = 398221L;
                uploadType = "dolorem";
                uploadProtocol = "dolorem";
            }};            

            AdsenseAccountsReportsSavedGenerateCsvResponse res = sdk.accounts.adsenseAccountsReportsSavedGenerateCsv(req, new AdsenseAccountsReportsSavedGenerateCsvSecurity() {{
                option1 = new AdsenseAccountsReportsSavedGenerateCsvSecurityOption1("dolor", "qui") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.httpBody != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adsenseAccountsReportsSavedList

Lists saved reports.

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
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdsenseAccountsReportsSavedListRequest req = new AdsenseAccountsReportsSavedListRequest("ipsum") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "excepturi";
                alt = AltEnum.PROTO;
                callback = "voluptate";
                fields = "dignissimos";
                key = "reiciendis";
                oauthToken = "amet";
                pageSize = 680545L;
                pageToken = "numquam";
                prettyPrint = false;
                quotaUser = "veritatis";
                uploadType = "ipsa";
                uploadProtocol = "ipsa";
            }};            

            AdsenseAccountsReportsSavedListResponse res = sdk.accounts.adsenseAccountsReportsSavedList(req, new AdsenseAccountsReportsSavedListSecurity() {{
                option1 = new AdsenseAccountsReportsSavedListSecurityOption1("iure", "odio") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listSavedReportsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adsenseAccountsSitesGet

Gets information about the selected site.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdsenseAccountsSitesGetRequest;
import org.openapis.openapi.models.operations.AdsenseAccountsSitesGetResponse;
import org.openapis.openapi.models.operations.AdsenseAccountsSitesGetSecurity;
import org.openapis.openapi.models.operations.AdsenseAccountsSitesGetSecurityOption1;
import org.openapis.openapi.models.operations.AdsenseAccountsSitesGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdsenseAccountsSitesGetRequest req = new AdsenseAccountsSitesGetRequest("quaerat") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quidem";
                alt = AltEnum.PROTO;
                callback = "voluptas";
                fields = "natus";
                key = "eos";
                oauthToken = "atque";
                prettyPrint = false;
                quotaUser = "sit";
                uploadType = "fugiat";
                uploadProtocol = "ab";
            }};            

            AdsenseAccountsSitesGetResponse res = sdk.accounts.adsenseAccountsSitesGet(req, new AdsenseAccountsSitesGetSecurity() {{
                option1 = new AdsenseAccountsSitesGetSecurityOption1("soluta", "dolorum") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.site != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## adsenseAccountsSitesList

Lists all the sites available in an account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdsenseAccountsSitesListRequest;
import org.openapis.openapi.models.operations.AdsenseAccountsSitesListResponse;
import org.openapis.openapi.models.operations.AdsenseAccountsSitesListSecurity;
import org.openapis.openapi.models.operations.AdsenseAccountsSitesListSecurityOption1;
import org.openapis.openapi.models.operations.AdsenseAccountsSitesListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdsenseAccountsSitesListRequest req = new AdsenseAccountsSitesListRequest("iusto") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "dolorum";
                alt = AltEnum.MEDIA;
                callback = "omnis";
                fields = "necessitatibus";
                key = "distinctio";
                oauthToken = "asperiores";
                pageSize = 469497L;
                pageToken = "ipsum";
                prettyPrint = false;
                quotaUser = "voluptate";
                uploadType = "id";
                uploadProtocol = "saepe";
            }};            

            AdsenseAccountsSitesListResponse res = sdk.accounts.adsenseAccountsSitesList(req, new AdsenseAccountsSitesListSecurity() {{
                option1 = new AdsenseAccountsSitesListSecurityOption1("eius", "aspernatur") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listSitesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
