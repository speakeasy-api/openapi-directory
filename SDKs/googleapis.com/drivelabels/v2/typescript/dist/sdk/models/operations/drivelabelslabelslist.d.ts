import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Specifies the level of access the user must have on the returned Labels. The minimum role a user must have on a label. Defaults to `READER`.
 */
export declare enum DrivelabelsLabelsListMinimumRoleEnum {
    LabelRoleUnspecified = "LABEL_ROLE_UNSPECIFIED",
    Reader = "READER",
    Applier = "APPLIER",
    Organizer = "ORGANIZER",
    Editor = "EDITOR"
}
/**
 * When specified, only certain fields belonging to the indicated view are returned.
 */
export declare enum DrivelabelsLabelsListViewEnum {
    LabelViewBasic = "LABEL_VIEW_BASIC",
    LabelViewFull = "LABEL_VIEW_FULL"
}
export declare class DrivelabelsLabelsListRequest extends SpeakeasyBase {
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
     * The customer to scope this list request to. For example: "customers/abcd1234". If unset, will return all labels within the current customer.
     */
    customer?: string;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * The BCP-47 language code to use for evaluating localized field labels. When not specified, values in the default configured language are used.
     */
    languageCode?: string;
    /**
     * Specifies the level of access the user must have on the returned Labels. The minimum role a user must have on a label. Defaults to `READER`.
     */
    minimumRole?: DrivelabelsLabelsListMinimumRoleEnum;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * Maximum number of labels to return per page. Default: 50. Max: 200.
     */
    pageSize?: number;
    /**
     * The token of the page to return.
     */
    pageToken?: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * Whether to include only published labels in the results. * When `true`, only the current published label revisions are returned. Disabled labels are included. Returned label resource names reference the published revision (`labels/{id}/{revision_id}`). * When `false`, the current label revisions are returned, which might not be published. Returned label resource names don't reference a specific revision (`labels/{id}`).
     */
    publishedOnly?: boolean;
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
     * Set to `true` in order to use the user's admin credentials. This will return all Labels within the customer.
     */
    useAdminAccess?: boolean;
    /**
     * When specified, only certain fields belonging to the indicated view are returned.
     */
    view?: DrivelabelsLabelsListViewEnum;
}
export declare class DrivelabelsLabelsListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    googleAppsDriveLabelsV2ListLabelsResponse?: shared.GoogleAppsDriveLabelsV2ListLabelsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
