import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RegisterEditorInstanceSecurity extends SpeakeasyBase {
    customerAccessCode: shared.SchemeCustomerAccessCode;
}
export declare class RegisterEditorInstanceRequest extends SpeakeasyBase {
    request?: shared.RegisterVideoEditorRequest;
    security: RegisterEditorInstanceSecurity;
}
export declare class RegisterEditorInstanceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
