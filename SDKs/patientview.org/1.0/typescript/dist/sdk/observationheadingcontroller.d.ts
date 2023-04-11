import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Observation Heading Controller
 */
export declare class ObservationHeadingController {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get Available Observations Types For a User
     *
     * @remarks
     * Given a User ID retrieve a list of available observation types for that user (where they have observation data).
     */
    getAvailableObservationHeadings(req: operations.GetAvailableObservationHeadingsRequest, config?: AxiosRequestConfig): Promise<operations.GetAvailableObservationHeadingsResponse>;
    /**
     * Get Available Patient Entered Observations Types For a User
     *
     * @remarks
     * Given a User ID retrieve a list of available observation types for that user (where they have patient entered observation data).
     */
    getPatientEnteredObservationHeadings(req: operations.GetPatientEnteredObservationHeadingsRequest, config?: AxiosRequestConfig): Promise<operations.GetPatientEnteredObservationHeadingsResponse>;
}
