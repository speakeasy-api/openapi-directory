import { SpeakeasyBase } from "../../../internal/utils";
import { PushProvider } from "./pushprovider";
/**
 * Successful response
 */
export declare class ListPushProvidersResponse extends SpeakeasyBase {
    /**
     * Duration of the request in human-readable format
     */
    duration: string;
    pushProviders: PushProvider[];
}
