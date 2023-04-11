import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateOrganizationBrandingPoliciesPrioritiesRequestBody extends SpeakeasyBase {
    /**
     *       An ordered list of branding policy IDs that determines the priority order of how to apply the policies
     *
     * @remarks
     *
     */
    brandingPolicyIds?: string[];
}
export declare class UpdateOrganizationBrandingPoliciesPrioritiesRequest extends SpeakeasyBase {
    requestBody?: UpdateOrganizationBrandingPoliciesPrioritiesRequestBody;
    organizationId: string;
}
/**
 * Successful operation
 */
export declare class UpdateOrganizationBrandingPoliciesPriorities200ApplicationJSON extends SpeakeasyBase {
    /**
     *       An ordered list of branding policy IDs that determines the priority order of how to apply the policies
     *
     * @remarks
     *
     */
    brandingPolicyIds?: string[];
}
export declare class UpdateOrganizationBrandingPoliciesPrioritiesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateOrganizationBrandingPoliciesPriorities200ApplicationJSONObject?: UpdateOrganizationBrandingPoliciesPriorities200ApplicationJSON;
}
