import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of the Output
 */
export declare enum OutputInformationActionTypeEnum {
    OnOffAction = "OnOffAction",
    AnalogAction = "AnalogAction"
}
/**
 * Informations about the Outputs of a Meter or Folder
 */
export declare class OutputInformation extends SpeakeasyBase {
    /**
     * The type of the Output
     */
    actionType?: OutputInformationActionTypeEnum;
    /**
     * The Name of the Output
     */
    name?: string;
    /**
     * The Number of this Output. Use this as ID to switch it on or off.
     */
    number?: number;
    /**
     * The Obis Code for this Output
     */
    obisCode?: string;
}
