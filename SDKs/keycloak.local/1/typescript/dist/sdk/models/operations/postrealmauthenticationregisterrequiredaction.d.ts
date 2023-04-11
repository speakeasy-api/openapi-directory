import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostRealmAuthenticationRegisterRequiredActionRequest extends SpeakeasyBase {
    /**
     * JSON containing 'providerId', and 'name' attributes.
     */
    requestBody: Record<string, any>;
    /**
     * realm name (not id!)
     */
    realm: string;
}
export declare class PostRealmAuthenticationRegisterRequiredActionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
