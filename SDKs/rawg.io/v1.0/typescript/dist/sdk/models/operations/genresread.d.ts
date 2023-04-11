import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GenresReadRequest extends SpeakeasyBase {
    /**
     * A unique integer value identifying this Genre.
     */
    id: number;
}
export declare class GenresReadResponse extends SpeakeasyBase {
    contentType: string;
    genreSingle?: shared.GenreSingle;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
