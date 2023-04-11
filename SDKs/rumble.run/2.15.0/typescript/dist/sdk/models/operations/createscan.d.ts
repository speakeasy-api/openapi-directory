import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateScanSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class CreateScanRequest extends SpeakeasyBase {
    scanOptions?: shared.ScanOptions;
    /**
     * UUID or name of the site to scan
     */
    siteId: string;
}
export declare class CreateScanResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * a created scan task
     */
    task?: shared.Task;
}
