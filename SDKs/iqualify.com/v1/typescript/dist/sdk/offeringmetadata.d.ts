import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class OfferingMetadata {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Update offering category metadata
     *
     * @remarks
     * Updates the offering category metadata.
     */
    putOfferingsOfferingIdMetadataCategory(req: operations.PutOfferingsOfferingIdMetadataCategoryRequest, config?: AxiosRequestConfig): Promise<operations.PutOfferingsOfferingIdMetadataCategoryResponse>;
    /**
     * Update offering level metadata
     *
     * @remarks
     * Updates the offering level metadata.
     */
    putOfferingsOfferingIdMetadataLevel(req: operations.PutOfferingsOfferingIdMetadataLevelRequest, config?: AxiosRequestConfig): Promise<operations.PutOfferingsOfferingIdMetadataLevelResponse>;
    /**
     * Update offering tags metadata
     *
     * @remarks
     * Updates the offering tags metadata.
     */
    putOfferingsOfferingIdMetadataTags(req: operations.PutOfferingsOfferingIdMetadataTagsRequest, config?: AxiosRequestConfig): Promise<operations.PutOfferingsOfferingIdMetadataTagsResponse>;
    /**
     * Update offering topic metadata
     *
     * @remarks
     * Updates the offering topic metadata.
     */
    putOfferingsOfferingIdMetadataTopic(req: operations.PutOfferingsOfferingIdMetadataTopicRequest, config?: AxiosRequestConfig): Promise<operations.PutOfferingsOfferingIdMetadataTopicResponse>;
}
