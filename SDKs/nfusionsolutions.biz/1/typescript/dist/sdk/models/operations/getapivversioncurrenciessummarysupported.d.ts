import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetApiVVersionCurrenciesSummarySupportedPathParams extends SpeakeasyBase {
    version: string;
}
export declare class GetApiVVersionCurrenciesSummarySupportedQueryParams extends SpeakeasyBase {
    format?: shared.ResponseFormatEnum;
    token: string;
}
export declare class GetApiVVersionCurrenciesSummarySupportedRequest extends SpeakeasyBase {
    pathParams: GetApiVVersionCurrenciesSummarySupportedPathParams;
    queryParams: GetApiVVersionCurrenciesSummarySupportedQueryParams;
}
export declare class GetApiVVersionCurrenciesSummarySupportedResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    problemDetails?: Record<string, any>;
    statusCode: number;
    getApiVVersionCurrenciesSummarySupported200ApplicationJSONStrings?: string[];
}
