import { SpeakeasyBase } from "../../../internal/utils";
/**
 * SoundCloud User object
**/
export declare class CommentUser extends SpeakeasyBase {
    avatarUrl?: string;
    followersCount?: number;
    followingsCount?: number;
    id?: number;
    kind?: string;
    lastModified?: string;
    permalink?: string;
    permalinkUrl?: string;
    repostsCount?: number;
    uri?: string;
    username?: string;
}
/**
 * User's Comment
**/
export declare class Comment extends SpeakeasyBase {
    body?: string;
    createdAt?: string;
    id?: number;
    kind?: string;
    timestamp?: string;
    trackId?: number;
    uri?: string;
    user?: CommentUser;
    userId?: number;
}
