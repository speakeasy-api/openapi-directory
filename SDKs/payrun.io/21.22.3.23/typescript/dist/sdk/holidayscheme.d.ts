import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class HolidayScheme {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteHolidayScheme - Delete an holiday scheme
     *
     * Delete the specified holiday scheme
    **/
    deleteHolidayScheme(req: operations.DeleteHolidaySchemeRequest, config?: AxiosRequestConfig): Promise<operations.DeleteHolidaySchemeResponse>;
    /**
     * deleteHolidaySchemeRevision - Delete an holiday scheme revision matching the specified revision date.
     *
     * Deletes the specified holiday scheme revision for the matching revision date
    **/
    deleteHolidaySchemeRevision(req: operations.DeleteHolidaySchemeRevisionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteHolidaySchemeRevisionResponse>;
    /**
     * deleteHolidaySchemeRevisionByNumber - Delete an HolidayScheme revision matching the specified revision number.
     *
     * Deletes the specified holiday scheme revision for the matching revision number
    **/
    deleteHolidaySchemeRevisionByNumber(req: operations.DeleteHolidaySchemeRevisionByNumberRequest, config?: AxiosRequestConfig): Promise<operations.DeleteHolidaySchemeRevisionByNumberResponse>;
    /**
     * deleteHolidaySchemeTag - Delete holiday scheme tag
     *
     * Deletes a tag from the holiday scheme
    **/
    deleteHolidaySchemeTag(req: operations.DeleteHolidaySchemeTagRequest, config?: AxiosRequestConfig): Promise<operations.DeleteHolidaySchemeTagResponse>;
    /**
     * getAllHolidaySchemeTags - Get all holiday scheme tags
     *
     * Gets all the holiday scheme tags
    **/
    getAllHolidaySchemeTags(req: operations.GetAllHolidaySchemeTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetAllHolidaySchemeTagsResponse>;
    /**
     * getHolidaySchemeByEffectiveDate - Get holiday scheme by effective date.
     *
     * Returns the holiday scheme's state at the specified effective date.
    **/
    getHolidaySchemeByEffectiveDate(req: operations.GetHolidaySchemeByEffectiveDateRequest, config?: AxiosRequestConfig): Promise<operations.GetHolidaySchemeByEffectiveDateResponse>;
    /**
     * getHolidaySchemeFromEmployer - Get holiday scheme from employer
     *
     * Gets the specified holiday scheme from employer.
    **/
    getHolidaySchemeFromEmployer(req: operations.GetHolidaySchemeFromEmployerRequest, config?: AxiosRequestConfig): Promise<operations.GetHolidaySchemeFromEmployerResponse>;
    /**
     * getHolidaySchemeRevisionByNumber - Gets the holiday scheme revision by revision number
     *
     * Get the holiday scheme revision matching the specified revision number
    **/
    getHolidaySchemeRevisionByNumber(req: operations.GetHolidaySchemeRevisionByNumberRequest, config?: AxiosRequestConfig): Promise<operations.GetHolidaySchemeRevisionByNumberResponse>;
    /**
     * getHolidaySchemeRevisions - Get all holiday scheme revisions
     *
     * Gets links to all the holiday scheme revisions
    **/
    getHolidaySchemeRevisions(req: operations.GetHolidaySchemeRevisionsRequest, config?: AxiosRequestConfig): Promise<operations.GetHolidaySchemeRevisionsResponse>;
    /**
     * getHolidaySchemesByEffectiveDate - Get holiday schemes from employer at a given effective date.
     *
     * Get links to all holiday schemes for the employer on specified effective date.
    **/
    getHolidaySchemesByEffectiveDate(req: operations.GetHolidaySchemesByEffectiveDateRequest, config?: AxiosRequestConfig): Promise<operations.GetHolidaySchemesByEffectiveDateResponse>;
    /**
     * getHolidaySchemesFromEmployer - Get holiday schemes from employer.
     *
     * Get links to all holiday schemes for the specified employer.
    **/
    getHolidaySchemesFromEmployer(req: operations.GetHolidaySchemesFromEmployerRequest, config?: AxiosRequestConfig): Promise<operations.GetHolidaySchemesFromEmployerResponse>;
    /**
     * getHolidaySchemesWithTag - Get holiday schemes with tag
     *
     * Gets the holiday scheme with the tag
    **/
    getHolidaySchemesWithTag(req: operations.GetHolidaySchemesWithTagRequest, config?: AxiosRequestConfig): Promise<operations.GetHolidaySchemesWithTagResponse>;
    /**
     * getTagFromHolidayScheme - Get holiday scheme tag
     *
     * Gets the tag from the holiday scheme
    **/
    getTagFromHolidayScheme(req: operations.GetTagFromHolidaySchemeRequest, config?: AxiosRequestConfig): Promise<operations.GetTagFromHolidaySchemeResponse>;
    /**
     * getTagFromHolidaySchemeRevision - Get holiday scheme revision tag
     *
     * Gets the tag from the holiday scheme revision
    **/
    getTagFromHolidaySchemeRevision(req: operations.GetTagFromHolidaySchemeRevisionRequest, config?: AxiosRequestConfig): Promise<operations.GetTagFromHolidaySchemeRevisionResponse>;
    /**
     * getTagsFromHolidayScheme - Get all tags from the holiday scheme
     *
     * Gets all the tags from the holiday scheme
    **/
    getTagsFromHolidayScheme(req: operations.GetTagsFromHolidaySchemeRequest, config?: AxiosRequestConfig): Promise<operations.GetTagsFromHolidaySchemeResponse>;
    /**
     * getTagsFromHolidaySchemeRevision - Get all holiday scheme revision tags
     *
     * Gets all the tags from the holiday scheme revision
    **/
    getTagsFromHolidaySchemeRevision(req: operations.GetTagsFromHolidaySchemeRevisionRequest, config?: AxiosRequestConfig): Promise<operations.GetTagsFromHolidaySchemeRevisionResponse>;
    /**
     * patchHolidayScheme - Patches the holiday scheme
     *
     * Patches the specified holiday scheme with the supplied values
    **/
    patchHolidayScheme(req: operations.PatchHolidaySchemeRequest, config?: AxiosRequestConfig): Promise<operations.PatchHolidaySchemeResponse>;
    /**
     * postHolidaySchemeIntoEmployer - Create a new holiday scheme
     *
     * Create a new holiday scheme object
    **/
    postHolidaySchemeIntoEmployer(req: operations.PostHolidaySchemeIntoEmployerRequest, config?: AxiosRequestConfig): Promise<operations.PostHolidaySchemeIntoEmployerResponse>;
    /**
     * putHolidaySchemeIntoEmployer - Updates the holiday scheme
     *
     * Updates the existing specified holiday scheme object
    **/
    putHolidaySchemeIntoEmployer(req: operations.PutHolidaySchemeIntoEmployerRequest, config?: AxiosRequestConfig): Promise<operations.PutHolidaySchemeIntoEmployerResponse>;
    /**
     * putHolidaySchemeTag - Insert holiday scheme tag
     *
     * Inserts a new tag on the holiday scheme
    **/
    putHolidaySchemeTag(req: operations.PutHolidaySchemeTagRequest, config?: AxiosRequestConfig): Promise<operations.PutHolidaySchemeTagResponse>;
}
