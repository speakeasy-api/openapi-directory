import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteV2NotesIdJsonRequest extends SpeakeasyBase {
    /**
     * Note ID
     */
    id: string;
}
export declare class DeleteV2NotesIdJsonResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
