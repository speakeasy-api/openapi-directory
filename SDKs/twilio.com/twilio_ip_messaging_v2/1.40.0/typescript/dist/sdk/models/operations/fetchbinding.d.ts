import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchBindingServerList: readonly ["https://ip-messaging.twilio.com"];
export declare class FetchBindingSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchBindingRequest extends SpeakeasyBase {
    serviceSid: string;
    sid: string;
}
export declare class FetchBindingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    ipMessagingV2ServiceBinding?: shared.IpMessagingV2ServiceBinding;
}
