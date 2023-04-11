import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DowngradeUserProofreaderSecurity extends SpeakeasyBase {
    mwoAuth: string;
}
export declare class DowngradeUserProofreaderRequest extends SpeakeasyBase {
    /**
     * User ID
     */
    userId: number;
}
export declare class DowngradeUserProofreaderResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * VendorNotFound
     */
    error?: shared.ErrorT;
    /**
     * Successful operation
     */
    operationStatus?: shared.OperationStatus;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
