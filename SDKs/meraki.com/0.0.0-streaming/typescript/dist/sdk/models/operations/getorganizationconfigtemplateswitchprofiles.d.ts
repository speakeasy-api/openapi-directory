import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetOrganizationConfigTemplateSwitchProfilesRequest extends SpeakeasyBase {
    configTemplateId: string;
    organizationId: string;
}
export declare class GetOrganizationConfigTemplateSwitchProfilesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getOrganizationConfigTemplateSwitchProfiles200ApplicationJSONObjects?: Record<string, any>[];
}
