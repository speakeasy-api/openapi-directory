import { SpeakeasyBase } from "../../../internal/utils";
import { InputParameter } from "./inputparameter";
import { ResultMetadata } from "./resultmetadata";
/**
 * Action message contains metadata information about a single action present in the external system.
 */
export declare class Action extends SpeakeasyBase {
    /**
     * List containing input parameter metadata.
     */
    inputParameters?: InputParameter[];
    /**
     * Name of the action.
     */
    name?: string;
    /**
     * List containing the metadata of result fields.
     */
    resultMetadata?: ResultMetadata[];
}
