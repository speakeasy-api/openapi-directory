import { SpeakeasyBase } from "../../../internal/utils";
/**
 * JWT claims used for the jwt-bearer authorization grant.
 */
export declare class JwtClaims extends SpeakeasyBase {
    /**
     * Value for the "aud" claim.
     */
    audience?: string;
    /**
     * Value for the "iss" claim.
     */
    issuer?: string;
    /**
     * Value for the "sub" claim.
     */
    subject?: string;
}
