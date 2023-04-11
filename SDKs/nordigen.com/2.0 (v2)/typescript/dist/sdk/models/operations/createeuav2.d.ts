import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateEuav2Response extends SpeakeasyBase {
    contentType: string;
    /**
     * Create enduser agreement
     */
    endUserAgreement?: shared.EndUserAgreement;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Agreement field errors
     */
    createEUAV2400ApplicationJSONObject?: Record<string, any>;
    /**
     * Invalid token
     */
    createEUAV2401ApplicationJSONObject?: Record<string, any>;
    /**
     * IP Access denied
     */
    createEUAV2403ApplicationJSONObject?: Record<string, any>;
}
