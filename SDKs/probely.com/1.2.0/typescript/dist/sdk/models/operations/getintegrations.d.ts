import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Not allowed to perform operation
 */
export declare class GetIntegrations403ApplicationJSON extends SpeakeasyBase {
    /**
     * Error message.
     */
    detail?: string;
}
/**
 * Access token is missing or invalid
 */
export declare class GetIntegrations401ApplicationJSON extends SpeakeasyBase {
    detail?: string;
}
export declare class GetIntegrationsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Available and installed integrations in the account
     */
    integrations?: shared.Integrations;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Access token is missing or invalid
     */
    getIntegrations401ApplicationJSONObject?: GetIntegrations401ApplicationJSON;
    /**
     * Not allowed to perform operation
     */
    getIntegrations403ApplicationJSONObject?: GetIntegrations403ApplicationJSON;
}
