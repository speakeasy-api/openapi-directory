import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetOrganizationSamlRolesRequest extends SpeakeasyBase {
    organizationId: string;
}
export declare class GetOrganizationSamlRolesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getOrganizationSamlRoles200ApplicationJSONObjects?: Record<string, any>[];
}
