import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Configuration for an `NFSMount` to be attached to the VM.
 */
export declare class NFSMount extends SpeakeasyBase {
    /**
     * A target NFS mount. The target must be specified as `address:/mount".
     */
    target?: string;
}
