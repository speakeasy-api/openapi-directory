import { SpeakeasyBase } from "../../../internal/utils";
import { GrafeasV1SlsaProvenanceZeroTwoSlsaBuilder } from "./grafeasv1slsaprovenancezerotwoslsabuilder";
import { GrafeasV1SlsaProvenanceZeroTwoSlsaInvocation } from "./grafeasv1slsaprovenancezerotwoslsainvocation";
import { GrafeasV1SlsaProvenanceZeroTwoSlsaMaterial } from "./grafeasv1slsaprovenancezerotwoslsamaterial";
import { GrafeasV1SlsaProvenanceZeroTwoSlsaMetadata } from "./grafeasv1slsaprovenancezerotwoslsametadata";
/**
 * See full explanation of fields at slsa.dev/provenance/v0.2.
 */
export declare class SlsaProvenanceZeroTwo extends SpeakeasyBase {
    buildConfig?: Record<string, any>;
    buildType?: string;
    /**
     * Identifies the entity that executed the recipe, which is trusted to have correctly performed the operation and populated this provenance.
     */
    builder?: GrafeasV1SlsaProvenanceZeroTwoSlsaBuilder;
    /**
     * Identifies the event that kicked off the build.
     */
    invocation?: GrafeasV1SlsaProvenanceZeroTwoSlsaInvocation;
    materials?: GrafeasV1SlsaProvenanceZeroTwoSlsaMaterial[];
    /**
     * Other properties of the build.
     */
    metadata?: GrafeasV1SlsaProvenanceZeroTwoSlsaMetadata;
}
