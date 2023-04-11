import { SpeakeasyBase } from "../../../internal/utils";
export declare class RewardResourceAttributes extends SpeakeasyBase {
    /**
     * Unique string identifying the health action with which the reward is associated.
     */
    thread?: string;
    /**
     * Date at which the reward was allocated. (Must be after the reward program is activated and before it is deactivated or expires)
     */
    allocatedAt: string;
    /**
     * Unit of the reward program. (Read-only property)
     */
    allocatedUnit?: string;
    /**
     * Value of the reward program budget allocated for the reward. (Must not exceed the remaining budget for the reward program activation)
     */
    allocatedValue: number;
    /**
     * Description of the reward.
     */
    description: string;
    /**
     * Date at which the reward was earned. (Read-only property)
     */
    earnedAt?: string;
    /**
     * Value of the reward that has been earned. (Read-only property)
     */
    earnedValue?: number;
    /**
     * Date at which the reward earning was fulfilled. (Read-only property)
     */
    fulfilledAt?: string;
    /**
     * Value of the earned reward that has been fulfilled. (Read-only property)
     */
    fulfilledValue?: number;
    /**
     * Date at which the patient aspires to achieve the reward. (Must be the same or after the allocated_at date)
     */
    targetAt?: string;
}
export declare class RewardResourceRelationshipsPatientData extends SpeakeasyBase {
    id?: string;
    type?: string;
}
export declare class RewardResourceRelationshipsPatient extends SpeakeasyBase {
    data?: RewardResourceRelationshipsPatientData;
}
export declare class RewardResourceRelationshipsRewardProgramActivationData extends SpeakeasyBase {
    id?: string;
    type?: string;
}
export declare class RewardResourceRelationshipsRewardProgramActivation extends SpeakeasyBase {
    data?: RewardResourceRelationshipsRewardProgramActivationData;
}
export declare class RewardResourceRelationships extends SpeakeasyBase {
    patient?: RewardResourceRelationshipsPatient;
    rewardProgramActivation: RewardResourceRelationshipsRewardProgramActivation;
}
export declare class RewardResource extends SpeakeasyBase {
    attributes?: RewardResourceAttributes;
    id?: string;
    relationships?: RewardResourceRelationships;
    type: string;
}
export declare class RewardResourceAttributesInput extends SpeakeasyBase {
    /**
     * Unique string identifying the health action with which the reward is associated.
     */
    thread?: string;
    /**
     * Date at which the reward was allocated. (Must be after the reward program is activated and before it is deactivated or expires)
     */
    allocatedAt: string;
    /**
     * Value of the reward program budget allocated for the reward. (Must not exceed the remaining budget for the reward program activation)
     */
    allocatedValue: number;
    /**
     * Description of the reward.
     */
    description: string;
    /**
     * Date at which the patient aspires to achieve the reward. (Must be the same or after the allocated_at date)
     */
    targetAt?: string;
}
export declare class RewardResourceRelationshipsInput extends SpeakeasyBase {
    rewardProgramActivation: RewardResourceRelationshipsRewardProgramActivation;
}
export declare class RewardResourceInput extends SpeakeasyBase {
    attributes?: RewardResourceAttributesInput;
    id?: string;
    relationships?: RewardResourceRelationshipsInput;
    type: string;
}
