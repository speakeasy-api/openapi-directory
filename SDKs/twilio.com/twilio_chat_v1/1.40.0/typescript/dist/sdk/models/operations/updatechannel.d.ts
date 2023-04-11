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
     * A descriptive string that you create to describe the resource. It can be up to 64 characters long.
     */
    friendlyName?: string;
    /**
     * An application-defined string that uniquely identifies the resource. It can be used to address the resource in place of the resource's `sid` in the URL. This value must be 64 characters or less in length and be unique within the Service.
     */
    uniqueName?: string;
}
export declare class UpdateChannelRequest extends SpeakeasyBase {
    requestBody?: UpdateChannelUpdateChannelRequest;
    /**
     * The SID of the [Service](https://www.twilio.com/docs/api/chat/rest/services) to update the resource from.
     */
    serviceSid: string;
    /**
     * The Twilio-provided string that uniquely identifies the Channel resource to update.
     */
    sid: string;
}
export declare class UpdateChannelResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    chatV1ServiceChannel?: shared.ChatV1ServiceChannel;
}
