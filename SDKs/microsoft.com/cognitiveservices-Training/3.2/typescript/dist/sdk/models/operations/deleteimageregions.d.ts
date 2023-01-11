import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteImageRegionsPathParams extends SpeakeasyBase {
    projectId: string;
}
export declare class DeleteImageRegionsQueryParams extends SpeakeasyBase {
    regionIds: string[];
}
export declare class DeleteImageRegionsRequest extends SpeakeasyBase {
    pathParams: DeleteImageRegionsPathParams;
    queryParams: DeleteImageRegionsQueryParams;
}
export declare class DeleteImageRegionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
