import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRunV2Service } from "./googlecloudrunv2service";
/**
 * Response message containing a list of Services.
 */
export declare class GoogleCloudRunV2ListServicesResponse extends SpeakeasyBase {
    /**
     * A token indicating there are more items than page_size. Use it in the next ListServices request to continue.
     */
    nextPageToken?: string;
    /**
     * The resulting list of Services.
     */
    services?: GoogleCloudRunV2Service[];
}
