import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Created
 */
export declare class ChatV1ServiceChannelInvite extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/api/rest/account) that created the Invite resource.
     */
    accountSid?: string;
    /**
     * The SID of the [Channel](https://www.twilio.com/docs/api/chat/rest/channels) the resource belongs to.
     */
    channelSid?: string;
    /**
     * The `identity` of the User that created the invite.
     */
    createdBy?: string;
    /**
     * The date and time in GMT when the resource was created specified in [RFC 2822](http://www.ietf.org/rfc/rfc2822.txt) format.
     */
    dateCreated?: Date;
    /**
     * The date and time in GMT when the resource was last updated specified in [RFC 2822](http://www.ietf.org/rfc/rfc2822.txt) format.
     */
    dateUpdated?: Date;
    /**
     * The application-defined string that uniquely identifies the resource's [User](https://www.twilio.com/docs/api/chat/rest/users) within the [Service](https://www.twilio.com/docs/api/chat/rest/services). See [access tokens](https://www.twilio.com/docs/api/chat/guides/create-tokens) for more info.
     */
    identity?: string;
    /**
     * The SID of the [Role](https://www.twilio.com/docs/api/chat/rest/roles) assigned to the resource.
     */
    roleSid?: string;
    /**
     * The SID of the [Service](https://www.twilio.com/docs/api/chat/rest/services) the resource is associated with.
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
