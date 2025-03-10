import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const CreateCompositionHookServerList: readonly ["https://video.twilio.com"];
export declare enum CreateCompositionHookCreateCompositionHookRequestStatusCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare class CreateCompositionHookCreateCompositionHookRequest extends SpeakeasyBase {
    audioSources?: string[];
    audioSourcesExcluded?: string[];
    enabled?: boolean;
    format?: shared.CompositionHookEnumFormatEnum;
    friendlyName: string;
    resolution?: string;
    statusCallback?: string;
    statusCallbackMethod?: CreateCompositionHookCreateCompositionHookRequestStatusCallbackMethodEnum;
    trim?: boolean;
    videoLayout?: any;
}
export declare class CreateCompositionHookSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateCompositionHookRequest extends SpeakeasyBase {
    serverURL?: string;
    request?: CreateCompositionHookCreateCompositionHookRequest;
    security: CreateCompositionHookSecurity;
}
export declare class CreateCompositionHookResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    videoV1CompositionHook?: shared.VideoV1CompositionHook;
}
