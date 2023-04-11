import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class FindAllScriptsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful operation
     */
    scripts?: shared.Script[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
