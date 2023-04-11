import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Order parameters defining the service and provider control
 */
export declare class OrderParametersServiceOfferingInput extends SpeakeasyBase {
    /**
     * The provider specific parameters needed to provision this service. This might include namespaces, special keys
     */
    providerControlParameters?: Record<string, any>;
    /**
     * JSON object with provisioning parameters
     */
    serviceParameters?: Record<string, any>;
}
