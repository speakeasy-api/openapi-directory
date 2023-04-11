import { SpeakeasyBase } from "../../../internal/utils";
import { ServiceGroupViewModel } from "./servicegroupviewmodel";
/**
 * Success
 */
export declare class ServiceGroupListViewModel extends SpeakeasyBase {
    count?: number;
    data?: ServiceGroupViewModel[];
    hasMore?: boolean;
    object?: string;
    total?: number;
    url?: string;
}
