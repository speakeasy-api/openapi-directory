import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class RevokeRefreshTokenV2Security extends SpeakeasyBase {
    bearerToken: string;
}
export declare class RevokeRefreshTokenV2Request extends SpeakeasyBase {
    /**
     * the token to revoke
     */
    token: string;
}
export declare class RevokeRefreshTokenV2Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
