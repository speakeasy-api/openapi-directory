import { SpeakeasyBase } from "../../../internal/utils";
import { ExternalUnifiedEvent } from "./externalunifiedevent";
import { Paging } from "./paging";
/**
 * successful operation
 */
export declare class CollectionResponseExternalUnifiedEvent extends SpeakeasyBase {
    paging?: Paging;
    results: ExternalUnifiedEvent[];
}
