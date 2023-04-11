import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudMlV1Model } from "./googlecloudmlv1model";
/**
 * Response message for the ListModels method.
 */
export declare class GoogleCloudMlV1ListModelsResponse extends SpeakeasyBase {
    /**
     * The list of models.
     */
    models?: GoogleCloudMlV1Model[];
    /**
     * Optional. Pass this token as the `page_token` field of the request for a subsequent call.
     */
    nextPageToken?: string;
}
