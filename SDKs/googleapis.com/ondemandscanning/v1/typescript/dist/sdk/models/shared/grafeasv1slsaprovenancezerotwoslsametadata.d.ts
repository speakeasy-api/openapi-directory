import { SpeakeasyBase } from "../../../internal/utils";
import { GrafeasV1SlsaProvenanceZeroTwoSlsaCompleteness } from "./grafeasv1slsaprovenancezerotwoslsacompleteness";
/**
 * Other properties of the build.
 */
export declare class GrafeasV1SlsaProvenanceZeroTwoSlsaMetadata extends SpeakeasyBase {
    buildFinishedOn?: string;
    buildInvocationId?: string;
    buildStartedOn?: string;
    /**
     * Indicates that the builder claims certain fields in this message to be complete.
     */
    completeness?: GrafeasV1SlsaProvenanceZeroTwoSlsaCompleteness;
    reproducible?: boolean;
}
