import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateEditorInstanceSecurity extends SpeakeasyBase {
    customerAccessCode: shared.SchemeCustomerAccessCode;
}
export declare class UpdateEditorInstanceRequest extends SpeakeasyBase {
    request?: shared.UpdateVideoEditorRequest;
    security: UpdateEditorInstanceSecurity;
}
export declare class UpdateEditorInstanceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
