import { SpeakeasyBase } from "../../../internal/utils";
import { Permission } from "./permission";
/**
 * Successful response
 */
export declare class ListPermissionsResponse extends SpeakeasyBase {
    /**
     * Duration of the request in human-readable format
     */
    duration: string;
    permissions: Permission[];
}
