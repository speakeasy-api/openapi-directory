import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies the resources used to actively manage an instance group.
 */
export declare class ManagedGroupConfig extends SpeakeasyBase {
    /**
     * Output only. The name of the Instance Group Manager for this group.
     */
    instanceGroupManagerName?: string;
    /**
     * Output only. The name of the Instance Template used for the Managed Instance Group.
     */
    instanceTemplateName?: string;
}
