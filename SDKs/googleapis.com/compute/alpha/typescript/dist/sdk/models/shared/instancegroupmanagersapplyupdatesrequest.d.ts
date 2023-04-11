import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The maximal action that should be performed on the instances. By default REPLACE. This field is deprecated, please use most_disruptive_allowed_action.
 */
export declare enum InstanceGroupManagersApplyUpdatesRequestMaximalActionEnum {
    None = "NONE",
    Refresh = "REFRESH",
    Replace = "REPLACE",
    Restart = "RESTART"
}
/**
 * The minimal action that you want to perform on each instance during the update: - REPLACE: At minimum, delete the instance and create it again. - RESTART: Stop the instance and start it again. - REFRESH: Do not stop the instance. - NONE: Do not disrupt the instance at all. By default, the minimum action is NONE. If your update requires a more disruptive action than you set with this flag, the necessary action is performed to execute the update.
 */
export declare enum InstanceGroupManagersApplyUpdatesRequestMinimalActionEnum {
    None = "NONE",
    Refresh = "REFRESH",
    Replace = "REPLACE",
    Restart = "RESTART"
}
/**
 * The most disruptive action that you want to perform on each instance during the update: - REPLACE: Delete the instance and create it again. - RESTART: Stop the instance and start it again. - REFRESH: Do not stop the instance. - NONE: Do not disrupt the instance at all. By default, the most disruptive allowed action is REPLACE. If your update requires a more disruptive action than you set with this flag, the update request will fail.
 */
export declare enum InstanceGroupManagersApplyUpdatesRequestMostDisruptiveAllowedActionEnum {
    None = "NONE",
    Refresh = "REFRESH",
    Replace = "REPLACE",
    Restart = "RESTART"
}
/**
 * InstanceGroupManagers.applyUpdatesToInstances
 */
export declare class InstanceGroupManagersApplyUpdatesRequest extends SpeakeasyBase {
    /**
     * Flag to update all instances instead of specified list of “instances”. If the flag is set to true then the instances may not be specified in the request.
     */
    allInstances?: boolean;
    /**
     * The list of URLs of one or more instances for which you want to apply updates. Each URL can be a full URL or a partial URL, such as zones/[ZONE]/instances/[INSTANCE_NAME].
     */
    instances?: string[];
    /**
     * The maximal action that should be performed on the instances. By default REPLACE. This field is deprecated, please use most_disruptive_allowed_action.
     */
    maximalAction?: InstanceGroupManagersApplyUpdatesRequestMaximalActionEnum;
    /**
     * The minimal action that you want to perform on each instance during the update: - REPLACE: At minimum, delete the instance and create it again. - RESTART: Stop the instance and start it again. - REFRESH: Do not stop the instance. - NONE: Do not disrupt the instance at all. By default, the minimum action is NONE. If your update requires a more disruptive action than you set with this flag, the necessary action is performed to execute the update.
     */
    minimalAction?: InstanceGroupManagersApplyUpdatesRequestMinimalActionEnum;
    /**
     * The most disruptive action that you want to perform on each instance during the update: - REPLACE: Delete the instance and create it again. - RESTART: Stop the instance and start it again. - REFRESH: Do not stop the instance. - NONE: Do not disrupt the instance at all. By default, the most disruptive allowed action is REPLACE. If your update requires a more disruptive action than you set with this flag, the update request will fail.
     */
    mostDisruptiveAllowedAction?: InstanceGroupManagersApplyUpdatesRequestMostDisruptiveAllowedActionEnum;
}
