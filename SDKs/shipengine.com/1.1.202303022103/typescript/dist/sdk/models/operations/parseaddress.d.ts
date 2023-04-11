import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ParseAddressResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The request contained errors.
     */
    errorResponseBody?: shared.ErrorResponseBody;
    /**
     * Returns the parsed address, as well as a confidence score and a list of all the entities that were recognized in the text.
     *
     * @remarks
     *
     */
    parseAddressResponseBody?: shared.ParseAddressResponseBody;
}
