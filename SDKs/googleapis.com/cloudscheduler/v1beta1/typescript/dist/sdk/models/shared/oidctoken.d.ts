import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains information needed for generating an [OpenID Connect token](https://developers.google.com/identity/protocols/OpenIDConnect). This type of authorization can be used for many scenarios, including calling Cloud Run, or endpoints where you intend to validate the token yourself.
 */
export declare class OidcToken extends SpeakeasyBase {
    /**
     * Audience to be used when generating OIDC token. If not specified, the URI specified in target will be used.
     */
    audience?: string;
    /**
     * [Service account email](https://cloud.google.com/iam/docs/service-accounts) to be used for generating OIDC token. The service account must be within the same project as the job. The caller must have iam.serviceAccounts.actAs permission for the service account.
     */
    serviceAccountEmail?: string;
}
