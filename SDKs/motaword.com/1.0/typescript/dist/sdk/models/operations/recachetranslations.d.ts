import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RecacheTranslationsRequest extends SpeakeasyBase {
    /**
     * Continuous Project File ID
     */
    fileId?: number;
    /**
     * Locale
     */
    locale?: string;
    /**
     * Project ID
     */
    projectId: number;
}
export declare class RecacheTranslationsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Operation response
     */
    operationStatus?: shared.OperationStatus;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
