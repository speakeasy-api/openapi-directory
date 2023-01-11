import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetOrganizationCellularGatewayUplinkStatusesPathParams extends SpeakeasyBase {
    organizationId: string;
}
export declare class GetOrganizationCellularGatewayUplinkStatusesQueryParams extends SpeakeasyBase {
    endingBefore?: string;
    iccids?: string[];
    networkIds?: string[];
    perPage?: number;
    serials?: string[];
    startingAfter?: string;
}
export declare class GetOrganizationCellularGatewayUplinkStatusesRequest extends SpeakeasyBase {
    pathParams: GetOrganizationCellularGatewayUplinkStatusesPathParams;
    queryParams: GetOrganizationCellularGatewayUplinkStatusesQueryParams;
}
export declare class GetOrganizationCellularGatewayUplinkStatusesResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    getOrganizationCellularGatewayUplinkStatuses200ApplicationJSONObject?: Record<string, any>;
}
