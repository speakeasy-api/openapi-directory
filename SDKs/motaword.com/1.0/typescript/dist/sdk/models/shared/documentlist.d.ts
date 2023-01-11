import { SpeakeasyBase } from "../../../internal/utils";
import { Document } from "./document";
import { PagingMeta } from "./pagingmeta";
export declare class DocumentList extends SpeakeasyBase {
    documents?: Document[];
    meta?: PagingMeta;
}
