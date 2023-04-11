import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRecaptchaenterpriseV1RelatedAccountGroup } from "./googlecloudrecaptchaenterprisev1relatedaccountgroup";
/**
 * The response to a `ListRelatedAccountGroups` call.
 */
export declare class GoogleCloudRecaptchaenterpriseV1ListRelatedAccountGroupsResponse extends SpeakeasyBase {
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string;
    /**
     * The groups of related accounts listed by the query.
     */
    relatedAccountGroups?: GoogleCloudRecaptchaenterpriseV1RelatedAccountGroup[];
}
