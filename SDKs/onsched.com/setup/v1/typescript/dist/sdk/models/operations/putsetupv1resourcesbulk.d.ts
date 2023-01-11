import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutSetupV1ResourcesBulkQueryParams extends SpeakeasyBase {
    googleAuthReturnUrl?: string;
    outlookAuthReturnUrl?: string;
}
export declare class PutSetupV1ResourcesBulkRequests extends SpeakeasyBase {
    resourcesUpdateModel?: Record<string, any>;
    resourcesUpdateModel1?: Record<string, any>;
    resourcesUpdateModel2?: Record<string, any>;
    resourcesUpdateModel3?: Record<string, any>;
}
export declare class PutSetupV1ResourcesBulkRequest extends SpeakeasyBase {
    queryParams: PutSetupV1ResourcesBulkQueryParams;
    request?: PutSetupV1ResourcesBulkRequests;
}
export declare class PutSetupV1ResourcesBulkResponse extends SpeakeasyBase {
    contentType: string;
    resourceViewModels?: shared.ResourceViewModel[];
    statusCode: number;
}
