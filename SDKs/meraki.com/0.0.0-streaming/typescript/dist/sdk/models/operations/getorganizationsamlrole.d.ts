import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetOrganizationSamlRoleRequest extends SpeakeasyBase {
    organizationId: string;
    samlRoleId: string;
}
export declare class GetOrganizationSamlRoleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getOrganizationSamlRole200ApplicationJSONObject?: Record<string, any>;
}
