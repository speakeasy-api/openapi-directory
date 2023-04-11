import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateOrganizationConfigTemplateRequestBody extends SpeakeasyBase {
    /**
     * The name of the configuration template
     */
    name?: string;
    /**
     * The timezone of the configuration template. For a list of allowed timezones, please see the 'TZ' column in the table in <a target='_blank' href='https://en.wikipedia.org/wiki/List_of_tz_database_time_zones'>this article.</a>
     */
    timeZone?: string;
}
export declare class UpdateOrganizationConfigTemplateRequest extends SpeakeasyBase {
    requestBody?: UpdateOrganizationConfigTemplateRequestBody;
    configTemplateId: string;
    organizationId: string;
}
export declare class UpdateOrganizationConfigTemplateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateOrganizationConfigTemplate200ApplicationJSONObject?: Record<string, any>;
}
