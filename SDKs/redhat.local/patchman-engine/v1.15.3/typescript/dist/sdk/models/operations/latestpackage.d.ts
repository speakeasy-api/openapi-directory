import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class LatestPackageSecurity extends SpeakeasyBase {
    rhIdentity: string;
}
export declare class LatestPackageRequest extends SpeakeasyBase {
    /**
     * package_name - latest, nevra - exact version
     */
    packageName: string;
}
export declare class LatestPackageResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    controllersPackageDetailResponse?: shared.ControllersPackageDetailResponse;
}
