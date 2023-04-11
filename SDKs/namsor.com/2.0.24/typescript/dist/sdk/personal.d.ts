import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Personal names (anthroponyms) : gender, country origin/ethnicity, diaspora, US 'race'/ethniciy
 */
export declare class Personal {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * [USES 20 UNITS PER NAME COUPLE] Infer several classifications for a cross border interaction between names (ex. remit, travel, intl com)
     */
    corridor(req: operations.CorridorRequest, security: operations.CorridorSecurity, config?: AxiosRequestConfig): Promise<operations.CorridorResponse>;
    /**
     * [USES 20 UNITS PER NAME PAIR] Infer several classifications for up to 100 cross border interaction between names (ex. remit, travel, intl com)
     */
    corridorBatch(req: shared.BatchCorridorIn, security: operations.CorridorBatchSecurity, config?: AxiosRequestConfig): Promise<operations.CorridorBatchResponse>;
    /**
     * [USES 10 UNITS PER NAME] Infer the likely country of residence of a personal full name, or one surname. Assumes names as they are in the country of residence OR the country of origin.
     */
    country(req: operations.CountryRequest, security: operations.CountrySecurity, config?: AxiosRequestConfig): Promise<operations.CountryResponse>;
    /**
     * [USES 10 UNITS PER NAME] Infer the likely country of residence of up to 100 personal full names, or surnames. Assumes names as they are in the country of residence OR the country of origin.
     */
    countryBatch(req: shared.BatchPersonalNameIn, security: operations.CountryBatchSecurity, config?: AxiosRequestConfig): Promise<operations.CountryBatchResponse>;
    /**
     * [USES 20 UNITS PER NAME] Infer the likely ethnicity/diaspora of a personal name, given a country of residence ISO2 code (ex. US, CA, AU, NZ etc.)
     */
    diaspora(req: operations.DiasporaRequest, security: operations.DiasporaSecurity, config?: AxiosRequestConfig): Promise<operations.DiasporaResponse>;
    /**
     * [USES 20 UNITS PER NAME] Infer the likely ethnicity/diaspora of up to 100 personal names, given a country of residence ISO2 code (ex. US, CA, AU, NZ etc.)
     */
    diasporaBatch(req: shared.BatchFirstLastNameGeoIn, security: operations.DiasporaBatchSecurity, config?: AxiosRequestConfig): Promise<operations.DiasporaBatchResponse>;
    /**
     * Infer the likely gender of a just a fiven name, assuming default 'US' local context. Please use preferably full names and local geographic context for better accuracy.
     */
    gender(req: operations.GenderRequest, security: operations.GenderSecurity, config?: AxiosRequestConfig): Promise<operations.GenderResponse>;
    /**
     * Infer the likely gender of up to 100 names, detecting automatically the cultural context.
     */
    genderBatch(req: shared.BatchFirstLastNameIn, security: operations.GenderBatchSecurity, config?: AxiosRequestConfig): Promise<operations.GenderBatchResponse>;
    /**
     * Infer the likely gender of a full name, ex. John H. Smith
     */
    genderFull(req: operations.GenderFullRequest, security: operations.GenderFullSecurity, config?: AxiosRequestConfig): Promise<operations.GenderFullResponse>;
    /**
     * Infer the likely gender of up to 100 full names, detecting automatically the cultural context.
     */
    genderFullBatch(req: shared.BatchPersonalNameIn, security: operations.GenderFullBatchSecurity, config?: AxiosRequestConfig): Promise<operations.GenderFullBatchResponse>;
    /**
     * Infer the likely gender of a full name, given a local context (ISO2 country code).
     */
    genderFullGeo(req: operations.GenderFullGeoRequest, security: operations.GenderFullGeoSecurity, config?: AxiosRequestConfig): Promise<operations.GenderFullGeoResponse>;
    /**
     * Infer the likely gender of up to 100 full names, with a given cultural context (country ISO2 code).
     */
    genderFullGeoBatch(req: shared.BatchPersonalNameGeoIn, security: operations.GenderFullGeoBatchSecurity, config?: AxiosRequestConfig): Promise<operations.GenderFullGeoBatchResponse>;
    /**
     * Infer the likely gender of a name, given a local context (ISO2 country code).
     */
    genderGeo(req: operations.GenderGeoRequest, security: operations.GenderGeoSecurity, config?: AxiosRequestConfig): Promise<operations.GenderGeoResponse>;
    /**
     * Infer the likely gender of up to 100 names, each given a local context (ISO2 country code).
     */
    genderGeoBatch(req: shared.BatchFirstLastNameGeoIn, security: operations.GenderGeoBatchSecurity, config?: AxiosRequestConfig): Promise<operations.GenderGeoBatchResponse>;
    /**
     * Infer the likely gender of a name.
     */
    gender1(req: operations.Gender1Request, security: operations.Gender1Security, config?: AxiosRequestConfig): Promise<operations.Gender1Response>;
    /**
     * [USES 10 UNITS PER NAME] Infer the likely country of origin of a personal name. Assumes names as they are in the country of origin. For US, CA, AU, NZ and other melting-pots : use 'diaspora' instead.
     */
    origin(req: operations.OriginRequest, security: operations.OriginSecurity, config?: AxiosRequestConfig): Promise<operations.OriginResponse>;
    /**
     * [USES 10 UNITS PER NAME] Infer the likely country of origin of up to 100 names, detecting automatically the cultural context.
     */
    originBatch(req: shared.BatchFirstLastNameIn, security: operations.OriginBatchSecurity, config?: AxiosRequestConfig): Promise<operations.OriginBatchResponse>;
    /**
     * Infer the likely first/last name structure of a name, ex. John Smith or SMITH, John or SMITH; John.
     */
    parseName(req: operations.ParseNameRequest, security: operations.ParseNameSecurity, config?: AxiosRequestConfig): Promise<operations.ParseNameResponse>;
    /**
     * Infer the likely first/last name structure of a name, ex. John Smith or SMITH, John or SMITH; John.
     */
    parseNameBatch(req: shared.BatchPersonalNameIn, security: operations.ParseNameBatchSecurity, config?: AxiosRequestConfig): Promise<operations.ParseNameBatchResponse>;
    /**
     * Infer the likely first/last name structure of a name, ex. John Smith or SMITH, John or SMITH; John. For better accuracy, provide a geographic context.
     */
    parseNameGeo(req: operations.ParseNameGeoRequest, security: operations.ParseNameGeoSecurity, config?: AxiosRequestConfig): Promise<operations.ParseNameGeoResponse>;
    /**
     * Infer the likely first/last name structure of a name, ex. John Smith or SMITH, John or SMITH; John. Giving a local context improves precision.
     */
    parseNameGeoBatch(req: shared.BatchPersonalNameGeoIn, security: operations.ParseNameGeoBatchSecurity, config?: AxiosRequestConfig): Promise<operations.ParseNameGeoBatchResponse>;
    /**
     * [USES 10 UNITS PER NAME] Infer the likely religion of a personal full name. NB: only for INDIA (as of current version).
     */
    religionFull(req: operations.ReligionFullRequest, security: operations.ReligionFullSecurity, config?: AxiosRequestConfig): Promise<operations.ReligionFullResponse>;
    /**
     * [USES 10 UNITS PER NAME] Infer the likely religion of up to 100 personal full names. NB: only for India as of currently.
     */
    religionFullBatch(req: shared.BatchPersonalNameGeoSubdivisionIn, security: operations.ReligionFullBatchSecurity, config?: AxiosRequestConfig): Promise<operations.ReligionFullBatchResponse>;
    /**
     * [USES 10 UNITS PER NAME] Infer the likely origin of a name at a country subclassification level (state or regeion). Initially, this is only supported for India (ISO2 code 'IN').
     */
    subclassification(req: operations.SubclassificationRequest, security: operations.SubclassificationSecurity, config?: AxiosRequestConfig): Promise<operations.SubclassificationResponse>;
    /**
     * [USES 10 UNITS PER NAME] Infer the likely origin of a list of up to 100 names at a country subclassification level (state or regeion). Initially, this is only supported for India (ISO2 code 'IN').
     */
    subclassificationBatch(req: shared.BatchFirstLastNameGeoIn, security: operations.SubclassificationBatchSecurity, config?: AxiosRequestConfig): Promise<operations.SubclassificationBatchResponse>;
    /**
     * [USES 10 UNITS PER NAME] Infer a US resident's likely race/ethnicity according to US Census taxonomy W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino). Optionally add header X-OPTION-USRACEETHNICITY-TAXONOMY: USRACEETHNICITY-6CLASSES for two additional classes, AI_AN (American Indian or Alaskan Native) and PI (Pacific Islander).
     */
    usRaceEthnicity(req: operations.UsRaceEthnicityRequest, security: operations.UsRaceEthnicitySecurity, config?: AxiosRequestConfig): Promise<operations.UsRaceEthnicityResponse>;
    /**
     * [USES 10 UNITS PER NAME] Infer up-to 100 US resident's likely race/ethnicity according to US Census taxonomy. Output is W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino). Optionally add header X-OPTION-USRACEETHNICITY-TAXONOMY: USRACEETHNICITY-6CLASSES for two additional classes, AI_AN (American Indian or Alaskan Native) and PI (Pacific Islander).
     */
    usRaceEthnicityBatch(req: shared.BatchFirstLastNameGeoIn, security: operations.UsRaceEthnicityBatchSecurity, config?: AxiosRequestConfig): Promise<operations.UsRaceEthnicityBatchResponse>;
    /**
     * [USES 10 UNITS PER NAME] Infer a US resident's likely race/ethnicity according to US Census taxonomy, using (optional) ZIP5 code info. Output is W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino). Optionally add header X-OPTION-USRACEETHNICITY-TAXONOMY: USRACEETHNICITY-6CLASSES for two additional classes, AI_AN (American Indian or Alaskan Native) and PI (Pacific Islander).
     */
    usRaceEthnicityZip5(req: operations.UsRaceEthnicityZip5Request, security: operations.UsRaceEthnicityZip5Security, config?: AxiosRequestConfig): Promise<operations.UsRaceEthnicityZip5Response>;
    /**
     * [USES 10 UNITS PER NAME] Infer up-to 100 US resident's likely race/ethnicity according to US Census taxonomy, with (optional) ZIP code. Output is W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino). Optionally add header X-OPTION-USRACEETHNICITY-TAXONOMY: USRACEETHNICITY-6CLASSES for two additional classes, AI_AN (American Indian or Alaskan Native) and PI (Pacific Islander).
     */
    usZipRaceEthnicityBatch(req: shared.BatchFirstLastNameGeoZippedIn, security: operations.UsZipRaceEthnicityBatchSecurity, config?: AxiosRequestConfig): Promise<operations.UsZipRaceEthnicityBatchResponse>;
}
