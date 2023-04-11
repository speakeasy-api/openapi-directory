import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchBindingServerList: readonly ["https://chat.twilio.com"];
export declare class FetchBindingSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchBindingRequest extends SpeakeasyBase {
    /**
     * The SID of the [Service](https://www.twilio.com/docs/chat/rest/service-resource) to fetch the Binding resource from.
     */
    serviceSid: string;
    /**
     * The SID of the Binding resource to fetch.
     */
    sid: string;
}
export declare class FetchBindingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    chatV2ServiceBinding?: shared.ChatV2ServiceBinding;
}
