import { SpeakeasyBase } from "../../../internal/utils";
import { OrgMembership } from "./orgmembership";
/**
 * The response message for OrgMembershipsService.ListOrgMemberships.
 */
export declare class ListOrgMembershipsResponse extends SpeakeasyBase {
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is empty, there are no subsequent pages.
     */
    nextPageToken?: string;
    /**
     * The non-vacuous membership in an orgUnit.
     */
    orgMemberships?: OrgMembership[];
}
