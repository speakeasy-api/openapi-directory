import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const CancellationReasonsServerList: readonly ["https://api.sandbox.viator.com/partner"];
export declare class CancellationReasonsHeaders extends SpeakeasyBase {
    acceptLanguage: string;
}
export declare class CancellationReasonsRequest extends SpeakeasyBase {
    serverURL?: string;
    headers: CancellationReasonsHeaders;
}
export declare class CancellationReasonsResponse extends SpeakeasyBase {
    fourHundredAndOneUNAUTHORIZED?: shared.FourHundredAndOneUnauthorized;
    fourHundredAndSixNOTACCEPTABLE?: shared.FourHundredAndSixNotAcceptable;
    fiveHundredINTERNALSERVERERROR?: shared.FiveHundredInternalServerError;
    fiveHundredAndThreeSERVICEUNAVAILABLE?: shared.FiveHundredAndThreeServiceUnavailable;
    cancellationReasonsResponses?: shared.CancellationReasonsResponse[];
    contentType: string;
    statusCode: number;
}
