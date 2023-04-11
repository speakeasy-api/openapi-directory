import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetStyleGuideWithEnum {
    Preview = "preview"
}
export declare class GetStyleGuideRequest extends SpeakeasyBase {
    /**
     * Project ID
     */
    projectId: number;
    /**
     * Style Guide ID
     */
    styleGuideId: number;
    /**
     * Attach further information. Possible values 'preview' to fetch temporary preview URLs. This is NOT recommended to be used with list calls. Only use with[]=preview for single document/style guide calls.
     */
    with?: GetStyleGuideWithEnum[];
}
export declare class GetStyleGuideResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * StyleGuideNotFound
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Style guide model
     */
    styleGuide?: shared.StyleGuide;
}
