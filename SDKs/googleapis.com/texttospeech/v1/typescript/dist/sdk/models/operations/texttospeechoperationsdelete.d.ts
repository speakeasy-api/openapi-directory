import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TexttospeechOperationsDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class TexttospeechOperationsDeleteQueryParams extends SpeakeasyBase {
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
export declare class TexttospeechOperationsDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TexttospeechOperationsDeleteRequest extends SpeakeasyBase {
    pathParams: TexttospeechOperationsDeletePathParams;
    queryParams: TexttospeechOperationsDeleteQueryParams;
    security: TexttospeechOperationsDeleteSecurity;
}
export declare class TexttospeechOperationsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Record<string, any>;
    statusCode: number;
}
