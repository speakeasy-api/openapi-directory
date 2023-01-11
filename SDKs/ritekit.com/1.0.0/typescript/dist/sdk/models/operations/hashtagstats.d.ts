import { SpeakeasyBase } from "../../../internal/utils";
export declare class HashtagStatsQueryParams extends SpeakeasyBase {
    tags: any[];
}
export declare class HashtagStatsRequest extends SpeakeasyBase {
    queryParams: HashtagStatsQueryParams;
}
export declare class HashtagStatsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
