import { SpeakeasyBase } from "../../../internal/utils";
export declare class RewardEarningFulfillmentResourceAttributes extends SpeakeasyBase {
    /**
     * Date at which the reward earning was fulfilled. (Must be at the same time or after the reward was earned)
     */
    fulfilledAt: string;
    /**
     * Unit of the earned reward that has been fulfilled. (Read-only property)
     */
    fulfilledUnit?: string;
    /**
     * Value of the earned reward that has been fulfilled. (Must be greater than or equal to 0)
     */
    fulfilledValue: number;
}
export declare class RewardEarningFulfillmentResourceRelationshipsPatientData extends SpeakeasyBase {
    id?: string;
    type?: string;
}
export declare class RewardEarningFulfillmentResourceRelationshipsPatient extends SpeakeasyBase {
    data?: RewardEarningFulfillmentResourceRelationshipsPatientData;
}
export declare class RewardEarningFulfillmentResourceRelationshipsRewardEarningData extends SpeakeasyBase {
    id?: string;
    type?: string;
}
export declare class RewardEarningFulfillmentResourceRelationshipsRewardEarning extends SpeakeasyBase {
    data?: RewardEarningFulfillmentResourceRelationshipsRewardEarningData;
}
export declare class RewardEarningFulfillmentResourceRelationships extends SpeakeasyBase {
    patient?: RewardEarningFulfillmentResourceRelationshipsPatient;
    rewardEarning: RewardEarningFulfillmentResourceRelationshipsRewardEarning;
}
export declare class RewardEarningFulfillmentResource extends SpeakeasyBase {
    attributes?: RewardEarningFulfillmentResourceAttributes;
    id?: string;
    relationships?: RewardEarningFulfillmentResourceRelationships;
    type: string;
}
export declare class RewardEarningFulfillmentResourceAttributesInput extends SpeakeasyBase {
    /**
     * Date at which the reward earning was fulfilled. (Must be at the same time or after the reward was earned)
     */
    fulfilledAt: string;
    /**
     * Value of the earned reward that has been fulfilled. (Must be greater than or equal to 0)
     */
    fulfilledValue: number;
}
export declare class RewardEarningFulfillmentResourceRelationshipsInput extends SpeakeasyBase {
    rewardEarning: RewardEarningFulfillmentResourceRelationshipsRewardEarning;
}
export declare class RewardEarningFulfillmentResourceInput extends SpeakeasyBase {
    attributes?: RewardEarningFulfillmentResourceAttributesInput;
    id?: string;
    relationships?: RewardEarningFulfillmentResourceRelationshipsInput;
    type: string;
}
