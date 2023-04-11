import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListGenresSecurity extends SpeakeasyBase {
    basic?: shared.SchemeBasic;
    customerAccessCode?: string;
}
export declare class ListGenresRequest extends SpeakeasyBase {
    /**
     * Which language the genres will be returned
     */
    language?: string;
}
export declare class ListGenresResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    genreList?: shared.GenreList;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
