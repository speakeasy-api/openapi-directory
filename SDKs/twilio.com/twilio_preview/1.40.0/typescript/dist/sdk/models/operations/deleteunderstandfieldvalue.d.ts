import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteUnderstandFieldValueServerList: readonly ["https://preview.twilio.com"];
export declare class DeleteUnderstandFieldValueSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteUnderstandFieldValueRequest extends SpeakeasyBase {
    assistantSid: string;
    fieldTypeSid: string;
    sid: string;
}
export declare class DeleteUnderstandFieldValueResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
