import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PeopleContactGroupsBatchGetSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class PeopleContactGroupsBatchGetSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class PeopleContactGroupsBatchGetSecurity extends SpeakeasyBase {
    option1?: PeopleContactGroupsBatchGetSecurityOption1;
    option2?: PeopleContactGroupsBatchGetSecurityOption2;
}
export declare class PeopleContactGroupsBatchGetRequest extends SpeakeasyBase {
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
     * Optional. A field mask to restrict which fields on the group are returned. Defaults to `metadata`, `groupType`, `memberCount`, and `name` if not set or set to empty. Valid fields are: * clientData * groupType * memberCount * metadata * name
     */
    groupFields?: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * Optional. Specifies the maximum number of members to return for each group. Defaults to 0 if not set, which will return zero members.
     */
    maxMembers?: number;
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
     * Required. The resource names of the contact groups to get. There is a maximum of 200 resource names.
     */
    resourceNames?: string[];
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    uploadProtocol?: string;
}
export declare class PeopleContactGroupsBatchGetResponse extends SpeakeasyBase {
    /**
     * Successful response
     */
    batchGetContactGroupsResponse?: shared.BatchGetContactGroupsResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
