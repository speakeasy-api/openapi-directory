import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchUsecaseServerList: readonly ["https://messaging.twilio.com"];
export declare class FetchUsecaseResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    messagingV1Usecase?: shared.MessagingV1Usecase;
}
