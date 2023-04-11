import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetOrganizationBrandingPoliciesPrioritiesRequest extends SpeakeasyBase {
    organizationId: string;
}
/**
 * Successful operation
 */
export declare class GetOrganizationBrandingPoliciesPriorities200ApplicationJSON extends SpeakeasyBase {
    /**
     *       An ordered list of branding policy IDs that determines the priority order of how to apply the policies
     *
     * @remarks
     *
     */
    brandingPolicyIds?: string[];
}
export declare class GetOrganizationBrandingPoliciesPrioritiesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getOrganizationBrandingPoliciesPriorities200ApplicationJSONObject?: GetOrganizationBrandingPoliciesPriorities200ApplicationJSON;
}
