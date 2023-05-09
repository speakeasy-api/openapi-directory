# rewardProgramActivation

## Overview

A reward program activation is the activation of a reward program for a specific patient.

### Available Operations

* [createRewardProgramActivation](#createrewardprogramactivation) - Create a reward program activation
* [fetchRewardProgramActivation](#fetchrewardprogramactivation) - Get a reward program activation
* [fetchRewardProgramActivations](#fetchrewardprogramactivations) - List reward program activations

## createRewardProgramActivation

Create a reward program activation for a patient. There can only be one activation for a patient for a given reward program.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateRewardProgramActivationResponse;
import org.openapis.openapi.models.shared.CreateRewardProgramActivationRequestInput;
import org.openapis.openapi.models.shared.RewardProgramActivationResourceAttributesInput;
import org.openapis.openapi.models.shared.RewardProgramActivationResourceInput;
import org.openapis.openapi.models.shared.RewardProgramActivationResourceRelationships;
import org.openapis.openapi.models.shared.RewardProgramActivationResourceRelationshipsPatient;
import org.openapis.openapi.models.shared.RewardProgramActivationResourceRelationshipsPatientData;
import org.openapis.openapi.models.shared.RewardProgramActivationResourceRelationshipsRewardProgram;
import org.openapis.openapi.models.shared.RewardProgramActivationResourceRelationshipsRewardProgramData;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.CreateRewardProgramActivationRequestInput req = new CreateRewardProgramActivationRequestInput(                new RewardProgramActivationResourceInput("vero") {{
                                attributes = new RewardProgramActivationResourceAttributesInput("excepturi") {{
                                    active = false;
                                    deactivatedAt = "eum";
                                }};;
                                id = "349e1cf9-e06e-43a4-b700-0ae6b6bc9b8f";
                                relationships = new RewardProgramActivationResourceRelationships(                new RewardProgramActivationResourceRelationshipsPatient() {{
                                                    data = new RewardProgramActivationResourceRelationshipsPatientData() {{
                                                        id = "759eac55-a974-41d3-9135-2965bb8a7202";
                                                        type = "vel";
                                                    }};;
                                                }};,                 new RewardProgramActivationResourceRelationshipsRewardProgram() {{
                                                    data = new RewardProgramActivationResourceRelationshipsRewardProgramData() {{
                                                        id = "11435e13-9dbc-4225-9b1a-bda8c070e108";
                                                        type = "dolore";
                                                    }};;
                                                }};);;
                            }};);            

            CreateRewardProgramActivationResponse res = sdk.rewardProgramActivation.createRewardProgramActivation(req);

            if (res.createRewardProgramActivationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchRewardProgramActivation

Get a reward program activationrecord by id.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchRewardProgramActivationRequest;
import org.openapis.openapi.models.operations.FetchRewardProgramActivationResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchRewardProgramActivationRequest req = new FetchRewardProgramActivationRequest("eligendi");            

            FetchRewardProgramActivationResponse res = sdk.rewardProgramActivation.fetchRewardProgramActivation(req);

            if (res.fetchRewardProgramActivationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchRewardProgramActivations

Get a list of reward program activations matching the specified filters.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchRewardProgramActivationsRequest;
import org.openapis.openapi.models.operations.FetchRewardProgramActivationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchRewardProgramActivationsRequest req = new FetchRewardProgramActivationsRequest() {{
                filterGroups = "distinctio";
                filterOrganization = "voluptatem";
                filterPatient = "autem";
            }};            

            FetchRewardProgramActivationsResponse res = sdk.rewardProgramActivation.fetchRewardProgramActivations(req);

            if (res.fetchRewardProgramActivationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
