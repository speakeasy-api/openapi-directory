import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TexttospeechProjectsLocationsVoicesSynthesizeLongAudioPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class TexttospeechProjectsLocationsVoicesSynthesizeLongAudioQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class TexttospeechProjectsLocationsVoicesSynthesizeLongAudioSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TexttospeechProjectsLocationsVoicesSynthesizeLongAudioRequest extends SpeakeasyBase {
    pathParams: TexttospeechProjectsLocationsVoicesSynthesizeLongAudioPathParams;
    queryParams: TexttospeechProjectsLocationsVoicesSynthesizeLongAudioQueryParams;
    request?: shared.SynthesizeLongAudioRequest;
    security: TexttospeechProjectsLocationsVoicesSynthesizeLongAudioSecurity;
}
export declare class TexttospeechProjectsLocationsVoicesSynthesizeLongAudioResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
