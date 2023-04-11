import { SpeakeasyBase } from "../../../internal/utils";
import { Errors } from "./errors";
import { GroupContentDetails } from "./groupcontentdetails";
import { GroupSnippet } from "./groupsnippet";
/**
 * A group.
 */
export declare class Group extends SpeakeasyBase {
    /**
     * A group's content details.
     */
    contentDetails?: GroupContentDetails;
    /**
     * Request Error information. The presence of an error field signals that the operation has failed.
     */
    errors?: Errors;
    /**
     * The Etag of this resource.
     */
    etag?: string;
    /**
     * The ID that YouTube uses to uniquely identify the group.
     */
    id?: string;
    /**
     * Identifies the API resource's type. The value will be `youtube#group`.
     */
    kind?: string;
    /**
     * A group snippet.
     */
    snippet?: GroupSnippet;
}
