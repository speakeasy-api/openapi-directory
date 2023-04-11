import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutOfferingsOfferingIdMetadataTagsRequestBody extends SpeakeasyBase {
    tags?: string[];
}
export declare class PutOfferingsOfferingIdMetadataTagsRequest extends SpeakeasyBase {
    requestBody: PutOfferingsOfferingIdMetadataTagsRequestBody;
    /**
     * offering's id
     */
    offeringId: string;
}
export declare class PutOfferingsOfferingIdMetadataTagsResponse extends SpeakeasyBase {
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
