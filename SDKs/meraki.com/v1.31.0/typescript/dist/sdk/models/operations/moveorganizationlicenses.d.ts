import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class MoveOrganizationLicensesRequestBody extends SpeakeasyBase {
    /**
     * The ID of the organization to move the licenses to
     */
    destOrganizationId: string;
    /**
     * A list of IDs of licenses to move to the new organization
     */
    licenseIds: string[];
}
export declare class MoveOrganizationLicensesRequest extends SpeakeasyBase {
    requestBody: MoveOrganizationLicensesRequestBody;
    organizationId: string;
}
/**
 * Successful operation
 */
export declare class MoveOrganizationLicenses200ApplicationJSON extends SpeakeasyBase {
    /**
     * The ID of the organization to move the licenses to
     */
    destOrganizationId?: string;
    /**
     * A list of IDs of licenses to move to the new organization
     */
    licenseIds?: string[];
}
export declare class MoveOrganizationLicensesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    moveOrganizationLicenses200ApplicationJSONObject?: MoveOrganizationLicenses200ApplicationJSON;
}
