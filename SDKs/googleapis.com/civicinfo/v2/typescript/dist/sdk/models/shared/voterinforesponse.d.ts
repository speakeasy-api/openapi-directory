import { SpeakeasyBase } from "../../../internal/utils";
import { AdministrationRegion } from "./administrationregion";
import { Contest } from "./contest";
import { Election } from "./election";
import { PollingLocation } from "./pollinglocation";
import { Precinct } from "./precinct";
import { SimpleAddressType } from "./simpleaddresstype";
/**
 * The result of a voter info lookup query.
 */
export declare class VoterInfoResponse extends SpeakeasyBase {
    /**
     * Contests that will appear on the voter's ballot.
     */
    contests?: Contest[];
    /**
     * Locations where a voter is eligible to drop off a completed ballot. The voter must have received and completed a ballot prior to arriving at the location. The location may not have ballots available on the premises. These locations could be open on or before election day as indicated in the pollingHours field.
     */
    dropOffLocations?: PollingLocation[];
    /**
     * Locations where the voter is eligible to vote early, prior to election day.
     */
    earlyVoteSites?: PollingLocation[];
    /**
     * Information about the election that was queried.
     */
    election?: Election;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "civicinfo#voterInfoResponse".
     */
    kind?: string;
    /**
     * Specifies whether voters in the precinct vote only by mailing their ballots (with the possible option of dropping off their ballots as well).
     */
    mailOnly?: boolean;
    /**
     * A simple representation of an address.
     */
    normalizedInput?: SimpleAddressType;
    /**
     * When there are multiple elections for a voter address, the otherElections field is populated in the API response and there are two possibilities: 1. If the earliest election is not the intended election, specify the election ID of the desired election in a second API request using the electionId field. 2. If these elections occur on the same day, the API doesn?t return any polling location, contest, or election official information to ensure that an additional query is made. For user-facing applications, we recommend displaying these elections to the user to disambiguate. A second API request using the electionId field should be made for the election that is relevant to the user.
     */
    otherElections?: Election[];
    /**
     * Locations where the voter is eligible to vote on election day.
     */
    pollingLocations?: PollingLocation[];
    precinctId?: string;
    /**
     * The precincts that match this voter's address. Will only be returned for project IDs which have been whitelisted as "partner projects".
     */
    precincts?: Precinct[];
    /**
     * Local Election Information for the state that the voter votes in. For the US, there will only be one element in this array.
     */
    state?: AdministrationRegion[];
}
