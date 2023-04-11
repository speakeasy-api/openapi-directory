import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleHomeEnterpriseSdmV1ParentRelation } from "./googlehomeenterprisesdmv1parentrelation";
/**
 * Device resource represents an instance of enterprise managed device in the property.
 */
export declare class GoogleHomeEnterpriseSdmV1Device extends SpeakeasyBase {
    /**
     * Required. The resource name of the device. For example: "enterprises/XYZ/devices/123".
     */
    name?: string;
    /**
     * Assignee details of the device.
     */
    parentRelations?: GoogleHomeEnterpriseSdmV1ParentRelation[];
    /**
     * Output only. Device traits.
     */
    traits?: Record<string, any>;
    /**
     * Output only. Type of the device for general display purposes. For example: "THERMOSTAT". The device type should not be used to deduce or infer functionality of the actual device it is assigned to. Instead, use the returned traits for the device.
     */
    type?: string;
}
