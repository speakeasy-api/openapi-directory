import { SpeakeasyBase } from "../../../internal/utils";
import { UserEnumStateTypeEnum } from "./userenumstatetypeenum";
/**
 * OK
 */
export declare class FrontlineV1User extends SpeakeasyBase {
    /**
     * The avatar URL which will be shown in Frontline application.
     */
    avatar?: string;
    /**
     * The string that you assigned to describe the User.
     */
    friendlyName?: string;
    /**
     * The application-defined string that uniquely identifies the resource's User. This value is often a username or an email address, and is case-sensitive.
     */
    identity?: string;
    /**
     * Whether the User is available for new conversations. Defaults to `false` for new users.
     */
    isAvailable?: boolean;
    /**
     * The unique string that we created to identify the User resource.
     */
    sid?: string;
    state?: UserEnumStateTypeEnum;
    /**
     * An absolute API resource URL for this user.
     */
    url?: string;
}
