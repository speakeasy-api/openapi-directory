import { SpeakeasyBase } from "../../../internal/utils";
export declare class AddExpiryListingsRequests extends SpeakeasyBase {
    aftermarketListingExpiryCreates?: any[];
    applicationXML: Uint8Array;
    textXML: Uint8Array;
}
export declare class AddExpiryListingsRequest extends SpeakeasyBase {
    request: AddExpiryListingsRequests;
}
export declare class AddExpiryListingsResponse extends SpeakeasyBase {
    aftermarketListingAction?: any;
    body?: Uint8Array;
    contentType: string;
    error?: any;
    errorLimit?: any;
    statusCode: number;
}
