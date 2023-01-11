import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Chinese {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * chineseNameCandidates - Identify Chinese name candidates, based on the romanized name ex. Wang Xiaoming
    **/
    chineseNameCandidates(req: operations.ChineseNameCandidatesRequest, config?: AxiosRequestConfig): Promise<operations.ChineseNameCandidatesResponse>;
    /**
     * chineseNameCandidatesBatch - Identify Chinese name candidates, based on the romanized name (firstName = chineseGivenName; lastName=chineseSurname), ex. Wang Xiaoming
    **/
    chineseNameCandidatesBatch(req: operations.ChineseNameCandidatesBatchRequest, config?: AxiosRequestConfig): Promise<operations.ChineseNameCandidatesBatchResponse>;
    /**
     * chineseNameCandidatesGenderBatch - Identify Chinese name candidates, based on the romanized name (firstName = chineseGivenName; lastName=chineseSurname) ex. Wang Xiaoming.
    **/
    chineseNameCandidatesGenderBatch(req: operations.ChineseNameCandidatesGenderBatchRequest, config?: AxiosRequestConfig): Promise<operations.ChineseNameCandidatesGenderBatchResponse>;
    /**
     * chineseNameGenderCandidates - Identify Chinese name candidates, based on the romanized name ex. Wang Xiaoming - having a known gender ('male' or 'female')
    **/
    chineseNameGenderCandidates(req: operations.ChineseNameGenderCandidatesRequest, config?: AxiosRequestConfig): Promise<operations.ChineseNameGenderCandidatesResponse>;
    /**
     * chineseNameMatch - Return a score for matching Chinese name ex. 王晓明 with a romanized name ex. Wang Xiaoming
    **/
    chineseNameMatch(req: operations.ChineseNameMatchRequest, config?: AxiosRequestConfig): Promise<operations.ChineseNameMatchResponse>;
    /**
     * chineseNameMatchBatch - Identify Chinese name candidates, based on the romanized name (firstName = chineseGivenName; lastName=chineseSurname), ex. Wang Xiaoming
    **/
    chineseNameMatchBatch(req: operations.ChineseNameMatchBatchRequest, config?: AxiosRequestConfig): Promise<operations.ChineseNameMatchBatchResponse>;
    /**
     * genderChineseName - Infer the likely gender of a Chinese full name ex. 王晓明
    **/
    genderChineseName(req: operations.GenderChineseNameRequest, config?: AxiosRequestConfig): Promise<operations.GenderChineseNameResponse>;
    /**
     * genderChineseNameBatch - Infer the likely gender of up to 100 full names ex. 王晓明
    **/
    genderChineseNameBatch(req: operations.GenderChineseNameBatchRequest, config?: AxiosRequestConfig): Promise<operations.GenderChineseNameBatchResponse>;
    /**
     * genderChineseNamePinyin - Infer the likely gender of a Chinese name in LATIN (Pinyin).
    **/
    genderChineseNamePinyin(req: operations.GenderChineseNamePinyinRequest, config?: AxiosRequestConfig): Promise<operations.GenderChineseNamePinyinResponse>;
    /**
     * genderChineseNamePinyinBatch - Infer the likely gender of up to 100 Chinese names in LATIN (Pinyin).
    **/
    genderChineseNamePinyinBatch(req: operations.GenderChineseNamePinyinBatchRequest, config?: AxiosRequestConfig): Promise<operations.GenderChineseNamePinyinBatchResponse>;
    /**
     * parseChineseName - Infer the likely first/last name structure of a name, ex. 王晓明 -> 王(surname) 晓明(given name)
    **/
    parseChineseName(req: operations.ParseChineseNameRequest, config?: AxiosRequestConfig): Promise<operations.ParseChineseNameResponse>;
    /**
     * parseChineseNameBatch - Infer the likely first/last name structure of a name, ex. 王晓明 -> 王(surname) 晓明(given name).
    **/
    parseChineseNameBatch(req: operations.ParseChineseNameBatchRequest, config?: AxiosRequestConfig): Promise<operations.ParseChineseNameBatchResponse>;
    /**
     * pinyinChineseName - Romanize the Chinese name to Pinyin, ex. 王晓明 -> Wang (surname) Xiaoming (given name)
    **/
    pinyinChineseName(req: operations.PinyinChineseNameRequest, config?: AxiosRequestConfig): Promise<operations.PinyinChineseNameResponse>;
    /**
     * pinyinChineseNameBatch - Romanize a list of Chinese name to Pinyin, ex. 王晓明 -> Wang (surname) Xiaoming (given name).
    **/
    pinyinChineseNameBatch(req: operations.PinyinChineseNameBatchRequest, config?: AxiosRequestConfig): Promise<operations.PinyinChineseNameBatchResponse>;
}
