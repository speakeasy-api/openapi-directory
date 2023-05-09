# rewardEarningFulfillment

## Overview

A reward earning fulfillment specifies the portion of a reward earning that was fulfilled and at what date.

### Available Operations

* [createRewardEarningFulfillment](#createrewardearningfulfillment) - Create a reward earning fulfillment
* [fetchRewardEarningFulfillment](#fetchrewardearningfulfillment) - Get a reward earning fulfillment
* [fetchRewardEarningFulfillments](#fetchrewardearningfulfillments) - List reward earning fulfillments

## createRewardEarningFulfillment

Create a reward earning fulfillment for a reward earning. There can only be one fulfillment for each earning.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateRewardEarningFulfillmentResponse;
import org.openapis.openapi.models.shared.CreateRewardEarningFulfillmentRequestInput;
import org.openapis.openapi.models.shared.RewardEarningFulfillmentResourceAttributesInput;
import org.openapis.openapi.models.shared.RewardEarningFulfillmentResourceInput;
import org.openapis.openapi.models.shared.RewardEarningFulfillmentResourceRelationshipsInput;
import org.openapis.openapi.models.shared.RewardEarningFulfillmentResourceRelationshipsRewardEarning;
import org.openapis.openapi.models.shared.RewardEarningFulfillmentResourceRelationshipsRewardEarningData;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.CreateRewardEarningFulfillmentRequestInput req = new CreateRewardEarningFulfillmentRequestInput(                new RewardEarningFulfillmentResourceInput("quos") {{
                                attributes = new RewardEarningFulfillmentResourceAttributesInput("eius", 1319.03);;
                                id = "73a8418d-1623-409f-b092-9921aefb9f58";
                                relationships = new RewardEarningFulfillmentResourceRelationshipsInput(                new RewardEarningFulfillmentResourceRelationshipsRewardEarning() {{
                                                    data = new RewardEarningFulfillmentResourceRelationshipsRewardEarningData() {{
                                                        id = "c4d86e68-e4be-4056-813f-59da757a59ec";
                                                        type = "hic";
                                                    }};;
                                                }};);;
                            }};);            

            CreateRewardEarningFulfillmentResponse res = sdk.rewardEarningFulfillment.createRewardEarningFulfillment(req);

            if (res.createRewardEarningFulfillmentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchRewardEarningFulfillment

Get a reward earning fulfillment record by id.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchRewardEarningFulfillmentRequest;
import org.openapis.openapi.models.operations.FetchRewardEarningFulfillmentResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchRewardEarningFulfillmentRequest req = new FetchRewardEarningFulfillmentRequest("necessitatibus");            

            FetchRewardEarningFulfillmentResponse res = sdk.rewardEarningFulfillment.fetchRewardEarningFulfillment(req);

            if (res.fetchRewardEarningFulfillmentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchRewardEarningFulfillments

Get a list of reward earning fulfillments matching the specified filters.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchRewardEarningFulfillmentsRequest;
import org.openapis.openapi.models.operations.FetchRewardEarningFulfillmentsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchRewardEarningFulfillmentsRequest req = new FetchRewardEarningFulfillmentsRequest("asperiores");            

            FetchRewardEarningFulfillmentsResponse res = sdk.rewardEarningFulfillment.fetchRewardEarningFulfillments(req);

            if (res.fetchRewardEarningFulfillmentsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
