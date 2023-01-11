import { SpeakeasyBase } from "../../../internal/utils";
import { CoveragePlanResult } from "./coverageplanresult";
/**
 * Metadata associated with the response data
**/
export declare class PaginatedCoveragePlanResultMeta extends SpeakeasyBase {
    offset: number;
    pageNum: number;
    pageSize: number;
    totalRecords: number;
}
export declare class PaginatedCoveragePlanResult extends SpeakeasyBase {
    meta: PaginatedCoveragePlanResultMeta;
    response: CoveragePlanResult[];
}
