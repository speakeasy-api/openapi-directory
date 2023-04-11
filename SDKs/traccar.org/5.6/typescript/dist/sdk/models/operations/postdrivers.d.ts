import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostDriversResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    driver?: shared.Driver;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
