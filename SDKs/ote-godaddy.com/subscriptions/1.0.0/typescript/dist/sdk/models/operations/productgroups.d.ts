import { SpeakeasyBase } from "../../../internal/utils";
export declare class ProductGroupsHeaders extends SpeakeasyBase {
    xMarketId?: string;
    xShopperId?: string;
}
export declare class ProductGroupsRequest extends SpeakeasyBase {
    headers: ProductGroupsHeaders;
}
export declare class ProductGroupsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    error?: any;
    errorLimit?: any;
    productGroups?: any[];
    statusCode: number;
}
