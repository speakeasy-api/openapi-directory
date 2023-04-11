import { SpeakeasyBase } from "../../../internal/utils";
import { AuthenticationPolicy } from "./authenticationpolicy";
import { AuthorizationConfig } from "./authorizationconfig";
import { Awsv4Signature } from "./awsv4signature";
import { ClientTlsSettings } from "./clienttlssettings";
/**
 * The authentication and authorization settings for a BackendService.
 */
export declare class SecuritySettings extends SpeakeasyBase {
    /**
     * [Deprecated] Use clientTlsPolicy instead.
     */
    authentication?: string;
    /**
     * [Deprecated] The authentication settings for the backend service. The authentication settings for the backend service.
     */
    authenticationPolicy?: AuthenticationPolicy;
    /**
     * [Deprecated] Authorization configuration provides service-level and method-level access control for a service. control for a service.
     */
    authorizationConfig?: AuthorizationConfig;
    /**
     * Contains the configurations necessary to generate a signature for access to private storage buckets that support Signature Version 4 for authentication. The service name for generating the authentication header will always default to 's3'.
     */
    awsV4Authentication?: Awsv4Signature;
    /**
     * Optional. A URL referring to a networksecurity.ClientTlsPolicy resource that describes how clients should authenticate with this service's backends. clientTlsPolicy only applies to a global BackendService with the loadBalancingScheme set to INTERNAL_SELF_MANAGED. If left blank, communications are not encrypted. Note: This field currently has no impact.
     */
    clientTlsPolicy?: string;
    /**
     * [Deprecated] The client side authentication settings for connection originating from the backend service. the backend service.
     */
    clientTlsSettings?: ClientTlsSettings;
    /**
     * Optional. A list of Subject Alternative Names (SANs) that the client verifies during a mutual TLS handshake with an server/endpoint for this BackendService. When the server presents its X.509 certificate to the client, the client inspects the certificate's subjectAltName field. If the field contains one of the specified values, the communication continues. Otherwise, it fails. This additional check enables the client to verify that the server is authorized to run the requested service. Note that the contents of the server certificate's subjectAltName field are configured by the Public Key Infrastructure which provisions server identities. Only applies to a global BackendService with loadBalancingScheme set to INTERNAL_SELF_MANAGED. Only applies when BackendService has an attached clientTlsPolicy with clientCertificate (mTLS mode). Note: This field currently has no impact.
     */
    subjectAltNames?: string[];
}
