import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AcceptEuaPathParams extends SpeakeasyBase {
    id: string;
}
export declare class AcceptEuaRequests extends SpeakeasyBase {
    enduserAcceptanceDetails?: shared.EnduserAcceptanceDetails;
    enduserAcceptanceDetails1?: shared.EnduserAcceptanceDetails;
    enduserAcceptanceDetails2?: shared.EnduserAcceptanceDetails;
}
export declare class AcceptEuaRequest extends SpeakeasyBase {
    pathParams: AcceptEuaPathParams;
    request: AcceptEuaRequests;
}
export declare class AcceptEuaResponse extends SpeakeasyBase {
    contentType: string;
    endUserAgreement?: shared.EndUserAgreement;
    statusCode: number;
}
