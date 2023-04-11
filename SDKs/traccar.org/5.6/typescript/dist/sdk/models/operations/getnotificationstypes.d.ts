import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetNotificationsTypesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    notificationTypes?: shared.NotificationType[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
