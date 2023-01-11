import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EstimateRatesRequest extends SpeakeasyBase {
    request: shared.EstimateRatesRequestBody;
}
export declare class EstimateRatesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    errorResponseBody?: shared.ErrorResponseBody;
    estimateRatesResponseBody?: shared.Rate[];
}
