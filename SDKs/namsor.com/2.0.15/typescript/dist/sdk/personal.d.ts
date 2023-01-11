import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Personal {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * corridor - [USES 20 UNITS PER NAME COUPLE] Infer several classifications for a cross border interaction between names (ex. remit, travel, intl com)
    **/
    corridor(req: operations.CorridorRequest, config?: AxiosRequestConfig): Promise<operations.CorridorResponse>;
    /**
     * corridorBatch - [USES 20 UNITS PER NAME PAIR] Infer several classifications for up to 100 cross border interaction between names (ex. remit, travel, intl com)
    **/
    corridorBatch(req: operations.CorridorBatchRequest, config?: AxiosRequestConfig): Promise<operations.CorridorBatchResponse>;
    /**
     * country - [USES 10 UNITS PER NAME] Infer the likely country of residence of a personal full name, or one surname. Assumes names as they are in the country of residence OR the country of origin.
    **/
    country(req: operations.CountryRequest, config?: AxiosRequestConfig): Promise<operations.CountryResponse>;
    /**
     * countryBatch - [USES 10 UNITS PER NAME] Infer the likely country of residence of up to 100 personal full names, or surnames. Assumes names as they are in the country of residence OR the country of origin.
    **/
    countryBatch(req: operations.CountryBatchRequest, config?: AxiosRequestConfig): Promise<operations.CountryBatchResponse>;
    /**
     * diaspora - [USES 20 UNITS PER NAME] Infer the likely ethnicity/diaspora of a personal name, given a country of residence ISO2 code (ex. US, CA, AU, NZ etc.)
    **/
    diaspora(req: operations.DiasporaRequest, config?: AxiosRequestConfig): Promise<operations.DiasporaResponse>;
    /**
     * diasporaBatch - [USES 20 UNITS PER NAME] Infer the likely ethnicity/diaspora of up to 100 personal names, given a country of residence ISO2 code (ex. US, CA, AU, NZ etc.)
    **/
    diasporaBatch(req: operations.DiasporaBatchRequest, config?: AxiosRequestConfig): Promise<operations.DiasporaBatchResponse>;
    /**
     * gender - Infer the likely gender of a name.
    **/
    gender(req: operations.GenderRequest, config?: AxiosRequestConfig): Promise<operations.GenderResponse>;
    /**
     * genderBatch - Infer the likely gender of up to 100 names, detecting automatically the cultural context.
    **/
    genderBatch(req: operations.GenderBatchRequest, config?: AxiosRequestConfig): Promise<operations.GenderBatchResponse>;
    /**
     * genderFull - Infer the likely gender of a full name, ex. John H. Smith
    **/
    genderFull(req: operations.GenderFullRequest, config?: AxiosRequestConfig): Promise<operations.GenderFullResponse>;
    /**
     * genderFullBatch - Infer the likely gender of up to 100 full names, detecting automatically the cultural context.
    **/
    genderFullBatch(req: operations.GenderFullBatchRequest, config?: AxiosRequestConfig): Promise<operations.GenderFullBatchResponse>;
    /**
     * genderFullGeo - Infer the likely gender of a full name, given a local context (ISO2 country code).
    **/
    genderFullGeo(req: operations.GenderFullGeoRequest, config?: AxiosRequestConfig): Promise<operations.GenderFullGeoResponse>;
    /**
     * genderFullGeoBatch - Infer the likely gender of up to 100 full names, with a given cultural context (country ISO2 code).
    **/
    genderFullGeoBatch(req: operations.GenderFullGeoBatchRequest, config?: AxiosRequestConfig): Promise<operations.GenderFullGeoBatchResponse>;
    /**
     * genderGeo - Infer the likely gender of a name, given a local context (ISO2 country code).
    **/
    genderGeo(req: operations.GenderGeoRequest, config?: AxiosRequestConfig): Promise<operations.GenderGeoResponse>;
    /**
     * genderGeoBatch - Infer the likely gender of up to 100 names, each given a local context (ISO2 country code).
    **/
    genderGeoBatch(req: operations.GenderGeoBatchRequest, config?: AxiosRequestConfig): Promise<operations.GenderGeoBatchResponse>;
    /**
     * origin - [USES 10 UNITS PER NAME] Infer the likely country of origin of a personal name. Assumes names as they are in the country of origin. For US, CA, AU, NZ and other melting-pots : use 'diaspora' instead.
    **/
    origin(req: operations.OriginRequest, config?: AxiosRequestConfig): Promise<operations.OriginResponse>;
    /**
     * originBatch - [USES 10 UNITS PER NAME] Infer the likely country of origin of up to 100 names, detecting automatically the cultural context.
    **/
    originBatch(req: operations.OriginBatchRequest, config?: AxiosRequestConfig): Promise<operations.OriginBatchResponse>;
    /**
     * parseName - Infer the likely first/last name structure of a name, ex. John Smith or SMITH, John or SMITH; John.
    **/
    parseName(req: operations.ParseNameRequest, config?: AxiosRequestConfig): Promise<operations.ParseNameResponse>;
    /**
     * parseNameBatch - Infer the likely first/last name structure of a name, ex. John Smith or SMITH, John or SMITH; John.
    **/
    parseNameBatch(req: operations.ParseNameBatchRequest, config?: AxiosRequestConfig): Promise<operations.ParseNameBatchResponse>;
    /**
     * parseNameGeo - Infer the likely first/last name structure of a name, ex. John Smith or SMITH, John or SMITH; John. For better accuracy, provide a geographic context.
    **/
    parseNameGeo(req: operations.ParseNameGeoRequest, config?: AxiosRequestConfig): Promise<operations.ParseNameGeoResponse>;
    /**
     * parseNameGeoBatch - Infer the likely first/last name structure of a name, ex. John Smith or SMITH, John or SMITH; John. Giving a local context improves precision.
    **/
    parseNameGeoBatch(req: operations.ParseNameGeoBatchRequest, config?: AxiosRequestConfig): Promise<operations.ParseNameGeoBatchResponse>;
    /**
     * usRaceEthnicity - [USES 10 UNITS PER NAME] Infer a US resident's likely race/ethnicity according to US Census taxonomy W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino). Optionally add header X-OPTION-USRACEETHNICITY-TAXONOMY: USRACEETHNICITY-6CLASSES for two additional classes, AI_AN (American Indian or Alaskan Native) and PI (Pacific Islander).
    **/
    usRaceEthnicity(req: operations.UsRaceEthnicityRequest, config?: AxiosRequestConfig): Promise<operations.UsRaceEthnicityResponse>;
    /**
     * usRaceEthnicityBatch - [USES 10 UNITS PER NAME] Infer up-to 100 US resident's likely race/ethnicity according to US Census taxonomy. Output is W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino). Optionally add header X-OPTION-USRACEETHNICITY-TAXONOMY: USRACEETHNICITY-6CLASSES for two additional classes, AI_AN (American Indian or Alaskan Native) and PI (Pacific Islander).
    **/
    usRaceEthnicityBatch(req: operations.UsRaceEthnicityBatchRequest, config?: AxiosRequestConfig): Promise<operations.UsRaceEthnicityBatchResponse>;
    /**
     * usRaceEthnicityZip5 - [USES 10 UNITS PER NAME] Infer a US resident's likely race/ethnicity according to US Census taxonomy, using (optional) ZIP5 code info. Output is W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino). Optionally add header X-OPTION-USRACEETHNICITY-TAXONOMY: USRACEETHNICITY-6CLASSES for two additional classes, AI_AN (American Indian or Alaskan Native) and PI (Pacific Islander).
    **/
    usRaceEthnicityZip5(req: operations.UsRaceEthnicityZip5Request, config?: AxiosRequestConfig): Promise<operations.UsRaceEthnicityZip5Response>;
    /**
     * usZipRaceEthnicityBatch - [USES 10 UNITS PER NAME] Infer up-to 100 US resident's likely race/ethnicity according to US Census taxonomy, with (optional) ZIP code. Output is W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino). Optionally add header X-OPTION-USRACEETHNICITY-TAXONOMY: USRACEETHNICITY-6CLASSES for two additional classes, AI_AN (American Indian or Alaskan Native) and PI (Pacific Islander).
    **/
    usZipRaceEthnicityBatch(req: operations.UsZipRaceEthnicityBatchRequest, config?: AxiosRequestConfig): Promise<operations.UsZipRaceEthnicityBatchResponse>;
}
