import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The request message to search related account group memberships.
 */
export declare class GoogleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsRequest extends SpeakeasyBase {
    /**
     * Optional. The unique stable hashed user identifier we should search connections to. The identifier should correspond to a `hashed_account_id` provided in a previous `CreateAssessment` or `AnnotateAssessment` call.
     */
    hashedAccountId?: string;
    /**
     * Optional. The maximum number of groups to return. The service might return fewer than this value. If unspecified, at most 50 groups are returned. The maximum value is 1000; values above 1000 are coerced to 1000.
     */
    pageSize?: number;
    /**
     * Optional. A page token, received from a previous `SearchRelatedAccountGroupMemberships` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `SearchRelatedAccountGroupMemberships` must match the call that provided the page token.
     */
    pageToken?: string;
}
