import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostApiV1AdminReportsIdReopenSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class PostApiV1AdminReportsIdReopenRequest extends SpeakeasyBase {
    /**
     * ID of the report
     */
    id: string;
}
export declare class PostApiV1AdminReportsIdReopenResponse extends SpeakeasyBase {
    /**
     * Success
     */
    adminReport?: shared.AdminReport;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
