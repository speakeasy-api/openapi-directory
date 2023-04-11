import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PatchCompanyAttendancesIdRequest extends SpeakeasyBase {
    /**
     * attendance period data to update
     */
    updateAttendancePeriodRequest: shared.UpdateAttendancePeriodRequest;
    /**
     * ID of the attendance period to update
     */
    id: number;
}
export declare class PatchCompanyAttendancesIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Not found response
     */
    errorResponse?: shared.ErrorResponse;
    /**
     * Success response
     */
    response?: shared.Response;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
