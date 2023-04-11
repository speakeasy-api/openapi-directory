import { SpeakeasyBase } from "../../../internal/utils";
import { RoleEnumRoleTypeEnum } from "./roleenumroletypeenum";
/**
 * Created
 */
export declare class ChatV2ServiceRole extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Role resource.
     */
    accountSid?: string;
    /**
     * The date and time in GMT when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateCreated?: Date;
    /**
     * The date and time in GMT when the resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateUpdated?: Date;
    /**
     * The string that you assigned to describe the resource.
     */
    friendlyName?: string;
    /**
     * An array of the permissions the role has been granted.
     */
    permissions?: string[];
    /**
     * The SID of the [Service](https://www.twilio.com/docs/chat/rest/service-resource) the Role resource is associated with.
     */
    serviceSid?: string;
    /**
     * The unique string that we created to identify the Role resource.
     */
    sid?: string;
    type?: RoleEnumRoleTypeEnum;
    /**
     * The absolute URL of the Role resource.
     */
    url?: string;
}
