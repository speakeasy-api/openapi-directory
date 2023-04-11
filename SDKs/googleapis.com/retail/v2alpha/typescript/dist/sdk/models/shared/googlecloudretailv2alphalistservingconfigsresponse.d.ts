import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2alphaServingConfig } from "./googlecloudretailv2alphaservingconfig";
/**
 * Response for ListServingConfigs method.
 */
export declare class GoogleCloudRetailV2alphaListServingConfigsResponse extends SpeakeasyBase {
    /**
     * Pagination token, if not returned indicates the last page.
     */
    nextPageToken?: string;
    /**
     * All the ServingConfigs for a given catalog.
     */
    servingConfigs?: GoogleCloudRetailV2alphaServingConfig[];
}
