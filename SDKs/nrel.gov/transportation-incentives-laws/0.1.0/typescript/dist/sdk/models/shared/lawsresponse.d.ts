import { SpeakeasyBase } from "../../../internal/utils";
import { Law } from "./law";
import { Metadata } from "./metadata";
/**
 * Successful request
 */
export declare class LawsResponse extends SpeakeasyBase {
    /**
     * The parameters that were passed to the API
     */
    inputs: any;
    /**
     * The identifying metadata.
     */
    metadata: Metadata;
    /**
     * The array of laws returned
     */
    result: Law[];
}
