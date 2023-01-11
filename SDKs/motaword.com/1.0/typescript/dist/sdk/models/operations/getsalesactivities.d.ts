import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSalesActivitiesPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetSalesActivitiesQueryParams extends SpeakeasyBase {
    excludeOwner?: string;
    type?: shared.SalesActivityTypeEnum;
}
export declare class GetSalesActivitiesRequest extends SpeakeasyBase {
    pathParams: GetSalesActivitiesPathParams;
    queryParams: GetSalesActivitiesQueryParams;
}
export declare class GetSalesActivitiesResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    salesActivities?: shared.SalesActivities;
    statusCode: number;
}
