import { SpeakeasyBase } from "../../../internal/utils";
import { ContinuousProjectDocument } from "./continuousprojectdocument";
import { PagingMeta } from "./pagingmeta";
/**
 * A list of continuous project document models
 */
export declare class ContinuousProjectDocumentList extends SpeakeasyBase {
    documents?: ContinuousProjectDocument[];
    meta?: PagingMeta;
}
