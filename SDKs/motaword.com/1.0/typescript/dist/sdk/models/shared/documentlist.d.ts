import { SpeakeasyBase } from "../../../internal/utils";
import { Document } from "./document";
import { PagingMeta } from "./pagingmeta";
/**
 * Document list
 */
export declare class DocumentList extends SpeakeasyBase {
    documents?: Document[];
    meta?: PagingMeta;
}
