import { SpeakeasyBase } from "../../../internal/utils";
import { History } from "./history";
/**
 * Represents a hashtag used within the content of a status.
 *
 * @see {@link https://docs.joinmastodon.org/entities/tag/}
 */
export declare class Tag extends SpeakeasyBase {
    /**
     * Usage statistics for given days.
     */
    history?: History[];
    /**
     * The value of the hashtag after the `#` sign.
     */
    name: string;
    /**
     * A link to the hashtag on the instance.
     */
    url: string;
}
