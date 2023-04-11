import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteRatePlanServerList: readonly ["https://wireless.twilio.com"];
export declare class DeleteRatePlanSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteRatePlanRequest extends SpeakeasyBase {
    /**
     * The SID of the RatePlan resource to delete.
     */
    sid: string;
}
export declare class DeleteRatePlanResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
