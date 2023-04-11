import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2Model } from "./googlecloudretailv2model";
/**
 * Response to a ListModelRequest.
 */
export declare class GoogleCloudRetailV2ListModelsResponse extends SpeakeasyBase {
    /**
     * List of Models.
     */
    models?: GoogleCloudRetailV2Model[];
    /**
     * Pagination token, if not returned indicates the last page.
     */
    nextPageToken?: string;
}
