import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The Role to change to
 */
export declare class RoleUpdateRequest extends SpeakeasyBase {
    /**
     * <p>The role(s) for the user</p>
     *
     * @remarks
     * <p>The role must exist</p>
     * <p>The role can be a custom role or a system role but the invoker must have the permissions to assign the role</p>
     * <p>System roles are: backoffice.admin, payor.master_admin, payor.admin, payor.support</p>
     *
     */
    roles: string[];
    /**
     * <p>Optional property that MUST be suppied when manually verifying a user</p>
     *
     * @remarks
     * <p>The user's smsNumber is registered via a separate endpoint and an OTP sent to them</p>
     *
     */
    verificationCode?: string;
}
