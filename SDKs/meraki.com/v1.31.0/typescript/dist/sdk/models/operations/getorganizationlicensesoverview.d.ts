import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetOrganizationLicensesOverviewRequest extends SpeakeasyBase {
    organizationId: string;
}
export declare class GetOrganizationLicensesOverviewResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getOrganizationLicensesOverview200ApplicationJSONObject?: Record<string, any>;
}
