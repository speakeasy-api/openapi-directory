import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetApiVVersionMetalsSupportedCurrencyPathParams extends SpeakeasyBase {
    version: string;
}
export declare class GetApiVVersionMetalsSupportedCurrencyQueryParams extends SpeakeasyBase {
    format?: shared.ResponseFormatEnum;
    token: string;
}
export declare class GetApiVVersionMetalsSupportedCurrencyRequest extends SpeakeasyBase {
    pathParams: GetApiVVersionMetalsSupportedCurrencyPathParams;
    queryParams: GetApiVVersionMetalsSupportedCurrencyQueryParams;
}
export declare class GetApiVVersionMetalsSupportedCurrencyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    problemDetails?: Record<string, any>;
    statusCode: number;
    getApiVVersionMetalsSupportedCurrency200ApplicationJSONStrings?: string[];
}
