import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specification of a TLS certificate provider instance. Workloads may have one or more CertificateProvider instances (plugins) and one of them is enabled and configured by specifying this message. Workloads use the values from this message to locate and load the CertificateProvider instance configuration.
 */
export declare class CertificateProviderInstance extends SpeakeasyBase {
    /**
     * Required. Plugin instance name, used to locate and load CertificateProvider instance configuration. Set to "google_cloud_private_spiffe" to use Certificate Authority Service certificate provider instance.
     */
    pluginInstance?: string;
}
