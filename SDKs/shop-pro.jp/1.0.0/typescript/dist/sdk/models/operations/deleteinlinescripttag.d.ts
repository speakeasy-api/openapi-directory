import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteInlineScriptTagSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class DeleteInlineScriptTagRequest extends SpeakeasyBase {
    /**
     * インラインスクリプトタグID
     */
    inlineScriptTagId: number;
}
export declare class DeleteInlineScriptTagResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
