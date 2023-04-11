import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PackageUpdateStatusRequest extends SpeakeasyBase {
    /**
     * package Id
     */
    packageId?: number;
    /**
     * status : 1 activate, 2 : deactivate
     */
    status?: number;
    /**
     * Status updated User
     */
    userName?: string;
}
export declare class PackageUpdateStatusResponse extends SpeakeasyBase {
    apiException?: shared.ApiException;
    contentType: string;
    /**
     * status 1 : success, status 404 : package not found, status -2: package already in use
     */
    defaultResponseDTOOfBoolean?: shared.DefaultResponseDTOOfBoolean;
    defaultResponseDTOOfString?: shared.DefaultResponseDTOOfString;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
