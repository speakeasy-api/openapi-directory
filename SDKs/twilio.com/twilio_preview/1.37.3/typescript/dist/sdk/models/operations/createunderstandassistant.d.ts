import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const CreateUnderstandAssistantServerList: readonly ["https://preview.twilio.com"];
export declare class CreateUnderstandAssistantCreateUnderstandAssistantRequest extends SpeakeasyBase {
    callbackEvents?: string;
    callbackUrl?: string;
    fallbackActions?: any;
    friendlyName?: string;
    initiationActions?: any;
    logQueries?: boolean;
    styleSheet?: any;
    uniqueName?: string;
}
export declare class CreateUnderstandAssistantSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateUnderstandAssistantRequest extends SpeakeasyBase {
    serverUrl?: string;
    request?: CreateUnderstandAssistantCreateUnderstandAssistantRequest;
    security: CreateUnderstandAssistantSecurity;
}
export declare class CreateUnderstandAssistantResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    previewUnderstandAssistant?: shared.PreviewUnderstandAssistant;
}
