import { SpeakeasyBase } from "../../../internal/utils";
import { SlsaCompleteness } from "./slsacompleteness";
/**
 * Other properties of the build.
 */
export declare class SlsaMetadata extends SpeakeasyBase {
    /**
     * The timestamp of when the build completed.
     */
    buildFinishedOn?: string;
    /**
     * Identifies the particular build invocation, which can be useful for finding associated logs or other ad-hoc analysis. The value SHOULD be globally unique, per in-toto Provenance spec.
     */
    buildInvocationId?: string;
    /**
     * The timestamp of when the build started.
     */
    buildStartedOn?: string;
    /**
     * Indicates that the builder claims certain fields in this message to be complete.
     */
    completeness?: SlsaCompleteness;
    /**
     * If true, the builder claims that running the recipe on materials will produce bit-for-bit identical output.
     */
    reproducible?: boolean;
}
