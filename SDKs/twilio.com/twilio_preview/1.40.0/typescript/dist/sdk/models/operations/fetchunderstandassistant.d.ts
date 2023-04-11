import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchUnderstandAssistantServerList: readonly ["https://preview.twilio.com"];
export declare class FetchUnderstandAssistantSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchUnderstandAssistantRequest extends SpeakeasyBase {
    /**
     * A 34 character string that uniquely identifies this resource.
     */
    sid: string;
}
export declare class FetchUnderstandAssistantResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    previewUnderstandAssistant?: shared.PreviewUnderstandAssistant;
}
