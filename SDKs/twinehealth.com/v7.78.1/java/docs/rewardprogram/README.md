# rewardProgram

## Overview

A reward program provides the details for a rewards program for a group. Different rewards programs can be created for different periods of time specified by the start_at and end_at dates. A reward program can activated for a patient any time between these dates. An activated reward program for a patient is called a reward program activation.

### Available Operations

* [createRewardProgram](#createrewardprogram) - Create a reward program
* [fetchRewardProgram](#fetchrewardprogram) - Get a reward program
* [fetchRewardProgramGroup](#fetchrewardprogramgroup) - Get group for a reward program
* [fetchRewardPrograms](#fetchrewardprograms) - List reward programs

## createRewardProgram

Create a reward program for a group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateRewardProgramResponse;
import org.openapis.openapi.models.shared.CreateRewardProgramRequest;
import org.openapis.openapi.models.shared.RewardProgramResource;
import org.openapis.openapi.models.shared.RewardProgramResourceAttributes;
import org.openapis.openapi.models.shared.RewardProgramResourceAttributesBudgetUnitEnum;
import org.openapis.openapi.models.shared.RewardProgramResourceRelationships;
import org.openapis.openapi.models.shared.RewardProgramResourceRelationshipsGroup;
import org.openapis.openapi.models.shared.RewardProgramResourceRelationshipsGroupData;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.CreateRewardProgramRequest req = new CreateRewardProgramRequest(                new RewardProgramResource("ex") {{
                                attributes = new RewardProgramResourceAttributes(3767.41, "debitis", "delectus", "quae") {{
                                    budgetUnit = RewardProgramResourceAttributesBudgetUnitEnum.CREDIT;
                                    description = "fuga";
                                    durationActive = 6756.89;
                                    frozen = false;
                                    fulfillAsEarned = false;
                                    tagline = "consectetur";
                                }};;
                                id = "383c2beb-4773-473c-8d72-f64d1db1f2c4";
                                relationships = new RewardProgramResourceRelationships(                new RewardProgramResourceRelationshipsGroup(                new RewardProgramResourceRelationshipsGroupData("velit", "illo");););;
                            }};);            

            CreateRewardProgramResponse res = sdk.rewardProgram.createRewardProgram(req);

            if (res.createRewardProgramResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchRewardProgram

Get a reward program record by id.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchRewardProgramRequest;
import org.openapis.openapi.models.operations.FetchRewardProgramResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchRewardProgramRequest req = new FetchRewardProgramRequest("accusantium");            

            FetchRewardProgramResponse res = sdk.rewardProgram.fetchRewardProgram(req);

            if (res.fetchRewardProgramResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchRewardProgramGroup

Get the group related to a reward program.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchRewardProgramGroupRequest;
import org.openapis.openapi.models.operations.FetchRewardProgramGroupResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchRewardProgramGroupRequest req = new FetchRewardProgramGroupRequest("vel");            

            FetchRewardProgramGroupResponse res = sdk.rewardProgram.fetchRewardProgramGroup(req);

            if (res.fetchGroupsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchRewardPrograms

Get a list of reward programs matching the specified filters.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchRewardProgramsRequest;
import org.openapis.openapi.models.operations.FetchRewardProgramsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchRewardProgramsRequest req = new FetchRewardProgramsRequest() {{
                filterGroups = "ea";
                filterOrganization = "beatae";
            }};            

            FetchRewardProgramsResponse res = sdk.rewardProgram.fetchRewardPrograms(req);

            if (res.fetchRewardProgramsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
