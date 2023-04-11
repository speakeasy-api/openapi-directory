import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ImportNessusScanDataSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class ImportNessusScanDataRequest extends SpeakeasyBase {
    requestBody?: Uint8Array;
    /**
     * UUID or name of the site to import Nessus scan data into
     */
    siteId: string;
}
export declare class ImportNessusScanDataResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * import task
     */
    task?: shared.Task;
}
