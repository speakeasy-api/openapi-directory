import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request message for TagApiSpecRevision.
 */
export declare class TagApiSpecRevisionRequest extends SpeakeasyBase {
    /**
     * Required. The tag to apply. The tag should be at most 40 characters, and match `a-z{3,39}`.
     */
    tag?: string;
}
