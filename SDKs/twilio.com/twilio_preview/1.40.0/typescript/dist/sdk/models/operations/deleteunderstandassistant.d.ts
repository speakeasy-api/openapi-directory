import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteUnderstandAssistantServerList: readonly ["https://preview.twilio.com"];
export declare class DeleteUnderstandAssistantSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteUnderstandAssistantRequest extends SpeakeasyBase {
    /**
     * A 34 character string that uniquely identifies this resource.
     */
    sid: string;
}
export declare class DeleteUnderstandAssistantResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
