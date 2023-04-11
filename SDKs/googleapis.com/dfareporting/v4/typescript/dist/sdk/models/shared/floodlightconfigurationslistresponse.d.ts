import { SpeakeasyBase } from "../../../internal/utils";
import { FloodlightConfiguration } from "./floodlightconfiguration";
/**
 * Floodlight Configuration List Response
 */
export declare class FloodlightConfigurationsListResponse extends SpeakeasyBase {
    /**
     * Floodlight configuration collection.
     */
    floodlightConfigurations?: FloodlightConfiguration[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#floodlightConfigurationsListResponse".
     */
    kind?: string;
}
