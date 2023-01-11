import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostProjectWebhookPathParams extends SpeakeasyBase {
    id: number;
}
export declare class PostProjectWebhookRequestBody extends SpeakeasyBase {
    callbackUrl?: string;
}
export declare class PostProjectWebhookRequest extends SpeakeasyBase {
    pathParams: PostProjectWebhookPathParams;
    request?: PostProjectWebhookRequestBody;
}
export declare class PostProjectWebhookResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    project?: shared.Project;
    statusCode: number;
}
