import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Reports {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteReportDefinition - Deletes a report definition
     *
     * Delete the specified report definition
    **/
    deleteReportDefinition(req: operations.DeleteReportDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteReportDefinitionResponse>;
    /**
     * deleteTransformDefinition - Deletes a transform definition
     *
     * Delete the specified transform definition
    **/
    deleteTransformDefinition(req: operations.DeleteTransformDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteTransformDefinitionResponse>;
    /**
     * getActivePayInstructionsReportOutput - Runs the active pay instructions report
     *
     * Returns the result of the executed active pay instructions report for the given query parameters
    **/
    getActivePayInstructionsReportOutput(req: operations.GetActivePayInstructionsReportOutputRequest, config?: AxiosRequestConfig): Promise<operations.GetActivePayInstructionsReportOutputResponse>;
    /**
     * getAoeLiabilityReportOuput - Runs the AOE liability report
     *
     * Returns the result of the executed AOE liability report for the given query parameters
    **/
    getAoeLiabilityReportOuput(req: operations.GetAoeLiabilityReportOuputRequest, config?: AxiosRequestConfig): Promise<operations.GetAoeLiabilityReportOuputResponse>;
    /**
     * getDpsMessageReportOutput - Runs the DPS message report
     *
     * Returns the result of the executed DPS message report for the given query parameters
    **/
    getDpsMessageReportOutput(req: operations.GetDpsMessageReportOutputRequest, config?: AxiosRequestConfig): Promise<operations.GetDpsMessageReportOutputResponse>;
    /**
     * getEmployerSummaryReportOuput - Runs the employer summary report
     *
     * Returns the result of the employer summary report for the given query parameters
    **/
    getEmployerSummaryReportOuput(req: operations.GetEmployerSummaryReportOuputRequest, config?: AxiosRequestConfig): Promise<operations.GetEmployerSummaryReportOuputResponse>;
    /**
     * getGrossToNetReportOutput - Runs the gross to net report
     *
     * Returns the result of the executed gross to net report for the given query parameters
    **/
    getGrossToNetReportOutput(req: operations.GetGrossToNetReportOutputRequest, config?: AxiosRequestConfig): Promise<operations.GetGrossToNetReportOutputResponse>;
    /**
     * getHolidayBalanceReportOutput - Runs the holiday balance report
     *
     * Returns the result of the executed holiday balance report for the given query parameters
    **/
    getHolidayBalanceReportOutput(req: operations.GetHolidayBalanceReportOutputRequest, config?: AxiosRequestConfig): Promise<operations.GetHolidayBalanceReportOutputResponse>;
    /**
     * getJournalReportOuput - Runs the journal report
     *
     * Returns the result of the journal report for the given query parameters
    **/
    getJournalReportOuput(req: operations.GetJournalReportOuputRequest, config?: AxiosRequestConfig): Promise<operations.GetJournalReportOuputResponse>;
    /**
     * getLastPayDateReportOuput - Runs the last pay date report
     *
     * Returns the result of the executed last pay date report for the given query parameters
    **/
    getLastPayDateReportOuput(req: operations.GetLastPayDateReportOuputRequest, config?: AxiosRequestConfig): Promise<operations.GetLastPayDateReportOuputResponse>;
    /**
     * getNetPayReportOutput - Runs the net pay report
     *
     * Returns the result of the executed net pay report for the given query parameters
    **/
    getNetPayReportOutput(req: operations.GetNetPayReportOutputRequest, config?: AxiosRequestConfig): Promise<operations.GetNetPayReportOutputResponse>;
    /**
     * getNextPayPeriodDatesReportOutput - Runs the next pay period report
     *
     * Returns the result of the executed next pay period report for the given query parameters
    **/
    getNextPayPeriodDatesReportOutput(req: operations.GetNextPayPeriodDatesReportOutputRequest, config?: AxiosRequestConfig): Promise<operations.GetNextPayPeriodDatesReportOutputResponse>;
    /**
     * getP11SummaryReportOutput - Runs the P11 summary report
     *
     * Returns the result of the executed P11 summary report for the given query parameters
    **/
    getP11SummaryReportOutput(req: operations.GetP11SummaryReportOutputRequest, config?: AxiosRequestConfig): Promise<operations.GetP11SummaryReportOutputResponse>;
    /**
     * getP32NetReportOutput - Runs the P32 report
     *
     * Returns the result of the executed P32 report for the given query parameters
    **/
    getP32NetReportOutput(req: operations.GetP32NetReportOutputRequest, config?: AxiosRequestConfig): Promise<operations.GetP32NetReportOutputResponse>;
    /**
     * getP32SummaryNetReportOutput - Runs the P32 summary report
     *
     * Returns the result of the executed P32 summary report for the given query parameters
    **/
    getP32SummaryNetReportOutput(req: operations.GetP32SummaryNetReportOutputRequest, config?: AxiosRequestConfig): Promise<operations.GetP32SummaryNetReportOutputResponse>;
    /**
     * getP45ReportOutput - Runs the P45 report
     *
     * Returns the result of the executed P45 report for the given query parameters
    **/
    getP45ReportOutput(req: operations.GetP45ReportOutputRequest, config?: AxiosRequestConfig): Promise<operations.GetP45ReportOutputResponse>;
    /**
     * getP60ReportOutput - Runs the P60 report
     *
     * Returns the result of the executed P60 report for the given query parameters
    **/
    getP60ReportOutput(req: operations.GetP60ReportOutputRequest, config?: AxiosRequestConfig): Promise<operations.GetP60ReportOutputResponse>;
    /**
     * getPapdisReportOuput - Runs the PAPDIS report
     *
     * Returns the result of the executed PAPDIS report. PAPDIS is a free and open data interface standard designed to allow payroll and middleware software developers to create a file that can be used by pension providers to exchange data. http://www.papdis.org
    **/
    getPapdisReportOuput(req: operations.GetPapdisReportOuputRequest, config?: AxiosRequestConfig): Promise<operations.GetPapdisReportOuputResponse>;
    /**
     * getPassReportOuput - Runs the PASS report
     *
     * Returns the result of the executed PASS report. PASS stands for Payroll and Systemsync. PASS 1.1 is an extension of the PAPDIS V1.1 schema. https://pensionsynckb.systemsyncsolutions.com/display/PKB/PASS+1.1
    **/
    getPassReportOuput(req: operations.GetPassReportOuputRequest, config?: AxiosRequestConfig): Promise<operations.GetPassReportOuputResponse>;
    /**
     * getPayDashboardPayslipReportOuput - Runs the Pay Dashboard payslips report
     *
     * Returns the result of the executed Pay Dashboard payslip report for the given query parameters. See https://api.paydashboard.com for details. For compatability should be returned as JSON with TransformDefinitionKey=Json-Clean.
    **/
    getPayDashboardPayslipReportOuput(req: operations.GetPayDashboardPayslipReportOuputRequest, config?: AxiosRequestConfig): Promise<operations.GetPayDashboardPayslipReportOuputResponse>;
    /**
     * getPayslip3ReportOutput - Runs the verbose payslip report
     *
     * Returns the result of the executed verbose payslip report for the given query parameters
    **/
    getPayslip3ReportOutput(req: operations.GetPayslip3ReportOutputRequest, config?: AxiosRequestConfig): Promise<operations.GetPayslip3ReportOutputResponse>;
    /**
     * getPensionLiabilityReportOutput - Runs the pension liability report
     *
     * Returns the result of the executed pension liability report for the given query parameters
    **/
    getPensionLiabilityReportOutput(req: operations.GetPensionLiabilityReportOutputRequest, config?: AxiosRequestConfig): Promise<operations.GetPensionLiabilityReportOutputResponse>;
    /**
     * getReportDefinitionFromApplication - Get the report definition
     *
     * Returns the specified report definition from the authroised application
    **/
    getReportDefinitionFromApplication(req: operations.GetReportDefinitionFromApplicationRequest, config?: AxiosRequestConfig): Promise<operations.GetReportDefinitionFromApplicationResponse>;
    /**
     * getReportDefinitionsFromApplication - Gets all reports
     *
     * Get links to all saved report definitions under authorised application
    **/
    getReportDefinitionsFromApplication(req: operations.GetReportDefinitionsFromApplicationRequest, config?: AxiosRequestConfig): Promise<operations.GetReportDefinitionsFromApplicationResponse>;
    /**
     * getReportOutput - Runs the specified report definition
     *
     * Returns the result of the executed report definition
    **/
    getReportOutput(req: operations.GetReportOutputRequest, config?: AxiosRequestConfig): Promise<operations.GetReportOutputResponse>;
    /**
     * getTransformDefinitionFromApplication - Get the transform definition
     *
     * Returns the specified transform definition from the authroised application
    **/
    getTransformDefinitionFromApplication(req: operations.GetTransformDefinitionFromApplicationRequest, config?: AxiosRequestConfig): Promise<operations.GetTransformDefinitionFromApplicationResponse>;
    /**
     * getTransformDefinitionsFromApplication - Gets all transform definitions
     *
     * Get links to all saved transform definitions under authorised application
    **/
    getTransformDefinitionsFromApplication(req: operations.GetTransformDefinitionsFromApplicationRequest, config?: AxiosRequestConfig): Promise<operations.GetTransformDefinitionsFromApplicationResponse>;
    /**
     * postReportDefinition - Create a new report definition
     *
     * Creates a new report defintion object
    **/
    postReportDefinition(req: operations.PostReportDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.PostReportDefinitionResponse>;
    /**
     * postTransformDefinition - Create a new transform definition
     *
     * Creates a new transform defintion object
    **/
    postTransformDefinition(req: operations.PostTransformDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.PostTransformDefinitionResponse>;
    /**
     * putReportDefinition - Updates a report definition
     *
     * Updates the existing specified report definition object
    **/
    putReportDefinition(req: operations.PutReportDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.PutReportDefinitionResponse>;
    /**
     * putTransformDefinition - Updates a transform definition
     *
     * Updates the existing specified transform definition object
    **/
    putTransformDefinition(req: operations.PutTransformDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.PutTransformDefinitionResponse>;
}
