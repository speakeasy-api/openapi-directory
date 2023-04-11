import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DcimRearPortTemplatesDeleteRequest extends SpeakeasyBase {
    /**
     * A unique integer value identifying this rear port template.
     */
    id: number;
}
export declare class DcimRearPortTemplatesDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
