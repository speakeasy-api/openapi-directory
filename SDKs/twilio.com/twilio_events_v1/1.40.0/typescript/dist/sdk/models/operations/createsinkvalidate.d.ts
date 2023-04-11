import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateSinkValidateServerList: readonly ["https://events.twilio.com"];
export declare class CreateSinkValidateSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateSinkValidateCreateSinkValidateRequest extends SpeakeasyBase {
    /**
     * A 34 character string that uniquely identifies the test event for a Sink being validated.
     */
    testId: string;
}
export declare class CreateSinkValidateRequest extends SpeakeasyBase {
    requestBody?: CreateSinkValidateCreateSinkValidateRequest;
    /**
     * A 34 character string that uniquely identifies the Sink being validated.
     */
    sid: string;
}
export declare class CreateSinkValidateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    eventsV1SinkSinkValidate?: shared.EventsV1SinkSinkValidate;
}
