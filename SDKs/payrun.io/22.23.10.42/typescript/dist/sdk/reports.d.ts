import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Reports {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Deletes a report definition
     *
     * @remarks
     * Delete the specified report definition
     */
    deleteReportDefinition(req: operations.DeleteReportDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteReportDefinitionResponse>;
    /**
     * Deletes a transform definition
     *
     * @remarks
     * Delete the specified transform definition
     */
    deleteTransformDefinition(req: operations.DeleteTransformDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteTransformDefinitionResponse>;
    /**
     * Runs the active pay instructions report
     *
     * @remarks
     * Returns the result of the executed active pay instructions report for the given query parameters
     */
    getActivePayInstructionsReportOutput(req: operations.GetActivePayInstructionsReportOutputRequest, config?: AxiosRequestConfig): Promise<operations.GetActivePayInstructionsReportOutputResponse>;
    /**
     * Runs the AOE liability report
     *
     * @remarks
     * Returns the result of the executed AOE liability report for the given query parameters
     */
    getAoeLiabilityReportOuput(req: operations.GetAoeLiabilityReportOuputRequest, config?: AxiosRequestConfig): Promise<operations.GetAoeLiabilityReportOuputResponse>;
    /**
     * Runs the DPS message report
     *
     * @remarks
     * Returns the result of the executed DPS message report for the given query parameters
     */
    getDpsMessageReportOutput(req: operations.GetDpsMessageReportOutputRequest, config?: AxiosRequestConfig): Promise<operations.GetDpsMessageReportOutputResponse>;
    /**
     * Runs the employer summary report
     *
     * @remarks
     * Returns the result of the employer summary report for the given query parameters
     */
    getEmployerSummaryReportOuput(req: operations.GetEmployerSummaryReportOuputRequest, config?: AxiosRequestConfig): Promise<operations.GetEmployerSummaryReportOuputResponse>;
    /**
     * Runs the gross to net report
     *
     * @remarks
     * Returns the result of the executed gross to net report for the given query parameters
     */
    getGrossToNetReportOutput(req: operations.GetGrossToNetReportOutputRequest, config?: AxiosRequestConfig): Promise<operations.GetGrossToNetReportOutputResponse>;
    /**
     * Runs the holiday balance report
     *
     * @remarks
     * Returns the result of the executed holiday balance report for the given query parameters
     */
    getHolidayBalanceReportOutput(req: operations.GetHolidayBalanceReportOutputRequest, config?: AxiosRequestConfig): Promise<operations.GetHolidayBalanceReportOutputResponse>;
    /**
     * Runs the journal report
     *
     * @remarks
     * Returns the result of the journal report for the given query parameters
     */
    getJournalReportOuput(req: operations.GetJournalReportOuputRequest, config?: AxiosRequestConfig): Promise<operations.GetJournalReportOuputResponse>;
    /**
     * Runs the last pay date report
     *
     * @remarks
     * Returns the result of the executed last pay date report for the given query parameters
     */
    getLastPayDateReportOuput(req: operations.GetLastPayDateReportOuputRequest, config?: AxiosRequestConfig): Promise<operations.GetLastPayDateReportOuputResponse>;
    /**
     * Runs the net pay report
     *
     * @remarks
     * Returns the result of the executed net pay report for the given query parameters
     */
    getNetPayReportOutput(req: operations.GetNetPayReportOutputRequest, config?: AxiosRequestConfig): Promise<operations.GetNetPayReportOutputResponse>;
    /**
     * Runs the next pay period report
     *
     * @remarks
     * Returns the result of the executed next pay period report for the given query parameters
     */
    getNextPayPeriodDatesReportOutput(req: operations.GetNextPayPeriodDatesReportOutputRequest, config?: AxiosRequestConfig): Promise<operations.GetNextPayPeriodDatesReportOutputResponse>;
    /**
     * Runs the P11 summary report
     *
     * @remarks
     * Returns the result of the executed P11 summary report for the given query parameters
     */
    getP11SummaryReportOutput(req: operations.GetP11SummaryReportOutputRequest, config?: AxiosRequestConfig): Promise<operations.GetP11SummaryReportOutputResponse>;
    /**
     * Runs the P32 report
     *
     * @remarks
     * Returns the result of the executed P32 report for the given query parameters
     */
    getP32NetReportOutput(req: operations.GetP32NetReportOutputRequest, config?: AxiosRequestConfig): Promise<operations.GetP32NetReportOutputResponse>;
    /**
     * Runs the P32 summary report
     *
     * @remarks
     * Returns the result of the executed P32 summary report for the given query parameters
     */
    getP32SummaryNetReportOutput(req: operations.GetP32SummaryNetReportOutputRequest, config?: AxiosRequestConfig): Promise<operations.GetP32SummaryNetReportOutputResponse>;
    /**
     * Runs the P45 report
     *
     * @remarks
     * Returns the result of the executed P45 report for the given query parameters
     */
    getP45ReportOutput(req: operations.GetP45ReportOutputRequest, config?: AxiosRequestConfig): Promise<operations.GetP45ReportOutputResponse>;
    /**
     * Runs the P60 report
     *
     * @remarks
     * Returns the result of the executed P60 report for the given query parameters
     */
    getP60ReportOutput(req: operations.GetP60ReportOutputRequest, config?: AxiosRequestConfig): Promise<operations.GetP60ReportOutputResponse>;
    /**
     * Runs the PAPDIS report
     *
     * @remarks
     * Returns the result of the executed PAPDIS report. PAPDIS is a free and open data interface standard designed to allow payroll and middleware software developers to create a file that can be used by pension providers to exchange data. http://www.papdis.org/
     */
    getPapdisReportOuput(req: operations.GetPapdisReportOuputRequest, config?: AxiosRequestConfig): Promise<operations.GetPapdisReportOuputResponse>;
    /**
     * Runs the PASS report
     *
     * @remarks
     * Returns the result of the executed PASS report. PASS stands for Payroll and Systemsync. PASS 1.1 is an extension of the PAPDIS V1.1 schema. https://pensionsynckb.systemsyncsolutions.com/display/PKB/PASS+1.1
     */
    getPassReportOuput(req: operations.GetPassReportOuputRequest, config?: AxiosRequestConfig): Promise<operations.GetPassReportOuputResponse>;
    /**
     * Runs the Pay Dashboard payslips report
     *
     * @remarks
     * Returns the result of the executed Pay Dashboard payslip report for the given query parameters. See https://api.paydashboard.com for details. For compatability should be returned as JSON with TransformDefinitionKey=Json-Clean.
     */
    getPayDashboardPayslipReportOuput(req: operations.GetPayDashboardPayslipReportOuputRequest, config?: AxiosRequestConfig): Promise<operations.GetPayDashboardPayslipReportOuputResponse>;
    /**
     * Runs the verbose payslip report
     *
     * @remarks
     * Returns the result of the executed verbose payslip report for the given query parameters
     */
    getPayslip3ReportOutput(req: operations.GetPayslip3ReportOutputRequest, config?: AxiosRequestConfig): Promise<operations.GetPayslip3ReportOutputResponse>;
    /**
     * Runs the pension liability report
     *
     * @remarks
     * Returns the result of the executed pension liability report for the given query parameters
     */
    getPensionLiabilityReportOutput(req: operations.GetPensionLiabilityReportOutputRequest, config?: AxiosRequestConfig): Promise<operations.GetPensionLiabilityReportOutputResponse>;
    /**
     * Get the report definition
     *
     * @remarks
     * Returns the specified report definition from the authroised application
     */
    getReportDefinitionFromApplication(req: operations.GetReportDefinitionFromApplicationRequest, config?: AxiosRequestConfig): Promise<operations.GetReportDefinitionFromApplicationResponse>;
    /**
     * Gets all reports
     *
     * @remarks
     * Get links to all saved report definitions under authorised application
     */
    getReportDefinitionsFromApplication(req: operations.GetReportDefinitionsFromApplicationRequest, config?: AxiosRequestConfig): Promise<operations.GetReportDefinitionsFromApplicationResponse>;
    /**
     * Runs the specified report definition
     *
     * @remarks
     * Returns the result of the executed report definition
     */
    getReportOutput(req: operations.GetReportOutputRequest, config?: AxiosRequestConfig): Promise<operations.GetReportOutputResponse>;
    /**
     * Get the transform definition
     *
     * @remarks
     * Returns the specified transform definition from the authroised application
     */
    getTransformDefinitionFromApplication(req: operations.GetTransformDefinitionFromApplicationRequest, config?: AxiosRequestConfig): Promise<operations.GetTransformDefinitionFromApplicationResponse>;
    /**
     * Gets all transform definitions
     *
     * @remarks
     * Get links to all saved transform definitions under authorised application
     */
    getTransformDefinitionsFromApplication(req: operations.GetTransformDefinitionsFromApplicationRequest, config?: AxiosRequestConfig): Promise<operations.GetTransformDefinitionsFromApplicationResponse>;
    /**
     * Create a new report definition
     *
     * @remarks
     * Creates a new report defintion object
     */
    postReportDefinition(req: operations.PostReportDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.PostReportDefinitionResponse>;
    /**
     * Create a new transform definition
     *
     * @remarks
     * Creates a new transform defintion object
     */
    postTransformDefinition(req: operations.PostTransformDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.PostTransformDefinitionResponse>;
    /**
     * Updates a report definition
     *
     * @remarks
     * Updates the existing specified report definition object
     */
    putReportDefinition(req: operations.PutReportDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.PutReportDefinitionResponse>;
    /**
     * Updates a transform definition
     *
     * @remarks
     * Updates the existing specified transform definition object
     */
    putTransformDefinition(req: operations.PutTransformDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.PutTransformDefinitionResponse>;
}
