import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SandboxItemResetLoginResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    sandboxItemResetLoginResponse?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
