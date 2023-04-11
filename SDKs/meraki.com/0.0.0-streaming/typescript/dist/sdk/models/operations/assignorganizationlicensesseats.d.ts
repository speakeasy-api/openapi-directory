import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AssignOrganizationLicensesSeatsRequestBody extends SpeakeasyBase {
    /**
     * The ID of the SM license to assign seats from
     */
    licenseId: string;
    /**
     * The ID of the SM network to assign the seats to
     */
    networkId: string;
    /**
     * The number of seats to assign to the SM network. Must be less than or equal to the total number of seats of the license
     */
    seatCount: number;
}
export declare class AssignOrganizationLicensesSeatsRequest extends SpeakeasyBase {
    requestBody: AssignOrganizationLicensesSeatsRequestBody;
    organizationId: string;
}
export declare class AssignOrganizationLicensesSeatsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    assignOrganizationLicensesSeats200ApplicationJSONObject?: Record<string, any>;
}
