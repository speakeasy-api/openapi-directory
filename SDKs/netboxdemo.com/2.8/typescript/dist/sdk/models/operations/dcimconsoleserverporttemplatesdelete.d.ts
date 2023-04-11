import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DcimConsoleServerPortTemplatesDeleteRequest extends SpeakeasyBase {
    /**
     * A unique integer value identifying this console server port template.
     */
    id: number;
}
export declare class DcimConsoleServerPortTemplatesDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
