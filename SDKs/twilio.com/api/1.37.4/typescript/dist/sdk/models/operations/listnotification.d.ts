import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListNotificationServerList: readonly ["https://api.twilio.com"];
export declare class ListNotificationPathParams extends SpeakeasyBase {
    accountSid: string;
}
export declare class ListNotificationQueryParams extends SpeakeasyBase {
    log?: number;
    messageDate?: Date;
    messageDateLessThan?: Date;
    messageDateGreaterThan?: Date;
    pageSize?: number;
}
export declare class ListNotificationSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListNotificationListNotificationResponse extends SpeakeasyBase {
    end?: number;
    firstPageUri?: string;
    nextPageUri?: string;
    notifications?: shared.ApiV2010AccountNotification[];
    page?: number;
    pageSize?: number;
    previousPageUri?: string;
    start?: number;
    uri?: string;
}
export declare class ListNotificationRequest extends SpeakeasyBase {
    serverURL?: string;
    pathParams: ListNotificationPathParams;
    queryParams: ListNotificationQueryParams;
    security: ListNotificationSecurity;
}
export declare class ListNotificationResponse extends SpeakeasyBase {
    contentType: string;
    listNotificationResponse?: ListNotificationListNotificationResponse;
    statusCode: number;
}
