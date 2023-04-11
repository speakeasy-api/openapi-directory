import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetOrganizationOpenapiSpecRequest extends SpeakeasyBase {
    organizationId: string;
}
export declare class GetOrganizationOpenapiSpecResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getOrganizationOpenapiSpec200ApplicationJSONObject?: Record<string, any>;
}
