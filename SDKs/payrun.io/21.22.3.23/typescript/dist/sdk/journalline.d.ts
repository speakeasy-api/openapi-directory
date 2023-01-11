import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class JournalLine {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteJournalLineTag - Delete journal line tag
     *
     * Deletes a tag from the journal line
    **/
    deleteJournalLineTag(req: operations.DeleteJournalLineTagRequest, config?: AxiosRequestConfig): Promise<operations.DeleteJournalLineTagResponse>;
    /**
     * getAllJournalLineTags - Get all journal line tags
     *
     * Gets all the journal line tags
    **/
    getAllJournalLineTags(req: operations.GetAllJournalLineTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetAllJournalLineTagsResponse>;
    /**
     * getAllJournalLinesWithTag - Get links to tagged journal lines
     *
     * Gets the journal lines with the specified tag
    **/
    getAllJournalLinesWithTag(req: operations.GetAllJournalLinesWithTagRequest, config?: AxiosRequestConfig): Promise<operations.GetAllJournalLinesWithTagResponse>;
    /**
     * getTagFromJournalLine - Get journal line tag
     *
     * Gets a tag from the journal line
    **/
    getTagFromJournalLine(req: operations.GetTagFromJournalLineRequest, config?: AxiosRequestConfig): Promise<operations.GetTagFromJournalLineResponse>;
    /**
     * getTagsFromJournalLine - Get tags from journal line
     *
     * Gets all tags from the journal line
    **/
    getTagsFromJournalLine(req: operations.GetTagsFromJournalLineRequest, config?: AxiosRequestConfig): Promise<operations.GetTagsFromJournalLineResponse>;
    /**
     * putJournalLineTag - Insert journal line tag
     *
     * Inserts a tag on the journal line
    **/
    putJournalLineTag(req: operations.PutJournalLineTagRequest, config?: AxiosRequestConfig): Promise<operations.PutJournalLineTagResponse>;
}
