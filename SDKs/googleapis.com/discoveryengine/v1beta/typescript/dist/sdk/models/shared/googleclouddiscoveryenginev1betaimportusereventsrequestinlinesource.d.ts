import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDiscoveryengineV1betaUserEvent } from "./googleclouddiscoveryenginev1betauserevent";
/**
 * The inline source for the input config for ImportUserEvents method.
 */
export declare class GoogleCloudDiscoveryengineV1betaImportUserEventsRequestInlineSource extends SpeakeasyBase {
    /**
     * Required. A list of user events to import. Recommended max of 10k items.
     */
    userEvents?: GoogleCloudDiscoveryengineV1betaUserEvent[];
}
