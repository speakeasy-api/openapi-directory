import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetActivityCollectionQueryParams extends SpeakeasyBase {
    contributor?: string;
    title?: string;
}
export declare class GetActivityCollectionRequest extends SpeakeasyBase {
    queryParams: GetActivityCollectionQueryParams;
}
export declare class GetActivityCollectionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
