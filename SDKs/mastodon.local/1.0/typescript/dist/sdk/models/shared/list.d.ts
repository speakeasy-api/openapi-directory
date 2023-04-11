import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The user-defined title of the list.
 */
export declare enum ListRepliesPolicyEnum {
    Followed = "followed",
    List = "list",
    None = "none"
}
/**
 * Represents a list of some users that the authenticated user follows.
 *
 * @see {@link https://docs.joinmastodon.org/entities/list/}
 */
export declare class List extends SpeakeasyBase {
    /**
     * The internal database ID of the list. Cast from an integer, but not guaranteed to be a number.
     */
    id: string;
    /**
     * The user-defined title of the list.
     */
    repliesPolicy: ListRepliesPolicyEnum;
    /**
     * The user-defined title of the list.
     */
    title: string;
}
