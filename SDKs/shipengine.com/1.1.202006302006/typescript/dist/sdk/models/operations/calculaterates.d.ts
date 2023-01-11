import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CalculateRatesRequest extends SpeakeasyBase {
    request: shared.CalculateRatesRequestBody;
}
export declare class CalculateRatesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    calculateRatesResponseBody?: shared.CalculateRatesResponseBody;
    errorResponseBody?: shared.ErrorResponseBody;
}
