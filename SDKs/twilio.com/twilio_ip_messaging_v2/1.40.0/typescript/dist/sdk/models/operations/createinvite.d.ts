import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateInviteServerList: readonly ["https://ip-messaging.twilio.com"];
export declare class CreateInviteSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateInviteCreateInviteRequest extends SpeakeasyBase {
    identity: string;
    roleSid?: string;
}
export declare class CreateInviteRequest extends SpeakeasyBase {
    channelSid: string;
    requestBody?: CreateInviteCreateInviteRequest;
    serviceSid: string;
}
export declare class CreateInviteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    ipMessagingV2ServiceChannelInvite?: shared.IpMessagingV2ServiceChannelInvite;
}
