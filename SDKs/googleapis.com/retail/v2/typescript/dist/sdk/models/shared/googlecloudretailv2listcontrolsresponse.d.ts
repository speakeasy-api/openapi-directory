import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2Control } from "./googlecloudretailv2control";
/**
 * Response for ListControls method.
 */
export declare class GoogleCloudRetailV2ListControlsResponse extends SpeakeasyBase {
    /**
     * All the Controls for a given catalog.
     */
    controls?: GoogleCloudRetailV2Control[];
    /**
     * Pagination token, if not returned indicates the last page.
     */
    nextPageToken?: string;
}
