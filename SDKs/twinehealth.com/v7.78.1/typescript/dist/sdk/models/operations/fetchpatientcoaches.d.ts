import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class FetchPatientCoachesRequest extends SpeakeasyBase {
    /**
     * Patient identifier
     */
    id: string;
}
export declare class FetchPatientCoachesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    fetchCoachesResponse?: shared.FetchCoachesResponse;
    /**
     * Unauthorized
     */
    fetchErrorResponse?: shared.FetchErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
