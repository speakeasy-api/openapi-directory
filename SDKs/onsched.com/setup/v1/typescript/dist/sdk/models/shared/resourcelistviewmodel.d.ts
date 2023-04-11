import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceViewModel } from "./resourceviewmodel";
/**
 * resource object
 */
export declare class ResourceListViewModel extends SpeakeasyBase {
    count?: number;
    data?: ResourceViewModel[];
    hasMore?: boolean;
    object?: string;
    total?: number;
    url?: string;
}
