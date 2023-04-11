import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateStyleGuideMultipartRequest extends SpeakeasyBase {
    styleGuideUploadRequest1?: shared.StyleGuideUploadRequest1;
    /**
     * Project ID
     */
    projectId: number;
}
export declare class CreateStyleGuideMultipartResponse extends SpeakeasyBase {
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
