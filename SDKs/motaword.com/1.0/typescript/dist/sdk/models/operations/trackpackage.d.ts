import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TrackPackageRequest extends SpeakeasyBase {
    /**
     * Project ID
     */
    id: number;
    /**
     * This is the package tracking key provided in the response of a /package call.
     */
    key?: string;
}
export declare class TrackPackageResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * ProjectNotLaunchedYet
     */
    error?: shared.ErrorT;
    /**
     * Current status of packaging process.
     */
    packageStatus?: shared.PackageStatus;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
