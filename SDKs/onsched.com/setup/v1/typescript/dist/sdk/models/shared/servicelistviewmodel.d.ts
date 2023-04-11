import { SpeakeasyBase } from "../../../internal/utils";
import { ServiceViewModel } from "./serviceviewmodel";
/**
 * Success
 */
export declare class ServiceListViewModel extends SpeakeasyBase {
    count?: number;
    data?: ServiceViewModel[];
    hasMore?: boolean;
    object?: string;
    total?: number;
    url?: string;
}
