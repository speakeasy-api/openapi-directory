import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The Type of this action.
 */
export declare enum ActionInformationActionTypeEnum {
    OnOffAction = "OnOffAction",
    AnalogAction = "AnalogAction"
}
/**
 * The Information about an Action of a device
 */
export declare class ActionInformation extends SpeakeasyBase {
    /**
     * The Type of this action.
     */
    actionType?: ActionInformationActionTypeEnum;
    /**
     * The maximum value of this action (e.g. for an AnalogAction)
     */
    maxValue?: number;
    /**
     * The minimum value of this action (e.g. for an AnalogAction)
     */
    minValue?: number;
    /**
     * The Name of this action
     */
    name?: string;
    /**
     * The Obis Code of this action. This is used as ID.
     */
    obisCode?: string;
}
