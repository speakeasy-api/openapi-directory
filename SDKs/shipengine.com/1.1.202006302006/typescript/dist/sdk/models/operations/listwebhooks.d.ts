import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListWebhooksResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    errorResponseBody?: shared.ErrorResponseBody;
    listWebhooksResponseBody?: shared.Webhook[];
}
