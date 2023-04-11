import { SpeakeasyBase } from "../../../internal/utils";
import { CreatePermissionRequestInput } from "./createpermissionrequest";
/**
 * The request to add one or more permissions on the note. Currently, only the `WRITER` role may be specified. If adding a permission fails, then the entire request fails and no changes are made.
 */
export declare class BatchCreatePermissionsRequestInput extends SpeakeasyBase {
    /**
     * The request message specifying the resources to create.
     */
    requests?: CreatePermissionRequestInput[];
}
