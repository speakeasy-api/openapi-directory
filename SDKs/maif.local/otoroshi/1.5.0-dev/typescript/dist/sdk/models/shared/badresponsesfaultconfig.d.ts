import { SpeakeasyBase } from "../../../internal/utils";
import { BadResponse } from "./badresponse";
/**
 * Config for bad requests injection fault
 */
export declare class BadResponsesFaultConfig extends SpeakeasyBase {
    /**
     * The percentage of requests affected by this fault. Value should be between 0.0 and 1.0
     */
    ratio: number;
    /**
     * The possibles responses
     */
    responses: BadResponse[];
}
