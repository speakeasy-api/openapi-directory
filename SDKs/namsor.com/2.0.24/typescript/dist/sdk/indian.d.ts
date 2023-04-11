import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * INDIAN special features
 */
export declare class Indian {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * [USES 10 UNITS PER NAME] Infer the likely Indian name castegroup of a personal full name.
     */
    castegroupIndianFull(req: operations.CastegroupIndianFullRequest, security: operations.CastegroupIndianFullSecurity, config?: AxiosRequestConfig): Promise<operations.CastegroupIndianFullResponse>;
    /**
     * [USES 10 UNITS PER NAME] Infer the likely Indian name castegroup of up to 100 personal full names.
     */
    castegroupIndianFullBatch(req: shared.BatchPersonalNameSubdivisionIn, security: operations.CastegroupIndianFullBatchSecurity, config?: AxiosRequestConfig): Promise<operations.CastegroupIndianFullBatchResponse>;
    /**
     * [USES 10 UNITS PER NAME] Infer the likely religion of a personal Indian full name, provided the Indian state or Union territory (NB/ this can be inferred using the subclassification endpoint).
     */
    religion(req: operations.ReligionRequest, security: operations.ReligionSecurity, config?: AxiosRequestConfig): Promise<operations.ReligionResponse>;
    /**
     * [USES 10 UNITS PER NAME] Infer the likely religion of up to 100 personal full Indian names, provided the subclassification at State or Union territory level (NB/ can be inferred using the subclassification endpoint).
     */
    religionIndianFullBatch(req: shared.BatchPersonalNameSubdivisionIn, security: operations.ReligionIndianFullBatchSecurity, config?: AxiosRequestConfig): Promise<operations.ReligionIndianFullBatchResponse>;
    /**
     * [USES 10 UNITS PER NAME] Infer the likely Indian state of Union territory according to ISO 3166-2:IN based on the name.
     */
    subclassificationIndian(req: operations.SubclassificationIndianRequest, security: operations.SubclassificationIndianSecurity, config?: AxiosRequestConfig): Promise<operations.SubclassificationIndianResponse>;
    /**
     * [USES 10 UNITS PER NAME] Infer the likely Indian state of Union territory according to ISO 3166-2:IN based on a list of up to 100 names.
     */
    subclassificationIndianBatch(req: shared.BatchFirstLastNameGeoIn, security: operations.SubclassificationIndianBatchSecurity, config?: AxiosRequestConfig): Promise<operations.SubclassificationIndianBatchResponse>;
}
