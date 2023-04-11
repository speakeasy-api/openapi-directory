import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteScriptTagSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class DeleteScriptTagRequest extends SpeakeasyBase {
    /**
     * スクリプトタグID
     */
    scriptTagId: number;
}
export declare class DeleteScriptTagResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
