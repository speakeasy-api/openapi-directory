import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies the selection and configuration of software inside the environment.
**/
export declare class SoftwareConfig extends SpeakeasyBase {
    airflowConfigOverrides?: Record<string, string>;
    envVariables?: Record<string, string>;
    imageVersion?: string;
    pypiPackages?: Record<string, string>;
    pythonVersion?: string;
    schedulerCount?: number;
}
