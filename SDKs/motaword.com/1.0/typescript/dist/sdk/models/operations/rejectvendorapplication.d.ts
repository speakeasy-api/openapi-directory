import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RejectVendorApplicationSecurity extends SpeakeasyBase {
    mwoAuth: string;
}
export declare class RejectVendorApplicationRequest extends SpeakeasyBase {
    /**
     * User ID
     */
    userId: number;
}
export declare class RejectVendorApplicationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * UserNotFound
     */
    error?: shared.ErrorT;
    /**
     * Vendor application of this user is rejected.
     */
    operationStatus?: shared.OperationStatus;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
