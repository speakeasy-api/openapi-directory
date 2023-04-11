import { SpeakeasyBase } from "../../../internal/utils";
import { DocumentInSearch } from "./documentinsearch";
import { PagingMeta } from "./pagingmeta";
import { ProjectInSearch } from "./projectinsearch";
import { StringInSearch } from "./stringinsearch";
export declare class SearchEverywhereResultResult extends SpeakeasyBase {
    documents?: DocumentInSearch[];
    projects?: ProjectInSearch[];
    strings?: StringInSearch[];
}
/**
 * Search result for multiple entities and paging
 */
export declare class SearchEverywhereResult extends SpeakeasyBase {
    meta?: PagingMeta;
    result?: SearchEverywhereResultResult;
}
