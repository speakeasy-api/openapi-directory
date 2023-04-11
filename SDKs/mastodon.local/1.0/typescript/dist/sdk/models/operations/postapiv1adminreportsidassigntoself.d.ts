import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostApiV1AdminReportsIdAssignToSelfSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class PostApiV1AdminReportsIdAssignToSelfRequest extends SpeakeasyBase {
    /**
     * ID of the report
     */
    id: string;
}
export declare class PostApiV1AdminReportsIdAssignToSelfResponse extends SpeakeasyBase {
    /**
     * Success
     */
    adminReport?: shared.AdminReport;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
