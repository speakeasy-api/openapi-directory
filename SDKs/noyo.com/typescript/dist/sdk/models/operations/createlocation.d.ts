import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateLocationPathParams extends SpeakeasyBase {
    groupId: string;
}
export declare class CreateLocationRequest extends SpeakeasyBase {
    pathParams: CreateLocationPathParams;
    request: shared.LocationCreateRequest;
}
export declare class CreateLocationResponse extends SpeakeasyBase {
    contentType: string;
    locationResult?: shared.LocationResult;
    statusCode: number;
}
