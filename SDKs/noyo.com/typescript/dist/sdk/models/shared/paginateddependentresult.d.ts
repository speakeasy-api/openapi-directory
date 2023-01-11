import { SpeakeasyBase } from "../../../internal/utils";
import { DependentResult } from "./dependentresult";
/**
 * Metadata associated with the response data
**/
export declare class PaginatedDependentResultMeta extends SpeakeasyBase {
    offset: number;
    pageNum: number;
    pageSize: number;
    totalRecords: number;
}
export declare class PaginatedDependentResult extends SpeakeasyBase {
    meta: PaginatedDependentResultMeta;
    response: DependentResult[];
}
