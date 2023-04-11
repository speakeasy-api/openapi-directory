import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents JSON web token(JWT), which is a compact, URL-safe means of representing claims to be transferred between two parties, enabling the claims to be digitally signed or integrity protected.
 */
export declare class GoogleCloudIntegrationsV1alphaJwt extends SpeakeasyBase {
    /**
     * The token calculated by the header, payload and signature.
     */
    jwt?: string;
    /**
     * Identifies which algorithm is used to generate the signature.
     */
    jwtHeader?: string;
    /**
     * Contains a set of claims. The JWT specification defines seven Registered Claim Names which are the standard fields commonly included in tokens. Custom claims are usually also included, depending on the purpose of the token.
     */
    jwtPayload?: string;
    /**
     * User's pre-shared secret to sign the token.
     */
    secret?: string;
}
