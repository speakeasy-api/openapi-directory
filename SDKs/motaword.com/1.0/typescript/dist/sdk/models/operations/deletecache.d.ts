import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteCachePathParams extends SpeakeasyBase {
    key: string;
}
export declare class DeleteCacheRequest extends SpeakeasyBase {
    pathParams: DeleteCachePathParams;
}
export declare class DeleteCacheResponse extends SpeakeasyBase {
    contentType: string;
    operationStatus?: shared.OperationStatus;
    statusCode: number;
}
