import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class IdentityVerificationGetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    identityVerificationGetResponse?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
