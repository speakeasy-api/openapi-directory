import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutNotificationsIdRequest extends SpeakeasyBase {
    notification: shared.Notification;
    id: number;
}
export declare class PutNotificationsIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    notification?: shared.Notification;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
