import { SpeakeasyBase } from "../../../internal/utils";
import { Model } from "./model";
/**
 * Response message for AutoMl.ListModels.
 */
export declare class ListModelsResponse extends SpeakeasyBase {
    /**
     * List of models in the requested page.
     */
    model?: Model[];
    /**
     * A token to retrieve next page of results. Pass to ListModelsRequest.page_token to obtain that page.
     */
    nextPageToken?: string;
}
