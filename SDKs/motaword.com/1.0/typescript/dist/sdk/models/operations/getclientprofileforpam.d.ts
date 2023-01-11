import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetClientProfileForPamPathParams extends SpeakeasyBase {
    clientId: number;
}
export declare class GetClientProfileForPamRequest extends SpeakeasyBase {
    pathParams: GetClientProfileForPamPathParams;
}
export declare class GetClientProfileForPamResponse extends SpeakeasyBase {
    clientProfile?: shared.ClientProfile;
    contentType: string;
    error?: shared.ErrorT;
    statusCode: number;
}
