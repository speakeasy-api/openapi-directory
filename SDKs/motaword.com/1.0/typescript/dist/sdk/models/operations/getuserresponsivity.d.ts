import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetUserResponsivitySecurity extends SpeakeasyBase {
    mwoAuth: string;
}
/**
 * Period for calcualtion.
 */
export declare enum GetUserResponsivityPeriodEnum {
    Monthly = "monthly",
    Weekly = "weekly"
}
export declare class GetUserResponsivityRequest extends SpeakeasyBase {
    /**
     * Period for calcualtion.
     */
    period?: GetUserResponsivityPeriodEnum;
    /**
     * User ID
     */
    userId: number;
}
export declare class GetUserResponsivityResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * VendorNotFound - this is not a vendor user account
     */
    error?: shared.ErrorT;
    /**
     * Vendor responsivity stats
     */
    responsivityList?: shared.ResponsivityList;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
