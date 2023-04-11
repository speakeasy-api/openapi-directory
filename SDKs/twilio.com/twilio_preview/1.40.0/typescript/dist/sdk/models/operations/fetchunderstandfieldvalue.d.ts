import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchUnderstandFieldValueServerList: readonly ["https://preview.twilio.com"];
export declare class FetchUnderstandFieldValueSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchUnderstandFieldValueRequest extends SpeakeasyBase {
    assistantSid: string;
    fieldTypeSid: string;
    sid: string;
}
export declare class FetchUnderstandFieldValueResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    previewUnderstandAssistantFieldTypeFieldValue?: shared.PreviewUnderstandAssistantFieldTypeFieldValue;
}
