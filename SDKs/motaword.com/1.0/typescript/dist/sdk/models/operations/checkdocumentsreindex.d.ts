import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CheckDocumentsReindexQueryParams extends SpeakeasyBase {
    asyncRequestKey: string;
}
export declare class CheckDocumentsReindexRequest extends SpeakeasyBase {
    queryParams: CheckDocumentsReindexQueryParams;
}
export declare class CheckDocumentsReindexResponse extends SpeakeasyBase {
    asyncOperationStatus?: shared.AsyncOperationStatus;
    contentType: string;
    statusCode: number;
}
