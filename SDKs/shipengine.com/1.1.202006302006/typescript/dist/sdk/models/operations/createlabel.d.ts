import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateLabelRequest extends SpeakeasyBase {
    request: shared.CreateLabelRequestBodyInput;
}
export declare class CreateLabelResponseOutput extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    createLabelResponseBody?: shared.CreateLabelResponseBodyOutput;
    errorResponseBody?: shared.ErrorResponseBody;
}
