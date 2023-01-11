import { SpeakeasyBase } from "../../../internal/utils";
import { ApplicationDocumentResult } from "./applicationdocumentresult";
/**
 * Metadata associated with the response data
**/
export declare class PaginatedApplicationDocumentResultMeta extends SpeakeasyBase {
    offset: number;
    pageNum: number;
    pageSize: number;
    totalRecords: number;
}
export declare class PaginatedApplicationDocumentResult extends SpeakeasyBase {
    meta: PaginatedApplicationDocumentResultMeta;
    response: ApplicationDocumentResult[];
}
