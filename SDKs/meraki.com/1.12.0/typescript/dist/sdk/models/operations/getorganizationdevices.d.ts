import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetOrganizationDevicesPathParams extends SpeakeasyBase {
    organizationId: string;
}
export declare class GetOrganizationDevicesQueryParams extends SpeakeasyBase {
    configurationUpdatedAfter?: string;
    endingBefore?: string;
    perPage?: number;
    startingAfter?: string;
}
export declare class GetOrganizationDevicesRequest extends SpeakeasyBase {
    pathParams: GetOrganizationDevicesPathParams;
    queryParams: GetOrganizationDevicesQueryParams;
}
export declare class GetOrganizationDevicesResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    getOrganizationDevices200ApplicationJSONObject?: Record<string, any>;
}
