import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceBlockViewModel } from "./resourceblockviewmodel";
/**
 * resource block object's
 */
export declare class ResourceBlockListViewModel extends SpeakeasyBase {
    count?: number;
    data?: ResourceBlockViewModel[];
    hasMore?: boolean;
    object?: string;
    total?: number;
    url?: string;
}
