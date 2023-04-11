import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Provides information about the country that is associated with a group.  May be null.
 */
export declare class GroupCountry extends SpeakeasyBase {
    /**
     * A 2 letter country code for the country (see https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2 ).
     *
     * @remarks
     *
     */
    abbreviation?: string;
    /**
     * The name of the country.
     */
    name?: string;
}
/**
 * Membership questionnaire data.  Will be null unless the membership status is pending-questions.
 */
export declare class GroupMembershipQuestionnaire extends SpeakeasyBase {
    /**
     * A message from the group moderators to be displayed above the questions (may be null).
     */
    message?: string;
    /**
     * The list of questions.
     */
    questions?: string[];
}
/**
 * Provides information about the current users' active or pending membership to this group (if any).  Will be null if there is no active or pending membership to this group.
 *
 * @remarks
 *
 */
export declare class GroupMembership extends SpeakeasyBase {
    /**
     * The UTC date and time when the membership was last updated.
     *
     * @remarks
     *
     */
    date?: Date;
    /**
     * Membership questionnaire data.  Will be null unless the membership status is pending-questions.
     */
    questionnaire?: GroupMembershipQuestionnaire;
    /**
     * One of: subscribed, pending, pending-questions
     *
     * @remarks
     *
     */
    status?: string;
}
/**
 * Provides information about an area within a country that a group is associated with (eg. a state in the US or a province in Canada).  May be null.
 */
export declare class GroupRegion extends SpeakeasyBase {
    /**
     * A 2 letter abbreviation for the region (is not guaranteed to be globally unique but is unique among all the regions in the country).
     */
    abbreviation?: string;
    /**
     * The name of the region.
     */
    name?: string;
}
/**
 * Groups are run by volunteer moderators and provide a way to group activity in a specific location. Because each group is usually run by different people, there can be variations in rules from group to group (eg. who is allowed to join, what is allowed to be posted, how often reposts are allowed).
 *
 * @remarks
 *
 */
export declare class Group extends SpeakeasyBase {
    /**
     * Provides information about the country that is associated with a group.  May be null.
     */
    country?: GroupCountry;
    groupId?: string;
    /**
     * When true, anyone requesting membership to this group will be required to answer a new membership questionnaire.
     */
    hasQuestions?: boolean;
    /**
     * A URL to the group homepage.
     */
    homepage?: string;
    /**
     * A unique identifier for the group that is used in URLs.
     */
    identifier?: string;
    latitude?: number;
    longitude?: number;
    /**
     * The number of members who belong to the group.
     */
    memberCount?: number;
    /**
     * Provides information about the current users' active or pending membership to this group (if any).  Will be null if there is no active or pending membership to this group.
     *
     * @remarks
     *
     */
    membership?: GroupMembership;
    /**
     * The name of the group (not guaranteed to be unique).
     */
    name?: string;
    /**
     * When true, the group posts are viewable by anyone.  When false, the group posts can only be viewed by members of the group.
     */
    openArchives?: boolean;
    /**
     * When true, the group allows anyone to join.  When false, the group moderators review and approve applicants.
     */
    openMembership?: boolean;
    /**
     * Provides information about an area within a country that a group is associated with (eg. a state in the US or a province in Canada).  May be null.
     */
    region?: GroupRegion;
    /**
     * The timezone that the group is in (eg. America/New_York).
     */
    timezone?: string;
}
