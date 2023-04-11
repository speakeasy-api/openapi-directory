import { SpeakeasyBase } from "../../../internal/utils";
import { HmacKeyMetadata } from "./hmackeymetadata";
/**
 * JSON template to produce a JSON-style HMAC Key resource for Create responses.
 */
export declare class HmacKey extends SpeakeasyBase {
    /**
     * The kind of item this is. For HMAC keys, this is always storage#hmacKey.
     */
    kind?: string;
    /**
     * JSON template to produce a JSON-style HMAC Key metadata resource.
     */
    metadata?: HmacKeyMetadata;
    /**
     * HMAC secret key material.
     */
    secret?: string;
}
