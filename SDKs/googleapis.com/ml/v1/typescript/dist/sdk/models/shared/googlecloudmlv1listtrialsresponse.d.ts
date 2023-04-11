import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudMlV1Trial } from "./googlecloudmlv1trial";
/**
 * The response message for the ListTrials method.
 */
export declare class GoogleCloudMlV1ListTrialsResponse extends SpeakeasyBase {
    /**
     * The trials associated with the study.
     */
    trials?: GoogleCloudMlV1Trial[];
}
