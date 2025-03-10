import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const DeleteBindingServerList: readonly ["https://ip-messaging.twilio.com"];
export declare class DeleteBindingPathParams extends SpeakeasyBase {
    serviceSid: string;
    sid: string;
}
export declare class DeleteBindingSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteBindingRequest extends SpeakeasyBase {
    serverURL?: string;
    pathParams: DeleteBindingPathParams;
    security: DeleteBindingSecurity;
}
export declare class DeleteBindingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
