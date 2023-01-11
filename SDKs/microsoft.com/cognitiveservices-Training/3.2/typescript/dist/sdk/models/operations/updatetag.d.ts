import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateTagPathParams extends SpeakeasyBase {
    projectId: string;
    tagId: string;
}
export declare class UpdateTagRequestsInput extends SpeakeasyBase {
    applicationXML: Uint8Array;
    tag?: shared.TagInput;
    tag1?: shared.TagInput;
    textXML: Uint8Array;
}
export declare class UpdateTagRequest extends SpeakeasyBase {
    pathParams: UpdateTagPathParams;
    request: UpdateTagRequestsInput;
}
export declare class UpdateTagResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    customVisionError?: shared.CustomVisionError;
    statusCode: number;
    tag?: shared.Tag;
}
