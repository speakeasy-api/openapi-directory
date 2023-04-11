import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class MoveOrganizationLicensesSeatsRequestBody extends SpeakeasyBase {
    /**
     * The ID of the organization to move the SM seats to
     */
    destOrganizationId: string;
    /**
     * The ID of the SM license to move the seats from
     */
    licenseId: string;
    /**
     * The number of seats to move to the new organization. Must be less than or equal to the total number of seats of the license
     */
    seatCount: number;
}
export declare class MoveOrganizationLicensesSeatsRequest extends SpeakeasyBase {
    requestBody: MoveOrganizationLicensesSeatsRequestBody;
    organizationId: string;
}
export declare class MoveOrganizationLicensesSeatsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    moveOrganizationLicensesSeats200ApplicationJSONObject?: Record<string, any>;
}
