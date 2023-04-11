import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Using raw keys is prone to security risks due to accidentally leaking the key. Choose another type of key if possible.
 */
export declare class GooglePrivacyDlpV2UnwrappedCryptoKey extends SpeakeasyBase {
    /**
     * Required. A 128/192/256 bit key.
     */
    key?: string;
}
