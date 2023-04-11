import { SpeakeasyBase } from "../../../internal/utils";
import { ReturnPolicy } from "./returnpolicy";
export declare class ReturnpolicyCustomBatchRequestEntry extends SpeakeasyBase {
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
     * Return policy resource.
     */
    returnPolicy?: ReturnPolicy;
    /**
     * The return policy ID. This should be set only if the method is `delete` or `get`.
     */
    returnPolicyId?: string;
}
