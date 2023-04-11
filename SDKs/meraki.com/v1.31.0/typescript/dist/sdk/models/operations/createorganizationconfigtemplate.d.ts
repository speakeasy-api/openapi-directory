import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CreateOrganizationConfigTemplateRequestBody extends SpeakeasyBase {
    /**
     * The ID of the network or config template to copy configuration from
     */
    copyFromNetworkId?: string;
    /**
     * The name of the configuration template
     */
    name: string;
    /**
     * The timezone of the configuration template. For a list of allowed timezones, please see the 'TZ' column in the table in <a target='_blank' href='https://en.wikipedia.org/wiki/List_of_tz_database_time_zones'>this article</a>. Not applicable if copying from existing network or template
     */
    timeZone?: string;
}
export declare class CreateOrganizationConfigTemplateRequest extends SpeakeasyBase {
    requestBody: CreateOrganizationConfigTemplateRequestBody;
    organizationId: string;
}
export declare class CreateOrganizationConfigTemplateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    createOrganizationConfigTemplate201ApplicationJSONObject?: Record<string, any>;
}
