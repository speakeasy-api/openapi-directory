import { SpeakeasyBase } from "../../../internal/utils";
import { ServiceRoleEnumRoleTypeEnum } from "./serviceroleenumroletypeenum";
/**
 * Created
 */
export declare class ConversationsV1ServiceServiceRole extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Role resource.
     */
    accountSid?: string;
    /**
     * The SID of the [Conversation Service](https://www.twilio.com/docs/conversations/api/service-resource) the Role resource is associated with.
     */
    chatServiceSid?: string;
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
     * The unique string that we created to identify the Role resource.
     */
    sid?: string;
    type?: ServiceRoleEnumRoleTypeEnum;
    /**
     * An absolute API resource URL for this user role.
     */
    url?: string;
}
