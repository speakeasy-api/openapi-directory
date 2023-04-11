import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GETSwaggerDocNameFormatRequest extends SpeakeasyBase {
    /**
     * Resource name of mounted API
     */
    name: string;
}
export declare class GETSwaggerDocNameFormatResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
