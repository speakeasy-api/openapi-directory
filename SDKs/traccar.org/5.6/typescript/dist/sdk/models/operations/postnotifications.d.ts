import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostNotificationsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    notification?: shared.Notification;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
