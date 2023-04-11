import { SpeakeasyBase } from "../../../internal/utils";
export declare class RewardProgramActivationResourceAttributes extends SpeakeasyBase {
    /**
     * Date at which the reward program was activated for the patient. (Must be between the start_at and end_at dates for the reward program)
     */
    activatedAt: string;
    /**
     * If true, the reward program is currently active.
     */
    active?: boolean;
    /**
     * Number of rewards allocated. (Read-only property)
     */
    allocatedCount?: number;
    /**
     * Unit of the reward program budget. (Read-only property)
     */
    budgetUnit?: string;
    /**
     * Date at which the reward program was deactivated. (Must be after the activated_at date)
     */
    deactivatedAt?: string;
    /**
     * Number of reward earnings. (Read-only property)
     */
    earnedCount?: number;
    /**
     * Date at which the reward program activation expires. (Read-only property set by adding the days_active from the reward program to the activated_at date)
     */
    expiresAt?: string;
    /**
     * If true, the rewards created for a patient for the program can be fulfulled as they are earned. If false, the rewards should only be fulfilled when the program is deactivated. (Read-only property denormalized from the reward program)
     */
    fulfillAsEarned?: boolean;
    /**
     * Total value of reward allocated. (Read-only property)
     */
    totalAllocatedValue?: number;
    /**
     * Total value of reward earnings. (Read-only property)
     */
    totalEarnedValue?: number;
}
export declare class RewardProgramActivationResourceRelationshipsPatientData extends SpeakeasyBase {
    id?: string;
    type?: string;
}
export declare class RewardProgramActivationResourceRelationshipsPatient extends SpeakeasyBase {
    data?: RewardProgramActivationResourceRelationshipsPatientData;
}
export declare class RewardProgramActivationResourceRelationshipsRewardProgramData extends SpeakeasyBase {
    id?: string;
    type?: string;
}
export declare class RewardProgramActivationResourceRelationshipsRewardProgram extends SpeakeasyBase {
    data?: RewardProgramActivationResourceRelationshipsRewardProgramData;
}
export declare class RewardProgramActivationResourceRelationships extends SpeakeasyBase {
    patient: RewardProgramActivationResourceRelationshipsPatient;
    rewardProgram: RewardProgramActivationResourceRelationshipsRewardProgram;
}
export declare class RewardProgramActivationResource extends SpeakeasyBase {
    attributes?: RewardProgramActivationResourceAttributes;
    id?: string;
    relationships?: RewardProgramActivationResourceRelationships;
    type: string;
}
export declare class RewardProgramActivationResourceAttributesInput extends SpeakeasyBase {
    /**
     * Date at which the reward program was activated for the patient. (Must be between the start_at and end_at dates for the reward program)
     */
    activatedAt: string;
    /**
     * If true, the reward program is currently active.
     */
    active?: boolean;
    /**
     * Date at which the reward program was deactivated. (Must be after the activated_at date)
     */
    deactivatedAt?: string;
}
export declare class RewardProgramActivationResourceInput extends SpeakeasyBase {
    attributes?: RewardProgramActivationResourceAttributesInput;
    id?: string;
    relationships?: RewardProgramActivationResourceRelationships;
    type: string;
}
