import { SpeakeasyBase } from "../../../internal/utils";
import { ContainerVersionHeader } from "./containerversionheader";
/**
 * List container versions response.
 */
export declare class ListContainerVersionsResponse extends SpeakeasyBase {
    /**
     * All container version headers of a GTM Container.
     */
    containerVersionHeader?: ContainerVersionHeader[];
    /**
     * Continuation token for fetching the next page of results.
     */
    nextPageToken?: string;
}
