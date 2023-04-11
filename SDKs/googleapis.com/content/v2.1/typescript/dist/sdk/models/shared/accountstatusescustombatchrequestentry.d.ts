import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A batch entry encoding a single non-batch accountstatuses request.
 */
export declare class AccountstatusesCustomBatchRequestEntry extends SpeakeasyBase {
    /**
     * The ID of the (sub-)account whose status to get.
     */
    accountId?: string;
    /**
     * An entry ID, unique within the batch request.
     */
    batchId?: number;
    /**
     * If set, only issues for the specified destinations are returned, otherwise only issues for the Shopping destination.
     */
    destinations?: string[];
    /**
     * The ID of the managing account.
     */
    merchantId?: string;
    /**
     * The method of the batch entry. Acceptable values are: - "`get`"
     */
    method?: string;
}
