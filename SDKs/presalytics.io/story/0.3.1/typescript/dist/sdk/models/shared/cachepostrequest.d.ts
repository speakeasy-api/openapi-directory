import { SpeakeasyBase } from "../../../internal/utils";
/**
 * parameters to identify an update a collaborator across multiple stories
 */
export declare class CachePostRequest extends SpeakeasyBase {
    currentUserId?: string;
    nonce?: string;
    subdocument?: string;
}
