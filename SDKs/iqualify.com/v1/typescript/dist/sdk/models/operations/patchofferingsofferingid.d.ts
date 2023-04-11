import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PatchOfferingsOfferingIdRequest extends SpeakeasyBase {
    offering: shared.Offering;
    /**
     * offering's id
     */
    offeringId: string;
}
export declare class PatchOfferingsOfferingIdResponse extends SpeakeasyBase {
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
