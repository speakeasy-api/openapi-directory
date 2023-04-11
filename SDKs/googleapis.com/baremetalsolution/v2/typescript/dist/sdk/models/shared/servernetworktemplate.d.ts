import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudBaremetalsolutionV2ServerNetworkTemplateLogicalInterface } from "./googlecloudbaremetalsolutionv2servernetworktemplatelogicalinterface";
/**
 * Network template.
 */
export declare class ServerNetworkTemplate extends SpeakeasyBase {
    /**
     * Instance types this template is applicable to.
     */
    applicableInstanceTypes?: string[];
    /**
     * Logical interfaces.
     */
    logicalInterfaces?: GoogleCloudBaremetalsolutionV2ServerNetworkTemplateLogicalInterface[];
    /**
     * Output only. Template's unique name. The full resource name follows the pattern: `projects/{project}/locations/{location}/serverNetworkTemplate/{server_network_template}` Generally, the {server_network_template} follows the syntax of "bond" or "nic".
     */
    name?: string;
}
