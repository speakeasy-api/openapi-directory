import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateUnderstandFieldValueServerList: readonly ["https://preview.twilio.com"];
export declare class CreateUnderstandFieldValueSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateUnderstandFieldValueCreateUnderstandFieldValueRequest extends SpeakeasyBase {
    /**
     * An ISO language-country string of the value.
     */
    language: string;
    /**
     * A value that indicates this field value is a synonym of. Empty if the value is not a synonym.
     */
    synonymOf?: string;
    /**
     * A user-provided string that uniquely identifies this resource as an alternative to the sid. Unique up to 64 characters long.
     */
    value: string;
}
export declare class CreateUnderstandFieldValueRequest extends SpeakeasyBase {
    assistantSid: string;
    fieldTypeSid: string;
    requestBody?: CreateUnderstandFieldValueCreateUnderstandFieldValueRequest;
}
export declare class CreateUnderstandFieldValueResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    previewUnderstandAssistantFieldTypeFieldValue?: shared.PreviewUnderstandAssistantFieldTypeFieldValue;
}
