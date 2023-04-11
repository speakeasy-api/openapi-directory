import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GkehubProjectsLocationsMembershipsGenerateConnectManifestSecurity extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class GkehubProjectsLocationsMembershipsGenerateConnectManifestRequest extends SpeakeasyBase {
    /**
     * V1 error format.
     */
    dollarXgafv?: shared.XgafvEnum;
    /**
     * OAuth access token.
     */
    accessToken?: string;
    /**
     * Data format for response.
     */
    alt?: shared.AltEnum;
    /**
     * JSONP
     */
    callback?: string;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * Optional. The image pull secret content for the registry, if not public.
     */
    imagePullSecretContent?: string;
    /**
     * Optional. If true, generate the resources for upgrade only. Some resources generated only for installation (e.g. secrets) will be excluded.
     */
    isUpgrade?: boolean;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * Required. The Membership resource name the Agent will associate with, in the format `projects/* /locations/* /memberships/*`.
     */
    name: string;
    /**
     * Optional. Namespace for GKE Connect agent resources. Defaults to `gke-connect`. The Connect Agent is authorized automatically when run in the default namespace. Otherwise, explicit authorization must be granted with an additional IAM binding.
     */
    namespace?: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * Optional. URI of a proxy if connectivity from the agent to gkeconnect.googleapis.com requires the use of a proxy. Format must be in the form `http(s)://{proxy_address}`, depending on the HTTP/HTTPS protocol supported by the proxy. This will direct the connect agent's outbound traffic through a HTTP(S) proxy.
     */
    proxy?: string;
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Optional. The registry to fetch the connect agent image from. Defaults to gcr.io/gkeconnect.
     */
    registry?: string;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    uploadProtocol?: string;
    /**
     * Optional. The Connect agent version to use. Defaults to the most current version.
     */
    version?: string;
}
export declare class GkehubProjectsLocationsMembershipsGenerateConnectManifestResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    generateConnectManifestResponse?: shared.GenerateConnectManifestResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
