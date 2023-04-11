import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDataplexV1Action } from "./googleclouddataplexv1action";
/**
 * List actions response.
 */
export declare class GoogleCloudDataplexV1ListActionsResponse extends SpeakeasyBase {
    /**
     * Actions under the given parent lake/zone/asset.
     */
    actions?: GoogleCloudDataplexV1Action[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string;
}
