import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateStyleGuideJsonRequest extends SpeakeasyBase {
    styleGuideUploadRequest?: shared.StyleGuideUploadRequest;
    /**
     * Project ID
     */
    projectId: number;
    /**
     * Style guide ID
     */
    styleGuideId: number;
}
export declare class UpdateStyleGuideJsonResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * FileTooLarge
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Updated style guide model
     */
    styleGuide?: shared.StyleGuide;
}
