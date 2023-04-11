import { SpeakeasyBase } from "../../../internal/utils";
import { CreatePrintServerRequestInput } from "./createprintserverrequest";
/**
 * Request to add multiple new print servers in a batch.
 */
export declare class BatchCreatePrintServersRequestInput extends SpeakeasyBase {
    /**
     * Required. A list of `PrintServer` resources to be created (max `50` per batch).
     */
    requests?: CreatePrintServerRequestInput[];
}
