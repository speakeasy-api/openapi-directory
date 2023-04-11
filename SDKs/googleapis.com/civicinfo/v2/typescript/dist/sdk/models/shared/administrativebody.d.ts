import { SpeakeasyBase } from "../../../internal/utils";
import { ElectionOfficial } from "./electionofficial";
import { SimpleAddressType } from "./simpleaddresstype";
/**
 * Information about an election administrative body (e.g. County Board of Elections).
 */
export declare class AdministrativeBody extends SpeakeasyBase {
    /**
     * A URL provided by this administrative body for information on absentee voting.
     */
    absenteeVotingInfoUrl?: string;
    /**
     * A URL provided by this administrative body to give contest information to the voter.
     */
    ballotInfoUrl?: string;
    /**
     * A simple representation of an address.
     */
    correspondenceAddress?: SimpleAddressType;
    /**
     * A URL provided by this administrative body for looking up general election information.
     */
    electionInfoUrl?: string;
    /**
     * A last minute or emergency notification text provided by this administrative body.
     */
    electionNoticeText?: string;
    /**
     * A URL provided by this administrative body for additional information related to the last minute or emergency notification.
     */
    electionNoticeUrl?: string;
    /**
     * The election officials for this election administrative body.
     */
    electionOfficials?: ElectionOfficial[];
    /**
     * A URL provided by this administrative body for confirming that the voter is registered to vote.
     */
    electionRegistrationConfirmationUrl?: string;
    /**
     * A URL provided by this administrative body for looking up how to register to vote.
     */
    electionRegistrationUrl?: string;
    /**
     * A URL provided by this administrative body describing election rules to the voter.
     */
    electionRulesUrl?: string;
    /**
     * A description of the hours of operation for this administrative body.
     */
    hoursOfOperation?: string;
    /**
     * The name of this election administrative body.
     */
    name?: string;
    /**
     * A simple representation of an address.
     */
    physicalAddress?: SimpleAddressType;
    /**
     * A description of the services this administrative body may provide.
     */
    voterServices?: string[];
    /**
     * A URL provided by this administrative body for looking up where to vote.
     */
    votingLocationFinderUrl?: string;
}
