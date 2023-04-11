import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The password
 */
export declare class SelfUpdatePasswordRequest extends SpeakeasyBase {
    /**
     * The new password
     */
    newPassword: string;
    /**
     * The user's current password
     */
    oldPassword: string;
}
