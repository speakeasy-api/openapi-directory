import { SpeakeasyBase } from "../../../internal/utils";
import { Permission } from "./permission";
/**
 * The response for creating permissions on a note.
 */
export declare class BatchCreatePermissionsResponse extends SpeakeasyBase {
    /**
     * Permissions created.
     */
    permissions?: Permission[];
}
