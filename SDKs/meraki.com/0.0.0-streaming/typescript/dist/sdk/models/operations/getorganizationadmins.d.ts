import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetOrganizationAdminsRequest extends SpeakeasyBase {
    organizationId: string;
}
export declare class GetOrganizationAdminsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getOrganizationAdmins200ApplicationJSONObjects?: Record<string, any>[];
}
