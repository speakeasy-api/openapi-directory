import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetImageRecommendationsQueryParams extends SpeakeasyBase {
    id: string[];
    maxItems?: number;
    safe?: boolean;
}
export declare class GetImageRecommendationsSecurity extends SpeakeasyBase {
    basic?: shared.SchemeBasic;
    customerAccessCode?: shared.SchemeCustomerAccessCode;
}
export declare class GetImageRecommendationsRequest extends SpeakeasyBase {
    queryParams: GetImageRecommendationsQueryParams;
    security: GetImageRecommendationsSecurity;
}
export declare class GetImageRecommendationsResponse extends SpeakeasyBase {
    contentType: string;
    recommendationDataList?: any;
    statusCode: number;
}
