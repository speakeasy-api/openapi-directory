import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateSinkTestServerList: readonly ["https://events.twilio.com"];
export declare class CreateSinkTestSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateSinkTestRequest extends SpeakeasyBase {
    /**
     * A 34 character string that uniquely identifies the Sink to be Tested.
     */
    sid: string;
}
export declare class CreateSinkTestResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    eventsV1SinkSinkTest?: shared.EventsV1SinkSinkTest;
}
