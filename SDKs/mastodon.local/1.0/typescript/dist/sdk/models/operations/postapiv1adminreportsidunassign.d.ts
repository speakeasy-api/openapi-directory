import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostApiV1AdminReportsIdUnassignSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class PostApiV1AdminReportsIdUnassignRequest extends SpeakeasyBase {
    /**
     * ID of the report
     */
    id: string;
}
export declare class PostApiV1AdminReportsIdUnassignResponse extends SpeakeasyBase {
    /**
     * Success
     */
    adminReport?: shared.AdminReport;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
