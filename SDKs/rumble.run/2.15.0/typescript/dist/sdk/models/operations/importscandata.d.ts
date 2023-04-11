import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ImportScanDataSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class ImportScanDataRequest extends SpeakeasyBase {
    requestBody?: Uint8Array;
    /**
     * UUID or name of the site to import scan data into
     */
    siteId: string;
}
export declare class ImportScanDataResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * import task
     */
    task?: shared.Task;
}
