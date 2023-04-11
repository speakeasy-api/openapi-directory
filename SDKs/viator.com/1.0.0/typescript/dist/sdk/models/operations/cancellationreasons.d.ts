import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CancellationReasonsServerList: readonly ["https://api.sandbox.viator.com/partner"];
export declare class CancellationReasonsRequest extends SpeakeasyBase {
    /**
     * Specifies the language into which the natural-language fields in the response from this service will be translated (see [Accept-Language header](#section/Appendices/Accept-Language-header) for available langage codes)
     *
     * @remarks
     *
     */
    acceptLanguage: string;
}
export declare class CancellationReasonsResponse extends SpeakeasyBase {
    /**
     * Unauthorized
     */
    fourHundredAndOneUNAUTHORIZED?: shared.FourHundredAndOneUNAUTHORIZED;
    /**
     * Not Acceptable
     */
    fourHundredAndSixNOTACCEPTABLE?: shared.FourHundredAndSixNOTACCEPTABLE;
    /**
     * Internal Server Error
     */
    fiveHundredINTERNALSERVERERROR?: shared.FiveHundredINTERNALSERVERERROR;
    /**
     * Service Unavailable
     */
    fiveHundredAndThreeSERVICEUNAVAILABLE?: shared.FiveHundredAndThreeSERVICEUNAVAILABLE;
    /**
     * Success
     */
    cancellationReasonsResponses?: shared.CancellationReasonsResponse[];
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
