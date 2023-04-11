import { SpeakeasyBase } from "../../../internal/utils";
import { Law } from "./law";
import { Metadata } from "./metadata";
/**
 * Successful request
 */
export declare class LawResult extends SpeakeasyBase {
    /**
     * The parameters that were passed to the API
     */
    inputs: any;
    /**
     * The identifying metadata.
     */
    metadata: Metadata;
    /**
     * This is a Law
     */
    result: Law;
}
