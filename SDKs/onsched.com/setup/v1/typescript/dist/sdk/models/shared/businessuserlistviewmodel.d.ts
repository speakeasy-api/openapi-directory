import { SpeakeasyBase } from "../../../internal/utils";
import { BusinessUserViewModel } from "./businessuserviewmodel";
/**
 * Success
 */
export declare class BusinessUserListViewModel extends SpeakeasyBase {
    count?: number;
    data?: BusinessUserViewModel[];
    hasMore?: boolean;
    object?: string;
    total?: number;
    url?: string;
}
