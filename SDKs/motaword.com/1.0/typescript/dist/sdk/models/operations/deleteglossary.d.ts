import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteGlossaryPathParams extends SpeakeasyBase {
    glossaryId: number;
    projectId: number;
}
export declare class DeleteGlossaryRequest extends SpeakeasyBase {
    pathParams: DeleteGlossaryPathParams;
}
export declare class DeleteGlossaryResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    operationStatus?: shared.OperationStatus;
    statusCode: number;
}
