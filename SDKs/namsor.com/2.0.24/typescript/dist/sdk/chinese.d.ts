import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * CHINESE special features
 */
export declare class Chinese {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Identify Chinese name candidates, based on the romanized name ex. Wang Xiaoming
     */
    chineseNameCandidates(req: operations.ChineseNameCandidatesRequest, security: operations.ChineseNameCandidatesSecurity, config?: AxiosRequestConfig): Promise<operations.ChineseNameCandidatesResponse>;
    /**
     * Identify Chinese name candidates, based on the romanized name (firstName = chineseGivenName; lastName=chineseSurname), ex. Wang Xiaoming
     */
    chineseNameCandidatesBatch(req: shared.BatchFirstLastNameIn, security: operations.ChineseNameCandidatesBatchSecurity, config?: AxiosRequestConfig): Promise<operations.ChineseNameCandidatesBatchResponse>;
    /**
     * Identify Chinese name candidates, based on the romanized name (firstName = chineseGivenName; lastName=chineseSurname) ex. Wang Xiaoming.
     */
    chineseNameCandidatesGenderBatch(req: shared.BatchFirstLastNameGenderIn, security: operations.ChineseNameCandidatesGenderBatchSecurity, config?: AxiosRequestConfig): Promise<operations.ChineseNameCandidatesGenderBatchResponse>;
    /**
     * Identify Chinese name candidates, based on the romanized name ex. Wang Xiaoming - having a known gender ('male' or 'female')
     */
    chineseNameGenderCandidates(req: operations.ChineseNameGenderCandidatesRequest, security: operations.ChineseNameGenderCandidatesSecurity, config?: AxiosRequestConfig): Promise<operations.ChineseNameGenderCandidatesResponse>;
    /**
     * Return a score for matching Chinese name ex. 王晓明 with a romanized name ex. Wang Xiaoming
     */
    chineseNameMatch(req: operations.ChineseNameMatchRequest, security: operations.ChineseNameMatchSecurity, config?: AxiosRequestConfig): Promise<operations.ChineseNameMatchResponse>;
    /**
     * Identify Chinese name candidates, based on the romanized name (firstName = chineseGivenName; lastName=chineseSurname), ex. Wang Xiaoming
     */
    chineseNameMatchBatch(req: shared.BatchMatchPersonalFirstLastNameIn, security: operations.ChineseNameMatchBatchSecurity, config?: AxiosRequestConfig): Promise<operations.ChineseNameMatchBatchResponse>;
    /**
     * Infer the likely gender of a Chinese full name ex. 王晓明
     */
    genderChineseName(req: operations.GenderChineseNameRequest, security: operations.GenderChineseNameSecurity, config?: AxiosRequestConfig): Promise<operations.GenderChineseNameResponse>;
    /**
     * Infer the likely gender of up to 100 full names ex. 王晓明
     */
    genderChineseNameBatch(req: shared.BatchPersonalNameIn, security: operations.GenderChineseNameBatchSecurity, config?: AxiosRequestConfig): Promise<operations.GenderChineseNameBatchResponse>;
    /**
     * Infer the likely gender of a Chinese name in LATIN (Pinyin).
     */
    genderChineseNamePinyin(req: operations.GenderChineseNamePinyinRequest, security: operations.GenderChineseNamePinyinSecurity, config?: AxiosRequestConfig): Promise<operations.GenderChineseNamePinyinResponse>;
    /**
     * Infer the likely gender of up to 100 Chinese names in LATIN (Pinyin).
     */
    genderChineseNamePinyinBatch(req: shared.BatchFirstLastNameIn, security: operations.GenderChineseNamePinyinBatchSecurity, config?: AxiosRequestConfig): Promise<operations.GenderChineseNamePinyinBatchResponse>;
    /**
     * Infer the likely first/last name structure of a name, ex. 王晓明 -> 王(surname) 晓明(given name)
     */
    parseChineseName(req: operations.ParseChineseNameRequest, security: operations.ParseChineseNameSecurity, config?: AxiosRequestConfig): Promise<operations.ParseChineseNameResponse>;
    /**
     * Infer the likely first/last name structure of a name, ex. 王晓明 -> 王(surname) 晓明(given name).
     */
    parseChineseNameBatch(req: shared.BatchPersonalNameIn, security: operations.ParseChineseNameBatchSecurity, config?: AxiosRequestConfig): Promise<operations.ParseChineseNameBatchResponse>;
    /**
     * Romanize the Chinese name to Pinyin, ex. 王晓明 -> Wang (surname) Xiaoming (given name)
     */
    pinyinChineseName(req: operations.PinyinChineseNameRequest, security: operations.PinyinChineseNameSecurity, config?: AxiosRequestConfig): Promise<operations.PinyinChineseNameResponse>;
    /**
     * Romanize a list of Chinese name to Pinyin, ex. 王晓明 -> Wang (surname) Xiaoming (given name).
     */
    pinyinChineseNameBatch(req: shared.BatchPersonalNameIn, security: operations.PinyinChineseNameBatchSecurity, config?: AxiosRequestConfig): Promise<operations.PinyinChineseNameBatchResponse>;
}
