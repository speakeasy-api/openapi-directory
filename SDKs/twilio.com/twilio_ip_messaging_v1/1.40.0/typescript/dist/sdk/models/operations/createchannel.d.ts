import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateChannelServerList: readonly ["https://ip-messaging.twilio.com"];
export declare class CreateChannelSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateChannelCreateChannelRequest extends SpeakeasyBase {
    attributes?: string;
    friendlyName?: string;
    type?: shared.ChannelEnumChannelTypeEnum;
    uniqueName?: string;
}
export declare class CreateChannelRequest extends SpeakeasyBase {
    requestBody?: CreateChannelCreateChannelRequest;
    serviceSid: string;
}
export declare class CreateChannelResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    ipMessagingV1ServiceChannel?: shared.IpMessagingV1ServiceChannel;
}
