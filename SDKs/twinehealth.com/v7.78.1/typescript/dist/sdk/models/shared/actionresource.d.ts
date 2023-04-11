import { SpeakeasyBase } from "../../../internal/utils";
import { ActionMetric } from "./actionmetric";
import { ActionWindow } from "./actionwindow";
import { Identifier } from "./identifier";
/**
 * Days of week that the action is scheduled for. Zero-indexed, ex 0 represents Sunday, etc.
 */
export declare enum ActionResourceAttributesFrequencyGoalWeeksDaysEnum {
    Zero = "0",
    One = "1",
    Two = "2",
    Three = "3",
    Four = "4",
    Five = "5",
    Six = "6"
}
export declare class ActionResourceAttributesFrequencyGoalWeeks extends SpeakeasyBase {
    days?: ActionResourceAttributesFrequencyGoalWeeksDaysEnum[];
}
export declare class ActionResourceAttributesFrequencyGoal extends SpeakeasyBase {
    weeks?: ActionResourceAttributesFrequencyGoalWeeks;
}
export declare enum ActionResourceAttributesTypeEnum {
    OtherLifestyle = "other_lifestyle"
}
export declare class ActionResourceAttributesInput extends SpeakeasyBase {
    thread?: string;
    details?: Record<string, any>;
    effectiveFrom: string;
    effectiveTo?: string;
    frequencyGoal?: ActionResourceAttributesFrequencyGoal;
    identifiers?: Identifier[];
    intake?: Record<string, any>;
    metricRequired?: boolean;
    metrics?: ActionMetric[];
    title: string;
    tracking?: boolean;
    type: ActionResourceAttributesTypeEnum;
    windows?: ActionWindow[];
}
export declare class ActionResourceRelationshipsPlanData extends SpeakeasyBase {
    id?: string;
    type?: string;
}
export declare class ActionResourceRelationshipsPlan extends SpeakeasyBase {
    data?: ActionResourceRelationshipsPlanData;
    links?: Record<string, any>;
}
export declare class ActionResourceRelationships extends SpeakeasyBase {
    plan?: ActionResourceRelationshipsPlan;
}
export declare class ActionResourceInput extends SpeakeasyBase {
    attributes?: ActionResourceAttributesInput;
    id: string;
    relationships?: ActionResourceRelationships;
    type: string;
}
export declare class ActionResourceAttributesAdherenceStreak extends SpeakeasyBase {
    count?: number;
    updatedAt?: string;
}
export declare class ActionResourceAttributesAdherence extends SpeakeasyBase {
    complete?: number;
    due?: number;
    streak?: ActionResourceAttributesAdherenceStreak;
}
export declare class ActionResourceAttributes extends SpeakeasyBase {
    thread?: string;
    adherence?: ActionResourceAttributesAdherence;
    details?: Record<string, any>;
    effectiveFrom: string;
    effectiveTo?: string;
    frequencyGoal?: ActionResourceAttributesFrequencyGoal;
    identifiers?: Identifier[];
    intake?: Record<string, any>;
    metricRequired?: boolean;
    metrics?: ActionMetric[];
    staticTitle?: string;
    title: string;
    tracking?: boolean;
    type: ActionResourceAttributesTypeEnum;
    windows?: ActionWindow[];
}
export declare class ActionResource extends SpeakeasyBase {
    attributes?: ActionResourceAttributes;
    id: string;
    relationships?: ActionResourceRelationships;
    type: string;
}
