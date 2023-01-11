import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDiscoveryengineV1alphaUserEvent } from "./googleclouddiscoveryenginev1alphauserevent";
/**
 * Request message for Recommend method.
**/
export declare class GoogleCloudDiscoveryengineV1alphaRecommendRequest extends SpeakeasyBase {
    filter?: string;
    pageSize?: number;
    params?: Record<string, any>;
    userEvent?: GoogleCloudDiscoveryengineV1alphaUserEvent;
    userLabels?: Record<string, string>;
    validateOnly?: boolean;
}
