import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents an address suggestion for any address in the world
 */
export declare class AddressSuggestion extends SpeakeasyBase {
    /**
     * Global unique internally generated identifier for an address
     */
    id: string;
    /**
     * Address Suggestion to be displayed to the user
     */
    suggestion: string;
    urls: Record<string, any>;
}
