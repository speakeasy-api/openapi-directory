import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class IdentityMatchResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    identityMatchResponse?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
