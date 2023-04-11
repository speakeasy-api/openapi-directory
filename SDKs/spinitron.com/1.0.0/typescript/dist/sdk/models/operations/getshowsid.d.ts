import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetShowsIdRequest extends SpeakeasyBase {
    /**
     * Allows to select extra fields
     */
    expand?: string[];
    /**
     * Allows to select only needed fields
     */
    fields?: string[];
    id: number;
}
export declare class GetShowsIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * Show not found or too old
     */
    error?: shared.ErrorT;
    /**
     * The Show
     */
    show?: shared.Show;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
