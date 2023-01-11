import { SpeakeasyBase } from "../../../internal/utils";
export declare class BookingVoucherQueryParams extends SpeakeasyBase {
    embeddedResources?: boolean;
    fullHTML?: boolean;
    itemId?: number;
    leadLastName?: string;
    mobileVoucher?: boolean;
    voucherKey?: string;
}
export declare class BookingVoucherHeaders extends SpeakeasyBase {
    acceptLanguage: string;
}
export declare class BookingVoucher200ApplicationJson extends SpeakeasyBase {
    data?: string;
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
export declare class BookingVoucherRequest extends SpeakeasyBase {
    queryParams: BookingVoucherQueryParams;
    headers: BookingVoucherHeaders;
}
export declare class BookingVoucherResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    bookingVoucher200ApplicationJSONObject?: BookingVoucher200ApplicationJson;
}
