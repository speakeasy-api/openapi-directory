import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetModelQueryQueryParams extends SpeakeasyBase {
    contributor?: string;
    title?: string;
}
export declare class GetModelQueryRequest extends SpeakeasyBase {
    queryParams: GetModelQueryQueryParams;
}
export declare class GetModelQueryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
