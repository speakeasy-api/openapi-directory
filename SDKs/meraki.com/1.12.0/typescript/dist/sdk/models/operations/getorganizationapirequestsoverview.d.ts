import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetOrganizationApiRequestsOverviewPathParams extends SpeakeasyBase {
    organizationId: string;
}
export declare class GetOrganizationApiRequestsOverviewQueryParams extends SpeakeasyBase {
    t0?: string;
    t1?: string;
    timespan?: number;
}
export declare class GetOrganizationApiRequestsOverviewRequest extends SpeakeasyBase {
    pathParams: GetOrganizationApiRequestsOverviewPathParams;
    queryParams: GetOrganizationApiRequestsOverviewQueryParams;
}
export declare class GetOrganizationApiRequestsOverviewResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getOrganizationApiRequestsOverview200ApplicationJSONObject?: Record<string, any>;
}
