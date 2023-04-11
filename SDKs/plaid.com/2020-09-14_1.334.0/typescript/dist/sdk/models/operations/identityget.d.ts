import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class IdentityGetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    identityGetResponse?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
