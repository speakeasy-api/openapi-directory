import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeletePredictionPathParams extends SpeakeasyBase {
    projectId: string;
}
export declare class DeletePredictionQueryParams extends SpeakeasyBase {
    ids: string[];
}
export declare class DeletePredictionRequest extends SpeakeasyBase {
    pathParams: DeletePredictionPathParams;
    queryParams: DeletePredictionQueryParams;
}
export declare class DeletePredictionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
