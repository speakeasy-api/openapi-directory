import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Association {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getAssociationBySubjectAndAssocType - Returns list of matching associations of a given type
    **/
    getAssociationBySubjectAndAssocType(req: operations.GetAssociationBySubjectAndAssocTypeRequest, config?: AxiosRequestConfig): Promise<operations.GetAssociationBySubjectAndAssocTypeResponse>;
    /**
     * getAssociationBySubjectAndObjectCategorySearch - Returns list of matching associations between a given subject and object category
    **/
    getAssociationBySubjectAndObjectCategorySearch(req: operations.GetAssociationBySubjectAndObjectCategorySearchRequest, config?: AxiosRequestConfig): Promise<operations.GetAssociationBySubjectAndObjectCategorySearchResponse>;
    /**
     * getAssociationBySubjectCategorySearch - Returns list of matching associations for a given subject category
    **/
    getAssociationBySubjectCategorySearch(req: operations.GetAssociationBySubjectCategorySearchRequest, config?: AxiosRequestConfig): Promise<operations.GetAssociationBySubjectCategorySearchResponse>;
    /**
     * getAssociationObject - Returns the association with a given identifier
     *
     * An association connects, at a minimum, two things, designated subject and object,
     * via some relationship. Associations also include evidence, provenance etc.
    **/
    getAssociationObject(req: operations.GetAssociationObjectRequest, config?: AxiosRequestConfig): Promise<operations.GetAssociationObjectResponse>;
    /**
     * getAssociationsBetween - Returns associations connecting two entities
     *
     * Given two entities (e.g. a particular gene and a particular disease), if these two entities
     * are connected (directly or indirectly), then return the association objects describing
     * the connection.
    **/
    getAssociationsBetween(req: operations.GetAssociationsBetweenRequest, config?: AxiosRequestConfig): Promise<operations.GetAssociationsBetweenResponse>;
    /**
     * getAssociationsFrom - Returns list of matching associations starting from a given subject (source)
    **/
    getAssociationsFrom(req: operations.GetAssociationsFromRequest, config?: AxiosRequestConfig): Promise<operations.GetAssociationsFromResponse>;
    /**
     * getAssociationsTo - Returns list of matching associations pointing to a given object (target)
    **/
    getAssociationsTo(req: operations.GetAssociationsToRequest, config?: AxiosRequestConfig): Promise<operations.GetAssociationsToResponse>;
}
