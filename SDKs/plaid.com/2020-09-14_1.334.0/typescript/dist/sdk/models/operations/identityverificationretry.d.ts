import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class IdentityVerificationRetryResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    identityVerificationRetryResponse?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
