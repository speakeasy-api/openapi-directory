import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class FetchActionRequest extends SpeakeasyBase {
    /**
     * Action identifier
     */
    id: string;
}
export declare class FetchActionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    fetchActionResponse?: shared.FetchActionResponse;
    /**
     * Unauthorized
     */
    fetchErrorResponse?: shared.FetchErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
