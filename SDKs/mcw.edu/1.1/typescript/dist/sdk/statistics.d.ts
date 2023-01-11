import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Statistics {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getActiveObjectCountUsingGet - Count of active objects by type, for specified species and date
    **/
    getActiveObjectCountUsingGet(req: operations.GetActiveObjectCountUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetActiveObjectCountUsingGetResponse>;
    /**
     * getActiveObjectDiffUsingGet - Count difference of active objects, by type, for specified species and date range
    **/
    getActiveObjectDiffUsingGet(req: operations.GetActiveObjectDiffUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetActiveObjectDiffUsingGetResponse>;
    /**
     * getGeneTypeCountUsingGet - Count of gene types, for specified species and date
    **/
    getGeneTypeCountUsingGet(req: operations.GetGeneTypeCountUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetGeneTypeCountUsingGetResponse>;
    /**
     * getGeneTypeDiffUsingGet - Count difference of gene types, for specified species and date range
    **/
    getGeneTypeDiffUsingGet(req: operations.GetGeneTypeDiffUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetGeneTypeDiffUsingGetResponse>;
    /**
     * getObjectStatusCountUsingGet - Count of objects with given status, for specified species and date
    **/
    getObjectStatusCountUsingGet(req: operations.GetObjectStatusCountUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetObjectStatusCountUsingGetResponse>;
    /**
     * getObjectStatusDiffUsingGet - Count difference of objects with given status, for specified species and date range
    **/
    getObjectStatusDiffUsingGet(req: operations.GetObjectStatusDiffUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetObjectStatusDiffUsingGetResponse>;
    /**
     * getObjectsWithRefSeqCountUsingGet - Count of objects with reference sequence(s), by object type, for specified species and date
    **/
    getObjectsWithRefSeqCountUsingGet(req: operations.GetObjectsWithRefSeqCountUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetObjectsWithRefSeqCountUsingGetResponse>;
    /**
     * getObjectsWithRefSeqDiffUsingGet - Count difference of objects with reference sequence(s), by object type, for specified species and date range
    **/
    getObjectsWithRefSeqDiffUsingGet(req: operations.GetObjectsWithRefSeqDiffUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetObjectsWithRefSeqDiffUsingGetResponse>;
    /**
     * getObjectsWithReferenceCountUsingGet - Count of objects with reference, by object type, for specified species and date
    **/
    getObjectsWithReferenceCountUsingGet(req: operations.GetObjectsWithReferenceCountUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetObjectsWithReferenceCountUsingGetResponse>;
    /**
     * getObjectsWithReferenceDiffUsingGet - Count difference of objects with reference, by object type, for specified species and date range
    **/
    getObjectsWithReferenceDiffUsingGet(req: operations.GetObjectsWithReferenceDiffUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetObjectsWithReferenceDiffUsingGetResponse>;
    /**
     * getObjectsWithXdBsCountUsingGet - Count of objects with external database ids, by database id, for specified species, object type and date
    **/
    getObjectsWithXdBsCountUsingGet(req: operations.GetObjectsWithXdBsCountUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetObjectsWithXdBsCountUsingGetResponse>;
    /**
     * getObjectsWithXdBsDiffUsingGet - Count difference of objects with external database ids, by database id, for specified species, object type and date range
    **/
    getObjectsWithXdBsDiffUsingGet(req: operations.GetObjectsWithXdBsDiffUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetObjectsWithXdBsDiffUsingGetResponse>;
    /**
     * getProteinInteractionCountUsingGet - Count of protein interactions, for specified species and date
    **/
    getProteinInteractionCountUsingGet(req: operations.GetProteinInteractionCountUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetProteinInteractionCountUsingGetResponse>;
    /**
     * getProteinInteractionDiffUsingGet - Count difference of protein interactions, for specified species and date range
    **/
    getProteinInteractionDiffUsingGet(req: operations.GetProteinInteractionDiffUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetProteinInteractionDiffUsingGetResponse>;
    /**
     * getQtlInheritanceTypeCountUsingGet - Count of strains, by qtl inheritance type, for specified species and date
    **/
    getQtlInheritanceTypeCountUsingGet(req: operations.GetQtlInheritanceTypeCountUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetQtlInheritanceTypeCountUsingGetResponse>;
    /**
     * getQtlInheritanceTypeDiffUsingGet - Count difference of strains, by qtl inheritance type, for specified species and date range
    **/
    getQtlInheritanceTypeDiffUsingGet(req: operations.GetQtlInheritanceTypeDiffUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetQtlInheritanceTypeDiffUsingGetResponse>;
    /**
     * getRetiredObjectCountUsingGet - Count of retired objects by type, for specified species and date
    **/
    getRetiredObjectCountUsingGet(req: operations.GetRetiredObjectCountUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetRetiredObjectCountUsingGetResponse>;
    /**
     * getRetiredObjectDiffUsingGet - Count difference of retired objects, by type, for specified species and date range
    **/
    getRetiredObjectDiffUsingGet(req: operations.GetRetiredObjectDiffUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetRetiredObjectDiffUsingGetResponse>;
    /**
     * getStrainTypeCountUsingGet - Count of strain types, for specified species and date
    **/
    getStrainTypeCountUsingGet(req: operations.GetStrainTypeCountUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetStrainTypeCountUsingGetResponse>;
    /**
     * getStrainTypeDiffUsingGet - Count difference of strain types, for specified species and date range
    **/
    getStrainTypeDiffUsingGet(req: operations.GetStrainTypeDiffUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetStrainTypeDiffUsingGetResponse>;
    /**
     * getTermStatsUsingGet - getTermStats
    **/
    getTermStatsUsingGet(req: operations.GetTermStatsUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetTermStatsUsingGetResponse>;
    /**
     * getWithdrawnObjectCountUsingGet - Count of withdrawn objects by type, for specified species and date
    **/
    getWithdrawnObjectCountUsingGet(req: operations.GetWithdrawnObjectCountUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetWithdrawnObjectCountUsingGetResponse>;
    /**
     * getWithdrawnObjectDiffUsingGet - Count difference of withdrawn objects, by type, for specified species and date range
    **/
    getWithdrawnObjectDiffUsingGet(req: operations.GetWithdrawnObjectDiffUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetWithdrawnObjectDiffUsingGetResponse>;
    /**
     * getXdbsCountUsingGet - Count of external database ids, for specied species and date
    **/
    getXdbsCountUsingGet(req: operations.GetXdbsCountUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetXdbsCountUsingGetResponse>;
    /**
     * getXdbsDiffUsingGet - Count difference of external database ids, for specified species and date range
    **/
    getXdbsDiffUsingGet(req: operations.GetXdbsDiffUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetXdbsDiffUsingGetResponse>;
}
