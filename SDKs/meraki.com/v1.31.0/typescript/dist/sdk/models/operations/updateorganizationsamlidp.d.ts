import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateOrganizationSamlIdpRequestBody extends SpeakeasyBase {
    /**
     * Dashboard will redirect users to this URL when they sign out.
     */
    sloLogoutUrl?: string;
    /**
     * Fingerprint (SHA1) of the SAML certificate provided by your Identity Provider (IdP). This will be used for encryption / validation.
     */
    x509certSha1Fingerprint?: string;
}
export declare class UpdateOrganizationSamlIdpRequest extends SpeakeasyBase {
    requestBody?: UpdateOrganizationSamlIdpRequestBody;
    idpId: string;
    organizationId: string;
}
export declare class UpdateOrganizationSamlIdp200ApplicationJSON extends SpeakeasyBase {
    /**
     * URL that is consuming SAML Identity Provider (IdP)
     */
    consumerUrl?: string;
    /**
     * ID associated with the SAML Identity Provider (IdP)
     */
    idpId?: string;
    /**
     * Dashboard will redirect users to this URL when they sign out.
     */
    sloLogoutUrl?: string;
    /**
     * Fingerprint (SHA1) of the SAML certificate provided by your Identity Provider (IdP). This will be used for encryption / validation.
     */
    x509certSha1Fingerprint?: string;
}
export declare class UpdateOrganizationSamlIdpResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateOrganizationSamlIdp200ApplicationJSONObjects?: UpdateOrganizationSamlIdp200ApplicationJSON[];
}
