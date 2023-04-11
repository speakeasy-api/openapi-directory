import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateOrganizationSamlRequestBody extends SpeakeasyBase {
    /**
     * Boolean for updating SAML SSO enabled settings.
     */
    enabled?: boolean;
}
export declare class UpdateOrganizationSamlRequest extends SpeakeasyBase {
    requestBody?: UpdateOrganizationSamlRequestBody;
    organizationId: string;
}
/**
 * Successful operation
 */
export declare class UpdateOrganizationSaml200ApplicationJSON extends SpeakeasyBase {
    /**
     * Toggle depicting if SAML SSO settings are enabled
     */
    enabled?: boolean;
}
export declare class UpdateOrganizationSamlResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateOrganizationSaml200ApplicationJSONObject?: UpdateOrganizationSaml200ApplicationJSON;
}
