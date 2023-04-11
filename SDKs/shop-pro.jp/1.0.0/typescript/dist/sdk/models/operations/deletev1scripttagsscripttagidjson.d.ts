import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteV1ScriptTagsScriptTagIdJsonSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class DeleteV1ScriptTagsScriptTagIdJsonRequest extends SpeakeasyBase {
    /**
     * スクリプトタグID
     */
    scriptTagId: number;
}
export declare class DeleteV1ScriptTagsScriptTagIdJsonResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
