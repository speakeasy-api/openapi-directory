import { AuthController } from "./authcontroller";
import { ObservationController } from "./observationcontroller";
import { ObservationHeadingController } from "./observationheadingcontroller";
import { PatientController } from "./patientcontroller";
import { PatientManagementController } from "./patientmanagementcontroller";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://www.patientview.org/"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * The recommended REST API endpoints to be used when integrating with PatientView
 */
export declare class SDK {
    /**
     * Auth Controller
     */
    authController: AuthController;
    /**
     * Observation Controller
     */
    observationController: ObservationController;
    /**
     * Observation Heading Controller
     */
    observationHeadingController: ObservationHeadingController;
    /**
     * Patient Controller
     */
    patientController: PatientController;
    /**
     * Patient Management Controller
     */
    patientManagementController: PatientManagementController;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
