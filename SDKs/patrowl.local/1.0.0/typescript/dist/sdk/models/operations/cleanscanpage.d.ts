import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CleanScanPageRequest extends SpeakeasyBase {
    /**
     * Numeric ID of the scan to clean
     */
    scanId: number;
}
export declare class CleanScanPageResponse extends SpeakeasyBase {
    /**
     * successful operation
     */
    apiResponse?: shared.ApiResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
