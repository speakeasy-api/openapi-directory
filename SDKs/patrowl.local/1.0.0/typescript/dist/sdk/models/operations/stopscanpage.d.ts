import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class StopScanPageRequest extends SpeakeasyBase {
    /**
     * Numeric ID of the scan to stop
     */
    scanId: number;
}
export declare class StopScanPageResponse extends SpeakeasyBase {
    /**
     * successful operation
     */
    apiResponse?: shared.ApiResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
