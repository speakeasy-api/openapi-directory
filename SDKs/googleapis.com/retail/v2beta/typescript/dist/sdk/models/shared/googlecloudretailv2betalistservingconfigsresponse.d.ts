import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2betaServingConfig } from "./googlecloudretailv2betaservingconfig";
/**
 * Response for ListServingConfigs method.
 */
export declare class GoogleCloudRetailV2betaListServingConfigsResponse extends SpeakeasyBase {
    /**
     * Pagination token, if not returned indicates the last page.
     */
    nextPageToken?: string;
    /**
     * All the ServingConfigs for a given catalog.
     */
    servingConfigs?: GoogleCloudRetailV2betaServingConfig[];
}
