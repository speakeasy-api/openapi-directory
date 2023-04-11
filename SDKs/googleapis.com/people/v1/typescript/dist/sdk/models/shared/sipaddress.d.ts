import { SpeakeasyBase } from "../../../internal/utils";
import { FieldMetadata, FieldMetadataInput } from "./fieldmetadata";
/**
 * A person's SIP address. Session Initial Protocol addresses are used for VoIP communications to make voice or video calls over the internet.
 */
export declare class SipAddress extends SpeakeasyBase {
    /**
     * Output only. The type of the SIP address translated and formatted in the viewer's account locale or the `Accept-Language` HTTP header locale.
     */
    formattedType?: string;
    /**
     * Metadata about a field.
     */
    metadata?: FieldMetadata;
    /**
     * The type of the SIP address. The type can be custom or or one of these predefined values: * `home` * `work` * `mobile` * `other`
     */
    type?: string;
    /**
     * The SIP address in the [RFC 3261 19.1](https://tools.ietf.org/html/rfc3261#section-19.1) SIP URI format.
     */
    value?: string;
}
/**
 * A person's SIP address. Session Initial Protocol addresses are used for VoIP communications to make voice or video calls over the internet.
 */
export declare class SipAddressInput extends SpeakeasyBase {
    /**
     * Metadata about a field.
     */
    metadata?: FieldMetadataInput;
    /**
     * The type of the SIP address. The type can be custom or or one of these predefined values: * `home` * `work` * `mobile` * `other`
     */
    type?: string;
    /**
     * The SIP address in the [RFC 3261 19.1](https://tools.ietf.org/html/rfc3261#section-19.1) SIP URI format.
     */
    value?: string;
}
