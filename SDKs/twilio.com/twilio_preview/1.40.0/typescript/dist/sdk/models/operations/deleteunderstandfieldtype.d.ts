import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteUnderstandFieldTypeServerList: readonly ["https://preview.twilio.com"];
export declare class DeleteUnderstandFieldTypeSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteUnderstandFieldTypeRequest extends SpeakeasyBase {
    assistantSid: string;
    sid: string;
}
export declare class DeleteUnderstandFieldTypeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
