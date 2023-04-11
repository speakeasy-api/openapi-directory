import { SpeakeasyBase } from "../../../internal/utils";
import { UniversalTwoFactor } from "./universaltwofactor";
import { WebAuthn } from "./webauthn";
/**
 * The credential information for a Google registered security key.
 */
export declare class SecurityKey extends SpeakeasyBase {
    /**
     * Hardware-backed private key text in SSH format.
     */
    privateKey?: string;
    /**
     * Public key text in SSH format, defined by [RFC4253]("https://www.ietf.org/rfc/rfc4253.txt") section 6.6.
     */
    publicKey?: string;
    /**
     * Security key information specific to the U2F protocol.
     */
    universalTwoFactor?: UniversalTwoFactor;
    /**
     * Security key information specific to the Web Authentication protocol.
     */
    webAuthn?: WebAuthn;
}
