import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteIterationPathParams extends SpeakeasyBase {
    iterationId: string;
    projectId: string;
}
export declare class DeleteIterationRequest extends SpeakeasyBase {
    pathParams: DeleteIterationPathParams;
}
export declare class DeleteIterationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
