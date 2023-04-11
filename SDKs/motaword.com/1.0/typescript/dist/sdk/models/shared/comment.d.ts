import { SpeakeasyBase } from "../../../internal/utils";
import { CommentLinks } from "./commentlinks";
/**
 * Comment model
 */
export declare class Comment extends SpeakeasyBase {
    /**
     * Comment text.
     */
    comment: string;
    /**
     * Unix epoch time
     */
    commentedAt?: number;
    id?: number;
    links?: CommentLinks;
}
