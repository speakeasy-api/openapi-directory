import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DcimFrontPortTemplatesDeleteRequest extends SpeakeasyBase {
    /**
     * A unique integer value identifying this front port template.
     */
    id: number;
}
export declare class DcimFrontPortTemplatesDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
