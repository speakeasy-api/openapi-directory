import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class JWTRefreshResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Invalid token
     */
    jwtRefresh401ApplicationJSONObject?: Record<string, any>;
    /**
     * IP Access denied
     */
    jwtRefresh403ApplicationJSONObject?: Record<string, any>;
    /**
     * Refresh access token.
     */
    spectacularJWTRefresh?: shared.SpectacularJWTRefresh;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
