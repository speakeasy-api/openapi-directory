import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Defines the parameters for a `CreateDisputeEvidenceText` request.
 */
export declare class CreateDisputeEvidenceTextRequest extends SpeakeasyBase {
    /**
     * The evidence string.
     */
    evidenceText: string;
    /**
     * The type of evidence you are uploading.
     */
    evidenceType?: string;
    /**
     * The Unique ID. For more information, see [Idempotency](https://developer.squareup.com/docs/working-with-apis/idempotency).
     */
    idempotencyKey: string;
}
