import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchSinkServerList: readonly ["https://events.twilio.com"];
export declare class FetchSinkSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchSinkRequest extends SpeakeasyBase {
    /**
     * A 34 character string that uniquely identifies this Sink.
     */
    sid: string;
}
export declare class FetchSinkResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    eventsV1Sink?: shared.EventsV1Sink;
}
