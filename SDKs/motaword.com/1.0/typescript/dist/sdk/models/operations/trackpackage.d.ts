import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TrackPackagePathParams extends SpeakeasyBase {
    id: number;
}
export declare class TrackPackageQueryParams extends SpeakeasyBase {
    key?: string;
}
export declare class TrackPackageRequest extends SpeakeasyBase {
    pathParams: TrackPackagePathParams;
    queryParams: TrackPackageQueryParams;
}
export declare class TrackPackageResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    packageStatus?: shared.PackageStatus;
    statusCode: number;
}
