import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteListingsQueryParams extends SpeakeasyBase {
    domains: string[];
}
export declare class DeleteListingsRequest extends SpeakeasyBase {
    queryParams: DeleteListingsQueryParams;
}
export declare class DeleteListingsResponse extends SpeakeasyBase {
    aftermarketListingAction?: any;
    body?: Uint8Array;
    contentType: string;
    error?: any;
    errorLimit?: any;
    statusCode: number;
}
