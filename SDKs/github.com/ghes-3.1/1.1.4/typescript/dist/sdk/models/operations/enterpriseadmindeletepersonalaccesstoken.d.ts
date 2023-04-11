import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class EnterpriseAdminDeletePersonalAccessTokenRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the token.
     */
    tokenId: number;
}
export declare class EnterpriseAdminDeletePersonalAccessTokenResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
