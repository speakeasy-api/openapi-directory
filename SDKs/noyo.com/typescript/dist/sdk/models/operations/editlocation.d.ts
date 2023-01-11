import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EditLocationPathParams extends SpeakeasyBase {
    groupId: string;
    locationId: string;
    version: string;
}
export declare class EditLocationRequest extends SpeakeasyBase {
    pathParams: EditLocationPathParams;
    request: shared.LocationEditRequest;
}
export declare class EditLocationResponse extends SpeakeasyBase {
    contentType: string;
    locationResult?: shared.LocationResult;
    statusCode: number;
}
