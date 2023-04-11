import { SpeakeasyBase } from "../../../internal/utils";
import { Verification } from "./verification";
export declare class GitTagObject extends SpeakeasyBase {
    sha: string;
    type: string;
    url: string;
}
export declare class GitTagTagger extends SpeakeasyBase {
    date: string;
    email: string;
    name: string;
}
/**
 * Metadata for a Git tag
 */
export declare class GitTag extends SpeakeasyBase {
    /**
     * Message describing the purpose of the tag
     */
    message: string;
    nodeId: string;
    object: GitTagObject;
    sha: string;
    /**
     * Name of the tag
     */
    tag: string;
    tagger: GitTagTagger;
    /**
     * URL for the tag
     */
    url: string;
    verification?: Verification;
}
