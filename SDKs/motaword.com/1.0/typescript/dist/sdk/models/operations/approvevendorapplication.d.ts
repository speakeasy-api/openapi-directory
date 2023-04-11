import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ApproveVendorApplicationSecurity extends SpeakeasyBase {
    mwoAuth: string;
}
export declare class ApproveVendorApplicationRequest extends SpeakeasyBase {
    /**
     * User ID
     */
    userId: number;
}
export declare class ApproveVendorApplicationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * UserNotFound
     */
    error?: shared.ErrorT;
    /**
     * Vendor application of this user is approved. User is ready to work with us.
     */
    operationStatus?: shared.OperationStatus;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
