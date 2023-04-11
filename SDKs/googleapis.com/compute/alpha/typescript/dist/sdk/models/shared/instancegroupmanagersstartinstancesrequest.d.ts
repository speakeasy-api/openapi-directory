import { SpeakeasyBase } from "../../../internal/utils";
export declare class InstanceGroupManagersStartInstancesRequest extends SpeakeasyBase {
    /**
     * The URLs of one or more instances to start. This can be a full URL or a partial URL, such as zones/[ZONE]/instances/[INSTANCE_NAME].
     */
    instances?: string[];
}
