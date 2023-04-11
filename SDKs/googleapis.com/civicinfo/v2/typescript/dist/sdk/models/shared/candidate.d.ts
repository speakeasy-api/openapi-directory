import { SpeakeasyBase } from "../../../internal/utils";
import { Channel } from "./channel";
/**
 * Information about a candidate running for elected office.
 */
export declare class Candidate extends SpeakeasyBase {
    /**
     * The URL for the candidate's campaign web site.
     */
    candidateUrl?: string;
    /**
     * A list of known (social) media channels for this candidate.
     */
    channels?: Channel[];
    /**
     * The email address for the candidate's campaign.
     */
    email?: string;
    /**
     * The candidate's name. If this is a joint ticket it will indicate the name of the candidate at the top of a ticket followed by a / and that name of candidate at the bottom of the ticket. e.g. "Mitt Romney / Paul Ryan"
     */
    name?: string;
    /**
     * The order the candidate appears on the ballot for this contest.
     */
    orderOnBallot?: string;
    /**
     * The full name of the party the candidate is a member of.
     */
    party?: string;
    /**
     * The voice phone number for the candidate's campaign office.
     */
    phone?: string;
    /**
     * A URL for a photo of the candidate.
     */
    photoUrl?: string;
}
