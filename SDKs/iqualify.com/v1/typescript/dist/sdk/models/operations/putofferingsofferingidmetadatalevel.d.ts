import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutOfferingsOfferingIdMetadataLevelRequestBody extends SpeakeasyBase {
    level?: string;
}
export declare class PutOfferingsOfferingIdMetadataLevelRequest extends SpeakeasyBase {
    requestBody: PutOfferingsOfferingIdMetadataLevelRequestBody;
    /**
     * offering's id
     */
    offeringId: string;
}
export declare class PutOfferingsOfferingIdMetadataLevelResponse extends SpeakeasyBase {
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
