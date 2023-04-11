import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceGroupViewModel } from "./resourcegroupviewmodel";
/**
 * Success
 */
export declare class ResourceGroupListViewModel extends SpeakeasyBase {
    count?: number;
    data?: ResourceGroupViewModel[];
    hasMore?: boolean;
    object?: string;
    total?: number;
    url?: string;
}
