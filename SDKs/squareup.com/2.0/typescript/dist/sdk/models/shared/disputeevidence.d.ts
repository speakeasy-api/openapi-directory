import { SpeakeasyBase } from "../../../internal/utils";
import { DisputeEvidenceFile } from "./disputeevidencefile";
export declare class DisputeEvidence extends SpeakeasyBase {
    /**
     * The ID of the dispute the evidence is associated with.
     */
    disputeId?: string;
    /**
     * A file to be uploaded as dispute evidence.
     */
    evidenceFile?: DisputeEvidenceFile;
    /**
     * The Square-generated ID of the evidence.
     */
    evidenceId?: string;
    /**
     * Raw text
     */
    evidenceText?: string;
    /**
     * The type of the evidence.
     */
    evidenceType?: string;
    /**
     * The Square-generated ID of the evidence.
     */
    id?: string;
    /**
     * The time when the next action is due, in RFC 3339 format.
     */
    uploadedAt?: string;
}
