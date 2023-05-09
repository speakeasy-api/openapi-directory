# reward

## Overview

A reward allocates a portion of the budget from the reward program activation for achieving a particular goal and sets a target date.

### Available Operations

* [createReward](#createreward) - Create a reward
* [fetchReward](#fetchreward) - Get a reward
* [fetchRewards](#fetchrewards) - List rewards

## createReward

Create a reward for a patient.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateRewardResponse;
import org.openapis.openapi.models.shared.CreateRewardRequestInput;
import org.openapis.openapi.models.shared.RewardResourceAttributesInput;
import org.openapis.openapi.models.shared.RewardResourceInput;
import org.openapis.openapi.models.shared.RewardResourceRelationshipsInput;
import org.openapis.openapi.models.shared.RewardResourceRelationshipsRewardProgramActivation;
import org.openapis.openapi.models.shared.RewardResourceRelationshipsRewardProgramActivationData;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.CreateRewardRequestInput req = new CreateRewardRequestInput(                new RewardResourceInput("architecto") {{
                                attributes = new RewardResourceAttributesInput("fugiat", 396.5, "dicta") {{
                                    thread = "odio";
                                    targetAt = "tempora";
                                }};;
                                id = "76360a15-db6a-4660-a59a-1adeaab5851d";
                                relationships = new RewardResourceRelationshipsInput(                new RewardResourceRelationshipsRewardProgramActivation() {{
                                                    data = new RewardResourceRelationshipsRewardProgramActivationData() {{
                                                        id = "6c645b08-b618-491b-aa0f-e1ade008e6f8";
                                                        type = "minus";
                                                    }};;
                                                }};);;
                            }};);            

            CreateRewardResponse res = sdk.reward.createReward(req);

            if (res.createRewardResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchReward

Get a reward record by id.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchRewardRequest;
import org.openapis.openapi.models.operations.FetchRewardResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchRewardRequest req = new FetchRewardRequest("nemo");            

            FetchRewardResponse res = sdk.reward.fetchReward(req);

            if (res.fetchRewardResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchRewards

Get a list of rewards matching the specified filters.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchRewardsRequest;
import org.openapis.openapi.models.operations.FetchRewardsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchRewardsRequest req = new FetchRewardsRequest() {{
                filterGroups = "asperiores";
                filterOrganization = "ratione";
                filterPatient = "ullam";
                filterRewardProgramActivation = "perferendis";
                filterThread = "illum";
            }};            

            FetchRewardsResponse res = sdk.reward.fetchRewards(req);

            if (res.fetchRewardsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
