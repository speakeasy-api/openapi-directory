import { SpeakeasyBase } from "../../../internal/utils";
/**
 * JWT claims used for the jwt-bearer authorization grant.
 */
export declare class GoogleCloudConnectorsV1AuthConfigOauth2JwtBearerJwtClaims extends SpeakeasyBase {
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
