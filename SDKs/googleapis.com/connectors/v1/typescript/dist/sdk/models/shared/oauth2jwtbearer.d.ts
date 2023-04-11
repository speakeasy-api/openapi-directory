import { SpeakeasyBase } from "../../../internal/utils";
import { JwtClaims } from "./jwtclaims";
import { Secret } from "./secret";
/**
 * Parameters to support JSON Web Token (JWT) Profile for Oauth 2.0 Authorization Grant based authentication. See https://tools.ietf.org/html/rfc7523 for more details.
 */
export declare class Oauth2JwtBearer extends SpeakeasyBase {
    /**
     * Secret provides a reference to entries in Secret Manager.
     */
    clientKey?: Secret;
    /**
     * JWT claims used for the jwt-bearer authorization grant.
     */
    jwtClaims?: JwtClaims;
}
