import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RetrieveEuaByIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class RetrieveEuaByIdRequest extends SpeakeasyBase {
    pathParams: RetrieveEuaByIdPathParams;
}
export declare class RetrieveEuaByIdResponse extends SpeakeasyBase {
    contentType: string;
    endUserAgreement?: shared.EndUserAgreement;
    statusCode: number;
}
