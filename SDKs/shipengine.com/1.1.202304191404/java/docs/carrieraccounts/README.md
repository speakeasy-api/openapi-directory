# carrierAccounts

## Overview

carrier accounts


### Available Operations

* [connectCarrier](#connectcarrier) - Connect a carrier account
* [disconnectCarrier](#disconnectcarrier) - Disconnect a carrier
* [getCarrierSettings](#getcarriersettings) - Get carrier settings
* [updateCarrierSettings](#updatecarriersettings) - Update carrier settings

## connectCarrier

Connect a carrier account

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConnectCarrierRequest;
import org.openapis.openapi.models.operations.ConnectCarrierResponse;
import org.openapis.openapi.models.shared.AncillaryServiceEndorsementEnum;
import org.openapis.openapi.models.shared.CarrierNameEnum;
import org.openapis.openapi.models.shared.ConnectAccessWorldwideRequestBody;
import org.openapis.openapi.models.shared.ConnectAmazonBuyShippingRequestBody;
import org.openapis.openapi.models.shared.ConnectAmazonShippingUk;
import org.openapis.openapi.models.shared.ConnectApcRequestBody;
import org.openapis.openapi.models.shared.ConnectAsendiaRequestBody;
import org.openapis.openapi.models.shared.ConnectAustraliaPostRequestBody;
import org.openapis.openapi.models.shared.ConnectCanadaPostRequestBody;
import org.openapis.openapi.models.shared.ConnectDhlEcommerceRequestBody;
import org.openapis.openapi.models.shared.ConnectDhlExpressAuRequestBody;
import org.openapis.openapi.models.shared.ConnectDhlExpressCaRequestBody;
import org.openapis.openapi.models.shared.ConnectDhlExpressRequestBody;
import org.openapis.openapi.models.shared.ConnectDhlExpressUkRequestBody;
import org.openapis.openapi.models.shared.ConnectDpdRequestBody;
import org.openapis.openapi.models.shared.ConnectEndiciaRequestBody;
import org.openapis.openapi.models.shared.ConnectFedexRequestBody;
import org.openapis.openapi.models.shared.ConnectFedexUkRequestBody;
import org.openapis.openapi.models.shared.ConnectFirstmileRequestBody;
import org.openapis.openapi.models.shared.ConnectImexRequestBody;
import org.openapis.openapi.models.shared.ConnectNewgisticsRequestBody;
import org.openapis.openapi.models.shared.ConnectOntracRequestBody;
import org.openapis.openapi.models.shared.ConnectPurolatorRequestBody;
import org.openapis.openapi.models.shared.ConnectRoyalMailRequestBody;
import org.openapis.openapi.models.shared.ConnectRrDonnelleyRequestBody;
import org.openapis.openapi.models.shared.ConnectSekoRequestBody;
import org.openapis.openapi.models.shared.ConnectSendleRequestBody;
import org.openapis.openapi.models.shared.ConnectStampsRequestBody;
import org.openapis.openapi.models.shared.ConnectUpsRequestBody;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpsInvoice;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestiae") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            ConnectCarrierRequest req = new ConnectCarrierRequest(                new ConnectRoyalMailRequestBody("natus", "laboriosam", "hic", "saepe", "fuga") {{
                                accountNumber = "quod";
                                city = "Jovanfort";
                                companyName = "dolorum";
                                contactName = "dicta";
                                email = "john.doe@example.com";
                                nickname = "nam";
                                obaEmail = "john.doe@example.com";
                                phone = "1-615-975-1442 x1774";
                                postalCode = "51036";
                                streetLine1 = "sed";
                                streetLine2 = "iste";
                                streetLine3 = "dolor";
                            }}, CarrierNameEnum.DPD);            

            ConnectCarrierResponse res = sdk.carrierAccounts.connectCarrier(req);

            if (res.connectCarrierResponseBody != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## disconnectCarrier

Disconnect a carrier

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisconnectCarrierRequest;
import org.openapis.openapi.models.operations.DisconnectCarrierResponse;
import org.openapis.openapi.models.shared.CarrierNameEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corporis") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DisconnectCarrierRequest req = new DisconnectCarrierRequest("se-28529731", CarrierNameEnum.FIRSTMILE);            

            DisconnectCarrierResponse res = sdk.carrierAccounts.disconnectCarrier(req);

            if (res.emptyResponseBody != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCarrierSettings

Get carrier settings

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCarrierSettingsRequest;
import org.openapis.openapi.models.operations.GetCarrierSettingsResponse;
import org.openapis.openapi.models.shared.CarrierNameWithSettingsEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iure") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetCarrierSettingsRequest req = new GetCarrierSettingsRequest("se-28529731", CarrierNameWithSettingsEnum.UPS);            

            GetCarrierSettingsResponse res = sdk.carrierAccounts.getCarrierSettings(req);

            if (res.getCarrierSettingsResponseBody != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateCarrierSettings

Update carrier settings

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateCarrierSettingsRequest;
import org.openapis.openapi.models.operations.UpdateCarrierSettingsResponse;
import org.openapis.openapi.models.shared.AncillaryServiceEndorsementEnum;
import org.openapis.openapi.models.shared.CarrierNameWithSettingsEnum;
import org.openapis.openapi.models.shared.FedexPickupTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SmartPostHubEnum;
import org.openapis.openapi.models.shared.UpdateAmazonBuyShippingRequestBody;
import org.openapis.openapi.models.shared.UpdateDhlExpressSettingsRequestBody;
import org.openapis.openapi.models.shared.UpdateFedexSettingsRequestBody;
import org.openapis.openapi.models.shared.UpdateNewgisticsSettingsRequestBody;
import org.openapis.openapi.models.shared.UpdateUpsSettingsRequestBody;
import org.openapis.openapi.models.shared.UpsInvoice;
import org.openapis.openapi.models.shared.UpsPickupTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quidem") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateCarrierSettingsRequest req = new UpdateCarrierSettingsRequest(                new UpdateDhlExpressSettingsRequestBody() {{
                                isPrimaryAccount = false;
                                nickname = "ipsa";
                                shouldHideAccountNumberOnArchiveDoc = false;
                            }}, "se-28529731", CarrierNameWithSettingsEnum.UPS);            

            UpdateCarrierSettingsResponse res = sdk.carrierAccounts.updateCarrierSettings(req);

            if (res.emptyResponseBody != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
