import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DirectoryResourcesBuildingsPatchSecurity extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
/**
 * Source from which Building.coordinates are derived.
 */
export declare enum DirectoryResourcesBuildingsPatchCoordinatesSourceEnum {
    ClientSpecified = "CLIENT_SPECIFIED",
    ResolvedFromAddress = "RESOLVED_FROM_ADDRESS",
    SourceUnspecified = "SOURCE_UNSPECIFIED"
}
export declare class DirectoryResourcesBuildingsPatchRequest extends SpeakeasyBase {
    /**
     * V1 error format.
     */
    dollarXgafv?: shared.XgafvEnum;
    building?: shared.Building;
    /**
     * OAuth access token.
     */
    accessToken?: string;
    /**
     * Data format for response.
     */
    alt?: shared.AltEnum;
    /**
     * The id of the building to update.
     */
    buildingId: string;
    /**
     * JSONP
     */
    callback?: string;
    /**
     * Source from which Building.coordinates are derived.
     */
    coordinatesSource?: DirectoryResourcesBuildingsPatchCoordinatesSourceEnum;
    /**
     * The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID.
     */
    customer: string;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    uploadProtocol?: string;
}
export declare class DirectoryResourcesBuildingsPatchResponse extends SpeakeasyBase {
    /**
     * Successful response
     */
    building?: shared.Building;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
