import { SpeakeasyBase } from "../../../internal/utils";
import { BusinessPermissionViewModel } from "./businesspermissionviewmodel";
/**
 * Success
 */
export declare class BusinessPermissionListViewModel extends SpeakeasyBase {
    count?: number;
    data?: BusinessPermissionViewModel[];
    hasMore?: boolean;
    object?: string;
    total?: number;
    url?: string;
}
