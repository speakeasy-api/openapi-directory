import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateSinkServerList: readonly ["https://events.twilio.com"];
export declare class CreateSinkSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateSinkCreateSinkRequest extends SpeakeasyBase {
    /**
     * A human readable description for the Sink **This value should not contain PII.**
     */
    description: string;
    /**
     * The information required for Twilio to connect to the provided Sink encoded as JSON.
     */
    sinkConfiguration: any;
    sinkType: shared.SinkEnumSinkTypeEnum;
}
export declare class CreateSinkResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    eventsV1Sink?: shared.EventsV1Sink;
}
