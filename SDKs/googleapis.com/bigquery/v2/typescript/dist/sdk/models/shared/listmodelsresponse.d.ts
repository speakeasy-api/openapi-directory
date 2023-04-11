import { SpeakeasyBase } from "../../../internal/utils";
import { Model } from "./model";
/**
 * Successful response
 */
export declare class ListModelsResponse extends SpeakeasyBase {
    /**
     * Models in the requested dataset. Only the following fields are populated: model_reference, model_type, creation_time, last_modified_time and labels.
     */
    models?: Model[];
    /**
     * A token to request the next page of results.
     */
    nextPageToken?: string;
}
