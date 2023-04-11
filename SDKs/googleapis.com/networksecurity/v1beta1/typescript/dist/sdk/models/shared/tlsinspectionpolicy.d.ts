import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The TlsInspectionPolicy resource contains references to CA pools in Certificate Authority Service and associated metadata.
 */
export declare class TlsInspectionPolicy extends SpeakeasyBase {
    /**
     * Required. A CA pool resource used to issue interception certificates. The CA pool string has a relative resource path following the form "projects/{project}/locations/{location}/caPools/{ca_pool}".
     */
    caPool?: string;
    /**
     * Output only. The timestamp when the resource was created.
     */
    createTime?: string;
    /**
     * Optional. Free-text description of the resource.
     */
    description?: string;
    /**
     * Required. Name of the resource. Name is of the form projects/{project}/locations/{location}/tlsInspectionPolicies/{tls_inspection_policy} tls_inspection_policy should match the pattern:(^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$).
     */
    name?: string;
    /**
     * Output only. The timestamp when the resource was updated.
     */
    updateTime?: string;
}
/**
 * The TlsInspectionPolicy resource contains references to CA pools in Certificate Authority Service and associated metadata.
 */
export declare class TlsInspectionPolicyInput extends SpeakeasyBase {
    /**
     * Required. A CA pool resource used to issue interception certificates. The CA pool string has a relative resource path following the form "projects/{project}/locations/{location}/caPools/{ca_pool}".
     */
    caPool?: string;
    /**
     * Optional. Free-text description of the resource.
     */
    description?: string;
    /**
     * Required. Name of the resource. Name is of the form projects/{project}/locations/{location}/tlsInspectionPolicies/{tls_inspection_policy} tls_inspection_policy should match the pattern:(^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$).
     */
    name?: string;
}
