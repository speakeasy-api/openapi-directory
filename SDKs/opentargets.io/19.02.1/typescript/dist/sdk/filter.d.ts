import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Methods to filter the available evidence.
 */
export declare class Filter {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Filter available associations
     *
     * @remarks
     * More complex queries for associations scores and objects can be done using
     * this method, which allows to sort in different order, restrict to a specific class
     * of diseases or targets, as well as filtering results by score and associated pathways.
     *
     */
    getAssociationFilter(req: operations.GetAssociationFilterRequest, config?: AxiosRequestConfig): Promise<operations.GetAssociationFilterResponse>;
    /**
     * Filter available evidence
     *
     * @remarks
     * The filter method allows to retrieve the specific data that supports a connection between targets and diseases.
     * Filters can be used to restrict the results by source and type of data,
     * or limit results to targets which are part of a particular pathway.
     * Minimum and maximum scores can be specified as well as the type of evidence linking target and disease.
     * **Note** that multiple genes and diseases can be specified in the same request.
     *
     */
    getEvidenceFilter(req: operations.GetEvidenceFilterRequest, config?: AxiosRequestConfig): Promise<operations.GetEvidenceFilterResponse>;
    /**
     * Batch query available associations
     *
     * @remarks
     * Complex queries and filters for association objects can also be submitted using a JSON
     * object and the equivalent POST method.
     *
     */
    postAssociationFilter(req: string, config?: AxiosRequestConfig): Promise<operations.PostAssociationFilterResponse>;
    /**
     * Batch filter available evidence
     *
     * @remarks
     * POST version of [/public/evidence/filter](#!/public/get_public_evidence_filter).
     * Filters can be specified as part of a `json` object in the body, simplifying the submission of queries.
     *
     */
    postEvidenceFilter(req: string, config?: AxiosRequestConfig): Promise<operations.PostEvidenceFilterResponse>;
}
