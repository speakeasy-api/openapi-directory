import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class BigtableadminProjectsLocationsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class BigtableadminProjectsLocationsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class BigtableadminProjectsLocationsGetSecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class BigtableadminProjectsLocationsGetSecurityOption4 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class BigtableadminProjectsLocationsGetSecurityOption5 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class BigtableadminProjectsLocationsGetSecurityOption6 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class BigtableadminProjectsLocationsGetSecurityOption7 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class BigtableadminProjectsLocationsGetSecurity extends SpeakeasyBase {
    option1?: BigtableadminProjectsLocationsGetSecurityOption1;
    option2?: BigtableadminProjectsLocationsGetSecurityOption2;
    option3?: BigtableadminProjectsLocationsGetSecurityOption3;
    option4?: BigtableadminProjectsLocationsGetSecurityOption4;
    option5?: BigtableadminProjectsLocationsGetSecurityOption5;
    option6?: BigtableadminProjectsLocationsGetSecurityOption6;
    option7?: BigtableadminProjectsLocationsGetSecurityOption7;
}
/**
 * The view to be applied to the returned table's fields. Defaults to `SCHEMA_VIEW` if unspecified.
 */
export declare enum BigtableadminProjectsLocationsGetViewEnum {
    ViewUnspecified = "VIEW_UNSPECIFIED",
    NameOnly = "NAME_ONLY",
    SchemaView = "SCHEMA_VIEW",
    ReplicationView = "REPLICATION_VIEW",
    EncryptionView = "ENCRYPTION_VIEW",
    StatsView = "STATS_VIEW",
    Full = "FULL"
}
export declare class BigtableadminProjectsLocationsGetRequest extends SpeakeasyBase {
    /**
     * V1 error format.
     */
    dollarXgafv?: shared.XgafvEnum;
    /**
     * OAuth access token.
     */
    accessToken?: string;
    /**
     * Data format for response.
     */
    alt?: shared.AltEnum;
    /**
     * JSONP
     */
    callback?: string;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * Resource name for the location.
     */
    name: string;
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
    /**
     * The view to be applied to the returned table's fields. Defaults to `SCHEMA_VIEW` if unspecified.
     */
    view?: BigtableadminProjectsLocationsGetViewEnum;
}
export declare class BigtableadminProjectsLocationsGetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    location?: shared.Location;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
