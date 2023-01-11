import { SpeakeasyBase } from "../../../internal/utils";
export declare class MerchantCancellationHeaders extends SpeakeasyBase {
    acceptLanguage: string;
}
export declare class MerchantCancellationRequestBodyCancelItems extends SpeakeasyBase {
    cancelCode?: string;
    cancelDescription?: string;
    distributorItemRef?: string;
    itemId?: number;
}
export declare class MerchantCancellationRequestBody extends SpeakeasyBase {
    cancelItems?: MerchantCancellationRequestBodyCancelItems[];
    distributorRef?: string;
    itineraryId?: number;
}
export declare class MerchantCancellation200ApplicationJsonDataCancelItems extends SpeakeasyBase {
    cancellationResponseDescription?: string;
    cancellationResponseStatusCode?: string;
    distributorItemRef?: string;
    itemId?: string;
}
export declare class MerchantCancellation200ApplicationJsonData extends SpeakeasyBase {
    cancelItems?: MerchantCancellation200ApplicationJsonDataCancelItems[];
    distributorRef?: string;
    itineraryId?: number;
}
export declare class MerchantCancellation200ApplicationJson extends SpeakeasyBase {
    data?: MerchantCancellation200ApplicationJsonData;
    dateStamp?: string;
    errorCodes?: string[];
    errorMessage?: any[];
    errorMessageText?: string;
    errorName?: string;
    errorReference?: string;
    errorType?: string;
    extraInfo?: Record<string, any>;
    extraObject?: Record<string, any>;
    success?: boolean;
    totalCount?: number;
    vmid?: string;
}
export declare class MerchantCancellation400ApplicationJsonData extends SpeakeasyBase {
    cancellationResponseDescription?: string;
    cancellationResponseStatusCode?: string;
    distributorItemRef?: string;
    itemId?: string;
}
export declare class MerchantCancellation400ApplicationJson extends SpeakeasyBase {
    data?: MerchantCancellation400ApplicationJsonData;
    dateStamp?: string;
    errorCodes?: string[];
    errorMessage?: any[];
    errorMessageText?: string;
    errorName?: string;
    errorReference?: string;
    errorType?: string;
    extraInfo?: Record<string, any>;
    extraObject?: Record<string, any>;
    success?: boolean;
    totalCount?: number;
    vmid?: string;
}
export declare class MerchantCancellationRequest extends SpeakeasyBase {
    headers: MerchantCancellationHeaders;
    request?: MerchantCancellationRequestBody;
}
export declare class MerchantCancellationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    merchantCancellation200ApplicationJSONObject?: MerchantCancellation200ApplicationJson;
    merchantCancellation400ApplicationJSONObject?: MerchantCancellation400ApplicationJson;
}
