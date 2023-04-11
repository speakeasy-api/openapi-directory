import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Retrieve associations between entities or entity and descriptors
 */
export declare class Association {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Returns list of matching associations of a given type
     */
    getAssociationBySubjectAndAssocType(req: operations.GetAssociationBySubjectAndAssocTypeRequest, config?: AxiosRequestConfig): Promise<operations.GetAssociationBySubjectAndAssocTypeResponse>;
    /**
     * Returns list of matching associations between a given subject and object category
     */
    getAssociationBySubjectAndObjectCategorySearch(req: operations.GetAssociationBySubjectAndObjectCategorySearchRequest, config?: AxiosRequestConfig): Promise<operations.GetAssociationBySubjectAndObjectCategorySearchResponse>;
    /**
     * Returns list of matching associations for a given subject category
     */
    getAssociationBySubjectCategorySearch(req: operations.GetAssociationBySubjectCategorySearchRequest, config?: AxiosRequestConfig): Promise<operations.GetAssociationBySubjectCategorySearchResponse>;
    /**
     * Returns the association with a given identifier
     *
     * @remarks
     * An association connects, at a minimum, two things, designated subject and object,
     * via some relationship. Associations also include evidence, provenance etc.
     */
    getAssociationObject(req: operations.GetAssociationObjectRequest, config?: AxiosRequestConfig): Promise<operations.GetAssociationObjectResponse>;
    /**
     * Returns associations connecting two entities
     *
     * @remarks
     * Given two entities (e.g. a particular gene and a particular disease), if these two entities
     * are connected (directly or indirectly), then return the association objects describing
     * the connection.
     */
    getAssociationsBetween(req: operations.GetAssociationsBetweenRequest, config?: AxiosRequestConfig): Promise<operations.GetAssociationsBetweenResponse>;
    /**
     * Returns list of matching associations starting from a given subject (source)
     */
    getAssociationsFrom(req: operations.GetAssociationsFromRequest, config?: AxiosRequestConfig): Promise<operations.GetAssociationsFromResponse>;
    /**
     * Returns list of matching associations pointing to a given object (target)
     */
    getAssociationsTo(req: operations.GetAssociationsToRequest, config?: AxiosRequestConfig): Promise<operations.GetAssociationsToResponse>;
}
