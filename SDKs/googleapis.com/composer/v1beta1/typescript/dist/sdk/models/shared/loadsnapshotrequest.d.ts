import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request to load a snapshot into a Cloud Composer environment.
 */
export declare class LoadSnapshotRequest extends SpeakeasyBase {
    /**
     * Whether or not to skip setting Airflow overrides when loading the environment's state.
     */
    skipAirflowOverridesSetting?: boolean;
    /**
     * Whether or not to skip setting environment variables when loading the environment's state.
     */
    skipEnvironmentVariablesSetting?: boolean;
    /**
     * Whether or not to skip copying Cloud Storage data when loading the environment's state.
     */
    skipGcsDataCopying?: boolean;
    /**
     * Whether or not to skip installing Pypi packages when loading the environment's state.
     */
    skipPypiPackagesInstallation?: boolean;
    /**
     * A Cloud Storage path to a snapshot to load, e.g.: "gs://my-bucket/snapshots/project_location_environment_timestamp".
     */
    snapshotPath?: string;
}
