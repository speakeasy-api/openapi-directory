import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Time period to calculate your responsiveness
 */
export declare enum GetResponsivityPeriodEnum {
    Monthly = "monthly",
    Weekly = "weekly"
}
export declare class GetResponsivityRequest extends SpeakeasyBase {
    /**
     * Time period to calculate your responsiveness
     */
    period?: GetResponsivityPeriodEnum;
}
export declare class GetResponsivityResponse extends SpeakeasyBase {
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
