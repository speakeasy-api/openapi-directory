import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Created
 */
export declare class ChatV2ServiceChannelInvite extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Invite resource.
     */
    accountSid?: string;
    /**
     * The SID of the [Channel](https://www.twilio.com/docs/chat/channels) the Invite resource belongs to.
     */
    channelSid?: string;
    /**
     * The `identity` of the User that created the invite.
     */
    createdBy?: string;
    /**
     * The date and time in GMT when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateCreated?: Date;
    /**
     * The date and time in GMT when the resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateUpdated?: Date;
    /**
     * The application-defined string that uniquely identifies the resource's [User](https://www.twilio.com/docs/chat/rest/user-resource) within the [Service](https://www.twilio.com/docs/chat/rest/service-resource). See [access tokens](https://www.twilio.com/docs/chat/create-tokens) for more info.
     */
    identity?: string;
    /**
     * The SID of the [Role](https://www.twilio.com/docs/chat/rest/role-resource) assigned to the resource.
     */
    roleSid?: string;
    /**
     * The SID of the [Service](https://www.twilio.com/docs/chat/rest/service-resource) the Invite resource is associated with.
     */
    serviceSid?: string;
    /**
     * The unique string that we created to identify the Invite resource.
     */
    sid?: string;
    /**
     * The absolute URL of the Invite resource.
     */
    url?: string;
}
