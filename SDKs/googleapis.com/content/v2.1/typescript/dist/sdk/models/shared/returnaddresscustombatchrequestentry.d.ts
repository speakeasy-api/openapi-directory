import { SpeakeasyBase } from "../../../internal/utils";
import { ReturnAddress } from "./returnaddress";
export declare class ReturnaddressCustomBatchRequestEntry extends SpeakeasyBase {
    /**
     * An entry ID, unique within the batch request.
     */
    batchId?: number;
    /**
     * The Merchant Center account ID.
     */
    merchantId?: string;
    /**
     * Method of the batch request entry. Acceptable values are: - "`delete`" - "`get`" - "`insert`"
     */
    method?: string;
    /**
     * Return address resource.
     */
    returnAddress?: ReturnAddress;
    /**
     * The return address ID. This should be set only if the method is `delete` or `get`.
     */
    returnAddressId?: string;
}
