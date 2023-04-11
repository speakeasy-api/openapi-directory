import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateStyleGuideJsonRequest extends SpeakeasyBase {
    styleGuideUploadRequest?: shared.StyleGuideUploadRequest;
    /**
     * Project ID
     */
    projectId: number;
}
export declare class CreateStyleGuideJsonResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * FileTooLarge
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Newly created style guide model or a list of new style guide models
     */
    styleGuideList?: shared.StyleGuideList;
}
