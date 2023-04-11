import { SpeakeasyBase } from "../../../internal/utils";
import { ActionRevision } from "./actionrevision";
import { ForwardPaging } from "./forwardpaging";
/**
 * successful operation
 */
export declare class CollectionResponseActionRevisionForwardPaging extends SpeakeasyBase {
    paging?: ForwardPaging;
    results: ActionRevision[];
}
