import { SpeakeasyBase } from "../../../internal/utils";
import { LocationResult } from "./locationresult";
/**
 * Metadata associated with the response data
**/
export declare class PaginatedLocationResultMeta extends SpeakeasyBase {
    offset: number;
    pageNum: number;
    pageSize: number;
    totalRecords: number;
}
export declare class PaginatedLocationResult extends SpeakeasyBase {
    meta: PaginatedLocationResultMeta;
    response: LocationResult[];
}
