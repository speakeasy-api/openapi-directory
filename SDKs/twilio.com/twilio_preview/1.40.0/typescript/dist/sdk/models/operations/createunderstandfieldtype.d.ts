import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateUnderstandFieldTypeServerList: readonly ["https://preview.twilio.com"];
export declare class CreateUnderstandFieldTypeSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateUnderstandFieldTypeCreateUnderstandFieldTypeRequest extends SpeakeasyBase {
    /**
     * A user-provided string that identifies this resource. It is non-unique and can up to 255 characters long.
     */
    friendlyName?: string;
    /**
     * A user-provided string that uniquely identifies this resource as an alternative to the sid. Unique up to 64 characters long.
     */
    uniqueName: string;
}
export declare class CreateUnderstandFieldTypeRequest extends SpeakeasyBase {
    assistantSid: string;
    requestBody?: CreateUnderstandFieldTypeCreateUnderstandFieldTypeRequest;
}
export declare class CreateUnderstandFieldTypeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    previewUnderstandAssistantFieldType?: shared.PreviewUnderstandAssistantFieldType;
}
