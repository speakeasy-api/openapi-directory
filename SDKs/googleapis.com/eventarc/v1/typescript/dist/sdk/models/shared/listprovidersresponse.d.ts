import { SpeakeasyBase } from "../../../internal/utils";
import { Provider } from "./provider";
/**
 * The response message for the `ListProviders` method.
 */
export declare class ListProvidersResponse extends SpeakeasyBase {
    /**
     * A page token that can be sent to `ListProviders` to request the next page. If this is empty, then there are no more pages.
     */
    nextPageToken?: string;
    /**
     * The requested providers, up to the number specified in `page_size`.
     */
    providers?: Provider[];
    /**
     * Unreachable resources, if any.
     */
    unreachable?: string[];
}
