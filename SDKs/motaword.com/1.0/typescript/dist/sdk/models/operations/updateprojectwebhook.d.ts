import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateProjectWebhookRequest extends SpeakeasyBase {
    webhook?: shared.Webhook;
    /**
     * Project ID
     */
    id: number;
}
export declare class UpdateProjectWebhookResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * ProjectNotFound
     */
    error?: shared.ErrorT;
    /**
     * Updated project
     */
    project?: shared.Project;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
