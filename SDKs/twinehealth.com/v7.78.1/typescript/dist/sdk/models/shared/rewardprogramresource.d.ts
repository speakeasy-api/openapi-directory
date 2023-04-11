import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Unit of the budget for the reard program.
 */
export declare enum RewardProgramResourceAttributesBudgetUnitEnum {
    Dollar = "dollar",
    Point = "point",
    Credit = "credit"
}
export declare class RewardProgramResourceAttributes extends SpeakeasyBase {
    /**
     * Unit of the budget for the reard program.
     */
    budgetUnit?: RewardProgramResourceAttributesBudgetUnitEnum;
    /**
     * Value of the budget for the reward program. (Must be greater than 0)
     */
    budgetValue: number;
    /**
     * Description of the reward program - designed to be a comprehensive text description
     */
    description?: string;
    /**
     * Number of days that a program can be active after it has been activated for a patient. (Must be greater than 0)
     */
    durationActive?: number;
    /**
     * Date at which the reward program ends. (Must be after the start_at)
     */
    endAt: string;
    /**
     * If true, the reward program cannot be activated for a patient and new rewards cannot be created for the program.
     */
    frozen?: boolean;
    /**
     * If true, the rewards created for a patient for the program can be fulfulled as they are earned. If false, the rewards should only be fulfilled when the program is deactivated.
     */
    fulfillAsEarned?: boolean;
    /**
     * Name of the reward program
     */
    name: string;
    /**
     * Date at which the reward program starts.
     */
    startAt: string;
    /**
     * Tagline of the reward program - designed to be one line
     */
    tagline?: string;
}
export declare class RewardProgramResourceRelationshipsGroupData extends SpeakeasyBase {
    id: string;
    type: string;
}
export declare class RewardProgramResourceRelationshipsGroup extends SpeakeasyBase {
    data: RewardProgramResourceRelationshipsGroupData;
}
export declare class RewardProgramResourceRelationships extends SpeakeasyBase {
    group: RewardProgramResourceRelationshipsGroup;
}
export declare class RewardProgramResource extends SpeakeasyBase {
    attributes?: RewardProgramResourceAttributes;
    id?: string;
    relationships?: RewardProgramResourceRelationships;
    type: string;
}
