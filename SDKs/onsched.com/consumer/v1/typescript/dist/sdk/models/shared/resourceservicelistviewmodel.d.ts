import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceServiceViewModel } from "./resourceserviceviewmodel";
/**
 * list of resource services
 */
export declare class ResourceServiceListViewModel extends SpeakeasyBase {
    count?: number;
    data?: ResourceServiceViewModel[];
    hasMore?: boolean;
    object?: string;
    total?: number;
    url?: string;
}
