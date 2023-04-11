import { SpeakeasyBase } from "../../../internal/utils";
import { InputParameter } from "./inputparameter";
import { ResultMetadata } from "./resultmetadata";
/**
 * Schema of a runtime action.
 */
export declare class RuntimeActionSchema extends SpeakeasyBase {
    /**
     * Output only. Name of the action.
     */
    action?: string;
    /**
     * Output only. List of input parameter metadata for the action.
     */
    inputParameters?: InputParameter[];
    /**
     * Output only. List of result field metadata.
     */
    resultMetadata?: ResultMetadata[];
}
