# rewardEarning

## Overview

A reward earning specifies the portion of a reward that was earned and at what date.

### Available Operations

* [createRewardEarning](#createrewardearning) - Create a reward earning
* [fetchRewardEarning](#fetchrewardearning) - Get a reward earning
* [fetchRewardEarnings](#fetchrewardearnings) - List reward earnings

## createRewardEarning

Create a reward earning for a reward. There can only be one earning for a reward. It is possilble to create multiple reward earnings simultaneously by providing and array of reward earnings in the data property.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateRewardEarningResponse;
import org.openapis.openapi.models.shared.CreateRewardEarningRequestInput;
import org.openapis.openapi.models.shared.RewardEarningResourceAttributesInput;
import org.openapis.openapi.models.shared.RewardEarningResourceInput;
import org.openapis.openapi.models.shared.RewardEarningResourceRelationshipsInput;
import org.openapis.openapi.models.shared.RewardEarningResourceRelationshipsReward;
import org.openapis.openapi.models.shared.RewardEarningResourceRelationshipsRewardData;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.CreateRewardEarningRequestInput req = new CreateRewardEarningRequestInput(                new RewardEarningResourceInput("totam") {{
                                attributes = new RewardEarningResourceAttributesInput("impedit", 8427.77);;
                                id = "b5a34181-4301-4042-9813-d5208ece7e25";
                                relationships = new RewardEarningResourceRelationshipsInput(                new RewardEarningResourceRelationshipsReward() {{
                                                    data = new RewardEarningResourceRelationshipsRewardData() {{
                                                        id = "3b668451-c6c6-4e20-9e16-deab3fec9578";
                                                        type = "officia";
                                                    }};;
                                                }};);;
                            }};);            

            CreateRewardEarningResponse res = sdk.rewardEarning.createRewardEarning(req);

            if (res.createRewardEarningResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchRewardEarning

Get a reward earning record by id.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchRewardEarningRequest;
import org.openapis.openapi.models.operations.FetchRewardEarningResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchRewardEarningRequest req = new FetchRewardEarningRequest("voluptas");            

            FetchRewardEarningResponse res = sdk.rewardEarning.fetchRewardEarning(req);

            if (res.fetchRewardEarningResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchRewardEarnings

Get a list of reward earnings matching the specified filters.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchRewardEarningsRequest;
import org.openapis.openapi.models.operations.FetchRewardEarningsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchRewardEarningsRequest req = new FetchRewardEarningsRequest("numquam", "nemo") {{
                filterReadyForFulfillment = false;
            }};            

            FetchRewardEarningsResponse res = sdk.rewardEarning.fetchRewardEarnings(req);

            if (res.fetchRewardEarningsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
