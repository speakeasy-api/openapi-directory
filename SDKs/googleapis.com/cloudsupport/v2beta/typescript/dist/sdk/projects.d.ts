import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Projects {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieve all attachments associated with a support case.
     */
    cloudsupportProjectsCasesAttachmentsList(req: operations.CloudsupportProjectsCasesAttachmentsListRequest, security: operations.CloudsupportProjectsCasesAttachmentsListSecurity, config?: AxiosRequestConfig): Promise<operations.CloudsupportProjectsCasesAttachmentsListResponse>;
    /**
     * Close the specified case.
     */
    cloudsupportProjectsCasesClose(req: operations.CloudsupportProjectsCasesCloseRequest, security: operations.CloudsupportProjectsCasesCloseSecurity, config?: AxiosRequestConfig): Promise<operations.CloudsupportProjectsCasesCloseResponse>;
    /**
     * Add a new comment to the specified Case. The comment object must have the following fields set: body.
     */
    cloudsupportProjectsCasesCommentsCreate(req: operations.CloudsupportProjectsCasesCommentsCreateRequest, security: operations.CloudsupportProjectsCasesCommentsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.CloudsupportProjectsCasesCommentsCreateResponse>;
    /**
     * Retrieve all Comments associated with the Case object.
     */
    cloudsupportProjectsCasesCommentsList(req: operations.CloudsupportProjectsCasesCommentsListRequest, security: operations.CloudsupportProjectsCasesCommentsListSecurity, config?: AxiosRequestConfig): Promise<operations.CloudsupportProjectsCasesCommentsListResponse>;
    /**
     * Create a new case and associate it with the given Cloud resource. The case object must have the following fields set: display_name, description, classification, and severity.
     */
    cloudsupportProjectsCasesCreate(req: operations.CloudsupportProjectsCasesCreateRequest, security: operations.CloudsupportProjectsCasesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.CloudsupportProjectsCasesCreateResponse>;
    /**
     * Escalate a case. Escalating a case will initiate the Cloud Support escalation management process. This operation is only available to certain Customer Care tiers. Go to https://cloud.google.com/support and look for 'Technical support escalations' in the feature list to find out which tiers are able to perform escalations.
     */
    cloudsupportProjectsCasesEscalate(req: operations.CloudsupportProjectsCasesEscalateRequest, security: operations.CloudsupportProjectsCasesEscalateSecurity, config?: AxiosRequestConfig): Promise<operations.CloudsupportProjectsCasesEscalateResponse>;
    /**
     * Retrieve the specified case.
     */
    cloudsupportProjectsCasesGet(req: operations.CloudsupportProjectsCasesGetRequest, security: operations.CloudsupportProjectsCasesGetSecurity, config?: AxiosRequestConfig): Promise<operations.CloudsupportProjectsCasesGetResponse>;
    /**
     * Retrieve all cases under the specified parent. Note: Listing cases under an Organization returns only the cases directly parented by that organization. To retrieve all cases under an organization, including cases parented by projects under that organization, use `cases.search`.
     */
    cloudsupportProjectsCasesList(req: operations.CloudsupportProjectsCasesListRequest, security: operations.CloudsupportProjectsCasesListSecurity, config?: AxiosRequestConfig): Promise<operations.CloudsupportProjectsCasesListResponse>;
    /**
     * Update the specified case. Only a subset of fields can be updated.
     */
    cloudsupportProjectsUpdateCases(req: operations.CloudsupportProjectsUpdateCasesRequest, security: operations.CloudsupportProjectsUpdateCasesSecurity, config?: AxiosRequestConfig): Promise<operations.CloudsupportProjectsUpdateCasesResponse>;
}
