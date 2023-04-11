import { SpeakeasyBase } from "../../../internal/utils";
export declare enum LoggingComponentConfigEnableComponentsEnum {
    ComponentUnspecified = "COMPONENT_UNSPECIFIED",
    SystemComponents = "SYSTEM_COMPONENTS",
    Workloads = "WORKLOADS",
    Apiserver = "APISERVER",
    Scheduler = "SCHEDULER",
    ControllerManager = "CONTROLLER_MANAGER"
}
/**
 * LoggingComponentConfig is cluster logging component configuration.
 */
export declare class LoggingComponentConfig extends SpeakeasyBase {
    /**
     * Select components to collect logs. An empty set would disable all logging.
     */
    enableComponents?: LoggingComponentConfigEnableComponentsEnum[];
}
