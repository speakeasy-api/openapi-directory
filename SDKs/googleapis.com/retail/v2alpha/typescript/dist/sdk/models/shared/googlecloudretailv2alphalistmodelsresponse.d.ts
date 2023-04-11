import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2alphaModel } from "./googlecloudretailv2alphamodel";
/**
 * Response to a ListModelRequest.
 */
export declare class GoogleCloudRetailV2alphaListModelsResponse extends SpeakeasyBase {
    /**
     * List of Models.
     */
    models?: GoogleCloudRetailV2alphaModel[];
    /**
     * Pagination token, if not returned indicates the last page.
     */
    nextPageToken?: string;
}
