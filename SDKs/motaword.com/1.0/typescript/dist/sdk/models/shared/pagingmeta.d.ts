import { SpeakeasyBase } from "../../../internal/utils";
import { PagingLinksMeta } from "./paginglinksmeta";
export declare class PagingMetaPaging extends SpeakeasyBase {
    count?: number;
    links?: PagingLinksMeta;
    page?: number;
    perPage?: number;
    totalCount?: number;
}
export declare class PagingMeta extends SpeakeasyBase {
    paging?: PagingMetaPaging;
}
