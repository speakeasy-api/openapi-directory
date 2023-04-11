import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchUnderstandFieldTypeServerList: readonly ["https://preview.twilio.com"];
export declare class FetchUnderstandFieldTypeSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchUnderstandFieldTypeRequest extends SpeakeasyBase {
    assistantSid: string;
    sid: string;
}
export declare class FetchUnderstandFieldTypeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    previewUnderstandAssistantFieldType?: shared.PreviewUnderstandAssistantFieldType;
}
