import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetOfferingsOfferingIdAnalyticsPulsesPulseIdResponsesRequest extends SpeakeasyBase {
    /**
     * offering's id
     */
    offeringId: string;
    /**
     * pulse's base id
     */
    pulseId: string;
}
export declare class GetOfferingsOfferingIdAnalyticsPulsesPulseIdResponsesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * No authorization token was found.
     */
    error?: shared.ErrorT;
    /**
     * Pulse data matching pulseId
     */
    pulseResponses?: shared.PulseResponse[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
