import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetProjectWebhooksPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetProjectWebhooksRequest extends SpeakeasyBase {
    pathParams: GetProjectWebhooksPathParams;
}
export declare class GetProjectWebhooksResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    project?: shared.Project;
    statusCode: number;
}
