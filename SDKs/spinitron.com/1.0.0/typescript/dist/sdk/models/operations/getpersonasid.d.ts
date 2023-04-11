import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetPersonasIdRequest extends SpeakeasyBase {
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
export declare class GetPersonasIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * Persona not found
     */
    error?: shared.ErrorT;
    /**
     * The Persona
     */
    persona?: shared.Persona;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
