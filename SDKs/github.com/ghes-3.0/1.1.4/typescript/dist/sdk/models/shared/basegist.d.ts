import { SpeakeasyBase } from "../../../internal/utils";
import { NullableSimpleUser } from "./nullablesimpleuser";
import { SimpleUser } from "./simpleuser";
export declare class BaseGistFiles extends SpeakeasyBase {
    filename?: string;
    language?: string;
    rawUrl?: string;
    size?: number;
    type?: string;
}
/**
 * Base Gist
 */
export declare class BaseGist extends SpeakeasyBase {
    comments: number;
    commentsUrl: string;
    commitsUrl: string;
    createdAt: Date;
    description: string;
    files: Record<string, BaseGistFiles>;
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
    owner?: SimpleUser;
    public: boolean;
    truncated?: boolean;
    updatedAt: Date;
    url: string;
    /**
     * Simple User
     */
    user: NullableSimpleUser;
}
