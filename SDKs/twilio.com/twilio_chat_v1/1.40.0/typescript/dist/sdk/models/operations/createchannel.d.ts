import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateChannelServerList: readonly ["https://chat.twilio.com"];
export declare class CreateChannelSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateChannelCreateChannelRequest extends SpeakeasyBase {
    /**
     * A valid JSON string that contains application-specific data.
     */
    attributes?: string;
    /**
     * A descriptive string that you create to describe the new resource. It can be up to 64 characters long.
     */
    friendlyName?: string;
    type?: shared.ChannelEnumChannelTypeEnum;
    /**
     * An application-defined string that uniquely identifies the resource. It can be used to address the resource in place of the resource's `sid` in the URL. This value must be 64 characters or less in length and be unique within the Service.
     */
    uniqueName?: string;
}
export declare class CreateChannelRequest extends SpeakeasyBase {
    requestBody?: CreateChannelCreateChannelRequest;
    /**
     * The SID of the [Service](https://www.twilio.com/docs/api/chat/rest/services) to create the resource under.
     */
    serviceSid: string;
}
export declare class CreateChannelResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    chatV1ServiceChannel?: shared.ChatV1ServiceChannel;
}
