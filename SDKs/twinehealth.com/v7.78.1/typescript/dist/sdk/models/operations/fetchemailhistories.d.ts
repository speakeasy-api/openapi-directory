import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * valid sorts:
 *
 * @remarks
 *   * send_time - ascending by send_time
 *   * -send_time - descending by send_time
 *
 */
export declare enum FetchEmailHistoriesSortEnum {
    SendTime = "send_time",
    MinusSendTime = "-send_time"
}
export declare class FetchEmailHistoriesRequest extends SpeakeasyBase {
    /**
     * Type of email
     */
    filterEmailType?: string;
    /**
     * Fitbit Plus user id of email recipient. Required if filter[sender] is not defined.
     */
    filterReceiver?: string;
    /**
     * Fitbit Plus user id of email sender. Required if filter[receiver] is not defined.
     */
    filterSender?: string;
    /**
     * valid sorts:
     *
     * @remarks
     *   * send_time - ascending by send_time
     *   * -send_time - descending by send_time
     *
     */
    sort?: FetchEmailHistoriesSortEnum;
}
export declare class FetchEmailHistoriesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    fetchEmailHistoriesResponse?: shared.FetchEmailHistoriesResponse;
    /**
     * Unauthorized
     */
    fetchErrorResponse?: shared.FetchErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
