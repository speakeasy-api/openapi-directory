import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetLanguagesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * A list of supported languages
     */
    languages?: shared.Language[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
