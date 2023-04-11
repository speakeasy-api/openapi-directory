import { SpeakeasyBase } from "../../../internal/utils";
import { Domain } from "./domain";
import { ForwardPaging } from "./forwardpaging";
/**
 * successful operation
 */
export declare class CollectionResponseWithTotalDomainForwardPaging extends SpeakeasyBase {
    paging?: ForwardPaging;
    results: Domain[];
    total: number;
}
