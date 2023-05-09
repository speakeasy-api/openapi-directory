# subscriptions

## Overview

Operations to manage event subscriptions.

### Available Operations

* [deleteWebhooksV3AppIdSubscriptionsSubscriptionIdArchive](#deletewebhooksv3appidsubscriptionssubscriptionidarchive)
* [getWebhooksV3AppIdSubscriptionsSubscriptionIdGetById](#getwebhooksv3appidsubscriptionssubscriptionidgetbyid)
* [getWebhooksV3AppIdSubscriptionsGetAll](#getwebhooksv3appidsubscriptionsgetall)
* [patchWebhooksV3AppIdSubscriptionsSubscriptionIdUpdate](#patchwebhooksv3appidsubscriptionssubscriptionidupdate)
* [postWebhooksV3AppIdSubscriptionsBatchUpdateUpdateBatch](#postwebhooksv3appidsubscriptionsbatchupdateupdatebatch)
* [postWebhooksV3AppIdSubscriptionsCreate](#postwebhooksv3appidsubscriptionscreate)

## deleteWebhooksV3AppIdSubscriptionsSubscriptionIdArchive

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteWebhooksV3AppIdSubscriptionsSubscriptionIdArchiveRequest;
import org.openapis.openapi.models.operations.DeleteWebhooksV3AppIdSubscriptionsSubscriptionIdArchiveResponse;
import org.openapis.openapi.models.operations.DeleteWebhooksV3AppIdSubscriptionsSubscriptionIdArchiveSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteWebhooksV3AppIdSubscriptionsSubscriptionIdArchiveRequest req = new DeleteWebhooksV3AppIdSubscriptionsSubscriptionIdArchiveRequest(384382, 437587);            

            DeleteWebhooksV3AppIdSubscriptionsSubscriptionIdArchiveResponse res = sdk.subscriptions.deleteWebhooksV3AppIdSubscriptionsSubscriptionIdArchive(req, new DeleteWebhooksV3AppIdSubscriptionsSubscriptionIdArchiveSecurity("magnam") {{
                developerHapikey = "YOUR_API_KEY_HERE";
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

## getWebhooksV3AppIdSubscriptionsSubscriptionIdGetById

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetWebhooksV3AppIdSubscriptionsSubscriptionIdGetByIdRequest;
import org.openapis.openapi.models.operations.GetWebhooksV3AppIdSubscriptionsSubscriptionIdGetByIdResponse;
import org.openapis.openapi.models.operations.GetWebhooksV3AppIdSubscriptionsSubscriptionIdGetByIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetWebhooksV3AppIdSubscriptionsSubscriptionIdGetByIdRequest req = new GetWebhooksV3AppIdSubscriptionsSubscriptionIdGetByIdRequest(891773, 56713);            

            GetWebhooksV3AppIdSubscriptionsSubscriptionIdGetByIdResponse res = sdk.subscriptions.getWebhooksV3AppIdSubscriptionsSubscriptionIdGetById(req, new GetWebhooksV3AppIdSubscriptionsSubscriptionIdGetByIdSecurity("delectus") {{
                developerHapikey = "YOUR_API_KEY_HERE";
            }});

            if (res.subscriptionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getWebhooksV3AppIdSubscriptionsGetAll

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetWebhooksV3AppIdSubscriptionsGetAllRequest;
import org.openapis.openapi.models.operations.GetWebhooksV3AppIdSubscriptionsGetAllResponse;
import org.openapis.openapi.models.operations.GetWebhooksV3AppIdSubscriptionsGetAllSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetWebhooksV3AppIdSubscriptionsGetAllRequest req = new GetWebhooksV3AppIdSubscriptionsGetAllRequest(272656);            

            GetWebhooksV3AppIdSubscriptionsGetAllResponse res = sdk.subscriptions.getWebhooksV3AppIdSubscriptionsGetAll(req, new GetWebhooksV3AppIdSubscriptionsGetAllSecurity("suscipit") {{
                developerHapikey = "YOUR_API_KEY_HERE";
            }});

            if (res.subscriptionListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patchWebhooksV3AppIdSubscriptionsSubscriptionIdUpdate

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatchWebhooksV3AppIdSubscriptionsSubscriptionIdUpdateRequest;
import org.openapis.openapi.models.operations.PatchWebhooksV3AppIdSubscriptionsSubscriptionIdUpdateResponse;
import org.openapis.openapi.models.operations.PatchWebhooksV3AppIdSubscriptionsSubscriptionIdUpdateSecurity;
import org.openapis.openapi.models.shared.SubscriptionPatchRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatchWebhooksV3AppIdSubscriptionsSubscriptionIdUpdateRequest req = new PatchWebhooksV3AppIdSubscriptionsSubscriptionIdUpdateRequest(                new SubscriptionPatchRequest() {{
                                active = false;
                            }};, 477665, 791725);            

            PatchWebhooksV3AppIdSubscriptionsSubscriptionIdUpdateResponse res = sdk.subscriptions.patchWebhooksV3AppIdSubscriptionsSubscriptionIdUpdate(req, new PatchWebhooksV3AppIdSubscriptionsSubscriptionIdUpdateSecurity("placeat") {{
                developerHapikey = "YOUR_API_KEY_HERE";
            }});

            if (res.subscriptionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postWebhooksV3AppIdSubscriptionsBatchUpdateUpdateBatch

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostWebhooksV3AppIdSubscriptionsBatchUpdateUpdateBatchRequest;
import org.openapis.openapi.models.operations.PostWebhooksV3AppIdSubscriptionsBatchUpdateUpdateBatchResponse;
import org.openapis.openapi.models.operations.PostWebhooksV3AppIdSubscriptionsBatchUpdateUpdateBatchSecurity;
import org.openapis.openapi.models.shared.BatchInputSubscriptionBatchUpdateRequest;
import org.openapis.openapi.models.shared.SubscriptionBatchUpdateRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostWebhooksV3AppIdSubscriptionsBatchUpdateUpdateBatchRequest req = new PostWebhooksV3AppIdSubscriptionsBatchUpdateUpdateBatchRequest(                new BatchInputSubscriptionBatchUpdateRequest(                new org.openapis.openapi.models.shared.SubscriptionBatchUpdateRequest[]{{
                                                add(new SubscriptionBatchUpdateRequest(false, 568045) {{
                                                    active = false;
                                                    id = 479977;
                                                }}),
                                                add(new SubscriptionBatchUpdateRequest(false, 925597) {{
                                                    active = false;
                                                    id = 392785;
                                                }}),
                                                add(new SubscriptionBatchUpdateRequest(false, 71036) {{
                                                    active = false;
                                                    id = 836079;
                                                }}),
                                            }});, 337396);            

            PostWebhooksV3AppIdSubscriptionsBatchUpdateUpdateBatchResponse res = sdk.subscriptions.postWebhooksV3AppIdSubscriptionsBatchUpdateUpdateBatch(req, new PostWebhooksV3AppIdSubscriptionsBatchUpdateUpdateBatchSecurity("veritatis") {{
                developerHapikey = "YOUR_API_KEY_HERE";
            }});

            if (res.batchResponseSubscriptionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postWebhooksV3AppIdSubscriptionsCreate

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostWebhooksV3AppIdSubscriptionsCreateRequest;
import org.openapis.openapi.models.operations.PostWebhooksV3AppIdSubscriptionsCreateResponse;
import org.openapis.openapi.models.operations.PostWebhooksV3AppIdSubscriptionsCreateSecurity;
import org.openapis.openapi.models.shared.SubscriptionCreateRequest;
import org.openapis.openapi.models.shared.SubscriptionCreateRequestEventTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostWebhooksV3AppIdSubscriptionsCreateRequest req = new PostWebhooksV3AppIdSubscriptionsCreateRequest(                new SubscriptionCreateRequest(SubscriptionCreateRequestEventTypeEnum.DEAL_MERGE) {{
                                active = false;
                                propertyName = "perferendis";
                            }};, 368241);            

            PostWebhooksV3AppIdSubscriptionsCreateResponse res = sdk.subscriptions.postWebhooksV3AppIdSubscriptionsCreate(req, new PostWebhooksV3AppIdSubscriptionsCreateSecurity("repellendus") {{
                developerHapikey = "YOUR_API_KEY_HERE";
            }});

            if (res.subscriptionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
