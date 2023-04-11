import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2betaModel } from "./googlecloudretailv2betamodel";
/**
 * Response to a ListModelRequest.
 */
export declare class GoogleCloudRetailV2betaListModelsResponse extends SpeakeasyBase {
    /**
     * List of Models.
     */
    models?: GoogleCloudRetailV2betaModel[];
    /**
     * Pagination token, if not returned indicates the last page.
     */
    nextPageToken?: string;
}
