import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateEuaRequestsInput extends SpeakeasyBase {
    endUserAgreement?: shared.EndUserAgreementInput;
    endUserAgreement1?: shared.EndUserAgreementInput;
    endUserAgreement2?: shared.EndUserAgreementInput;
}
export declare class CreateEuaRequest extends SpeakeasyBase {
    request: CreateEuaRequestsInput;
}
export declare class CreateEuaResponse extends SpeakeasyBase {
    contentType: string;
    endUserAgreement?: shared.EndUserAgreement;
    statusCode: number;
}
