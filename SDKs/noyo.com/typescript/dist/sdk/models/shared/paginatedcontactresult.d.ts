import { SpeakeasyBase } from "../../../internal/utils";
import { ContactResult } from "./contactresult";
/**
 * Metadata associated with the response data
**/
export declare class PaginatedContactResultMeta extends SpeakeasyBase {
    offset: number;
    pageNum: number;
    pageSize: number;
    totalRecords: number;
}
export declare class PaginatedContactResult extends SpeakeasyBase {
    meta: PaginatedContactResultMeta;
    response: ContactResult[];
}
