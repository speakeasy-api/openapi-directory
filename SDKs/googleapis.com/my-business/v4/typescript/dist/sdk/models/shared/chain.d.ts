import { SpeakeasyBase } from "../../../internal/utils";
import { ChainName } from "./chainname";
import { ChainUrl } from "./chainurl";
/**
 * A chain is a brand that your business's locations can be affiliated with.
 */
export declare class Chain extends SpeakeasyBase {
    /**
     * Names of the chain.
     */
    chainNames?: ChainName[];
    /**
     * Number of locations that are part of this chain.
     */
    locationCount?: number;
    /**
     * The chain's resource name, in the format `chains/{chain_place_id}`.
     */
    name?: string;
    /**
     * Websites of the chain.
     */
    websites?: ChainUrl[];
}
