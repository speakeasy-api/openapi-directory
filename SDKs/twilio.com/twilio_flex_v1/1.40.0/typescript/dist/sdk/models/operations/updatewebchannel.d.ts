import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateWebChannelServerList: readonly ["https://flex-api.twilio.com"];
export declare class UpdateWebChannelSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateWebChannelUpdateWebChannelRequest extends SpeakeasyBase {
    chatStatus?: shared.WebChannelEnumChatStatusEnum;
    /**
     * The post-engagement data.
     */
    postEngagementData?: string;
}
export declare class UpdateWebChannelRequest extends SpeakeasyBase {
    requestBody?: UpdateWebChannelUpdateWebChannelRequest;
    /**
     * The SID of the WebChannel resource to update.
     */
    sid: string;
}
export declare class UpdateWebChannelResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    flexV1WebChannel?: shared.FlexV1WebChannel;
}
