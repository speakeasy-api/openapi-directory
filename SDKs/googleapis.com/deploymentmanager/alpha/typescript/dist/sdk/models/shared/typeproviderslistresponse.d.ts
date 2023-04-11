import { SpeakeasyBase } from "../../../internal/utils";
import { TypeProvider } from "./typeprovider";
/**
 * A response that returns all Type Providers supported by Deployment Manager
 */
export declare class TypeProvidersListResponse extends SpeakeasyBase {
    /**
     * A token used to continue a truncated list request.
     */
    nextPageToken?: string;
    /**
     * Output only. A list of resource type providers supported by Deployment Manager.
     */
    typeProviders?: TypeProvider[];
}
