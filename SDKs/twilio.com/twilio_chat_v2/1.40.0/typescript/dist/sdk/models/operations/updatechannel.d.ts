import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateChannelServerList: readonly ["https://chat.twilio.com"];
export declare class UpdateChannelSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateChannelUpdateChannelRequest extends SpeakeasyBase {
    /**
     * A valid JSON string that contains application-specific data.
     */
    attributes?: string;
    /**
     * The `identity` of the User that created the channel. Default is: `system`.
     */
    createdBy?: string;
    /**
     * The date, specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format, to assign to the resource as the date it was created. The default value is the current time set by the Chat service.  Note that this should only be used in cases where a Channel is being recreated from a backup/separate source.
     */
    dateCreated?: Date;
    /**
     * The date, specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format, to assign to the resource as the date it was last updated.
     */
    dateUpdated?: Date;
    /**
     * A descriptive string that you create to describe the resource. It can be up to 256 characters long.
     */
    friendlyName?: string;
    /**
     * An application-defined string that uniquely identifies the resource. It can be used to address the resource in place of the resource's `sid` in the URL. This value must be 256 characters or less in length and unique within the Service.
     */
    uniqueName?: string;
}
export declare class UpdateChannelRequest extends SpeakeasyBase {
    requestBody?: UpdateChannelUpdateChannelRequest;
    /**
     * The SID of the [Service](https://www.twilio.com/docs/chat/rest/service-resource) to update the Channel resource in.
     */
    serviceSid: string;
    /**
     * The SID of the Channel resource to update. This value can be either the `sid` or the `unique_name` of the Channel resource to update.
     */
    sid: string;
    /**
     * The X-Twilio-Webhook-Enabled HTTP request header
     */
    xTwilioWebhookEnabled?: shared.ChannelEnumWebhookEnabledTypeEnum;
}
export declare class UpdateChannelResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    chatV2ServiceChannel?: shared.ChatV2ServiceChannel;
}
