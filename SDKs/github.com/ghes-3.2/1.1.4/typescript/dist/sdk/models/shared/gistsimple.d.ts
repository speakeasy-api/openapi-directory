import { SpeakeasyBase } from "../../../internal/utils";
import { GistHistory } from "./gisthistory";
import { NullableSimpleUser } from "./nullablesimpleuser";
import { PublicUser } from "./publicuser";
import { SimpleUser } from "./simpleuser";
export declare class GistSimpleFiles extends SpeakeasyBase {
    content?: string;
    filename?: string;
    language?: string;
    rawUrl?: string;
    size?: number;
    truncated?: boolean;
    type?: string;
}
export declare class GistSimpleGistFiles extends SpeakeasyBase {
    filename?: string;
    language?: string;
    rawUrl?: string;
    size?: number;
    type?: string;
}
/**
 * Gist
 */
export declare class GistSimpleGist extends SpeakeasyBase {
    comments: number;
    commentsUrl: string;
    commitsUrl: string;
    createdAt: Date;
    description: string;
    files: Record<string, GistSimpleGistFiles>;
    forks?: any[];
    forksUrl: string;
    gitPullUrl: string;
    gitPushUrl: string;
    history?: any[];
    htmlUrl: string;
    id: string;
    nodeId: string;
    /**
     * Simple User
     */
    owner?: NullableSimpleUser;
    public: boolean;
    truncated?: boolean;
    updatedAt: Date;
    url: string;
    /**
     * Simple User
     */
    user: NullableSimpleUser;
}
export declare class GistSimpleForks extends SpeakeasyBase {
    createdAt?: Date;
    id?: string;
    updatedAt?: Date;
    url?: string;
    /**
     * Public User
     */
    user?: PublicUser;
}
/**
 * Gist Simple
 */
export declare class GistSimple extends SpeakeasyBase {
    comments?: number;
    commentsUrl?: string;
    commitsUrl?: string;
    createdAt?: string;
    description?: string;
    files?: Record<string, GistSimpleFiles>;
    /**
     * Gist
     */
    forkOf?: GistSimpleGist;
    forks?: GistSimpleForks[];
    forksUrl?: string;
    gitPullUrl?: string;
    gitPushUrl?: string;
    history?: GistHistory[];
    htmlUrl?: string;
    id?: string;
    nodeId?: string;
    /**
     * Simple User
     */
    owner?: SimpleUser;
    public?: boolean;
    truncated?: boolean;
    updatedAt?: string;
    url?: string;
    user?: string;
}
