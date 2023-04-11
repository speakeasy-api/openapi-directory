import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Indicates that the builder claims certain fields in this message to be complete.
 */
export declare class SlsaCompleteness extends SpeakeasyBase {
    /**
     * If true, the builder claims that recipe.arguments is complete, meaning that all external inputs are properly captured in the recipe.
     */
    arguments?: boolean;
    /**
     * If true, the builder claims that recipe.environment is claimed to be complete.
     */
    environment?: boolean;
    /**
     * If true, the builder claims that materials are complete, usually through some controls to prevent network access. Sometimes called "hermetic".
     */
    materials?: boolean;
}
