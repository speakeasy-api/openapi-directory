import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetKeywordsQueryParams extends SpeakeasyBase {
    assetId: any;
}
export declare class GetKeywordsSecurity extends SpeakeasyBase {
    basic?: shared.SchemeBasic;
    customerAccessCode?: shared.SchemeCustomerAccessCode;
}
export declare class GetKeywordsRequest extends SpeakeasyBase {
    queryParams: GetKeywordsQueryParams;
    security: GetKeywordsSecurity;
}
export declare class GetKeywordsResponse extends SpeakeasyBase {
    contentType: string;
    keywordDataList?: any;
    statusCode: number;
}
