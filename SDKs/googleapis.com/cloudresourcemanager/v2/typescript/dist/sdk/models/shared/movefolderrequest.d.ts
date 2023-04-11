import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The MoveFolder request message.
 */
export declare class MoveFolderRequest extends SpeakeasyBase {
    /**
     * Required. The resource name of the Folder or Organization to reparent the folder under. Must be of the form `folders/{folder_id}` or `organizations/{org_id}`.
     */
    destinationParent?: string;
}
