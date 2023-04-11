import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDiscoveryengineV1alphaUserEvent } from "./googleclouddiscoveryenginev1alphauserevent";
/**
 * The inline source for the input config for ImportUserEvents method.
 */
export declare class GoogleCloudDiscoveryengineV1alphaImportUserEventsRequestInlineSource extends SpeakeasyBase {
    /**
     * Required. A list of user events to import. Recommended max of 10k items.
     */
    userEvents?: GoogleCloudDiscoveryengineV1alphaUserEvent[];
}
