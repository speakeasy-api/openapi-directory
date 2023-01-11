import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CheckAvailabilityOfFundsHeaders extends SpeakeasyBase {
    authorization?: string;
    digest?: string;
    signature?: string;
    tppSignatureCertificate?: string;
    xRequestID: string;
}
export declare class CheckAvailabilityOfFundsSecurity extends SpeakeasyBase {
    bearerAuthOAuth?: shared.SchemeBearerAuthOAuth;
}
/**
 * Equals "true" if sufficient funds are available at the time of the request,
 * "false" otherwise.
 *
**/
export declare class CheckAvailabilityOfFunds200ApplicationJson extends SpeakeasyBase {
    fundsAvailable: boolean;
}
export declare class CheckAvailabilityOfFundsRequest extends SpeakeasyBase {
    headers: CheckAvailabilityOfFundsHeaders;
    request: shared.ConfirmationOfFunds;
    security: CheckAvailabilityOfFundsSecurity;
}
export declare class CheckAvailabilityOfFundsResponse extends SpeakeasyBase {
    contentType: string;
    error400AIS?: shared.Error400Ais;
    error400NGAIS?: shared.Error400NgAis;
    error401NGPIIS?: shared.Error401NgPiis;
    error401PIIS?: shared.Error401Piis;
    error403NGPIIS?: shared.Error403NgPiis;
    error403PIIS?: shared.Error403Piis;
    error404NGPIIS?: shared.Error404NgPiis;
    error404PIIS?: shared.Error404Piis;
    error405NGPIIS?: shared.Error405NgPiis;
    error405PIIS?: shared.Error405Piis;
    error409NGPIIS?: shared.Error409NgPiis;
    error409PIIS?: shared.Error409Piis;
    headers: Record<string, string[]>;
    statusCode: number;
    checkAvailabilityOfFunds200ApplicationJSONObject?: CheckAvailabilityOfFunds200ApplicationJson;
}
