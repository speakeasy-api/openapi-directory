import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostCompanyAttendancesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Invalid request
     */
    detailedErrorResponse?: shared.DetailedErrorResponse;
    /**
     * The attendance periods were created successfully
     */
    newAttendancePeriodResponse?: shared.NewAttendancePeriodResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
