import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Forms {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Change the form with a batch of updates.
     */
    formsFormsBatchUpdate(req: operations.FormsFormsBatchUpdateRequest, security: operations.FormsFormsBatchUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.FormsFormsBatchUpdateResponse>;
    /**
     * Create a new form using the title given in the provided form message in the request. *Important:* Only the form.info.title and form.info.document_title fields are copied to the new form. All other fields including the form description, items and settings are disallowed. To create a new form and add items, you must first call forms.create to create an empty form with a title and (optional) document title, and then call forms.update to add the items.
     */
    formsFormsCreate(req: operations.FormsFormsCreateRequest, security: operations.FormsFormsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.FormsFormsCreateResponse>;
    /**
     * Get a form.
     */
    formsFormsGet(req: operations.FormsFormsGetRequest, security: operations.FormsFormsGetSecurity, config?: AxiosRequestConfig): Promise<operations.FormsFormsGetResponse>;
    /**
     * Get one response from the form.
     */
    formsFormsResponsesGet(req: operations.FormsFormsResponsesGetRequest, security: operations.FormsFormsResponsesGetSecurity, config?: AxiosRequestConfig): Promise<operations.FormsFormsResponsesGetResponse>;
    /**
     * List a form's responses.
     */
    formsFormsResponsesList(req: operations.FormsFormsResponsesListRequest, security: operations.FormsFormsResponsesListSecurity, config?: AxiosRequestConfig): Promise<operations.FormsFormsResponsesListResponse>;
    /**
     * Create a new watch. If a watch ID is provided, it must be unused. For each invoking project, the per form limit is one watch per Watch.EventType. A watch expires seven days after it is created (see Watch.expire_time).
     */
    formsFormsWatchesCreate(req: operations.FormsFormsWatchesCreateRequest, security: operations.FormsFormsWatchesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.FormsFormsWatchesCreateResponse>;
    /**
     * Delete a watch.
     */
    formsFormsWatchesDelete(req: operations.FormsFormsWatchesDeleteRequest, security: operations.FormsFormsWatchesDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.FormsFormsWatchesDeleteResponse>;
    /**
     * Return a list of the watches owned by the invoking project. The maximum number of watches is two: For each invoker, the limit is one for each event type per form.
     */
    formsFormsWatchesList(req: operations.FormsFormsWatchesListRequest, security: operations.FormsFormsWatchesListSecurity, config?: AxiosRequestConfig): Promise<operations.FormsFormsWatchesListResponse>;
    /**
     * Renew an existing watch for seven days. The state of the watch after renewal is `ACTIVE`, and the `expire_time` is seven days from the renewal. Renewing a watch in an error state (e.g. `SUSPENDED`) succeeds if the error is no longer present, but fail otherwise. After a watch has expired, RenewWatch returns `NOT_FOUND`.
     */
    formsFormsWatchesRenew(req: operations.FormsFormsWatchesRenewRequest, security: operations.FormsFormsWatchesRenewSecurity, config?: AxiosRequestConfig): Promise<operations.FormsFormsWatchesRenewResponse>;
}
