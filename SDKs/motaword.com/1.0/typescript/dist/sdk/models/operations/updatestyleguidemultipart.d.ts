import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateStyleGuideMultipartRequest extends SpeakeasyBase {
    styleGuideUploadRequest1?: shared.StyleGuideUploadRequest1;
    /**
     * Project ID
     */
    projectId: number;
    /**
     * Style guide ID
     */
    styleGuideId: number;
}
export declare class UpdateStyleGuideMultipartResponse extends SpeakeasyBase {
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
