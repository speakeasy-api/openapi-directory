import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostRemovebgRequests extends SpeakeasyBase {
    removeBgJson?: shared.RemoveBgJson;
    removeBgJson1?: shared.RemoveBgJson;
    removeBgMultipart?: shared.RemoveBgMultipart;
}
export declare class PostRemovebgRequest extends SpeakeasyBase {
    request: PostRemovebgRequests;
}
export declare class PostRemovebgResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers: Record<string, string[]>;
    removeBgJsonResponse?: shared.RemoveBgJsonResponse;
    statusCode: number;
    postRemovebg200ImageWildcardBinaryString?: Uint8Array;
}
