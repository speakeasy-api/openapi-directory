import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteCompositionServerList: readonly ["https://video.twilio.com"];
export declare class DeleteCompositionSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteCompositionRequest extends SpeakeasyBase {
    /**
     * The SID of the Composition resource to delete.
     */
    sid: string;
}
export declare class DeleteCompositionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
