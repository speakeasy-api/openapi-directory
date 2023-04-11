import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class BigqueryTablesGetSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class BigqueryTablesGetSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class BigqueryTablesGetSecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class BigqueryTablesGetSecurity extends SpeakeasyBase {
    option1?: BigqueryTablesGetSecurityOption1;
    option2?: BigqueryTablesGetSecurityOption2;
    option3?: BigqueryTablesGetSecurityOption3;
}
/**
 * Specifies the view that determines which table information is returned. By default, basic table information and storage statistics (STORAGE_STATS) are returned.
 */
export declare enum BigqueryTablesGetViewEnum {
    Basic = "BASIC",
    Full = "FULL",
    StorageStats = "STORAGE_STATS",
    TableMetadataViewUnspecified = "TABLE_METADATA_VIEW_UNSPECIFIED"
}
export declare class BigqueryTablesGetRequest extends SpeakeasyBase {
    /**
     * Data format for the response.
     */
    alt?: shared.AltEnum;
    /**
     * Dataset ID of the requested table
     */
    datasetId: string;
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
     * Project ID of the requested table
     */
    projectId: string;
    /**
     * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * List of fields to return (comma-separated). If unspecified, all fields are returned
     */
    selectedFields?: string;
    /**
     * Table ID of the requested table
     */
    tableId: string;
    /**
     * Deprecated. Please use quotaUser instead.
     */
    userIp?: string;
    /**
     * Specifies the view that determines which table information is returned. By default, basic table information and storage statistics (STORAGE_STATS) are returned.
     */
    view?: BigqueryTablesGetViewEnum;
}
export declare class BigqueryTablesGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful response
     */
    table?: shared.Table;
}
