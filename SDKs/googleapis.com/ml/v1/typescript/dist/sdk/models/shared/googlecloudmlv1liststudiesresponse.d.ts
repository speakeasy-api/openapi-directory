import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudMlV1Study } from "./googlecloudmlv1study";
/**
 * Successful response
 */
export declare class GoogleCloudMlV1ListStudiesResponse extends SpeakeasyBase {
    /**
     * The studies associated with the project.
     */
    studies?: GoogleCloudMlV1Study[];
}
