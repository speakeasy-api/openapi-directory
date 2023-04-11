import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DcimFrontPortTemplatesUpdateRequest extends SpeakeasyBase {
    writableFrontPortTemplateInput: shared.WritableFrontPortTemplateInput;
    /**
     * A unique integer value identifying this front port template.
     */
    id: number;
}
export declare class DcimFrontPortTemplatesUpdateResponse extends SpeakeasyBase {
    contentType: string;
    frontPortTemplate?: shared.FrontPortTemplate;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
