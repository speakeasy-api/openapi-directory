import { SpeakeasyBase } from "../../../internal/utils";
import { CommentLinks } from "./commentlinks";
export declare class Comment extends SpeakeasyBase {
    comment?: string;
    commentedAt?: number;
    id?: number;
    links?: CommentLinks;
}
