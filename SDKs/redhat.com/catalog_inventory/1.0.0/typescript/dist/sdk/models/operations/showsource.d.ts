import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ShowSourceRequest extends SpeakeasyBase {
    /**
     * ID of the resource
     */
    id: string;
}
export declare class ShowSourceResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Not found
     */
    errorNotFound?: shared.ErrorNotFound;
    /**
     * Source info
     */
    source?: shared.Source;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
