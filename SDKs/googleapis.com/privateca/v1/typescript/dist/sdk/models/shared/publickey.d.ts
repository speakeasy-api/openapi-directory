import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Required. The format of the public key.
 */
export declare enum PublicKeyFormatEnum {
    KeyFormatUnspecified = "KEY_FORMAT_UNSPECIFIED",
    Pem = "PEM"
}
/**
 * A PublicKey describes a public key.
 */
export declare class PublicKey extends SpeakeasyBase {
    /**
     * Required. The format of the public key.
     */
    format?: PublicKeyFormatEnum;
    /**
     * Required. A public key. The padding and encoding must match with the `KeyFormat` value specified for the `format` field.
     */
    key?: string;
}
