import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListReportsQueryParams extends SpeakeasyBase {
    accountId: string;
    dateFrom?: Date;
    dateTo?: Date;
    status: string;
}
export declare class ListReportsSecurity extends SpeakeasyBase {
    basicAuth: shared.SchemeBasicAuth;
}
export declare class ListReports200ApplicationJson extends SpeakeasyBase {
    itemsCount?: number;
    reports?: Record<string, any>[];
    selfLink?: string;
}
export declare class ListReportsRequest extends SpeakeasyBase {
    queryParams: ListReportsQueryParams;
    security: ListReportsSecurity;
}
export declare class ListReportsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    listReports200ApplicationJSONObject?: ListReports200ApplicationJson;
    listReports400ApplicationJSONAny?: any;
    listReports401ApplicationJSONAny?: any;
}
