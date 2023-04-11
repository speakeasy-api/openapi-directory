import { SpeakeasyBase } from "../../../internal/utils";
import { ServerNetworkTemplate } from "./servernetworktemplate";
/**
 * Operation System image.
 */
export declare class OSImage extends SpeakeasyBase {
    /**
     * Instance types this image is applicable to. [Available types](https://cloud.google.com/bare-metal/docs/bms-planning#server_configurations)
     */
    applicableInstanceTypes?: string[];
    /**
     * OS Image code.
     */
    code?: string;
    /**
     * OS Image description.
     */
    description?: string;
    /**
     * Output only. OS Image's unique name.
     */
    name?: string;
    /**
     * Network templates that can be used with this OS Image.
     */
    supportedNetworkTemplates?: ServerNetworkTemplate[];
}
