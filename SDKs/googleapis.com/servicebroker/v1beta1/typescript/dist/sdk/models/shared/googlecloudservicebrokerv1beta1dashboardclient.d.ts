import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Message containing information required to activate Dashboard SSO feature.
 */
export declare class GoogleCloudServicebrokerV1beta1DashboardClient extends SpeakeasyBase {
    /**
     * The id of the Oauth client that the dashboard will use.
     */
    id?: string;
    /**
     * A URI for the service dashboard.
     *
     * @remarks
     * Validated by the OAuth token server when the dashboard requests a token.
     */
    redirectUri?: string;
    /**
     * A secret for the dashboard client.
     */
    secret?: string;
}
