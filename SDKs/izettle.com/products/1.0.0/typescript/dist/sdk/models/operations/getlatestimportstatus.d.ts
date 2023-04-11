import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetLatestImportStatusSecurity extends SpeakeasyBase {
    zettleOauth: string;
}
export declare class GetLatestImportStatusRequest extends SpeakeasyBase {
    organizationUuid: string;
}
export declare class GetLatestImportStatusResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Import status
     */
    importResponse?: shared.ImportResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
