import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetApiV1AdminReportsIdSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class GetApiV1AdminReportsIdRequest extends SpeakeasyBase {
    /**
     * ID of the report
     */
    id: string;
}
export declare class GetApiV1AdminReportsIdResponse extends SpeakeasyBase {
    /**
     * Success
     */
    adminReport?: shared.AdminReport;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
