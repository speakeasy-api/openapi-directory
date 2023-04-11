import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2betaControl } from "./googlecloudretailv2betacontrol";
/**
 * Response for ListControls method.
 */
export declare class GoogleCloudRetailV2betaListControlsResponse extends SpeakeasyBase {
    /**
     * All the Controls for a given catalog.
     */
    controls?: GoogleCloudRetailV2betaControl[];
    /**
     * Pagination token, if not returned indicates the last page.
     */
    nextPageToken?: string;
}
