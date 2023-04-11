import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ContributeResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Return open source contributing information.
     */
    schemaNode?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
