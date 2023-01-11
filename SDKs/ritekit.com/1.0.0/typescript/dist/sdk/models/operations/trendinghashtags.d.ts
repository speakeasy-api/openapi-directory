import { SpeakeasyBase } from "../../../internal/utils";
export declare class TrendingHashtagsQueryParams extends SpeakeasyBase {
    green?: boolean;
    latin?: boolean;
}
export declare class TrendingHashtagsRequest extends SpeakeasyBase {
    queryParams: TrendingHashtagsQueryParams;
}
export declare class TrendingHashtagsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
