import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUserResponsivityPathParams extends SpeakeasyBase {
    userId: number;
}
export declare enum GetUserResponsivityPeriodEnum {
    Monthly = "monthly",
    Weekly = "weekly"
}
export declare class GetUserResponsivityQueryParams extends SpeakeasyBase {
    period?: GetUserResponsivityPeriodEnum;
}
export declare class GetUserResponsivitySecurity extends SpeakeasyBase {
    mwoAuth: shared.SchemeMwoAuth;
}
export declare class GetUserResponsivityRequest extends SpeakeasyBase {
    pathParams: GetUserResponsivityPathParams;
    queryParams: GetUserResponsivityQueryParams;
    security: GetUserResponsivitySecurity;
}
export declare class GetUserResponsivityResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    responsivityList?: shared.ResponsivityList;
    statusCode: number;
}
