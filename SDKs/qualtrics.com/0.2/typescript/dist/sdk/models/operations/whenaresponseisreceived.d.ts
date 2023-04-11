import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class WhenAResponseIsReceivedResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK - web hook registered
     */
    eventSubscriptionsResponse?: shared.EventSubscriptionsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
