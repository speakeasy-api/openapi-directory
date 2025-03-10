import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHMODELBUILD_SERVERS: string[];
export declare class FetchModelBuildPathParams extends SpeakeasyBase {
    assistantSid: string;
    sid: string;
}
export declare class FetchModelBuildSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchModelBuildRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchModelBuildPathParams;
    security: FetchModelBuildSecurity;
}
export declare class FetchModelBuildResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    autopilotV1AssistantModelBuild?: shared.AutopilotV1AssistantModelBuild;
}
