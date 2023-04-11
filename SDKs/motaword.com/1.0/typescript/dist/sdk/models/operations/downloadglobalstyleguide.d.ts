import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DownloadGlobalStyleGuideResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * StyleGuideNotFound
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Style guide file streamed.
     */
    downloadGlobalStyleGuide200ApplicationJSONString?: string;
}
