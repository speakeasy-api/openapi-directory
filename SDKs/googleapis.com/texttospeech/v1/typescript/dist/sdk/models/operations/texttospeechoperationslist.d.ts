import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TexttospeechOperationsListPathParams extends SpeakeasyBase {
    name: string;
}
export declare class TexttospeechOperationsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class TexttospeechOperationsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TexttospeechOperationsListRequest extends SpeakeasyBase {
    pathParams: TexttospeechOperationsListPathParams;
    queryParams: TexttospeechOperationsListQueryParams;
    security: TexttospeechOperationsListSecurity;
}
export declare class TexttospeechOperationsListResponse extends SpeakeasyBase {
    contentType: string;
    listOperationsResponse?: shared.ListOperationsResponse;
    statusCode: number;
}
