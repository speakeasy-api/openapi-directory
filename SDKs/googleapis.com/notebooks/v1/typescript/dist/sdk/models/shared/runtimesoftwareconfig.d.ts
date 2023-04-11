import { SpeakeasyBase } from "../../../internal/utils";
import { ContainerImage } from "./containerimage";
/**
 * Behavior for the post startup script.
 */
export declare enum RuntimeSoftwareConfigPostStartupScriptBehaviorEnum {
    PostStartupScriptBehaviorUnspecified = "POST_STARTUP_SCRIPT_BEHAVIOR_UNSPECIFIED",
    RunEveryStart = "RUN_EVERY_START",
    DownloadAndRunEveryStart = "DOWNLOAD_AND_RUN_EVERY_START"
}
/**
 * Specifies the selection and configuration of software inside the runtime. The properties to set on runtime. Properties keys are specified in `key:value` format, for example: * `idle_shutdown: true` * `idle_shutdown_timeout: 180` * `enable_health_monitoring: true`
 */
export declare class RuntimeSoftwareConfigInput extends SpeakeasyBase {
    /**
     * Specify a custom Cloud Storage path where the GPU driver is stored. If not specified, we'll automatically choose from official GPU drivers.
     */
    customGpuDriverPath?: string;
    /**
     * Bool indicating whether JupyterLab terminal will be available or not. Default: False
     */
    disableTerminal?: boolean;
    /**
     * Verifies core internal services are running. Default: True
     */
    enableHealthMonitoring?: boolean;
    /**
     * Runtime will automatically shutdown after idle_shutdown_time. Default: True
     */
    idleShutdown?: boolean;
    /**
     * Time in minutes to wait before shutting down runtime. Default: 180 minutes
     */
    idleShutdownTimeout?: number;
    /**
     * Install Nvidia Driver automatically. Default: True
     */
    installGpuDriver?: boolean;
    /**
     * Optional. Use a list of container images to use as Kernels in the notebook instance.
     */
    kernels?: ContainerImage[];
    /**
     * Bool indicating whether mixer client should be disabled. Default: False
     */
    mixerDisabled?: boolean;
    /**
     * Cron expression in UTC timezone, used to schedule instance auto upgrade. Please follow the [cron format](https://en.wikipedia.org/wiki/Cron).
     */
    notebookUpgradeSchedule?: string;
    /**
     * Path to a Bash script that automatically runs after a notebook instance fully boots up. The path must be a URL or Cloud Storage path (`gs://path-to-file/file-name`).
     */
    postStartupScript?: string;
    /**
     * Behavior for the post startup script.
     */
    postStartupScriptBehavior?: RuntimeSoftwareConfigPostStartupScriptBehaviorEnum;
}
/**
 * Specifies the selection and configuration of software inside the runtime. The properties to set on runtime. Properties keys are specified in `key:value` format, for example: * `idle_shutdown: true` * `idle_shutdown_timeout: 180` * `enable_health_monitoring: true`
 */
export declare class RuntimeSoftwareConfig extends SpeakeasyBase {
    /**
     * Specify a custom Cloud Storage path where the GPU driver is stored. If not specified, we'll automatically choose from official GPU drivers.
     */
    customGpuDriverPath?: string;
    /**
     * Bool indicating whether JupyterLab terminal will be available or not. Default: False
     */
    disableTerminal?: boolean;
    /**
     * Verifies core internal services are running. Default: True
     */
    enableHealthMonitoring?: boolean;
    /**
     * Runtime will automatically shutdown after idle_shutdown_time. Default: True
     */
    idleShutdown?: boolean;
    /**
     * Time in minutes to wait before shutting down runtime. Default: 180 minutes
     */
    idleShutdownTimeout?: number;
    /**
     * Install Nvidia Driver automatically. Default: True
     */
    installGpuDriver?: boolean;
    /**
     * Optional. Use a list of container images to use as Kernels in the notebook instance.
     */
    kernels?: ContainerImage[];
    /**
     * Bool indicating whether mixer client should be disabled. Default: False
     */
    mixerDisabled?: boolean;
    /**
     * Cron expression in UTC timezone, used to schedule instance auto upgrade. Please follow the [cron format](https://en.wikipedia.org/wiki/Cron).
     */
    notebookUpgradeSchedule?: string;
    /**
     * Path to a Bash script that automatically runs after a notebook instance fully boots up. The path must be a URL or Cloud Storage path (`gs://path-to-file/file-name`).
     */
    postStartupScript?: string;
    /**
     * Behavior for the post startup script.
     */
    postStartupScriptBehavior?: RuntimeSoftwareConfigPostStartupScriptBehaviorEnum;
    /**
     * Output only. Bool indicating whether an newer image is available in an image family.
     */
    upgradeable?: boolean;
    /**
     * Output only. version of boot image such as M100, from release label of the image.
     */
    version?: string;
}
