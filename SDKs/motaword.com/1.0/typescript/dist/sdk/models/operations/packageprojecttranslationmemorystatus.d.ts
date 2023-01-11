import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PackageProjectTranslationMemoryStatusPathParams extends SpeakeasyBase {
    projectId: number;
}
export declare class PackageProjectTranslationMemoryStatusQueryParams extends SpeakeasyBase {
    asyncRequestKey: string;
}
export declare class PackageProjectTranslationMemoryStatusRequest extends SpeakeasyBase {
    pathParams: PackageProjectTranslationMemoryStatusPathParams;
    queryParams: PackageProjectTranslationMemoryStatusQueryParams;
}
export declare class PackageProjectTranslationMemoryStatusResponse extends SpeakeasyBase {
    asyncOperationStatus?: shared.AsyncOperationStatus;
    contentType: string;
    statusCode: number;
}
