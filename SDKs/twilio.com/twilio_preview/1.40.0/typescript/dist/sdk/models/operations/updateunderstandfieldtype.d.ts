import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateUnderstandFieldTypeServerList: readonly ["https://preview.twilio.com"];
export declare class UpdateUnderstandFieldTypeSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateUnderstandFieldTypeUpdateUnderstandFieldTypeRequest extends SpeakeasyBase {
    /**
     * A user-provided string that identifies this resource. It is non-unique and can up to 255 characters long.
     */
    friendlyName?: string;
    /**
     * A user-provided string that uniquely identifies this resource as an alternative to the sid. Unique up to 64 characters long.
     */
    uniqueName?: string;
}
export declare class UpdateUnderstandFieldTypeRequest extends SpeakeasyBase {
    assistantSid: string;
    requestBody?: UpdateUnderstandFieldTypeUpdateUnderstandFieldTypeRequest;
    sid: string;
}
export declare class UpdateUnderstandFieldTypeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    previewUnderstandAssistantFieldType?: shared.PreviewUnderstandAssistantFieldType;
}
