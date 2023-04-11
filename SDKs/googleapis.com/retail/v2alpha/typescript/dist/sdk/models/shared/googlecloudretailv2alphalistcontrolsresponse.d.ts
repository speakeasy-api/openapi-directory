import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2alphaControl } from "./googlecloudretailv2alphacontrol";
/**
 * Response for ListControls method.
 */
export declare class GoogleCloudRetailV2alphaListControlsResponse extends SpeakeasyBase {
    /**
     * All the Controls for a given catalog.
     */
    controls?: GoogleCloudRetailV2alphaControl[];
    /**
     * Pagination token, if not returned indicates the last page.
     */
    nextPageToken?: string;
}
