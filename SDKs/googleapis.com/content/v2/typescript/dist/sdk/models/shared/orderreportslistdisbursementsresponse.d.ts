import { SpeakeasyBase } from "../../../internal/utils";
import { OrderReportDisbursement } from "./orderreportdisbursement";
/**
 * Successful response
 */
export declare class OrderreportsListDisbursementsResponse extends SpeakeasyBase {
    /**
     * The list of disbursements.
     */
    disbursements?: OrderReportDisbursement[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string "content#orderreportsListDisbursementsResponse".
     */
    kind?: string;
    /**
     * The token for the retrieval of the next page of disbursements.
     */
    nextPageToken?: string;
}
