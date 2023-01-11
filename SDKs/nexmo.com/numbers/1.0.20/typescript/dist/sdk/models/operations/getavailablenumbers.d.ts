import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAvailableNumbersQueryParams extends SpeakeasyBase {
    country: string;
    features?: shared.SearchPatternEnum;
    index?: number;
    pattern?: string;
    searchPattern?: number;
    size?: number;
    type?: shared.TypeEnum;
}
export declare class GetAvailableNumbersRequest extends SpeakeasyBase {
    queryParams: GetAvailableNumbersQueryParams;
}
export declare class GetAvailableNumbersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    accountUnauthorized?: shared.AccountUnauthorized;
    availableNumbers?: shared.AvailableNumbers;
}
