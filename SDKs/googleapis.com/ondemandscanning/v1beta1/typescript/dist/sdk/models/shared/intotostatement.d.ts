import { SpeakeasyBase } from "../../../internal/utils";
import { InTotoProvenance } from "./intotoprovenance";
import { SlsaProvenance } from "./slsaprovenance";
import { SlsaProvenanceZeroTwo } from "./slsaprovenancezerotwo";
import { Subject } from "./subject";
/**
 * Spec defined at https://github.com/in-toto/attestation/tree/main/spec#statement The serialized InTotoStatement will be stored as Envelope.payload. Envelope.payloadType is always "application/vnd.in-toto+json".
 */
export declare class InTotoStatement extends SpeakeasyBase {
    /**
     * Always `https://in-toto.io/Statement/v0.1`.
     */
    type?: string;
    /**
     * `https://slsa.dev/provenance/v0.1` for SlsaProvenance.
     */
    predicateType?: string;
    provenance?: InTotoProvenance;
    slsaProvenance?: SlsaProvenance;
    /**
     * See full explanation of fields at slsa.dev/provenance/v0.2.
     */
    slsaProvenanceZeroTwo?: SlsaProvenanceZeroTwo;
    subject?: Subject[];
}
