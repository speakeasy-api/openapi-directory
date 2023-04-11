import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ItemWebhookUpdateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    itemWebhookUpdateResponse?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
