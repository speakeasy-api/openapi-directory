import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetOrganizationConfigTemplateSwitchProfilesRequest extends SpeakeasyBase {
    configTemplateId: string;
    organizationId: string;
}
/**
 * Successful operation
 */
export declare class GetOrganizationConfigTemplateSwitchProfiles200ApplicationJSON extends SpeakeasyBase {
    /**
     * Switch model
     */
    model?: string;
    /**
     * Switch profile name
     */
    name?: string;
    /**
     * Switch profile id
     */
    switchProfileId?: string;
}
export declare class GetOrganizationConfigTemplateSwitchProfilesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getOrganizationConfigTemplateSwitchProfiles200ApplicationJSONObject?: GetOrganizationConfigTemplateSwitchProfiles200ApplicationJSON;
}
