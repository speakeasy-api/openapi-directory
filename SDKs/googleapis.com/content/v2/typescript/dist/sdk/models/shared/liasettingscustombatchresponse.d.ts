import { SpeakeasyBase } from "../../../internal/utils";
import { LiasettingsCustomBatchResponseEntry } from "./liasettingscustombatchresponseentry";
/**
 * Successful response
 */
export declare class LiasettingsCustomBatchResponse extends SpeakeasyBase {
    /**
     * The result of the execution of the batch requests.
     */
    entries?: LiasettingsCustomBatchResponseEntry[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string "content#liasettingsCustomBatchResponse".
     */
    kind?: string;
}
