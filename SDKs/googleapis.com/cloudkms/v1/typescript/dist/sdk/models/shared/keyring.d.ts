import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A KeyRing is a toplevel logical grouping of CryptoKeys.
 */
export declare class KeyRing extends SpeakeasyBase {
    /**
     * Output only. The time at which this KeyRing was created.
     */
    createTime?: string;
    /**
     * Output only. The resource name for the KeyRing in the format `projects/* /locations/* /keyRings/*`.
     */
    name?: string;
}
