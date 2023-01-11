import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListGenresSecurity extends SpeakeasyBase {
    basic?: shared.SchemeBasic;
    customerAccessCode?: shared.SchemeCustomerAccessCode;
}
export declare class ListGenresRequest extends SpeakeasyBase {
    security: ListGenresSecurity;
}
export declare class ListGenresResponse extends SpeakeasyBase {
    contentType: string;
    genreList?: shared.GenreList;
    statusCode: number;
}
