import { SpeakeasyBase } from "../../../internal/utils";
import { ShippingsettingsCustomBatchResponseEntry } from "./shippingsettingscustombatchresponseentry";
/**
 * Successful response
 */
export declare class ShippingsettingsCustomBatchResponse extends SpeakeasyBase {
    /**
     * The result of the execution of the batch requests.
     */
    entries?: ShippingsettingsCustomBatchResponseEntry[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string "content#shippingsettingsCustomBatchResponse".
     */
    kind?: string;
}
