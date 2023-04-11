import { SpeakeasyBase } from "../../../internal/utils";
export declare enum MonitoringComponentConfigEnableComponentsEnum {
    ComponentUnspecified = "COMPONENT_UNSPECIFIED",
    SystemComponents = "SYSTEM_COMPONENTS",
    Apiserver = "APISERVER",
    Scheduler = "SCHEDULER",
    ControllerManager = "CONTROLLER_MANAGER"
}
/**
 * MonitoringComponentConfig is cluster monitoring component configuration.
 */
export declare class MonitoringComponentConfig extends SpeakeasyBase {
    /**
     * Select components to collect metrics. An empty set would disable all monitoring.
     */
    enableComponents?: MonitoringComponentConfigEnableComponentsEnum[];
}
