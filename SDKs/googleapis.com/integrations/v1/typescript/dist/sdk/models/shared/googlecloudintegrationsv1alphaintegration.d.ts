import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The integration definition.
 */
export declare class GoogleCloudIntegrationsV1alphaIntegration extends SpeakeasyBase {
    /**
     * Required. If any integration version is published.
     */
    active?: boolean;
    /**
     * Optional.
     */
    description?: string;
    /**
     * Required. The resource name of the integration.
     */
    name?: string;
    /**
     * Output only. Auto-generated.
     */
    updateTime?: string;
}
