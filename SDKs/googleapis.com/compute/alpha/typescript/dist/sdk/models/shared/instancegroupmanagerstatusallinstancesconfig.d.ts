import { SpeakeasyBase } from "../../../internal/utils";
export declare class InstanceGroupManagerStatusAllInstancesConfig extends SpeakeasyBase {
    /**
     * [Output Only] Current all-instances configuration revision. This value is in RFC3339 text format.
     */
    currentRevision?: string;
    /**
     * [Output Only] A bit indicating whether this configuration has been applied to all managed instances in the group.
     */
    effective?: boolean;
}
