import { SpeakeasyBase } from "../../../internal/utils";
export declare class RewardEarningResourceAttributes extends SpeakeasyBase {
    /**
     * Date at which the reward was earned. (Must be after the reward was allocated and before the reward program activation was deactivated or expired)
     */
    earnedAt: string;
    /**
     * Unit of the reward that has been earned. (Read-only property)
     */
    earnedUnit?: string;
    /**
     * Value of the reward that has been earned. (Must not exceed the allocated value for the reward)
     */
    earnedValue: number;
    /**
     * Date at which the reward earning was fulfilled. (Read-only property)
     */
    fulfilledAt?: string;
    /**
     * Value of the earned reward that has been fulfilled. (Read-only property)
     */
    fulfilledValue?: number;
    /**
     * If true, the reward earning is ready to be fulfilled, either because the reward program activation was fulfill_as_earned or because the reward program activation has been deactivated. (Read-only property)
     */
    readyForFulfillment?: boolean;
}
export declare class RewardEarningResourceRelationshipsGroupData extends SpeakeasyBase {
    id?: string;
    type?: string;
}
export declare class RewardEarningResourceRelationshipsGroup extends SpeakeasyBase {
    data?: RewardEarningResourceRelationshipsGroupData;
}
export declare class RewardEarningResourceRelationshipsPatientData extends SpeakeasyBase {
    id?: string;
    type?: string;
}
export declare class RewardEarningResourceRelationshipsPatient extends SpeakeasyBase {
    data?: RewardEarningResourceRelationshipsPatientData;
}
export declare class RewardEarningResourceRelationshipsRewardData extends SpeakeasyBase {
    id?: string;
    type?: string;
}
export declare class RewardEarningResourceRelationshipsReward extends SpeakeasyBase {
    data?: RewardEarningResourceRelationshipsRewardData;
}
export declare class RewardEarningResourceRelationshipsRewardProgramActivationData extends SpeakeasyBase {
    id?: string;
    type?: string;
}
export declare class RewardEarningResourceRelationshipsRewardProgramActivation extends SpeakeasyBase {
    data?: RewardEarningResourceRelationshipsRewardProgramActivationData;
}
export declare class RewardEarningResourceRelationships extends SpeakeasyBase {
    group?: RewardEarningResourceRelationshipsGroup;
    patient?: RewardEarningResourceRelationshipsPatient;
    reward: RewardEarningResourceRelationshipsReward;
    rewardProgramActivation?: RewardEarningResourceRelationshipsRewardProgramActivation;
}
export declare class RewardEarningResource extends SpeakeasyBase {
    attributes?: RewardEarningResourceAttributes;
    id?: string;
    relationships?: RewardEarningResourceRelationships;
    type: string;
}
export declare class RewardEarningResourceAttributesInput extends SpeakeasyBase {
    /**
     * Date at which the reward was earned. (Must be after the reward was allocated and before the reward program activation was deactivated or expired)
     */
    earnedAt: string;
    /**
     * Value of the reward that has been earned. (Must not exceed the allocated value for the reward)
     */
    earnedValue: number;
}
export declare class RewardEarningResourceRelationshipsInput extends SpeakeasyBase {
    reward: RewardEarningResourceRelationshipsReward;
}
export declare class RewardEarningResourceInput extends SpeakeasyBase {
    attributes?: RewardEarningResourceAttributesInput;
    id?: string;
    relationships?: RewardEarningResourceRelationshipsInput;
    type: string;
}
