import { SpeakeasyBase } from "../../../internal/utils";
export declare class RegionInstanceGroupManagersRecreateRequest extends SpeakeasyBase {
    /**
     * The URLs of one or more instances to recreate. This can be a full URL or a partial URL, such as zones/[ZONE]/instances/[INSTANCE_NAME].
     */
    instances?: string[];
}
