import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class VersionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Return the running Instance version information.
     */
    schemaNode?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
