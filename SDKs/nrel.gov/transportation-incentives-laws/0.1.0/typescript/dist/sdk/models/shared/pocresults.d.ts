import { SpeakeasyBase } from "../../../internal/utils";
import { Metadata } from "./metadata";
import { Poc } from "./poc";
/**
 * Successful request
 */
export declare class PocResults extends SpeakeasyBase {
    /**
     * The parameters that were passed to the API
     */
    inputs: any;
    /**
     * The identifying metadata.
     */
    metadata: Metadata;
    /**
     * The array of Points of Contacts for the state requested
     */
    result: Poc[];
}
