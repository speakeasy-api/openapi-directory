import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PackageDeleteRequest extends SpeakeasyBase {
    /**
     * primary key of package entity
     */
    packageId?: number;
}
export declare class PackageDeleteResponse extends SpeakeasyBase {
    apiException?: shared.ApiException;
    contentType: string;
    /**
     * status 1  : success, status 404 : package not found, status -2: package already in use
     */
    defaultResponseDTOOfBoolean?: shared.DefaultResponseDTOOfBoolean;
    defaultResponseDTOOfString?: shared.DefaultResponseDTOOfString;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
