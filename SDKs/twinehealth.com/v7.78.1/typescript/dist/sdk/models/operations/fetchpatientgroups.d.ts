import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class FetchPatientGroupsRequest extends SpeakeasyBase {
    /**
     * Patient identifier
     */
    id: string;
}
export declare class FetchPatientGroupsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Unauthorized
     */
    fetchErrorResponse?: shared.FetchErrorResponse;
    /**
     * OK
     */
    fetchGroupsResponse?: shared.FetchGroupsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
