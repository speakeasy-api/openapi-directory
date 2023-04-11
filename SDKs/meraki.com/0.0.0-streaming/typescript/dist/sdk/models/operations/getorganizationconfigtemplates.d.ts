import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetOrganizationConfigTemplatesRequest extends SpeakeasyBase {
    organizationId: string;
}
export declare class GetOrganizationConfigTemplatesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getOrganizationConfigTemplates200ApplicationJSONObjects?: Record<string, any>[];
}
