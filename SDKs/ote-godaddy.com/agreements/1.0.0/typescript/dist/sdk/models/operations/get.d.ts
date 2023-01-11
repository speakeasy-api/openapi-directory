import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetQueryParams extends SpeakeasyBase {
    keys: string[];
}
export declare class GetHeaders extends SpeakeasyBase {
    xMarketId?: string;
    xPrivateLabelId?: number;
}
export declare class GetRequest extends SpeakeasyBase {
    queryParams: GetQueryParams;
    headers: GetHeaders;
}
export declare class GetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    error?: any;
    errorLimit?: any;
    legalAgreements?: any[];
    statusCode: number;
}
