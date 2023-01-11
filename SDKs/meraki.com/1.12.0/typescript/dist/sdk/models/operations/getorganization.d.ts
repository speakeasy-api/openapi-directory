import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetOrganizationPathParams extends SpeakeasyBase {
    organizationId: string;
}
export declare class GetOrganizationRequest extends SpeakeasyBase {
    pathParams: GetOrganizationPathParams;
}
export declare class GetOrganizationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getOrganization200ApplicationJSONObject?: Record<string, any>;
}
