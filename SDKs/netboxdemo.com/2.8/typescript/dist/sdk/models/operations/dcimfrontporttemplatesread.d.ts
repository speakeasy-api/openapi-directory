import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DcimFrontPortTemplatesReadRequest extends SpeakeasyBase {
    /**
     * A unique integer value identifying this front port template.
     */
    id: number;
}
export declare class DcimFrontPortTemplatesReadResponse extends SpeakeasyBase {
    contentType: string;
    frontPortTemplate?: shared.FrontPortTemplate;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
