import { SpeakeasyBase } from "../../../internal/utils";
import { PushProvider } from "./pushprovider";
/**
 * Successful response
 */
export declare class UpsertPushProviderResponse extends SpeakeasyBase {
    /**
     * Duration of the request in human-readable format
     */
    duration: string;
    pushProvider: PushProvider;
}
