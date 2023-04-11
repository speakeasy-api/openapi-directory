import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The Open API configuration for your service (if one)
 */
export declare class ExposedApi extends SpeakeasyBase {
    /**
     * Whether or not the current service expose an API with an Open API descriptor
     */
    exposeApi: boolean;
    /**
     * The URL of the Open API descriptor
     */
    openApiDescriptorUrl?: string;
}
