import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetOrganizationConfigTemplateRequest extends SpeakeasyBase {
    configTemplateId: string;
    organizationId: string;
}
export declare class GetOrganizationConfigTemplateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getOrganizationConfigTemplate200ApplicationJSONObject?: Record<string, any>;
}
