import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class JournalLine {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete journal line tag
     *
     * @remarks
     * Deletes a tag from the journal line
     */
    deleteJournalLineTag(req: operations.DeleteJournalLineTagRequest, config?: AxiosRequestConfig): Promise<operations.DeleteJournalLineTagResponse>;
    /**
     * Get all journal line tags
     *
     * @remarks
     * Gets all the journal line tags
     */
    getAllJournalLineTags(req: operations.GetAllJournalLineTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetAllJournalLineTagsResponse>;
    /**
     * Get links to tagged journal lines
     *
     * @remarks
     * Gets the journal lines with the specified tag
     */
    getAllJournalLinesWithTag(req: operations.GetAllJournalLinesWithTagRequest, config?: AxiosRequestConfig): Promise<operations.GetAllJournalLinesWithTagResponse>;
    /**
     * Get journal line tag
     *
     * @remarks
     * Gets a tag from the journal line
     */
    getTagFromJournalLine(req: operations.GetTagFromJournalLineRequest, config?: AxiosRequestConfig): Promise<operations.GetTagFromJournalLineResponse>;
    /**
     * Get tags from journal line
     *
     * @remarks
     * Gets all tags from the journal line
     */
    getTagsFromJournalLine(req: operations.GetTagsFromJournalLineRequest, config?: AxiosRequestConfig): Promise<operations.GetTagsFromJournalLineResponse>;
    /**
     * Insert journal line tag
     *
     * @remarks
     * Inserts a tag on the journal line
     */
    putJournalLineTag(req: operations.PutJournalLineTagRequest, config?: AxiosRequestConfig): Promise<operations.PutJournalLineTagResponse>;
}
