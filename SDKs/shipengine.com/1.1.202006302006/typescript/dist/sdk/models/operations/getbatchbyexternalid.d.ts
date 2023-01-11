import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetBatchByExternalIdPathParams extends SpeakeasyBase {
    externalBatchId: string;
}
export declare class GetBatchByExternalIdRequest extends SpeakeasyBase {
    pathParams: GetBatchByExternalIdPathParams;
}
export declare class GetBatchByExternalIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    errorResponseBody?: shared.ErrorResponseBody;
    getBatchByExternalIdResponseBody?: shared.GetBatchByExternalIdResponseBody;
}
