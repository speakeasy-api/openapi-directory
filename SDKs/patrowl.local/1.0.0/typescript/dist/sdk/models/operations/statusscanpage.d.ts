import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class StatusScanPageRequest extends SpeakeasyBase {
    /**
     * Numeric ID of the scan to get status
     */
    scanId: number;
}
export declare class StatusScanPageResponse extends SpeakeasyBase {
    /**
     * successful operation
     */
    apiResponse?: shared.ApiResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
