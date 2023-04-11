import { SpeakeasyBase } from "../../../internal/utils";
import { LocationViewModel } from "./locationviewmodel";
/**
 * Success
 */
export declare class LocationListViewModel extends SpeakeasyBase {
    count?: number;
    data?: LocationViewModel[];
    hasMore?: boolean;
    object?: string;
    total?: number;
    url?: string;
}
