import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CompareBulkRatesRequest extends SpeakeasyBase {
    request: shared.CompareBulkRatesRequestBody;
}
export declare class CompareBulkRatesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    compareBulkRatesResponseBody?: shared.BulkRate[];
    errorResponseBody?: shared.ErrorResponseBody;
}
