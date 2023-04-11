import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class IdentityVerificationListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    identityVerificationListResponse?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
