import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Patient Management Controller
 */
export declare class PatientManagementController {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getPatientManagement
     *
     * @remarks
     * getPatientManagement
     */
    getPatientManagement(req: operations.GetPatientManagementRequest, config?: AxiosRequestConfig): Promise<operations.GetPatientManagementResponse>;
    /**
     * getPatientManagementDiagnoses
     *
     * @remarks
     * getPatientManagementDiagnoses
     */
    getPatientManagementDiagnoses(config?: AxiosRequestConfig): Promise<operations.GetPatientManagementDiagnosesResponse>;
    /**
     * getPatientManagementLookupTypes
     *
     * @remarks
     * getPatientManagementLookupTypes
     */
    getPatientManagementLookupTypes(config?: AxiosRequestConfig): Promise<operations.GetPatientManagementLookupTypesResponse>;
    /**
     * savePatientManagement
     *
     * @remarks
     * savePatientManagement
     */
    savePatientManagement(req: operations.SavePatientManagementRequest, config?: AxiosRequestConfig): Promise<operations.SavePatientManagementResponse>;
    /**
     * savePatientManagementSurgeries
     *
     * @remarks
     * savePatientManagementSurgeries
     */
    savePatientManagementSurgeries(req: operations.SavePatientManagementSurgeriesRequest, config?: AxiosRequestConfig): Promise<operations.SavePatientManagementSurgeriesResponse>;
    /**
     * validatePatientManagement
     *
     * @remarks
     * validatePatientManagement
     */
    validatePatientManagement(req: shared.PatientManagement, config?: AxiosRequestConfig): Promise<operations.ValidatePatientManagementResponse>;
}
