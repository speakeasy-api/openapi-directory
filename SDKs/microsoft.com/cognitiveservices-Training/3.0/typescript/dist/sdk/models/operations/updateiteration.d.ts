import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateIterationPathParams extends SpeakeasyBase {
    iterationId: string;
    projectId: string;
}
export declare class UpdateIterationHeaders extends SpeakeasyBase {
    trainingKey: string;
}
export declare class UpdateIterationRequestsInput extends SpeakeasyBase {
    applicationXML: Uint8Array;
    iteration?: shared.IterationInput;
    iteration1?: shared.IterationInput;
    textXML: Uint8Array;
}
export declare class UpdateIterationRequest extends SpeakeasyBase {
    pathParams: UpdateIterationPathParams;
    headers: UpdateIterationHeaders;
    request: UpdateIterationRequestsInput;
}
export declare class UpdateIterationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    customVisionError?: shared.CustomVisionError;
    iteration?: shared.Iteration;
    statusCode: number;
}
