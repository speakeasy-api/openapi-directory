import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetOrganizationDevicesStatusesPathParams extends SpeakeasyBase {
    organizationId: string;
}
export declare class GetOrganizationDevicesStatusesQueryParams extends SpeakeasyBase {
    components?: Record<string, any>;
    endingBefore?: string;
    perPage?: number;
    startingAfter?: string;
}
export declare class GetOrganizationDevicesStatusesRequest extends SpeakeasyBase {
    pathParams: GetOrganizationDevicesStatusesPathParams;
    queryParams: GetOrganizationDevicesStatusesQueryParams;
}
export declare class GetOrganizationDevicesStatusesResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    getOrganizationDevicesStatuses200ApplicationJSONObject?: Record<string, any>;
}
