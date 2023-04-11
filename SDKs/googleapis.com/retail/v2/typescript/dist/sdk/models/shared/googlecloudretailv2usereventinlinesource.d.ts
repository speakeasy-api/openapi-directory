import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2UserEventInput } from "./googlecloudretailv2userevent";
/**
 * The inline source for the input config for ImportUserEvents method.
 */
export declare class GoogleCloudRetailV2UserEventInlineSourceInput extends SpeakeasyBase {
    /**
     * Required. A list of user events to import. Recommended max of 10k items.
     */
    userEvents?: GoogleCloudRetailV2UserEventInput[];
}
