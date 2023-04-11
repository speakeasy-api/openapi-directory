import { SpeakeasyBase } from "../../../internal/utils";
import { MembershipsDuration } from "./membershipsduration";
import { MembershipsDurationAtLevel } from "./membershipsdurationatlevel";
export declare class MembershipsDetails extends SpeakeasyBase {
    /**
     * Ids of all levels that the user has access to. This includes the currently active level and all other levels that are included because of a higher purchase.
     */
    accessibleLevels?: string[];
    /**
     * Id of the highest level that the user has access to at the moment.
     */
    highestAccessibleLevel?: string;
    /**
     * Display name for the highest level that the user has access to at the moment.
     */
    highestAccessibleLevelDisplayName?: string;
    membershipsDuration?: MembershipsDuration;
    /**
     * Data about memberships duration on particular pricing levels.
     */
    membershipsDurationAtLevels?: MembershipsDurationAtLevel[];
}
