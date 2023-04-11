import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 *
 * @remarks
 * A Draft Registration is a object that allows a user to edit and revise a registration before it is registered. Draft Registrations allow contributors to coordinate on a single registration, so they can upload files and change Registration metadata before the Registration is archived.
 */
export declare class DraftRegistrations {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete a draft registration
     *
     * @remarks
     * Permanently deletes a draft registration. A draft that has already been registered cannot be deleted.
     * #### Permissions
     * Only draft registration contributors with ADMIN permissions may delete draft registrations
     * #### Returns
     * If the request is successful, no content is returned.
     * If the request is unsuccessful, a JSON object with an `errors` key containing information about the failure will be returned. Refer to the [list of error codes]() to understand why this request may have failed.
     */
    deleteDraftRegistrationsDraftId(req: operations.DeleteDraftRegistrationsDraftIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDraftRegistrationsDraftIdResponse>;
    /**
     * Add a contributor to a Draft Registration
     *
     * @remarks
     * Adds a contributor to a Draft Registration, contributors can view, edit, register or delete a Draft Registration depending on their permissions.
     * Contributors are categorized as either "bibliographic" or "non-bibliographic" contributors. From a permissions standpoint, both are the same, but bibliographic contributors are included in citations and are listed on the project overview page on the OSF, while non-bibliographic contributors are not.
     * #### Permissions
     * Only project administrators can add contributors to a Draft Registration.
     * #### Required
     * A relationship object with a `data` key, containing the `users` type and valid user ID is required.
     * All attributes describing the relationship between the node and the user are optional.
     * #### Returns
     * Returns a JSON object with a `data` key containing the representation of the new contributor, if the request is successful.
     * If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
     */
    draftRegistrationContributorsCreate(req: operations.DraftRegistrationContributorsCreateRequest, config?: AxiosRequestConfig): Promise<operations.DraftRegistrationContributorsCreateResponse>;
    /**
     * Retreive a list Contributors from a Draft Registration
     *
     * @remarks
     * Retrieves the details of all given Contributors for a Draft Registration.
     * Contributors are users who can make changes to the Draft Registration.
     * Contributors are categorized as either "bibliographic" or "non-bibliographic". From a permissions standpoint, both are the same, but bibliographic contributors are included in citations and are listed on the project overview page on the OSF, while non-bibliographic contributors are not.
     */
    draftRegistrationContributorsList(req: operations.DraftRegistrationContributorsListRequest, config?: AxiosRequestConfig): Promise<operations.DraftRegistrationContributorsListResponse>;
    /**
     * Create a Draft Registration
     *
     * @remarks
     * This creates a Draft Registration that can be used to edit and register research.
     * Draft Registrations contain Registration questions that will become part of the Registration. A Registration is a frozen version of the project that can never be deleted, but can be withdrawn and have it's metadata edited.
     * A Draft Registration created by this endpoint will not have a Project linked with it by default, but if the user includes a `branched_from` attribute in their Draft Registration creation payload with the value of the `branched_from` being guid of a Project they have permissions for the Draft Registration will be linked to the Project. If you linked your Draft Registration on a Project, your original Project remains editable and will now have the Draft Registration linked to it.
     * #### Permissions
     * Any user can create a Draft Registration. If the `branched_from` attribute is provided, then the user must be an ADMIN contributor on the Project being registered.
     * #### Required
     * Required fields for creating a Draft Registration include:
     *
     * &nbsp;&nbsp;&nbsp;&nbsp;`schema_id`
     * #### Returns
     * Returns a JSON object with a `data` key containing the representation of the created Draft Registration, if the request is successful.
     *
     * If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
     */
    draftRegistrationsCreate(req: operations.DraftRegistrationsCreateDraftRegistrationInput, config?: AxiosRequestConfig): Promise<operations.DraftRegistrationsCreateResponse>;
    /**
     * Retrieve a list of Draft Registrations
     *
     * @remarks
     * Retrieve a list of all currently available Draft Registrations for that user.
     * #### Permissions
     * Only Draft Registration contributors may view draft registrations.
     * #### Returns
     * Returns a JSON object with a `data` key containing the representation of the requested draft registration, if the request is successful.
     *
     * If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
     */
    draftRegistrationsRead(config?: AxiosRequestConfig): Promise<operations.DraftRegistrationsReadResponse>;
    /**
     * Retrieve a Draft Registration
     *
     * @remarks
     * Retrieve the details of a given Draft Registration
     * Draft Registrations contain Registration questions that will become part of the Registration. A Registration is a frozen version of the project that can never be deleted, but can be withdrawn and have it's metadata edited.
     *
     * If you based your Draft Registration on a Project, your original Project remains editable but will now have the Draft Registration linked to it.
     * #### Permissions
     * Only draft registration contributors may view draft registrations.
     * #### Returns
     * Returns a JSON object with a `data` key containing the representation of the requested draft registration, if the request is successful.
     *
     * If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
     */
    getDraftRegistrationsDraftId(req: operations.GetDraftRegistrationsDraftIdRequest, config?: AxiosRequestConfig): Promise<operations.GetDraftRegistrationsDraftIdResponse>;
    /**
     * Retreive a Contributor from a Draft Registration
     *
     * @remarks
     * Retrieves the details of a given contributor.
     *
     * Contributors are users who can view or edit to the Draft Registrations.
     *
     * Contributors are categorized as either "bibliographic" or "non-bibliographic". From a permissions standpoint, both are the same, but bibliographic contributors are included in citations and are listed on the project overview page on the OSF, while non-bibliographic contributors are not.
     */
    getDraftRegistrationsDraftIdContributorsUserId(req: operations.GetDraftRegistrationsDraftIdContributorsUserIdRequest, config?: AxiosRequestConfig): Promise<operations.GetDraftRegistrationsDraftIdContributorsUserIdResponse>;
    /**
     * Retrieve Institutions afilliated with a Draft Registration
     *
     * @remarks
     * Once a properly authenticated user has marked their registration as affiliated with an institution, that institution and any others added will appear in this list.
     */
    getDraftRegistrationsDraftIdInstitutions(req: operations.GetDraftRegistrationsDraftIdInstitutionsRequest, config?: AxiosRequestConfig): Promise<operations.GetDraftRegistrationsDraftIdInstitutionsResponse>;
    /**
     * Retrieve a Draft Registration
     *
     * @remarks
     * Retrieve the details of a given draft registration.
     * Draft Registrations contain Registration questions that will become part of the Registration. A Registration is a frozen version of the project that can never be deleted, but can be withdrawn and have it's metadata edited.
     *
     * Your original project remains editable but will now have the draft registration linked to it.
     * #### Permissions
     * Only project administrators may view draft registrations.
     * #### Returns
     * Returns a JSON object with a `data` key containing the representation of the requested draft registration, if the request is successful.
     *
     * If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
     */
    nodesDraftRegistrationsRead(req: operations.NodesDraftRegistrationsReadRequest, config?: AxiosRequestConfig): Promise<operations.NodesDraftRegistrationsReadResponse>;
    /**
     * Retrieve Subjects associated with a Draft Registration
     *
     * @remarks
     * This retrieves a list of subjects associated with a Draft Registration. Subjects are formatted here in a flat paginated list, but are hierarchical and nested by specificity of subject matter.
     */
    nodesDraftRegistrationsSubjects(req: operations.NodesDraftRegistrationsSubjectsRequest, config?: AxiosRequestConfig): Promise<operations.NodesDraftRegistrationsSubjectsResponse>;
    /**
     * Update a Draft Registration
     *
     * @remarks
     * Updates a Draft Registration by setting the values of the attributes specified in the request body. Any unspecified attributes will be left unchanged. Note this will not register or change the machine state of a Draft Registration, it can only edit the Draft Registration's attributes prior to its registration.
     * #### Permissions
     * Only draft registration contributors may view draft registrations and only draft registration contributors with WRITE or ADMIN permissions may update draft registrations.
     * #### Returns
     * Returns a JSON object with a `data` key containing the new representation of the updated draft registration, if the request is successful.
     * If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
     */
    patchDraftRegistrationsDraftId(req: operations.PatchDraftRegistrationsDraftIdRequest, config?: AxiosRequestConfig): Promise<operations.PatchDraftRegistrationsDraftIdResponse>;
}
