import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Action can be either "delete" or "activate".  Either lead_id or user_id is required.  user_id takes precedence.
 */
export declare class ModifyInactiveCollaborator extends SpeakeasyBase {
    action?: string;
    leadId?: number;
    userId?: string;
}
