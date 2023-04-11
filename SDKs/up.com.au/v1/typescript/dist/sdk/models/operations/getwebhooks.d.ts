import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetWebhooksRequest extends SpeakeasyBase {
    /**
     * The number of records to return in each page.
     *
     * @remarks
     *
     */
    pageSize?: number;
}
export declare class GetWebhooksResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful Response
     */
    listWebhooksResponse?: shared.ListWebhooksResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
