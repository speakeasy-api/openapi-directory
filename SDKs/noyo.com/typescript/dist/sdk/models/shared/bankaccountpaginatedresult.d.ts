import { SpeakeasyBase } from "../../../internal/utils";
import { BankAccountResult } from "./bankaccountresult";
/**
 * Metadata associated with the response data
**/
export declare class BankAccountPaginatedResultMeta extends SpeakeasyBase {
    offset: number;
    pageNum: number;
    pageSize: number;
    totalRecords: number;
}
export declare class BankAccountPaginatedResult extends SpeakeasyBase {
    meta: BankAccountPaginatedResultMeta;
    response: BankAccountResult[];
}
