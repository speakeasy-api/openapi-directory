import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetResponsivityPeriodEnum {
    Monthly = "monthly",
    Weekly = "weekly"
}
export declare class GetResponsivityQueryParams extends SpeakeasyBase {
    period?: GetResponsivityPeriodEnum;
}
export declare class GetResponsivityRequest extends SpeakeasyBase {
    queryParams: GetResponsivityQueryParams;
}
export declare class GetResponsivityResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    responsivityList?: shared.ResponsivityList;
    statusCode: number;
}
