import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Japanese {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * genderJapaneseNameFull - Infer the likely gender of a Japanese full name ex. 王晓明
    **/
    genderJapaneseNameFull(req: operations.GenderJapaneseNameFullRequest, config?: AxiosRequestConfig): Promise<operations.GenderJapaneseNameFullResponse>;
    /**
     * genderJapaneseNameFullBatch - Infer the likely gender of up to 100 full names
    **/
    genderJapaneseNameFullBatch(req: operations.GenderJapaneseNameFullBatchRequest, config?: AxiosRequestConfig): Promise<operations.GenderJapaneseNameFullBatchResponse>;
    /**
     * genderJapaneseNamePinyin - Infer the likely gender of a Japanese name in LATIN (Pinyin).
    **/
    genderJapaneseNamePinyin(req: operations.GenderJapaneseNamePinyinRequest, config?: AxiosRequestConfig): Promise<operations.GenderJapaneseNamePinyinResponse>;
    /**
     * genderJapaneseNamePinyinBatch - Infer the likely gender of up to 100 Japanese names in LATIN (Pinyin).
    **/
    genderJapaneseNamePinyinBatch(req: operations.GenderJapaneseNamePinyinBatchRequest, config?: AxiosRequestConfig): Promise<operations.GenderJapaneseNamePinyinBatchResponse>;
    /**
     * japaneseNameGenderKanjiCandidatesBatch - Identify japanese name candidates in KANJI, based on the romanized name (firstName = japaneseGivenName; lastName=japaneseSurname) with KNOWN gender, ex. Yamamoto Sanae
    **/
    japaneseNameGenderKanjiCandidatesBatch(req: operations.JapaneseNameGenderKanjiCandidatesBatchRequest, config?: AxiosRequestConfig): Promise<operations.JapaneseNameGenderKanjiCandidatesBatchResponse>;
    /**
     * japaneseNameKanjiCandidates - Identify japanese name candidates in KANJI, based on the romanized name ex. Yamamoto Sanae - and a known gender.
    **/
    japaneseNameKanjiCandidates(req: operations.JapaneseNameKanjiCandidatesRequest, config?: AxiosRequestConfig): Promise<operations.JapaneseNameKanjiCandidatesResponse>;
    /**
     * japaneseNameKanjiCandidatesBatch - Identify japanese name candidates in KANJI, based on the romanized name (firstName = japaneseGivenName; lastName=japaneseSurname), ex. Yamamoto Sanae
    **/
    japaneseNameKanjiCandidatesBatch(req: operations.JapaneseNameKanjiCandidatesBatchRequest, config?: AxiosRequestConfig): Promise<operations.JapaneseNameKanjiCandidatesBatchResponse>;
    /**
     * japaneseNameKanjiCandidates1 - Identify japanese name candidates in KANJI, based on the romanized name ex. Yamamoto Sanae
    **/
    japaneseNameKanjiCandidates1(req: operations.JapaneseNameKanjiCandidates1Request, config?: AxiosRequestConfig): Promise<operations.JapaneseNameKanjiCandidates1Response>;
    /**
     * japaneseNameLatinCandidates - Romanize japanese name, based on the name in Kanji.
    **/
    japaneseNameLatinCandidates(req: operations.JapaneseNameLatinCandidatesRequest, config?: AxiosRequestConfig): Promise<operations.JapaneseNameLatinCandidatesResponse>;
    /**
     * japaneseNameLatinCandidatesBatch - Romanize japanese names, based on the name in KANJI
    **/
    japaneseNameLatinCandidatesBatch(req: operations.JapaneseNameLatinCandidatesBatchRequest, config?: AxiosRequestConfig): Promise<operations.JapaneseNameLatinCandidatesBatchResponse>;
    /**
     * japaneseNameMatch - Return a score for matching Japanese name in KANJI ex. 山本 早苗 with a romanized name ex. Yamamoto Sanae
    **/
    japaneseNameMatch(req: operations.JapaneseNameMatchRequest, config?: AxiosRequestConfig): Promise<operations.JapaneseNameMatchResponse>;
    /**
     * japaneseNameMatchBatch - Return a score for matching a list of Japanese names in KANJI ex. 山本 早苗 with romanized names ex. Yamamoto Sanae
    **/
    japaneseNameMatchBatch(req: operations.JapaneseNameMatchBatchRequest, config?: AxiosRequestConfig): Promise<operations.JapaneseNameMatchBatchResponse>;
    /**
     * japaneseNameMatchFeedbackLoop - [CREDITS 1 UNIT] Feedback loop to better perform matching Japanese name in KANJI ex. 山本 早苗 with a romanized name ex. Yamamoto Sanae
    **/
    japaneseNameMatchFeedbackLoop(req: operations.JapaneseNameMatchFeedbackLoopRequest, config?: AxiosRequestConfig): Promise<operations.JapaneseNameMatchFeedbackLoopResponse>;
    /**
     * parseJapaneseName - Infer the likely first/last name structure of a name, ex. 山本 早苗 or Yamamoto Sanae
    **/
    parseJapaneseName(req: operations.ParseJapaneseNameRequest, config?: AxiosRequestConfig): Promise<operations.ParseJapaneseNameResponse>;
    /**
     * parseJapaneseNameBatch - Infer the likely first/last name structure of a name, ex. 山本 早苗 or Yamamoto Sanae
    **/
    parseJapaneseNameBatch(req: operations.ParseJapaneseNameBatchRequest, config?: AxiosRequestConfig): Promise<operations.ParseJapaneseNameBatchResponse>;
}
