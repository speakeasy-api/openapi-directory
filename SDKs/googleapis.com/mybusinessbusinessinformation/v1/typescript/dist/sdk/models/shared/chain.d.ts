import { SpeakeasyBase } from "../../../internal/utils";
import { ChainName } from "./chainname";
import { ChainUri } from "./chainuri";
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
     * Required. The chain's resource name, in the format `chains/{chain_id}`.
     */
    name?: string;
    /**
     * Websites of the chain.
     */
    websites?: ChainUri[];
}
