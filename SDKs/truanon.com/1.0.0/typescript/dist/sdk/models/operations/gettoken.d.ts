import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetTokenRequest extends SpeakeasyBase {
    /**
     * This is your unique username or member ID
     */
    id?: string;
    /**
     * The service name given to you by TruAnon
     */
    service?: string;
}
export declare class GetTokenResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
