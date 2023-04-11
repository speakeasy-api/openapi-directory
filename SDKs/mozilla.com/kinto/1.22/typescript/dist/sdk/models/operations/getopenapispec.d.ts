import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetOpenapiSpecResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Return an OpenAPI description of the running instance.
     */
    schemaNode?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
