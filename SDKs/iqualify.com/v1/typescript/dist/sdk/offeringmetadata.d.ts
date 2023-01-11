import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class OfferingMetadata {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * putOfferingsOfferingIdMetadataCategory - Update offering category metadata
     *
     * Updates the offering category metadata.
    **/
    putOfferingsOfferingIdMetadataCategory(req: operations.PutOfferingsOfferingIdMetadataCategoryRequest, config?: AxiosRequestConfig): Promise<operations.PutOfferingsOfferingIdMetadataCategoryResponse>;
    /**
     * putOfferingsOfferingIdMetadataLevel - Update offering level metadata
     *
     * Updates the offering level metadata.
    **/
    putOfferingsOfferingIdMetadataLevel(req: operations.PutOfferingsOfferingIdMetadataLevelRequest, config?: AxiosRequestConfig): Promise<operations.PutOfferingsOfferingIdMetadataLevelResponse>;
    /**
     * putOfferingsOfferingIdMetadataTags - Update offering tags metadata
     *
     * Updates the offering tags metadata.
    **/
    putOfferingsOfferingIdMetadataTags(req: operations.PutOfferingsOfferingIdMetadataTagsRequest, config?: AxiosRequestConfig): Promise<operations.PutOfferingsOfferingIdMetadataTagsResponse>;
    /**
     * putOfferingsOfferingIdMetadataTopic - Update offering topic metadata
     *
     * Updates the offering topic metadata.
    **/
    putOfferingsOfferingIdMetadataTopic(req: operations.PutOfferingsOfferingIdMetadataTopicRequest, config?: AxiosRequestConfig): Promise<operations.PutOfferingsOfferingIdMetadataTopicResponse>;
}
