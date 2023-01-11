import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetLocationPathParams extends SpeakeasyBase {
    groupId: string;
    locationId: string;
}
export declare class GetLocationRequest extends SpeakeasyBase {
    pathParams: GetLocationPathParams;
}
export declare class GetLocationResponse extends SpeakeasyBase {
    contentType: string;
    locationResult?: shared.LocationResult;
    statusCode: number;
}
