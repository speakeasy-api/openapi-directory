import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class IdentityVerificationCreateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    identityVerificationCreateResponse?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
