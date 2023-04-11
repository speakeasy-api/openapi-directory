import { SpeakeasyBase } from "../../../internal/utils";
import { Candidate } from "./candidate";
import { ElectoralDistrict } from "./electoraldistrict";
import { Source } from "./source";
export declare enum ContestLevelEnum {
    International = "international",
    Country = "country",
    AdministrativeArea1 = "administrativeArea1",
    Regional = "regional",
    AdministrativeArea2 = "administrativeArea2",
    Locality = "locality",
    SubLocality1 = "subLocality1",
    SubLocality2 = "subLocality2",
    Special = "special"
}
export declare enum ContestRolesEnum {
    HeadOfState = "headOfState",
    HeadOfGovernment = "headOfGovernment",
    DeputyHeadOfGovernment = "deputyHeadOfGovernment",
    GovernmentOfficer = "governmentOfficer",
    ExecutiveCouncil = "executiveCouncil",
    LegislatorUpperBody = "legislatorUpperBody",
    LegislatorLowerBody = "legislatorLowerBody",
    HighestCourtJudge = "highestCourtJudge",
    Judge = "judge",
    SchoolBoard = "schoolBoard",
    SpecialPurposeOfficer = "specialPurposeOfficer",
    OtherRole = "otherRole"
}
/**
 * Information about a contest that appears on a voter's ballot.
 */
export declare class Contest extends SpeakeasyBase {
    /**
     * A number specifying the position of this contest on the voter's ballot.
     */
    ballotPlacement?: string;
    /**
     * The official title on the ballot for this contest, only where available.
     */
    ballotTitle?: string;
    /**
     * The candidate choices for this contest.
     */
    candidates?: Candidate[];
    /**
     * Describes the geographic scope of a contest.
     */
    district?: ElectoralDistrict;
    /**
     * A description of any additional eligibility requirements for voting in this contest.
     */
    electorateSpecifications?: string;
    /**
     * The levels of government of the office for this contest. There may be more than one in cases where a jurisdiction effectively acts at two different levels of government; for example, the mayor of the District of Columbia acts at "locality" level, but also effectively at both "administrative-area-2" and "administrative-area-1".
     */
    level?: ContestLevelEnum[];
    /**
     * The number of candidates that will be elected to office in this contest.
     */
    numberElected?: string;
    /**
     * The number of candidates that a voter may vote for in this contest.
     */
    numberVotingFor?: string;
    /**
     * The name of the office for this contest.
     */
    office?: string;
    /**
     * If this is a partisan election, the name of the party/parties it is for.
     */
    primaryParties?: string[];
    /**
     * The set of ballot responses for the referendum. A ballot response represents a line on the ballot. Common examples might include "yes" or "no" for referenda. This field is only populated for contests of type 'Referendum'.
     */
    referendumBallotResponses?: string[];
    /**
     * Specifies a short summary of the referendum that is typically on the ballot below the title but above the text. This field is only populated for contests of type 'Referendum'.
     */
    referendumBrief?: string;
    /**
     * A statement in opposition to the referendum. It does not necessarily appear on the ballot. This field is only populated for contests of type 'Referendum'.
     */
    referendumConStatement?: string;
    /**
     * Specifies what effect abstaining (not voting) on the proposition will have (i.e. whether abstaining is considered a vote against it). This field is only populated for contests of type 'Referendum'.
     */
    referendumEffectOfAbstain?: string;
    /**
     * The threshold of votes that the referendum needs in order to pass, e.g. "two-thirds". This field is only populated for contests of type 'Referendum'.
     */
    referendumPassageThreshold?: string;
    /**
     * A statement in favor of the referendum. It does not necessarily appear on the ballot. This field is only populated for contests of type 'Referendum'.
     */
    referendumProStatement?: string;
    /**
     * A brief description of the referendum. This field is only populated for contests of type 'Referendum'.
     */
    referendumSubtitle?: string;
    /**
     * The full text of the referendum. This field is only populated for contests of type 'Referendum'.
     */
    referendumText?: string;
    /**
     * The title of the referendum (e.g. 'Proposition 42'). This field is only populated for contests of type 'Referendum'.
     */
    referendumTitle?: string;
    /**
     * A link to the referendum. This field is only populated for contests of type 'Referendum'.
     */
    referendumUrl?: string;
    /**
     * The roles which this office fulfills.
     */
    roles?: ContestRolesEnum[];
    /**
     * A list of sources for this contest. If multiple sources are listed, the data has been aggregated from those sources.
     */
    sources?: Source[];
    /**
     * "Yes" or "No" depending on whether this a contest being held outside the normal election cycle.
     */
    special?: string;
    /**
     * The type of contest. Usually this will be 'General', 'Primary', or 'Run-off' for contests with candidates. For referenda this will be 'Referendum'. For Retention contests this will typically be 'Retention'.
     */
    type?: string;
}
