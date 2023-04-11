import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetOrganizationSamlRequest extends SpeakeasyBase {
    organizationId: string;
}
/**
 * Successful operation
 */
export declare class GetOrganizationSaml200ApplicationJSON extends SpeakeasyBase {
    /**
     * Toggle depicting if SAML SSO settings are enabled
     */
    enabled?: boolean;
}
export declare class GetOrganizationSamlResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getOrganizationSaml200ApplicationJSONObject?: GetOrganizationSaml200ApplicationJSON;
}
