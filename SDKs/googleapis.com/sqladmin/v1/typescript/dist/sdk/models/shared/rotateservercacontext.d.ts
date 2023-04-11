import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Instance rotate server CA context.
 */
export declare class RotateServerCaContext extends SpeakeasyBase {
    /**
     * This is always `sql#rotateServerCaContext`.
     */
    kind?: string;
    /**
     * The fingerprint of the next version to be rotated to. If left unspecified, will be rotated to the most recently added server CA version.
     */
    nextVersion?: string;
}
