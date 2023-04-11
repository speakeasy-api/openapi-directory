import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ImportLibraryV2Security extends SpeakeasyBase {
    zettleOauth: string;
}
export declare class ImportLibraryV2Request extends SpeakeasyBase {
    bulkImportRequest: shared.BulkImportRequest;
    organizationUuid: string;
}
export declare class ImportLibraryV2Response extends SpeakeasyBase {
    contentType: string;
    /**
     * Invalid request body
     */
    errorResponse?: shared.ErrorResponse;
    /**
     * Import status
     */
    importResponse?: shared.ImportResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
