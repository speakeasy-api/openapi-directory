import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetProjectWebhooksRequest extends SpeakeasyBase {
    /**
     * Project ID
     */
    id: number;
}
export declare class GetProjectWebhooksResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * ProjectNotFound
     */
    error?: shared.ErrorT;
    /**
     * Project model
     */
    project?: shared.Project;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
