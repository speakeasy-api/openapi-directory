# payors

## Overview

A Payor is the entity which is sending money. Here you will find the available APIs for working with Payors.

### Available Operations

* [~~getPayorByIdV1~~](#getpayorbyidv1) - Get Payor :warning: **Deprecated**
* [getPayorByIdV2](#getpayorbyidv2) - Get Payor
* [payorAddPayorLogoV1](#payoraddpayorlogov1) - Add Logo
* [payorCreateApiKeyV1](#payorcreateapikeyv1) - Create API Key
* [payorCreateApplicationV1](#payorcreateapplicationv1) - Create Application
* [payorEmailOptOut](#payoremailoptout) - Reminder Email Opt-Out
* [payorGetBranding](#payorgetbranding) - Get Branding

## ~~getPayorByIdV1~~

<p>Get a Single Payor by Id.</p>
<p>deprecated since v2.10 - Use /v2/payors


> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPayorByIdV1Request;
import org.openapis.openapi.models.operations.GetPayorByIdV1Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("doloribus") {{
                    oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetPayorByIdV1Request req = new GetPayorByIdV1Request("ec9578a6-4584-4273-a841-8d162309fb09");            

            GetPayorByIdV1Response res = sdk.payors.getPayorByIdV1(req);

            if (res.payorV1 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPayorByIdV2

Get a Single Payor by Id.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPayorByIdV2Request;
import org.openapis.openapi.models.operations.GetPayorByIdV2Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eos") {{
                    oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetPayorByIdV2Request req = new GetPayorByIdV2Request("9921aefb-9f58-4c4d-86e6-8e4be056013f");            

            GetPayorByIdV2Response res = sdk.payors.getPayorByIdV2(req);

            if (res.payorV2 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## payorAddPayorLogoV1

<p>Add Payor Logo</p>
<p>Logo file is used in your branding and emails sent to payees</p>


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PayorAddPayorLogoV1Request;
import org.openapis.openapi.models.operations.PayorAddPayorLogoV1Response;
import org.openapis.openapi.models.shared.PayorLogoRequest;
import org.openapis.openapi.models.shared.PayorLogoRequestLogo;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("enim") {{
                    oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            PayorAddPayorLogoV1Request req = new PayorAddPayorLogoV1Request(                new PayorLogoRequest() {{
                                logo = new PayorLogoRequestLogo("sint".getBytes(), "nulla");;
                            }};, "a757a59e-cfef-466e-b1ca-a3383c2beb47");            

            PayorAddPayorLogoV1Response res = sdk.payors.payorAddPayorLogoV1(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## payorCreateApiKeyV1

<p>Create an an API key for the given payor Id and application Id</p>
<p>You can create multiple API Keys for a given application</p>
<p>API Keys are programmatic users for integrating your application with the Velo platform</p>


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PayorCreateApiKeyV1Request;
import org.openapis.openapi.models.operations.PayorCreateApiKeyV1Response;
import org.openapis.openapi.models.shared.PayorCreateApiKeyRequest;
import org.openapis.openapi.models.shared.PayorCreateApiKeyRequestRolesEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptate") {{
                    oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            PayorCreateApiKeyV1Request req = new PayorCreateApiKeyV1Request(                new PayorCreateApiKeyRequest("iOS Key",                 new org.openapis.openapi.models.shared.PayorCreateApiKeyRequestRolesEnum[]{{
                                                add(PayorCreateApiKeyRequestRolesEnum.VELO_PAYOR_ADMIN),
                                            }}) {{
                                description = "Key for iOS mobile application";
                            }};, "3c8d72f6-4d1d-4b1f-ac43-10661e96349e", "1cf9e06e-3a43-4700-8ae6-b6bc9b8f759e");            

            PayorCreateApiKeyV1Response res = sdk.payors.payorCreateApiKeyV1(req);

            if (res.payorCreateApiKeyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## payorCreateApplicationV1

<p>Create an application for the given Payor ID.</p>
<p>Applications provide a means to group your API Keys</p>
<p>For example you might have an SAP application that you wish to integrate with Velo</p>
<p>You can create an application and then create one or more API keys for the application</p>


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PayorCreateApplicationV1Request;
import org.openapis.openapi.models.operations.PayorCreateApplicationV1Response;
import org.openapis.openapi.models.shared.PayorCreateApplicationRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("animi") {{
                    oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            PayorCreateApplicationV1Request req = new PayorCreateApplicationV1Request(                new PayorCreateApplicationRequest("SAP") {{
                                description = "SAP Application integration";
                            }};, "c55a9741-d311-4352-965b-b8a720261143");            

            PayorCreateApplicationV1Response res = sdk.payors.payorCreateApplicationV1(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## payorEmailOptOut

Update the emailRemindersOptOut field for a Payor. This API can be used to opt out
or opt into Payor Reminder emails. These emails are typically around payee events
such as payees registering and onboarding.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PayorEmailOptOutRequest;
import org.openapis.openapi.models.operations.PayorEmailOptOutResponse;
import org.openapis.openapi.models.shared.PayorEmailOptOutRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("exercitationem") {{
                    oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            PayorEmailOptOutRequest req = new PayorEmailOptOutRequest(                new PayorEmailOptOutRequest(false);, "e139dbc2-259b-41ab-9a8c-070e1084cb06");            

            PayorEmailOptOutResponse res = sdk.payors.payorEmailOptOut(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## payorGetBranding

Get the payor branding details.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PayorGetBrandingRequest;
import org.openapis.openapi.models.operations.PayorGetBrandingResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("esse") {{
                    oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            PayorGetBrandingRequest req = new PayorGetBrandingRequest("2d1ad879-eeb9-4665-b85e-fbd02bae0be2");            

            PayorGetBrandingResponse res = sdk.payors.payorGetBranding(req);

            if (res.payorBrandingResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
