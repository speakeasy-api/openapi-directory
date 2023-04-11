import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * The reports API let you group checks into a single report and download the result as a PDF or CSV file.
 *
 * @remarks
 * It is also possible to upload a group of backgrounds check to be performed in batch and get a report about them later.
 */
export declare class Reports {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Batch Upload
     *
     * @remarks
     * Upload multiple checks and associate them to the report. The inputs for these checks must be sent in an xlsx file, please use the following templates:
     *
     * **Person:** [Chile](https://app.truora.com/files/person/person-input-cl.xlsx), [Colombia](https://app.truora.com/files/person/person-input-co.xlsx), [Mexico](https://app.truora.com/files/person/person-input-mx.xlsx), [Peru](https://app.truora.com/files/person/person-input-pe.xlsx), [Costa Rica](https://app.truora.com/files/person/person-input-cr.xlsx), [Brazil](https://app.truora.com/files/person/person-input-br.xlsx)
     *
     * **Vehicle:** [Chile](https://app.truora.com/files/vehicle/vehicle-input-cl.xlsx), [Colombia](https://app.truora.com/files/vehicle/vehicle-input-co.xlsx), [Mexico](https://app.truora.com/files/vehicle/vehicle-input-mx.xlsx), [Peru](https://app.truora.com/files/vehicle/vehicle-input-pe.xlsx)
     *
     * **Company** [Colombia](https://app.truora.com/files/company/company-input-co.xlsx), [Mexico](https://app.truora.com/files/company/company-input-mx.xlsx), [Brazil](https://app.truora.com/files/company/company-input-br.xlsx)
     *
     * Keep in mind that we currently do not support batch uploads for custom check types. Background checks created by batch upload are processed with low priority.
     */
    batchUpload(req: operations.BatchUploadRequest, security: operations.BatchUploadSecurity, config?: AxiosRequestConfig): Promise<operations.BatchUploadResponse>;
    /**
     * Create Report
     *
     * @remarks
     * Creates a Report to which it is possible to associate multiple Checks.
     */
    createReport(req: shared.CreateReportInput, security: operations.CreateReportSecurity, config?: AxiosRequestConfig): Promise<operations.CreateReportResponse>;
    /**
     * Get Report
     *
     * @remarks
     * Returns a report with the given ID.
     */
    getReport(req: operations.GetReportRequest, security: operations.GetReportSecurity, config?: AxiosRequestConfig): Promise<operations.GetReportResponse>;
    /**
     * List Reports
     *
     * @remarks
     * Lists all reports asociated with the client or user requesting.
     */
    listReports(req: operations.ListReportsRequest, config?: AxiosRequestConfig): Promise<operations.ListReportsResponse>;
}
