import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class FetchCoachRequest extends SpeakeasyBase {
    /**
     * Coach identifier
     */
    id: string;
}
export declare class FetchCoachResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    fetchCoachResponse?: shared.FetchCoachResponse;
    /**
     * Unauthorized
     */
    fetchErrorResponse?: shared.FetchErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
