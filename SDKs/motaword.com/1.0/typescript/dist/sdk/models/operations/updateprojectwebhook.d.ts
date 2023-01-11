import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateProjectWebhookPathParams extends SpeakeasyBase {
    id: number;
}
export declare class UpdateProjectWebhookRequestBody extends SpeakeasyBase {
    callbackUrl?: string;
}
export declare class UpdateProjectWebhookRequest extends SpeakeasyBase {
    pathParams: UpdateProjectWebhookPathParams;
    request?: UpdateProjectWebhookRequestBody;
}
export declare class UpdateProjectWebhookResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    project?: shared.Project;
    statusCode: number;
}
