import { SpeakeasyBase } from "../../../internal/utils";
import { Provider } from "./provider";
/**
 * Response message for Connectors.ListProviders.
 */
export declare class ListProvidersResponse extends SpeakeasyBase {
    /**
     * Next page token.
     */
    nextPageToken?: string;
    /**
     * A list of providers.
     */
    providers?: Provider[];
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[];
}
