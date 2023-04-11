import { SpeakeasyBase } from "../../../internal/utils";
/**
 * user invite parameters
 */
export declare class UserInviteOptions extends SpeakeasyBase {
    clientAdmin?: boolean;
    email?: string;
    firstName?: string;
    lastName?: string;
    message?: string;
    orgDefaultRole?: string;
    orgRoles?: Record<string, any>;
    subject?: string;
}
