import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AdexchangebuyerProposalsPatchSecurity extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
/**
 * The proposed action to take on the proposal. This field is required and it must be set when updating a proposal.
 */
export declare enum AdexchangebuyerProposalsPatchUpdateActionEnum {
    Accept = "accept",
    Cancel = "cancel",
    Propose = "propose",
    ProposeAndAccept = "proposeAndAccept",
    UnknownAction = "unknownAction",
    UpdateNonTerms = "updateNonTerms"
}
export declare class AdexchangebuyerProposalsPatchRequest extends SpeakeasyBase {
    proposal?: shared.Proposal;
    /**
     * Data format for the response.
     */
    alt?: shared.AltEnum;
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
     * The proposal id to update.
     */
    proposalId: string;
    /**
     * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * The last known revision number to update. If the head revision in the marketplace database has since changed, an error will be thrown. The caller should then fetch the latest proposal at head revision and retry the update at that revision.
     */
    revisionNumber: string;
    /**
     * The proposed action to take on the proposal. This field is required and it must be set when updating a proposal.
     */
    updateAction: AdexchangebuyerProposalsPatchUpdateActionEnum;
    /**
     * Deprecated. Please use quotaUser instead.
     */
    userIp?: string;
}
export declare class AdexchangebuyerProposalsPatchResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    proposal?: shared.Proposal;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
