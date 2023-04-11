import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class RenewOrganizationLicensesSeatsRequestBody extends SpeakeasyBase {
    /**
     * The ID of the SM license to renew. This license must already be assigned to an SM network
     */
    licenseIdToRenew: string;
    /**
     * The SM license to use to renew the seats on 'licenseIdToRenew'. This license must have at least as many seats available as there are seats on 'licenseIdToRenew'
     */
    unusedLicenseId: string;
}
export declare class RenewOrganizationLicensesSeatsRequest extends SpeakeasyBase {
    requestBody: RenewOrganizationLicensesSeatsRequestBody;
    organizationId: string;
}
export declare class RenewOrganizationLicensesSeatsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    renewOrganizationLicensesSeats200ApplicationJSONObject?: Record<string, any>;
}
