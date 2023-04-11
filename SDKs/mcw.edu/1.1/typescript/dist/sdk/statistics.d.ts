import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Stats Web Service
 */
export declare class Statistics {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Count of active objects by type, for specified species and date
     */
    getActiveObjectCountUsingGET(req: operations.GETActiveObjectCountUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.GETActiveObjectCountUsingGETResponse>;
    /**
     * Count difference of active objects, by type, for specified species and date range
     */
    getActiveObjectDiffUsingGET(req: operations.GETActiveObjectDiffUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.GETActiveObjectDiffUsingGETResponse>;
    /**
     * Count of gene types, for specified species and date
     */
    getGeneTypeCountUsingGET(req: operations.GETGeneTypeCountUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.GETGeneTypeCountUsingGETResponse>;
    /**
     * Count difference of gene types, for specified species and date range
     */
    getGeneTypeDiffUsingGET(req: operations.GETGeneTypeDiffUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.GETGeneTypeDiffUsingGETResponse>;
    /**
     * Count of objects with given status, for specified species and date
     */
    getObjectStatusCountUsingGET(req: operations.GETObjectStatusCountUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.GETObjectStatusCountUsingGETResponse>;
    /**
     * Count difference of objects with given status, for specified species and date range
     */
    getObjectStatusDiffUsingGET(req: operations.GETObjectStatusDiffUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.GETObjectStatusDiffUsingGETResponse>;
    /**
     * Count of objects with reference sequence(s), by object type, for specified species and date
     */
    getObjectsWithRefSeqCountUsingGET(req: operations.GETObjectsWithRefSeqCountUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.GETObjectsWithRefSeqCountUsingGETResponse>;
    /**
     * Count difference of objects with reference sequence(s), by object type, for specified species and date range
     */
    getObjectsWithRefSeqDiffUsingGET(req: operations.GETObjectsWithRefSeqDiffUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.GETObjectsWithRefSeqDiffUsingGETResponse>;
    /**
     * Count of objects with reference, by object type, for specified species and date
     */
    getObjectsWithReferenceCountUsingGET(req: operations.GETObjectsWithReferenceCountUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.GETObjectsWithReferenceCountUsingGETResponse>;
    /**
     * Count difference of objects with reference, by object type, for specified species and date range
     */
    getObjectsWithReferenceDiffUsingGET(req: operations.GETObjectsWithReferenceDiffUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.GETObjectsWithReferenceDiffUsingGETResponse>;
    /**
     * Count of objects with external database ids, by database id, for specified species, object type and date
     */
    getObjectsWithXDBsCountUsingGET(req: operations.GETObjectsWithXDBsCountUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.GETObjectsWithXDBsCountUsingGETResponse>;
    /**
     * Count difference of objects with external database ids, by database id, for specified species, object type and date range
     */
    getObjectsWithXDBsDiffUsingGET(req: operations.GETObjectsWithXDBsDiffUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.GETObjectsWithXDBsDiffUsingGETResponse>;
    /**
     * Count of protein interactions, for specified species and date
     */
    getProteinInteractionCountUsingGET(req: operations.GETProteinInteractionCountUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.GETProteinInteractionCountUsingGETResponse>;
    /**
     * Count difference of protein interactions, for specified species and date range
     */
    getProteinInteractionDiffUsingGET(req: operations.GETProteinInteractionDiffUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.GETProteinInteractionDiffUsingGETResponse>;
    /**
     * Count of strains, by qtl inheritance type, for specified species and date
     */
    getQtlInheritanceTypeCountUsingGET(req: operations.GETQtlInheritanceTypeCountUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.GETQtlInheritanceTypeCountUsingGETResponse>;
    /**
     * Count difference of strains, by qtl inheritance type, for specified species and date range
     */
    getQtlInheritanceTypeDiffUsingGET(req: operations.GETQtlInheritanceTypeDiffUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.GETQtlInheritanceTypeDiffUsingGETResponse>;
    /**
     * Count of retired objects by type, for specified species and date
     */
    getRetiredObjectCountUsingGET(req: operations.GETRetiredObjectCountUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.GETRetiredObjectCountUsingGETResponse>;
    /**
     * Count difference of retired objects, by type, for specified species and date range
     */
    getRetiredObjectDiffUsingGET(req: operations.GETRetiredObjectDiffUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.GETRetiredObjectDiffUsingGETResponse>;
    /**
     * Count of strain types, for specified species and date
     */
    getStrainTypeCountUsingGET(req: operations.GETStrainTypeCountUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.GETStrainTypeCountUsingGETResponse>;
    /**
     * Count difference of strain types, for specified species and date range
     */
    getStrainTypeDiffUsingGET(req: operations.GETStrainTypeDiffUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.GETStrainTypeDiffUsingGETResponse>;
    /**
     * getTermStats
     */
    getTermStatsUsingGET(req: operations.GETTermStatsUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.GETTermStatsUsingGETResponse>;
    /**
     * Count of withdrawn objects by type, for specified species and date
     */
    getWithdrawnObjectCountUsingGET(req: operations.GETWithdrawnObjectCountUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.GETWithdrawnObjectCountUsingGETResponse>;
    /**
     * Count difference of withdrawn objects, by type, for specified species and date range
     */
    getWithdrawnObjectDiffUsingGET(req: operations.GETWithdrawnObjectDiffUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.GETWithdrawnObjectDiffUsingGETResponse>;
    /**
     * Count of external database ids, for specied species and date
     */
    getXdbsCountUsingGET(req: operations.GETXdbsCountUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.GETXdbsCountUsingGETResponse>;
    /**
     * Count difference of external database ids, for specified species and date range
     */
    getXdbsDiffUsingGET(req: operations.GETXdbsDiffUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.GETXdbsDiffUsingGETResponse>;
}
