import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains information required to contact CA service.
 */
export declare class CertificateAuthorityServiceConfig extends SpeakeasyBase {
    /**
     * Required. A CA pool resource used to issue a certificate. The CA pool string has a relative resource path following the form "projects/{project}/locations/{location}/caPools/{ca_pool}".
     */
    caPool?: string;
}
