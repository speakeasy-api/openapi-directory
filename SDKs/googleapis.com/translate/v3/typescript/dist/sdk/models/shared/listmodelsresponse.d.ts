import { SpeakeasyBase } from "../../../internal/utils";
import { Model } from "./model";
/**
 * Response message for ListModels.
 */
export declare class ListModelsResponse extends SpeakeasyBase {
    /**
     * The models read.
     */
    models?: Model[];
    /**
     * A token to retrieve next page of results. Pass this token to the page_token field in the ListModelsRequest to obtain the corresponding page.
     */
    nextPageToken?: string;
}
