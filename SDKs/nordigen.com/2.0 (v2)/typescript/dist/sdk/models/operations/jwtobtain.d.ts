import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class JWTObtainResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Authentication failed
     */
    jwtObtain401ApplicationJSONObject?: Record<string, any>;
    /**
     * IP Access denied
     */
    jwtObtain403ApplicationJSONObject?: Record<string, any>;
    /**
     * Obtain JWT response.
     */
    spectacularJWTObtain?: shared.SpectacularJWTObtain;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
