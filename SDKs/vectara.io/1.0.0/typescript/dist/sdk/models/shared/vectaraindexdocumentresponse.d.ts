import { SpeakeasyBase } from "../../../internal/utils";
import { ComvectaraStatus } from "./comvectarastatus";
import { VectaraStorageQuota } from "./vectarastoragequota";
/**
 * A successful response.
 */
export declare class VectaraIndexDocumentResponse extends SpeakeasyBase {
    quotaConsumed?: VectaraStorageQuota;
    status?: ComvectaraStatus;
}
