import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchSourceIpMappingServerList: readonly ["https://voice.twilio.com"];
export declare class FetchSourceIpMappingPathParams extends SpeakeasyBase {
    sid: string;
}
export declare class FetchSourceIpMappingSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchSourceIpMappingRequest extends SpeakeasyBase {
    serverURL?: string;
    pathParams: FetchSourceIpMappingPathParams;
    security: FetchSourceIpMappingSecurity;
}
export declare class FetchSourceIpMappingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    voiceV1SourceIpMapping?: shared.VoiceV1SourceIpMapping;
}
