import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTrackPathParams extends SpeakeasyBase {
    id: number;
}
export declare enum GetTrackViewEnum {
    Minimal = "minimal",
    Full = "full"
}
export declare class GetTrackQueryParams extends SpeakeasyBase {
    view?: GetTrackViewEnum;
}
export declare class GetTrackSecurity extends SpeakeasyBase {
    basic?: shared.SchemeBasic;
    customerAccessCode?: shared.SchemeCustomerAccessCode;
}
export declare class GetTrackRequest extends SpeakeasyBase {
    pathParams: GetTrackPathParams;
    queryParams: GetTrackQueryParams;
    security: GetTrackSecurity;
}
export declare class GetTrackResponse extends SpeakeasyBase {
    audio?: shared.Audio;
    contentType: string;
    statusCode: number;
}
