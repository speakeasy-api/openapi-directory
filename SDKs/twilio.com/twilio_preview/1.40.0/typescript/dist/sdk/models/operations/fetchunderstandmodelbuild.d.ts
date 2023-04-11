import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchUnderstandModelBuildServerList: readonly ["https://preview.twilio.com"];
export declare class FetchUnderstandModelBuildSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchUnderstandModelBuildRequest extends SpeakeasyBase {
    assistantSid: string;
    sid: string;
}
export declare class FetchUnderstandModelBuildResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    previewUnderstandAssistantModelBuild?: shared.PreviewUnderstandAssistantModelBuild;
}
