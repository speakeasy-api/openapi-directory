import { SpeakeasyBase } from "../../../internal/utils";
import { SettlementReport } from "./settlementreport";
/**
 * Successful response
 */
export declare class SettlementreportsListResponse extends SpeakeasyBase {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "`content#settlementreportsListResponse`".
     */
    kind?: string;
    /**
     * The token for the retrieval of the next page of returns.
     */
    nextPageToken?: string;
    resources?: SettlementReport[];
}
