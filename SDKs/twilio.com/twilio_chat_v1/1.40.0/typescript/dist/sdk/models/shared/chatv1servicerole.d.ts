import { SpeakeasyBase } from "../../../internal/utils";
import { RoleEnumRoleTypeEnum } from "./roleenumroletypeenum";
/**
 * Created
 */
export declare class ChatV1ServiceRole extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/api/rest/account) that created the Role resource.
     */
    accountSid?: string;
    /**
     * The date and time in GMT when the resource was created specified in [RFC 2822](http://www.ietf.org/rfc/rfc2822.txt) format.
     */
    dateCreated?: Date;
    /**
     * The date and time in GMT when the resource was last updated specified in [RFC 2822](http://www.ietf.org/rfc/rfc2822.txt) format.
     */
    dateUpdated?: Date;
    /**
     * The string that you assigned to describe the resource.
     */
    friendlyName?: string;
    /**
     * An array of the permissions the role has been granted, formatted as a JSON string.
     */
    permissions?: string[];
    /**
     * The SID of the [Service](https://www.twilio.com/docs/api/chat/rest/services) the resource is associated with.
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
