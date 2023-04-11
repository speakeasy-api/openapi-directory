import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRecaptchaenterpriseV1Key } from "./googlecloudrecaptchaenterprisev1key";
/**
 * Response to request to list keys in a project.
 */
export declare class GoogleCloudRecaptchaenterpriseV1ListKeysResponse extends SpeakeasyBase {
    /**
     * Key details.
     */
    keys?: GoogleCloudRecaptchaenterpriseV1Key[];
    /**
     * Token to retrieve the next page of results. It is set to empty if no keys remain in results.
     */
    nextPageToken?: string;
}
