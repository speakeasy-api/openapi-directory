import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListWirelessRatePlanServerList: readonly ["https://preview.twilio.com"];
export declare class ListWirelessRatePlanQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListWirelessRatePlanSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListWirelessRatePlanListWirelessRatePlanResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListWirelessRatePlanListWirelessRatePlanResponse extends SpeakeasyBase {
    meta?: ListWirelessRatePlanListWirelessRatePlanResponseMeta;
    ratePlans?: shared.PreviewWirelessRatePlan[];
}
export declare class ListWirelessRatePlanRequest extends SpeakeasyBase {
    serverUrl?: string;
    queryParams: ListWirelessRatePlanQueryParams;
    security: ListWirelessRatePlanSecurity;
}
export declare class ListWirelessRatePlanResponse extends SpeakeasyBase {
    contentType: string;
    listWirelessRatePlanResponse?: ListWirelessRatePlanListWirelessRatePlanResponse;
    statusCode: number;
}
