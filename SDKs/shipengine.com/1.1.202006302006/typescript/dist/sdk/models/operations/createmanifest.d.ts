import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateManifestRequest extends SpeakeasyBase {
    request: any;
}
export declare class CreateManifestResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    createManifestResponseBody?: shared.CreateManifestResponseBody;
    errorResponseBody?: shared.ErrorResponseBody;
}
