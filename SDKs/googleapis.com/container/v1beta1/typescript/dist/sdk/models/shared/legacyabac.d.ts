import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Configuration for the legacy Attribute Based Access Control authorization mode.
 */
export declare class LegacyAbac extends SpeakeasyBase {
    /**
     * Whether the ABAC authorizer is enabled for this cluster. When enabled, identities in the system, including service accounts, nodes, and controllers, will have statically granted permissions beyond those provided by the RBAC configuration or IAM.
     */
    enabled?: boolean;
}
