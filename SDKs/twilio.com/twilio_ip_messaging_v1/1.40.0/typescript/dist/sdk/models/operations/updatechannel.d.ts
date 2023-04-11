import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateChannelServerList: readonly ["https://ip-messaging.twilio.com"];
export declare class UpdateChannelSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateChannelUpdateChannelRequest extends SpeakeasyBase {
    attributes?: string;
    friendlyName?: string;
    uniqueName?: string;
}
export declare class UpdateChannelRequest extends SpeakeasyBase {
    requestBody?: UpdateChannelUpdateChannelRequest;
    serviceSid: string;
    sid: string;
}
export declare class UpdateChannelResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    ipMessagingV1ServiceChannel?: shared.IpMessagingV1ServiceChannel;
}
