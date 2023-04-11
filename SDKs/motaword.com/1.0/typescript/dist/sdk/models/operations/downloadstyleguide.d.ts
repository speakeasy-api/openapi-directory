import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DownloadStyleGuideRequest extends SpeakeasyBase {
    /**
     * Project ID
     */
    projectId: number;
    /**
     * Style Guide ID
     */
    styleGuideId: number;
}
export declare class DownloadStyleGuideResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * StyleGuideNotFound
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Style guide streamed
     */
    downloadStyleGuide200ApplicationJSONString?: string;
}
