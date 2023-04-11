import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateSinkServerList: readonly ["https://events.twilio.com"];
export declare class UpdateSinkSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateSinkUpdateSinkRequest extends SpeakeasyBase {
    /**
     * A human readable description for the Sink **This value should not contain PII.**
     */
    description: string;
}
export declare class UpdateSinkRequest extends SpeakeasyBase {
    requestBody?: UpdateSinkUpdateSinkRequest;
    /**
     * A 34 character string that uniquely identifies this Sink.
     */
    sid: string;
}
export declare class UpdateSinkResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    eventsV1Sink?: shared.EventsV1Sink;
}
