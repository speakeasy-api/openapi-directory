import { SpeakeasyBase } from "../../../internal/utils";
export declare class UnpublishIterationPathParams extends SpeakeasyBase {
    iterationId: string;
    projectId: string;
}
export declare class UnpublishIterationRequest extends SpeakeasyBase {
    pathParams: UnpublishIterationPathParams;
}
export declare class UnpublishIterationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
