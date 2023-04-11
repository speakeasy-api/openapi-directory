import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class MakeUserProofreaderSecurity extends SpeakeasyBase {
    mwoAuth: string;
}
export declare class MakeUserProofreaderRequest extends SpeakeasyBase {
    /**
     * User ID
     */
    userId: number;
}
export declare class MakeUserProofreaderResponse extends SpeakeasyBase {
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
