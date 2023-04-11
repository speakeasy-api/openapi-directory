import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudChannelV1Value } from "./googlecloudchannelv1value";
/**
 * Definition for extended entitlement parameters.
 */
export declare class GoogleCloudChannelV1ParameterInput extends SpeakeasyBase {
    /**
     * Name of the parameter.
     */
    name?: string;
    /**
     * Data type and value of a parameter.
     */
    value?: GoogleCloudChannelV1Value;
}
/**
 * Definition for extended entitlement parameters.
 */
export declare class GoogleCloudChannelV1Parameter extends SpeakeasyBase {
    /**
     * Output only. Specifies whether this parameter is allowed to be changed. For example, for a Google Workspace Business Starter entitlement in commitment plan, num_units is editable when entitlement is active.
     */
    editable?: boolean;
    /**
     * Name of the parameter.
     */
    name?: string;
    /**
     * Data type and value of a parameter.
     */
    value?: GoogleCloudChannelV1Value;
}
