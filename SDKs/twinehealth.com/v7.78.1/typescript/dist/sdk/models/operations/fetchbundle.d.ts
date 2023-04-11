import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class FetchBundleRequest extends SpeakeasyBase {
    /**
     * Bundle identifier
     */
    id: string;
}
export declare class FetchBundleResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    fetchBundleResponse?: shared.FetchBundleResponse;
    /**
     * Unauthorized
     */
    fetchErrorResponse?: shared.FetchErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
