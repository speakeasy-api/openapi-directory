import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchBindingServerList: readonly ["https://notify.twilio.com"];
export declare class FetchBindingSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchBindingRequest extends SpeakeasyBase {
    /**
     * The SID of the [Service](https://www.twilio.com/docs/notify/api/service-resource) to fetch the resource from.
     */
    serviceSid: string;
    /**
     * The Twilio-provided string that uniquely identifies the Binding resource to fetch.
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
    notifyV1ServiceBinding?: shared.NotifyV1ServiceBinding;
}
