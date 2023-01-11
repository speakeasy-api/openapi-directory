import { SpeakeasyBase } from "../../../internal/utils";
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
