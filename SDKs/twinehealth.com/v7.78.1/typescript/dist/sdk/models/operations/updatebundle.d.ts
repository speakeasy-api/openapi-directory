import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateBundleRequest extends SpeakeasyBase {
    updateBundleRequest: shared.UpdateBundleRequest;
    /**
     * Bundle identifier
     */
    id: string;
}
export declare class UpdateBundleResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Invalid Request
     */
    createOrUpdateErrorResponse?: shared.CreateOrUpdateErrorResponse;
    /**
     * Unauthorized
     */
    fetchErrorResponse?: shared.FetchErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    updateBundleResponse?: shared.UpdateBundleResponse;
}
