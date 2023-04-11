import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSpinsIdRequest extends SpeakeasyBase {
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
export declare class GetSpinsIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * Spin not found
     */
    error?: shared.ErrorT;
    /**
     * The spin
     */
    spin?: shared.Spin;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
