import { SpeakeasyBase } from "../../../internal/utils";
import { BuildProvenance } from "./buildprovenance";
import { InTotoProvenance } from "./intotoprovenance";
import { InTotoStatement } from "./intotostatement";
/**
 * Details of a build occurrence.
 */
export declare class BuildOccurrence extends SpeakeasyBase {
    intotoProvenance?: InTotoProvenance;
    /**
     * Spec defined at https://github.com/in-toto/attestation/tree/main/spec#statement The serialized InTotoStatement will be stored as Envelope.payload. Envelope.payloadType is always "application/vnd.in-toto+json".
     */
    intotoStatement?: InTotoStatement;
    /**
     * Provenance of a build. Contains all information needed to verify the full details about the build from source to completion.
     */
    provenance?: BuildProvenance;
    /**
     * Serialized JSON representation of the provenance, used in generating the build signature in the corresponding build note. After verifying the signature, `provenance_bytes` can be unmarshalled and compared to the provenance to confirm that it is unchanged. A base64-encoded string representation of the provenance bytes is used for the signature in order to interoperate with openssl which expects this format for signature verification. The serialized form is captured both to avoid ambiguity in how the provenance is marshalled to json as well to prevent incompatibilities with future changes.
     */
    provenanceBytes?: string;
}
