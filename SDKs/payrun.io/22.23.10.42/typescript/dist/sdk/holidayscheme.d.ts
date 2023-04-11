import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class HolidayScheme {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete an holiday scheme
     *
     * @remarks
     * Delete the specified holiday scheme
     */
    deleteHolidayScheme(req: operations.DeleteHolidaySchemeRequest, config?: AxiosRequestConfig): Promise<operations.DeleteHolidaySchemeResponse>;
    /**
     * Delete an holiday scheme revision matching the specified revision date.
     *
     * @remarks
     * Deletes the specified holiday scheme revision for the matching revision date
     */
    deleteHolidaySchemeRevision(req: operations.DeleteHolidaySchemeRevisionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteHolidaySchemeRevisionResponse>;
    /**
     * Delete an HolidayScheme revision matching the specified revision number.
     *
     * @remarks
     * Deletes the specified holiday scheme revision for the matching revision number
     */
    deleteHolidaySchemeRevisionByNumber(req: operations.DeleteHolidaySchemeRevisionByNumberRequest, config?: AxiosRequestConfig): Promise<operations.DeleteHolidaySchemeRevisionByNumberResponse>;
    /**
     * Delete holiday scheme tag
     *
     * @remarks
     * Deletes a tag from the holiday scheme
     */
    deleteHolidaySchemeTag(req: operations.DeleteHolidaySchemeTagRequest, config?: AxiosRequestConfig): Promise<operations.DeleteHolidaySchemeTagResponse>;
    /**
     * Get all holiday scheme tags
     *
     * @remarks
     * Gets all the holiday scheme tags
     */
    getAllHolidaySchemeTags(req: operations.GetAllHolidaySchemeTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetAllHolidaySchemeTagsResponse>;
    /**
     * Get holiday scheme by effective date.
     *
     * @remarks
     * Returns the holiday scheme's state at the specified effective date.
     */
    getHolidaySchemeByEffectiveDate(req: operations.GetHolidaySchemeByEffectiveDateRequest, config?: AxiosRequestConfig): Promise<operations.GetHolidaySchemeByEffectiveDateResponse>;
    /**
     * Get holiday scheme from employer
     *
     * @remarks
     * Gets the specified holiday scheme from employer.
     */
    getHolidaySchemeFromEmployer(req: operations.GetHolidaySchemeFromEmployerRequest, config?: AxiosRequestConfig): Promise<operations.GetHolidaySchemeFromEmployerResponse>;
    /**
     * Gets the holiday scheme revision by revision number
     *
     * @remarks
     * Get the holiday scheme revision matching the specified revision number
     */
    getHolidaySchemeRevisionByNumber(req: operations.GetHolidaySchemeRevisionByNumberRequest, config?: AxiosRequestConfig): Promise<operations.GetHolidaySchemeRevisionByNumberResponse>;
    /**
     * Get all holiday scheme revisions
     *
     * @remarks
     * Gets links to all the holiday scheme revisions
     */
    getHolidaySchemeRevisions(req: operations.GetHolidaySchemeRevisionsRequest, config?: AxiosRequestConfig): Promise<operations.GetHolidaySchemeRevisionsResponse>;
    /**
     * Get holiday schemes from employer at a given effective date.
     *
     * @remarks
     * Get links to all holiday schemes for the employer on specified effective date.
     */
    getHolidaySchemesByEffectiveDate(req: operations.GetHolidaySchemesByEffectiveDateRequest, config?: AxiosRequestConfig): Promise<operations.GetHolidaySchemesByEffectiveDateResponse>;
    /**
     * Get holiday schemes from employer.
     *
     * @remarks
     * Get links to all holiday schemes for the specified employer.
     */
    getHolidaySchemesFromEmployer(req: operations.GetHolidaySchemesFromEmployerRequest, config?: AxiosRequestConfig): Promise<operations.GetHolidaySchemesFromEmployerResponse>;
    /**
     * Get holiday schemes with tag
     *
     * @remarks
     * Gets the holiday scheme with the tag
     */
    getHolidaySchemesWithTag(req: operations.GetHolidaySchemesWithTagRequest, config?: AxiosRequestConfig): Promise<operations.GetHolidaySchemesWithTagResponse>;
    /**
     * Get holiday scheme tag
     *
     * @remarks
     * Gets the tag from the holiday scheme
     */
    getTagFromHolidayScheme(req: operations.GetTagFromHolidaySchemeRequest, config?: AxiosRequestConfig): Promise<operations.GetTagFromHolidaySchemeResponse>;
    /**
     * Get holiday scheme revision tag
     *
     * @remarks
     * Gets the tag from the holiday scheme revision
     */
    getTagFromHolidaySchemeRevision(req: operations.GetTagFromHolidaySchemeRevisionRequest, config?: AxiosRequestConfig): Promise<operations.GetTagFromHolidaySchemeRevisionResponse>;
    /**
     * Get all tags from the holiday scheme
     *
     * @remarks
     * Gets all the tags from the holiday scheme
     */
    getTagsFromHolidayScheme(req: operations.GetTagsFromHolidaySchemeRequest, config?: AxiosRequestConfig): Promise<operations.GetTagsFromHolidaySchemeResponse>;
    /**
     * Get all holiday scheme revision tags
     *
     * @remarks
     * Gets all the tags from the holiday scheme revision
     */
    getTagsFromHolidaySchemeRevision(req: operations.GetTagsFromHolidaySchemeRevisionRequest, config?: AxiosRequestConfig): Promise<operations.GetTagsFromHolidaySchemeRevisionResponse>;
    /**
     * Patches the holiday scheme
     *
     * @remarks
     * Patches the specified holiday scheme with the supplied values
     */
    patchHolidayScheme(req: operations.PatchHolidaySchemeRequest, config?: AxiosRequestConfig): Promise<operations.PatchHolidaySchemeResponse>;
    /**
     * Create a new holiday scheme
     *
     * @remarks
     * Create a new holiday scheme object
     */
    postHolidaySchemeIntoEmployer(req: operations.PostHolidaySchemeIntoEmployerRequest, config?: AxiosRequestConfig): Promise<operations.PostHolidaySchemeIntoEmployerResponse>;
    /**
     * Updates the holiday scheme
     *
     * @remarks
     * Updates the existing specified holiday scheme object
     */
    putHolidaySchemeIntoEmployer(req: operations.PutHolidaySchemeIntoEmployerRequest, config?: AxiosRequestConfig): Promise<operations.PutHolidaySchemeIntoEmployerResponse>;
    /**
     * Insert holiday scheme tag
     *
     * @remarks
     * Inserts a new tag on the holiday scheme
     */
    putHolidaySchemeTag(req: operations.PutHolidaySchemeTagRequest, config?: AxiosRequestConfig): Promise<operations.PutHolidaySchemeTagResponse>;
}
