import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DcimConsolePortTemplatesDeleteRequest extends SpeakeasyBase {
    /**
     * A unique integer value identifying this console port template.
     */
    id: number;
}
export declare class DcimConsolePortTemplatesDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
