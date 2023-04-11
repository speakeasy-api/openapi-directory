import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutOfferingsOfferingIdMetadataCategoryRequestBody extends SpeakeasyBase {
    category?: string;
}
export declare class PutOfferingsOfferingIdMetadataCategoryRequest extends SpeakeasyBase {
    requestBody: PutOfferingsOfferingIdMetadataCategoryRequestBody;
    /**
     * offering's id
     */
    offeringId: string;
}
export declare class PutOfferingsOfferingIdMetadataCategoryResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request
     */
    error?: shared.ErrorT;
    /**
     * offering updated
     */
    offeringMetadataResponse?: shared.OfferingMetadataResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
