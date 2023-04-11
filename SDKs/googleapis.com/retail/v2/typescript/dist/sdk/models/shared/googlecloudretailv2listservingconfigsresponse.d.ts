import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2ServingConfig } from "./googlecloudretailv2servingconfig";
/**
 * Response for ListServingConfigs method.
 */
export declare class GoogleCloudRetailV2ListServingConfigsResponse extends SpeakeasyBase {
    /**
     * Pagination token, if not returned indicates the last page.
     */
    nextPageToken?: string;
    /**
     * All the ServingConfigs for a given catalog.
     */
    servingConfigs?: GoogleCloudRetailV2ServingConfig[];
}
