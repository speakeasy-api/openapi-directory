import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SandboxItemSetVerificationStatusResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    sandboxItemSetVerificationStatusResponse?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
