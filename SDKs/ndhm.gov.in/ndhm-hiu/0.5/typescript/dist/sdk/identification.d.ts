import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Identification {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Identification result for a consent-manager user-id
     *
     * @remarks
     * If a patient is found then patient.name contains the patients name.
     * Otherwise, patient is not provided, and possibly error is raised for invalid requests
     * Note in addition to the "Authorization" header, one of the following headers must be specified
     * 1. specify **X-HIU-ID** if the requester is HIU (identified from /find requester.id)
     * 2. specify **X-HIP-ID** if the requester is HIP (identified from /find requester.id)
     *
     */
    postV05PatientsOnFindJson(req: operations.PostV05PatientsOnFindJsonRequest, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.PostV05PatientsOnFindJsonResponse>;
    /**
     * Identification result for a consent-manager user-id
     *
     * @remarks
     * If a patient is found then patient.name contains the patients name.
     * Otherwise, patient is not provided, and possibly error is raised for invalid requests
     * Note in addition to the "Authorization" header, one of the following headers must be specified
     * 1. specify **X-HIU-ID** if the requester is HIU (identified from /find requester.id)
     * 2. specify **X-HIP-ID** if the requester is HIP (identified from /find requester.id)
     *
     */
    postV05PatientsOnFindRaw(req: operations.PostV05PatientsOnFindRawRequest, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.PostV05PatientsOnFindRawResponse>;
}
