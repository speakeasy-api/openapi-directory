import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PackageGetRequest extends SpeakeasyBase {
    /**
     * primary key of package entity
     */
    packageId?: number;
}
export declare class PackageGetResponse extends SpeakeasyBase {
    apiException?: shared.ApiException;
    contentType: string;
    /**
     * all the fields that related to the package
     */
    defaultResponseDTOOfPackageDTO?: shared.DefaultResponseDTOOfPackageDTO;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
