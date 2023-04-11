import { SpeakeasyBase } from "../../../internal/utils";
import { Errors } from "./errors";
import { ReturnAddress } from "./returnaddress";
export declare class ReturnaddressCustomBatchResponseEntry extends SpeakeasyBase {
    /**
     * The ID of the request entry to which this entry responds.
     */
    batchId?: number;
    /**
     * A list of errors returned by a failed batch entry.
     */
    errors?: Errors;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "`content#returnaddressCustomBatchResponseEntry`"
     */
    kind?: string;
    /**
     * Return address resource.
     */
    returnAddress?: ReturnAddress;
}
