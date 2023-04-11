import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateRatePlanServerList: readonly ["https://wireless.twilio.com"];
export declare class UpdateRatePlanSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateRatePlanUpdateRatePlanRequest extends SpeakeasyBase {
    /**
     * A descriptive string that you create to describe the resource. It does not have to be unique.
     */
    friendlyName?: string;
    /**
     * An application-defined string that uniquely identifies the resource. It can be used in place of the resource's `sid` in the URL to address the resource.
     */
    uniqueName?: string;
}
export declare class UpdateRatePlanRequest extends SpeakeasyBase {
    requestBody?: UpdateRatePlanUpdateRatePlanRequest;
    /**
     * The SID of the RatePlan resource to update.
     */
    sid: string;
}
export declare class UpdateRatePlanResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    wirelessV1RatePlan?: shared.WirelessV1RatePlan;
}
