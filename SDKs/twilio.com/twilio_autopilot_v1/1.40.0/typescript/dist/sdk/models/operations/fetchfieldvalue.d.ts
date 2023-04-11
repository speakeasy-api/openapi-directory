import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchFieldValueServerList: readonly ["https://autopilot.twilio.com"];
export declare class FetchFieldValueSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchFieldValueRequest extends SpeakeasyBase {
    /**
     * The SID of the [Assistant](https://www.twilio.com/docs/autopilot/api/assistant) that is the parent of the FieldType associated with the resource to fetch.
     */
    assistantSid: string;
    /**
     * The SID of the Field Type associated with the Field Value to fetch.
     */
    fieldTypeSid: string;
    /**
     * The Twilio-provided string that uniquely identifies the FieldValue resource to fetch.
     */
    sid: string;
}
export declare class FetchFieldValueResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    autopilotV1AssistantFieldTypeFieldValue?: shared.AutopilotV1AssistantFieldTypeFieldValue;
}
