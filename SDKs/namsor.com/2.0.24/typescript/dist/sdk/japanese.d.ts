import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * JAPANESE special features
 */
export declare class Japanese {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Infer the likely gender of a Japanese full name ex. 王晓明
     */
    genderJapaneseNameFull(req: operations.GenderJapaneseNameFullRequest, security: operations.GenderJapaneseNameFullSecurity, config?: AxiosRequestConfig): Promise<operations.GenderJapaneseNameFullResponse>;
    /**
     * Infer the likely gender of up to 100 full names
     */
    genderJapaneseNameFullBatch(req: shared.BatchPersonalNameIn, security: operations.GenderJapaneseNameFullBatchSecurity, config?: AxiosRequestConfig): Promise<operations.GenderJapaneseNameFullBatchResponse>;
    /**
     * Infer the likely gender of a Japanese name in LATIN (Pinyin).
     */
    genderJapaneseNamePinyin(req: operations.GenderJapaneseNamePinyinRequest, security: operations.GenderJapaneseNamePinyinSecurity, config?: AxiosRequestConfig): Promise<operations.GenderJapaneseNamePinyinResponse>;
    /**
     * Infer the likely gender of up to 100 Japanese names in LATIN (Pinyin).
     */
    genderJapaneseNamePinyinBatch(req: shared.BatchFirstLastNameIn, security: operations.GenderJapaneseNamePinyinBatchSecurity, config?: AxiosRequestConfig): Promise<operations.GenderJapaneseNamePinyinBatchResponse>;
    /**
     * Identify japanese name candidates in KANJI, based on the romanized name (firstName = japaneseGivenName; lastName=japaneseSurname) with KNOWN gender, ex. Yamamoto Sanae
     */
    japaneseNameGenderKanjiCandidatesBatch(req: shared.BatchFirstLastNameGenderIn, security: operations.JapaneseNameGenderKanjiCandidatesBatchSecurity, config?: AxiosRequestConfig): Promise<operations.JapaneseNameGenderKanjiCandidatesBatchResponse>;
    /**
     * Identify japanese name candidates in KANJI, based on the romanized name ex. Yamamoto Sanae
     */
    japaneseNameKanjiCandidates(req: operations.JapaneseNameKanjiCandidatesRequest, security: operations.JapaneseNameKanjiCandidatesSecurity, config?: AxiosRequestConfig): Promise<operations.JapaneseNameKanjiCandidatesResponse>;
    /**
     * Identify japanese name candidates in KANJI, based on the romanized name (firstName = japaneseGivenName; lastName=japaneseSurname), ex. Yamamoto Sanae
     */
    japaneseNameKanjiCandidatesBatch(req: shared.BatchFirstLastNameIn, security: operations.JapaneseNameKanjiCandidatesBatchSecurity, config?: AxiosRequestConfig): Promise<operations.JapaneseNameKanjiCandidatesBatchResponse>;
    /**
     * Identify japanese name candidates in KANJI, based on the romanized name ex. Yamamoto Sanae - and a known gender.
     */
    japaneseNameKanjiCandidates1(req: operations.JapaneseNameKanjiCandidates1Request, security: operations.JapaneseNameKanjiCandidates1Security, config?: AxiosRequestConfig): Promise<operations.JapaneseNameKanjiCandidates1Response>;
    /**
     * Romanize japanese name, based on the name in Kanji.
     */
    japaneseNameLatinCandidates(req: operations.JapaneseNameLatinCandidatesRequest, security: operations.JapaneseNameLatinCandidatesSecurity, config?: AxiosRequestConfig): Promise<operations.JapaneseNameLatinCandidatesResponse>;
    /**
     * Romanize japanese names, based on the name in KANJI
     */
    japaneseNameLatinCandidatesBatch(req: shared.BatchFirstLastNameIn, security: operations.JapaneseNameLatinCandidatesBatchSecurity, config?: AxiosRequestConfig): Promise<operations.JapaneseNameLatinCandidatesBatchResponse>;
    /**
     * Return a score for matching Japanese name in KANJI ex. 山本 早苗 with a romanized name ex. Yamamoto Sanae
     */
    japaneseNameMatch(req: operations.JapaneseNameMatchRequest, security: operations.JapaneseNameMatchSecurity, config?: AxiosRequestConfig): Promise<operations.JapaneseNameMatchResponse>;
    /**
     * Return a score for matching a list of Japanese names in KANJI ex. 山本 早苗 with romanized names ex. Yamamoto Sanae
     */
    japaneseNameMatchBatch(req: shared.BatchMatchPersonalFirstLastNameIn, security: operations.JapaneseNameMatchBatchSecurity, config?: AxiosRequestConfig): Promise<operations.JapaneseNameMatchBatchResponse>;
    /**
     * [CREDITS 1 UNIT] Feedback loop to better perform matching Japanese name in KANJI ex. 山本 早苗 with a romanized name ex. Yamamoto Sanae
     */
    japaneseNameMatchFeedbackLoop(req: operations.JapaneseNameMatchFeedbackLoopRequest, security: operations.JapaneseNameMatchFeedbackLoopSecurity, config?: AxiosRequestConfig): Promise<operations.JapaneseNameMatchFeedbackLoopResponse>;
    /**
     * Infer the likely first/last name structure of a name, ex. 山本 早苗 or Yamamoto Sanae
     */
    parseJapaneseName(req: operations.ParseJapaneseNameRequest, security: operations.ParseJapaneseNameSecurity, config?: AxiosRequestConfig): Promise<operations.ParseJapaneseNameResponse>;
    /**
     * Infer the likely first/last name structure of a name, ex. 山本 早苗 or Yamamoto Sanae
     */
    parseJapaneseNameBatch(req: shared.BatchPersonalNameIn, security: operations.ParseJapaneseNameBatchSecurity, config?: AxiosRequestConfig): Promise<operations.ParseJapaneseNameBatchResponse>;
}
