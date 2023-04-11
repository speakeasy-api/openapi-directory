import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * A patient is the core user of Fitbit Plus.
 */
export declare class Patient {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create a patient
     *
     * @remarks
     * Create a patient record.
     *
     * Example for creating a patient with a group specified using `meta.query` instead of `id`:
     *
     * ```JSON
     * {
     *   "data": {
     *     "type": "patient",
     *     "attributes": {
     *       "first_name": "Andrew",
     *       "last_name": "Smith"
     *     },
     *     "relationships": {
     *       "groups": {
     *         "data": [
     *           {
     *             "type": "group",
     *             "meta": {
     *               "query": {
     *                 "organization": "58c88de7c93eb96357a87033",
     *                 "name": "Patients Lead"
     *               }
     *             }
     *           }
     *         ]
     *       }
     *     }
     *   }
     * }
     * ```
     *
     */
    createPatient(req: shared.CreatePatientRequestInput, config?: AxiosRequestConfig): Promise<operations.CreatePatientResponse>;
    /**
     * Get a patient
     *
     * @remarks
     * Gets a patient record by id.
     */
    fetchPatient(req: operations.FetchPatientRequest, config?: AxiosRequestConfig): Promise<operations.FetchPatientResponse>;
    /**
     * List coaches for a patient
     *
     * @remarks
     * Get the list of coaches for a patient.
     */
    fetchPatientCoaches(req: operations.FetchPatientCoachesRequest, config?: AxiosRequestConfig): Promise<operations.FetchPatientCoachesResponse>;
    /**
     * List groups for a patient
     *
     * @remarks
     * Get the list of groups for a patient.
     */
    fetchPatientGroups(req: operations.FetchPatientGroupsRequest, config?: AxiosRequestConfig): Promise<operations.FetchPatientGroupsResponse>;
    /**
     * List patients
     *
     * @remarks
     * Get a list of patients.
     */
    fetchPatients(req: operations.FetchPatientsRequest, config?: AxiosRequestConfig): Promise<operations.FetchPatientsResponse>;
    /**
     * Update a patient
     *
     * @remarks
     * Update a patient record.
     */
    updatePatient(req: operations.UpdatePatientRequest, config?: AxiosRequestConfig): Promise<operations.UpdatePatientResponse>;
    /**
     * Upsert patient
     *
     * @remarks
     * Create a new patient or update an existing patient
     */
    upsertPatient(req: shared.UpsertPatientRequestInput, config?: AxiosRequestConfig): Promise<operations.UpsertPatientResponse>;
}
