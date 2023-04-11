import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DcimPowerPortTemplatesReadRequest extends SpeakeasyBase {
    /**
     * A unique integer value identifying this power port template.
     */
    id: number;
}
export declare class DcimPowerPortTemplatesReadResponse extends SpeakeasyBase {
    contentType: string;
    powerPortTemplate?: shared.PowerPortTemplate;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
