import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The claim mode of the moved license
 */
export declare enum MoveOrganizationLicensingCotermLicensesRequestBodyDestinationModeEnum {
    AddDevices = "addDevices",
    Renew = "renew"
}
/**
 * Destination data for the license move
 */
export declare class MoveOrganizationLicensingCotermLicensesRequestBodyDestination extends SpeakeasyBase {
    /**
     * The claim mode of the moved license
     */
    mode?: MoveOrganizationLicensingCotermLicensesRequestBodyDestinationModeEnum;
    /**
     * The organization to move the license to
     */
    organizationId?: string;
}
export declare class MoveOrganizationLicensingCotermLicensesRequestBodyLicensesCounts extends SpeakeasyBase {
    /**
     * The number of counts to move
     */
    count: number;
    /**
     * The license model type to move counts of
     */
    model: string;
}
export declare class MoveOrganizationLicensingCotermLicensesRequestBodyLicenses extends SpeakeasyBase {
    /**
     * The counts to move from the license by model type
     */
    counts: MoveOrganizationLicensingCotermLicensesRequestBodyLicensesCounts[];
    /**
     * The license key to move counts from
     */
    key: string;
}
export declare class MoveOrganizationLicensingCotermLicensesRequestBody extends SpeakeasyBase {
    /**
     * Destination data for the license move
     */
    destination: MoveOrganizationLicensingCotermLicensesRequestBodyDestination;
    /**
     * The list of licenses to move
     */
    licenses: MoveOrganizationLicensingCotermLicensesRequestBodyLicenses[];
}
export declare class MoveOrganizationLicensingCotermLicensesRequest extends SpeakeasyBase {
    requestBody: MoveOrganizationLicensingCotermLicensesRequestBody;
    organizationId: string;
}
export declare class MoveOrganizationLicensingCotermLicenses200ApplicationJSONMovedLicensesCounts extends SpeakeasyBase {
    /**
     * The number of counts the license contains of this model
     */
    count?: number;
    /**
     * The license model type
     */
    model?: string;
}
export declare class MoveOrganizationLicensingCotermLicenses200ApplicationJSONMovedLicensesEditions extends SpeakeasyBase {
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
export declare enum MoveOrganizationLicensingCotermLicenses200ApplicationJSONMovedLicensesModeEnum {
    AddDevices = "addDevices",
    Renew = "renew"
}
export declare class MoveOrganizationLicensingCotermLicenses200ApplicationJSONMovedLicenses extends SpeakeasyBase {
    /**
     * When the license was claimed into the organization
     */
    claimedAt?: Date;
    /**
     * The counts of the license by model type
     */
    counts?: MoveOrganizationLicensingCotermLicenses200ApplicationJSONMovedLicensesCounts[];
    /**
     * The duration (term length) of the license, measured in days
     */
    duration?: number;
    /**
     * The editions of the license for each relevant product type
     */
    editions?: MoveOrganizationLicensingCotermLicenses200ApplicationJSONMovedLicensesEditions[];
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
    mode?: MoveOrganizationLicensingCotermLicenses200ApplicationJSONMovedLicensesModeEnum;
    /**
     * The ID of the organization that the license is claimed in
     */
    organizationId?: string;
    /**
     * When the license's term began (approximately the date when the license was created)
     */
    startedAt?: Date;
}
export declare class MoveOrganizationLicensingCotermLicenses200ApplicationJSONRemainderLicensesCounts extends SpeakeasyBase {
    /**
     * The number of counts the license contains of this model
     */
    count?: number;
    /**
     * The license model type
     */
    model?: string;
}
export declare class MoveOrganizationLicensingCotermLicenses200ApplicationJSONRemainderLicensesEditions extends SpeakeasyBase {
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
export declare enum MoveOrganizationLicensingCotermLicenses200ApplicationJSONRemainderLicensesModeEnum {
    AddDevices = "addDevices",
    Renew = "renew"
}
export declare class MoveOrganizationLicensingCotermLicenses200ApplicationJSONRemainderLicenses extends SpeakeasyBase {
    /**
     * When the license was claimed into the organization
     */
    claimedAt?: Date;
    /**
     * The counts of the license by model type
     */
    counts?: MoveOrganizationLicensingCotermLicenses200ApplicationJSONRemainderLicensesCounts[];
    /**
     * The duration (term length) of the license, measured in days
     */
    duration?: number;
    /**
     * The editions of the license for each relevant product type
     */
    editions?: MoveOrganizationLicensingCotermLicenses200ApplicationJSONRemainderLicensesEditions[];
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
    mode?: MoveOrganizationLicensingCotermLicenses200ApplicationJSONRemainderLicensesModeEnum;
    /**
     * The ID of the organization that the license is claimed in
     */
    organizationId?: string;
    /**
     * When the license's term began (approximately the date when the license was created)
     */
    startedAt?: Date;
}
/**
 * Successful operation
 */
export declare class MoveOrganizationLicensingCotermLicenses200ApplicationJSON extends SpeakeasyBase {
    /**
     * Newly moved licenses created in the destination organization of the license move operation
     */
    movedLicenses?: MoveOrganizationLicensingCotermLicenses200ApplicationJSONMovedLicenses[];
    /**
     * Remainder licenses created in the source organization as a result of moving a subset of the counts of a license
     */
    remainderLicenses?: MoveOrganizationLicensingCotermLicenses200ApplicationJSONRemainderLicenses[];
}
export declare class MoveOrganizationLicensingCotermLicensesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    moveOrganizationLicensingCotermLicenses200ApplicationJSONObject?: MoveOrganizationLicensingCotermLicenses200ApplicationJSON;
}
