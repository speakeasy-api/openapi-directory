import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudConnectorsV1AuthConfigOauth2JwtBearerJwtClaims } from "./googlecloudconnectorsv1authconfigoauth2jwtbearerjwtclaims";
import { GoogleCloudConnectorsV1Secret } from "./googlecloudconnectorsv1secret";
/**
 * Parameters to support JSON Web Token (JWT) Profile for Oauth 2.0 Authorization Grant based authentication. See https://tools.ietf.org/html/rfc7523 for more details.
 */
export declare class GoogleCloudConnectorsV1AuthConfigOauth2JwtBearer extends SpeakeasyBase {
    /**
     * Secret provides a reference to entries in Secret Manager.
     */
    clientKey?: GoogleCloudConnectorsV1Secret;
    /**
     * JWT claims used for the jwt-bearer authorization grant.
     */
    jwtClaims?: GoogleCloudConnectorsV1AuthConfigOauth2JwtBearerJwtClaims;
}
