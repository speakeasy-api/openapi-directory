import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetOrganizationNetworksRequest extends SpeakeasyBase {
    /**
     * An optional parameter that is the ID of a config template. Will return all networks bound to that template.
     */
    configTemplateId?: string;
    organizationId: string;
}
export declare class GetOrganizationNetworksResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getOrganizationNetworks200ApplicationJSONObjects?: Record<string, any>[];
}
