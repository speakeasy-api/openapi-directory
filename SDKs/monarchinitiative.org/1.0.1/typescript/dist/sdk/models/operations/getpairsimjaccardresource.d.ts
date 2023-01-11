import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetPairSimJaccardResourcePathParams extends SpeakeasyBase {
    id1: string;
    id2: string;
}
export declare class GetPairSimJaccardResourceQueryParams extends SpeakeasyBase {
    objectCategory?: string;
}
export declare class GetPairSimJaccardResourceRequest extends SpeakeasyBase {
    pathParams: GetPairSimJaccardResourcePathParams;
    queryParams: GetPairSimJaccardResourceQueryParams;
}
export declare class GetPairSimJaccardResourceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
