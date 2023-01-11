import { SpeakeasyBase } from "../../../internal/utils";
import { DocumentInSearch } from "./documentinsearch";
import { ProjectInSearch } from "./projectinsearch";
import { StringInSearch } from "./stringinsearch";
import { PagingMeta } from "./pagingmeta";
export declare class SearchEverywhereResultResult extends SpeakeasyBase {
    documents?: DocumentInSearch[];
    projects?: ProjectInSearch[];
    strings?: StringInSearch[];
}
export declare class SearchEverywhereResult extends SpeakeasyBase {
    meta?: PagingMeta;
    result?: SearchEverywhereResultResult;
}
