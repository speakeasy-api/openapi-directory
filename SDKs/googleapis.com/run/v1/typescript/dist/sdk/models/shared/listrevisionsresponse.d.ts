import { SpeakeasyBase } from "../../../internal/utils";
import { ListMeta } from "./listmeta";
import { Revision } from "./revision";
/**
 * ListRevisionsResponse is a list of Revision resources.
 */
export declare class ListRevisionsResponse extends SpeakeasyBase {
    /**
     * The API version for this call such as "serving.knative.dev/v1".
     */
    apiVersion?: string;
    /**
     * List of Revisions.
     */
    items?: Revision[];
    /**
     * The kind of this resource, in this case "RevisionList".
     */
    kind?: string;
    /**
     * Metadata for synthetic resources like List. In Cloud Run, all List Resources Responses will have a ListMeta instead of ObjectMeta.
     */
    metadata?: ListMeta;
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[];
}
