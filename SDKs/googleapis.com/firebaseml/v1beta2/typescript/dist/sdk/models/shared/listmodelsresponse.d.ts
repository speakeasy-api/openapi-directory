import { SpeakeasyBase } from "../../../internal/utils";
import { Model } from "./model";
/**
 * The response for list models
 */
export declare class ListModelsResponse extends SpeakeasyBase {
    /**
     * The list of models
     */
    models?: Model[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string;
}
