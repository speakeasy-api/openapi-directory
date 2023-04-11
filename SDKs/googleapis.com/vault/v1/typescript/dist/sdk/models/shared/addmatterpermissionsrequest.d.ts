import { SpeakeasyBase } from "../../../internal/utils";
import { MatterPermission } from "./matterpermission";
/**
 * Add an account with the permission specified. The role cannot be owner. If an account already has a role in the matter, the existing role is overwritten.
 */
export declare class AddMatterPermissionsRequest extends SpeakeasyBase {
    /**
     * Only relevant if **sendEmails** is **true**. To CC the requestor in the email message, set to **true**. To not CC requestor, set to **false**.
     */
    ccMe?: boolean;
    /**
     * Users can be matter owners or collaborators. Each matter has only one owner. All others users who can access the matter are collaborators. When an account is purged, its corresponding MatterPermission resources cease to exist.
     */
    matterPermission?: MatterPermission;
    /**
     * To send a notification email to the added account, set to **true**. To not send a notification email, set to **false**.
     */
    sendEmails?: boolean;
}
