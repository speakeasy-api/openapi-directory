import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetOrganizationLicensingCotermLicensesRequest extends SpeakeasyBase {
    /**
     * A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
     */
    endingBefore?: string;
    /**
     * Filter for licenses that are expired
     */
    expired?: boolean;
    /**
     * Filter for licenses that are invalidated
     */
    invalidated?: boolean;
    organizationId: string;
    /**
     * The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000.
     */
    perPage?: number;
    /**
     * A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
     */
    startingAfter?: string;
}
export declare class GetOrganizationLicensingCotermLicenses200ApplicationJSONCounts extends SpeakeasyBase {
    /**
     * The number of counts the license contains of this model
     */
    count?: number;
    /**
     * The license model type
     */
    model?: string;
}
export declare class GetOrganizationLicensingCotermLicenses200ApplicationJSONEditions extends SpeakeasyBase {
    /**
     * The name of the license edition
     */
    edition?: string;
    /**
     * The product type of the license edition
     */
    productType?: string;
}
/**
 * The operation mode of the license when it was claimed
 */
export declare enum GetOrganizationLicensingCotermLicenses200ApplicationJSONModeEnum {
    AddDevices = "addDevices",
    Renew = "renew"
}
export declare class GetOrganizationLicensingCotermLicenses200ApplicationJSON extends SpeakeasyBase {
    /**
     * When the license was claimed into the organization
     */
    claimedAt?: Date;
    /**
     * The counts of the license by model type
     */
    counts?: GetOrganizationLicensingCotermLicenses200ApplicationJSONCounts[];
    /**
     * The duration (term length) of the license, measured in days
     */
    duration?: number;
    /**
     * The editions of the license for each relevant product type
     */
    editions?: GetOrganizationLicensingCotermLicenses200ApplicationJSONEditions[];
    /**
     * Flag to indicate if the license is expired
     */
    expired?: boolean;
    /**
     * Flag to indicated that the license is invalidated
     */
    invalidated?: boolean;
    /**
     * When the license was invalidated. Will be null for active licenses
     */
    invalidatedAt?: Date;
    /**
     * The key of the license
     */
    key?: string;
    /**
     * The operation mode of the license when it was claimed
     */
    mode?: GetOrganizationLicensingCotermLicenses200ApplicationJSONModeEnum;
    /**
     * The ID of the organization that the license is claimed in
     */
    organizationId?: string;
    /**
     * When the license's term began (approximately the date when the license was created)
     */
    startedAt?: Date;
}
export declare class GetOrganizationLicensingCotermLicensesResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getOrganizationLicensingCotermLicenses200ApplicationJSONObjects?: GetOrganizationLicensingCotermLicenses200ApplicationJSON[];
}
