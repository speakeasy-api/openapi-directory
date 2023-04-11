import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutOfferingsOfferingIdMetadataTopicRequestBody extends SpeakeasyBase {
    topic?: string;
}
export declare class PutOfferingsOfferingIdMetadataTopicRequest extends SpeakeasyBase {
    requestBody: PutOfferingsOfferingIdMetadataTopicRequestBody;
    /**
     * offering's id
     */
    offeringId: string;
}
export declare class PutOfferingsOfferingIdMetadataTopicResponse extends SpeakeasyBase {
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
